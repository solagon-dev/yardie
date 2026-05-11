import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { company } from "@/lib/content";
import { buildMetadata } from "@/lib/seo";
import { photos } from "@/lib/media";
import ConsultationForm from "@/components/ConsultationForm";
import FAQAccordion from "@/components/ui/FAQAccordion";

export const metadata: Metadata = buildMetadata({
  title: "Free Landscape & Hardscape Quote in Greenville, NC | Yardie",
  description:
    "Get a no-cost quote from Yardie for landscape, hardscape, masonry, lighting, or irrigation work in Greenville and Eastern NC. Written estimate within one business day.",
  path: "/quote",
  keywords: [
    "request a quote Yardie",
    "exterior design quote Greenville NC",
    "landscape design estimate Eastern NC",
    "free landscape consultation Pitt County",
  ],
});

const timeline = [
  {
    step: "01",
    when: "Today",
    title: "You send the brief.",
    body: "Four short steps — about you, the project, timeline, vision. Two minutes, tops.",
  },
  {
    step: "02",
    when: "Within 24 hrs",
    title: "We reply personally.",
    body: "A real person from the studio reviews every brief. We follow up the next business day with thoughts and to schedule a property visit.",
  },
  {
    step: "03",
    when: "Within 1–2 weeks",
    title: "We walk the property.",
    body: "Scott or one of our designers visits the site at no cost — to read the property, ask questions, and discuss what's possible.",
  },
  {
    step: "04",
    when: "Within 2–3 weeks",
    title: "You receive a written quote.",
    body: "An itemized design fee and build estimate in writing — with scope, materials direction, and an honest schedule. No pressure to commit.",
  },
];

const reasons = [
  {
    figure: "Free",
    label: "First property visit",
    body: "We never charge for the first conversation. Walking the site is how we learn whether we're the right studio.",
  },
  {
    figure: "1 day",
    label: "Reply window",
    body: "Every brief gets a personal response within one business day. No queues, no auto-responders.",
  },
  {
    figure: "20 yrs",
    label: "Eastern NC experience",
    body: "Two decades drawing and building in Pitt and surrounding counties. We know the soil, the weather, and the architecture.",
  },
];

const quoteFAQ = [
  {
    q: "Is the first visit really free?",
    a: "Yes. We don't charge for the first property visit or the initial conversation. Design fees only apply once we agree on a scope and you decide to move forward.",
  },
  {
    q: "How long until I get a written estimate?",
    a: "Most clients have a written design fee proposal and an itemized build estimate within two to three weeks of the first property visit, depending on scope.",
  },
  {
    q: "Do I have to commit to anything to fill this out?",
    a: "No. Submitting a brief just starts a conversation. You can step out at any point — many of our clients take weeks or months to decide. We'd rather you pick the right studio than rush a decision.",
  },
  {
    q: "What information do you need from me right now?",
    a: "Just enough to know who you are, where the property is, roughly what you want, and roughly when. Specifics get figured out together once we walk the site.",
  },
];

export default function QuotePage() {
  return (
    <>
      {/* ═══════════════════════════════════════════════════════
          1 · HERO + FORM — split layout, form visible above fold
          ═══════════════════════════════════════════════════════ */}
      <section className="relative -mt-14 lg:-mt-[68px] bg-bark text-cream overflow-hidden">
        <Image
          src={photos.heroFlagstone.src}
          alt={photos.heroFlagstone.alt}
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-35"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-bark via-bark/80 to-bark/45" />
        <div className="absolute inset-0 bg-gradient-to-t from-bark via-transparent to-bark/30" />

        <div className="relative mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12 pt-24 sm:pt-28 lg:pt-40 pb-12 sm:pb-16 lg:pb-24">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 items-start">
            {/* Left — invitation. The bullet list and phone block hide
                on mobile; the page already has dedicated sections for
                each below. Keeps the mobile hero focused on the form. */}
            <div className="lg:col-span-5 lg:sticky lg:top-28">
              <p className="font-mono text-[11px] tabular-nums text-stone/85 tracking-[0.22em] mb-5 sm:mb-7 uppercase">
                Request a Quote &middot; Step 01
              </p>
              <h1 className="font-display text-[44px] sm:text-6xl lg:text-[80px] xl:text-[96px] text-cream leading-[0.98] lg:leading-[0.96] tracking-tight max-w-[14ch] font-light">
                Begin{" "}
                <span className="italic text-stone">your project.</span>
              </h1>
              <p className="mt-5 sm:mt-7 text-[15px] sm:text-[17px] text-cream/80 leading-relaxed max-w-[44ch]">
                Tell us about the property. The first conversation is at no cost &mdash; we walk the site, listen, and send a written estimate within two to three weeks.
              </p>

              <ul className="hidden lg:block mt-10 space-y-3 text-[14px] text-cream/85">
                {[
                  "First property visit is no-cost",
                  "Personal reply within one business day",
                  "No obligation, no auto-responders",
                  "Drawn estimates with itemized scope",
                ].map((it) => (
                  <li key={it} className="flex items-start gap-3">
                    <svg className="h-4 w-4 text-stone shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth={1.6} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                    </svg>
                    {it}
                  </li>
                ))}
              </ul>

              <div className="hidden lg:block mt-10 pt-7 border-t border-cream/15">
                <p className="text-[12.5px] text-cream/60 tracking-wide">Prefer to talk first?</p>
                <a
                  href={company.phoneTel}
                  className="mt-2 block font-display text-[28px] sm:text-[32px] lg:text-[36px] text-cream hover:text-stone transition-colors leading-tight tracking-tight"
                >
                  {company.phone}
                </a>
                <a
                  href={`mailto:${company.email}`}
                  className="mt-2 inline-block text-[14px] text-cream/70 hover:text-cream transition-colors break-all"
                >
                  {company.email}
                </a>
              </div>
            </div>

            {/* Right — form card. Tighter padding on mobile so the
                inputs and buttons don't get squeezed by the card chrome. */}
            <div className="lg:col-span-7">
              <div className="bg-cream text-bark p-5 sm:p-9 lg:p-12 shadow-[0_30px_70px_-20px_rgba(0,0,0,0.55)]">
                <ConsultationForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          2 · WHAT HAPPENS NEXT — 4-step timeline
          ═══════════════════════════════════════════════════════ */}
      <section className="bg-cream text-bark py-16 sm:py-24 lg:py-32 border-b border-border">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
          <div className="grid lg:grid-cols-12 gap-10 mb-12 sm:mb-16 lg:mb-20 items-end">
            <div className="lg:col-span-7">
              <p className="font-display italic text-moss text-[18px] tracking-tight font-light mb-5 inline-flex items-baseline gap-3">
                <span aria-hidden className="block h-px w-7 bg-moss/60 translate-y-[-3px]" />
                What happens next
              </p>
              <h2 className="font-display text-[34px] sm:text-[44px] lg:text-[60px] text-bark leading-[1.04] tracking-tight font-light max-w-[20ch]">
                From brief to{" "}
                <span className="italic text-moss">written estimate.</span>
              </h2>
            </div>
            <p className="lg:col-span-5 text-[14.5px] text-clay max-w-md leading-relaxed">
              Four clear steps. No mystery, no pressure. Most clients have an estimate in hand within two to three weeks of submitting a brief.
            </p>
          </div>

          <ol className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-5">
            {timeline.map((t) => (
              <li key={t.step} className="bg-cream-alt border border-border p-7 lg:p-8 flex flex-col">
                <p className="font-mono text-[10.5px] tabular-nums text-clay/65 tracking-[0.22em] uppercase">
                  {t.when}
                </p>
                <p className="mt-2 font-display text-[44px] lg:text-[56px] text-moss leading-none tracking-tight font-light">
                  {t.step}
                </p>
                <h3 className="mt-5 font-display text-[20px] sm:text-[22px] text-bark leading-tight tracking-tight font-light">
                  {t.title}
                </h3>
                <p className="mt-3 text-[14px] sm:text-[14.5px] text-earth leading-relaxed flex-1">
                  {t.body}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          3 · WHY START WITH YARDIE — three reasons
          ═══════════════════════════════════════════════════════ */}
      <section className="bg-cream-alt py-16 sm:py-24 lg:py-32 border-b border-border">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
          <div className="grid lg:grid-cols-12 gap-10 mb-12 sm:mb-16 items-end">
            <div className="lg:col-span-7">
              <p className="font-display italic text-moss text-[18px] tracking-tight font-light mb-5 inline-flex items-baseline gap-3">
                <span aria-hidden className="block h-px w-7 bg-moss/60 translate-y-[-3px]" />
                The promise
              </p>
              <h2 className="font-display text-[34px] sm:text-[44px] lg:text-[56px] text-bark leading-[1.04] tracking-tight font-light max-w-[20ch]">
                Start a project{" "}
                <span className="italic text-moss">on your terms.</span>
              </h2>
            </div>
          </div>

          <ul className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-4 lg:gap-5">
            {reasons.map((r) => (
              <li key={r.label} className="bg-cream border border-border p-8 lg:p-10 flex flex-col">
                <p className="font-display text-[44px] sm:text-[52px] lg:text-[64px] text-bark leading-none tracking-tight font-light">
                  {r.figure}
                </p>
                <p className="mt-4 text-[10.5px] tracking-[0.22em] uppercase text-clay">
                  {r.label}
                </p>
                <p className="mt-5 pt-5 border-t border-border text-[14.5px] text-earth leading-relaxed flex-1">
                  {r.body}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          4 · CLIENT PULL-QUOTE — single reassuring testimonial
          ═══════════════════════════════════════════════════════ */}
      <section className="relative bg-bark text-cream overflow-hidden">
        <Image
          src={photos.heroAman.src}
          alt=""
          fill
          sizes="100vw"
          className="object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-bark via-bark/85 to-bark/70" />
        <div className="relative mx-auto max-w-[1100px] px-5 sm:px-8 lg:px-12 py-20 sm:py-28 lg:py-36 text-center">
          <p aria-hidden className="font-display italic text-stone/60 text-[80px] lg:text-[120px] leading-none mb-2">&ldquo;</p>
          <blockquote className="font-display text-[24px] sm:text-[32px] lg:text-[44px] text-cream leading-[1.16] tracking-tight font-light max-w-[36ch] mx-auto">
            Yardie absolutely transformed our backyard into an oasis. The way they composed the planting against the patio architecture is something we couldn&rsquo;t have imagined ourselves.
          </blockquote>
          <p className="mt-9 font-display text-stone text-[18px] tracking-tight">
            Chris McGill &middot; Greenville, NC
          </p>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          5 · QUICK FAQ — handle the last objections
          ═══════════════════════════════════════════════════════ */}
      <section className="bg-cream py-16 sm:py-24 lg:py-32 border-b border-border">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-20 items-start">
            <div className="lg:col-span-5 lg:sticky lg:top-28">
              <p className="font-display italic text-moss text-[18px] tracking-tight font-light mb-5 inline-flex items-baseline gap-3">
                <span aria-hidden className="block h-px w-7 bg-moss/60 translate-y-[-3px]" />
                Before you submit
              </p>
              <h2 className="font-display text-[34px] sm:text-[44px] lg:text-[56px] text-bark leading-[1.04] tracking-tight font-light max-w-[18ch]">
                Common{" "}
                <span className="italic text-moss">questions.</span>
              </h2>
              <p className="mt-6 text-[15px] text-earth leading-relaxed max-w-md">
                The questions we hear most often before the first conversation. Don&rsquo;t see yours?{" "}
                <Link href="/contact" className="underline underline-offset-4 hover:text-moss">Send us a note.</Link>
              </p>
            </div>
            <div className="lg:col-span-7">
              <FAQAccordion items={quoteFAQ} />
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          6 · OR TALK TO US — quiet alternative
          ═══════════════════════════════════════════════════════ */}
      <section className="bg-cream-alt py-14 sm:py-20 lg:py-24 border-b border-border">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
          <div className="grid lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 text-center lg:text-left">
              <p className="font-display italic text-moss text-[16px] tracking-tight font-light mb-3">
                Or skip the form &mdash;
              </p>
              <h2 className="font-display text-[28px] sm:text-[36px] lg:text-[44px] text-bark leading-[1.08] tracking-tight font-light max-w-[24ch] mx-auto lg:mx-0">
                Call us. We answer every line during business hours.
              </h2>
            </div>
            <div className="lg:col-span-5 flex flex-col items-center lg:items-end gap-3">
              <a
                href={company.phoneTel}
                className="inline-flex items-center justify-center px-9 py-4 bg-bark text-cream text-[12px] tracking-[0.22em] uppercase font-medium hover:bg-earth transition-colors"
              >
                Call {company.phone}
              </a>
              <a
                href={`mailto:${company.email}`}
                className="text-[13.5px] text-clay hover:text-bark transition-colors tracking-wide"
              >
                or email <span className="text-bark font-medium">{company.email}</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
