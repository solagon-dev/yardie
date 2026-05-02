import Link from "next/link";
import YardieWordmark from "@/components/brand/YardieWordmark";
import DraftRule from "@/components/brand/DraftRule";

const serviceLinks = [
  { label: "Landscapes", href: "/services/landscapes" },
  { label: "Hardscapes", href: "/services/hardscapes" },
  { label: "Masonry", href: "/services/masonry" },
  { label: "Lighting", href: "/services/lighting" },
  { label: "Irrigation", href: "/services/irrigation" },
];

const companyLinks = [
  { label: "About", href: "/about" },
  { label: "Work", href: "/gallery" },
  { label: "Journal", href: "/journal" },
  { label: "FAQ", href: "/faq" },
  { label: "Let's talk", href: "/contact" },
];

const locationLinks = [
  { label: "Winterville, NC", href: "/service-areas/winterville-nc" },
  { label: "Ayden, NC", href: "/service-areas/ayden-nc" },
  { label: "Farmville, NC", href: "/service-areas/farmville-nc" },
  { label: "Washington, NC", href: "/service-areas/washington-nc" },
  { label: "Kinston, NC", href: "/service-areas/kinston-nc" },
  { label: "New Bern, NC", href: "/service-areas/new-bern-nc" },
];

export default function Footer() {
  return (
    <footer className="bg-forest text-limestone" aria-label="Site footer">
      {/* Top lockup — tagline owns the room */}
      <div className="max-w-content mx-auto px-6 lg:px-gutter pt-section pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-8">
            <div className="mb-8">
              <YardieWordmark tone="limestone" size={56} />
            </div>
            <p
              className="font-display text-limestone/95 text-[clamp(2rem,4vw,3.5rem)] leading-[1.05] tracking-[-0.015em] max-w-[720px]"
              style={{ fontWeight: 500 }}
            >
              Draw it. Build it. Live in it.
            </p>
            <p className="mt-6 text-limestone/70 text-[16px] leading-[1.6] max-w-[520px]">
              Exterior design based in Winterville, NC. We design and build landscape,
              hardscape, masonry, lighting, and irrigation as one plan — so the yard
              works as one yard.
            </p>
          </div>

          <div className="lg:col-span-4 lg:pl-10 lg:border-l border-limestone/15">
            <p className="eyebrow text-ochre mb-4">Start a project</p>
            <p className="text-limestone/75 text-[15px] leading-[1.65] mb-6">
              First consultation is free. We&rsquo;ll walk the property and go from there.
            </p>
            <Link
              href="/quote"
              className="inline-flex items-center justify-center gap-2 bg-ochre text-ink text-[14px] font-medium px-7 py-3.5 hover:bg-limestone transition-colors"
            >
              Start a project <span aria-hidden>→</span>
            </Link>
          </div>
        </div>
      </div>

      <DraftRule className="text-limestone/20" />

      {/* Link grid */}
      <div className="max-w-content mx-auto px-6 lg:px-gutter py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
          <div>
            <p className="eyebrow text-ochre mb-5">Services</p>
            <ul className="space-y-2.5">
              {serviceLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-limestone/70 text-[14px] hover:text-ochre transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="eyebrow text-ochre mb-5">Studio</p>
            <ul className="space-y-2.5">
              {companyLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-limestone/70 text-[14px] hover:text-ochre transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="eyebrow text-ochre mb-5">Service Areas</p>
            <ul className="space-y-2.5">
              <li>
                <Link
                  href="/service-areas"
                  className="text-limestone/70 text-[14px] hover:text-ochre transition-colors"
                >
                  All areas
                </Link>
              </li>
              {locationLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-limestone/70 text-[14px] hover:text-ochre transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="eyebrow text-ochre mb-5">Contact</p>
            <address className="not-italic space-y-4 text-[14px] text-limestone/70">
              <div>
                <p>5036 Winterville Parkway</p>
                <p>Winterville, NC 28590</p>
              </div>
              <div className="space-y-1">
                <a
                  href="tel:+12527567788"
                  className="block hover:text-ochre transition-colors mono-caption-sm text-limestone/70 uppercase"
                >
                  (252) 756-7788
                </a>
                <a
                  href="mailto:hello@yardiedesign.com"
                  className="block hover:text-ochre transition-colors mono-caption-sm text-limestone/70"
                >
                  hello@yardiedesign.com
                </a>
              </div>
              <div className="flex gap-4 pt-2">
                <a
                  href="https://www.instagram.com/yardienc/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Yardie on Instagram"
                  className="text-limestone/70 hover:text-ochre transition-colors"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                  </svg>
                </a>
                <a
                  href="https://www.facebook.com/yardiedesign/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Yardie on Facebook"
                  className="text-limestone/70 hover:text-ochre transition-colors"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                  </svg>
                </a>
              </div>
            </address>
          </div>
        </div>
      </div>

      <DraftRule className="text-limestone/20" />

      {/* Bottom bar */}
      <div className="max-w-content mx-auto px-6 lg:px-gutter py-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <p className="mono-caption-sm text-limestone/50">
          © {new Date().getFullYear()} Yardie. All rights reserved.
        </p>
        <div className="flex items-center gap-6 mono-caption-sm text-limestone/50">
          <Link href="/legal/privacy-policy" className="hover:text-ochre transition-colors">
            Privacy
          </Link>
          <Link href="/legal/terms-of-service" className="hover:text-ochre transition-colors">
            Terms
          </Link>
          <span>
            Site by{" "}
            <a
              href="https://www.solagon.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-ochre transition-colors"
            >
              Solagon
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}
