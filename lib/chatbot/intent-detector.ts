const INTENTS: Record<string, string[]> = {
  greeting:     ["hi", "hello", "hey", "salam", "مرحبا", "السلام", "هاي", "حياك", "مساء", "صباح"],
  booking:      ["book", "appointment", "appoint", "reserve", "schedule", "visit", "حجز", "موعد", "أبي موعد"],
  grooming:     ["groom", "grooming", "bath", "haircut", "trim", "shampoo", "تزيين", "استحمام", "قص"],
  boarding:     ["board", "boarding", "hotel", "stay", "overnight", "فندق", "إيداع", "أسبوع"],
  consultation: ["consult", "checkup", "check up", "sick", "ill", "doctor", "vet", "كشف", "طبيب", "مريض"],
  vaccines:     ["vaccine", "vaccination", "jab", "shot", "تطعيم", "لقاح"],
  urgent:       ["emergency", "urgent", "breathing", "collapse", "seizure", "poison", "bleed", "trauma", "طارئ", "إسعاف"],
  location:     ["location", "address", "where", "map", "directions", "موقع", "عنوان", "وين"],
  hours:        ["hours", "open", "close", "timing", "when", "ساعات", "الدوام", "متى"],
  price:        ["price", "cost", "fee", "charge", "how much", "كم", "سعر", "تكلفة"],
  callback:     ["call me", "call back", "ring", "phone me", "اتصل", "تواصل"],
  cancel:       ["cancel", "stop", "exit", "quit", "no", "نو", "إلغاء", "توقف"],
  thanks:       ["thank", "thanks", "thx", "شكرا", "مشكور", "يسلمو"],
};

export function detectIntent(text: string): string {
  const lower = text.toLowerCase().trim();

  for (const [intent, keywords] of Object.entries(INTENTS)) {
    if (keywords.some((kw) => lower.includes(kw))) {
      return intent;
    }
  }

  return "unknown";
}

export function isArabic(text: string): boolean {
  return /[\u0600-\u06FF]/.test(text);
}

export function extractPhone(text: string): string | null {
  const match = text.match(/(\+?971|0)?[\s-]?5[0-9][\s-]?[0-9]{3}[\s-]?[0-9]{4}/);
  return match ? match[0].replace(/[\s-]/g, "") : null;
}

export function normalizeTime(text: string): string | null {
  const lower = text.toLowerCase();
  const match = lower.match(/(\d{1,2})(?::(\d{2}))?\s*(am|pm)?/);
  if (!match) return null;

  let hour = parseInt(match[1]);
  const min = match[2] ? parseInt(match[2]) : 0;
  const meridiem = match[3];

  if (meridiem === "pm" && hour < 12) hour += 12;
  if (meridiem === "am" && hour === 12) hour = 0;

  return `${String(hour).padStart(2, "0")}:${String(min).padStart(2, "0")}`;
}

export function normalizeDate(text: string): string | null {
  const lower = text.toLowerCase();
  const now = new Date(
    new Date().toLocaleString("en-US", { timeZone: "Asia/Dubai" })
  );

  if (lower.includes("today")) {
    return formatDate(now);
  }
  if (lower.includes("tomorrow")) {
    now.setDate(now.getDate() + 1);
    return formatDate(now);
  }
  if (lower.includes("day after")) {
    now.setDate(now.getDate() + 2);
    return formatDate(now);
  }
  if (lower.includes("next week")) {
    now.setDate(now.getDate() + 7);
    return formatDate(now);
  }

  // Try to parse day names: "friday", "saturday"...
  const days = ["sunday","monday","tuesday","wednesday","thursday","friday","saturday"];
  for (let i = 0; i < days.length; i++) {
    if (lower.includes(days[i])) {
      const currentDay = now.getDay();
      let diff = i - currentDay;
      if (diff <= 0) diff += 7;
      now.setDate(now.getDate() + diff);
      return formatDate(now);
    }
  }

  // Try DD/MM/YYYY or DD-MM-YYYY
  const dateMatch = text.match(/(\d{1,2})[\/\-](\d{1,2})(?:[\/\-](\d{2,4}))?/);
  if (dateMatch) {
    const day = dateMatch[1].padStart(2, "0");
    const month = dateMatch[2].padStart(2, "0");
    const year = dateMatch[3]
      ? (dateMatch[3].length === 2 ? "20" + dateMatch[3] : dateMatch[3])
      : now.getFullYear().toString();
    return `${year}-${month}-${day}`;
  }

  return null;
}

function formatDate(d: Date): string {
  return d.toISOString().split("T")[0];
}

export function getCurrentUAETime(): string {
  return new Date().toLocaleString("en-GB", { timeZone: "Asia/Dubai" });
}

export function isClinicOpen(): boolean {
  const now = new Date(
    new Date().toLocaleString("en-US", { timeZone: "Asia/Dubai" })
  );
  const day = now.getDay(); // 0=Sun, 1=Mon, 6=Sat
  const hour = now.getHours();
  const min = now.getMinutes();
  const time = hour + min / 60;

  if (day === 1) return false; // Monday closed
  if (day === 5) return time >= 13 && time < 22; // Friday 1pm–10pm
  return time >= 10 && time < 21; // Tue–Sun 10am–9pm
}