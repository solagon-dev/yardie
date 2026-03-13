import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import RevealOnScroll from '@/components/ui/RevealOnScroll';
import SectionLabel from '@/components/ui/SectionLabel';
import Button from '@/components/ui/Button';

export const metadata: Metadata = {
  title: 'About Yardie Design — Founded in Greenville, NC by Scott Baldwin',
  description:
    'Learn about Yardie Design — founded in Greenville, NC by Scott Baldwin. 20+ years of exterior design experience and 100+ projects completed across Eastern North Carolina.',
  alternates: {
    canonical: 'https://www.yardiedesign.com/about',
  },
  openGraph: {
    title: 'About Yardie Design — Greenville, NC Exterior Design',
    description: 'Founded by Scott Baldwin in Greenville, NC. Over 20 years of exterior design experience across Eastern North Carolina.',
    images: [{ url: '/IMG_4722.jpg', alt: 'Scott Baldwin, founder of Yardie Design, Greenville NC' }],
  },
};

const stats = [
  { num: '100+', label: 'Clients Served' },
  { num: '20+', label: 'Years of Experience' },
  { num: '30+', label: 'Designers & Craftsmen' },
];

const pillars = [
  {
    num: '01',
    title: 'Planning',
    body: 'Every extraordinary outdoor space begins with a thoughtful plan. We conduct thorough site analysis, assess existing conditions, and develop a detailed design brief in collaboration with you — aligning on budget, timeline, and aesthetic direction before a single stone is placed.',
  },
  {
    num: '02',
    title: 'Exterior Design',
    body: "The design phase is where vision becomes form. Our team develops a complete exterior composition — balancing aesthetics and functionality, selecting materials that honor your home's architecture, and presenting a plan with enough detail and visual clarity that you can see exactly what you're getting before it's built.",
  },
  {
    num: '03',
    title: 'Ongoing Stewardship',
    body: "A landscape isn't finished at installation — it's the beginning of a living thing. We offer maintenance services, seasonal guidance, and introductions to trusted local professionals who can support your landscape over the long term. Your investment should look better every year.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="relative w-full overflow-hidden" aria-label="About hero">
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[70vh]">
          {/* Text half */}
          <div className="bg-bark flex flex-col justify-center px-6 lg:px-[clamp(32px,4vw,80px)] pt-[152px] pb-20 lg:pt-[184px] lg:pb-28">
            <SectionLabel light className="mb-8">Greenville, NC — Est. by Scott Baldwin</SectionLabel>
            <h1
              className="font-display text-cream text-balance"
              style={{ fontSize: 'clamp(2.4rem,5vw,4.5rem)', lineHeight: '1.02', fontWeight: 300 }}
            >
              Rooted in Greenville.<br /><em>Designed for Life Outside.</em>
            </h1>
            <p className="text-dark-muted text-[15px] leading-[1.75] mt-8 max-w-[440px]">
              Yardie is an exterior design company that transforms outdoor living spaces into vibrant, enduring extensions of your home. We believe every yard has extraordinary potential.
            </p>
          </div>
          {/* Photo half */}
          <div className="relative min-h-[400px] lg:min-h-0">
            <Image
              src="/IMG_4722.jpg"
              alt="Scott Baldwin and team at Yardie Design — Greenville NC exterior design"
              fill
              priority
              className="object-cover"
              sizes="(max-width:1024px)100vw,50vw"
              unoptimized
            />
          </div>
        </div>
      </section>

      {/* ── STATS ── */}
      <section className="bg-warm-stone py-16 lg:py-20 px-6 lg:px-[clamp(24px,5vw,80px)]">
        <div className="max-w-[1320px] mx-auto">
          <div className="grid grid-cols-3 gap-6 lg:gap-12 divide-x divide-border-warm">
            {stats.map((s, i) => (
              <RevealOnScroll key={s.label} delay={i * 0.08} className="text-center px-4">
                <p
                  className="font-display text-bark"
                  style={{ fontSize: 'clamp(2.2rem,4vw,4rem)', fontWeight: 300, lineHeight: '1' }}
                >
                  {s.num}
                </p>
                <p className="label mt-3">{s.label}</p>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ── OUR STORY ── */}
      <section className="bg-cream py-20 lg:py-32 px-6 lg:px-[clamp(24px,5vw,80px)]">
        <div className="max-w-[1320px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <RevealOnScroll>
            <SectionLabel className="mb-6">Our Story</SectionLabel>
            <h2
              className="font-display text-bark mb-8"
              style={{ fontSize: 'clamp(1.75rem,3vw,2.75rem)', lineHeight: '1.12', fontWeight: 400 }}
            >
              Building something that lasts
            </h2>
            <div className="space-y-5 text-clay text-[15px] leading-[1.75] max-w-[520px]">
              <p>
                Yardie was founded in Greenville, North Carolina by Scott Baldwin with a singular purpose: to bring genuine design thinking and real craftsmanship to exterior spaces in Eastern NC.
              </p>
              <p>
                Too many properties in our region are treated as afterthoughts — graded flat, planted with whatever was on sale, and left without any real design intent. We set out to change that.
              </p>
              <p>
                Today, our team of designers and craftsmen has completed hundreds of projects across Greenville, Winterville, Farmville, and the broader Pitt County region. Each project is approached as its own composition — with a clear brief, thoughtful design, quality materials, and execution that reflects the standards we hold ourselves to.
              </p>
              <p>
                We work with homeowners who care about their properties and want outdoor environments that feel as considered as the interiors they&apos;ve spent years perfecting.
              </p>
            </div>
          </RevealOnScroll>

          <RevealOnScroll delay={0.15}>
            <div className="relative overflow-hidden" style={{ aspectRatio: '3/4' }}>
              <Image
                src="/IMG_1775.jpg"
                alt="Scott Baldwin, founder of Yardie Design, reviewing project plans"
                fill
                className="object-cover"
                sizes="(max-width:1024px)100vw,50vw"
                unoptimized
              />
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* ── WHAT WE DO ── */}
      <section className="bg-cream-alt py-20 lg:py-32 px-6 lg:px-[clamp(24px,5vw,80px)]" aria-labelledby="what-we-do">
        <div className="max-w-[1320px] mx-auto">
          <RevealOnScroll className="mb-16">
            <SectionLabel className="mb-4">What We Do</SectionLabel>
            <h2
              id="what-we-do"
              className="font-display text-bark max-w-[520px]"
              style={{ fontSize: 'clamp(2rem,3.5vw,3rem)', lineHeight: '1.1', fontWeight: 400 }}
            >
              From concept to ongoing care
            </h2>
          </RevealOnScroll>

          <div className="divide-y divide-border-light">
            {pillars.map((p, i) => (
              <RevealOnScroll key={p.num} delay={i * 0.1}>
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-12 py-12 lg:py-14 items-start">
                  <div className="lg:col-span-1 hidden lg:block">
                    <span
                      className="font-display text-warm-stone select-none"
                      style={{ fontSize: 'clamp(3rem,5vw,5rem)', lineHeight: '1', fontWeight: 300 }}
                      aria-hidden="true"
                    >
                      {p.num}
                    </span>
                  </div>
                  <div className="lg:col-span-4">
                    <span className="label lg:hidden mb-2 block">{p.num}</span>
                    <h3
                      className="font-display text-bark"
                      style={{ fontSize: 'clamp(1.4rem,2vw,1.85rem)', fontWeight: 400, lineHeight: '1.2' }}
                    >
                      {p.title}
                    </h3>
                  </div>
                  <div className="lg:col-span-7">
                    <p className="text-clay text-[15px] leading-[1.75] max-w-[580px]">
                      {p.body}
                    </p>
                  </div>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ── LEADERSHIP ── */}
      <section className="bg-bark py-24 lg:py-36 px-6 lg:px-[clamp(24px,5vw,80px)]" aria-labelledby="leadership-heading">
        <div className="max-w-[1320px] mx-auto">
          <RevealOnScroll className="mb-14">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
              <div>
                <SectionLabel light className="mb-4">Our People</SectionLabel>
                <h2
                  id="leadership-heading"
                  className="font-display text-cream"
                  style={{ fontSize: 'clamp(2.2rem,4vw,3.5rem)', lineHeight: '1.06', fontWeight: 300 }}
                >
                  The people behind the work
                </h2>
              </div>
              <p
                className="text-[rgba(248,244,238,0.4)] text-[13px] leading-[1.75] max-w-[300px] text-right hidden md:block"
                style={{ letterSpacing: '0.01em' }}
              >
                A team built on craft, precision, and a shared belief that great exterior design changes how you live.
              </p>
            </div>
          </RevealOnScroll>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-px bg-[rgba(248,244,238,0.06)]">
            {([
              { name: 'Scott Baldwin', role: 'Founder & Principal',  image: '/scott-baldwin.jpg' },
              { name: 'Linda Taylor',  role: 'Lead Designer',        image: null               },
              { name: 'Bill Davis',    role: 'Operations Manager',   image: null               },
              { name: 'Mario Taxho',   role: 'Project Manager',      image: '/mario-taxho.jpg' },
              { name: 'Sky Baldwin',   role: 'Creative Director',    image: null               },
            ] as { name: string; role: string; image: string | null }[]).map((person, i) => {
              const initials = person.name.split(' ').map((n) => n[0]).join('');
              return (
                <RevealOnScroll key={person.name} delay={i * 0.07}>
                  <div
                    className="group relative overflow-hidden bg-[#1a1814]"
                    style={{ aspectRatio: '3/4' }}
                  >
                    {person.image ? (
                      <>
                        <Image
                          src={person.image}
                          alt={person.name}
                          fill
                          className="object-cover object-top transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.05]"
                          sizes="(max-width:768px)50vw,(max-width:1024px)33vw,20vw"
                          unoptimized
                        />
                        <div
                          className="absolute inset-0"
                          style={{ background: 'linear-gradient(to top, rgba(26,24,20,0.92) 0%, rgba(26,24,20,0.35) 45%, rgba(26,24,20,0.1) 70%)' }}
                        />
                      </>
                    ) : (
                      /* ── Placeholder for team members without a headshot yet ── */
                      <>
                        {/* Subtle moss radial glow */}
                        <div
                          className="absolute inset-0"
                          style={{ background: 'radial-gradient(ellipse 80% 65% at 50% 40%, rgba(111,121,88,0.14) 0%, transparent 70%)' }}
                          aria-hidden="true"
                        />
                        {/* Fine dot-grid texture */}
                        <div
                          className="absolute inset-0"
                          style={{
                            backgroundImage: 'radial-gradient(circle, rgba(248,244,238,0.06) 1px, transparent 1px)',
                            backgroundSize: '22px 22px',
                          }}
                          aria-hidden="true"
                        />
                        {/* Centered monogram */}
                        <div className="absolute inset-0 flex flex-col items-center justify-center" aria-hidden="true">
                          <span
                            className="font-display select-none leading-none"
                            style={{
                              fontSize: 'clamp(4.5rem,7vw,6.5rem)',
                              fontWeight: 300,
                              letterSpacing: '-0.03em',
                              color: 'rgba(248,244,238,0.09)',
                            }}
                          >
                            {initials}
                          </span>
                          <span
                            className="block mt-5 w-8 h-px"
                            style={{ background: 'rgba(111,121,88,0.45)' }}
                          />
                        </div>
                        {/* Bottom fade — matches photo cards */}
                        <div
                          className="absolute inset-0"
                          style={{ background: 'linear-gradient(to top, rgba(26,24,20,0.9) 0%, rgba(26,24,20,0.18) 55%, transparent 75%)' }}
                        />
                      </>
                    )}

                    {/* Name & role — same for all cards */}
                    <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-7">
                      <p
                        className="font-display text-cream font-[300] leading-tight"
                        style={{ fontSize: 'clamp(1rem,1.2vw,1.15rem)' }}
                      >
                        {person.name}
                      </p>
                      <p
                        className="mt-1.5"
                        style={{ fontSize: '10px', letterSpacing: '0.16em', textTransform: 'uppercase', color: 'rgba(248,244,238,0.4)' }}
                      >
                        {person.role}
                      </p>
                    </div>
                  </div>
                </RevealOnScroll>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── PHILOSOPHY ── */}
      <section className="bg-bark py-24 lg:py-36 px-6 lg:px-[clamp(24px,5vw,80px)]">
        <RevealOnScroll className="max-w-[780px] mx-auto text-center">
          <SectionLabel light className="mb-8">Our Philosophy</SectionLabel>
          <blockquote>
            <p
              className="font-display text-cream font-[300] italic text-balance"
              style={{ fontSize: 'clamp(1.5rem,2.8vw,2.25rem)', lineHeight: '1.4' }}
            >
              &ldquo;Design should be an experience, not just a product. Each project is a collaboration — one that reflects the homeowner&apos;s personality while integrating with the natural environment.&rdquo;
            </p>
            <cite className="block mt-10 not-italic">
              <span className="label-light">Scott Baldwin</span>
              <span className="block text-[rgba(248,244,238,0.35)] text-[12px] tracking-[0.08em] mt-1">Founder, Yardie Design</span>
            </cite>
          </blockquote>
        </RevealOnScroll>
      </section>

      {/* ── FULL-BLEED PHOTO ── */}
      <div className="relative w-full overflow-hidden" style={{ height: 'clamp(280px,40vw,520px)' }} aria-hidden="true">
        <Image
          src="/DSC00044.jpg"
          alt=""
          fill
          className="object-cover object-center"
          sizes="100vw"
          unoptimized
        />
        <div className="absolute inset-0 bg-[rgba(26,24,20,0.2)]" />
      </div>

      {/* ── CTA ── */}
      <section className="bg-cream py-20 lg:py-28 px-6 lg:px-[clamp(24px,5vw,80px)]">
        <RevealOnScroll className="max-w-[1320px] mx-auto flex flex-col md:flex-row md:items-center justify-between gap-10">
          <div>
            <SectionLabel className="mb-4">Work With Us</SectionLabel>
            <h2
              className="font-display text-bark text-balance"
              style={{ fontSize: 'clamp(1.75rem,3vw,2.75rem)', lineHeight: '1.12', fontWeight: 400, maxWidth: '500px' }}
            >
              Let&apos;s build something together.
            </h2>
          </div>
          <div className="flex flex-wrap gap-4 flex-shrink-0">
            <Button href="/consultation" variant="primary" size="md">Schedule Consultation</Button>
            <Button href="/work" variant="outline" size="md">View Our Work</Button>
          </div>
        </RevealOnScroll>
      </section>
    </>
  );
}
