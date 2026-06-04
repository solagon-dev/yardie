"use client";

import { useEffect, useState } from "react";
import { testimonials } from "@/lib/content";

const ROTATE_MS = 9000;

/**
 * Editorial pull-quote carousel — large Cormorant italic, dark section.
 * Auto-advances; manual dots stop the auto-rotation.
 */
export default function TestimonialsCarousel() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = setInterval(() => setActive((i) => (i + 1) % testimonials.length), ROTATE_MS);
    return () => clearInterval(id);
  }, [paused]);

  const t = testimonials[active];

  return (
    <section className="bg-bark text-cream">
      <div className="mx-auto max-w-[1100px] px-5 sm:px-8 lg:px-12 py-section text-center">
        <p className="label inline-flex items-center justify-center gap-3 text-stone/85 mb-10 justify-center">
          <span aria-hidden className="block h-px w-7 bg-stone/50" />
          What Clients Say
        </p>

        <div className="relative min-h-[260px]">
          {testimonials.map((item, i) => (
            <blockquote
              key={item.name}
              className={`absolute inset-0 transition-opacity duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                i === active ? "opacity-100" : "opacity-0 pointer-events-none"
              }`}
              aria-hidden={i !== active}
            >
              <span aria-hidden className="font-display italic text-moss-light text-[80px] leading-none block mb-2">&ldquo;</span>
              <p className="font-display italic text-2xl sm:text-3xl lg:text-[40px] leading-[1.25] tracking-tight text-cream font-light max-w-[28ch] mx-auto">
                {item.quote}
              </p>
              <footer className="mt-10">
                <p className="label text-cream">{item.name}</p>
                <p className="mt-1 text-[12.5px] text-cream/60">
                  {item.city}{item.service ? ` · ${item.service}` : ""}
                </p>
              </footer>
            </blockquote>
          ))}
          <div aria-hidden className="invisible">
            <span className="font-display italic text-moss-light text-[80px] leading-none block mb-2">&ldquo;</span>
            <p className="font-display italic text-2xl sm:text-3xl lg:text-[40px] leading-[1.25] tracking-tight max-w-[28ch] mx-auto">
              {t.quote}
            </p>
            <div className="mt-10">
              <p className="label">{t.name}</p>
              <p className="mt-1 text-[12.5px]">{t.city}</p>
            </div>
          </div>
        </div>

        <div className="mt-12 flex items-center justify-center gap-2.5">
          {testimonials.map((item, i) => (
            <button
              key={item.name}
              type="button"
              aria-label={`Show testimonial ${i + 1}`}
              onClick={() => { setPaused(true); setActive(i); }}
              className={`h-px transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                i === active ? "w-10 bg-cream" : "w-5 bg-cream/30 hover:bg-cream/60"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
