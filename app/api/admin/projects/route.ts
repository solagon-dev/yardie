import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/db';
import { requireSession } from '@/lib/auth';

export async function GET() {
  try {
    await requireSession();
    const projects = await db.project.findMany({
      orderBy: [{ sortOrder: 'asc' }, { createdAt: 'desc' }],
      select: {
        id: true, title: true, slug: true, projectLocation: true,
        serviceCategories: true, publishStatus: true, featured: true,
        featuredImage: true, completionDate: true, updatedAt: true,
      },
    });
    return NextResponse.json(projects);
  } catch (err: unknown) {
    if (err instanceof Error && err.message === 'Unauthorized') {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    await requireSession();
    const data = await req.json();

    const slug = data.slug || slugify(data.title);
    const project = await db.project.create({
      data: {
        title: data.title,
        slug,
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
        publishStatus: data.publishStatus ?? 'draft',
        sortOrder: data.sortOrder ?? 0,
        seoTitle: data.seoTitle ?? null,
        seoDescription: data.seoDescription ?? null,
        ogImage: data.ogImage ?? null,
      },
    });
    return NextResponse.json(project, { status: 201 });
  } catch (err: unknown) {
    if (err instanceof Error && err.message === 'Unauthorized') {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }
    console.error('[POST /projects]', err);
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}

function slugify(str: string): string {
  return str.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
}
