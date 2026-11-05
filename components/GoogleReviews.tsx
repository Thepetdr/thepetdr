"use client";

import { useEffect, useState } from "react";
import { GOOGLE_MAPS_URL } from "@/lib/clinic-links";

type Review = {
  name: string;
  authorUrl: string | null;
  text: string;
  rating: number | null;
  publishTime: string | null;
  reviewUrl: string;
};
type ReviewsResponse = {
  available: boolean;
  rating?: number | null;
  count?: number | null;
  googleMapsUrl?: string;
  reviews: Review[];
};

export default function GoogleReviews() {
  const [data, setData] = useState<ReviewsResponse | null>(null);

  useEffect(() => {
    const controller = new AbortController();
    fetch("/api/google-reviews", { signal: controller.signal })
      .then((response) => {
        if (!response.ok) throw new Error("Reviews unavailable");
        return response.json() as Promise<ReviewsResponse>;
      })
      .then((response) => setData(response))
      .catch(() => {});
    return () => controller.abort();
  }, []);

  const reviews = data?.available ? data.reviews : [];
  const mapsUrl = data?.googleMapsUrl || GOOGLE_MAPS_URL;

  return (
    <section aria-labelledby="google-reviews-heading" className="bg-[#F8F7F5] py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-6">
        <div className="flex flex-col gap-7 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#AB5574]">Independent client feedback</p>
            <h2 id="google-reviews-heading" className="text-3xl font-semibold tracking-tight text-[#203631] sm:text-5xl">What our clients say on Google</h2>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-[#5A6763]">
              Read feedback directly from the people who have visited The Pet Doctor Center. Reviews are sourced from Google, never written for this website.
            </p>
          </div>
          <a href={mapsUrl} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-12 shrink-0 items-center justify-center rounded-full bg-[#203631] px-7 text-sm font-semibold text-white transition hover:bg-[#36584F]">
            Read all Google reviews <span aria-hidden="true" className="ml-2">↗</span>
          </a>
        </div>

        {data?.available && typeof data.rating === "number" && (
          <div className="mt-8 flex flex-wrap items-center gap-3 text-sm text-[#45564F]">
            <span className="text-xl font-semibold text-[#203631]">{data.rating.toFixed(1)} / 5</span>
            <span aria-label="Rating on Google" className="tracking-widest text-[#D0925B]">★★★★★</span>
            {typeof data.count === "number" && <span>Based on {data.count.toLocaleString()} Google ratings</span>}
          </div>
        )}

        {reviews.length > 0 ? (
          <div className="mt-9 grid gap-5 md:grid-cols-3">
            {reviews.slice(0, 3).map((review, index) => (
              <article key={review.reviewUrl + index} className="flex h-full flex-col rounded-2xl border border-[#E2E9E5] bg-white p-7 shadow-sm">
                <div aria-label={review.rating ? `${review.rating} out of 5 stars` : undefined} className="mb-5 text-[#D0925B]">
                  {review.rating ? "★".repeat(Math.max(0, Math.min(5, Math.round(review.rating)))) : "Google review"}
                </div>
                <p className="line-clamp-6 flex-1 text-sm leading-7 text-[#40524B]">{review.text}</p>
                <div className="mt-6 border-t border-[#E9EEEB] pt-5">
                  <p className="font-semibold text-[#203631]">{review.name}</p>
                  <p className="mt-1 text-xs text-[#7A8981]">Google Maps review</p>
                  <a className="mt-3 inline-block text-xs font-semibold text-[#9B5570] underline-offset-4 hover:underline" href={review.reviewUrl} target="_blank" rel="noopener noreferrer">View on Google ↗</a>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="mt-9 flex flex-col gap-5 rounded-2xl border border-[#DCE7E3] bg-white p-7 sm:flex-row sm:items-center sm:justify-between sm:p-9">
            <div>
              <p className="text-lg font-semibold text-[#203631]">See verified client feedback</p>
              <p className="mt-2 max-w-lg text-sm leading-6 text-[#596961]">Browse our reviews on our official Google Maps listing. We don't display testimonials without a verified source.</p>
            </div>
            <a href={mapsUrl} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-12 items-center justify-center rounded-full border border-[#203631] px-6 text-sm font-semibold text-[#203631] hover:bg-[#F2F7F4]">Open Google Reviews ↗</a>
          </div>
        )}
        <p className="mt-5 text-xs text-[#718078]">Google reviews are attributed to their original authors. Availability and selection are controlled by Google.</p>
      </div>
    </section>
  );
}
