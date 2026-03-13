import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/db';
import { requireSession } from '@/lib/auth';

export async function GET(_req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  try {
    await requireSession();
    const { id } = await params;
    const project = await db.project.findUnique({ where: { id } });
    if (!project) return NextResponse.json({ error: 'Not found' }, { status: 404 });
    return NextResponse.json(project);
  } catch (err: unknown) {
    if (err instanceof Error && err.message === 'Unauthorized') {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}

export async function PUT(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  try {
    await requireSession();
    const { id } = await params;
    const data = await req.json();

    const project = await db.project.update({
      where: { id },
      data: {
        title: data.title,
        slug: data.slug,
        summary: data.summary ?? null,
        description: data.description ?? null,
        featuredImage: data.featuredImage ?? null,
        galleryImages: data.galleryImages ?? [],
        projectLocation: data.projectLocation ?? null,
        serviceCategories: data.serviceCategories ?? [],
        tags: data.tags ?? [],
        completionDate: data.completionDate ?? null,
        beforeImages: data.beforeImages ?? [],
        afterImages: data.afterImages ?? [],
        threeDRenderImages: data.threeDRenderImages ?? [],
        challenge: data.challenge ?? null,
        approach: data.approach ?? null,
        materials: data.materials ?? [],
        featured: data.featured ?? false,
        publishStatus: data.publishStatus,
        sortOrder: data.sortOrder ?? 0,
        seoTitle: data.seoTitle ?? null,
        seoDescription: data.seoDescription ?? null,
        ogImage: data.ogImage ?? null,
      },
    });
    return NextResponse.json(project);
  } catch (err: unknown) {
    if (err instanceof Error && err.message === 'Unauthorized') {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }
    console.error('[PUT /projects/:id]', err);
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}

export async function DELETE(_req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  try {
    await requireSession();
    const { id } = await params;
    await db.project.delete({ where: { id } });
    return NextResponse.json({ ok: true });
  } catch (err: unknown) {
    if (err instanceof Error && err.message === 'Unauthorized') {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}
