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

        {/* Popular destinations — added 2026-06-01 SEO pass to help
            users recover from 404s without leaving the site. Each
            link below is one of the top-trafficked surfaces. */}
        <div className="mt-12 border-t border-stone/30 pt-8 text-[13px]">
          <p className="text-earth/70 mb-3 tracking-[0.1em] uppercase text-[11px]">
            Or browse popular pages
          </p>
          <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-bark">
            <li><Link href="/services/landscapes" className="underline-offset-4 hover:underline">Landscape design</Link></li>
            <li><Link href="/services/patios-pavers" className="underline-offset-4 hover:underline">Paver patios</Link></li>
            <li><Link href="/services/lighting" className="underline-offset-4 hover:underline">Outdoor lighting</Link></li>
            <li><Link href="/services/outdoor-kitchens" className="underline-offset-4 hover:underline">Outdoor kitchens</Link></li>
            <li><Link href="/services/fire-features" className="underline-offset-4 hover:underline">Fire features</Link></li>
            <li><Link href="/services/pergolas-pavilions" className="underline-offset-4 hover:underline">Pergolas</Link></li>
            <li><Link href="/services/masonry" className="underline-offset-4 hover:underline">Masonry</Link></li>
            <li><Link href="/services" className="underline-offset-4 hover:underline">All services</Link></li>
            <li><Link href="/service-areas" className="underline-offset-4 hover:underline">Service areas</Link></li>
            <li><Link href="/journal" className="underline-offset-4 hover:underline">Journal</Link></li>
            <li><Link href="/quote" className="underline-offset-4 hover:underline">Get a quote</Link></li>
            <li><Link href="/contact" className="underline-offset-4 hover:underline">Contact</Link></li>
          </ul>
        </div>
      </div>
    </section>
  );
}
