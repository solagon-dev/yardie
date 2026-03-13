import { db } from '@/lib/db';
import { notFound } from 'next/navigation';
import PostForm from '../../../components/PostForm';

export const dynamic = 'force-dynamic';

export default async function EditPostPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const post = await db.post.findUnique({ where: { id } });
  if (!post) notFound();

  return (
    <PostForm
      initial={{
        id: post.id,
        title: post.title,
        slug: post.slug,
        excerpt: post.excerpt ?? '',
        content: post.content ?? '',
        featuredImage: post.featuredImage ?? '',
        category: post.category ?? '',
        author: post.author ?? 'Yardie Design',
        publishDate: post.publishDate ? post.publishDate.toISOString().split('T')[0] : '',
        readTime: post.readTime ?? '',
        publishStatus: post.publishStatus,
        seoTitle: post.seoTitle ?? '',
        seoDescription: post.seoDescription ?? '',
      }}
    />
  );
}
