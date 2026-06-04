"use client";

import Image from "next/image";
import { useRef, useState } from "react";

type Props = {
  /** Optional video file path. When omitted, the poster acts as a still image card. */
  src?: string;
  poster: string;
  alt: string;
};

/**
 * Story video — vertical 9:16 aspect with poster overlay and play button.
 * If `src` isn't provided we just render a still poster (no controls).
 * Yardie can add a real .mp4 later and the playback path lights up.
 */
export default function StoryVideo({ src, poster, alt }: Props) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);
  const [started, setStarted] = useState(false);

  const play = () => {
    const v = videoRef.current;
    if (!v) return;
    setStarted(true);
    v.play();
    setPlaying(true);
  };

  const togglePlay = () => {
    const v = videoRef.current;
    if (!v) return;
    if (v.paused) {
      v.play();
      setPlaying(true);
    } else {
      v.pause();
      setPlaying(false);
    }
  };

  // No video file — render a still poster only.
  if (!src) {
    return (
      <div className="relative aspect-[9/16] overflow-hidden bg-bark group">
        <Image
          src={poster}
          alt={alt}
          fill
          sizes="(min-width: 1024px) 40vw, 100vw"
          className="object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-[1.03]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-bark/55 via-bark/15 to-bark/25" />
        <div className="absolute inset-x-0 bottom-0 p-6 lg:p-8">
          <p className="mt-2 font-display text-2xl lg:text-[28px] text-cream tracking-tight leading-tight">
            Drawn first. Built once. Looked after.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="relative aspect-[9/16] overflow-hidden bg-bark group">
      <video
        ref={videoRef}
        src={src}
        poster={poster}
        playsInline
        preload="metadata"
        controls={started}
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
        onEnded={() => setPlaying(false)}
        className="absolute inset-0 w-full h-full object-cover"
        aria-label={alt}
      />

      {!started && (
        <button
          type="button"
          onClick={play}
          aria-label="Play story video"
          className="absolute inset-0 flex items-center justify-center"
        >
          <Image
            src={poster}
            alt={alt}
            fill
            sizes="(min-width: 1024px) 40vw, 100vw"
            className="object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-[1.03]"
            priority={false}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-bark/55 via-bark/15 to-bark/25 transition-colors duration-300 group-hover:from-bark/40" />

          <span className="relative flex items-center justify-center h-20 w-20 lg:h-24 lg:w-24 border border-cream/70 bg-cream/10 backdrop-blur-sm transition-all duration-300 group-hover:bg-cream group-hover:border-cream">
            <svg
              className="h-8 w-8 lg:h-9 lg:w-9 text-cream translate-x-[1px] transition-colors duration-300 group-hover:text-bark"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M8 5.14v13.72a1 1 0 0 0 1.55.83l10.4-6.86a1 1 0 0 0 0-1.66L9.55 4.31A1 1 0 0 0 8 5.14Z" />
            </svg>
          </span>
        </button>
      )}

      {started && !playing && (
        <button
          type="button"
          onClick={togglePlay}
          aria-label="Resume video"
          className="absolute inset-0 flex items-center justify-center bg-bark/30 hover:bg-bark/45 transition-colors duration-300"
        >
          <span className="flex items-center justify-center h-16 w-16 border border-cream/80 bg-cream/10">
            <svg className="h-7 w-7 text-cream translate-x-[1px]" viewBox="0 0 24 24" fill="currentColor">
              <path d="M8 5.14v13.72a1 1 0 0 0 1.55.83l10.4-6.86a1 1 0 0 0 0-1.66L9.55 4.31A1 1 0 0 0 8 5.14Z" />
            </svg>
          </span>
        </button>
      )}
    </div>
  );
}
