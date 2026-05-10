"use client";

import { useState, useEffect, useRef } from "react";

type Step =
  | "chat"
  | "ask_service"
  | "ask_pet_name"
  | "ask_species"
  | "ask_concern"
  | "form"
  | "submitting"
  | "success";

type Message = { from: "bot" | "user"; text: string };

type FormData = {
  client_name: string;
  phone: string;
  pet_name: string;
  species: string;
  service: string;
  main_concern: string;
  preferred_date: string;
  preferred_time: string;
};

const EMPTY_FORM: FormData = {
  client_name: "",
  phone: "",
  pet_name: "",
  species: "",
  service: "",
  main_concern: "",
  preferred_date: "",
  preferred_time: "",
};

const SERVICES = [
  { label: "Veterinary Consultation", value: "Veterinary Consultation" },
  { label: "Vaccination",              value: "Vaccination" },
  { label: "Grooming",                value: "Grooming" },
  { label: "Dental Cleaning",         value: "Dental Cleaning" },
  { label: "Surgery",                 value: "Surgery" },
  { label: "Holistic / Wellness",     value: "Holistic / Wellness" },
  { label: "Emergency",               value: "Emergency" },
  { label: "Other",                   value: "Other" },
];

const SPECIES = ["Dog", "Cat", "Rabbit", "Bird", "Reptile", "Other"];

const FAQS: Record<string, string> = {
  "Opening hours": "We're open Saturday to Thursday, 9AM – 8PM. Fridays by appointment only.",
  "Location": "We're located in Sharjah, UAE. Send us a WhatsApp and we'll share the exact pin!",
  "Do you treat exotic pets?": "Yes! We treat dogs, cats, rabbits, birds, reptiles, and more exotic pets.",
  "Do I need an appointment?": "Appointments are preferred but walk-ins are welcome based on availability.",
  "What are your fees?": "Consultation starts at AED 150. Prices vary by service. Contact us for a full price list.",
  "Emergency care": "Yes, we handle emergencies! Call or WhatsApp us immediately and we'll guide you.",
};

export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [step, setStep] = useState<Step>("chat");
  const [messages, setMessages] = useState<Message[]>([
    { from: "bot", text: "Hi there! 👋 Welcome to *The Pet Dr*.\n\nHow can I help you today?" },
  ]);
  const [form, setForm] = useState<FormData>(EMPTY_FORM);
  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [apiError, setApiError] = useState<string | null>(null);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, step]);

  function addBot(text: string) {
    setMessages((prev) => [...prev, { from: "bot", text }]);
  }
  function addUser(text: string) {
    setMessages((prev) => [...prev, { from: "user", text }]);
  }

  // ── Main menu handlers ─────────────────────────────────────────────────────

  function handleMainReply(reply: string) {
    addUser(reply);
    setTimeout(() => {
      if (reply === "Book an appointment") {
        addBot("Sure! Which service do you need? 👇");
        setStep("ask_service");
      } else if (reply === "Our services") {
        setStep("ask_service");
      } else if (reply === "FAQs") {
        addBot("What would you like to know? 👇");
        setStep("chat"); // stays on chat, FAQ buttons shown
      } else if (reply === "Talk to us") {
        addBot("We'd love to chat! Reach us directly on WhatsApp. 💬");
      }
    }, 350);
  }

  // ── Service selected ───────────────────────────────────────────────────────

  function handleServiceSelect(service: string) {
    addUser(service);
    setForm((f) => ({ ...f, service }));

    // Emergency fast-track
    if (service === "Emergency") {
      setTimeout(() => {
        addBot(
          "For emergencies, please contact us immediately!\n\nClick the WhatsApp button below to reach us right now — do not wait for a booking confirmation."
        );
        setStep("chat");
      }, 350);
      return;
    }

    setTimeout(() => {
      addBot(`Great choice! \n\nWhat's your pet's name?`);
      setStep("ask_pet_name");
    }, 350);
  }

  // ── Pet name typed ─────────────────────────────────────────────────────────

  function handlePetNameSubmit(name: string) {
    if (!name.trim()) return;
    addUser(name.trim());
    setForm((f) => ({ ...f, pet_name: name.trim() }));
    setTimeout(() => {
      addBot(`Love that name! 😊\n\nWhat type of pet is ${name.trim()}?`);
      setStep("ask_species");
    }, 350);
  }

  // ── Species selected ───────────────────────────────────────────────────────

  function handleSpeciesSelect(raw: string) {
    const species = raw.replace(/^[^\s]+\s/, ""); // strip emoji
    addUser(raw);
    setForm((f) => ({ ...f, species }));
    setTimeout(() => {
      addBot(
        `Got it! Any specific concern or reason for the visit?\n\n(You can skip this if you prefer.)`
      );
      setStep("ask_concern");
    }, 350);
  }

  // ── Concern typed or skipped ───────────────────────────────────────────────

  function handleConcernSubmit(concern: string, skipped = false) {
    if (!skipped) addUser(concern.trim());
    setForm((f) => ({ ...f, main_concern: skipped ? "" : concern.trim() }));
    setTimeout(() => {
      addBot(
        `Perfect! Just a couple more details to confirm your booking. \n\nI've already filled in what I know — just add your name, number, and preferred time!`
      );
      setStep("form");
    }, 350);
  }

  // ── FAQ ────────────────────────────────────────────────────────────────────

  function handleFAQ(question: string) {
    addUser(question);
    setTimeout(() => {
      addBot(FAQS[question] ?? "Good question! Please reach us on WhatsApp for more details.");
      // After FAQ, offer to book
      setTimeout(() => {
        addBot("Is there anything else I can help with?");
      }, 800);
    }, 350);
  }

  // ── Form validation ────────────────────────────────────────────────────────

  function validate() {
    const e: Partial<FormData> = {};
    if (!form.client_name.trim()) e.client_name = "Required";
    if (!form.phone.trim() || !/^\d{7,12}$/.test(form.phone.replace(/\s/g, "")))
      e.phone = "Enter a valid number (e.g. 501234567)";
    if (!form.preferred_date) e.preferred_date = "Required";
    if (!form.preferred_time) e.preferred_time = "Required";
    setErrors(e);
    return Object.keys(e).length === 0;
  }

  // ── Submit ─────────────────────────────────────────────────────────────────

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setApiError(null);
    if (!validate()) return;

    setStep("submitting");

    const payload = {
      ...form,
      phone: `971${form.phone.replace(/^0+/, "")}`,
      alert_type: "new_booking",
      priority: "normal",
    };

    console.log("📤 Booking payload:", payload);

    try {
      const res = await fetch("/api/bookings/create", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      let json: { booking?: unknown; error?: string } = {};
      try { json = await res.json(); } catch { /* empty */ }

      console.log("📥 API response:", res.status, json);

      if (!res.ok) {
        setApiError(json.error ?? `HTTP ${res.status}`);
        setStep("form");
        return;
      }

      setStep("success");
      addBot(
        `All confirmed, ${form.client_name}! 🎉\n\n*${form.pet_name}* is booked for *${form.service}* on *${form.preferred_date}* at *${form.preferred_time}*.\n\nWe'll send you a WhatsApp confirmation shortly. See you soon! 🐾`
      );
    } catch (err) {
      console.error("❌ Fetch error:", err);
      setApiError("Network error. Please try again.");
      setStep("form");
    }
  }

  // ── Input state for pet name & concern steps ───────────────────────────────
  const [inputVal, setInputVal] = useState("");

  const today = new Date().toISOString().split("T")[0];

  return (
    <>
      {/* Floating button */}
      <button
        onClick={() => setOpen((o) => !o)}
        aria-label={open ? "Close chat" : "Open chat"}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-[#c9748f] text-white shadow-xl hover:bg-[#a85570] hover:scale-105 active:scale-95 transition-all duration-200 flex items-center justify-center"
      >
        {open ? (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-4 4-1-4z" />
          </svg>
        )}
      </button>

      {/* Chat window */}
      {open && (
        <div
          className="fixed bottom-24 right-6 z-50 w-[370px] max-w-[calc(100vw-2rem)] bg-white rounded-2xl shadow-2xl border border-gray-100 flex flex-col overflow-hidden"
          style={{ height: "600px" }}
        >
          {/* Header */}
          <div className="bg-gradient-to-r from-[#c9748f] to-[#a85570] px-5 py-4 flex items-center gap-3 flex-shrink-0">
            <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-lg">🐾</div>
            <div>
              <p className="text-white font-semibold text-sm leading-none">The Pet Dr</p>
              <p className="text-white/70 text-xs mt-0.5">Usually replies instantly</p>
            </div>
            <div className="ml-auto flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-green-400" />
              <span className="text-white/60 text-xs">Online</span>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto px-4 py-4 space-y-3 bg-gray-50/40">

            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.from === "user" ? "justify-end" : "justify-start"}`}>
                <div className={`max-w-[82%] px-4 py-2.5 rounded-2xl text-sm leading-relaxed whitespace-pre-line ${
                  msg.from === "user"
                    ? "bg-[#c9748f] text-white rounded-br-sm"
                    : "bg-white text-gray-800 rounded-bl-sm shadow-sm border border-gray-100"
                }`}>
                  {msg.text}
                </div>
              </div>
            ))}

            {/* ── Step: Service picker ── */}
            {(step === "ask_service") && (
              <div className="flex flex-col gap-2 pt-1">
                {SERVICES.map((s) => (
                  <button
                    key={s.value}
                    onClick={() => handleServiceSelect(s.value)}
                    className="text-left px-4 py-2.5 bg-white border border-gray-200 hover:border-[#c9748f] hover:bg-pink-50 hover:text-[#c9748f] rounded-xl text-sm font-medium transition-all duration-150 shadow-sm"
                  >
                    {s.label}
                  </button>
                ))}
              </div>
            )}

            {/* ── Step: Pet name input ── */}
            {step === "ask_pet_name" && (
              <div className="flex gap-2 pt-1">
                <input
                  autoFocus
                  type="text"
                  value={inputVal}
                  onChange={(e) => setInputVal(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      handlePetNameSubmit(inputVal);
                      setInputVal("");
                    }
                  }}
                  placeholder="Type pet's name..."
                  className="flex-1 border border-gray-200 rounded-xl px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#c9748f]/30 focus:border-[#c9748f]"
                />
                <button
                  onClick={() => { handlePetNameSubmit(inputVal); setInputVal(""); }}
                  className="px-4 py-2 bg-[#c9748f] text-white rounded-xl text-sm font-semibold hover:bg-[#a85570] transition-colors"
                >
                  →
                </button>
              </div>
            )}

            {/* ── Step: Species picker ── */}
            {step === "ask_species" && (
              <div className="flex flex-wrap gap-2 pt-1">
                {SPECIES.map((s) => (
                  <button
                    key={s}
                    onClick={() => handleSpeciesSelect(s)}
                    className="px-4 py-2 bg-white border border-gray-200 hover:border-[#c9748f] hover:bg-pink-50 hover:text-[#c9748f] rounded-full text-sm font-medium transition-all duration-150 shadow-sm"
                  >
                    {s}
                  </button>
                ))}
              </div>
            )}

            {/* ── Step: Concern input ── */}
            {step === "ask_concern" && (
              <div className="flex flex-col gap-2 pt-1">
                <div className="flex gap-2">
                  <input
                    autoFocus
                    type="text"
                    value={inputVal}
                    onChange={(e) => setInputVal(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        handleConcernSubmit(inputVal);
                        setInputVal("");
                      }
                    }}
                    placeholder="Describe the concern..."
                    className="flex-1 border border-gray-200 rounded-xl px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#c9748f]/30 focus:border-[#c9748f]"
                  />
                  <button
                    onClick={() => { handleConcernSubmit(inputVal); setInputVal(""); }}
                    className="px-4 py-2 bg-[#c9748f] text-white rounded-xl text-sm font-semibold hover:bg-[#a85570] transition-colors"
                  >
                    →
                  </button>
                </div>
                <button
                  onClick={() => { setInputVal(""); handleConcernSubmit("", true); }}
                  className="text-xs text-gray-400 hover:text-gray-600 transition-colors text-left"
                >
                  Skip →
                </button>
              </div>
            )}

            {/* ── Step: Booking form (pre-filled) ── */}
            {step === "form" && (
              <div className="bg-white rounded-2xl rounded-bl-sm shadow-sm border border-gray-100 p-4">
                <p className="text-sm font-semibold text-gray-800 mb-1">📋 Confirm Your Booking</p>

                {/* Pre-filled summary */}
                {(form.service || form.pet_name || form.species) && (
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {form.service && (
                      <span className="px-2.5 py-1 bg-pink-50 border border-pink-200 text-[#c9748f] text-xs font-medium rounded-full">
                        {form.service}
                      </span>
                    )}
                    {form.pet_name && (
                      <span className="px-2.5 py-1 bg-gray-50 border border-gray-200 text-gray-600 text-xs font-medium rounded-full">
                        🐾 {form.pet_name}
                      </span>
                    )}
                    {form.species && (
                      <span className="px-2.5 py-1 bg-gray-50 border border-gray-200 text-gray-600 text-xs font-medium rounded-full">
                        {form.species}
                      </span>
                    )}
                  </div>
                )}

                {apiError && (
                  <div className="mb-3 px-3 py-2 bg-red-50 border border-red-200 rounded-lg text-xs text-red-600">
                    ⚠️ {apiError}
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-3" noValidate>

                  {/* Client Name */}
                  <div>
                    <label className="text-xs font-medium text-gray-600 block mb-1">Your Name *</label>
                    <input
                      type="text"
                      value={form.client_name}
                      onChange={(e) => setForm({ ...form, client_name: e.target.value })}
                      placeholder="e.g. Ahmed Al Rashid"
                      className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#c9748f]/30 focus:border-[#c9748f]"
                    />
                    {errors.client_name && <p className="text-xs text-red-500 mt-1">{errors.client_name}</p>}
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="text-xs font-medium text-gray-600 block mb-1">WhatsApp Number *</label>
                    <div className="flex items-stretch border border-gray-200 rounded-lg overflow-hidden focus-within:ring-2 focus-within:ring-[#c9748f]/30 focus-within:border-[#c9748f]">
                      <span className="bg-gray-50 px-3 flex items-center text-xs text-gray-500 border-r border-gray-200 flex-shrink-0">+971</span>
                      <input
                        type="tel"
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        placeholder="501234567"
                        className="flex-1 px-3 py-2 text-sm focus:outline-none"
                      />
                    </div>
                    {errors.phone && <p className="text-xs text-red-500 mt-1">{errors.phone}</p>}
                  </div>

                  {/* Pet name — editable if empty */}
                  {!form.pet_name && (
                    <div>
                      <label className="text-xs font-medium text-gray-600 block mb-1">Pet&apos;s Name</label>
                      <input
                        type="text"
                        value={form.pet_name}
                        onChange={(e) => setForm({ ...form, pet_name: e.target.value })}
                        placeholder="e.g. Max"
                        className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#c9748f]/30 focus:border-[#c9748f]"
                      />
                    </div>
                  )}

                  {/* Service — editable if empty */}
                  {!form.service && (
                    <div>
                      <label className="text-xs font-medium text-gray-600 block mb-1">Service *</label>
                      <select
                        value={form.service}
                        onChange={(e) => setForm({ ...form, service: e.target.value })}
                        className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#c9748f]/30 focus:border-[#c9748f] bg-white"
                      >
                        <option value="">Select service</option>
                        {SERVICES.map((s) => (
                          <option key={s.value} value={s.value}>{s.value}</option>
                        ))}
                      </select>
                      {errors.service && <p className="text-xs text-red-500 mt-1">{errors.service}</p>}
                    </div>
                  )}

                  {/* Date & Time */}
                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <label className="text-xs font-medium text-gray-600 block mb-1">Date *</label>
                      <input
                        type="date"
                        value={form.preferred_date}
                        min={today}
                        onChange={(e) => setForm({ ...form, preferred_date: e.target.value })}
                        className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#c9748f]/30 focus:border-[#c9748f]"
                      />
                      {errors.preferred_date && <p className="text-xs text-red-500 mt-1">{errors.preferred_date}</p>}
                    </div>
                    <div>
                      <label className="text-xs font-medium text-gray-600 block mb-1">Time *</label>
                      <select
                        value={form.preferred_time}
                        onChange={(e) => setForm({ ...form, preferred_time: e.target.value })}
                        className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#c9748f]/30 focus:border-[#c9748f] bg-white"
                      >
                        <option value="">Time</option>
                        {["9:00 AM","10:00 AM","11:00 AM","12:00 PM","1:00 PM","2:00 PM","3:00 PM","4:00 PM","5:00 PM","6:00 PM"].map((t) => (
                          <option key={t} value={t}>{t}</option>
                        ))}
                      </select>
                      {errors.preferred_time && <p className="text-xs text-red-500 mt-1">{errors.preferred_time}</p>}
                    </div>
                  </div>

                  {/* Main concern — editable if empty */}
                  {!form.main_concern && (
                    <div>
                      <label className="text-xs font-medium text-gray-600 block mb-1">Main Concern <span className="text-gray-400 font-normal">(optional)</span></label>
                      <textarea
                        value={form.main_concern}
                        onChange={(e) => setForm({ ...form, main_concern: e.target.value })}
                        placeholder="Any additional notes..."
                        rows={2}
                        className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#c9748f]/30 focus:border-[#c9748f] resize-none"
                      />
                    </div>
                  )}

                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-[#c9748f] to-[#a85570] text-white py-2.5 rounded-xl text-sm font-semibold hover:opacity-90 active:scale-95 transition-all duration-200"
                  >
                    Confirm Booking 🐾
                  </button>

                  <a
                    href="https://wa.me/971500000000"
                    target="_blank"
                    rel="noreferrer"
                    className="w-full flex items-center justify-center gap-2 border border-gray-200 text-gray-500 py-2 rounded-xl text-xs font-medium hover:bg-gray-50 transition-colors"
                  >
                    <svg viewBox="0 0 24 24" fill="#25D366" className="w-4 h-4 flex-shrink-0">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                    Or message us on WhatsApp
                  </a>
                </form>
              </div>
            )}

            {/* Submitting */}
            {step === "submitting" && (
              <div className="flex justify-start">
                <div className="bg-white rounded-2xl rounded-bl-sm px-4 py-3 shadow-sm border border-gray-100 flex items-center gap-2 text-sm text-gray-500">
                  <span className="flex gap-1">
                    {[0, 150, 300].map((d) => (
                      <span key={d} className="w-2 h-2 rounded-full bg-[#c9748f] animate-bounce" style={{ animationDelay: `${d}ms` }} />
                    ))}
                  </span>
                  Sending booking...
                </div>
              </div>
            )}

            {/* Success — book again */}
            {step === "success" && (
              <div className="flex flex-wrap gap-2 pt-1">
                <button
                  onClick={() => {
                    setForm(EMPTY_FORM);
                    setErrors({});
                    setApiError(null);
                    setStep("ask_service");
                    addBot("Sure! Which service do you need this time? 👇");
                  }}
                  className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 text-xs font-medium rounded-full transition-colors"
                >
                  Book another appointment
                </button>
                <a
                  href="https://wa.me/971500000000"
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-2 bg-[#25D366] text-white text-xs font-semibold rounded-full hover:bg-[#20bc5a] transition-colors"
                >
                  💬 WhatsApp us
                </a>
              </div>
            )}

            <div ref={bottomRef} />
          </div>

          {/* Bottom quick replies — shown on chat & FAQ steps */}
          {step === "chat" && (
            <div className="px-4 py-3 border-t border-gray-100 bg-white flex flex-wrap gap-2 flex-shrink-0">
              {["Book an appointment", "Our services", "FAQs", "Talk to us"].map((r) => (
                <button
                  key={r}
                  onClick={() => handleMainReply(r)}
                  className="px-3 py-1.5 bg-gray-50 hover:bg-pink-50 border border-gray-200 hover:border-pink-200 hover:text-[#c9748f] text-gray-700 text-xs font-medium rounded-full transition-all duration-200"
                >
                  {r}
                </button>
              ))}

              {/* FAQ sub-buttons */}
              <div className="w-full border-t border-gray-100 pt-2 mt-1 flex flex-wrap gap-1.5">
                {Object.keys(FAQS).map((q) => (
                  <button
                    key={q}
                    onClick={() => handleFAQ(q)}
                    className="px-3 py-1 bg-gray-50 hover:bg-pink-50 border border-gray-100 hover:border-pink-200 hover:text-[#c9748f] text-gray-500 text-xs rounded-full transition-all duration-200"
                  >
                    {q}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Emergency sticky CTA */}
          {step !== "submitting" && step !== "success" && (
            <div className="px-4 py-2 bg-red-50 border-t border-red-100 flex items-center justify-between flex-shrink-0">
              <span className="text-xs text-red-500 font-medium">🚨 Emergency?</span>
              <a
                href="https://wa.me/971500000000"
                target="_blank"
                rel="noreferrer"
                className="text-xs font-semibold text-red-600 hover:text-red-800 transition-colors"
              >
                Contact us now →
              </a>
            </div>
          )}
        </div>
      )}
    </>
  );
}