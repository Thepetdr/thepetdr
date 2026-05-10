import { supabase } from "@/lib/supabase";
import { ConversationState } from "./types";

const DEFAULT_STATE: ConversationState = {
  mode: null,
  flow: null,
  step: "idle",
  data: {},
};

export async function getConversationState(waNumber: string): Promise<ConversationState> {
  const { data } = await supabase
    .from("conversations")
    .select("state")
    .eq("wa_number", waNumber)
    .single();

  return (data?.state as ConversationState) ?? DEFAULT_STATE;
}

export async function saveConversationState(
  waNumber: string,
  state: ConversationState
): Promise<void> {
  await supabase
    .from("conversations")
    .upsert(
      {
        wa_number: waNumber,
        state,
        updated_at: new Date().toISOString(),
      },
      { onConflict: "wa_number" }
    );
}