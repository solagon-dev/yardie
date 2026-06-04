'use client';

import { useState, useEffect } from 'react';

const INTERVAL = 6500; // ms between auto-advances

interface Review {
  author: string;
  text: string;
  relativeTime: string;
}

interface Props {
  reviews: Review[];
}

export default function ReviewsCarousel({ reviews }: Props) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  // On desktop we show 3 at a time; the max slide position is reviews.length - 3
  const maxIndex = Math.max(0, reviews.length - 3);
  const positions = maxIndex + 1; // number of distinct slide positions
  const showControls = reviews.length > 3;

  const prev = () => setIndex((i) => (i <= 0 ? maxIndex : i - 1));
  const next = () => setIndex((i) => (i >= maxIndex ? 0 : i + 1));

  // Auto-advance — timer resets whenever index or paused changes
  useEffect(() => {
    if (paused || !showControls) return;
    const id = setTimeout(next, INTERVAL);
    return () => clearTimeout(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index, paused, showControls]);

  if (!reviews.length) return null;

  return (
    <div
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* ── DESKTOP: JS-driven 3-up carousel ── */}
      <div className="hidden lg:block">
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-[700ms] ease-[cubic-bezier(0.22,1,0.36,1)]"
            style={{ transform: `translateX(calc(${-index} * (100% / 3)))` }}
          >
            {reviews.map((review, i) => (
              <div
                key={i}
                className="flex-none px-[1px]"
                style={{ width: 'calc(100% / 3)' }}
              >
                <ReviewCard review={review} />
              </div>
            ))}
          </div>
        </div>

        {showControls && (
          <>
            {/* Progress bar — remounts (via key) on each index change to restart animation */}
            <div className="mt-8 h-[1px] bg-[rgba(248,244,238,0.07)] overflow-hidden">
              {!paused && (
                <div
                  key={index}
                  className="h-full bg-moss"
                  style={{ animation: `review-progress ${INTERVAL}ms linear forwards` }}
                />
              )}
            </div>

            {/* Controls row */}
            <div className="mt-6 flex items-center justify-between">
              {/* Dot indicators */}
              <div className="flex items-center gap-[10px]" role="tablist" aria-label="Review set">
                {Array.from({ length: positions }).map((_, i) => (
                  <button
                    key={i}
                    role="tab"
                    aria-selected={i === index}
                    aria-label={`Show review set ${i + 1}`}
                    onClick={() => setIndex(i)}
                    className={`transition-all duration-300 rounded-full flex-shrink-0 ${
                      i === index
                        ? 'w-7 h-[3px] bg-moss'
                        : 'w-[6px] h-[6px] bg-[rgba(248,244,238,0.18)] hover:bg-[rgba(248,244,238,0.4)]'
                    }`}
                  />
                ))}
              </div>

              {/* Counter + arrows */}
              <div className="flex items-center gap-6">
                <span
                  className="font-display text-[rgba(248,244,238,0.25)] tabular-nums select-none"
                  style={{ fontSize: '0.9rem', fontWeight: 500, letterSpacing: '0.04em' }}
                  aria-live="polite"
                >
                  {String(index + 1).padStart(2, '0')}&thinsp;/&thinsp;{String(positions).padStart(2, '0')}
                </span>
                <div className="flex gap-2">
                  <button
                    onClick={prev}
                    aria-label="Previous reviews"
                    className="w-10 h-10 rounded-full border border-[rgba(248,244,238,0.12)] flex items-center justify-center text-[rgba(248,244,238,0.45)] hover:border-[rgba(248,244,238,0.4)] hover:text-cream transition-all duration-200"
                  >
                    <svg width="14" height="10" viewBox="0 0 14 10" fill="none" aria-hidden="true">
                      <path d="M5 1L1 5L5 9M1 5h12" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>
                  <button
                    onClick={next}
                    aria-label="Next reviews"
                    className="w-10 h-10 rounded-full border border-[rgba(248,244,238,0.12)] flex items-center justify-center text-[rgba(248,244,238,0.45)] hover:border-[rgba(248,244,238,0.4)] hover:text-cream transition-all duration-200"
                  >
                    <svg width="14" height="10" viewBox="0 0 14 10" fill="none" aria-hidden="true">
                      <path d="M9 1l4 4-4 4M13 5H1" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </>
        )}
      </div>

      {/* ── MOBILE: CSS snap scroll ── */}
      <div
        className="lg:hidden flex overflow-x-auto snap-x snap-mandatory gap-px"
        style={{ scrollbarWidth: 'none' }}
      >
        {reviews.map((review, i) => (
          <div key={i} className="flex-none w-[88vw] snap-start">
            <ReviewCard review={review} />
          </div>
        ))}
      </div>
    </div>
  );
}

// ── Shared card ────────────────────────────────────────────────────────────────

function ReviewCard({ review }: { review: Review }) {
  return (
    <div
      className="relative flex flex-col overflow-hidden h-full"
      style={{
        background: 'rgba(248,244,238,0.035)',
        borderLeft: '1px solid rgba(248,244,238,0.06)',
        borderRight: '1px solid rgba(248,244,238,0.06)',
        minHeight: 'clamp(290px, 28vw, 400px)',
        padding: 'clamp(2rem, 3vw, 3rem)',
      }}
    >
      {/* Moss accent line */}
      <div className="absolute top-0 left-[clamp(2rem,3vw,3rem)] w-8 h-[2px] bg-moss" />

      {/* Background quotation mark — decorative */}
      <div
        className="absolute -top-3 right-6 font-display select-none pointer-events-none"
        aria-hidden="true"
        style={{
          fontSize: '8rem',
          lineHeight: 1,
          fontWeight: 500,
          color: 'rgba(248,244,238,0.04)',
        }}
      >
        &ldquo;
      </div>

      {/* Stars */}
      <div className="flex gap-1 mb-7 flex-shrink-0 relative z-10">
        {[1, 2, 3, 4, 5].map((s) => (
          <svg key={s} width="11" height="11" viewBox="0 0 16 16" fill="currentColor" className="text-moss" aria-hidden="true">
            <path d="M8 1l1.85 3.75L14 5.5l-3 2.92.71 4.12L8 10.5l-3.71 1.95.71-4.12L2 5.5l4.15-.75L8 1z" />
          </svg>
        ))}
      </div>

      {/* Quote */}
      <p
        className="font-display text-cream flex-1 leading-[1.65] relative z-10"
        style={{ fontSize: 'clamp(0.95rem,1.3vw,1.1rem)', fontWeight: 500, fontStyle: 'italic' }}
      >
        &ldquo;{review.text}&rdquo;
      </p>

      {/* Author */}
      <cite
        className="block mt-8 not-italic relative z-10 flex-shrink-0"
        style={{ borderTop: '1px solid rgba(248,244,238,0.07)', paddingTop: '1.25rem' }}
      >
        <div className="flex items-center gap-4">
          <div className="w-9 h-9 rounded-full bg-[rgba(248,244,238,0.07)] border border-[rgba(248,244,238,0.1)] flex items-center justify-center flex-shrink-0">
            <span className="text-[rgba(248,244,238,0.5)] text-[11px] font-[500]">
              {review.author.charAt(0)}
            </span>
          </div>
          <div>
            <span className="block text-[11px] text-cream tracking-[0.1em] uppercase font-[500]">
              {review.author}
            </span>
            <span className="block text-[10px] text-[rgba(248,244,238,0.28)] tracking-[0.06em] mt-0.5">
              {review.relativeTime} · Google
            </span>
          </div>
        </div>
      </cite>
    </div>
  );
}
