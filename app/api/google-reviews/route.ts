import { NextResponse } from "next/server";
import { GOOGLE_MAPS_URL, GOOGLE_PLACE_ID } from "@/lib/clinic-links";

export const dynamic = "force-dynamic";

type GoogleReview = {
  rating?: number;
  text?: { text?: string };
  originalText?: { text?: string };
  publishTime?: string;
  relativePublishTimeDescription?: string;
  flagContentUri?: string;
  googleMapsUri?: string;
  authorAttribution?: { displayName?: string; uri?: string; photoUri?: string };
};
type GooglePlace = {
  rating?: number;
  userRatingCount?: number;
  googleMapsUri?: string;
  reviews?: GoogleReview[];
};

export async function GET() {
  const key = process.env.GOOGLE_PLACES_API_KEY;
  // Enable billable API calls only after owner approval, billing controls, and legal disclosures.
  if (!key || process.env.ENABLE_GOOGLE_PLACES_REVIEWS !== "true") {
    return NextResponse.json(
      { available: false, reviews: [], googleMapsUrl: GOOGLE_MAPS_URL },
      { status: 200, headers: { "Cache-Control": "no-store" } },
    );
  }

  try {
    const response = await fetch(`https://places.googleapis.com/v1/places/${GOOGLE_PLACE_ID}`, {
      headers: {
        "X-Goog-Api-Key": key,
        "X-Goog-FieldMask": "rating,userRatingCount,googleMapsUri,reviews",
        "Accept-Language": "en",
      },
      cache: "no-store",
      signal: AbortSignal.timeout(8000),
    });
    if (!response.ok) {
      // Never expose the API key, upstream response, or configuration details.
      return NextResponse.json(
        { available: false, reviews: [], googleMapsUrl: GOOGLE_MAPS_URL },
        { headers: { "Cache-Control": "no-store" } },
      );
    }

    const place = (await response.json()) as GooglePlace;
    const reviews = (place.reviews ?? [])
      .filter((review) => typeof (review.text?.text ?? review.originalText?.text) === "string")
      .slice(0, 5)
      .map((review) => ({
        name: review.authorAttribution?.displayName || "Google reviewer",
        authorUrl: review.authorAttribution?.uri || null,
        authorPhotoUrl: review.authorAttribution?.photoUri || null,
        text: review.text?.text || review.originalText?.text || "",
        rating: typeof review.rating === "number" ? review.rating : null,
        publishTime: review.publishTime || null,
        relativePublishTime: review.relativePublishTimeDescription || null,
        reportUrl: review.flagContentUri || null,
        reviewUrl: review.googleMapsUri || place.googleMapsUri || GOOGLE_MAPS_URL,
      }));
    return NextResponse.json(
      {
        available: true,
        rating: typeof place.rating === "number" ? place.rating : null,
        count: typeof place.userRatingCount === "number" ? place.userRatingCount : null,
        reviews,
        googleMapsUrl: place.googleMapsUri || GOOGLE_MAPS_URL,
      },
      { headers: { "Cache-Control": "no-store" } },
    );
  } catch {
    return NextResponse.json(
      { available: false, reviews: [], googleMapsUrl: GOOGLE_MAPS_URL },
      { headers: { "Cache-Control": "no-store" } },
    );
  }
}
