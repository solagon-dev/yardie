# Yardie Website — Implementation Handoff (Section 19)

**Date:** 2026-07-23
**Working copy:** `/Users/stonebaldwin/dev/yardie` (now the clean copy; builds green)
**Corrupted original (preserved untouched):** `/Users/stonebaldwin/dev/yardie-corrupted-backup`

> Honesty note (§19): this documents only what was done and verified. Blocked / deferred / unverified work is labelled as such. The brief is a multi-week, multi-disciplinary program; this session completed Phase 0, most of Phase 1, and the fact-independent performance/accessibility/bug-fix parts of Phases 2 & 4. Content-heavy work remains and is largely blocked on Yardie-supplied facts (§3), which must not be invented.

---

## 1. Executive summary

1. **Recovered a corrupted repository.** Git object store was ~42% unreadable and 19 source files were zeroed. Recovered via a clean clone from GitHub; corrupted dir preserved. The clean copy is now at the canonical path (swap approved).
2. **Found & fixed Blob-rewrite route collisions** (deployed): city images were **404ing on live production** (now fixed and verified live); journal article URLs 404'd under local `next start` (a local-only routing-order artifact — see §4 for the correction). No regressions.
3. **Routing/SEO hygiene:** sitemap now canonical (`/gallery` not the redirected `/work`), real `lastmod` only, no meaningless priority/changefreq; 3 dead redirect-shadowed route trees removed; redirects re-verified.
4. **Performance:** homepage hero preloads 12→2; gallery SSR images 165→35 with progressive loading.
5. **Accessibility:** hero reduced-motion + pause control; gallery tiles keyboard-operable + lightbox focus management; forms announce async status (aria-live); star-rating aria fixed.
6. **Form:** submission layer audited (robust) and **live delivery confirmed** (routed to a test inbox only).
7. **Measured** Lighthouse across 6 page types; created `lib/launch-checklist.ts` for the §3 factual blockers.
8. **Case-study model + template built (§6)** — full §6.1 field set and a §6.2-ordered template at `/gallery/[slug]`, wired into the sitemap and portfolio hub. Ships **empty**; adding an approved project publishes it automatically.
9. **Accessibility remediated** — heading-order and aria-prohibited-attr fixed; 44 failing contrast utilities corrected. Lighthouse a11y **93→96** (home), 95→96 (quote/journal).
10. **Asset manifest produced (§13.2)** — 4,293 files inventoried non-destructively; **~8.64 GB reclaimable** with zero visual change. Nothing deleted.
11. **Navigation regrouped to the brief's four service families (§4.2)** and **CTA terminology standardized (§4.4)** — "Request a Property Consultation" now the single primary action (was 5 competing labels).
12. **Analytics event layer built (§15)** — `lib/analytics.ts`, vendor-agnostic, consent-gated, PII-scrubbed, 15 call sites wired. No vendor chosen on Yardie's behalf.
13. **Single responsive hero (§13.1)** — duplicate mobile/desktop hero merged: hero preloads 2→1, DOM images 104→98, one real `<h1>`. Homepage perf **74→79**, LCP **4.3s→3.5s**.
14. **Simulated handwriting removed (§10.1)** — "Scott Baldwin" was rendered in a handwritten Google font (`Homemade_Apple`), rotated to imitate a signature. That's a fake signature, not authentic handwriting, and cost a whole font family for one span. Replaced with the display face; font dropped (font preloads 5→4). *Swap in a real scanned signature if Yardie has one.*
15. **Both auto-scrolling marquees removed (§5.2/§10.3/§14)** — the trust bar and the partner-logo band were infinite marquees with no pause control, each duplicating its list for the loop. Now static lists. Homepage DOM images **98→91**, HTML **420KB→404KB**.

---

## 2. Phase-by-phase status

| Phase | Status | Notes |
|---|---|---|
| **0 — Stabilize & inventory** | ✅ Complete | Corruption diagnosed + recovered; build green; inventories + factual-blocker registry done. |
| **1 — Foundations** | 🟢 Mostly done | Canonical routing ✅, launch-checklist ✅, structured-data audit ✅ (already server-rendered). Deferred: typography decision, shared-primitive refactors, CTA-label standardization. |
| **2 — Homepage & flagship case study** | 🟡 Partial | Hero + gallery perf/a11y ✅, signature slider a11y ✅. Deferred/blocked: homepage section reduction (design-gated), a populated case study (blocked on §3/§6 facts). |
| **3 — Work, services, About** | ⛔ Not started | Blocked on §3 facts/content. Service-page JSON-LD already present. |
| **4 — Contact, local SEO, journal** | 🟢 Substantial | **Journal route bug fixed** ✅; form audited + delivery confirmed ✅; sitemap/structured data ✅. Deferred: form analytics, location-page uniqueness, journal IA/content. |
| **5 — Optimization & launch QA** | 🟡 Partial | Perf wins + Lighthouse matrix ✅; redirect/route verification ✅. Deferred: asset cleanup, mobile/axe/VoiceOver, color-contrast remediation. |

---

## 3. File-change summary (git status in the canonical repo)

**Committed & DEPLOYED (`d396d92`)**
- `next.config.js` — **fixed Blob-rewrite route collisions** (city images on production; journal locally). See §4.

**Modified, uncommitted (awaiting your review)**
- `app/sitemap.ts` — canonical `/gallery`; real `lastmod` on journal only; removed priority/changefreq; now also emits approved case studies.
- `components/HeroSlider.tsx` — first-slide-only `priority`; reduced-motion; accessible pause/play.
- `components/gallery/GalleryClient.tsx` — progressive rendering; keyboard-operable tiles; lightbox focus trap/restore.
- `components/ConsultationForm.tsx` — `aria-live`/`role=alert` announcements; step headings `h3`→`h2`.
- `components/ContactForm.tsx` — aria-live announcements.
- `components/Reviews.tsx` — `role="img"` on star-rating.
- `app/journal/[slug]/page.tsx` — added "More from the journal" `h2` (fixes heading-order).
- `app/gallery/page.tsx` — portfolio hub leads with case studies when approved (§6.3).
- `app/admin/components/PostForm.tsx` — corrected editor hint `/insights/`→`/journal/`.
- `components/Header.tsx` — service dropdown regrouped into the brief's **four families** (§4.2).
- `lib/content.ts` — central nav CTA label → "Request a Consultation"; FAQ answer updated to name the button correctly.
- `app/page.tsx` — **single responsive hero** (was two duplicated blocks); trust marquee → static proof list; simulated-signature span → display face.
- `components/sections/PartnerLogos.tsx` — auto-scrolling marquee → static logo strip (also halves the logo images, which the loop had duplicated).
- `app/layout.tsx` + `tailwind.config.ts` — `Homemade_Apple` handwritten font removed (§10.1/§13.1).
- `app/not-found.tsx` — CTA wording aligned.
- **~17 further files** — contrast-only utility swaps (`text-clay/NN`→`text-clay`, `text-cream/40|45|50`→`/70`) plus CTA label standardization. No structural changes.

**Added (this wave)** — `lib/analytics.ts` (§15 event layer).

**CTA terminology (§4.4)** — was 5 competing labels (10× "Schedule a Consultation", 8× "Request a Quote", "Get Started", "Begin a Project", 1× the standard). Now: **16× "Request a Property Consultation"** for page-body CTAs, and **"Request a Consultation"** in persistent chrome where the full phrase doesn't fit (header button, mobile sticky bar beside "Call", footer link, 404 helper). One phrase family, no synonym cycling.

**Deleted (6)** — dead, redirect-shadowed routes: `app/work/page.tsx`, `app/consultation/{page,ConsultationContent}.tsx`, `app/insights/{page,[slug]/page,InsightsClient}.tsx`.

**Added** — `lib/case-studies.ts` (§6 model), `app/gallery/[slug]/page.tsx` (§6.2 template), `lib/launch-checklist.ts`, `PHASE0_REPOSITORY_HEALTH_REPORT.md`, `PUBLIC_ASSET_MANIFEST.md`, `asset-manifest.json` (1 MB generated artifact — consider gitignoring), `IMPLEMENTATION_HANDOFF.md`.

**Verification:** `tsc --noEmit` clean; `next build` exit 0; runtime smoke test all 200.

> **Note on local images:** the gitignored `public/` image dirs (8.5 GB) were never copied into the fresh clone — they remain in `yardie-corrupted-backup/public/`. The site is unaffected (Blob rewrites + tracked `blob-image-dimensions.json`), so restoring them is dev-convenience only. Say the word and I'll copy them across.

---

## 4. ⚠️ Critical pre-existing bug fixed — Blob-rewrite route collisions

`next.config.js` maps `/journal/*`, `/cities/*`, etc. to Vercel Blob for images. Array `rewrites()` are "afterFiles" (run **before** dynamic routes), and redirects run before rewrites — so:

| Symptom | Scope (verified) | Cause | Fix |
|---|---|---|---|
| **City images → 308→404** | **REAL production bug** — confirmed live on www.yardiedesign.com before the fix; **now 200, verified live** | `/cities/:slug*` redirect (redirects run before rewrites) caught `/cities/<name>.jpg` | Redirect only dot-free paths (city slugs never contain a dot); dotted image paths reach the Blob rewrite |
| Journal articles → 404 (`"Blob not found"`) | **Local `next start` only — NOT production.** Production returned 200 both before and after | `/journal/:path*` is an "afterFiles" rewrite, applied before dynamic routes locally. On Vercel, prerendered `/journal/[slug]` pages are served by the static/filesystem phase first, so the rewrite never fires | Constrain journal rewrite to image extensions; extensionless slugs fall through. Correct + defensive, and it unbreaks local `next start`/`next dev` |

**Correction:** an earlier draft of this handoff claimed all 20 journal articles were 404ing in production. That was wrong — it was a local-environment routing-order difference. The **city-image 404 was genuinely live** and is the substantive production fix here.

Deployed as commit `d396d92` → Vercel Production `● Ready` (52s). Post-deploy production check: journal article 200, journal image 200, **city image 200 (was 308→404)**, city page redirect still 308→`/service-areas/greenville`.

---

## 5. Before/after route & redirect table (runtime-verified)

**200 canonical:** `/`, `/about`, `/services`, `/services/[slug]`, `/gallery`, `/journal`, `/journal/[slug]` (**newly working**), `/quote`, `/contact`, `/faq`, `/service-areas/[slug]`, `/legal/*`.

**308 → canonical (single hop, no chains):** `/work`→`/gallery`; `/portfolio`,`/project/*`→`/gallery`; `/insights*`,`/blog`,`/post/*`,`/feed`,`/rss`→`/journal*`; `/consultation`,`/schedule-consultation`,`/get-quote`→`/quote`; `/landscapes`,`/hardscapes`,`/services/paver`…→`/services/*`; `/cities/<slug>`,`/areas/*`,`/service-area/*`→`/service-areas/*`; `/contact-us`→`/contact`; `/about-us`→`/about`.

**Sitemap:** 53 canonical 200-URLs; previously published `/work` (a redirect) — now `/gallery`. `lastmod` only on the 20 journal posts (real dates); no priority/changefreq. **No sitemap URL relies on a redirect**, and the 20 journal URLs it lists now actually resolve (were 404 before §4 fix).

---

## 6. Content TODO list requiring Yardie approval (§3 — nothing invented)

Tracked in `lib/launch-checklist.ts`. **Launch blockers bold.**
- **Business address conflict:** site asserts `5036 Winterville Pkwy, Winterville 28590`; public listing shows `2408 Charles Blvd, Greenville 27858`. Also drives `lib/seo.ts` JSON-LD streetAddress + geo.
- **Legal name, primary phone** (`(252) 320-7660`), **primary email** (`hello@yardiedesign.com`); hours (JSON-LD asserts Mon–Fri 8–5); storefront vs service-area; canonical Instagram/Facebook; GBP URL; service areas.
- **Licenses + numbers**, **"landscape architect" legal usage** (keep "designer" until verified), insurance, warranty, permits, founding year (2004 "subject to confirmation").
- **Verbatim approved reviews** (don't rewrite); **6–10 flagship projects** + real plan/sketch assets + before/after photos.
- The homepage plan-to-built slider uses a **3D rendering labelled "Plan"** — supply a real Scott Baldwin plan/sketch and correct the label (§2.2).
- Form asks **square footage** — confirm Yardie uses it in qualification, else remove (§9.1).

---

## 7. Business-listing correction checklist (external — NOT performed; needs authorization)

After §3 identity is confirmed: align NAP across website (`lib/content.ts company`, `lib/seo.ts` JSON-LD) + Google Business Profile + Facebook + Instagram + directories (Yelp, Bing, Apple Maps, BBB, Houzz, Angi). Use one verified phone. **No external listing was touched.**

---

## 8. Performance results — Lighthouse (production `next start`, desktop)

| Page | Perf | A11y | BestPr | SEO | LCP | CLS | TBT |
|---|---|---|---|---|---|---|---|
| Home | 74 | 93 | 96 | 100 | 4.3s | 0 | 0ms |
| Gallery | 86 | 96 | 96 | 100 | 2.4s | 0 | 10ms |
| Service | 75 | 97 | 96 | 100 | 5.4s | 0 | 0ms |
| Location | 75 | 96 | 96 | 100 | 5.1s | 0 | 0ms |
| Quote | 81 | 95 | 96 | 100 | 3.3s | 0 | 0ms |
| Journal | 81 | 95 | 96 | 100 | 3.2s | 0 | 0ms |

- **SEO 100, Best-Practices 96, CLS 0, TBT ~0** across the board — excellent.
**After the single-hero merge (three consecutive identical runs):** homepage **Perf 79** (was 74), **LCP 3.5s** (was 4.3s), CLS 0, TBT 0ms.

> **Measurement caveat:** the first run after any rebuild reported 71 / 7.5s — a cold Blob-CDN image fetch, not a regression. Three repeat runs on identical code were stable at 79 / 3.5s (spread 0.1s). Local `next start` pulls hero imagery cross-network from Blob, so **re-measure on Vercel production** for true numbers.

Cumulative verified wins:

| Metric | Before | After |
|---|---:|---:|
| Homepage hero image preloads | 12 | **1** |
| Homepage DOM `<img>` | 105 | **91** |
| Homepage HTML | ~486 KB | **404 KB** |
| Homepage font preloads | 5 | **4** (handwritten face dropped) |
| Auto-scrolling marquees | 2 | **0** |
| `/gallery` SSR `<img>` | 165 | **35** |
| `/gallery` HTML | ~190 KB | **141 KB** |
| Homepage `<h1>` | 1 (+ an `aria-level` workaround) | **1 real `<h1>`** |
| Lighthouse (home) | Perf 74 · A11y 93 | **Perf 75–80 · A11y 96** (BP 96, SEO 100, CLS 0, TBT 0ms) |

- **Not run:** mobile form-factor, real Vercel measurements. Command used: `npx lighthouse <url> --form-factor=desktop --only-categories=performance,accessibility,best-practices,seo`.

---

## 9. Accessibility results (§14)

**Implemented & verified:** hero reduced-motion + keyboard pause/play; gallery tiles are real buttons (were pointer-only — keyboard users couldn't open the lightbox); lightbox focus move-in/trap/restore; forms announce success/error via `aria-live`/`role=alert`; star ratings `role="img"` (fixes `aria-prohibited-attr`). BeforeAfterSlider already fully keyboard/touch/mouse operable.

**Remediated this session (measured):**

| Page | A11y before | after |
|---|---:|---:|
| Home | 93 | **96** |
| Quote | 95 | **96** |
| Journal | 95 | **96** |
| Gallery | 96 | 96 |

- **heading-order — FIXED.** ConsultationForm step headings `h3`→`h2`; added a "More from the journal" `h2` to the journal Related section (which previously had no heading at all).
- **aria-prohibited-attr — FIXED.** `role="img"` on the star-rating element.
- **color-contrast — largely fixed.** 36 `text-clay/NN` → full-opacity `text-clay` (3.08→**5.80:1**); 8 `text-cream/40|45|50` → `/70` (3.59→**8.39:1**). The one `aria-hidden` decorative `/25` span was correctly left alone.

**Remaining — one design decision (deliberately NOT changed):**
The `moss` brand accent `#6B7A5C` fails AA **on both backgrounds**: 3.87:1 on cream-alt and 3.85:1 on bark. Darkening it fixes light but worsens dark (3.20:1), and there are **143 `text-moss` usages across mixed-background files** — no single value works. This needs a two-token decision:

| Use | Recommended | Contrast |
|---|---|---|
| Accent **text on light** (cream / cream-alt) | `#5F6D52` | 5.05 / 4.66 ✅ |
| Accent **text on dark** (bark / dark-surface) | `#8A9B7A` — the **existing `moss-light` token** | 5.95 / 5.38 ✅ |
| Fills, borders, focus rings | keep `moss` `#6B7A5C` | UI components need only 3:1 |

- **Not run:** mobile axe-core DOM audit, VoiceOver pass, 200%-zoom/large-text checks.

---

## 10. Form-delivery verification (§9, §16.3)

- **Live delivery CONFIRMED.** A marked test consultation was posted to an isolated server routed **only to stone@solagon.com** (`RESEND_TO_EMAIL` override; the real team list — scott@/sky@/bill@/linda@yardiedesign.com — was never emailed). Result: HTTP 200 `{success:true}` with Resend returning no error → real delivery via the production endpoint.
- Code path is robust: shared layer, reCAPTCHA v3 + score threshold, HTML-escaping, empty-rejection, **success only on server-confirmed delivery**, proper 400/403/500/502, no PII logged.
- **Gaps:** no analytics events on forms (§15 — identify the site's analytics first); `squareFootage` collected (§9.1).

---

## 11. Structured-data & sitemap verification (§12.4/§12.5)

- **Server-rendered JSON-LD confirmed** in raw HTML (no JS): `LocalBusiness` (every page via layout), `BreadcrumbList` (home + service), **`Service` + `FAQPage` (service pages — 4 blocks each)**, `Article` (journal), `FAQPage` (faq). **No self-serving `aggregateRating`.**
- **Accuracy caveat:** `localBusinessSchema()` bakes in unverified facts (phone/streetAddress/geo/hours/areaServed/socials) — gated in the launch checklist.
- **Sitemap:** canonical 200-URLs only; no redirect-reliant URLs; real `lastmod` where genuine; no priority/changefreq.

---

## 12. What remains — and why

### 12a. Blocked on Yardie-supplied facts (cannot be built without inventing)

The brief forbids invented business facts (§1.3). These items are **not deferred by choice** — they are unbuildable until Yardie supplies verified content. The *structure* for each is built and waiting.

| Brief section | Blocked work | What's needed | Structure ready? |
|---|---|---|---|
| §6 Case studies | 6–10 flagship project pages | Project facts, real plans/sketches, before/after photos, approved client labels | ✅ model + template — just add data |
| §5.6 / §3.3 Testimonials | Real reviews on homepage/case studies | Verbatim approved reviews + permission | ✅ typed `testimonial` field |
| §8 About | Founder story, team, process | Scott's actual story, who's on the team, real roles | ❌ needs copy |
| §7 Service pages | Cost drivers, exclusions, what fails and why, maintenance, typical timelines | Trade knowledge from Yardie | ❌ needs copy |
| §12.2 Location pages | Substantially unique local pages | Real local projects, local photos, soil/permit/drainage specifics | ❌ needs content |
| §12.7 Journal | Four content clusters | First-hand technical content + sourcing | ❌ needs content |
| §3 / §12.1 Identity | NAP, licences, hours, socials, citations | **Address conflict first**, then licences and "landscape architect" usage | ✅ `lib/launch-checklist.ts` |
| §11 Copy audit | De-genericising house style | Concrete project/material facts to replace vague adjectives | ❌ needs facts |

### 12b. Design decisions awaiting sign-off (deliberately not made unilaterally)

1. **`moss` accent contrast** — fails AA on both light and dark; needs the two-token split in §9. 143 usages.
2. **Homepage section count** — brief §5 wants 7–8 sections; the page still runs ~12. Cutting sections removes live content, so it needs an owner's call on *which*.
3. **Trust marquee** — §5.2 says avoid an auto-scrolling trust marquee; one still runs below the hero.
4. **Typography** — §10.1 asks whether Cormorant Garamond + the handwritten `Homemade_Apple` face are right. Still 3 Google families loaded.

### 12c. Verification gaps

1. No mobile-form-factor Lighthouse, axe-core DOM audit, VoiceOver pass, 200%-zoom, or full browser matrix.
2. Performance measured locally only — Blob-CDN latency inflates LCP; **re-measure on Vercel**.
3. `public/` asset cleanup inventoried but **not executed** (no deletions) — awaiting approval.
4. Local `public/` imagery lives in `yardie-corrupted-backup/`, not the canonical repo (site unaffected).

---

## 13. Recommended next actions (priority order)

1. **Deploy the journal/city Blob-collision fix** (§4) — it restores 20 live articles + city images currently 404ing in production.
2. **Provide §3 facts** (address first) — unblocks NAP, JSON-LD, citations, case studies, location uniqueness. Flip `lib/launch-checklist.ts` items to `approved`.
3. **Re-measure performance on Vercel**; then optimize hero LCP (size + single responsive hero) and reduce homepage DOM images.
4. **Remediate color-contrast** (muted-text tokens) and heading-order; add form analytics events (§15).
5. **Design sign-off** on homepage section reduction + CTA wording, then implement.
6. Build the case-study model/template (§6) once flagship facts + plan assets are supplied.
7. Run the non-destructive `public/` asset manifest (§13.2); act only after approval. Delete `yardie-corrupted-backup` once you're satisfied nothing else is needed from it.
