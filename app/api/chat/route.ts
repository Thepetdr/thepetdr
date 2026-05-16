import { GoogleGenAI } from "@google/genai";
import { NextRequest, NextResponse } from "next/server";

export const dynamic = "force-dynamic";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY! });

const SYSTEM_PROMPT = `You are a friendly assistant for The Pet Dr, a premium veterinary clinic in Sharjah, UAE.
Services: consultations, surgery, dental, emergency, vaccinations, grooming, boarding, diagnostics, holistic, pet shop, dog park.
Patients: dogs, cats, birds, rabbits, reptiles, exotic pets.
Hours: Saturday to Thursday 9AM to 8PM. Fridays by appointment.
Consultation from AED 150.
Rules: Keep replies to 2 to 4 sentences. Never diagnose — recommend booking a consultation. For emergencies urge immediate WhatsApp contact. Respond in the same language the user writes in (Arabic or English). No emojis.`;

export async function POST(req: NextRequest) {
  try {
    const { messages } = await req.json();

    if (!messages || !Array.isArray(messages) || messages.length === 0) {
      return NextResponse.json({ error: "Invalid messages" }, { status: 400 });
    }

    // Build conversation history for context
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