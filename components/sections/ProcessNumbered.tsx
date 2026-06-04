import Image from "next/image";
import { process } from "@/lib/content";
import RevealOnScroll from "@/components/ui/RevealOnScroll";

/**
 * SIGNATURE ELEMENT — large pale Cormorant numerals (01–04) above each
 * process step, with a thin horizontal rule running to the page edge.
 * Architectural, editorial, unmistakably Yardie.
 */
export default function ProcessNumbered({ tone = "light" }: { tone?: "light" | "dark" }) {
  const isLight = tone === "light";
  return (
    <section className={isLight ? "bg-cream text-bark" : "bg-bark text-cream"}>
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12 py-section">
        <div className="grid lg:grid-cols-12 gap-10 mb-16 lg:mb-24">
          <div className="lg:col-span-5">
            <p className={`label inline-flex items-center justify-center gap-3 mb-6 ${isLight ? "text-clay" : "text-stone/85"}`}>
              <span aria-hidden className={`block h-px w-7 ${isLight ? "bg-clay/50" : "bg-stone/50"}`} />
              Our Process
            </p>
            <h2 className={`font-display text-4xl sm:text-5xl lg:text-[64px] leading-[1.04] tracking-tight font-light ${isLight ? "text-bark" : "text-cream"} max-w-[14ch]`}>
              Drawn first.
              <span className={`italic ${isLight ? "text-moss" : "text-stone"}`}> Built once.</span>
            </h2>
          </div>
          <div className="lg:col-span-6 lg:col-start-7">
            <p className={`text-[16px] sm:text-[17px] leading-relaxed ${isLight ? "text-clay" : "text-cream/75"}`}>
              Every project we build is drawn before it&rsquo;s installed. Site walks become sketches; sketches become dimensioned plans; plans become stone, plant, water, and light. The cadence is unhurried by design — a yard built carefully looks built carefully a decade later.
            </p>
          </div>
        </div>

        <ol className="space-y-16 lg:space-y-24">
          {process.map((step, i) => (
            <RevealOnScroll key={step.number} delay={i * 0.05} className="block">
              <li className="relative">
                <div className="flex items-end gap-6 mb-6">
                  <span
                    className={`font-display tabular-nums ${isLight ? "text-stone" : "text-dark-muted/40"}`}
                    style={{ fontSize: "clamp(72px, 9vw, 132px)", fontWeight: 300, lineHeight: 1 }}
                  >
                    {step.number}
                  </span>
                  <div className={`flex-1 h-px ${isLight ? "bg-border" : "bg-cream/15"} mb-6`} />
                </div>

                <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
                  <div className="lg:col-span-6">
                    <h3 className={`font-display text-3xl sm:text-4xl lg:text-[44px] leading-tight tracking-tight font-light ${isLight ? "text-bark" : "text-cream"}`}>
                      {step.title}
                    </h3>
                    <p className={`mt-5 max-w-xl text-[16px] leading-relaxed ${isLight ? "text-earth" : "text-cream/75"}`}>
                      {step.body}
                    </p>
                  </div>
                  <div className="lg:col-span-5 lg:col-start-8">
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <Image
                        src={step.image}
                        alt={`${step.title} — Yardie process`}
                        fill
                        sizes="(min-width: 1024px) 40vw, 100vw"
                        className="object-cover"
                      />
                    </div>
                  </div>
                </div>
              </li>
            </RevealOnScroll>
          ))}
        </ol>
      </div>
    </section>
  );
}
