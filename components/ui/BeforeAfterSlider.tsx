'use client';

import { useState, useRef, useEffect, useCallback } from 'react';
import Image from 'next/image';

interface BeforeAfterSliderProps {
  beforeSrc: string;
  afterSrc: string;
  beforeLabel?: string;
  afterLabel?: string;
  beforeAlt?: string;
  afterAlt?: string;
}

export default function BeforeAfterSlider({
  beforeSrc,
  afterSrc,
  beforeLabel = 'Design',
  afterLabel = 'Built',
  beforeAlt = 'Design visualization',
  afterAlt = 'Completed project',
}: BeforeAfterSliderProps) {
  const [position, setPosition] = useState(48);
  const [isDragging, setIsDragging] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const updatePosition = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const pct = Math.max(2, Math.min(98, (x / rect.width) * 100));
    setPosition(pct);
    if (!hasInteracted) setHasInteracted(true);
  }, [hasInteracted]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (isDragging) updatePosition(e.clientX);
    };
    const handleMouseUp = () => setIsDragging(false);

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging, updatePosition]);

  return (
    <div
      ref={containerRef}
      className="relative overflow-hidden select-none"
      style={{
        aspectRatio: '16/9',
        cursor: isDragging ? 'col-resize' : 'col-resize',
        touchAction: 'none',
      }}
      onMouseDown={(e) => {
        setIsDragging(true);
        updatePosition(e.clientX);
      }}
      onTouchStart={(e) => updatePosition(e.touches[0].clientX)}
      onTouchMove={(e) => {
        e.preventDefault();
        updatePosition(e.touches[0].clientX);
      }}
      role="img"
      aria-label={`Before and after comparison: ${beforeLabel} vs ${afterLabel}`}
    >
      {/* ── After image (full bleed base) ── */}
      <div className="absolute inset-0">
        <Image
          src={afterSrc}
          alt={afterAlt}
          fill
          className="object-cover object-center"
          sizes="(max-width:1024px)100vw,80vw"
          unoptimized
        />
      </div>

      {/* ── Before image (clipped left) ── */}
      <div
        className="absolute inset-0 overflow-hidden"
        style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
      >
        <Image
          src={beforeSrc}
          alt={beforeAlt}
          fill
          className="object-cover object-center"
          sizes="(max-width:1024px)100vw,80vw"
          unoptimized
        />
        {/* Before label — hide when slider is too far left to have room */}
        {position > 15 && (
          <div className="absolute bottom-6 left-6">
            <span
              className="bg-bark/90 text-cream text-[9px] tracking-[0.2em] uppercase font-[500] px-4 py-2"
              style={{ borderRadius: '2px', backdropFilter: 'blur(4px)' }}
            >
              {beforeLabel}
            </span>
          </div>
        )}
      </div>

      {/* ── After label — hide when slider is too far right to have room ── */}
      {position < 85 && (
        <div className="absolute bottom-6 right-6">
          <span
            className="bg-bark/90 text-cream text-[9px] tracking-[0.2em] uppercase font-[500] px-4 py-2"
            style={{ borderRadius: '2px', backdropFilter: 'blur(4px)' }}
          >
            {afterLabel}
          </span>
        </div>
      )}

      {/* ── Divider line ── */}
      <div
        className="absolute top-0 bottom-0 z-20 pointer-events-none"
        style={{
          left: `${position}%`,
          width: '2px',
          marginLeft: '-1px',
          background: 'rgba(248,244,238,0.9)',
          boxShadow: '0 0 12px rgba(26,24,20,0.4)',
        }}
      />

      {/* ── Drag handle ── */}
      <div
        className="absolute z-30 top-1/2 -translate-y-1/2 -translate-x-1/2"
        style={{ left: `${position}%` }}
        onMouseDown={(e) => {
          e.stopPropagation();
          setIsDragging(true);
        }}
      >
        <div
          className="w-11 h-11 rounded-full bg-cream flex items-center justify-center"
          style={{
            boxShadow: '0 2px 16px rgba(26,24,20,0.35)',
            border: '1.5px solid rgba(248,244,238,0.6)',
            transition: isDragging ? 'none' : 'transform 0.2s ease',
            transform: isDragging ? 'scale(1.1)' : 'scale(1)',
          }}
          aria-hidden="true"
        >
          <svg width="18" height="10" viewBox="0 0 18 10" fill="none" aria-hidden="true">
            <path d="M1 5h16M1 5l3.5-3.5M1 5l3.5 3.5M17 5l-3.5-3.5M17 5l-3.5 3.5" stroke="#1A1814" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </div>

      {/* ── Hint text on first render ── */}
      {!hasInteracted && (
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 pointer-events-none"
          style={{ marginTop: '48px' }}
        >
          <p
            className="text-cream text-[10px] tracking-[0.18em] uppercase font-[500] text-center"
            style={{
              textShadow: '0 1px 4px rgba(0,0,0,0.6)',
              opacity: 0.75,
            }}
          >
            Drag to compare
          </p>
        </div>
      )}
    </div>
  );
}
