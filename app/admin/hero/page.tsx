import { db } from '@/lib/db';
import { requireSession } from '@/lib/auth';
import { redirect } from 'next/navigation';
import HeroSlidesManager from './HeroSlidesManager';

export const dynamic = 'force-dynamic';

export default async function HeroSlidesPage() {
  try {
    await requireSession();
  } catch {
    redirect('/admin/login');
  }

  const slides = await db.heroSlide.findMany({ orderBy: { sortOrder: 'asc' } });

  return (
    <div className="max-w-[900px]">
      <div className="mb-8">
        <h1 className="text-[#1A1814] text-[24px] font-[300]" style={{ fontFamily: 'var(--font-display, Georgia), serif' }}>
          Hero Slideshow
        </h1>
        <p className="text-[#8C8478] text-[13px] mt-1">Manage the images shown in the homepage hero slideshow.</p>
      </div>
      <HeroSlidesManager initialSlides={slides} />
    </div>
  );
}
