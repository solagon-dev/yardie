import { db } from '@/lib/db';
import Link from 'next/link';
import Image from 'next/image';
import { StatusBadge } from '../dashboard/page';

export const dynamic = 'force-dynamic';

export default async function PostsPage() {
  const posts = await db.post.findMany({
    orderBy: { createdAt: 'desc' },
    select: {
      id: true, title: true, slug: true, category: true,
      publishStatus: true, featuredImage: true, publishDate: true, updatedAt: true,
    },
  });

  return (
    <div className="max-w-[1100px]">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-[#1A1814] text-[24px] font-[300]" style={{ fontFamily: 'var(--font-display, Georgia), serif' }}>
            Blog Posts
          </h1>
          <p className="text-[#8C8478] text-[13px] mt-1">{posts.length} total · {posts.filter(p => p.publishStatus === 'published').length} published</p>
        </div>
        <Link
          href="/admin/posts/new"
          className="inline-flex items-center gap-2 bg-[#1A1814] text-[rgba(248,244,238,0.9)] text-[11px] tracking-[0.12em] uppercase font-[500] px-5 py-2.5 hover:bg-[#2C2820] transition-colors"
          style={{ borderRadius: '2px' }}
        >
          <svg width="11" height="11" viewBox="0 0 11 11" fill="none" aria-hidden="true">
            <path d="M5.5 1v9M1 5.5h9" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
          </svg>
          New Post
        </Link>
      </div>

      {posts.length === 0 ? (
        <div className="bg-white border border-[#E8E4DC] flex flex-col items-center justify-center py-16 px-6 text-center" style={{ borderRadius: '4px' }}>
          <p className="text-[15px] text-[#1A1814] font-[500] mb-1">No posts yet</p>
          <p className="text-[13px] text-[#8C8478] mb-6">Create your first blog post to get started.</p>
          <Link
            href="/admin/posts/new"
            className="inline-block bg-[#1A1814] text-[rgba(248,244,238,0.9)] text-[11px] tracking-[0.12em] uppercase font-[500] px-5 py-2.5 hover:bg-[#2C2820] transition-colors"
            style={{ borderRadius: '2px' }}
          >
            Create Post
          </Link>
        </div>
      ) : (
        <div className="bg-white border border-[#E8E4DC]" style={{ borderRadius: '4px' }}>
          <div className="grid grid-cols-[auto_1fr_auto_auto_auto] items-center gap-4 px-5 py-3 border-b border-[#E8E4DC] text-[10px] text-[#B8B0A4] tracking-[0.1em] uppercase">
            <span className="w-10" />
            <span>Post</span>
            <span className="hidden md:block w-24">Category</span>
            <span className="w-20">Status</span>
            <span className="w-8" />
          </div>
          <ul className="divide-y divide-[#F0ECE4]">
            {posts.map((post) => (
              <li key={post.id}>
                <Link
                  href={`/admin/posts/${post.id}/edit`}
                  className="grid grid-cols-[auto_1fr_auto_auto_auto] items-center gap-4 px-5 py-4 hover:bg-[#FAF8F5] transition-colors group"
                >
                  <div className="w-10 h-10 bg-[#F0ECE4] overflow-hidden flex-shrink-0" style={{ borderRadius: '3px' }}>
                    {post.featuredImage && (
                      <Image src={post.featuredImage} alt="" width={40} height={40} className="object-cover w-full h-full" unoptimized />
                    )}
                  </div>
                  <div className="min-w-0">
                    <p className="text-[13px] text-[#1A1814] truncate group-hover:text-[#3A3530] transition-colors font-[500]">{post.title}</p>
                    <p className="text-[11px] text-[#B8B0A4] mt-0.5">
                      {post.publishDate
                        ? new Date(post.publishDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
                        : `Updated ${new Date(post.updatedAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}`}
                    </p>
                  </div>
                  <div className="hidden md:block w-24">
                    {post.category && (
                      <span className="text-[10px] tracking-[0.06em] text-[#8C8478] bg-[#F0ECE4] px-2 py-0.5" style={{ borderRadius: '2px' }}>
                        {post.category}
                      </span>
                    )}
                  </div>
                  <StatusBadge status={post.publishStatus} />
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="text-[#C8C0B0] group-hover:text-[#8C8478] transition-colors flex-shrink-0" aria-hidden="true">
                    <path d="M5 2l5 5-5 5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
