// components/BookingChatbot.tsx
"use client";

import { useState, useEffect, useRef } from "react";

// ─── FLOW CONFIG ──────────────────────────────────────────────────────────────

type Step = {
  id: string;
  message: string;
  type: "options" | "text" | "tel";
  options?: string[];
  placeholder?: string;
};

const STEPS: Step[] = [
  {
    id: "service",
    message: "Hi there! 👋 I'm PetBot. Which service are you interested in booking?",
    type: "options",
    options: [
      "Veterinary Care",
      "Grooming Salon",
      "Pet Shop",
      "Holistic Regimens",
      "Dog Park & Pools",
    ],
  },
  {
    id: "pet_name",
    message: "Lovely choice! What's your pet's name?",
    type: "text",
    placeholder: "e.g. Max, Luna, Buddy...",
  },
  {
    id: "pet_type",
    message: "And what type of pet is {pet_name}?",
    type: "options",
    options: ["Dog", "Cat", "Rabbit", "Bird", "Exotic / Other"],
  },
  {
    id: "date",
    message: "Great! When would you like to come in?",
    type: "options",
    options: [
      "Today",
      "Tomorrow",
      "This week",
      "Next week",
      "I'll confirm later",
    ],
  },
  {
    id: "time",
    message: "What time works best for you?",
    type: "options",
    options: [
      "Morning (9am - 12pm)",
      "Afternoon (12pm - 4pm)",
      "Evening (4pm - 8pm)",
      "Flexible",
    ],
  },
  {
    id: "owner_name",
    message: "Almost done! What's your name?",
    type: "text",
    placeholder: "Your full name",
  },
  {
    id: "phone",
    message: "And your phone number? (So we can confirm your booking)",
    type: "tel",
    placeholder: "e.g. +971 50 123 4567",
  },
];

const WHATSAPP_NUMBER = "971500000000"; // Replace with real number

// ─── TYPES ────────────────────────────────────────────────────────────────────

type Message = {
  from: "bot" | "user";
  text: string;
};

type Answers = Record<string, string>;

// ─── HELPERS ─────────────────────────────────────────────────────────────────

function interpolate(text: string, answers: Answers): string {
  return text.replace(/\{(\w+)\}/g, (_, key) => answers[key] ?? "your pet");
}

function buildWhatsAppURL(answers: Answers): string {
  const lines = [
    "Hello ThePetDr! I'd like to book an appointment.",
    "",
    `*Service:* ${answers.service ?? "-"}`,
    `*Pet Name:* ${answers.pet_name ?? "-"}`,
    `*Pet Type:* ${answers.pet_type ?? "-"}`,
    `*Preferred Date:* ${answers.date ?? "-"}`,
    `*Preferred Time:* ${answers.time ?? "-"}`,
    `*My Name:* ${answers.owner_name ?? "-"}`,
    `*My Phone:* ${answers.phone ?? "-"}`,
    "",
    "Please confirm my appointment. Thank you! 😊",
  ];
  const msg = encodeURIComponent(lines.join("\n"));
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`;
}

// ─── COMPONENT ────────────────────────────────────────────────────────────────

export default function BookingChatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [answers, setAnswers] = useState<Answers>({});
  const [stepIndex, setStepIndex] = useState(0);
  const [inputValue, setInputValue] = useState("");
  const [done, setDone] = useState(false);
  const [shake, setShake] = useState(false);
  const [showBubble, setShowBubble] = useState(true);
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Auto-show promo bubble after 3s
  useEffect(() => {
    const t = setTimeout(() => setShowBubble(true), 3000);
    return () => clearTimeout(t);
  }, []);

  // Start conversation when opened
  useEffect(() => {
    if (open && messages.length === 0) {
      setTimeout(() => {
        setMessages([{ from: "bot", text: STEPS[0].message }]);
      }, 300);
    }
  }, [open, messages.length]);

  // Scroll to bottom on new message
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Focus input when step changes to text/tel
  useEffect(() => {
    const step = STEPS[stepIndex];
    if (step?.type !== "options") {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [stepIndex]);

  function handleAnswer(answer: string) {
    const step = STEPS[stepIndex];
    const newAnswers = { ...answers, [step.id]: answer };
    setAnswers(newAnswers);

    // Add user bubble
    setMessages((prev) => [...prev, { from: "user", text: answer }]);
    setInputValue("");

    const nextIndex = stepIndex + 1;

    if (nextIndex >= STEPS.length) {
      // Done - send summary bot message
      setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          {
            from: "bot",
            text: `Perfect, ${newAnswers.owner_name}! 🎉 Everything's ready. Tap the button below to send your booking to us on WhatsApp - we'll confirm within minutes!`,
          },
        ]);
        setDone(true);
      }, 500);
    } else {
      // Next bot message
      setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          {
            from: "bot",
            text: interpolate(STEPS[nextIndex].message, newAnswers),
          },
        ]);
        setStepIndex(nextIndex);
      }, 500);
    }
  }

  function handleTextSubmit() {
    const val = inputValue.trim();
    if (!val) {
      setShake(true);
      setTimeout(() => setShake(false), 500);
      return;
    }
    handleAnswer(val);
  }

  function handleRestart() {
    setMessages([]);
    setAnswers({});
    setStepIndex(0);
    setDone(false);
    setInputValue("");
    setTimeout(() => {
      setMessages([{ from: "bot", text: STEPS[0].message }]);
    }, 300);
  }

  const currentStep = STEPS[stepIndex];

  return (
    <>
      {/* ── FAB BUTTON ── */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
        {/* Promo bubble */}
        {showBubble && !open && (
          <div
            className="animate-fade-up bg-white rounded-2xl shadow-xl border border-gray-100 px-4 py-3 max-w-[200px] cursor-pointer hover:shadow-2xl transition-all duration-300"
            onClick={() => { setOpen(true); setShowBubble(false); }}
          >
            <button
              className="absolute -top-2 -right-2 w-5 h-5 bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-300 transition-colors"
              onClick={(e) => { e.stopPropagation(); setShowBubble(false); }}
              aria-label="Close"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} className="w-2.5 h-2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <p className="text-xs font-semibold text-gray-800">Book in 60 seconds! 🐾</p>
            <p className="text-[11px] text-gray-400 mt-0.5">Chat with PetBot to reserve your spot.</p>
          </div>
        )}

        {/* Main FAB */}
        <button
          onClick={() => { setOpen((v) => !v); setShowBubble(false); }}
          aria-label="Open booking chatbot"
          className="relative w-14 h-14 rounded-full shadow-xl flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-2xl"
          style={{ background: "linear-gradient(135deg, #E07A9A 0%, #E07A9A 100%)" }}
        >
          {/* Ping ring */}
          <span className="absolute inset-0 rounded-full animate-ping opacity-20"
            style={{ background: "linear-gradient(135deg, #E07A9A, #E07A9A)" }} />

          {open ? (
            <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth={2.5} className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth={2} className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" />
            </svg>
          )}

          {/* Unread dot */}
          {!open && (
            <span className="absolute -top-1 -right-1 w-4 h-4 bg-green-400 rounded-full border-2 border-white" />
          )}
        </button>
      </div>

      {/* ── CHAT WINDOW ── */}
      {open && (
        <div
          className="fixed bottom-24 right-6 z-50 w-[340px] sm:w-[380px] bg-white rounded-3xl shadow-2xl border border-gray-100 flex flex-col overflow-hidden"
          style={{ maxHeight: "min(580px, calc(100dvh - 120px))" }}
        >
          {/* Header */}
          <div
            className="px-5 py-4 flex items-center gap-3 flex-shrink-0"
            style={{ background: "linear-gradient(135deg, #E07A9A 0%, #E07A9A 100%)" }}
          >
            <div className="relative">
              <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                <svg viewBox="0 0 24 24" fill="white" className="w-5 h-5">
                  <path d="M12 2C6.477 2 2 6.477 2 12c0 1.89.524 3.66 1.438 5.168L2.008 22l4.974-1.418A9.954 9.954 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18a7.96 7.96 0 01-4.073-1.117l-.292-.173-3.036.866.865-3.106-.19-.302A7.96 7.96 0 014 12c0-4.418 3.582-8 8-8s8 3.582 8 8-3.582 8-8 8z" />
                </svg>
              </div>
              <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-400 rounded-full border-2 border-white" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-white font-semibold text-sm leading-none">PetBot </p>
              <p className="text-white/60 text-xs mt-1">Book your appointment instantly</p>
            </div>
            {done && (
              <button
                onClick={handleRestart}
                title="Start over"
                className="text-white/60 hover:text-white transition-colors"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-4 h-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
                </svg>
              </button>
            )}
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto px-4 py-4 space-y-3 bg-gray-50/50">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`flex ${msg.from === "user" ? "justify-end" : "justify-start"}`}
              >
                {msg.from === "bot" && (
                  <div className="w-7 h-7 rounded-full flex-shrink-0 mr-2 mt-0.5 flex items-center justify-center"
                    style={{ background: "linear-gradient(135deg, #E07A9A, #E07A9A)" }}>
                    <svg viewBox="0 0 24 24" fill="white" className="w-3.5 h-3.5">
                      <path d="M12 2C6.477 2 2 6.477 2 12c0 1.89.524 3.66 1.438 5.168L2.008 22l4.974-1.418A9.954 9.954 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2z" />
                    </svg>
                  </div>
                )}
                <div
                  className={`max-w-[75%] px-4 py-2.5 rounded-2xl text-sm leading-relaxed ${
                    msg.from === "bot"
                      ? "bg-white border border-gray-100 text-gray-800 shadow-sm rounded-tl-sm"
                      : "text-white rounded-tr-sm"
                  }`}
                  style={
                    msg.from === "user"
                      ? { background: "linear-gradient(135deg, #E07A9A, #E07A9A)" }
                      : {}
                  }
                >
                  {msg.text}
                </div>
              </div>
            ))}

            {/* Typing indicator - shown briefly after user answers */}
            <div ref={bottomRef} />
          </div>

          {/* Input area */}
          <div className="flex-shrink-0 border-t border-gray-100 bg-white px-4 py-3">
            {done ? (
              /* WhatsApp send button */
              <a
                href={buildWhatsAppURL(answers)}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-2 w-full bg-[#25D366] hover:bg-[#20bc5a] text-white px-4 py-3 rounded-2xl text-sm font-semibold transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5"
              >
                <svg viewBox="0 0 24 24" fill="white" className="w-5 h-5">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Send Booking on WhatsApp
              </a>
            ) : currentStep?.type === "options" ? (
              /* Option chips */
              <div className="flex flex-wrap gap-2">
                {currentStep.options?.map((opt) => (
                  <button
                    key={opt}
                    onClick={() => handleAnswer(opt)}
                    className="px-3 py-1.5 rounded-full border border-gray-200 bg-white text-gray-700 text-xs font-medium hover:border-[#E07A9A] hover:text-[#E07A9A] hover:bg-[#f0f4ff] active:scale-95 transition-all duration-150"
                  >
                    {opt}
                  </button>
                ))}
              </div>
            ) : (
              /* Free text input */
              <div className={`flex items-center gap-2 ${shake ? "animate-shake" : ""}`}>
                <input
                  ref={inputRef}
                  type={currentStep?.type === "tel" ? "tel" : "text"}
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleTextSubmit()}
                  placeholder={currentStep?.placeholder ?? "Type your answer..."}
                  className="flex-1 bg-gray-50 border border-gray-200 rounded-xl px-4 py-2.5 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[#E07A9A] focus:bg-white transition-all duration-200"
                />
                <button
                  onClick={handleTextSubmit}
                  className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-200 hover:scale-110"
                  style={{ background: "linear-gradient(135deg, #E07A9A, #E07A9A)" }}
                  aria-label="Send"
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth={2.5} className="w-4 h-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                  </svg>
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Shake keyframe */}
      <style>{`
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          20% { transform: translateX(-4px); }
          40% { transform: translateX(4px); }
          60% { transform: translateX(-4px); }
          80% { transform: translateX(4px); }
        }
        .animate-shake { animation: shake 0.4s ease-in-out; }
        @keyframes fade-up {
          from { opacity: 0; transform: translateY(12px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-up { animation: fade-up 0.4s ease-out forwards; }
      `}</style>
    </>
  );
}