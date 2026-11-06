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

  const initials = (name: string) =>
    name.split(/\s+/).filter(Boolean).slice(0, 2).map((part) => part[0]?.toUpperCase()).join("");

  return (
    <section aria-labelledby="google-reviews-heading" className="border-y border-[#F7DCE6] bg-[#FDF7F9] py-12 sm:py-14">
      <div className="mx-auto grid max-w-7xl gap-8 px-5 sm:px-6 lg:grid-cols-[300px_1fr] lg:items-center lg:gap-12">
        {/* Summary panel */}
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#B8466F]">Google reviews</p>
          <h2 id="google-reviews-heading" className="mt-2 text-2xl font-semibold tracking-tight text-gray-900 sm:text-3xl">What pet parents say</h2>
          <div className="mt-5 rounded-2xl border border-[#F7DCE6] bg-white p-5 shadow-sm">
            <p className="flex items-center gap-2 text-sm font-medium text-gray-500">
              <span aria-hidden="true" className="grid h-7 w-7 place-items-center rounded-full bg-gray-50 text-sm font-bold text-gray-700 ring-1 ring-gray-200">G</span>
              <span translate="no">Google</span> rating
            </p>
            {data?.available && typeof data.rating === "number" ? (
              <div className="mt-3 flex items-end gap-3">
                <span className="text-4xl font-semibold leading-none text-gray-900">{data.rating.toFixed(1)}</span>
                <div className="pb-0.5">
                  <Stars value={data.rating} className="text-lg" />
                  {typeof data.count === "number" && <p className="text-xs text-gray-500">{data.count.toLocaleString()} reviews</p>}
                </div>
              </div>
            ) : (
              <p className="mt-3 text-sm leading-6 text-gray-600">See what our clients say on our official Google listing.</p>
            )}
            <a href={mapsUrl} target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex min-h-10 w-full items-center justify-center rounded-full bg-[#F38BB0] px-5 text-sm font-semibold text-gray-900 transition hover:bg-[#EE76A1]">
              Read reviews on Google <span aria-hidden="true" className="ml-1.5">↗</span>
            </a>
          </div>
        </div>

        {/* Carousel */}
        {reviews.length > 0 ? (
          <div className="min-w-0">
            <div
              ref={track}
              onMouseEnter={() => setPaused(true)}
              onMouseLeave={() => setPaused(false)}
              onFocus={() => setPaused(true)}
              onBlur={() => setPaused(false)}
              aria-roledescription="carousel"
              aria-label="Google reviews"
              className="flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            >
              {reviews.map((review, index) => (
                <article
                  key={review.reviewUrl + index}
                  aria-roledescription="slide"
                  aria-label={`${index + 1} of ${reviews.length}`}
                  className="relative flex w-[85%] shrink-0 snap-start flex-col rounded-2xl border border-[#F7DCE6] bg-white p-6 shadow-sm sm:w-[calc(50%-8px)]"
                >
                  <span aria-hidden="true" className="absolute right-5 top-3 font-serif text-5xl leading-none text-[#F7DCE6]">&ldquo;</span>
                  {review.rating && <Stars value={review.rating} />}
                  <p className="mt-3 line-clamp-4 flex-1 text-[15px] leading-7 text-gray-700">{review.text}</p>
                  <div className="mt-5 flex items-center gap-3 border-t border-gray-100 pt-4">
                    {review.authorPhotoUrl ? (
                      // Reviewer photo supplied by Google's author attribution, not a stock avatar.
                      // eslint-disable-next-line @next/next/no-img-element
                      <img src={review.authorPhotoUrl} alt="" className="h-9 w-9 rounded-full object-cover" loading="lazy" referrerPolicy="no-referrer" />
                    ) : (
                      <span aria-hidden="true" className="grid h-9 w-9 place-items-center rounded-full bg-[#EEF8F6] text-xs font-semibold text-[#2F7F76]">{initials(review.name)}</span>
                    )}
                    <div className="min-w-0 flex-1">
                      {review.authorUrl ? (
                        <a href={review.authorUrl} target="_blank" rel="noopener noreferrer" className="block truncate text-sm font-semibold text-gray-900 hover:underline">{review.name}</a>
                      ) : (
                        <p className="truncate text-sm font-semibold text-gray-900">{review.name}</p>
                      )}
                      <a href={review.reviewUrl} target="_blank" rel="noopener noreferrer" className="text-xs text-gray-500 hover:text-[#B8466F]">
                        via <span translate="no">Google</span>{review.relativePublishTime ? ` · ${review.relativePublishTime}` : ""}
                      </a>
                    </div>
                  </div>
                </article>
              ))}
            </div>
            <div className="mt-4 flex items-center justify-between gap-4">
              <p className="text-xs text-gray-500">Showing 4 and 5 star reviews from our Google listing.</p>
              {reviews.length > 1 && (
                <div className="flex gap-2">
                  <button type="button" onClick={() => slide(-1)} aria-label="Previous review" className="grid h-9 w-9 place-items-center rounded-full border border-gray-200 bg-white text-gray-700 transition hover:border-[#92CAC2] hover:text-gray-900">‹</button>
                  <button type="button" onClick={() => slide(1)} aria-label="Next review" className="grid h-9 w-9 place-items-center rounded-full border border-gray-200 bg-white text-gray-700 transition hover:border-[#92CAC2] hover:text-gray-900">›</button>
                </div>
              )}
            </div>
          </div>
        ) : (
          <div className="grid gap-3 sm:grid-cols-3">
            {[
              { title: "Independent", text: "Every review is written by a client on Google, never by us." },
              { title: "Verified source", text: "Reviews come straight from our official Google Maps listing." },
              { title: "Read them all", text: "Open our listing to read every review in full." },
            ].map((item) => (
              <div key={item.title} className="rounded-2xl border border-[#F7DCE6] bg-white p-5">
                <p className="text-sm font-semibold text-gray-900">{item.title}</p>
                <p className="mt-1 text-sm leading-6 text-gray-600">{item.text}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
