import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Page Not Found | Yardie Design',
  robots: { index: false },
};

export default function NotFound() {
  return (
    <div className="bg-cream min-h-screen pt-[72px] flex items-center justify-center px-6">
      <div className="text-center max-w-[480px]">
        <p
          className="font-display text-warm-stone select-none mb-6"
          style={{ fontSize: 'clamp(6rem,14vw,12rem)', lineHeight: '1', fontWeight: 300 }}
          aria-hidden="true"
        >
          404
        </p>
        <h1 className="font-display text-bark mb-4" style={{ fontSize: 'clamp(1.5rem,3vw,2.25rem)', fontWeight: 400 }}>
          Page not found.
        </h1>
        <p className="text-clay text-[14px] leading-[1.75] mb-10">
          The page you&apos;re looking for doesn&apos;t exist or has moved. Let&apos;s get you back on track.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Link
            href="/"
            className="inline-block bg-bark text-cream text-[11px] tracking-[0.12em] uppercase font-[500] px-8 py-3.5 hover:bg-earth transition-colors"
            style={{ borderRadius: '2px' }}
          >
            Go Home
          </Link>
          <Link
            href="/work"
            className="inline-block border border-bark text-bark text-[11px] tracking-[0.12em] uppercase font-[500] px-8 py-3.5 hover:bg-bark hover:text-cream transition-colors"
            style={{ borderRadius: '2px' }}
          >
            View Our Work
          </Link>
        </div>
      </div>
    </div>
  );
}
