"use client";

import { FormEvent, useEffect, useRef, useState } from "react";

type Message = { from: "assistant" | "user"; text: string };
type Mode = "home" | "chat" | "booking" | "submitting" | "success";

type BookingForm = {
  client_name: string;
  phone: string;
  pet_name: string;
  species: string;
  service: string;
  main_concern: string;
  preferred_date: string;
  preferred_time: string;
};

const EMPTY_BOOKING: BookingForm = {
  client_name: "",
  phone: "",
  pet_name: "",
  species: "",
  service: "",
  main_concern: "",
  preferred_date: "",
  preferred_time: "",
};

const QUICK_ACTIONS = [
  { label: "Book an appointment", prompt: "I'd like to book an appointment." },
  { label: "Vaccinations", prompt: "I have a question about vaccinations." },
  { label: "Grooming", prompt: "I have a question about grooming." },
  { label: "Cat boarding", prompt: "I have a question about cat boarding." },
  { label: "Pet shop", prompt: "I have a question about the pet shop." },
  { label: "Ask a question", prompt: "" },
];

const SERVICES = [
  "Veterinary Consultation",
  "Vaccination",
  "Grooming",
  "Dental Cleaning",
  "Surgery",
  "Holistic / Wellness",
  "Emergency",
  "Other",
];

function MessageIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 18.75H5.625A2.625 2.625 0 013 16.125v-8.25A2.625 2.625 0 015.625 5.25h12.75A2.625 2.625 0 0121 7.875v8.25a2.625 2.625 0 01-2.625 2.625H12l-4.5 3v-3z" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-5 w-5" aria-hidden="true">
      <path strokeLinecap="round" d="M6 6l12 12M18 6L6 18" />
    </svg>
  );
}

function SendIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-5 w-5" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 4l16 8-16 8 3-8-3-8zm3 8h13" />
    </svg>
  );
}

export default function PremiumAssistant() {
  const [open, setOpen] = useState(false);
  const [mode, setMode] = useState<Mode>("home");
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [booking, setBooking] = useState<BookingForm>(EMPTY_BOOKING);
  const [error, setError] = useState<string | null>(null);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading, mode]);

  async function sendMessage(text: string) {
    const trimmed = text.trim();
    if (!trimmed || loading) return;

    const nextMessages = [...messages, { from: "user" as const, text: trimmed }];
    setMessages(nextMessages);
    setInput("");
    setMode("chat");
    setLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: nextMessages.map((message) => ({
            role: message.from === "user" ? "user" : "assistant",
            content: message.text,
          })),
        }),
      });
      const data = await response.json();
      setMessages((current) => [
        ...current,
        {
          from: "assistant",
          text: data.message ?? "Our assistant is temporarily unavailable. Please contact reception on WhatsApp.",
        },
      ]);
    } catch {
      setMessages((current) => [
        ...current,
        { from: "assistant", text: "Our assistant is temporarily unavailable. Please contact reception on WhatsApp." },
      ]);
    } finally {
      setLoading(false);
    }
  }

  function selectQuickAction(label: string, prompt: string) {
    if (label === "Book an appointment") {
      setMode("booking");
      return;
    }
    if (label === "Ask a question") {
      setMode("chat");
      return;
    }
    void sendMessage(prompt);
  }

  async function submitBooking(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError(null);

    if (!booking.client_name || !booking.phone || !booking.service || !booking.preferred_date || !booking.preferred_time) {
      setError("Please complete all required fields.");
      return;
    }

    setMode("submitting");
    try {
      const response = await fetch("/api/bookings/create", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...booking,
          phone: `971${booking.phone.replace(/\D/g, "").replace(/^0+/, "")}`,
          alert_type: "new_booking",
          priority: "normal",
        }),
      });
      const data = await response.json().catch(() => ({}));
      if (!response.ok) throw new Error(data.error ?? "Unable to submit your booking request.");
      setMode("success");
    } catch (submissionError) {
      setError(submissionError instanceof Error ? submissionError.message : "Unable to submit your booking request.");
      setMode("booking");
    }
  }

  const today = new Date().toISOString().split("T")[0];

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen((current) => !current)}
        aria-label={open ? "Close The Pet Doctor assistant" : "Ask The Pet Doctor"}
        aria-expanded={open}
        className="group flex min-h-14 items-center gap-3 rounded-2xl border border-[#DDEBE8] bg-white px-4 py-3 text-left text-[#2F3A3A] shadow-[0_14px_34px_rgba(47,58,58,0.14)] transition duration-200 hover:-translate-y-0.5 hover:border-[#7BB5AD] hover:bg-[#F5FBFA] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#7BB5AD]/25 motion-reduce:transform-none sm:min-w-[218px]"
      >
        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#EDF7F5] text-[#5F9E96]">
          {open ? <CloseIcon /> : <MessageIcon />}
        </span>
        <span className="hidden sm:block">
          <span className="block text-sm font-semibold leading-tight">Ask The Pet Doctor</span>
          <span className="mt-0.5 block text-xs text-[#6D7777]">Questions, services and bookings</span>
        </span>
      </button>

      {open && (
        <section
          role="dialog"
          aria-modal="false"
          aria-label="The Pet Doctor assistant"
          className="fixed bottom-40 right-4 z-[60] flex h-[min(680px,calc(100vh-11rem))] w-[calc(100vw-2rem)] max-w-[410px] flex-col overflow-hidden rounded-[24px] border border-[#DDEBE8] bg-white shadow-[0_28px_80px_rgba(47,58,58,0.22)] sm:bottom-44 sm:right-6"
        >
          <header className="flex items-center gap-3 border-b border-[#E8EFED] bg-[#FDF8F9] px-5 py-4">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-[#5F9E96] shadow-sm ring-1 ring-[#DDEBE8]">
              <MessageIcon />
            </span>
            <div>
              <p className="text-sm font-semibold text-[#2F3A3A]">The Pet Doctor</p>
              <p className="mt-0.5 text-xs text-[#6D7777]">Pet care and booking assistance</p>
            </div>
            <button type="button" onClick={() => setOpen(false)} className="ml-auto rounded-xl p-2 text-[#6D7777] transition hover:bg-white hover:text-[#2F3A3A] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7BB5AD]" aria-label="Close assistant">
              <CloseIcon />
            </button>
          </header>

          <div className="flex-1 overflow-y-auto bg-[#FBFCFC] px-5 py-5">
            {mode === "home" && (
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#7BB5AD]">Welcome</p>
                <h2 className="mt-2 text-2xl font-semibold tracking-[-0.02em] text-[#2F3A3A]">How can we help today?</h2>
                <p className="mt-2 text-sm leading-6 text-[#6D7777]">Choose an option below or ask us a question.</p>
                <div className="mt-6 grid gap-2.5">
                  {QUICK_ACTIONS.map((action) => (
                    <button key={action.label} type="button" onClick={() => selectQuickAction(action.label, action.prompt)} className="flex min-h-12 items-center justify-between rounded-2xl border border-[#E1EAE8] bg-white px-4 py-3 text-left text-sm font-medium text-[#2F3A3A] shadow-sm transition duration-200 hover:-translate-y-0.5 hover:border-[#7BB5AD] hover:bg-[#F5FBFA] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7BB5AD]/40 motion-reduce:transform-none">
                      {action.label}
                      <span aria-hidden="true" className="text-[#7BB5AD]">→</span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {mode === "chat" && (
              <div className="space-y-3">
                {messages.length === 0 && (
                  <div className="rounded-2xl border border-[#E1EAE8] bg-white p-4 text-sm leading-6 text-[#566161] shadow-sm">Tell us what you need help with. For urgent concerns, please contact reception directly on WhatsApp.</div>
                )}
                {messages.map((message, index) => (
                  <div key={`${message.from}-${index}`} className={`flex ${message.from === "user" ? "justify-end" : "justify-start"}`}>
                    <div className={`max-w-[86%] rounded-2xl px-4 py-3 text-sm leading-6 ${message.from === "user" ? "rounded-br-md bg-[#7BB5AD] text-white" : "rounded-bl-md border border-[#E1EAE8] bg-white text-[#3F4A4A] shadow-sm"}`}>{message.text}</div>
                  </div>
                ))}
                {loading && <div className="w-fit rounded-2xl rounded-bl-md border border-[#E1EAE8] bg-white px-4 py-3 text-sm text-[#6D7777] shadow-sm">Preparing a response…</div>}
              </div>
            )}

            {(mode === "booking" || mode === "submitting") && (
              <form onSubmit={submitBooking} className="space-y-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#7BB5AD]">Appointment request</p>
                  <h2 className="mt-2 text-xl font-semibold text-[#2F3A3A]">Tell us what you need</h2>
                  <p className="mt-2 text-sm leading-6 text-[#6D7777]">Reception will confirm availability with you.</p>
                </div>
                {error && <p className="rounded-xl border border-[#F0CDD8] bg-[#FDF3F6] px-3 py-2 text-sm text-[#9F5069]">{error}</p>}
                <input required placeholder="Your name" value={booking.client_name} onChange={(e) => setBooking({ ...booking, client_name: e.target.value })} className="w-full rounded-xl border border-[#DDE5E3] bg-white px-3.5 py-3 text-sm text-[#2F3A3A] outline-none transition focus:border-[#7BB5AD] focus:ring-4 focus:ring-[#7BB5AD]/15" />
                <div className="flex overflow-hidden rounded-xl border border-[#DDE5E3] bg-white focus-within:border-[#7BB5AD] focus-within:ring-4 focus-within:ring-[#7BB5AD]/15"><span className="flex items-center border-r border-[#DDE5E3] bg-[#F7F9F8] px-3 text-sm text-[#6D7777]">+971</span><input required type="tel" placeholder="50 123 4567" value={booking.phone} onChange={(e) => setBooking({ ...booking, phone: e.target.value })} className="min-w-0 flex-1 px-3.5 py-3 text-sm text-[#2F3A3A] outline-none" /></div>
                <input placeholder="Pet's name" value={booking.pet_name} onChange={(e) => setBooking({ ...booking, pet_name: e.target.value })} className="w-full rounded-xl border border-[#DDE5E3] bg-white px-3.5 py-3 text-sm outline-none transition focus:border-[#7BB5AD] focus:ring-4 focus:ring-[#7BB5AD]/15" />
                <div className="grid grid-cols-2 gap-3"><select value={booking.species} onChange={(e) => setBooking({ ...booking, species: e.target.value })} className="rounded-xl border border-[#DDE5E3] bg-white px-3 py-3 text-sm outline-none focus:border-[#7BB5AD]"><option value="">Pet type</option><option>Cat</option><option>Dog</option><option>Rabbit</option><option>Bird</option><option>Other</option></select><select required value={booking.service} onChange={(e) => setBooking({ ...booking, service: e.target.value })} className="rounded-xl border border-[#DDE5E3] bg-white px-3 py-3 text-sm outline-none focus:border-[#7BB5AD]"><option value="">Service *</option>{SERVICES.map((service) => <option key={service}>{service}</option>)}</select></div>
                <textarea rows={3} placeholder="Reason for the visit (optional)" value={booking.main_concern} onChange={(e) => setBooking({ ...booking, main_concern: e.target.value })} className="w-full resize-none rounded-xl border border-[#DDE5E3] bg-white px-3.5 py-3 text-sm outline-none transition focus:border-[#7BB5AD] focus:ring-4 focus:ring-[#7BB5AD]/15" />
                <div className="grid grid-cols-2 gap-3"><input required type="date" min={today} value={booking.preferred_date} onChange={(e) => setBooking({ ...booking, preferred_date: e.target.value })} className="rounded-xl border border-[#DDE5E3] bg-white px-3 py-3 text-sm outline-none focus:border-[#7BB5AD]" /><select required value={booking.preferred_time} onChange={(e) => setBooking({ ...booking, preferred_time: e.target.value })} className="rounded-xl border border-[#DDE5E3] bg-white px-3 py-3 text-sm outline-none focus:border-[#7BB5AD]"><option value="">Preferred time</option><option>Morning</option><option>Afternoon</option><option>Evening</option></select></div>
                <button disabled={mode === "submitting"} className="w-full rounded-xl bg-[#7BB5AD] px-4 py-3 text-sm font-semibold text-white transition hover:bg-[#679F98] disabled:cursor-wait disabled:opacity-70">{mode === "submitting" ? "Sending request…" : "Request appointment"}</button>
              </form>
            )}

            {mode === "success" && (
              <div className="flex h-full flex-col items-center justify-center text-center">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#EDF7F5] text-2xl text-[#5F9E96]">✓</div>
                <h2 className="mt-5 text-xl font-semibold text-[#2F3A3A]">Request received</h2>
                <p className="mt-2 max-w-xs text-sm leading-6 text-[#6D7777]">Reception will contact you on WhatsApp to confirm the appointment.</p>
              </div>
            )}
            <div ref={bottomRef} />
          </div>

          {mode === "chat" && (
            <form onSubmit={(event) => { event.preventDefault(); void sendMessage(input); }} className="flex gap-2 border-t border-[#E8EFED] bg-white p-3">
              <input value={input} onChange={(event) => setInput(event.target.value)} placeholder="Ask The Pet Doctor…" className="min-w-0 flex-1 rounded-xl border border-[#DDE5E3] bg-[#FBFCFC] px-3.5 py-3 text-sm text-[#2F3A3A] outline-none transition focus:border-[#7BB5AD] focus:ring-4 focus:ring-[#7BB5AD]/15" />
              <button type="submit" disabled={!input.trim() || loading} aria-label="Send message" className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#7BB5AD] text-white transition hover:bg-[#679F98] disabled:cursor-not-allowed disabled:opacity-40"><SendIcon /></button>
            </form>
          )}

          {mode !== "home" && mode !== "submitting" && mode !== "success" && (
            <button type="button" onClick={() => { setMode("home"); setError(null); }} className="border-t border-[#E8EFED] bg-white px-4 py-3 text-sm font-medium text-[#5F9E96] transition hover:bg-[#F5FBFA]">Back to options</button>
          )}
        </section>
      )}
    </>
  );
}
