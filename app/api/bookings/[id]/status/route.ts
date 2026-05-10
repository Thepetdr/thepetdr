import { createClient } from "@supabase/supabase-js";
import { NextRequest, NextResponse } from "next/server";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

export async function PATCH(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }  // ← Promise type
) {
  try {
    const { id } = await params;  // ← await it
    const { status } = await req.json();

    console.log("📝 Updating booking:", id, "→", status);

    if (!id) {
      return NextResponse.json({ error: "Missing booking id" }, { status: 400 });
    }

    const { data: booking, error } = await supabase
      .from("bookings")
      .update({
        status,
        confirmed_at: new Date().toISOString(),
      })
      .eq("id", id)
      .select()
      .single();

    if (error) {
      console.error("❌ Supabase update error:", error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    console.log("✅ Booking updated:", booking);
    return NextResponse.json({ booking });

  } catch (err) {
    console.error("❌ Route crash:", err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}