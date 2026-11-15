/** Emits only a non-personal pilot interaction event; no Google Ads hit is sent here. */
export function trackPilotWhatsApp(source: "floating_button" | "contact_direct" | "contact_form") {
  if (typeof window === "undefined") return;
  const layer = window as Window & { dataLayer?: Array<Record<string, string>> };
  layer.dataLayer = layer.dataLayer || [];
  layer.dataLayer.push({ event: "tpd_pilot_whatsapp_click", tpd_pilot_source: source });
}
