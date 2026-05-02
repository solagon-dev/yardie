import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { company, serviceAreas } from "@/lib/content";
import ContactForm from "@/components/ContactForm";
import { buildMetadata } from "@/lib/seo";
import { photos } from "@/lib/media";
import PageHero from "@/components/ui/PageHero";

export const metadata: Metadata = buildMetadata({
  title: `Contact ${company.name} — Greenville, NC Exterior Design`,
  description: `Reach the ${company.name} studio. Call ${company.phone} or email ${company.email} for a no-cost design consultation. We respond within one business day.`,
  path: "/contact",
  keywords: [
    `contact ${company.name}`,
    "exterior design consultation Greenville NC",
    "landscape design quote Greenville NC",
  ],
});

const contactRows = [
  {
    label: "Call or text",
    primary: company.phone,
    href: company.phoneTel,
    sub: "Mon–Fri · 8a–5p",
  },
  {
    label: "Email",
    primary: company.email,
    href: `mailto:${company.email}`,
    sub: "We respond within one business day",
  },
  {
    label: "Studio",
    primary: `${company.city}, ${company.region}`,
    href: undefined,
    sub: company.street,
  },
];

const mapQuery = encodeURIComponent(`${company.street}, ${company.city}, ${company.region} ${company.postal}`);

export default function ContactPage() {
  return (
    <>
      <PageHero
        label="Contact"
        headline="Let's talk about"
        italicTail="your space."
        intro="Tell us what you're planning, where the property is, and how we can help. We answer every inquiry — most within the same business day."
        image={photos.heroAman}
      />

      {/* ── Quick contact rail + form ── */}
      <section className="bg-cream py-14 sm:py-20 lg:py-28 border-b border-border">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-20 items-start">
            {/* Left — directory */}
            <aside className="lg:col-span-5 space-y-8 sm:space-y-10">
              <div className="text-center lg:text-left">
                <h2 className="font-display text-[28px] sm:text-3xl lg:text-[44px] text-bark leading-[1.08] tracking-tight font-light">
                  Three ways to{" "}
                  <span className="italic text-moss">reach us.</span>
                </h2>
                <p className="mt-5 text-[14.5px] sm:text-[15.5px] text-earth leading-relaxed max-w-md mx-auto lg:mx-0">
                  Pick whatever&rsquo;s easiest. Calls and texts go straight to the studio; email is checked daily.
                </p>
              </div>

              <ul className="border-t border-border">
                {contactRows.map((row) => (
                  <li key={row.label} className="border-b border-border">
                    <div className="flex flex-col sm:grid sm:grid-cols-[8rem_minmax(0,1fr)] lg:grid-cols-[10rem_minmax(0,1fr)] sm:items-baseline gap-2 sm:gap-6 py-5 sm:py-6">
                      <p className="footer-label text-clay">{row.label}</p>
                      <div className="min-w-0">
                        {row.href ? (
                          <a
                            href={row.href}
                            className="font-display text-[22px] sm:text-[24px] lg:text-[28px] text-bark hover:text-moss transition-colors leading-tight tracking-tight break-words"
                          >
                            {row.primary}
                          </a>
                        ) : (
                          <p className="font-display text-[22px] sm:text-[24px] lg:text-[28px] text-bark leading-tight tracking-tight break-words">
                            {row.primary}
                          </p>
                        )}
                        <p className="mt-1.5 text-[12.5px] text-clay">{row.sub}</p>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>

              {/* Social */}
              <div>
                <p className="footer-label text-clay mb-4">Follow along</p>
                <div className="flex flex-col gap-2">
                  <a
                    href={company.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-between gap-4 border-b border-border py-3 hover:border-moss/40 transition-colors"
                  >
                    <span className="flex items-center gap-3 min-w-0">
                      <svg className="h-4 w-4 text-clay group-hover:text-moss transition-colors" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41-.56-.22-.96-.48-1.38-.9-.42-.42-.68-.82-.9-1.38-.16-.42-.36-1.06-.41-2.23-.06-1.27-.07-1.65-.07-4.85s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41 1.27-.06 1.65-.07 4.85-.07M12 0C8.74 0 8.33.01 7.05.07 5.78.13 4.9.33 4.14.63c-.79.31-1.46.72-2.13 1.39C1.34 2.69.93 3.36.62 4.15.32 4.91.13 5.78.07 7.05.01 8.33 0 8.74 0 12s.01 3.67.07 4.95c.06 1.27.25 2.14.55 2.9.31.79.72 1.46 1.39 2.13.67.67 1.34 1.08 2.13 1.39.76.3 1.63.49 2.9.55C8.33 23.99 8.74 24 12 24s3.67-.01 4.95-.07c1.27-.06 2.14-.25 2.9-.55.79-.31 1.46-.72 2.13-1.39.67-.67 1.08-1.34 1.39-2.13.3-.76.49-1.63.55-2.9.06-1.28.07-1.69.07-4.95s-.01-3.67-.07-4.95c-.06-1.27-.25-2.14-.55-2.9-.31-.79-.72-1.46-1.39-2.13C21.31 1.34 20.64.93 19.85.62c-.76-.3-1.63-.49-2.9-.55C15.67.01 15.26 0 12 0Zm0 5.84A6.16 6.16 0 1 0 18.16 12 6.16 6.16 0 0 0 12 5.84Zm0 10.16A4 4 0 1 1 16 12a4 4 0 0 1-4 4Zm6.41-11.85a1.44 1.44 0 1 0 1.44 1.44 1.44 1.44 0 0 0-1.44-1.44Z" />
                      </svg>
                      <span className="font-display text-[16px] sm:text-[18px] text-bark group-hover:text-moss transition-colors truncate">@yardiedesign</span>
                    </span>
                    <span className="text-[10.5px] tracking-[0.18em] uppercase text-clay group-hover:text-moss transition-colors shrink-0">Instagram</span>
                  </a>
                  <a
                    href={company.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-between gap-4 border-b border-border py-3 hover:border-moss/40 transition-colors"
                  >
                    <span className="flex items-center gap-3 min-w-0">
                      <svg className="h-4 w-4 text-clay group-hover:text-moss transition-colors" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06c0 5 3.66 9.15 8.44 9.94v-7.03H7.9v-2.91h2.54V9.85c0-2.51 1.49-3.89 3.78-3.89 1.09 0 2.24.2 2.24.2v2.47h-1.26c-1.24 0-1.63.78-1.63 1.57v1.88h2.78l-.45 2.91h-2.33V22c4.78-.79 8.43-4.94 8.43-9.94Z" />
                      </svg>
                      <span className="font-display text-[16px] sm:text-[18px] text-bark group-hover:text-moss transition-colors truncate">Yardie Design</span>
                    </span>
                    <span className="text-[10.5px] tracking-[0.18em] uppercase text-clay group-hover:text-moss transition-colors shrink-0">Facebook</span>
                  </a>
                </div>
              </div>
            </aside>

            {/* Right — form */}
            <div className="lg:col-span-7">
              <div className="bg-cream-alt border border-border">
                <div className="px-5 sm:px-10 pt-7 sm:pt-9 pb-6 sm:pb-7 border-b border-border text-center lg:text-left">
                  <p className="footer-label text-moss mb-3">Send a message</p>
                  <h2 className="font-display text-[24px] sm:text-[28px] lg:text-[36px] text-bark leading-[1.15] tracking-tight font-light">
                    Tell us a little about{" "}
                    <span className="italic text-moss">what you have in mind.</span>
                  </h2>
                  <p className="mt-3 text-[13.5px] sm:text-[14px] text-earth leading-relaxed">
                    For full project details, the{" "}
                    <Link href="/quote" className="text-moss font-medium hover:text-bark transition-colors">
                      consultation form
                    </Link>{" "}
                    walks you through everything in 60 seconds.
                  </p>
                </div>
                <div className="px-5 sm:px-10 py-7 sm:py-9">
                  <ContactForm />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Map + service area band ── */}
      <section className="bg-cream-alt border-b border-border">
        <div className="grid lg:grid-cols-12">
          <div className="lg:col-span-5 p-7 sm:p-10 lg:p-14 flex flex-col justify-center text-center lg:text-left">
            <p className="footer-label text-moss mb-4">Where we work</p>
            <h2 className="font-display text-[26px] sm:text-3xl lg:text-[44px] text-bark leading-[1.1] tracking-tight font-light">
              {company.city} studio,{" "}
              <span className="italic text-moss">Eastern NC projects.</span>
            </h2>
            <p className="mt-5 sm:mt-6 text-[14.5px] sm:text-[15.5px] text-earth leading-relaxed max-w-md mx-auto lg:mx-0">
              We design and build for homeowners across Eastern North Carolina — from {company.market.split(",")[0]} out to the coast.
            </p>
            <ul className="mt-7 sm:mt-8 grid grid-cols-2 gap-x-4 gap-y-2 max-w-md mx-auto lg:mx-0">
              {serviceAreas.slice(0, 8).map((area) => (
                <li key={area.slug}>
                  <Link
                    href={`/service-areas/${area.slug}`}
                    className="group inline-flex items-center justify-center gap-3 text-[13.5px] sm:text-[14px] text-earth hover:text-moss transition-colors"
                  >
                    <span className="block h-px w-3 bg-clay/60 group-hover:w-7 group-hover:bg-moss transition-all duration-500 ease-out" />
                    {area.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:col-span-7 relative aspect-[4/3] lg:aspect-auto lg:min-h-[520px] bg-stone">
            <iframe
              title={`${company.name} studio location map`}
              src={`https://www.google.com/maps?q=${mapQuery}&z=10&output=embed`}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 w-full h-full grayscale-[0.2] contrast-[0.95]"
              allowFullScreen
            />
          </div>
        </div>
      </section>

      {/* ── Closing editorial frame ── */}
      <section className="relative bg-cream">
        <div className="relative aspect-[16/9] sm:aspect-[16/7] lg:aspect-[21/9] overflow-hidden bg-stone">
          <Image
            src={photos.heroFlagstone.src}
            alt={photos.heroFlagstone.alt}
            fill
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-bark/55 via-bark/15 to-transparent" />
          <div className="absolute inset-0 flex items-end">
            <div className="mx-auto max-w-[1400px] w-full px-5 sm:px-8 lg:px-12 py-10 lg:py-14">
              <p className="font-display italic text-[28px] sm:text-[36px] lg:text-[44px] text-cream leading-[1.15] tracking-tight max-w-[28ch]">
                Looking forward to walking the property with you.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
