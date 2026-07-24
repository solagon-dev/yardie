"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { analytics } from "@/lib/analytics";

export type GalleryPhoto = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

// Progressive loading (brief §13.1 / §6.3): render a first screenful on the
// server and reveal the rest in batches as the visitor scrolls, so the initial
// document isn't ~160 <img> tags. A visible "Load more" button is the
// keyboard/no-IntersectionObserver fallback.
const INITIAL_COUNT = 30;
const BATCH = 30;

/**
 * Gallery masonry + lightbox.
 *
 * Masonry uses CSS columns and reserves each photo's natural aspect ratio via
 * inline `aspect-ratio` so tiles don't reflow as images download.
 *
 * Accessibility (brief §14): each tile is a real <button> (keyboard-openable,
 * visible focus ring); the lightbox is a modal dialog that moves focus to its
 * Close control on open, traps Tab within its controls, restores focus to the
 * originating tile on close, and supports Escape / ← / → and backdrop click.
 */
export default function GalleryClient({ photos }: { photos: GalleryPhoto[] }) {
  const [openIdx, setOpenIdx] = useState<number | null>(null);
  const [visible, setVisible] = useState(INITIAL_COUNT);

  // Remember which tile opened the lightbox so focus can return there on close.
  const openerRef = useRef<HTMLButtonElement | null>(null);

  const open = useCallback((i: number, el: HTMLButtonElement) => {
    openerRef.current = el;
    analytics.gallery("open_lightbox");
    setOpenIdx(i);
  }, []);
  const close = useCallback(() => setOpenIdx(null), []);
  const prev = useCallback(
    () => setOpenIdx((i) => (i === null ? null : (i - 1 + photos.length) % photos.length)),
    [photos.length]
  );
  const next = useCallback(
    () => setOpenIdx((i) => (i === null ? null : (i + 1) % photos.length)),
    [photos.length]
  );

  const showMore = useCallback(() => {
    analytics.gallery("load_more");
    setVisible((v) => Math.min(photos.length, v + BATCH));
  }, [photos.length]);

  // Auto-reveal the next batch when the sentinel scrolls into view.
  const sentinelRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    if (visible >= photos.length) return;
    const el = sentinelRef.current;
    if (!el || typeof IntersectionObserver === "undefined") return;
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) showMore();
      },
      { rootMargin: "800px 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [visible, photos.length, showMore]);

  const shown = photos.slice(0, visible);

  return (
    <>
      <div className="columns-2 md:columns-3 lg:columns-4 gap-3 sm:gap-4 [column-fill:_balance]">
        {shown.map((m, i) => (
          <button
            type="button"
            key={m.src}
            aria-label={`Enlarge: ${m.alt}`}
            className="mb-3 sm:mb-4 block w-full break-inside-avoid overflow-hidden bg-stone group cursor-zoom-in focus:outline-none focus-visible:ring-2 focus-visible:ring-moss focus-visible:ring-offset-2 focus-visible:ring-offset-cream"
            style={{ aspectRatio: `${m.width} / ${m.height}` }}
            onClick={(e) => open(i, e.currentTarget)}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={m.src}
              alt={m.alt}
              width={m.width}
              height={m.height}
              loading={i < 6 ? "eager" : "lazy"}
              decoding="async"
              className="block w-full h-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-[1.03]"
            />
          </button>
        ))}
      </div>

      {visible < photos.length && (
        <div className="mt-8 flex flex-col items-center gap-4">
          <div ref={sentinelRef} aria-hidden className="h-px w-full" />
          <button
            type="button"
            onClick={showMore}
            className="inline-flex items-center justify-center px-8 py-3.5 border border-bark/30 text-bark text-[12px] tracking-[0.22em] uppercase font-medium hover:bg-bark hover:text-cream hover:border-bark transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-moss focus-visible:ring-offset-2 focus-visible:ring-offset-cream"
          >
            Load more &middot; {visible} / {photos.length}
          </button>
        </div>
      )}

      {openIdx !== null && (
        <Lightbox
          photo={photos[openIdx]}
          index={openIdx}
          total={photos.length}
          onClose={close}
          onPrev={prev}
          onNext={next}
          returnFocusTo={openerRef}
        />
      )}
    </>
  );
}

function Lightbox({
  photo,
  index,
  total,
  onClose,
  onPrev,
  onNext,
  returnFocusTo,
}: {
  photo: GalleryPhoto;
  index: number;
  total: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
  returnFocusTo: React.RefObject<HTMLButtonElement | null>;
}) {
  const closeRef = useRef<HTMLButtonElement | null>(null);
  const dialogRef = useRef<HTMLDivElement | null>(null);

  // Move focus into the dialog on open; restore it to the opening tile on close.
  useEffect(() => {
    const opener = returnFocusTo.current;
    closeRef.current?.focus();
    return () => opener?.focus();
  }, [returnFocusTo]);

  // Keyboard: Escape closes, ←/→ navigate, Tab is trapped within the controls.
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") { onClose(); return; }
      if (e.key === "ArrowLeft") { onPrev(); return; }
      if (e.key === "ArrowRight") { onNext(); return; }
      if (e.key === "Tab") {
        const focusables = dialogRef.current?.querySelectorAll<HTMLElement>("button");
        if (!focusables || focusables.length === 0) return;
        const first = focusables[0];
        const last = focusables[focusables.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose, onPrev, onNext]);

  // Body scroll lock while open.
  useEffect(() => {
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = prevOverflow; };
  }, []);

  return (
    <div
      ref={dialogRef}
      role="dialog"
      aria-modal="true"
      aria-label={`Gallery image ${index + 1} of ${total}: ${photo.alt}`}
      className="fixed inset-0 z-[120] flex items-center justify-center bg-bark/95 backdrop-blur-sm animate-fade-in"
      onClick={onClose}
    >
      {/* Close */}
      <button
        ref={closeRef}
        type="button"
        onClick={(e) => { e.stopPropagation(); onClose(); }}
        aria-label="Close"
        className="absolute top-5 right-5 sm:top-7 sm:right-8 z-10 inline-flex items-center justify-center h-10 w-10 text-cream/85 hover:text-cream transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-cream"
      >
        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.4} stroke="currentColor" aria-hidden>
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
        </svg>
      </button>

      {/* Counter */}
      <div className="absolute top-6 left-5 sm:top-8 sm:left-8 z-10 font-mono text-[11px] tabular-nums text-cream/65 tracking-[0.22em] uppercase pointer-events-none">
        {String(index + 1).padStart(3, "0")} <span className="text-cream/70 mx-1">/</span> {String(total).padStart(3, "0")}
      </div>

      {/* Prev */}
      <button
        type="button"
        onClick={(e) => { e.stopPropagation(); onPrev(); }}
        aria-label="Previous image"
        className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 z-10 inline-flex items-center justify-center h-12 w-12 sm:h-14 sm:w-14 border border-cream/30 text-cream/80 hover:text-cream hover:border-cream/70 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-cream"
      >
        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" aria-hidden>
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
        </svg>
      </button>

      {/* Next */}
      <button
        type="button"
        onClick={(e) => { e.stopPropagation(); onNext(); }}
        aria-label="Next image"
        className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 z-10 inline-flex items-center justify-center h-12 w-12 sm:h-14 sm:w-14 border border-cream/30 text-cream/80 hover:text-cream hover:border-cream/70 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-cream"
      >
        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" aria-hidden>
          <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
        </svg>
      </button>

      {/* Image — clicking the image itself shouldn't close the modal */}
      <figure
        className="relative w-full h-full flex items-center justify-center px-12 sm:px-20 lg:px-28 py-16 sm:py-20"
        onClick={(e) => e.stopPropagation()}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          key={photo.src}
          src={photo.src}
          alt={photo.alt}
          width={photo.width}
          height={photo.height}
          className="max-h-full max-w-full object-contain animate-fade-in select-none"
          draggable={false}
        />
        <figcaption className="absolute bottom-5 left-1/2 -translate-x-1/2 max-w-[80%] text-center text-[12.5px] sm:text-[13.5px] text-cream/75 leading-relaxed">
          {photo.alt}
        </figcaption>
      </figure>
    </div>
  );
}
