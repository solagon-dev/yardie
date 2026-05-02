/**
 * SIGNATURE ELEMENT — a centered pull quote that appears between two
 * sections. Magazine-style — Cormorant italic at large size, generous
 * surrounding white space. No card, no border. The quote takes up
 * the full viewport width as a moment of pause.
 */
export default function EditorialPullQuote({
  quote,
  attribution,
  tone = "light",
}: {
  quote: string;
  attribution?: string;
  tone?: "light" | "dark";
}) {
  const isLight = tone === "light";
  return (
    <section className={isLight ? "bg-cream-alt text-bark" : "bg-bark text-cream"}>
      <div className="mx-auto max-w-[1100px] px-5 sm:px-8 lg:px-12 py-section text-center">
        <span aria-hidden className={`font-display text-[80px] leading-none italic ${isLight ? "text-moss-light" : "text-moss"} block mb-4`}>
          &ldquo;
        </span>
        <blockquote className={`font-display italic text-3xl sm:text-4xl lg:text-[56px] xl:text-[64px] leading-[1.15] tracking-tight font-light max-w-[20ch] mx-auto ${isLight ? "text-bark" : "text-cream"}`}>
          {quote}
        </blockquote>
        {attribution && (
          <p className={`label mt-10 ${isLight ? "text-clay" : "text-stone/85"}`}>
            {attribution}
          </p>
        )}
      </div>
    </section>
  );
}
