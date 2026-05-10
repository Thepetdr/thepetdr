import { createClient } from "@supabase/supabase-js";
import { NextRequest, NextResponse } from "next/server";

export const dynamic = "force-dynamic";

function getSupabase() {
  return createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!
  );
}

export async function PATCH(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const { status } = await req.json();

    if (!id) {
      return NextResponse.json({ error: "Missing booking id" }, { status: 400 });
    }

    const { data: booking, error } = await getSupabase()
      .from("bookings")
      .update({
        status,
        confirmed_at: new Date().toISOString(),
      })
      .eq("id", id)
      .select()
      .single();

    if (error) {
      console.error("Supabase update error:", error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ booking });
  } catch (err) {
    console.error("Route crash:", err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}