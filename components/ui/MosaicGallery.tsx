'use client';

import { useState, useCallback, useEffect } from 'react';
import Image from 'next/image';
import RevealOnScroll from './RevealOnScroll';

interface MosaicGalleryProps {
  images: string[];
  projectTitle: string;
}

/**
 * Layout pattern for a group of images within the mosaic.
 * Each item defines its column span and row span on the 3-column desktop grid.
 * Patterns are designed so rows pack tightly with no gaps.
 */
interface TileLayout {
  colSpan: number; // 1 | 2 | 3
  rowSpan: number; // 1 | 2
}

// Repeating layout patterns — each pattern is designed for a specific group size
// and tiles perfectly in a 3-column grid with 2-unit row height per tile pair.
const PATTERNS: Record<number, TileLayout[]> = {
  // 1 image: full-width hero
  1: [{ colSpan: 3, rowSpan: 2 }],
  // 2 images: large + medium
  2: [
    { colSpan: 2, rowSpan: 2 },
    { colSpan: 1, rowSpan: 2 },
  ],
  // 3 images: one large left, two stacked right
  3: [
    { colSpan: 2, rowSpan: 2 },
    { colSpan: 1, rowSpan: 1 },
    { colSpan: 1, rowSpan: 1 },
  ],
  // 4 images: two stacked left, one large right (row 1), then full width
  4: [
    { colSpan: 1, rowSpan: 1 },
    { colSpan: 2, rowSpan: 2 },
    { colSpan: 1, rowSpan: 1 },
    { colSpan: 3, rowSpan: 2 },
  ],
  // 5 images: 2-top + large-left-bottom with 2 stacked right
  5: [
    { colSpan: 2, rowSpan: 2 },
    { colSpan: 1, rowSpan: 1 },
    { colSpan: 1, rowSpan: 1 },
    { colSpan: 1, rowSpan: 2 },
    { colSpan: 2, rowSpan: 2 },
  ],
  // 6 images: balanced 3+3
  6: [
    { colSpan: 2, rowSpan: 2 },
    { colSpan: 1, rowSpan: 1 },
    { colSpan: 1, rowSpan: 1 },
    { colSpan: 1, rowSpan: 1 },
    { colSpan: 1, rowSpan: 1 },
    { colSpan: 2, rowSpan: 2 },
  ],
};

// For groups larger than 6, cycle through these chunk patterns
const CYCLE_SIZES = [3, 3];

function getLayoutForImages(count: number): TileLayout[] {
  if (count <= 6) return PATTERNS[count] || PATTERNS[3];

  // For > 6 images, use a pattern for the first chunk, then cycle
  const layouts: TileLayout[] = [];
  let remaining = count;
  let cycleIndex = 0;
  let isFirst = true;

  while (remaining > 0) {
    let chunkSize: number;
    if (isFirst) {
      // First chunk: use the largest pattern that fits
      chunkSize = Math.min(remaining, 5);
      isFirst = false;
    } else {
      chunkSize = Math.min(remaining, CYCLE_SIZES[cycleIndex % CYCLE_SIZES.length]);
      cycleIndex++;
    }
    // If we'd leave 1 image orphaned, adjust
    if (remaining - chunkSize === 1) {
      chunkSize = remaining <= 4 ? remaining : chunkSize + 1;
    }
    chunkSize = Math.min(chunkSize, remaining);
    const pattern = PATTERNS[chunkSize] || PATTERNS[3];
    layouts.push(...pattern.slice(0, chunkSize));
    remaining -= chunkSize;
  }

  return layouts;
}

function getGridClasses(layout: TileLayout): string {
  const col = layout.colSpan === 3 ? 'md:col-span-2 lg:col-span-3' :
              layout.colSpan === 2 ? 'md:col-span-2 lg:col-span-2' :
              'md:col-span-1 lg:col-span-1';
  const row = layout.rowSpan === 2 ? 'lg:row-span-2' : 'lg:row-span-1';
  return `col-span-1 ${col} ${row}`;
}

function getAspectRatio(layout: TileLayout): string {
  // Mobile: consistent aspect ratios
  // Desktop: aspect ratio adapts to tile shape
  if (layout.colSpan === 3 && layout.rowSpan === 2) return '16/9';
  if (layout.colSpan === 2 && layout.rowSpan === 2) return '4/3';
  if (layout.colSpan === 2 && layout.rowSpan === 1) return '16/9';
  if (layout.colSpan === 1 && layout.rowSpan === 2) return '3/4';
  if (layout.colSpan === 1 && layout.rowSpan === 1) return '4/3';
  return '4/3';
}

export default function MosaicGallery({ images, projectTitle }: MosaicGalleryProps) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const layouts = getLayoutForImages(images.length);

  const openLightbox = useCallback((i: number) => setLightboxIndex(i), []);
  const closeLightbox = useCallback(() => setLightboxIndex(null), []);
  const goPrev = useCallback(() => setLightboxIndex((prev) => prev !== null ? (prev - 1 + images.length) % images.length : null), [images.length]);
  const goNext = useCallback(() => setLightboxIndex((prev) => prev !== null ? (prev + 1) % images.length : null), [images.length]);

  // Keyboard navigation & scroll lock
  useEffect(() => {
    if (lightboxIndex === null) return;
    document.body.style.overflow = 'hidden';
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') goPrev();
      if (e.key === 'ArrowRight') goNext();
    };
    window.addEventListener('keydown', handleKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKey);
    };
  }, [lightboxIndex, closeLightbox, goPrev, goNext]);

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 lg:gap-3 mosaic-grid">
        {images.map((img, i) => {
          const layout = layouts[i] || { colSpan: 1, rowSpan: 1 };
          const gridClasses = getGridClasses(layout);
          const aspectRatio = getAspectRatio(layout);

          return (
            <RevealOnScroll key={i} delay={Math.min(i * 0.06, 0.4)} className={gridClasses}>
              <button
                type="button"
                onClick={() => openLightbox(i)}
                className="relative overflow-hidden bg-warm-stone img-hover-scale cursor-zoom-in group block w-full h-full"
                style={{ aspectRatio }}
                aria-label={`View ${projectTitle} photo ${i + 1}`}
              >
                <Image
                  src={img}
                  alt={`${projectTitle} — detail ${i + 1}`}
                  fill
                  className="object-cover"
                  sizes={
                    layout.colSpan === 3 ? '100vw' :
                    layout.colSpan === 2 ? '(max-width:768px)100vw,66vw' :
                    '(max-width:768px)100vw,(max-width:1024px)50vw,33vw'
                  }
                  unoptimized
                />
                {/* Subtle hover overlay */}
                <div className="absolute inset-0 bg-[rgba(26,24,20,0)] group-hover:bg-[rgba(26,24,20,0.1)] transition-colors duration-500" />
              </button>
            </RevealOnScroll>
          );
        })}
      </div>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-[9999] bg-[rgba(10,10,8,0.95)] flex items-center justify-center"
          onClick={closeLightbox}
          role="dialog"
          aria-label="Image lightbox"
          aria-modal="true"
        >
          {/* Close button */}
          <button
            onClick={closeLightbox}
            className="absolute top-5 right-5 z-10 text-[rgba(248,244,238,0.6)] hover:text-cream transition-colors p-2"
            aria-label="Close lightbox"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>

          {/* Previous */}
          {images.length > 1 && (
            <button
              onClick={(e) => { e.stopPropagation(); goPrev(); }}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-10 text-[rgba(248,244,238,0.5)] hover:text-cream transition-colors p-3"
              aria-label="Previous image"
            >
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>
          )}

          {/* Image */}
          <div
            className="relative max-w-[90vw] max-h-[85vh] w-full h-full"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={images[lightboxIndex]}
              alt={`${projectTitle} — detail ${lightboxIndex + 1}`}
              fill
              className="object-contain"
              sizes="90vw"
              unoptimized
              priority
            />
          </div>

          {/* Next */}
          {images.length > 1 && (
            <button
              onClick={(e) => { e.stopPropagation(); goNext(); }}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-10 text-[rgba(248,244,238,0.5)] hover:text-cream transition-colors p-3"
              aria-label="Next image"
            >
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>
          )}

          {/* Counter */}
          <p className="absolute bottom-5 left-1/2 -translate-x-1/2 text-[rgba(248,244,238,0.4)] text-xs tracking-[0.1em]">
            {lightboxIndex + 1} / {images.length}
          </p>
        </div>
      )}
    </>
  );
}
