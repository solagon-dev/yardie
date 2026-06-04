import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import PageHero from "@/components/ui/PageHero";
import FAQAccordion from "@/components/ui/FAQAccordion";
import { faqsByCategory, company } from "@/lib/content";
import { photos } from "@/lib/media";
import { buildMetadata, faqSchema } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Landscape & Hardscape FAQ | Yardie — Greenville, NC",
  description:
    "Common questions about landscape design, hardscape costs, irrigation systems, project timelines, and working with Yardie in Greenville and Eastern North Carolina.",
  path: "/faq",
  keywords: [
    "landscaping FAQ Greenville NC",
    "hardscape questions",
    "landscape design cost Eastern NC",
    "irrigation system FAQ",
  ],
});

export default function FAQPage() {
  // Flatten all FAQ items for the schema.
  const allFaqs = faqsByCategory.flatMap((c) => c.items);

  return (
    <>
      <Script
        id="faq-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(allFaqs)) }}
      />

      <PageHero
        label="Frequently Asked"
        headline="The questions we&rsquo;re asked"
        italicTail="most often."
        intro={`Plain answers to the questions that come up before, during, and after a project. If yours isn't here, write to us at ${company.email}.`}
        image={photos.heroFlagstone}
      />

      <section className="bg-cream text-bark">
        <div className="mx-auto max-w-[1100px] px-5 sm:px-8 lg:px-12 py-section">
          {faqsByCategory.map((cat, i) => (
            <div key={cat.category} className={i > 0 ? "mt-20 lg:mt-28" : ""}>
              <h2 className="font-display text-4xl sm:text-5xl lg:text-[52px] leading-[1.04] tracking-tight font-light max-w-[14ch]">
                {cat.category}
              </h2>
              <div className="mt-10">
                <FAQAccordion items={cat.items} />
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-cream-alt text-bark">
        <div className="mx-auto max-w-[1100px] px-5 sm:px-8 lg:px-12 py-section text-center">
          <h2 className="font-display text-4xl sm:text-5xl lg:text-[60px] leading-[1.04] tracking-tight font-light max-w-[22ch] mx-auto">
            Have a question
            <span className="italic text-moss"> not answered here?</span>
          </h2>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link href="/contact" className="inline-flex items-center justify-center px-9 py-4 bg-bark text-cream text-[12px] tracking-[0.22em] uppercase font-medium hover:bg-earth transition-colors">
              Send us a Message
            </Link>
            <a href={company.phoneTel} className="inline-flex items-center justify-center px-9 py-4 border border-bark text-bark text-[12px] tracking-[0.22em] uppercase font-medium hover:bg-bark hover:text-cream transition-colors">
              Call {company.phone}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
