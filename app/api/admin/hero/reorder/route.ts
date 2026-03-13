import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/db';
import { requireSession } from '@/lib/auth';

export async function POST(req: NextRequest) {
  try {
    await requireSession();
    const { orderedIds } = await req.json() as { orderedIds: string[] };
    await Promise.all(
      orderedIds.map((id, index) =>
        db.heroSlide.update({ where: { id }, data: { sortOrder: index + 1 } })
      )
    );
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: 'Failed' }, { status: 500 });
  }
}
