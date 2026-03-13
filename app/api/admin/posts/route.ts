import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/db';
import { requireSession } from '@/lib/auth';

export async function GET() {
  try {
    await requireSession();
    const posts = await db.post.findMany({
      orderBy: { createdAt: 'desc' },
      select: {
        id: true, title: true, slug: true, category: true,
        publishStatus: true, featuredImage: true, publishDate: true, updatedAt: true,
      },
    });
    return NextResponse.json(posts);
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
    const post = await db.post.create({
      data: {
        title: data.title,
        slug,
        excerpt: data.excerpt ?? null,
        content: data.content ?? null,
        featuredImage: data.featuredImage ?? null,
        category: data.category ?? null,
        tags: data.tags ?? [],
        author: data.author ?? 'Yardie Design',
        publishDate: data.publishDate ? new Date(data.publishDate) : null,
        publishStatus: data.publishStatus ?? 'draft',
        readTime: data.readTime ?? null,
        seoTitle: data.seoTitle ?? null,
        seoDescription: data.seoDescription ?? null,
        ogImage: data.ogImage ?? null,
      },
    });
    return NextResponse.json(post, { status: 201 });
  } catch (err: unknown) {
    if (err instanceof Error && err.message === 'Unauthorized') {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }
    console.error('[POST /posts]', err);
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}

function slugify(str: string): string {
  return str.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
}
