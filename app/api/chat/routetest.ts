import { createOpenRouter } from "@openrouter/ai-sdk-provider";
import { streamText } from "ai";

const openrouter = createOpenRouter({
  apiKey: process.env.OPENROUTER_API_KEY!,
});

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();

    const result = streamText({
      model: openrouter("google/gemma-4-31b-it:free"),
      messages,
      providerOptions: {
        openrouter: {
          reasoning: { enabled: true }, // enables Gemma 4's thinking mode
        },
      },
    });

    return result.toTextStreamResponse();
  } catch (error) {
    console.error("[Chat API Error]", error);
    return new Response(
      JSON.stringify({ error: "AI service unavailable. Please try again." }),
      {
        status: 503,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}