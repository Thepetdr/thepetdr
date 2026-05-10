import { ConversationState, FlowType } from "./types";
import { REPLIES } from "./replies";
import { detectIntent, extractPhone, normalizeDate, normalizeTime, isClinicOpen } from "./intent-detector";
import { supabase } from "@/lib/supabase";

const URGENT_KEYWORDS = [
  "breathing","collapse","seizure","poison","bleed","trauma","urinate","vomit",
  "cannot stand","hit by car","extreme pain","unconscious","طارئ","نزيف","تشنج","مغمى"
];

function isUrgent(text: string): boolean {
  const lower = text.toLowerCase();
  return URGENT_KEYWORDS.some((kw) => lower.includes(kw));
}

export async function processMessage(
  state: ConversationState,
  userMsg: string
): Promise<{ reply: string; nextState: ConversationState }> {

  const msg = userMsg.trim();
  let { flow, step, data } = state;

  // ── URGENT always wins ──
  if (isUrgent(msg)) {
    await supabase.from("urgent_cases").insert({
      name: data.client_name ?? "",
      phone: data.phone ?? "",
      pet_name: data.pet_name ?? "",
      symptoms: msg,
      eta: "unknown",
    });
    return {
      reply: REPLIES.urgentReply(msg),
      nextState: { mode: null, flow: null, step: "idle", data: {} },
    };
  }

  // ── CANCEL ──
  const intent = detectIntent(msg);
  if (intent === "cancel" && flow) {
    return {
      reply: REPLIES.cancelFlow(msg),
      nextState: { mode: null, flow: null, step: "idle", data: {} },
    };
  }

  // ── Out of hours (only for new conversations) ──
  if (!flow && !isClinicOpen() && intent !== "location" && intent !== "hours") {
    return {
      reply: REPLIES.outsideHours(msg),
      nextState: { mode: null, flow: null, step: "idle", data: {} },
    };
  }

  // ── No active flow → detect intent ──
  if (!flow) {
    return handleNoFlow(intent, msg, state);
  }

  // ── Active flow → continue ──
  return continueFlow(flow, step, data, msg, userMsg);
}

// ─────────────────────────────────────────────
function handleNoFlow(
  intent: string,
  msg: string,
  state: ConversationState
): { reply: string; nextState: ConversationState } {
  switch (intent) {
    case "greeting":
      return {
        reply: REPLIES.mainMenu(msg),
        nextState: { mode: "menu", flow: null, step: "menu", data: {} },
      };

    case "location":
  return { reply: REPLIES.clinicInfo(msg), nextState: state };

case "hours":
  return { reply: REPLIES.clinicInfo(msg), nextState: state };

    case "hours":
      return { reply: REPLIES.clinicInfo(msg), nextState: state };

    case "thanks":
      return { reply: REPLIES.thankYou(msg), nextState: state };

    case "urgent":
      return { reply: REPLIES.urgentReply(msg), nextState: state };

    case "price":
      return { reply: REPLIES.priceReply("this service", msg), nextState: state };

    case "callback":
    case "booking":
    case "consultation":
      return {
        reply: REPLIES.askName(msg),
        nextState: {
          mode: "booking",
          flow: "booking",
          step: "ask_name",
          data: { service: intent === "consultation" ? "Consultation" : "" },
        },
      };

    case "grooming":
      return {
        reply: REPLIES.askName(msg),
        nextState: { mode: "grooming", flow: "grooming", step: "ask_name", data: { service: "Grooming" } },
      };

    case "boarding":
      return {
        reply: REPLIES.askName(msg),
        nextState: { mode: "boarding", flow: "boarding", step: "ask_name", data: { service: "Boarding" } },
      };

    case "vaccines":
      return {
        reply: REPLIES.askName(msg),
        nextState: { mode: "vaccines", flow: "vaccines", step: "ask_name", data: { service: "Vaccination" } },
      };

    default: {
      const num = msg.trim();
      if (num === "1") return { reply: REPLIES.askName(msg), nextState: { mode: "booking", flow: "booking", step: "ask_name", data: {} } };
      if (num === "2") return { reply: REPLIES.askName(msg), nextState: { mode: "grooming", flow: "grooming", step: "ask_name", data: { service: "Grooming" } } };
      if (num === "3") return { reply: REPLIES.askName(msg), nextState: { mode: "boarding", flow: "boarding", step: "ask_name", data: { service: "Boarding" } } };
      if (num === "4") return { reply: REPLIES.askName(msg), nextState: { mode: "vaccines", flow: "vaccines", step: "ask_name", data: { service: "Vaccination" } } };
      if (num === "5") return { reply: REPLIES.handover(msg), nextState: { mode: null, flow: null, step: "idle", data: {} } };

      return { reply: REPLIES.unknown(msg), nextState: state };
    }
  }
}

// ─────────────────────────────────────────────
async function continueFlow(
  flow: FlowType,
  step: string,
  data: ConversationState["data"],
  msg: string,
  rawMsg: string
): Promise<{ reply: string; nextState: ConversationState }> {

  const next = (
    nextStep: string,
    newData: Partial<ConversationState["data"]>,
    reply: string
  ): { reply: string; nextState: ConversationState } => ({
    reply,
    nextState: { mode: flow as ConversationState["mode"], flow, step: nextStep, data: { ...data, ...newData } },
  });

  // ── Shared steps ──
  if (step === "ask_name") {
    return next("ask_phone", { client_name: msg }, REPLIES.askPhone(rawMsg));
  }

  if (step === "ask_phone") {
    const phone = extractPhone(msg) ?? msg;
    return next("ask_pet_name", { phone }, REPLIES.askPetName(rawMsg));
  }

  if (step === "ask_pet_name") {
    return next("ask_species", { pet_name: msg }, REPLIES.askSpecies(rawMsg));
  }

  if (step === "ask_species") {
    const lower = msg.toLowerCase();
    const species =
      lower.includes("cat") || lower.includes("قط") ? "cat"
      : lower.includes("dog") || lower.includes("كلب") ? "dog"
      : lower.includes("bird") || lower.includes("طير") ? "bird"
      : lower.includes("rabbit") || lower.includes("أرنب") ? "rabbit"
      : "other";

    if (flow === "grooming") {
      if (species === "dog") return next("ask_grooming_size", { species }, REPLIES.askGroomingSize(rawMsg));
      return next("ask_grooming_type", { species }, REPLIES.askGroomingType(rawMsg));
    }
    if (flow === "boarding") return next("ask_boarding_dates", { species }, REPLIES.askBoardingDates(rawMsg));
    if (flow === "vaccines") return next("ask_pet_age", { species }, REPLIES.askPetAge(rawMsg));
    if (flow === "booking" || flow === "consultation") return next("ask_concern", { species }, REPLIES.askConcern(rawMsg));

    return next("ask_date", { species }, REPLIES.askDate(rawMsg));
  }

  // ── Grooming-specific ──
  if (step === "ask_grooming_size") {
    const lower = msg.toLowerCase();
    const size =
      lower.includes("small") || lower.includes("صغير") ? "small"
      : lower.includes("large") || lower.includes("كبير") ? "large"
      : "medium";
    return next("ask_grooming_type", { grooming_size: size }, REPLIES.askGroomingType(rawMsg));
  }

  if (step === "ask_grooming_type") {
    const lower = msg.toLowerCase();
    const type =
      lower.includes("full") || lower.includes("كامل") ? "Full Groom"
      : "Basic Groom";
    return next("ask_date", { grooming_type: type, service: type }, REPLIES.askDate(rawMsg));
  }

  // ── Boarding-specific ──
  if (step === "ask_boarding_dates") {
    return next("ask_vaccinated", { notes: `Boarding dates: ${msg}` }, REPLIES.askVaccinated(rawMsg));
  }

  if (step === "ask_vaccinated") {
    return next("finalize", { notes: (data.notes ?? "") + ` | Vaccinated: ${msg}` }, REPLIES.askDate(rawMsg));
  }

  // ── Vaccines-specific ──
  if (step === "ask_pet_age") {
    return next("finalize", { notes: `Pet age: ${msg}` }, REPLIES.askDate(rawMsg));
  }

  // ── Consultation/booking ──
  if (step === "ask_concern") {
    return next("ask_date", { main_concern: msg }, REPLIES.askDate(rawMsg));
  }

  // ── Date/time ──
  if (step === "ask_date") {
    const date = normalizeDate(msg) ?? msg;
    return next("ask_time", { preferred_date: date }, REPLIES.askTime(rawMsg));
  }

  if (step === "ask_time") {
    const time = normalizeTime(msg) ?? msg;
    return next("finalize", { preferred_time: time }, "finalizing");
  }

  // ── FINALIZE ──
  if (step === "finalize" || msg === "finalizing") {
    const finalData = { ...data };

    await supabase.from("internal_alerts").insert({
      alert_type: "booking_request",
      client_name: finalData.client_name ?? "",
      phone: finalData.phone ?? "",
      pet_name: finalData.pet_name ?? "",
      species: finalData.species ?? "",
      breed: finalData.breed ?? "",
      service: finalData.service ?? flow ?? "",
      main_concern: finalData.main_concern ?? "",
      preferred_date: finalData.preferred_date ?? null,
      preferred_time: finalData.preferred_time ?? null,
      priority: "normal",
      status: "pending",
      notes: finalData.notes ?? "",
    });

    await supabase.from("leads").insert({
      name: finalData.client_name ?? "",
      phone: finalData.phone ?? "",
      service_interested_in: finalData.service ?? flow ?? "",
      source: "WhatsApp",
      notes: finalData.main_concern ?? "",
    });

    const summary = REPLIES.confirmSummary(finalData as Record<string, string>, rawMsg);
    const reminder = ["grooming", "vaccines"].includes(flow ?? "")
      ? "\n\n" + REPLIES.groomingVaccineReminder(rawMsg)
      : "";

    return {
      reply: summary + reminder,
      nextState: { mode: null, flow: null, step: "done", data: {} },
    };
  }

  return {
    reply: REPLIES.unknown(rawMsg),
    nextState: { mode: flow as ConversationState["mode"], flow, step, data },
  };
}