"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";

type Photo = { src: string; alt: string };

type Props = {
  before: Photo;       // shown on the left side of the divider
  after: Photo;        // shown on the right side of the divider
  beforeLabel?: string;
  afterLabel?: string;
  initial?: number;    // starting position 0–100 (default 50)
  className?: string;
};

/**
 * Drag-to-reveal before/after image slider. Pointer (mouse + touch) and
 * keyboard accessible (← / →, Home/End, PageUp/Down). Renders both photos
 * full-bleed inside an aspect-locked frame; the "before" image is clipped
 * to a width that the divider controls.
 */
export default function BeforeAfterSlider({
  before,
  after,
  beforeLabel = "Plan",
  afterLabel = "Built",
  initial = 50,
  className = "",
}: Props) {
  const frameRef = useRef<HTMLDivElement>(null);
  const handleRef = useRef<HTMLButtonElement>(null);
  const [pos, setPos] = useState(initial);
  const dragging = useRef(false);

  const setFromClientX = useCallback((clientX: number) => {
    const el = frameRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const pct = ((clientX - rect.left) / rect.width) * 100;
    setPos(Math.max(0, Math.min(100, pct)));
  }, []);

  // Pointer events handle mouse + touch + pen uniformly.
  useEffect(() => {
    function onMove(e: PointerEvent) {
      if (!dragging.current) return;
      e.preventDefault();
      setFromClientX(e.clientX);
    }
    function onUp() {
      dragging.current = false;
    }
    window.addEventListener("pointermove", onMove);
    window.addEventListener("pointerup", onUp);
    window.addEventListener("pointercancel", onUp);
    return () => {
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerup", onUp);
      window.removeEventListener("pointercancel", onUp);
    };
  }, [setFromClientX]);

  function onPointerDownFrame(e: React.PointerEvent<HTMLDivElement>) {
    dragging.current = true;
    setFromClientX(e.clientX);
    handleRef.current?.focus();
  }

  function onKeyDown(e: React.KeyboardEvent<HTMLButtonElement>) {
    const step = e.shiftKey ? 10 : 2;
    if (e.key === "ArrowLeft")  { e.preventDefault(); setPos((p) => Math.max(0, p - step)); }
    else if (e.key === "ArrowRight") { e.preventDefault(); setPos((p) => Math.min(100, p + step)); }
    else if (e.key === "Home")  { e.preventDefault(); setPos(0); }
    else if (e.key === "End")   { e.preventDefault(); setPos(100); }
    else if (e.key === "PageDown") { e.preventDefault(); setPos((p) => Math.max(0, p - 10)); }
    else if (e.key === "PageUp")   { e.preventDefault(); setPos((p) => Math.min(100, p + 10)); }
  }

  return (
    <div
      ref={frameRef}
      className={`relative w-full select-none overflow-hidden bg-bark ${className}`}
      onPointerDown={onPointerDownFrame}
      style={{ touchAction: "pan-y" }}
    >
      {/* AFTER — full-frame base layer */}
      <Image
        src={after.src}
        alt={after.alt}
        fill
        sizes="(min-width: 1024px) 1100px, 100vw"
        className="object-cover pointer-events-none"
        priority={false}
      />

      {/* BEFORE — full-frame, clipped to the divider position with clip-path.
          clip-path keeps the image at its natural size and doesn't depend on a
          measured ref, so the left side renders correctly on first paint. */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
        aria-hidden
      >
        <Image
          src={before.src}
          alt={before.alt}
          fill
          sizes="(min-width: 1024px) 1100px, 100vw"
          className="object-cover"
        />
      </div>

      {/* Labels */}
      <span
        aria-hidden
        className={`absolute top-4 left-4 sm:top-6 sm:left-6 inline-flex items-center justify-center gap-2 px-3 py-1.5 bg-cream/95 text-bark text-[10.5px] tracking-[0.22em] uppercase font-medium transition-opacity duration-300 ${
          pos > 6 ? "opacity-100" : "opacity-0"
        }`}
      >
        {beforeLabel}
      </span>
      <span
        aria-hidden
        className={`absolute top-4 right-4 sm:top-6 sm:right-6 inline-flex items-center justify-center gap-2 px-3 py-1.5 bg-cream/95 text-bark text-[10.5px] tracking-[0.22em] uppercase font-medium transition-opacity duration-300 ${
          pos < 94 ? "opacity-100" : "opacity-0"
        }`}
      >
        {afterLabel}
      </span>

      {/* Divider line */}
      <div
        aria-hidden
        className="absolute inset-y-0 bg-cream pointer-events-none"
        style={{ left: `calc(${pos}% - 1px)`, width: 2 }}
      />

      {/* Drag handle */}
      <button
        ref={handleRef}
        type="button"
        role="slider"
        aria-label="Drag to compare plan and built"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={Math.round(pos)}
        onKeyDown={onKeyDown}
        onPointerDown={(e) => {
          e.stopPropagation();
          dragging.current = true;
          setFromClientX(e.clientX);
        }}
        className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 h-12 w-12 rounded-full bg-cream text-bark border border-bark/15 shadow-[0_8px_24px_-8px_rgba(26,24,20,0.5)] flex items-center justify-center cursor-ew-resize hover:scale-105 active:scale-100 transition-transform focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-moss focus-visible:ring-offset-2 focus-visible:ring-offset-bark"
        style={{ left: `${pos}%` }}
      >
        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
          <path d="M4 12h16" />
          <path d="M8 8l-4 4 4 4" />
          <path d="M16 8l4 4-4 4" />
        </svg>
      </button>
    </div>
  );
}
