import Link from "next/link";
import Image from "next/image";
import { company, services, serviceAreas } from "@/lib/content";
import PreFooterCTA from "./PreFooterCTA";

// Eight services we lead with in the footer rail — keeps the column
// scannable while covering Yardie's full breadth.
const PRIMARY_SERVICES = [
  "landscapes",
  "patios-pavers",
  "outdoor-kitchens",
  "fire-features",
  "pool-decks",
  "masonry",
  "lighting",
  "irrigation",
];

const STUDIO_LINKS = [
  { label: "About",            href: "/about" },
  { label: "Gallery",          href: "/gallery" },
  { label: "Journal",          href: "/journal" },
  { label: "FAQ",              href: "/faq" },
  { label: "Contact",          href: "/contact" },
];

// County lookup so the Areas column can show city + county pairs.
const AREA_COUNTY: Record<string, string> = {
  greenville: "Pitt County",
  winterville: "Pitt County",
  ayden: "Pitt County",
  farmville: "Pitt County",
  washington: "Beaufort County",
  kinston: "Lenoir County",
  "new-bern": "Craven County",
  goldsboro: "Wayne County",
  wilson: "Wilson County",
  "rocky-mount": "Edgecombe County",
};

export default function Footer() {
  const year = new Date().getFullYear();
  const primary = PRIMARY_SERVICES.map((slug) =>
    services.find((s) => s.slug === slug)
  ).filter((s): s is NonNullable<typeof s> => Boolean(s));

  const featuredAreas = serviceAreas.slice(0, 6);

  return (
    <>
      <PreFooterCTA />

      <footer className="bg-bark text-cream/80">
        {/* ── Brand row. Section dividers use a centered fade rather
              than a solid line so they read as atmospheric rules instead
              of harsh edges against the dark background. ── */}
        <div className="relative">
          <span aria-hidden className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-cream/[0.07] to-transparent pointer-events-none" />
          <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12 py-10 sm:py-14 lg:py-20">
            <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 items-end">
              <div className="lg:col-span-7 text-center lg:text-left">
                <Link href="/" className="inline-block mb-5 sm:mb-7" aria-label={company.name}>
                  <Image
                    src="/brand/logo-full-white.svg"
                    alt={company.name}
                    width={400}
                    height={75}
                    className="h-5 sm:h-6 w-auto"
                  />
                </Link>
                <p className="font-display text-[24px] sm:text-[30px] lg:text-[42px] text-cream leading-[1.15] tracking-tight max-w-[24ch] font-light mx-auto lg:mx-0">
                  Designed outdoor living for{" "}
                  <span className="italic text-stone">Eastern North Carolina.</span>
                </p>
              </div>
              <div className="lg:col-span-5 flex flex-col items-center lg:items-end gap-2.5 text-[14px]">
                <a href={company.phoneTel} className="text-cream hover:text-stone transition-colors font-medium tracking-wide">
                  {company.phone}
                </a>
                <a href={`mailto:${company.email}`} className="text-cream/75 hover:text-cream transition-colors break-all">
                  {company.email}
                </a>
                <p className="text-cream/55 text-[13px]">
                  {company.street} · {company.city}, {company.region} {company.postal}
                </p>
                <div className="flex items-center gap-5 mt-3">
                  <a href={company.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-cream/55 hover:text-cream transition-colors">
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06c0 5 3.66 9.15 8.44 9.94v-7.03H7.9v-2.91h2.54V9.85c0-2.51 1.49-3.89 3.78-3.89 1.09 0 2.24.2 2.24.2v2.47h-1.26c-1.24 0-1.63.78-1.63 1.57v1.88h2.78l-.45 2.91h-2.33V22c4.78-.79 8.43-4.94 8.43-9.94Z" />
                    </svg>
                  </a>
                  <a href={company.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-cream/55 hover:text-cream transition-colors">
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41-.56-.22-.96-.48-1.38-.9-.42-.42-.68-.82-.9-1.38-.16-.42-.36-1.06-.41-2.23-.06-1.27-.07-1.65-.07-4.85s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41 1.27-.06 1.65-.07 4.85-.07M12 0C8.74 0 8.33.01 7.05.07 5.78.13 4.9.33 4.14.63c-.79.31-1.46.72-2.13 1.39C1.34 2.69.93 3.36.62 4.15.32 4.91.13 5.78.07 7.05.01 8.33 0 8.74 0 12s.01 3.67.07 4.95c.06 1.27.25 2.14.55 2.9.31.79.72 1.46 1.39 2.13.67.67 1.34 1.08 2.13 1.39.76.3 1.63.49 2.9.55C8.33 23.99 8.74 24 12 24s3.67-.01 4.95-.07c1.27-.06 2.14-.25 2.9-.55.79-.31 1.46-.72 2.13-1.39.67-.67 1.08-1.34 1.39-2.13.3-.76.49-1.63.55-2.9.06-1.28.07-1.69.07-4.95s-.01-3.67-.07-4.95c-.06-1.27-.25-2.14-.55-2.9-.31-.79-.72-1.46-1.39-2.13C21.31 1.34 20.64.93 19.85.62c-.76-.3-1.63-.49-2.9-.55C15.67.01 15.26 0 12 0Zm0 5.84A6.16 6.16 0 1 0 18.16 12 6.16 6.16 0 0 0 12 5.84Zm0 10.16A4 4 0 1 1 16 12a4 4 0 0 1-4 4Zm6.41-11.85a1.44 1.44 0 1 0 1.44 1.44 1.44 1.44 0 0 0-1.44-1.44Z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── Link index ── */}
        <div className="relative">
          <span aria-hidden className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-cream/[0.07] to-transparent pointer-events-none" />
          <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12 py-10 sm:py-14 lg:py-20">

            {/* Mobile — accordion */}
            <div className="sm:hidden divide-y divide-cream/[0.06]">
              <FooterAccordion title="Services">
                <ul className="space-y-3 pt-3 pb-5">
                  {primary.map((s) => (
                    <li key={s.slug}>
                      <Link href={`/services/${s.slug}`} className="text-[14px] text-cream/75 hover:text-cream transition-colors">
                        {s.name}
                      </Link>
                    </li>
                  ))}
                  <FooterAllLink href="/services">All Services</FooterAllLink>
                </ul>
              </FooterAccordion>

              <FooterAccordion title="Studio">
                <ul className="space-y-3 pt-3 pb-5">
                  {STUDIO_LINKS.map((l) => (
                    <li key={l.href}>
                      <Link href={l.href} className="text-[14px] text-cream/75 hover:text-cream transition-colors">
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </FooterAccordion>

              <FooterAccordion title="Service Areas">
                <ul className="space-y-3 pt-3 pb-5">
                  {featuredAreas.map((area) => (
                    <li key={area.slug}>
                      <Link href={`/service-areas/${area.slug}`} className="group block">
                        <span className="text-[14px] text-cream/75 group-hover:text-cream transition-colors">
                          {area.name}
                        </span>
                        <span className="block text-[11px] text-cream/40 mt-0.5">
                          {AREA_COUNTY[area.slug] ?? "Eastern NC"}
                        </span>
                      </Link>
                    </li>
                  ))}
                  <FooterAllLink href="/service-areas">All Areas</FooterAllLink>
                </ul>
              </FooterAccordion>
            </div>

            {/* Tablet+ — structured 12-col grid with column headers */}
            <div className="hidden sm:grid sm:grid-cols-12 gap-x-8 lg:gap-x-12 gap-y-12">

              {/* Services */}
              <div className="sm:col-span-4">
                <FooterColumnHeader>Services</FooterColumnHeader>
                <ul className="divide-y divide-cream/[0.06]">
                  {primary.map((s) => (
                    <li key={s.slug}>
                      <Link
                        href={`/services/${s.slug}`}
                        className="group flex items-baseline justify-between py-3 text-[14px] text-cream/75 hover:text-cream transition-colors"
                      >
                        <span>{s.name}</span>
                        <span aria-hidden className="ml-3 text-cream/25 group-hover:text-stone group-hover:translate-x-0.5 transition-all">→</span>
                      </Link>
                    </li>
                  ))}
                </ul>
                <div className="mt-5">
                  <FooterAllLink href="/services">All Services</FooterAllLink>
                </div>
              </div>

              {/* Studio — split into two compact sub-columns to break the long-line look */}
              <div className="sm:col-span-4">
                <FooterColumnHeader>Studio</FooterColumnHeader>
                <ul className="grid grid-cols-2 gap-x-6 gap-y-3">
                  {STUDIO_LINKS.map((l) => (
                    <li key={l.href}>
                      <Link
                        href={l.href}
                        className="group inline-flex items-baseline gap-1 text-[14px] text-cream/75 hover:text-cream transition-colors"
                      >
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
                <div className="mt-7">
                  <FooterAllLink href="/quote">Request a Quote</FooterAllLink>
                </div>
              </div>

              {/* Service Areas — city + county pairs */}
              <div className="sm:col-span-4">
                <FooterColumnHeader>Service Areas</FooterColumnHeader>
                <ul className="grid grid-cols-2 gap-x-6 gap-y-4">
                  {featuredAreas.map((area) => (
                    <li key={area.slug}>
                      <Link
                        href={`/service-areas/${area.slug}`}
                        className="group block leading-tight"
                      >
                        <span className="block text-[14px] text-cream/85 group-hover:text-cream transition-colors">
                          {area.name}
                        </span>
                        <span className="block text-[11px] text-cream/40 group-hover:text-stone transition-colors mt-0.5">
                          {AREA_COUNTY[area.slug] ?? "Eastern NC"}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
                <div className="mt-7">
                  <FooterAllLink href="/service-areas">All Areas</FooterAllLink>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── Bottom bar ── */}
        <div className="bg-dark-surface/80">
          <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12 py-5 sm:py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] sm:text-[11.5px] tracking-wide text-cream/45 text-center sm:text-left">
            <p>&copy; {year} {company.legalName}. All rights reserved.</p>
            <div className="flex flex-wrap items-center justify-center gap-x-4 sm:gap-x-5 gap-y-2">
              <Link href="/legal/privacy-policy" className="hover:text-cream transition-colors">Privacy</Link>
              <Link href="/legal/terms-of-service" className="hover:text-cream transition-colors">Terms</Link>
              <Link href="/sitemap.xml" className="hover:text-cream transition-colors">Sitemap</Link>
              <span aria-hidden className="hidden sm:block h-3 w-px bg-cream/[0.06]" />
              <a href="https://solagon.com" target="_blank" rel="noopener noreferrer" className="hover:text-cream transition-colors">
                Site by Solagon
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

function FooterColumnHeader({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-5 pb-4 border-b border-cream/[0.06] flex items-baseline justify-between">
      <h3 className="font-display italic text-stone text-[18px] lg:text-[20px] leading-none tracking-tight font-light">
        {children}
      </h3>
      <span aria-hidden className="block h-px w-6 bg-cream/[0.06]" />
    </div>
  );
}

function FooterAllLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="group inline-flex items-center justify-center gap-3 text-[11px] tracking-[0.22em] uppercase font-medium text-cream/85 hover:text-cream transition-colors"
    >
      <span aria-hidden className="block h-px w-5 bg-cream/[0.12] group-hover:w-9 group-hover:bg-stone/60 transition-all duration-500 ease-out" />
      {children}
      <svg className="h-3 w-3 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
      </svg>
    </Link>
  );
}

function FooterAccordion({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <details className="group">
      <summary className="flex items-center justify-between py-4 cursor-pointer list-none">
        <span className="font-display italic text-stone text-[17px] tracking-tight font-light">
          {title}
        </span>
        <svg
          className="h-3 w-3 text-stone/60 transition-transform duration-300 group-open:rotate-180"
          fill="none" viewBox="0 0 24 24" strokeWidth={1.75} stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
        </svg>
      </summary>
      {children}
    </details>
  );
}
