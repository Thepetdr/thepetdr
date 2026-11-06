// NOTE: this Place ID is unverified. The footer map rendered a world view when it was
// embedded by place_id, which suggests it does not resolve. Confirm it against the
// official Google Business listing before enabling the Places reviews API.
export const GOOGLE_PLACE_ID = "ChIJn1QOS3FfXz4RIuW7RnogOeI";
const CLINIC_MAPS_QUERY = encodeURIComponent("The Pet Doctor Center, Villa 60, Al Zahia, Sharjah");
export const GOOGLE_MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${CLINIC_MAPS_QUERY}`;
// Keyless embed by name + address, zoomed to street level so it never falls back to a world view.
export const GOOGLE_MAPS_EMBED_URL = `https://maps.google.com/maps?q=${CLINIC_MAPS_QUERY}&z=16&output=embed`;
export const CLINIC_PHONE = "+97165573080";
export const EMERGENCY_PHONE = "+971542797875";
export const CLINIC_EMAIL = "info@thepetdr.ae";
