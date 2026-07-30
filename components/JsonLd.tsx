/**
 * Server-rendered JSON-LD.
 *
 * Every schema block on the site used to go through `next/script` with
 * `strategy="afterInteractive"`. In the App Router that keeps the markup
 * out of the server HTML entirely — the tag only exists in the RSC flight
 * payload and gets injected once React hydrates. Googlebot renders JS and
 * would usually still see it, but nothing else reliably does: Bing, social
 * scrapers, the Rich Results / schema validators, and the AI crawlers all
 * read the raw document.
 *
 * Structured data has no reason to be a script *load* in the first place —
 * it is inert data, not executable behaviour. Emitting a plain <script>
 * from a server component puts it in the initial HTML at zero runtime cost.
 */
export default function JsonLd({ id, data }: { id: string; data: unknown }) {
  return (
    <script
      id={id}
      type="application/ld+json"
      // JSON.stringify output is data, never author markup. `<` is escaped so
      // a stray "</script>" inside any string value can't close the tag early.
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
}
