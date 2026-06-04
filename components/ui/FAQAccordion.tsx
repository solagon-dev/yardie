"use client";

import { useState } from "react";

export interface FAQItem { q: string; a: string }

export default function FAQAccordion({ items, tone = "light" }: {
  items: FAQItem[];
  tone?: "light" | "dark";
}) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const isLight = tone === "light";

  return (
    <ul className={`divide-y ${isLight ? "divide-border" : "divide-cream/15"}`}>
      {items.map((item, i) => {
        const open = openIndex === i;
        return (
          <li key={i} className="py-1">
            <button
              type="button"
              onClick={() => setOpenIndex(open ? null : i)}
              aria-expanded={open}
              className="group w-full flex items-start gap-6 py-6 lg:py-7 text-left"
            >
              <span className={`shrink-0 mt-1 h-4 w-4 transition-transform duration-300 ${open ? "rotate-45" : ""} ${isLight ? "text-moss" : "text-stone"}`} aria-hidden>
                <svg viewBox="0 0 24 24" fill="none" strokeWidth={1.4} stroke="currentColor" className="h-4 w-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m-7.5-7.5h15" />
                </svg>
              </span>
              <span className={`flex-1 font-display text-[22px] sm:text-[26px] lg:text-[30px] leading-snug tracking-tight font-light ${isLight ? "text-bark" : "text-cream"}`}>
                {item.q}
              </span>
            </button>
            <div
              className={`grid overflow-hidden transition-[grid-template-rows,opacity] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                open ? "grid-rows-[1fr] opacity-100 pb-6 lg:pb-8" : "grid-rows-[0fr] opacity-0 pb-0"
              }`}
            >
              <div className={`overflow-hidden pl-10 max-w-3xl text-[15.5px] leading-relaxed ${isLight ? "text-earth" : "text-cream/80"}`}>
                {item.a}
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
