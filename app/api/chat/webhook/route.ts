import { NextRequest, NextResponse } from "next/server";
import { processMessage } from "@/lib/chatbot/flow-engine";
import { getConversationState, saveConversationState } from "@/lib/chatbot/conversation-store";

const VERIFY_TOKEN = process.env.WHATSAPP_VERIFY_TOKEN!;
const WA_TOKEN = process.env.WHATSAPP_TOKEN!;
const PHONE_NUMBER_ID = process.env.WHATSAPP_PHONE_NUMBER_ID!;

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  if (
    searchParams.get("hub.mode") === "subscribe" &&
    searchParams.get("hub.verify_token") === VERIFY_TOKEN
  ) {
    return new NextResponse(searchParams.get("hub.challenge"), { status: 200 });
  }
  return NextResponse.json({ error: "Forbidden" }, { status: 403 });
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const message = body?.entry?.[0]?.changes?.[0]?.value?.messages?.[0];

    if (!message || message.type !== "text") {
      return NextResponse.json({ status: "ignored" });
    }

    const waNumber: string = message.from;
    const userText: string = message.text.body;

    // Load state
    const state = await getConversationState(waNumber);

    // Process
    const { reply, nextState } = await processMessage(state, userText);

    // Save state
    await saveConversationState(waNumber, nextState);

    // Send reply
    await sendWhatsAppMessage(waNumber, reply);

    return NextResponse.json({ status: "ok" });
  } catch (err) {
    console.error("[Webhook Error]", err);
    return NextResponse.json({ error: "Internal error" }, { status: 500 });
  }
}

async function sendWhatsAppMessage(to: string, text: string) {
  await fetch(`https://graph.facebook.com/v19.0/${PHONE_NUMBER_ID}/messages`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${WA_TOKEN}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      messaging_product: "whatsapp",
      to,
      type: "text",
      text: { body: text },
    }),
  });
}