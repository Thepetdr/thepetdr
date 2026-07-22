import { GoogleGenAI } from "@google/genai";
import { NextRequest, NextResponse } from "next/server";

export const dynamic = "force-dynamic";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY! });

const SYSTEM_PROMPT = `You are the website concierge for The Pet Doctor, a premium veterinary clinic in Sharjah, UAE.
Services include veterinary consultations, surgery, dental care, emergency guidance, vaccinations, grooming, cat boarding, diagnostics, holistic care, and pet retail.
Patients include cats, dogs, birds, rabbits, reptiles, and other exotic pets.
Clinic hours: Monday closed. Tuesday to Sunday 10:00 AM to 9:00 PM. Friday 1:00 PM to 10:00 PM.
Rules:
- Keep replies calm, warm, professional, and concise.
- Never diagnose or prescribe. Recommend veterinary assessment when appropriate.
- Never publish prices or price lists. Explain that fees depend on the pet's needs and service required.
- Never say an appointment is confirmed, booked, or reserved until clinic staff approve it.
- When a user wants to book, direct them to use the appointment-request option in the chatbot or contact the clinic on WhatsApp.
- For emergencies, urge immediate WhatsApp or telephone contact and do not imply that chat is monitored continuously.
- Respond in the same language the user uses, Arabic or English.
- Do not use emojis.`;

export async function POST(req: NextRequest) {
  try {
    const { messages } = await req.json();

    if (!messages || !Array.isArray(messages) || messages.length === 0) {
      return NextResponse.json({ error: "Invalid messages" }, { status: 400 });
    }

    const contents = messages.map((m: { role: string; content: string }) => ({
      role: m.role === "assistant" ? "model" : "user",
      parts: [{ text: m.content }],
    }));

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents,
      config: {
        systemInstruction: SYSTEM_PROMPT,
        temperature: 0.7,
        maxOutputTokens: 300,
      },
    });

    const text = response.text ?? "I could not generate a response. Please try again.";
    return NextResponse.json({ message: text });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : String(err);
    console.error("Gemini error:", message);

    const is429 = message.includes("429") || message.includes("quota");
    return NextResponse.json(
      {
        message: is429
          ? "I am receiving too many requests right now. Please try again in a few seconds or reach out via WhatsApp."
          : "I am having trouble connecting right now. Please reach out via WhatsApp for immediate help.",
      },
      { status: is429 ? 429 : 500 }
    );
  }
}
