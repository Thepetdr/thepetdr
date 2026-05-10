"use client";

import { useState } from "react";

type Booking = {
  id: string;
  created_at: string;
  client_name: string;
  phone: string;
  pet_name: string | null;
  species: string | null;
  service: string | null;
  preferred_date: string | null;  // "2026-05-10"
  preferred_time: string | null;  // "09:00:00"
  main_concern: string | null;
  priority: string | null;
  status: "pending" | "confirmed" | "rejected";
  notes: string | null;
  alert_type: string | null;
};

export default function BookingsTable({ bookings }: { bookings: Booking[] }) {
  const [list, setList] = useState(bookings);
  const [loading, setLoading] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  async function updateStatus(id: string, status: "confirmed" | "rejected") {
    setLoading(id);
    setError(null);

    try {
      const res = await fetch(`/api/bookings/${id}/status`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status }),
      });

      const json = await res.json();
      console.log("📥 Status update response:", res.status, json);

      if (!res.ok || !json.booking) {
        console.error("❌ Update failed:", json.error ?? "No booking returned");
        setError(json.error ?? "Failed to update booking. Check API logs.");
        setLoading(null);
        return;
      }

      // Update row in local state
      setList((prev) =>
        prev.map((b) =>
          b.id === id ? { ...b, status: json.booking.status } : b
        )
      );

      setLoading(null);

      // Open WhatsApp with prefilled message
      openWhatsApp(json.booking, status);

    } catch (err) {
      console.error("❌ Network error:", err);
      setError("Network error. Please try again.");
      setLoading(null);
    }
  }

function formatTime(t: string | null) {
  if (!t) return "";
  const [h, m] = t.split(":");
  const hour = parseInt(h);
  const ampm = hour >= 12 ? "PM" : "AM";
  const hour12 = hour % 12 || 12;
  return `${hour12}:${m} ${ampm}`;
}

  function openWhatsApp(booking: Booking, status: "confirmed" | "rejected") {
    const { client_name, pet_name, preferred_date, preferred_time, service, phone } = booking;

    const message =
      status === "confirmed"
        ? `Hi ${client_name}! 🐾 Your booking at *The Pet Dr* has been *confirmed* ✅\n\n*Pet:* ${pet_name}\n*Service:* ${service}\n*Date:* ${preferred_date} at ${preferred_time}\n\nPlease arrive 5 mins early. See you soon! 😊`
        : `Hi ${client_name}, we're sorry — your booking request for *${pet_name}* on ${preferred_date} could not be confirmed at this time.\n\nPlease reply here or call us to reschedule. 🙏\n— The Pet Dr Team`;

    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  }

  function directChat(phone: string) {
    window.open(`https://wa.me/${phone}`, "_blank");
  }

  function statusBadge(status: string) {
    const styles: Record<string, string> = {
      pending:   "bg-yellow-100 text-yellow-700 border border-yellow-200",
      confirmed: "bg-green-100  text-green-700  border border-green-200",
      rejected:  "bg-red-100    text-red-700    border border-red-200",
    };
    return (
      <span className={`px-2.5 py-0.5 rounded-full text-xs font-semibold capitalize ${styles[status] ?? "bg-gray-100 text-gray-600"}`}>
        {status}
      </span>
    );
  }

  return (
    <div className="space-y-4">

      {/* Error banner */}
      {error && (
        <div className="px-4 py-3 bg-red-50 border border-red-200 rounded-xl text-sm text-red-600 flex items-center justify-between">
          <span>⚠️ {error}</span>
          <button onClick={() => setError(null)} className="text-red-400 hover:text-red-600 ml-4 text-lg leading-none">×</button>
        </div>
      )}

      {/* Empty state */}
      {list.length === 0 && (
        <div className="text-center py-20 text-gray-400">
          <p className="text-4xl mb-3">📭</p>
          <p className="font-medium text-gray-500">No bookings yet</p>
          <p className="text-sm mt-1">Bookings submitted via the website chatbot will appear here.</p>
        </div>
      )}

      {/* Table */}
      {list.length > 0 && (
        <div className="overflow-x-auto rounded-xl border border-gray-200 shadow-sm">
          <table className="w-full text-sm">
            <thead className="bg-gray-50 text-gray-500 text-xs uppercase tracking-wide border-b border-gray-200">
              <tr>
                {["Client", "Pet", "Service", "Date & Time", "Concern", "Priority", "Status", "Actions"].map((h) => (
                  <th key={h} className="px-4 py-3 text-left font-semibold whitespace-nowrap">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {list.map((b) => (
                <tr
                  key={b.id}
                  className={`hover:bg-gray-50 transition-colors ${loading === b.id ? "opacity-60 pointer-events-none" : ""}`}
                >
                  {/* Client */}
                  <td className="px-4 py-3">
                    <p className="font-semibold text-gray-900 whitespace-nowrap">{b.client_name}</p>
                    <p className="text-xs text-gray-400 mt-0.5">{b.phone}</p>
                  </td>

                  {/* Pet */}
                  <td className="px-4 py-3">
                    <p className="text-gray-700 font-medium">{b.pet_name || "—"}</p>
                  </td>

                  {/* Service */}
                  <td className="px-4 py-3 text-gray-600 whitespace-nowrap">
                    {b.service || "—"}
                  </td>

                  {/* Date & Time */}
                  <td className="px-4 py-3 whitespace-nowrap">
  <p className="text-gray-700">{b.preferred_date || "—"}</p>
  <p className="text-xs text-gray-400">{formatTime(b.preferred_time)}</p>
</td>

                  {/* Concern */}
                  <td className="px-4 py-3 text-gray-500 max-w-[160px]">
                    <p className="truncate">{b.main_concern || "—"}</p>
                  </td>

                  {/* Priority */}
                  <td className="px-4 py-3 whitespace-nowrap">
                    {b.priority === "urgent" ? (
                      <span className="text-xs font-bold text-red-600">🚨 Urgent</span>
                    ) : (
                      <span className="text-xs text-gray-400">Normal</span>
                    )}
                  </td>

                  {/* Status */}
                  <td className="px-4 py-3 whitespace-nowrap">
                    {statusBadge(b.status)}
                  </td>

                  {/* Actions */}
                  <td className="px-4 py-3">
                    <div className="flex gap-2 flex-wrap items-center">

                      {/* Confirm / Reject — only for pending */}
                      {b.status === "pending" && (
                        <>
                          <button
                            onClick={() => updateStatus(b.id, "confirmed")}
                            disabled={loading === b.id}
                            className="px-3 py-1.5 bg-green-600 hover:bg-green-700 text-white text-xs font-semibold rounded-lg transition-colors disabled:opacity-50 whitespace-nowrap"
                          >
                            {loading === b.id ? "..." : "✓ Confirm"}
                          </button>
                          <button
                            onClick={() => updateStatus(b.id, "rejected")}
                            disabled={loading === b.id}
                            className="px-3 py-1.5 bg-red-100 hover:bg-red-200 text-red-700 text-xs font-semibold rounded-lg transition-colors disabled:opacity-50 whitespace-nowrap"
                          >
                            {loading === b.id ? "..." : "✗ Reject"}
                          </button>
                        </>
                      )}

                      {/* Direct chat */}
                      <button
                        onClick={() => directChat(b.phone)}
                        className="px-3 py-1.5 bg-[#25D366] hover:bg-[#20bc5a] text-white text-xs font-semibold rounded-lg transition-colors whitespace-nowrap"
                      >
                        💬 Chat
                      </button>

                      {/* Resend WA — only for already confirmed/rejected */}
                      {b.status !== "pending" && (
                        <button
                          onClick={() => openWhatsApp(b, b.status as "confirmed" | "rejected")}
                          className="px-3 py-1.5 bg-gray-100 hover:bg-gray-200 text-gray-700 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap"
                        >
                          ↩ Resend WA
                        </button>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}