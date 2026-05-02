"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { company } from "@/lib/content";

export default function MobileCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-50 lg:hidden transition-all duration-300 ${
        visible ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
      }`}
    >
      <div className="bg-cream/95 backdrop-blur-xl border-t border-stone px-4 py-3 safe-bottom">
        <div className="flex gap-3">
          <Link
            href="/quote"
            className="flex-1 flex items-center justify-center py-3 text-[12px] tracking-[0.18em] uppercase bg-bark text-cream hover:bg-earth transition-colors"
          >
            Schedule a Consultation
          </Link>
          <a
            href={company.phoneTel}
            className="flex items-center justify-center px-5 py-3 border border-clay/40 text-bark text-[12px] tracking-[0.18em] hover:bg-stone transition-colors"
            aria-label="Call Yardie"
          >
            Call
          </a>
        </div>
      </div>
    </div>
  );
}
