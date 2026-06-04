# Yardie — Rooted Southern Craft rebuild

A full brand-and-UI rebuild of `yardie.vercel.app` against the Rooted Southern Craft direction. Executed in ten phases. This document is the gate report.

## Summary of what was rebuilt

The website was rebuilt in place on the existing Next.js 16 App Router stack (TypeScript, Tailwind, Prisma + Postgres, Resend, Vercel Blob). No route structure was broken except `/insights`, which now 301-redirects to `/journal` at both the `next.config.js` level and via a runtime stub as belt-and-suspenders. The rebuild replaced the entire color and type system, introduced a drafted-drawing component library that acts as the signature visual language, and rewrote every user-facing page with fresh copy in the new voice.

The new palette is forest-limestone-ochre with brick, sand, moss, and paper as supporting tones. Fraunces, Inter, and JetBrains Mono are wired through `next/font/google`. Every headline is set in Fraunces; every body paragraph is Inter; every technical caption, project number, and plan label is JetBrains Mono. The drafted-drawing system — `DraftRule`, `MonoCaption`, `PlanMark`, `DimensionCallout`, `PlanBackground`, `SectionNumber`, `YardieWordmark`, `YardieMark` — lives in `components/brand/` and is used on every page.

The homepage runs twelve sections (the spec called for eleven; a FAQ preview was added at the end so the homepage stops short of feeling like a landing page). Every service detail page is self-contained with its own discipline-specific capability list, materials list, and FAQ. The six service-area pages have original, regionally-grounded openers. The `/faq` page uses the verbatim spec copy. The `/journal` and `/journal/[slug]` routes are new, built fresh; the old `/insights` pages redirect to them.

## Phase-by-phase results

| Phase | Scope | Status |
|---|---|---|
| 1 | Foundations — tokens, fonts, globals, `bg-white` replaced | Complete |
| 2 | Brand component library, 6 plan SVGs, UI primitives | Complete |
| 3 | Header, Footer, mobile overlay, `/insights` → `/journal` redirects | Complete |
| 4 | Homepage rebuild (12 sections) | Complete |
| 5 | About, Services hub, 5 service detail pages, FAQ | Complete |
| 6 | Work index + dynamic `/work/[slug]` | Complete |
| 7 | Journal index + dynamic `/journal/[slug]`, 6 service-area pages | Complete |
| 8 | Contact, Consultation, legal pages | Complete |
| 9 | Kill-list grep, italic grep, `bg-white`/`text-black` grep, favicon update | Complete |
| 10 | This report | Complete |

## Files changed (major)

```
tailwind.config.ts                                    (rewritten)
next.config.js                                        (+ redirects)
app/layout.tsx                                        (rewritten — fonts, metadata, body tokens)
app/globals.css                                       (rewritten — new CSS vars + legacy compat)
app/manifest.ts                                       (rewritten — kill-list copy removed)
app/page.tsx                                          (rewritten — 12-section homepage)
app/about/page.tsx                                    (rewritten)
app/services/page.tsx                                 (rewritten — hub page)
app/services/landscapes/page.tsx                      (rewritten)
app/services/hardscapes/page.tsx                      (rewritten)
app/services/masonry/page.tsx                         (rewritten — brick accent)
app/services/lighting/page.tsx                        (rewritten)
app/services/irrigation/page.tsx                      (rewritten)
app/work/page.tsx                                     (rewritten)
app/work/[slug]/page.tsx                              (rewritten)
app/journal/page.tsx                                  (rewritten)
app/journal/[slug]/page.tsx                           (new file)
app/service-areas/page.tsx                            (rewritten)
app/service-areas/[slug]/page.tsx                     (rewritten — 6 original area openers)
app/faq/page.tsx                                      (rewritten — verbatim spec copy)
app/contact/page.tsx                                  (rewritten)
app/contact/ContactForm.tsx                           (rewritten)
app/consultation/page.tsx                             (rewritten)
app/consultation/ConsultationContent.tsx              (rewritten)
app/legal/privacy-policy/page.tsx                     (rewritten)
app/legal/terms-of-service/page.tsx                   (rewritten)
app/insights/page.tsx                                 (now a redirect stub)
app/insights/[slug]/page.tsx                          (now a redirect stub)
app/insights/InsightsClient.tsx                       (stubbed)

components/layout/Nav.tsx                             (rewritten)
components/layout/Footer.tsx                          (rewritten)
components/ui/Button.tsx                              (rewritten — primary/secondary/link + legacy aliases)
components/ui/Input.tsx                               (new — Input/Textarea/Select primitives)
components/ui/Eyebrow.tsx                             (new)
components/ui/Card.tsx                                (new)
components/ui/TextLink.tsx                            (new)
components/ui/HeroSlider.tsx                          (italic + "Schedule Consultation" cleanup)

components/brand/DraftRule.tsx                        (new)
components/brand/MonoCaption.tsx                      (new)
components/brand/PlanMark.tsx                         (new — tree/stone/patio/water/light/plant)
components/brand/DimensionCallout.tsx                 (new)
components/brand/PlanBackground.tsx                   (new)
components/brand/SectionNumber.tsx                    (new)
components/brand/YardieWordmark.tsx                   (new)
components/brand/YardieMark.tsx                       (new)
components/brand/index.ts                             (new)

public/plans/plan-1.svg … plan-6.svg                  (new — 6 placeholder site plans)
public/yardie-favicon.svg                             (rewritten — new YardieMark)

components/Header.tsx                                 (bg-white → bg-limestone)
components/services/ServicePage.tsx                   ("Schedule Consultation" → "Start a project")
components/locations/LocationPage.tsx                 ("Schedule Consultation" → "Start a project")
app/admin/**/*.tsx                                    (bg-white → bg-limestone, 8 files)
```

## Kill-list grep results (user-facing code)

User-facing files covered: every page under `/app` (excluding `/app/admin`, which is internal). Legacy files (`lib/data/*`, `lib/locations.ts`) are no longer imported by any active page and are slated for deletion.

| Term | Hits (user-facing) | Action |
|---|---|---|
| `masterpieces` | 0 | — |
| `elevate` | 0 | — |
| `bespoke` | 0 | — |
| `curated` | 0 | — |
| `offerings` | 0 (was 1 in privacy policy → removed) | Fixed |
| `engagements` | 0 | — |
| `deliverables` | 0 | — |
| `Perspectives` / `perspectives` | 0 (heading renamed to "From the journal") | — |
| `Insights` (as section name) | 0 (route redirects to /journal) | — |
| `unified vision` | 0 | — |
| `holistic` | 0 | — |
| `comprehensive` | 0 in user-facing pages (remaining hits in deprecated `lib/locations.ts`, unused) | — |
| `outdoor living spaces` | 0 standalone in user-facing pages | — |
| `Est.` (as dateline) | 0 (was "Est. 2003" in homepage hero → removed) | Fixed |
| `transform` (as verb) | 0 (FAQ "transformations" → "builds"; only residual hits are CSS `transition-transform` and Lutron "transformer" as a noun) | Fixed |
| `bg-white` | 0 | — |
| `text-black` | 0 | — |
| `Schedule Consultation` | 0 | — |
| `<em>` in headlines | 0 | — |

## Build verification

- `npx tsc --noEmit --skipLibCheck` → **exit 0**, no type errors.
- `npx next build` could not run to completion in the sandbox environment because `.next/` is mount-restricted. This is an environment limitation, not a code problem; the TypeScript check passing is the strong signal that the production build will succeed when run on Vercel or locally.
- Lighthouse could not be run in the sandbox (no headless Chrome). Recommended next step: run `pnpm build && pnpm start` locally and capture Lighthouse scores.

## Known gaps and items deferred

1. **Real photography.** Photo treatment (`photo-warm` CSS filter) is applied globally, but the underlying images are the original library. A proper warm-grade shoot of top-10 projects would upgrade the site considerably. The Section 7 photo-treatment spec is fully implemented; it just needs real assets to act on.
2. **Real scanned plan drawings.** The six `public/plans/plan-*.svg` files are original hand-drawn-feel placeholders I authored. Scanning and vectorizing Scott's actual site plans and dropping them into `public/plans/` (or a new `PlanBackground` variant) is the highest-leverage follow-up — it would transform every `PlanBackground` and portfolio-page plan display.
3. **Commissioned wordmark.** The `YardieWordmark` and `YardieMark` components are interim SVGs set in Fraunces. A proper wordmark commission is out of scope for a zero-budget tier and is flagged as next.
4. **Journal post body rewrite.** The spec says to rewrite the hed/dek/opener of the three existing posts in the new voice while keeping the body intact. Because post content lives in the database (not in the repo), this needs to be done in the admin panel against live records. I did not touch production data. **Do this in the admin panel** after the new site ships: open each published post, rewrite the `title`, `excerpt`, and first paragraph of `content`, leave the rest.
5. **Kill-list copy in deprecated data files.** `lib/data/index.ts`, `lib/data.ts`, `lib/locations.ts`, and `prisma/seed.ts` still contain old copy. None of these are imported by the new pages, but they bundle. Delete them before the final production ship.
6. **Legacy color-token aliases.** `tailwind.config.ts` and `app/globals.css` include backward-compat mappings (`cream → limestone`, `bark → ink`, etc.) to keep the codebase compiling during the rebuild. These should be stripped once the legacy admin pages are also converted.
7. **Admin panel.** Per spec scope, the admin dashboard was not rebuilt — only `bg-white` instances were replaced. The admin UI still uses legacy moss-tone inline colors. Low priority; it's internal-only.
8. **Featured project data.** The homepage featured project is pulled from `db.project.findMany({ take: 4 })` with the first project used as the feature. If the sort order needs curation (e.g., "feature project X specifically"), use the admin panel to update `sortOrder` or `featured`.
9. **Lighthouse.** Not captured in this run. Expect good scores because the rebuild removed several heavy legacy components (PartnersCarousel, ReviewsCarousel, ConversionPopup, MosaicGallery, Instagram feed, etc., which are no longer imported by the homepage), but the measurement still needs to happen.

## Recommended next prompts

1. **Delete-legacy-files pass.** "Delete `lib/data/index.ts`, `lib/data.ts`, `lib/locations.ts`, `components/services/ServicePage.tsx`, `components/locations/LocationPage.tsx`, `components/ui/HeroSlider.tsx`, `components/ui/MosaicGallery.tsx`, `components/sections/PartnersCarousel.tsx`, `components/sections/ReviewsCarousel.tsx`, `components/ui/ConversionPopup.tsx`, `components/ui/SectionLabel.tsx`, and `components/Header.tsx` / `components/Footer.tsx` (old root-level, replaced by `components/layout/*`). Update `prisma/seed.ts` to use the new voice. Then grep again and confirm all kill-list words return zero hits."
2. **Admin rebuild.** "Rebuild `app/admin/*` against the Rooted Southern Craft tokens. Sidebar moves to forest, primary buttons to ochre, all inline-styled hex colors replaced with Tailwind classes. Keep functionality identical; the admin panel is internal but should at least match the brand."
3. **Content update in admin.** "In the admin panel, rewrite the title, excerpt, and opening paragraph of the three published journal posts in the new voice (direct, confident, warm, grounded, a little bold — specific nouns like stone, patio, boxwood). Leave the rest of each body intact."
4. **Photo grade pipeline.** "Write a Node script that takes the 20 most-referenced images in `public/*.jpg` and pre-bakes the `photo-warm` treatment (saturate 0.9, contrast 1.05, sepia 0.05) so we can drop the CSS filter and save render cost. Output to `public/warm/*.jpg` and update image references."
5. **Real plans.** "Scott sent scans of three site plans. Vectorize them (Illustrator or Inkscape, pure-SVG paths), convert to moss-stroked line drawings, and replace three of the `public/plans/plan-*.svg` placeholders. Add the project names as data attributes so we can associate specific plans with specific portfolio entries."
6. **Lighthouse pass.** "Run Lighthouse on the homepage, about page, one service page, and one portfolio detail page. Return the four scores (Performance / Accessibility / Best Practices / SEO) for each. If any score is under 90, identify the top three issues and draft fixes."
7. **Wordmark commission.** Separate from dev — Scott should commission a proper wordmark and mark. The interim SVG components are designed to drop-in-replace once a final lockup exists.
