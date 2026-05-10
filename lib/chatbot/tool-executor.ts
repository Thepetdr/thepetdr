import { supabase } from "@/lib/supabase";

export async function executeTool(name: string, args: Record<string, unknown>): Promise<string> {
  switch (name) {

    case "create_booking":
    case "send_internal_alert": {
      const table = name === "create_booking" ? "bookings" : "internal_alerts";
      const { error } = await supabase.from(table).insert({
        ...args,
        preferred_date: args.preferred_date || null,
        preferred_time: args.preferred_time || null,
      });
      if (error) return JSON.stringify({ success: false, error: error.message });
      return JSON.stringify({ success: true, message: `${table} record created` });
    }

    case "save_lead": {
      const { error } = await supabase.from("leads").insert(args);
      if (error) return JSON.stringify({ success: false, error: error.message });
      return JSON.stringify({ success: true, message: "Lead saved" });
    }

    case "new_lead": {
      const { error } = await supabase.from("leads").insert({
        phone: args.number,
        service_interested_in: args.service_interested_in,
        source: "WhatsApp",
      });
      if (error) return JSON.stringify({ success: false, error: error.message });
      return JSON.stringify({ success: true, message: "New lead captured" });
    }

    case "urgent_case": {
      const { error } = await supabase.from("urgent_cases").insert(args);
      if (error) return JSON.stringify({ success: false, error: error.message });
      // You can add Slack/email alert here
      return JSON.stringify({ success: true, message: "Urgent case registered", priority: "URGENT" });
    }

    case "parse_appointment_datetime": {
      // Already parsed by GPT — just echo back validated
      return JSON.stringify({
        success: true,
        preferred_date: args.preferred_date,
        preferred_time: args.preferred_time,
      });
    }

    case "check_boarding_dates": {
      // Query your boarding availability logic here
      return JSON.stringify({
        success: true,
        available: true,
        message: "Dates received. Staff will confirm availability.",
      });
    }

    case "request_quote": {
      const { error } = await supabase.from("leads").insert({
        name: args.client_name,
        phone: args.phone,
        interest: args.service,
        notes: `Quote request: ${args.service} for ${args.pet_type} (${args.size}). ${args.notes}`,
        source: "WhatsApp",
      });
      if (error) return JSON.stringify({ success: false, error: error.message });
      return JSON.stringify({ success: true, message: "Quote request saved" });
    }

    case "call_back_request": {
      const { error } = await supabase.from("leads").insert({
        name: args.name,
        phone: args.phone,
        notes: `Callback requested — reason: ${args.reason}`,
        source: "WhatsApp",
      });
      if (error) return JSON.stringify({ success: false, error: error.message });
      return JSON.stringify({ success: true, message: "Callback request saved" });
    }

    case "send_location_pin": {
      return JSON.stringify({
        success: true,
        maps_link: "https://maps.app.goo.gl/BiKfhFj9tq9K4x6K8",
      });
    }

    default:
      return JSON.stringify({ success: false, error: `Unknown tool: ${name}` });
  }
}