# Yardie — yardiedesign.com

Marketing site for Yardie Design, an exterior design studio in Winterville, NC
serving Greenville and Eastern North Carolina.

Next.js 16 (App Router) · React 19 · TypeScript · Tailwind CSS · deployed on Vercel.

## Running it

```bash
npm install
```

```bash
npm run dev
```

`npm run build` produces the production build; `npm start` serves it. There are
no tests — `npx tsc --noEmit` and a clean `npm run build` are the gate.

## How the site is put together

Content is **files, not a CMS**. There is no database and no admin surface.
Everything a marketer would want to change lives in `lib/`:

| File | Holds |
| --- | --- |
| `lib/content.ts` | Company details, the 12 services, service areas, journal posts, FAQs, testimonials |
| `lib/media.ts` | Named photo references (`photos`, `projectPhotos`, `photosByService`, `cityPhotos`) |
| `lib/case-studies.ts` | Approved project case studies — ships empty; adding one publishes `/gallery/<slug>` |
| `lib/seo.ts` | Metadata builder and every JSON-LD schema |

Adding a service to `lib/content.ts` automatically creates its page, its nav
entry, its sitemap row, and its entry in the business's structured-data offer
catalog. Nothing else needs touching.

### Routes

Almost everything is statically prerendered. `app/services/[slug]`,
`app/service-areas/[slug]`, `app/journal/[slug]`, and `app/gallery/[slug]` all
use `generateStaticParams` with `dynamicParams = false`, so an unknown slug is a
real 404 rather than a 200 with empty content.

Legacy URLs are handled in `next.config.js` `redirects()` — **not** with
`redirect()` inside a page. A page-level `redirect()` emits 307 Temporary,
which tells search engines to keep the old URL indexed; the config entries are
308 Permanent and cost no render.

### Images

Bulk photography lives on Vercel Blob, not in git (the repo would be several GB
otherwise). `next.config.js` rewrites `/projects/*`, `/renderings/*`,
`/journal/*.jpg`, `/cities/*`, and friends to the Blob origin, so components
use ordinary local-looking paths and `next/image` optimises them normally.

Two rewrite rules are deliberately constrained and should stay that way:

- `/journal/:file(.+\.(png|jpe?g|...))` — unconstrained, it would swallow every
  article URL and return "Blob not found".
- `/cities/:slug([^.]+)` — the dot-free match keeps this legacy redirect from
  stealing `/cities/<name>.<ext>` image requests.

### Structured data

Use `<JsonLd>` (`components/JsonLd.tsx`), never `next/script`. With
`strategy="afterInteractive"` the schema never reaches the server HTML — it
sits in the RSC payload and only appears after hydration, where most non-Google
consumers never see it.

### Analytics and consent

`components/Analytics.tsx` loads GA4 and the Ahrefs tag. It is opt-out:
visitors who accept or haven't answered get the tags; anyone who declines gets
nothing, has GA switched off in-page via `ga-disable-*`, and has their existing
`_ga` cookies deleted. Shared state is in `lib/consent.ts`; the choice can be
revisited from `/legal/privacy-policy`.

## Environment

Everything is optional — the site builds and runs without any of it, degrading
to sensible fallbacks.

| Variable | Effect when unset |
| --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Falls back to `https://www.yardiedesign.com` |
| `BLOB_PUBLIC_URL` | Falls back to the provisioned Blob store |
| `RESEND_API_KEY` | Contact + consultation forms return "not configured" |
| `RESEND_TO_EMAIL` / `RESEND_FROM_EMAIL` | Defaults in `lib/resend.ts` |
| `RECAPTCHA_SECRET_KEY` / `NEXT_PUBLIC_RECAPTCHA_SITE_KEY` | reCAPTCHA soft-passes; the honeypot and rate limiter still apply |
| `GOOGLE_PLACES_API_KEY` + `GOOGLE_PLACE_ID` | Reviews fall back to curated testimonials, and no `aggregateRating` is emitted |
| `BEHOLD_WIDGET_ID` | Instagram section uses curated photos |
| `INDEXNOW_AUTH_TOKEN` | `POST /api/indexnow` returns 503 |

## Form endpoints

`POST /api/contact` takes `{ formType, data, recaptchaToken }` and emails via
Resend. Defences, in order: per-IP rate limit (5 per 10 minutes), a honeypot
field (`company`), then reCAPTCHA v3. The honeypot matters because reCAPTCHA
soft-passes whenever its secret isn't configured.

`POST /api/consultation` is a legacy alias that calls the contact handler
in-process.

`POST /api/indexnow` pings Bing/Yandex/Seznam. Requires
`Authorization: Bearer $INDEXNOW_AUTH_TOKEN`.

## Conventions worth keeping

- Never invent project facts, client names, or testimonials — see the rules at
  the top of `lib/case-studies.ts`.
- `aggregateRating` is emitted only from live Google Places data, and only on
  the page that displays those reviews.
- The sitemap lists canonical 200 URLs only. No URL that relies on a redirect.
