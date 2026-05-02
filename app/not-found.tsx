import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Page not found — Yardie",
  robots: { index: false },
};

export default function NotFound() {
  return (
    <section className="bg-cream text-bark min-h-[80svh] flex items-center justify-center px-6 py-32">
      <div className="text-center max-w-2xl">
        <p className="font-display text-stone select-none mb-6 leading-none" style={{ fontSize: "clamp(120px, 18vw, 240px)", fontWeight: 300 }} aria-hidden>
          404
        </p>
        <h1 className="font-display text-4xl sm:text-5xl lg:text-[64px] leading-[1.04] tracking-tight font-light max-w-[20ch] mx-auto">
          That page seems to have
          <span className="italic text-moss"> wandered off.</span>
        </h1>
        <p className="mt-6 text-[16px] text-earth leading-relaxed max-w-md mx-auto">
          The page you&rsquo;re looking for isn&rsquo;t here — or has moved. Try one of the links below.
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Link href="/" className="inline-flex items-center justify-center px-9 py-4 bg-bark text-cream text-[12px] tracking-[0.22em] uppercase font-medium hover:bg-earth transition-colors">
            Return Home
          </Link>
          <Link href="/gallery" className="inline-flex items-center justify-center px-9 py-4 border border-bark text-bark text-[12px] tracking-[0.22em] uppercase font-medium hover:bg-bark hover:text-cream transition-colors">
            View Our Work
          </Link>
        </div>
      </div>
    </section>
  );
}
