'use client';

import { useState } from 'react';

interface AccordionItem {
  question: string;
  answer: string;
}

export default function FAQAccordion({ items }: { items: AccordionItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div>
      {items.map((item, i) => {
        const isOpen = openIndex === i;
        return (
          <div key={i} style={{ borderTop: '1px solid rgba(26,24,20,0.1)' }}>
            <button
              className="w-full flex items-start justify-between gap-6 py-7 lg:py-8 text-left group"
              onClick={() => setOpenIndex(isOpen ? null : i)}
              aria-expanded={isOpen}
            >
              <div className="flex items-start gap-5 flex-1 min-w-0">
                <span
                  className="font-sans flex-shrink-0 pt-0.5"
                  style={{ fontSize: '10px', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--color-clay)', opacity: 0.5 }}
                >
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h3
                  className="font-display text-bark text-balance group-hover:text-moss transition-colors duration-300"
                  style={{ fontSize: 'clamp(1.05rem,1.5vw,1.25rem)', fontWeight: 500, lineHeight: '1.25' }}
                >
                  {item.question}
                </h3>
              </div>
              <span
                className="flex-shrink-0 w-7 h-7 flex items-center justify-center border border-[var(--color-border-warm)] mt-0.5"
                style={{
                  borderRadius: '2px',
                  transition: 'transform 0.35s cubic-bezier(0.22,1,0.36,1)',
                  transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)',
                }}
              >
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden="true">
                  <path d="M5 1v8M1 5h8" stroke="var(--color-clay)" strokeWidth="1.3" strokeLinecap="round" />
                </svg>
              </span>
            </button>

            <div
              style={{
                display: 'grid',
                gridTemplateRows: isOpen ? '1fr' : '0fr',
                transition: 'grid-template-rows 0.38s cubic-bezier(0.22,1,0.36,1)',
              }}
            >
              <div style={{ overflow: 'hidden' }}>
                <div className="pb-8 lg:pb-10 pl-9 pr-2">
                  <p className="text-clay text-[14px] leading-[1.85] max-w-[640px]">{item.answer}</p>
                </div>
              </div>
            </div>
          </div>
        );
      })}
      <div style={{ borderTop: '1px solid rgba(26,24,20,0.1)' }} />
    </div>
  );
}
