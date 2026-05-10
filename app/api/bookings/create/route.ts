import { createClient } from "@supabase/supabase-js";
import { NextRequest, NextResponse } from "next/server";

// Direct admin client — bypasses RLS
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    // Log to verify data is arriving
    console.log("Booking payload:", body);

    const { data, error } = await supabase
      .from("bookings")
      .insert([
        {
          alert_type:     body.alert_type ?? "new_booking",
          client_name:    body.client_name,
          phone:          body.phone,
          pet_name:       body.pet_name,
          species:        body.species ?? null,
          service:        body.service,
          main_concern:   body.main_concern ?? null,
          preferred_date: body.preferred_date,
          preferred_time: body.preferred_time,
          priority:       body.priority ?? "normal",
          notes:          body.notes ?? null,
          status:         "pending",
        },
      ])
      .select()
      .single();

    if (error) {
      console.error("Supabase insert error:", error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    console.log("Booking created:", data);
    return NextResponse.json({ booking: data }, { status: 201 });

  } catch (err) {
    console.error("Route error:", err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}