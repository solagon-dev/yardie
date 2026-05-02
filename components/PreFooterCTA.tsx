"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { photos } from "@/lib/media";

const SUPPRESS_PATHS = ["/", "/quote", "/contact"];

export default function PreFooterCTA() {
  const pathname = usePathname();
  if (SUPPRESS_PATHS.includes(pathname)) return null;

  return (
    <section className="relative bg-bark text-cream overflow-hidden">
      <Image
        src={photos.ctaWide.src}
        alt=""
        fill
        sizes="100vw"
        className="object-cover opacity-25"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-bark via-bark/85 to-bark/55" />
      <div className="relative mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12 py-24 sm:py-32 lg:py-36">
        <div className="grid lg:grid-cols-12 gap-10 items-end">
          <div className="lg:col-span-8">
            <h2 className="font-display text-4xl sm:text-5xl lg:text-[64px] text-cream leading-[1.04] tracking-tight max-w-[20ch]">
              Let&rsquo;s talk about
              <span className="italic text-stone"> your space.</span>
            </h2>
            <p className="mt-7 text-[16px] sm:text-[17px] text-cream/75 leading-relaxed max-w-xl">
              Tell us about the property and how you want to live in it. Most first conversations end with a clearer picture of what&rsquo;s possible — and an honest answer on whether we&rsquo;re the right studio for the project.
            </p>
          </div>

          <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-4 lg:items-end">
            <Link
              href="/quote"
              className="group inline-flex items-center justify-center gap-2.5 px-9 py-4 text-[12px] tracking-[0.22em] uppercase font-medium bg-cream text-bark hover:bg-stone transition-colors w-full sm:w-auto"
            >
              Schedule a Consultation
              <svg className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" strokeWidth={1.75} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
              </svg>
            </Link>
            <Link
              href="/gallery"
              className="inline-flex items-center justify-center px-9 py-4 text-[12px] tracking-[0.22em] uppercase border border-cream/35 text-cream hover:bg-cream/10 hover:border-cream/60 transition-colors w-full sm:w-auto"
            >
              View Our Work
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
