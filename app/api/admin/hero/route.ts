import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/db';
import { requireSession } from '@/lib/auth';

export async function GET() {
  try {
    await requireSession();
    const slides = await db.heroSlide.findMany({ orderBy: { sortOrder: 'asc' } });
    return NextResponse.json(slides);
  } catch {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }
}

export async function POST(req: NextRequest) {
  try {
    await requireSession();
    const { imageUrl, altText } = await req.json();
    if (!imageUrl) return NextResponse.json({ error: 'imageUrl required' }, { status: 400 });
    const count = await db.heroSlide.count();
    const slide = await db.heroSlide.create({
      data: { imageUrl, altText: altText ?? '', sortOrder: count + 1 },
    });
    return NextResponse.json(slide);
  } catch {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }
}
