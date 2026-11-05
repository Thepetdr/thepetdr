"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { GOOGLE_MAPS_URL } from "@/lib/clinic-links";

type Review = {
  name: string;
  authorUrl: string | null;
  authorPhotoUrl: string | null;
  text: string;
  rating: number | null;
  publishTime: string | null;
  relativePublishTime: string | null;
  reportUrl: string | null;
  reviewUrl: string;
};
type ReviewsResponse = {
  available: boolean;
  rating?: number | null;
  count?: number | null;
  googleMapsUrl?: string;
  reviews: Review[];
};

function Stars({ value, className = "" }: { value: number; className?: string }) {
  const full = Math.max(0, Math.min(5, Math.round(value)));
  return (
    <span role="img" aria-label={`${full} out of 5 stars`} className={`tracking-wider ${className}`}>
      <span className="text-[#F38BB0]">{"★".repeat(full)}</span>
      <span className="text-gray-200">{"★".repeat(5 - full)}</span>
    </span>
  );
}

export default function GoogleReviews() {
  const [data, setData] = useState<ReviewsResponse | null>(null);
  const [paused, setPaused] = useState(false);
  const track = useRef<HTMLDivElement>(null);

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

  const slide = useCallback((direction: 1 | -1) => {
    const el = track.current;
    if (!el) return;
    const card = el.querySelector("article");
    const step = card ? card.getBoundingClientRect().width + 16 : el.clientWidth;
    const atEnd = el.scrollLeft + el.clientWidth >= el.scrollWidth - 4;
    if (direction === 1 && atEnd) el.scrollTo({ left: 0, behavior: "smooth" });
    else el.scrollBy({ left: direction * step, behavior: "smooth" });
  }, []);

  // Auto-advance; pauses on hover/focus and when the visitor prefers reduced motion.
  useEffect(() => {
    if (reviews.length < 2 || paused) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = window.setInterval(() => slide(1), 5000);
    return () => window.clearInterval(id);
  }, [reviews.length, paused, slide]);

  return (
    <section aria-labelledby="google-reviews-heading" className="bg-[#FDF7F9] py-10 sm:py-14">
      <div className="mx-auto max-w-7xl px-5 sm:px-6">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#B8466F]">Google reviews</p>
            <h2 id="google-reviews-heading" className="text-2xl font-semibold tracking-tight text-gray-900 sm:text-3xl">What our clients say</h2>
            {data?.available && typeof data.rating === "number" && (
              <p className="mt-2 flex flex-wrap items-center gap-2 text-sm text-gray-600">
                <span className="font-semibold text-gray-900">{data.rating.toFixed(1)}</span>
                <Stars value={data.rating} />
                {typeof data.count === "number" && <span>from {data.count.toLocaleString()} Google ratings</span>}
              </p>
            )}
          </div>
          <div className="flex items-center gap-2">
            {reviews.length > 1 && (
              <>
                <button type="button" onClick={() => slide(-1)} aria-label="Previous review" className="grid h-10 w-10 place-items-center rounded-full border-2 border-[#92CAC2] bg-white text-gray-900 transition hover:bg-[#EEF8F6]">‹</button>
                <button type="button" onClick={() => slide(1)} aria-label="Next review" className="grid h-10 w-10 place-items-center rounded-full border-2 border-[#92CAC2] bg-white text-gray-900 transition hover:bg-[#EEF8F6]">›</button>
              </>
            )}
            <a href={mapsUrl} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-10 items-center justify-center rounded-full bg-[#F38BB0] px-5 text-sm font-semibold text-gray-900 transition hover:bg-[#EE76A1]">
              All reviews on Google <span aria-hidden="true" className="ml-1.5">↗</span>
            </a>
          </div>
        </div>

        {reviews.length > 0 ? (
          <div
            ref={track}
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
            onFocus={() => setPaused(true)}
            onBlur={() => setPaused(false)}
            aria-roledescription="carousel"
            aria-label="Google reviews"
            className="mt-6 flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {reviews.map((review, index) => (
              <article
                key={review.reviewUrl + index}
                aria-roledescription="slide"
                aria-label={`${index + 1} of ${reviews.length}`}
                className="flex w-[85%] shrink-0 snap-start flex-col rounded-2xl border border-[#F7DCE6] bg-white p-5 shadow-sm sm:w-[calc(50%-8px)] lg:w-[calc(33.333%-11px)]"
              >
                <div className="flex items-center gap-3">
                  {review.authorPhotoUrl && (
                    // Reviewer photo supplied by Google's author attribution, not a stock avatar.
                    // eslint-disable-next-line @next/next/no-img-element
                    <img src={review.authorPhotoUrl} alt="" className="h-9 w-9 rounded-full object-cover" loading="lazy" referrerPolicy="no-referrer" />
                  )}
                  <div className="min-w-0">
                    {review.authorUrl ? (
                      <a href={review.authorUrl} target="_blank" rel="noopener noreferrer" className="block truncate font-semibold text-gray-900 hover:underline">{review.name}</a>
                    ) : (
                      <p className="truncate font-semibold text-gray-900">{review.name}</p>
                    )}
                    {review.rating && <Stars value={review.rating} className="text-sm" />}
                  </div>
                </div>
                <p className="mt-3 line-clamp-4 flex-1 text-sm leading-6 text-gray-700">{review.text}</p>
                <a className="mt-3 text-xs font-semibold text-[#B8466F] hover:underline" href={review.reviewUrl} target="_blank" rel="noopener noreferrer">
                  <span translate="no">Google</span> review ↗
                </a>
              </article>
            ))}
          </div>
        ) : (
          <p className="mt-4 text-sm text-gray-600">
            We only show reviews from our official Google Maps listing. Browse them on Google using the button above.
          </p>
        )}
        {reviews.length > 0 && (
          <p className="mt-3 text-xs text-gray-500">Showing 4 and 5 star reviews from our Google listing, as provided by Google. See all reviews on Google.</p>
        )}
      </div>
    </section>
  );
}
