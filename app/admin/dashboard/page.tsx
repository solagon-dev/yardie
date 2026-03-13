import { db } from '@/lib/db';
import Link from 'next/link';

export const dynamic = 'force-dynamic';

export default async function DashboardPage() {
  const [publishedProjects, publishedPosts, draftProjects, draftPosts] = await Promise.all([
    db.project.count({ where: { publishStatus: 'published' } }),
    db.post.count({ where: { publishStatus: 'published' } }),
    db.project.count({ where: { publishStatus: 'draft' } }),
    db.post.count({ where: { publishStatus: 'draft' } }),
  ]);

  const [recentProjects, recentPosts] = await Promise.all([
    db.project.findMany({
      orderBy: { updatedAt: 'desc' },
      take: 5,
      select: { id: true, title: true, publishStatus: true, updatedAt: true, featuredImage: true },
    }),
    db.post.findMany({
      orderBy: { updatedAt: 'desc' },
      take: 5,
      select: { id: true, title: true, publishStatus: true, updatedAt: true, featuredImage: true },
    }),
  ]);

  return (
    <div className="max-w-[1100px]">

      {/* Header */}
      <div className="mb-8">
        <h1 className="text-[#1A1814] text-[22px] font-[300]" style={{ fontFamily: 'var(--font-display, Georgia), serif' }}>
          Dashboard
        </h1>
        <p className="text-[#A8A098] text-[13px] mt-1">Yardie Design — Content Overview</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-8">
        <StatCard
          label="Published Projects"
          value={publishedProjects}
          href="/admin/projects"
          icon={
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <rect x="1.5" y="2.5" width="13" height="11" rx="1.5" stroke="currentColor" strokeWidth="1.3"/>
              <path d="M5 6.5h6M5 9.5h4" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
            </svg>
          }
          accent="#7A8C5A"
        />
        <StatCard
          label="Published Posts"
          value={publishedPosts}
          href="/admin/posts"
          icon={
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M3 3.5A1.5 1.5 0 0 1 4.5 2h7A1.5 1.5 0 0 1 13 3.5v9a1.5 1.5 0 0 1-1.5 1.5h-7A1.5 1.5 0 0 1 3 12.5v-9z" stroke="currentColor" strokeWidth="1.3"/>
              <path d="M5.5 5.5h5M5.5 8h5M5.5 10.5h3" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
            </svg>
          }
          accent="#7A8C5A"
        />
        <StatCard
          label="Draft Projects"
          value={draftProjects}
          href="/admin/projects"
          icon={
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M2 13l2-2 7-7 2 2-7 7-2 0 0-2zM11 4l1-1 1 1-1 1-1-1z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          }
          accent="#B8A88A"
        />
        <StatCard
          label="Draft Posts"
          value={draftPosts}
          href="/admin/posts"
          icon={
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M2 13l2-2 7-7 2 2-7 7-2 0 0-2zM11 4l1-1 1 1-1 1-1-1z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          }
          accent="#B8A88A"
        />
      </div>

      {/* Quick actions */}
      <div className="flex flex-wrap gap-2.5 mb-8">
        <Link
          href="/admin/projects/new"
          className="inline-flex items-center gap-2 bg-[#1A1814] text-[rgba(248,244,238,0.88)] text-[11px] tracking-[0.1em] uppercase font-[500] px-4 py-2.5 hover:bg-[#2C2820] transition-colors"
          style={{ borderRadius: '4px' }}
        >
          <svg width="11" height="11" viewBox="0 0 11 11" fill="none" aria-hidden="true">
            <path d="M5.5 1v9M1 5.5h9" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
          </svg>
          New Project
        </Link>
        <Link
          href="/admin/posts/new"
          className="inline-flex items-center gap-2 bg-white border border-[#D8D0C4] text-[#1A1814] text-[11px] tracking-[0.1em] uppercase font-[500] px-4 py-2.5 hover:border-[#8C8478] transition-colors"
          style={{ borderRadius: '4px' }}
        >
          <svg width="11" height="11" viewBox="0 0 11 11" fill="none" aria-hidden="true">
            <path d="M5.5 1v9M1 5.5h9" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
          </svg>
          New Post
        </Link>
        <a
          href="/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-white border border-[#D8D0C4] text-[#8C8478] text-[11px] tracking-[0.1em] uppercase font-[500] px-4 py-2.5 hover:border-[#8C8478] hover:text-[#5C5548] transition-colors"
          style={{ borderRadius: '4px' }}
        >
          <svg width="10" height="10" viewBox="0 0 14 14" fill="none" aria-hidden="true">
            <path d="M6 2H2.5A1.5 1.5 0 0 0 1 3.5v8A1.5 1.5 0 0 0 2.5 13h8A1.5 1.5 0 0 0 12 11.5V8M8 1h5v5M13 1 6.5 7.5"
              stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          View Site
        </a>
      </div>

      {/* Recent activity */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        <ContentList title="Recent Projects" items={recentProjects} baseHref="/admin/projects" emptyLabel="No projects yet" />
        <ContentList title="Recent Posts" items={recentPosts} baseHref="/admin/posts" emptyLabel="No posts yet" />
      </div>
    </div>
  );
}

function StatCard({
  label,
  value,
  href,
  icon,
  accent,
}: {
  label: string;
  value: number;
  href: string;
  icon: React.ReactNode;
  accent: string;
}) {
  return (
    <Link
      href={href}
      className="bg-white border border-[#E8E4DC] p-5 hover:border-[#C8C0B0] hover:shadow-sm transition-all group"
      style={{ borderRadius: '6px' }}
    >
      <div className="flex items-start justify-between mb-3">
        <span className="text-[#C0B8B0] group-hover:text-[#8C8478] transition-colors">{icon}</span>
        <span className="text-[30px] font-[300] leading-none tabular-nums" style={{ color: accent, fontFamily: 'var(--font-display, Georgia), serif' }}>
          {value}
        </span>
      </div>
      <p className="text-[11px] text-[#8C8478] tracking-[0.04em] group-hover:text-[#5C5548] transition-colors leading-snug">{label}</p>
    </Link>
  );
}

function ContentList({
  title,
  items,
  baseHref,
  emptyLabel,
}: {
  title: string;
  items: { id: string; title: string; publishStatus: string; updatedAt: Date; featuredImage?: string | null }[];
  baseHref: string;
  emptyLabel: string;
}) {
  return (
    <div className="bg-white border border-[#E8E4DC]" style={{ borderRadius: '6px' }}>
      <div className="px-5 py-4 border-b border-[#F0ECE4] flex items-center justify-between">
        <h2 className="text-[12px] font-[600] text-[#1A1814] tracking-[0.02em]">{title}</h2>
        <Link href={baseHref} className="text-[11px] text-[#7A8C5A] hover:text-[#5A6C3A] tracking-[0.03em] transition-colors">
          View all →
        </Link>
      </div>
      {items.length === 0 ? (
        <div className="px-5 py-10 text-center">
          <p className="text-[13px] text-[#C0B8B0]">{emptyLabel}</p>
          <Link href={`${baseHref}/new`} className="inline-block mt-3 text-[11px] text-[#7A8C5A] hover:text-[#5A6C3A] tracking-[0.03em] transition-colors">
            Create one →
          </Link>
        </div>
      ) : (
        <ul className="divide-y divide-[#F4F0EA]">
          {items.map((item) => (
            <li key={item.id}>
              <Link
                href={`${baseHref}/${item.id}/edit`}
                className="flex items-center gap-3.5 px-5 py-3.5 hover:bg-[#FAF9F7] transition-colors group"
              >
                <div className="w-9 h-9 bg-[#F0ECE4] flex-shrink-0 overflow-hidden" style={{ borderRadius: '4px' }}>
                  {item.featuredImage && (
                    <img src={item.featuredImage} alt="" className="w-full h-full object-cover" />
                  )}
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-[13px] text-[#1A1814] truncate font-[500] group-hover:text-[#3A3530] transition-colors">{item.title}</p>
                  <p className="text-[11px] text-[#B8B0A4] mt-0.5">
                    Updated {new Date(item.updatedAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                  </p>
                </div>
                <StatusBadge status={item.publishStatus} />
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export function StatusBadge({ status }: { status: string }) {
  const isPublished = status === 'published';
  return (
    <span
      className="flex-shrink-0 text-[10px] tracking-[0.08em] uppercase font-[500] px-2 py-0.5 flex items-center gap-1"
      style={{
        borderRadius: '3px',
        background: isPublished ? 'rgba(122,140,90,0.1)' : 'rgba(184,160,138,0.12)',
        color: isPublished ? '#4E6830' : '#8C7860',
      }}
    >
      <span className={`w-1 h-1 rounded-full ${isPublished ? 'bg-[#7A8C5A]' : 'bg-[#C8B090]'}`} />
      {isPublished ? 'Live' : 'Draft'}
    </span>
  );
}
