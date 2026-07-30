import Link from "next/link";
import Image from "next/image";
import { company, services, serviceAreas } from "@/lib/content";
import PreFooterCTA from "./PreFooterCTA";

// Services the footer leads with — covers Yardie's breadth without listing all twelve.
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
  { label: "About", href: "/about" },
  { label: "Gallery", href: "/gallery" },
  { label: "Journal", href: "/journal" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
  { label: "Request a consultation", href: "/quote" },
];

/**
 * Footer. Previously three stacked bands — an oversized brand statement, a
 * separate link index with dividers/per-row arrows/decorative hairlines, and a
 * bottom bar — which read as cluttered. This is one band: brand and contact on
 * the left, three plain link columns on the right, then a slim legal bar.
 */
export default function Footer() {
  const year = new Date().getFullYear();
  const primary = PRIMARY_SERVICES.map((slug) => services.find((s) => s.slug === slug)).filter(
    (s): s is NonNullable<typeof s> => Boolean(s)
  );
  const areas = serviceAreas.slice(0, 6);

  return (
    <>
      <PreFooterCTA />

      <footer className="bg-bark text-cream/80">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12 py-14 lg:py-20">
          <div className="grid gap-12 lg:gap-16 lg:grid-cols-12">
            {/* Brand + contact */}
            <div className="lg:col-span-4">
              <Link href="/" aria-label={company.name} className="inline-block">
                <Image src="/brand/logo-full-white.svg" alt={company.name} width={400} height={75} className="h-6 w-auto" />
              </Link>
              <p className="mt-5 text-[14.5px] text-cream/60 leading-relaxed max-w-[36ch]">
                An exterior design studio in {company.city}, drawing and building landscapes, hardscapes, and masonry across Eastern North Carolina.
              </p>

              <div className="mt-7 space-y-1.5 text-[14px]">
                <a href={company.phoneTel} className="block text-cream hover:text-stone transition-colors font-medium">
                  {company.phone}
                </a>
                <a href={`mailto:${company.email}`} className="block text-cream/75 hover:text-cream transition-colors break-all">
                  {company.email}
                </a>
                <p className="pt-1.5 text-[13px] text-cream/50 leading-relaxed">
                  {company.street}
                  <br />
                  {company.city}, {company.region} {company.postal}
                </p>
              </div>

              <div className="mt-6 flex items-center gap-4">
                <a href={company.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-cream/50 hover:text-cream transition-colors">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06c0 5 3.66 9.15 8.44 9.94v-7.03H7.9v-2.91h2.54V9.85c0-2.51 1.49-3.89 3.78-3.89 1.09 0 2.24.2 2.24.2v2.47h-1.26c-1.24 0-1.63.78-1.63 1.57v1.88h2.78l-.45 2.91h-2.33V22c4.78-.79 8.43-4.94 8.43-9.94Z" />
                  </svg>
                </a>
                <a href={company.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-cream/50 hover:text-cream transition-colors">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41-.56-.22-.96-.48-1.38-.9-.42-.42-.68-.82-.9-1.38-.16-.42-.36-1.06-.41-2.23-.06-1.27-.07-1.65-.07-4.85s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41 1.27-.06 1.65-.07 4.85-.07M12 0C8.74 0 8.33.01 7.05.07 5.78.13 4.9.33 4.14.63c-.79.31-1.46.72-2.13 1.39C1.34 2.69.93 3.36.62 4.15.32 4.91.13 5.78.07 7.05.01 8.33 0 8.74 0 12s.01 3.67.07 4.95c.06 1.27.25 2.14.55 2.9.31.79.72 1.46 1.39 2.13.67.67 1.34 1.08 2.13 1.39.76.3 1.63.49 2.9.55C8.33 23.99 8.74 24 12 24s3.67-.01 4.95-.07c1.27-.06 2.14-.25 2.9-.55.79-.31 1.46-.72 2.13-1.39.67-.67 1.08-1.34 1.39-2.13.3-.76.49-1.63.55-2.9.06-1.28.07-1.69.07-4.95s-.01-3.67-.07-4.95c-.06-1.27-.25-2.14-.55-2.9-.31-.79-.72-1.46-1.39-2.13C21.31 1.34 20.64.93 19.85.62c-.76-.3-1.63-.49-2.9-.55C15.67.01 15.26 0 12 0Zm0 5.84A6.16 6.16 0 1 0 18.16 12 6.16 6.16 0 0 0 12 5.84Zm0 10.16A4 4 0 1 1 16 12a4 4 0 0 1-4 4Zm6.41-11.85a1.44 1.44 0 1 0 1.44 1.44 1.44 1.44 0 0 0-1.44-1.44Z" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Link columns */}
            <div className="lg:col-span-8 lg:pl-8 grid grid-cols-2 sm:grid-cols-3 gap-x-8 gap-y-10">
              <FooterColumn title="Services" allHref="/services" allLabel="All services">
                {primary.map((s) => (
                  <FooterLink key={s.slug} href={`/services/${s.slug}`}>{s.name}</FooterLink>
                ))}
              </FooterColumn>

              <FooterColumn title="Studio">
                {STUDIO_LINKS.map((l) => (
                  <FooterLink key={l.href} href={l.href}>{l.label}</FooterLink>
                ))}
              </FooterColumn>

              <FooterColumn title="Service areas" allHref="/service-areas" allLabel="All areas">
                {areas.map((a) => (
                  <FooterLink key={a.slug} href={`/service-areas/${a.slug}`}>{a.name}</FooterLink>
                ))}
              </FooterColumn>
            </div>
          </div>
        </div>

        {/* Legal bar */}
        <div className="border-t border-cream/[0.08]">
          <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12 py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-[12px] text-cream/55 text-center">
            <p>© {year} {company.legalName}. All rights reserved.</p>
            <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
              <Link href="/legal/privacy-policy" className="hover:text-cream transition-colors">Privacy</Link>
              <Link href="/legal/terms-of-service" className="hover:text-cream transition-colors">Terms</Link>
              <Link href="/sitemap.xml" className="hover:text-cream transition-colors">Sitemap</Link>
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

function FooterColumn({
  title,
  allHref,
  allLabel,
  children,
}: {
  title: string;
  allHref?: string;
  allLabel?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <h3 className="text-[12.5px] text-cream/40 mb-4">{title}</h3>
      <ul className="space-y-2.5">{children}</ul>
      {allHref && allLabel && (
        <Link
          href={allHref}
          className="group mt-4 inline-block text-[13px] text-cream/60 transition-colors hover:text-cream"
        >
          <span className="relative pb-1">
            {allLabel}
            <span aria-hidden className="absolute inset-x-0 bottom-0 h-px bg-current opacity-25" />
            <span aria-hidden className="absolute inset-x-0 bottom-0 h-px bg-cream origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out" />
          </span>
        </Link>
      )}
    </div>
  );
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <li>
      <Link href={href} className="text-[14px] text-cream/70 hover:text-cream transition-colors">
        {children}
      </Link>
    </li>
  );
}
