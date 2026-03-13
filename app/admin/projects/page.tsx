import { db } from '@/lib/db';
import Link from 'next/link';
import Image from 'next/image';
import { StatusBadge } from '../dashboard/page';

export const dynamic = 'force-dynamic';

export default async function ProjectsPage() {
  const projects = await db.project.findMany({
    orderBy: [{ sortOrder: 'asc' }, { createdAt: 'desc' }],
    select: {
      id: true, title: true, slug: true, projectLocation: true,
      serviceCategories: true, publishStatus: true, featured: true,
      featuredImage: true, completionDate: true, updatedAt: true,
    },
  });

  return (
    <div className="max-w-[1100px]">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-[#1A1814] text-[24px] font-[300]" style={{ fontFamily: 'var(--font-display, Georgia), serif' }}>
            Projects
          </h1>
          <p className="text-[#8C8478] text-[13px] mt-1">{projects.length} total · {projects.filter(p => p.publishStatus === 'published').length} published</p>
        </div>
        <Link
          href="/admin/projects/new"
          className="inline-flex items-center gap-2 bg-[#1A1814] text-[rgba(248,244,238,0.9)] text-[11px] tracking-[0.12em] uppercase font-[500] px-5 py-2.5 hover:bg-[#2C2820] transition-colors"
          style={{ borderRadius: '2px' }}
        >
          <svg width="11" height="11" viewBox="0 0 11 11" fill="none" aria-hidden="true">
            <path d="M5.5 1v9M1 5.5h9" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
          </svg>
          New Project
        </Link>
      </div>

      {projects.length === 0 ? (
        <EmptyState
          title="No projects yet"
          body="Create your first portfolio project to get started."
          cta="Create Project"
          href="/admin/projects/new"
        />
      ) : (
        <div className="bg-white border border-[#E8E4DC]" style={{ borderRadius: '4px' }}>
          <div className="grid grid-cols-[auto_1fr_auto_auto_auto] items-center gap-4 px-5 py-3 border-b border-[#E8E4DC] text-[10px] text-[#B8B0A4] tracking-[0.1em] uppercase">
            <span className="w-10" />
            <span>Project</span>
            <span className="hidden md:block w-28">Services</span>
            <span className="w-20">Status</span>
            <span className="w-8" />
          </div>
          <ul className="divide-y divide-[#F0ECE4]">
            {projects.map((proj) => (
              <li key={proj.id}>
                <Link
                  href={`/admin/projects/${proj.id}/edit`}
                  className="grid grid-cols-[auto_1fr_auto_auto_auto] items-center gap-4 px-5 py-4 hover:bg-[#FAF8F5] transition-colors group"
                >
                  {/* Thumbnail */}
                  <div className="w-10 h-10 bg-[#F0ECE4] overflow-hidden flex-shrink-0" style={{ borderRadius: '3px' }}>
                    {proj.featuredImage && (
                      <Image src={proj.featuredImage} alt="" width={40} height={40} className="object-cover w-full h-full" unoptimized />
                    )}
                  </div>

                  {/* Title + meta */}
                  <div className="min-w-0">
                    <div className="flex items-center gap-2">
                      <p className="text-[13px] text-[#1A1814] truncate group-hover:text-[#3A3530] transition-colors font-[500]">
                        {proj.title}
                      </p>
                      {proj.featured && (
                        <span className="flex-shrink-0 text-[9px] tracking-[0.1em] uppercase bg-[rgba(122,140,90,0.15)] text-[#5A7040] px-2 py-0.5" style={{ borderRadius: '2px' }}>
                          Featured
                        </span>
                      )}
                    </div>
                    <p className="text-[11px] text-[#B8B0A4] mt-0.5 truncate">
                      {proj.projectLocation}{proj.completionDate ? ` · ${proj.completionDate}` : ''}
                    </p>
                  </div>

                  {/* Services */}
                  <div className="hidden md:flex flex-wrap gap-1 w-28">
                    {proj.serviceCategories.slice(0, 2).map((s) => (
                      <span key={s} className="text-[9px] tracking-[0.06em] text-[#8C8478] bg-[#F0ECE4] px-1.5 py-0.5" style={{ borderRadius: '2px' }}>
                        {s}
                      </span>
                    ))}
                    {proj.serviceCategories.length > 2 && (
                      <span className="text-[9px] text-[#B8B0A4]">+{proj.serviceCategories.length - 2}</span>
                    )}
                  </div>

                  <StatusBadge status={proj.publishStatus} />

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

function EmptyState({ title, body, cta, href }: { title: string; body: string; cta: string; href: string }) {
  return (
    <div className="bg-white border border-[#E8E4DC] flex flex-col items-center justify-center py-16 px-6 text-center" style={{ borderRadius: '4px' }}>
      <div className="w-10 h-10 bg-[#F0ECE4] flex items-center justify-center mb-4" style={{ borderRadius: '50%' }}>
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
          <path d="M8 1v14M1 8h14" stroke="#C8C0B0" strokeWidth="1.5" strokeLinecap="round"/>
        </svg>
      </div>
      <p className="text-[15px] text-[#1A1814] font-[500] mb-1">{title}</p>
      <p className="text-[13px] text-[#8C8478] mb-6 max-w-[280px]">{body}</p>
      <Link
        href={href}
        className="inline-block bg-[#1A1814] text-[rgba(248,244,238,0.9)] text-[11px] tracking-[0.12em] uppercase font-[500] px-5 py-2.5 hover:bg-[#2C2820] transition-colors"
        style={{ borderRadius: '2px' }}
      >
        {cta}
      </Link>
    </div>
  );
}
