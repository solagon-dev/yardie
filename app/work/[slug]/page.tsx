import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import RevealOnScroll from '@/components/ui/RevealOnScroll';
import SectionLabel from '@/components/ui/SectionLabel';
import Button from '@/components/ui/Button';
import { db } from '@/lib/db';

interface Props {
  params: Promise<{ slug: string }>;
}

export const dynamic = 'force-dynamic';

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = await db.project.findUnique({
    where: { slug, publishStatus: 'published' },
    select: { title: true, slug: true, summary: true, featuredImage: true, projectLocation: true },
  });
  if (!project) return {};
  return {
    title: `${project.title} — Exterior Design, ${project.projectLocation ?? 'Greenville, NC'} | Yardie Design`,
    description: project.summary ?? undefined,
    alternates: { canonical: `https://www.yardiedesign.com/work/${project.slug}` },
    openGraph: {
      title: `${project.title} — Yardie Design`,
      description: project.summary ?? undefined,
      images: project.featuredImage ? [{ url: project.featuredImage, alt: `${project.title} exterior design project by Yardie Design` }] : [],
    },
  };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = await db.project.findUnique({ where: { slug, publishStatus: 'published' } });
  if (!project) notFound();

  const allProjects = await db.project.findMany({
    where: { publishStatus: 'published' },
    orderBy: [{ sortOrder: 'asc' }, { createdAt: 'desc' }],
    select: { slug: true, title: true, projectLocation: true, featuredImage: true },
  });
  const currentIndex = allProjects.findIndex((p) => p.slug === slug);
  const nextProject = allProjects[(currentIndex + 1) % allProjects.length];

  return (
    <>
      {/* ── HERO ── */}
      <section className="relative w-full overflow-hidden" style={{ height: '90vh', minHeight: '560px' }} aria-label={`${project.title} project hero`}>
        {project.featuredImage && (
          <Image
            src={project.featuredImage}
            alt={`${project.title} exterior design project by Yardie Design`}
            fill
            priority
            className="object-cover object-center"
            sizes="100vw"
            unoptimized
          />
        )}
        <div className="absolute inset-0 scrim-full" />
        <div
          className="absolute inset-0 flex flex-col justify-end"
          style={{ padding: '0 clamp(24px,5vw,80px) clamp(3rem,7vw,7rem)' }}
        >
          <div className="max-w-[1320px] mx-auto w-full">
            <Link href="/work" className="label-light hover:opacity-70 transition-opacity mb-8 block">← All Projects</Link>
            <h1
              className="font-display text-cream font-[300] text-balance animate-fade-up opacity-0"
              style={{ fontSize: 'clamp(2.5rem,7vw,6.5rem)', lineHeight: '0.97', animationDelay: '0.05s', animationFillMode: 'forwards' }}
            >
              {project.title}
            </h1>
            {(project.projectLocation || project.completionDate) && (
              <p className="label-light mt-4 animate-fade-up opacity-0" style={{ animationDelay: '0.15s', animationFillMode: 'forwards' }}>
                {project.projectLocation}{project.completionDate ? ` · ${project.completionDate}` : ''}
              </p>
            )}
          </div>
        </div>
      </section>

      {/* ── META STRIP ── */}
      {(project.projectLocation || project.completionDate || project.serviceCategories.length > 0) && (
      <section className="bg-warm-stone py-8 px-6 lg:px-[clamp(24px,5vw,80px)]">
        <div className="max-w-[1320px] mx-auto flex flex-wrap gap-x-12 gap-y-4">
          {project.projectLocation && (
            <div>
              <p className="label mb-1">Location</p>
              <p className="text-bark text-sm font-[400]">{project.projectLocation}</p>
            </div>
          )}
          {project.completionDate && (
            <div>
              <p className="label mb-1">Date</p>
              <p className="text-bark text-sm font-[400]">{project.completionDate}</p>
            </div>
          )}
          {project.serviceCategories.length > 0 && (
            <div>
              <p className="label mb-1">Services</p>
              <div className="flex flex-wrap gap-2">
                {project.serviceCategories.map((tag) => (
                  <Link
                    key={tag}
                    href={`/services/${tag.toLowerCase()}`}
                    className="text-[11px] tracking-[0.1em] uppercase text-earth border border-border-warm px-2.5 py-1 hover:border-moss hover:text-moss transition-colors"
                  >
                    {tag}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
      )}

      {/* ── PROJECT NARRATIVE ── */}
      {(project.summary || project.description || project.challenge || project.approach || project.materials.length > 0) && (
      <section className="bg-cream py-20 lg:py-32 px-6 lg:px-[clamp(24px,5vw,80px)]">
        <div className="max-w-[1320px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          <RevealOnScroll className="lg:col-span-5">
            <SectionLabel className="mb-6">The Project</SectionLabel>
            {project.summary && (
              <p className="font-display text-bark mb-8 text-balance" style={{ fontSize: 'clamp(1.3rem,2vw,1.75rem)', fontWeight: 400, lineHeight: '1.35' }}>
                {project.summary}
              </p>
            )}
            {project.challenge && (
              <div className="mb-8">
                <p className="label mb-3 text-moss">The Challenge</p>
                <p className="text-clay text-[14px] leading-[1.75]">{project.challenge}</p>
              </div>
            )}
            {project.approach && (
              <div className="mb-8">
                <p className="label mb-3 text-moss">Our Approach</p>
                <p className="text-clay text-[14px] leading-[1.75]">{project.approach}</p>
              </div>
            )}
            {project.materials.length > 0 && (
              <div>
                <p className="label mb-3 text-moss">Materials</p>
                <ul className="space-y-1.5">
                  {project.materials.map((m) => (
                    <li key={m} className="text-clay text-[13px] flex items-start gap-2">
                      <span className="text-moss mt-1 flex-shrink-0">—</span>{m}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </RevealOnScroll>

          {project.description && (
            <RevealOnScroll delay={0.1} className="lg:col-span-7">
              <div className="space-y-5 text-clay text-[15px] leading-[1.8]">
                {project.description.split('\n\n').map((para, i) => <p key={i}>{para}</p>)}
              </div>
            </RevealOnScroll>
          )}
        </div>
      </section>
      )}

      {/* ── GALLERY ── */}
      {project.galleryImages.length > 0 && (
        <section className="bg-cream-alt py-16 lg:py-24 px-6 lg:px-[clamp(24px,5vw,80px)]" aria-label="Project gallery">
          <div className="max-w-[1320px] mx-auto">
            <RevealOnScroll className="mb-10">
              <SectionLabel className="mb-4">Gallery</SectionLabel>
              <h2 className="font-display text-bark" style={{ fontSize: 'clamp(1.5rem,2.5vw,2.25rem)', fontWeight: 400, lineHeight: '1.15' }}>
                Project photography
              </h2>
            </RevealOnScroll>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {project.galleryImages.map((img, i) => (
                <RevealOnScroll key={i} delay={i * 0.08}>
                  <div className="relative overflow-hidden bg-warm-stone img-hover-scale" style={{ aspectRatio: i === 0 ? '16/9' : '4/3' }}>
                    <Image src={img} alt={`${project.title} — detail ${i + 1}`} fill className="object-cover" sizes="(max-width:768px)100vw,50vw" unoptimized />
                  </div>
                </RevealOnScroll>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── NEXT PROJECT ── */}
      {nextProject && nextProject.slug !== slug && (
        <section aria-label="Next project">
          <Link
            href={`/work/${nextProject.slug}`}
            className="group block relative overflow-hidden"
            style={{ height: 'clamp(280px,35vw,480px)' }}
          >
            {nextProject.featuredImage && (
              <Image src={nextProject.featuredImage} alt={nextProject.title} fill className="object-cover transition-transform duration-700 group-hover:scale-[1.03]" sizes="100vw" unoptimized />
            )}
            <div className="absolute inset-0 bg-[rgba(26,24,20,0.55)]" />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
              <p className="label-light mb-4">Next Project</p>
              <h2 className="font-display text-cream font-[300]" style={{ fontSize: 'clamp(2rem,5vw,4rem)', lineHeight: '1.05' }}>
                {nextProject.title}
              </h2>
              <p className="label-light mt-4">{nextProject.projectLocation}</p>
              <span className="mt-8 inline-block border border-[rgba(248,244,238,0.4)] text-cream text-[11px] tracking-[0.12em] uppercase px-7 py-3 group-hover:bg-[rgba(248,244,238,0.12)] transition-colors">
                View Project
              </span>
            </div>
          </Link>
        </section>
      )}

      {/* ── CTA ── */}
      <section className="bg-cream py-20 lg:py-28 px-6 lg:px-[clamp(24px,5vw,80px)]">
        <RevealOnScroll className="max-w-[1320px] mx-auto text-center">
          <SectionLabel className="mb-6">Start Your Project</SectionLabel>
          <h2 className="font-display text-bark mx-auto mb-10" style={{ fontSize: 'clamp(1.75rem,3.5vw,3rem)', lineHeight: '1.1', fontWeight: 400, maxWidth: '560px' }}>
            Work with Yardie on your own exterior transformation.
          </h2>
          <Button href="/consultation" variant="primary" size="lg">Schedule a Consultation</Button>
        </RevealOnScroll>
      </section>
    </>
  );
}
