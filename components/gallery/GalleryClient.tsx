"use client";

import { useCallback, useEffect, useState } from "react";

export type GalleryPhoto = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

/**
 * Gallery masonry + lightbox.
 *
 * The masonry uses CSS columns and reserves the natural aspect ratio of
 * each photo via inline `aspect-ratio` so tiles don't reflow as images
 * download — the old version stuttered visibly on first paint because
 * column balance recomputed every time an image revealed its height.
 *
 * Clicking any tile opens a fullscreen lightbox with prev/next/close
 * controls (mouse + keyboard + swipe-style backdrop click).
 */
export default function GalleryClient({ photos }: { photos: GalleryPhoto[] }) {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  const open = useCallback((i: number) => setOpenIdx(i), []);
  const close = useCallback(() => setOpenIdx(null), []);
  const prev = useCallback(
    () => setOpenIdx((i) => (i === null ? null : (i - 1 + photos.length) % photos.length)),
    [photos.length]
  );
  const next = useCallback(
    () => setOpenIdx((i) => (i === null ? null : (i + 1) % photos.length)),
    [photos.length]
  );

  // Keyboard nav while open.
  useEffect(() => {
    if (openIdx === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      else if (e.key === "ArrowLeft") prev();
      else if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [openIdx, close, prev, next]);

  // Body scroll lock while open.
  useEffect(() => {
    if (openIdx === null) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prevOverflow;
    };
  }, [openIdx]);

  return (
    <>
      <div className="columns-2 md:columns-3 lg:columns-4 gap-3 sm:gap-4 [column-fill:_balance]">
        {photos.map((m, i) => (
          <figure
            key={m.src}
            className="mb-3 sm:mb-4 break-inside-avoid overflow-hidden bg-stone group cursor-zoom-in"
            style={{ aspectRatio: `${m.width} / ${m.height}` }}
            onClick={() => open(i)}
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
          </figure>
        ))}
      </div>

      {openIdx !== null && (
        <Lightbox
          photo={photos[openIdx]}
          index={openIdx}
          total={photos.length}
          onClose={close}
          onPrev={prev}
          onNext={next}
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
}: {
  photo: GalleryPhoto;
  index: number;
  total: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}) {
  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Gallery lightbox"
      className="fixed inset-0 z-[120] flex items-center justify-center bg-bark/95 backdrop-blur-sm animate-fade-in"
      onClick={onClose}
    >
      {/* Close */}
      <button
        type="button"
        onClick={(e) => { e.stopPropagation(); onClose(); }}
        aria-label="Close"
        className="absolute top-5 right-5 sm:top-7 sm:right-8 z-10 inline-flex items-center justify-center h-10 w-10 text-cream/85 hover:text-cream transition-colors"
      >
        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.4} stroke="currentColor" aria-hidden>
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
        </svg>
      </button>

      {/* Counter */}
      <div className="absolute top-6 left-5 sm:top-8 sm:left-8 z-10 font-mono text-[11px] tabular-nums text-cream/65 tracking-[0.22em] uppercase pointer-events-none">
        {String(index + 1).padStart(3, "0")} <span className="text-cream/40 mx-1">/</span> {String(total).padStart(3, "0")}
      </div>

      {/* Prev */}
      <button
        type="button"
        onClick={(e) => { e.stopPropagation(); onPrev(); }}
        aria-label="Previous"
        className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 z-10 inline-flex items-center justify-center h-12 w-12 sm:h-14 sm:w-14 border border-cream/30 text-cream/80 hover:text-cream hover:border-cream/70 transition-colors"
      >
        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" aria-hidden>
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
        </svg>
      </button>

      {/* Next */}
      <button
        type="button"
        onClick={(e) => { e.stopPropagation(); onNext(); }}
        aria-label="Next"
        className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 z-10 inline-flex items-center justify-center h-12 w-12 sm:h-14 sm:w-14 border border-cream/30 text-cream/80 hover:text-cream hover:border-cream/70 transition-colors"
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
