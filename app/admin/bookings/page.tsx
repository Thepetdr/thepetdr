import { createSupabaseServerClient } from "@/lib/supabase/server";
import BookingsTable from "@/components/admin/BookingsTable";

export default async function AdminBookingsPage() {
  const supabase = await createSupabaseServerClient();

  const { data: bookings, error } = await supabase
    .from("bookings")
    .select("id, created_at, alert_type, client_name, phone, pet_name, species, service, main_concern, preferred_date, preferred_time, priority, status, notes")
    .order("created_at", { ascending: false });

  if (error) {
    console.error("❌ Supabase fetch error:", error);
  }

  console.log("📋 First booking row:", JSON.stringify(bookings?.[0], null, 2));

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-6">Bookings</h1>
      <BookingsTable bookings={bookings ?? []} />
    </div>
  );
}