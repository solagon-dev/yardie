# Yardie Design — Creative Direction & Design Brief
**Version:** 1.0
**Date:** March 13, 2026
**Phase:** Pre-Build — Creative Strategy & Visual Direction

---

## TABLE OF CONTENTS

1. [Creative Vision](#1-creative-vision)
2. [Emotional Tone & Brand Personality](#2-emotional-tone--brand-personality)
3. [Typography Direction](#3-typography-direction)
4. [Color Palette](#4-color-palette)
5. [UI Component Style Direction](#5-ui-component-style-direction)
6. [Layout & Grid System](#6-layout--grid-system)
7. [Art Direction for Imagery](#7-art-direction-for-imagery)
8. [Motion & Interaction Design](#8-motion--interaction-design)
9. [Premium Brand Elevation Strategy](#9-premium-brand-elevation-strategy)
10. [Design Cues to Avoid](#10-design-cues-to-avoid)
11. [Page-by-Page UI/UX Direction](#11-page-by-page-uiux-direction)
12. [Design System Reference Card](#12-design-system-reference-card)

---

## 1. CREATIVE VISION

### The Core Idea
Yardie doesn't do lawns. Yardie designs **living environments**.

The website must express that distinction from the first pixel. It should feel like stepping into a well-designed architectural journal — one that happens to be selling you the most beautiful version of your outdoor life.

The visual language sits at the intersection of three worlds:

> **Landscape Architecture** × **Architectural Digest** × **Boutique Hospitality**

Think: a high-end landscape architecture firm's portfolio site, but warmer and more inviting than a cold architecture practice. Think: the editorial richness of a luxury home magazine, but built for conversion. Think: the quiet confidence of a brand that doesn't need to shout.

### Reference Points (Feeling, Not Imitation)
- **Dwell Magazine** — editorial grid, beautiful photography, confident negative space
- **RH (Restoration Hardware) Outdoor** — dark, moody, warm luxury; photography-led storytelling
- **AECOM / West 8 Landscape** — portfolio-first, architectural typography, project as narrative
- **Aesop** — minimal, precise, every word earns its place, warm earth tones
- **The Line Hotel** — warm modernism, architectural detail, tactile materiality expressed digitally
- **Commune Design** — California organic luxury, muted palette, photography that breathes

### What This Site Is NOT
- Not a service directory
- Not a green-and-orange lawn care site
- Not a gallery of thumbnails
- Not a form-heavy contractor site
- Not template luxury (the fake serif + stock photo + gold accent formula)

---

## 2. EMOTIONAL TONE & BRAND PERSONALITY

### How It Should Feel to Visit This Site

When a homeowner lands on yardie.com, they should feel:

1. **Calm** — The site doesn't rush them. It breathes. Generous space between things.
2. **Elevated** — "This company is serious about design. They think like I think."
3. **Trusting** — The photography, the copy precision, the layout all signal: these people know what they're doing.
4. **Inspired** — "I want my yard to look like that." Every section builds desire.
5. **Understood** — The site speaks to a person who values beauty and craft, not just function.

### Brand Voice Cues (for copy tone throughout)
- **Confident, not boastful** — "We build spaces that endure" not "We're the best in NC!"
- **Warm, not casual** — "Let's talk about your space" not "Get a free quote today!"
- **Precise, not clinical** — "Each project begins with listening" not "Step 1 of our process is..."
- **Inspiring, not salesy** — Show the vision, let conversion follow naturally

### The Three-Word Brand Feeling
**Refined. Rooted. Enduring.**

---

## 3. TYPOGRAPHY DIRECTION

### Philosophy
Typography is the primary design tool. In the absence of strong photography, the type must carry the weight. When photography is excellent, the type should complement and frame it. The contrast between an expressive serif display face and a clean humanist sans-serif body is the signature of editorial luxury.

---

### Type Stack

#### Display / Headlines — Cormorant Garamond
- **Source:** Google Fonts (Variable font available)
- **Import:** `Cormorant Garamond` — weights 300, 400, 500, 600, italic variants
- **Role:** All H1, H2 display headings, pull quotes, large hero text, editorial callouts
- **Why:** Cormorant Garamond has the weight contrast, optical elegance, and organic warmth that positions Yardie between an architecture firm and a landscape journal. Its thin strokes feel crafted, not corporate. Its italic is genuinely beautiful.
- **Character:** Elegant without being precious. Natural-feeling letterforms. High x-height contrast that photographs well.

#### Body / UI — DM Sans
- **Source:** Google Fonts (Variable font available)
- **Import:** `DM Sans` — weights 300, 400, 500
- **Role:** Body copy, navigation, captions, form labels, button text, metadata
- **Why:** DM Sans is humanist — it reads warmly, unlike geometric sans-serifs (Inter, Helvetica) which feel cold at small sizes. It has a slightly organic quality that complements Cormorant without competing. Clean enough for UI, warm enough for lifestyle content.

#### Accent / Labels — DM Sans, Uppercase + Tracked
- **Role:** Section labels ("Our Work", "The Process", "What We Do"), category tags, captions, overline text
- **Style:** `font-size: 11–12px / letter-spacing: 0.15–0.2em / font-weight: 500 / text-transform: uppercase`
- **Effect:** Creates the editorial "section label" feel seen in Architectural Digest, without needing a third typeface.

---

### Type Scale

```
Display XL:   Cormorant Garamond  /  clamp(60px, 8vw, 120px)  /  weight 300–400  /  line-height 0.95–1.05
Display L:    Cormorant Garamond  /  clamp(44px, 5.5vw, 80px) /  weight 400       /  line-height 1.0–1.1
H1:           Cormorant Garamond  /  clamp(36px, 4.5vw, 64px) /  weight 400       /  line-height 1.05–1.15
H2:           Cormorant Garamond  /  clamp(28px, 3.2vw, 48px) /  weight 400       /  line-height 1.1–1.2
H3:           DM Sans             /  18–22px                   /  weight 500       /  line-height 1.3
Body L:       DM Sans             /  17–18px                   /  weight 300–400   /  line-height 1.7–1.8
Body:         DM Sans             /  15–16px                   /  weight 400       /  line-height 1.65–1.75
Caption:      DM Sans             /  12–13px                   /  weight 400       /  line-height 1.5
Label:        DM Sans (uppercase) /  11–12px                   /  weight 500       /  letter-spacing 0.15em
```

### Typography Rules
- Headlines are **never bold** — Cormorant in 300 or 400 weight reads luxuriously; anything heavier feels cheap
- Body copy is never compressed — generous `line-height` (1.65+) is non-negotiable
- Hero headlines can use **italic Cormorant** for the second line or word to create visual rhythm (e.g., "Transforming Outdoor" / *"Living Spaces"*)
- Section labels always uppercase, always tracked, always small — they are wayfinders, not content
- Avoid orphans in headlines — use `text-wrap: balance` or `&nbsp;` to keep headlines feeling composed

---

## 4. COLOR PALETTE

### Philosophy
The palette is warm, architectural, and restrained. It should feel like the color of natural materials: limestone, aged wood, dry grass, dark soil, sage leaf. The photography handles the color. The UI frames it.

**Rule:** The brand palette supports photography; it does not compete with it.

---

### Primary Palette

| Token | Hex | Usage |
|-------|-----|-------|
| `--color-cream` | `#F8F4EE` | Primary background — warm parchment, not stark white |
| `--color-cream-alt` | `#F0EBE2` | Alternate section background — slightly deeper parchment |
| `--color-stone` | `#E4DDD4` | Cards, dividers, subtle backgrounds |
| `--color-bark` | `#1A1814` | Primary dark — near-black with warm undertone; replaces pure black |
| `--color-earth` | `#3D3830` | Body text — softer than bark, still authoritative |
| `--color-clay` | `#6B5D50` | Secondary text, captions, metadata |
| `--color-moss` | `#6B7A5C` | Brand accent — muted sage/olive green; architectural, not corporate |
| `--color-moss-light` | `#8A9B7A` | Hover states, subtle accents on moss |
| `--color-border` | `#C8BEB0` | 1px borders, dividers — warm stone gray |
| `--color-border-light` | `#E4DDD4` | Subtle section separators |

### Dark Section Palette (for contrast moments)

| Token | Hex | Usage |
|-------|-----|-------|
| `--color-dark-bg` | `#1A1814` | Dark hero sections, footer, CTA blocks |
| `--color-dark-surface` | `#252118` | Cards within dark sections |
| `--color-dark-border` | `#3D3830` | Borders in dark sections |
| `--color-dark-text` | `#F8F4EE` | Text on dark backgrounds |
| `--color-dark-muted` | `#9E9488` | Muted text on dark backgrounds |

### Accent Moments (used sparingly)

| Token | Hex | Usage |
|-------|-----|-------|
| `--color-accent-warm` | `#C17F5A` | Terracotta — used in 1–2 places max; never for buttons |
| `--color-accent-sage` | `#6B7A5C` | Same as moss; the primary brand accent |

### Color Rules
- **Never use pure white** (`#FFFFFF`) or pure black (`#000000`) — always the warm equivalents
- **Moss/sage** is the brand color; it appears on hover states, active indicators, category tags, and select accents — not used heavily
- **Terracotta** is a single-use accent for special callouts or decorative moments — not a button color
- **Dark sections** appear 1–2 times per page maximum (footer, a CTA block, an occasional hero variant) — used for rhythm and contrast, not as the dominant mode
- Background colors rotate between `cream`, `cream-alt`, and `stone` to create section breathing without heavy borders

---

## 5. UI COMPONENT STYLE DIRECTION

### Buttons

**Primary Button**
- Background: `--color-bark` (#1A1814)
- Text: `--color-cream` (#F8F4EE)
- Font: DM Sans, 12px, weight 500, uppercase, letter-spacing 0.12em
- Padding: `14px 32px`
- Border-radius: `2px` (barely rounded — architectural, not bubbly)
- Hover: Background lightens to `#3D3830`, subtle `0.2s ease` transition
- No drop shadow ever

**Secondary / Outline Button**
- Background: transparent
- Border: `1px solid --color-bark`
- Text: `--color-bark`
- Same typography as primary
- Hover: Background fills to `--color-bark`, text becomes `--color-cream`
- Transition: `0.2s ease`

**Ghost Button (on dark backgrounds)**
- Border: `1px solid rgba(248, 244, 238, 0.4)`
- Text: `--color-cream`
- Hover: Border opacity goes to 1, subtle background `rgba(248,244,238,0.08)`

**Rules:**
- Buttons never have `border-radius` above 4px
- No gradients, no shadows, no glow effects on buttons
- Button text is always tracked uppercase at small size — never title case
- Buttons should feel like architectural elements, not candy

---

### Navigation

**Desktop Nav**
- Position: Fixed, full width
- Default state: Transparent background, `--color-cream` or `--color-dark-text` text depending on hero background
- Scrolled state: Warm near-white background (`rgba(248, 244, 238, 0.92)`) with `backdrop-filter: blur(12px)`, subtle bottom border `1px solid --color-border-light`
- Logo: Left-aligned, wordmark only (no icon unless brand has strong icon)
- Nav links: DM Sans, 13px, weight 400, `letter-spacing: 0.04em` — understated, not bold
- Active state: `--color-moss` underline or text color
- CTA button: Far right, primary button style but slightly smaller padding
- Dropdown (Services): Clean list, no cards, no icons — just text links in a light panel

**Mobile Nav**
- Hamburger → full-screen overlay
- Dark overlay (`--color-bark` background)
- Large Cormorant links — the menu is a moment, not a utility
- Links: `clamp(32px, 6vw, 48px)`, weight 300, `--color-cream`
- Animate: Stagger fade-up each link, `0.05s` delay between items

---

### Cards

**Portfolio / Project Cards**
- Full-bleed image, no rounded corners, no drop shadows
- Image fills entire card; text sits below in a clean panel OR overlays the bottom with a subtle gradient scrim
- On hover: Image scales `1.04` over `0.5s ease`, text if overlaid fades in
- No card borders in the traditional sense — the card edge is the image edge
- Bottom panel (below image): White/cream background, project name in Cormorant, location in DM Sans uppercase label, tags in muted label

**Service Cards**
- More architectural: icon (simple, line-drawn) + service name + one-line description
- Bordered with `1px solid --color-border`, subtle hover: border becomes `--color-moss`
- Background: `--color-cream` or `--color-cream-alt`
- No rounded corners, no drop shadows

**Blog / Journal Cards**
- Image top (16:9 or 3:2 ratio), full-width of card
- Category label above headline (DM Sans uppercase)
- Headline in Cormorant, 22–26px
- Date + read time in clay-colored DM Sans
- Subtle hover: Image zooms 1.03, headline color shifts to `--color-moss`

---

### Form Elements

- Inputs: `border-bottom: 1px solid --color-border` only — no full box border. Floating label or label above.
- Focus state: `border-bottom: 1px solid --color-bark`, label rises/transforms
- Select menus: Styled to match input treatment — no browser defaults
- Error state: Terracotta/warm red text, no harsh red borders
- Submit button: Full primary button treatment
- The consultation form should feel like a premium intake questionnaire, not a contact form

---

### Section Dividers & Transitions

- Between sections: **No full-width horizontal rules**. Instead, use: generous vertical padding (`120–160px` on desktop), background color shifts, or overlapping elements
- Decorative divider option: A single thin line `1px solid --color-border`, `max-width: 80px`, centered — used sparingly as a "breath mark" between content blocks
- Section overlap: Where a card or quote element visually crosses the boundary between two background colors — creates depth without borders

---

## 6. LAYOUT & GRID SYSTEM

### Grid
- **Max content width:** `1320px` (content), `1600px` (wide/bleed elements)
- **Outer gutter:** `clamp(24px, 5vw, 80px)` — scales with viewport
- **Column system:** 12-column grid for complex layouts; 4-column for mobile
- **Section padding:** `clamp(80px, 10vw, 160px)` top/bottom — this is the signature of a premium site

### Layout Patterns

**Full-Bleed Hero**
```
[                    FULL VIEWPORT PHOTO / VIDEO                    ]
[  Overline label                                                    ]
[  Large Cormorant headline (left-aligned or centered)              ]
[  Short descriptor (DM Sans, max 400px wide)                       ]
[  CTA button(s)                                                    ]
```
- Headline: `clamp(60px, 8vw, 100px)`, weight 300, Cormorant
- Text can be left-aligned with a bottom-left anchor, OR centered with fade-up reveal
- Photo has a subtle dark gradient scrim from bottom: `linear-gradient(to top, rgba(26,24,20,0.7) 0%, transparent 60%)`

**Editorial Two-Column (Text + Image)**
```
[ Text column 5/12 ]  [ Image column 7/12, bleeds to edge ]
```
Or reversed:
```
[ Image column 7/12, bleeds to edge ]  [ Text column 5/12 ]
```
- Image always bleeds to the page edge on its side — no margins
- Text column sits in the grid with normal gutters
- This pattern is used for About, process steps, service feature callouts

**Large Portfolio Grid**
```
[ Large card (8 col) ][ Small card (4 col) ]
[ Small card (4 col) ][ Large card (8 col) ]
```
- Alternating large/small creates editorial rhythm
- Cards are NOT equal-height rows — different heights add tension and visual interest
- Gap: `12–16px` between cards

**Centered Editorial Moment**
```
            [ Overline label — centered             ]
            [ Wide Cormorant headline — centered    ]
            [ Short paragraph — max 560px, centered ]
            [ Single CTA — centered                 ]
```
- Used for: brand statement sections, philosophy callouts, newsletter, section intros
- Generous top/bottom padding — this section "breathes"

**Full-Bleed Photo Strip**
```
[  Full viewport width / 60–70vh height photo, no margins  ]
```
- Used as visual punctuation between content-heavy sections
- No text overlay required — sometimes the image just stands alone
- On scroll: subtle parallax (image moves at 70% scroll speed)

**Numbered Process / Steps**
```
01  ─────────────────────────────────────────
    [Headline]
    [Body copy]
    [Optional image — right aligned]

02  ─────────────────────────────────────────
    ...
```
- Number: Cormorant, `clamp(80px, 10vw, 140px)`, weight 300, `--color-stone` (very light, decorative)
- Horizontal rule from number to edge: `1px solid --color-border`
- Content sits below the rule line

**Testimonial Pull Quote**
```
            [  Opening quote mark — large, Cormorant, moss color  ]
            [  Quote text — Cormorant italic, 24–32px              ]
            [  — Client name, DM Sans uppercase label              ]
```
- Never in a "card" — floated in generous space, almost like a magazine pull quote
- Optional: Small circular photo of client property (not headshot) to the left

---

## 7. ART DIRECTION FOR IMAGERY

### Photography Style
The photography IS the product. Yardie's work is visual. Every photo must be chosen and used with editorial intentionality.

**Hero / Feature Photography**
- Golden hour preferred: warm late-afternoon or early-morning light that saturates greens and warms stone
- Camera angles: Low and wide (to capture the scale of space), or elevated and architectural (to show planning and structure)
- Style: Clean, intentional compositions. No cluttered backgrounds.
- Color temperature: Warm. The grading should feel like the color palette — warm neutrals, deep greens, no cold blue tones.
- NO: Photos with people posing awkwardly, stock family-in-yard scenes, obvious stock photography

**Portfolio / Project Photography**
- Every project needs at minimum: 1 wide establishing shot + 2–3 detail/material shots
- Detail shots: Close-up of stone texture, brick coursework, plant combinations, lighting fixtures — the "craft" moments
- Before/after pairings: Important for storytelling. Should be shown at the same camera angle.
- Time-of-day variety per project: Day photo for structure, dusk/evening for lighting work

**Imagery Treatments**
- **Primary treatment:** Full-color, editorial-graded (warm, not Instagram-filtered)
- **Subtle vignette:** Very faint darkening at edges (not a heavy vignette) on some hero images to draw focus
- **Dark overlay sections:** Use a carefully crafted scrim, not a flat 50% black overlay. The image should still breathe through the overlay.
- **Grayscale moments:** On hover state only (reverse — grayscale to color on hover) OR as a design choice on a specific section — never used just because
- **Aspect ratios to standardize:**
  - Hero: 16:9 or full viewport
  - Portfolio cards: 3:2 (landscape orientation — shows outdoor spaces naturally)
  - Portrait feature: 4:5 or 2:3 (for interior/editorial columns)
  - Blog thumbnails: 16:9

**Art Direction for Placeholder/Stock (until real photography is available)**
- Seek: Edited outdoor architectural photography — stone patios, lush organized planting beds, outdoor kitchens, water features at dusk
- Avoid: Cheesy stock (husband-wife-admiring-lawn, contractor-in-uniform, generic green lawns)
- Color-grade all stock photography to match the warm palette before use

---

## 8. MOTION & INTERACTION DESIGN

### Philosophy
Motion at Yardie is **purposeful and restrained**. Every animation answers the question: "Does this help the user understand or feel something?" If not, it doesn't ship.

The motion language should feel like the pages of a heavy coffee table book — unhurried, deliberate, satisfying.

---

### Core Interaction Principles

**1. Scroll-triggered Reveals (Fade + Rise)**
- Every content section fades in on scroll with a subtle upward translate
- Duration: `0.6s`, Easing: `cubic-bezier(0.22, 1, 0.36, 1)` (ease-out quart — decelerates naturally)
- Y offset: `24–32px` rising to `0`
- Stagger: Sequential elements within a section stagger `0.08–0.12s` apart
- Threshold: Trigger at `10–15%` of element visible — not too late

**2. Hero Headline Reveal**
- The hero headline uses a word-by-word or line-by-line reveal
- Each word/line: `clip-path: inset(0 0 100% 0)` → `inset(0 0 0% 0)` (text wipes up from baseline)
- Duration: `0.7s per unit`, stagger `0.05–0.08s`
- This is the signature moment — the headline "writes itself" on load

**3. Image Parallax**
- Full-bleed hero photos and photo strip sections scroll at `0.6–0.7x` scroll speed
- Implementation: CSS `transform: translateY()` tied to scroll position via IntersectionObserver or lightweight scroll listener
- Depth: Subtle — `40–60px` maximum travel range. Not dramatic Ken Burns.

**4. Card Hover States**
- Portfolio cards: Image scale `1.04`, duration `0.5s ease`
- Project title/metadata: Fade in or shift `4–6px` upward on hover
- Service cards: Border color transitions from `--color-border` to `--color-moss` over `0.3s`
- Blog cards: Image scale `1.03`, headline color shift to `--color-moss`

**5. Navigation Transition (Scroll)**
- On scroll past ~`100px`: Navigation background transitions from transparent to `rgba(248,244,238,0.92)` with `backdrop-filter: blur(12px)`
- Duration: `0.3s ease`
- Logo or nav text color may need to invert depending on hero — use a CSS class toggle

**6. Page Transitions**
- On route change: Content fades out `(opacity 0, 0.2s)`, new page fades in `(opacity 1, 0.3s)`
- Keep it simple — no sliding panels or complex transitions that disrupt orientation

**7. CTA Button Hover**
- Background color fill transition: `0.2s ease`
- No scale transforms on buttons — that reads cheap
- Optionally: An `→` arrow that slides in from the left on hover (CSS only, `transform: translateX`)

**8. Photography Load States**
- Images use a `blur-up` progressive loading pattern: low-quality placeholder blurs into sharp image
- The transition: `filter: blur(8px)` → `filter: blur(0)` over `0.4s` as image loads
- Background: `--color-stone` as placeholder color

---

### What Motion Does NOT Do
- No entrance animations from left or right (slide-in)
- No bouncing, elastic, or spring-heavy easing
- No rotating elements, spinning icons, or attention-seeking effects
- No motion that runs on every hover without user intent
- No animations over `1s` duration unless it's a deliberate hero moment
- No parallax on mobile — performance first; disable all parallax under `768px`

---

## 9. PREMIUM BRAND ELEVATION STRATEGY

Beyond typography and color, these are the strategic design decisions that separate a premium brand from a polished-but-generic one:

### 1. Let Photography Breathe
The biggest single upgrade to Yardie's premium perception: **give every image room to exist**. Full-bleed, high-quality, unhurried. No cramped thumbnails. No images fighting with text.

### 2. Negative Space as a Design Element
Premium brands are comfortable with empty space. Cheap sites fill every pixel with content or calls to action. The Yardie redesign should have sections that are almost entirely white space with one powerful image and six words of headline. Trust that.

### 3. The Serif Headline as Signature
The consistent use of Cormorant Garamond at large sizes across the site creates a visual throughline. When someone sees large, light-weight serif type over a beautiful outdoor photo, they associate that language with premium. This pairing should appear on every major page — it becomes the visual identity.

### 4. Numbered Section Labels as Navigation Design
Use sequential numbering (`01`, `02`, `03`) as a design element on detail-heavy pages (process, services). These decorative large numbers — in very light gray — add architectural structure without cluttering.

### 5. Editorial-Length Project Descriptions
The current project pages are near-empty. Premium brands tell stories. Each project page should read like an editorial feature in a design magazine: a client brief, the approach, the materials, the outcome. Even 150 well-crafted words per project signals craft and intentionality.

### 6. One Surprising Detail Per Page
Premium sites have a moment that makes you pause — a single design decision that feels unexpected and considered. This could be:
- A section where the headline runs vertically along the left margin
- A quote that appears between two sections, taking up the full viewport width in giant light type
- A footer where the logo fills the full width of the page as a watermark
- A project detail page where the photo takes up 70% of the first viewport with no text

These moments cost nothing to implement but are worth everything in perceived value.

### 7. Consistent Micro-Typography
Premium design shows up in the details: `—` em-dashes not `--`, `"` smart quotes not `"`, `'` apostrophes not `'`. Numerals that are formatted (`20+` years, not `20+ years`). These seem trivial and are not.

### 8. Surface the Craft
The website should communicate that Yardie are craftspeople, not just a company. This means:
- Showing material close-ups: brick, stone, soil, root ball, lighting hardware
- Naming specific plants (azaleas, crepe myrtles) rather than "beautiful flowers"
- Referencing specific neighborhoods (Greenville, Winterville) — local knowledge signals authenticity

### 9. Restraint in the Service Hierarchy
Don't list 30 sub-services in equal importance. Lead with the 2–3 most premium services (Landscapes, Hardscapes, Masonry) and let the others (Lighting, Irrigation) be framed as complements. Luxury brands curate; they don't overwhelm.

### 10. Quiet Confidence in CTAs
"Schedule a Consultation" is the right primary CTA — it implies a relationship, not a transaction. Never "Get a Free Quote" or "Request Service." The premium language of the CTAs matters: "Let's talk about your space." "Begin the conversation." "See what's possible."

---

## 10. DESIGN CUES TO AVOID

These patterns will instantly cheapen the Yardie brand. They are forbidden:

| Avoid | Why |
|-------|-----|
| Bright green as a brand color | Every lawn care company uses it — immediate association with cheap contractors |
| Orange or yellow accent colors | Service company cliché — suggests urgency over quality |
| Heavy drop shadows on cards | 2015-era UI — reads dated and low-end |
| Rounded corners over 4px on most elements | Makes the site feel like a generic app template |
| Gradient overlays at 40%+ opacity | Destroys photography quality; feels template-grade |
| Gold/yellow as a luxury signal | Overused fake-luxury trope; feels real estate agent, not design firm |
| Before/after slider widgets | Useful but only if executed properly; avoid cheap jQuery versions |
| Stock photos of people mowing lawns | Contractor site territory — avoid all generic lawn maintenance imagery |
| Centered everything (fully symmetric layouts) | Lacks editorial tension; every section centered = no rhythm |
| Justified text | Creates awkward rivers of white space; use left-align only |
| All-caps body text | Fine for labels, wrong for any text over 14px |
| Multi-star review widgets | Fine for Yelp; wrong for a premium brand site |
| Blue links in body text | Cheap; use underline-on-hover in `--color-earth` only |
| Page counter progress bars | Gimmicky; use clean pagination or "next project" links |
| Three equal-column feature grids | The most overused web pattern in existence; signals template |
| Favicon/social icons in the nav | Clean nav has only links and a CTA button |
| "Proud member of..." badge spam | One discreet association logo is fine; a badge strip is not |
| Countdown timers or urgency fake-outs | Wrong brand register entirely |
| Video autoplay with sound | Never |
| Sliders / carousels for primary content | Users don't interact with them; use scroll or static grids |

---

## 11. PAGE-BY-PAGE UI/UX DIRECTION

---

### HOMEPAGE (`/`)

**Goal:** Build desire and trust. Drive consultation bookings.

**Structure:**

**Section 1 — Hero (Full Viewport)**
- Full-bleed video or photo (golden hour, best project photography)
- If video: 15–20 second loop, no sound, slow movement (pan across a patio or garden)
- Headline: Two-line Cormorant, weight 300, `clamp(60px, 7vw, 96px)`
  - Line 1: "Transforming Outdoor" (roman)
  - Line 2: *"Living Spaces"* (italic — creates rhythm)
- Subline: DM Sans, 16px, `--color-dark-text`, `max-width: 420px`, below headline
- CTA: Primary button "View Our Work" + ghost "Schedule Consultation"
- Scroll indicator: A thin animated line scrolling downward, bottom center

**Section 2 — Brand Statement (Centered Editorial)**
- Background: `--color-cream`
- Overline label: "Yardie Design — Greenville, NC"
- A single powerful sentence in Cormorant, 36–44px, centered, `max-width: 780px`:
  > *"We don't just design yards. We create the places where your life happens outside."*
- No button here — this is a pause, not a pitch

**Section 3 — Services Grid (Architectural)**
- Background: `--color-cream-alt`
- Overline: "What We Design"
- Left-side: Vertical stack of 5 service names in large Cormorant (`36–44px`), with a subtle horizontal rule above each, numbered `01–05`
- Right side: Large hero image of the currently "active" service (changes on hover/click of left column)
- Mobile: Collapses to stacked cards with icon + name + short descriptor

**Section 4 — Featured Work (Editorial Portfolio)**
- Background: `--color-cream`
- Overline: "Recent Work"
- Layout: One large featured project (8/12 columns, `aspect-ratio: 3/2`) + two smaller projects stacked (4/12 columns)
- Over each card: Project name in Cormorant + location in DM Sans label
- CTA link: "View all projects →" right-aligned below grid

**Section 5 — Full-Bleed Photo Punctuation**
- `60–70vh` height, full-width photo, no text, no CTA
- Just a beautiful project shot. Let it breathe.
- Subtle parallax on scroll.

**Section 6 — Our Process (Numbered)**
- Background: `--color-cream-alt`
- Overline: "How It Works"
- Three numbered sections (`01`, `02`, `03`) with decorative large numbers
- Each: heading (Cormorant) + 2–3 sentences (DM Sans) + optional small image
- Layout: Full width with thin horizontal rule between each step

**Section 7 — Testimonials (Editorial)**
- Background: `--color-bark` (dark section — creates contrast)
- Single large pull quote, `--color-cream`, Cormorant italic, 28–36px
- Client name below: DM Sans uppercase label
- Three dots or small indicators to cycle to other testimonials (no auto-play)
- CTA: "See Our Work" ghost button

**Section 8 — Journal Preview (Blog)**
- Background: `--color-cream`
- Overline: "Design Insights"
- Three editorial blog cards in a row
- Each: image, category label, headline (Cormorant), date
- CTA: "Read the Journal →"

**Section 9 — Footer CTA / Contact Strip**
- Background: `--color-moss` (the one bold brand color moment on the page)
- Centered large Cormorant headline: "Ready to Transform Your Space?"
- Sub-copy: "Let's talk about your project."
- CTA: "Schedule a Consultation" (white/cream button)

**Section 10 — Footer**
- Background: `--color-bark`
- Three columns: Logo/tagline/social + Navigation links + Contact info
- Newsletter signup: Minimal — just email input + text link "Subscribe"
- Bottom bar: Copyright + Privacy + Terms

---

### ABOUT (`/about`)

**Goal:** Build trust through story. Make Yardie feel human and skilled.

**Structure:**
- Hero: Split viewport — left half text, right half full-bleed photo (founder or team at work). Left: `--color-cream`, right: photography. No standard hero overlay.
- H1 on left: "Rooted in Greenville. Designed for Life Outside." (Cormorant)
- Section 2: "Our Story" — editorial two-column layout. 300–400 words of proper narrative copy (to be written). Photo on right, full-bleed to edge.
- Section 3: Stats row — `100's Clients` / `20+ Years` / `30+ Craftsmen` — displayed in a clean horizontal band with Cormorant numbers and DM Sans labels. Background `--color-stone`.
- Section 4: "What We Do" — three areas (Planning, Design, Maintenance) displayed as large numbered vertical sections, each with icon + copy.
- Section 5: Team — Founder card with photo + bio. Additional team members if available. Cards: portrait photo + name (Cormorant) + role (DM Sans label). If no team photos yet, placeholder with initials.
- Section 6: "Our Philosophy" — Full-width section, dark background (`--color-bark`), centered Cormorant quote: *"Design should be an experience, not just a product."*
- CTA section: "Let's Build Something Together" → Schedule Consultation

---

### SERVICE PAGES (`/landscapes`, `/hardscapes`, `/masonry`, `/lighting`, `/irrigation`)

**Goal:** Inform and convert. Show expertise. Build desire specific to the service.

**Each service page follows a consistent but not identical structure:**

**Section 1 — Service Hero**
- Full-bleed photo specific to that service (golden-hour landscape, masonry detail, etc.)
- Headline: Service-specific, Cormorant — not the same structure on every page
  - Landscapes: *"The Living Canvas of Your Home"*
  - Hardscapes: *"Structure, Beauty, and Purpose — Built to Last"*
  - Masonry: *"Timeless Craftsmanship in Stone and Brick"*
  - Lighting: *"Your Outdoor Space After Dark"*
  - Irrigation: *"Every Garden's Most Essential Investment"*
- Subline: 1–2 sentences, DM Sans

**Section 2 — Service Introduction**
- Two-column editorial: Left = copy (150–200 words, specific to service), Right = secondary photo
- NOT the same intro copy as every other service page

**Section 3 — Service Specialties**
- NOT a 2x3 card grid. Instead: Numbered vertical list, 01–06, each with:
  - Large number in pale Cormorant (decorative)
  - Service name (Cormorant, 22px)
  - Short description (DM Sans, 15px)
  - Horizontal rule below
- Full width. Clean. Editorial.

**Section 4 — Featured Projects for This Service**
- "Work in This Category" — 2–3 project cards, large, from the portfolio filtered by this service
- Each links to project detail page

**Section 5 — Why Yardie (Service-Specific)**
- This block must be rewritten for each service — NOT the same 3 value props copy-pasted
- Use a `2 columns` editorial layout: each value prop on its own row with a heading + copy

**Section 6 — FAQ Accordion**
- Service-specific FAQs rendered as clean accordion items
- DM Sans body, Cormorant question headlines
- Last FAQ: "How do I get started?" — replaced with service-specific next steps

**Section 7 — Conversion CTA**
- Dark section (`--color-bark`): "Ready to start your [Service] project?"
- Primary + secondary CTA buttons

---

### PORTFOLIO / WORK (`/work`)

**Goal:** Inspire and showcase craft. Prove the brand.

**Structure:**
- Hero: Ultra-minimal — just the overline "Our Work" + a large H1 in Cormorant: *"Every project begins with a story."*
- Filter bar: Service filters (`All / Landscapes / Hardscapes / Masonry / Lighting / Irrigation`) — minimal pill-style buttons with moss active state
- Portfolio grid: Masonry or editorial mixed grid (not equal columns):
  - Row 1: 1 large card (7 col) + 1 medium card (5 col)
  - Row 2: 3 equal cards (4 col each)
  - Row 3: 1 medium (5 col) + 1 large (7 col)
  - Repeat pattern — creates rhythm and visual variety
- Cards: Image fills card, no padding. Name + location in overlay (fades in on hover) or clean caption below.

---

### PROJECT DETAIL PAGES (`/work/[slug]`)

**Goal:** Tell the project story. Inspire. Convert prospects who identify with this project type.

**Structure:**
- Hero: Full-viewport best photo of the project. Project name in Cormorant bottom-left. Location + date as label below name.
- Section 1: Project metadata strip — `Services Used` / `Location` / `Project Date` — clean horizontal band with DM Sans labels
- Section 2: Project narrative — LEFT column (5/12): Editorial prose about the project (150–250 words). RIGHT column (7/12): Feature photo, bleeds to edge.
- Section 3: Full-width photo (best landscape/wide shot) — parallax, no text
- Section 4: Photo gallery — 3-column grid of detail photos (stone, plant, lighting detail shots)
- Section 5: Another photo — portrait format, 2-column. Left: photo. Right: materials used, a design note, or a short pull quote from the brief.
- Section 6: "Next Project" — link to next project in portfolio. Full-bleed teaser image, name, CTA.
- Sticky sidebar (desktop): "Work with Yardie on your project" — floating CTA block (appears after hero is out of view)

---

### CONTACT (`/contact`)

**Goal:** Low friction, warm, professional.

**Structure:**
- Hero: Split — left side has contact details, right side has a quality project photo
- Left: Company name, address, phone (single correct number), email, hours if applicable, social links
- Contact form: Minimal. Name, email, phone, message. NOT the full consultation intake form — that belongs on `/consultation`. This is for quick questions.
- Map: Embedded Google Maps in a custom monochrome/warm tone style, not the default blue
- Below the fold: "For project inquiries" → link to Schedule Consultation

---

### SCHEDULE CONSULTATION (`/consultation`)

**Goal:** Convert serious prospects. Make the intake form feel premium, not clinical.

**Structure:**
- Minimal hero: "Let's Talk About Your Space." Cormorant, centered. Short DM Sans subline.
- Form: Multi-step or cleanly sectioned — NOT one long scroll of 15 fields
  - Step 1 "Tell us about you": Name, email, phone
  - Step 2 "Your project": Service type, location, square footage
  - Step 3 "Your timeline & budget": Budget range, start/end timeframes
  - Step 4 "Your vision": Open text — "Tell us what you're imagining"
- Between form and footer: A quiet testimonial strip — 2–3 short quotes in Cormorant italic
- Confirmation page: Warm, branded. "We'll be in touch within 24 hours." No generic "Thank you for your submission."

---

### JOURNAL / BLOG (`/journal`)

**Goal:** SEO, expertise-building, long-term audience trust.

**Structure:**
- Header: "Journal" in enormous Cormorant across the width (large display) + a subline: "Design insights, project stories, and outdoor living ideas from the Yardie team."
- Category filter: Same pill-style filter as portfolio
- Featured post: Large — full-width or 8-column card, prominent, top of page
- Below: 3-column grid of article cards (image + category + Cormorant headline + date)
- Load more / pagination: Clean, no infinite scroll

**Individual Post (`/journal/[slug]`):**
- Clean reading experience above all else
- Max content width: `720px` centered
- Headline: Cormorant, large
- Meta: Date, category, estimated read time — DM Sans label
- Body: DM Sans, 17px, `line-height: 1.75`
- Pull quotes from article body: Full-width Cormorant italic treatment
- Images in article: Full content-width (not floated inline)
- End of article: "Related posts" (2 cards) + CTA: "Ready to start your own project? Schedule a consultation."

---

### FAQ (`/faq`)

**Goal:** Answer questions, reduce friction, support SEO.

**Structure:**
- Minimal hero: "Frequently Asked Questions" (Cormorant) + "Can't find your answer? Email us at hello@yardiedesign.com"
- Service category tabs: Filter FAQs by Landscapes / Hardscapes / Masonry / Lighting / Irrigation
- Accordion items: Clean expand/collapse. Question in DM Sans 500 weight. Answer in DM Sans 400 weight.
- Expand icon: A thin `+` / `×` that transitions — not a chevron
- Bottom CTA: "Have a question not answered here?" → Contact link

---

### SERVICE AREAS (`/service-areas`) — NEW PAGE

**Goal:** Local SEO. Rank for location-based keywords.

**Structure:**
- H1: "Serving Greenville, NC and the Surrounding Region"
- Introduction paragraph (200 words) about Yardie's local roots and service area
- List of towns/areas served with a brief sentence about each (Greenville, Winterville, Ayden, Farmville, Washington, Kinston, Goldsboro, etc.)
- Map embed (same styled map as contact page)
- CTA: "Get in touch to see if we serve your area."

---

## 12. DESIGN SYSTEM REFERENCE CARD

This is the quick-reference card for building. Every decision in the codebase should trace back to these tokens.

---

### Fonts (Google Fonts)
```css
/* Import in globals.css or layout.tsx */
@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400;1,500&family=DM+Sans:ital,wght@0,300;0,400;0,500;1,400&display=swap');

--font-display: 'Cormorant Garamond', Georgia, serif;
--font-body:    'DM Sans', system-ui, sans-serif;
```

### Colors (CSS Custom Properties)
```css
:root {
  /* Backgrounds */
  --color-cream:         #F8F4EE;
  --color-cream-alt:     #F0EBE2;
  --color-stone:         #E4DDD4;

  /* Text */
  --color-bark:          #1A1814;
  --color-earth:         #3D3830;
  --color-clay:          #6B5D50;

  /* Brand Accent */
  --color-moss:          #6B7A5C;
  --color-moss-light:    #8A9B7A;

  /* Borders */
  --color-border:        #C8BEB0;
  --color-border-light:  #E4DDD4;

  /* Dark Section */
  --color-dark-bg:       #1A1814;
  --color-dark-surface:  #252118;
  --color-dark-border:   #3D3830;
  --color-dark-text:     #F8F4EE;
  --color-dark-muted:    #9E9488;

  /* Accent (used sparingly) */
  --color-terracotta:    #C17F5A;
}
```

### Tailwind Color Extensions (tailwind.config.ts)
```js
colors: {
  cream:    '#F8F4EE',
  'cream-alt': '#F0EBE2',
  stone:    '#E4DDD4',
  bark:     '#1A1814',
  earth:    '#3D3830',
  clay:     '#6B5D50',
  moss:     '#6B7A5C',
  'moss-light': '#8A9B7A',
  border:   '#C8BEB0',
  terracotta: '#C17F5A',
}
```

### Spacing Scale (key values)
```
Section vertical padding (desktop):  120–160px  →  py-[120px] or custom
Section vertical padding (mobile):   64–80px    →  py-16 to py-20
Content max-width (standard):        1320px     →  max-w-[1320px]
Content max-width (wide/bleed):      1600px     →  max-w-[1600px]
Content max-width (editorial text):  720px      →  max-w-[720px]
Content max-width (narrow callout):  560px      →  max-w-[560px]
Outer page gutter:                   clamp(24px, 5vw, 80px)
Grid gap (card grids):               12–16px
```

### Border Radius Scale
```
Default (most elements):   2px    →  rounded-sm (override Tailwind default)
Cards:                     0px    →  rounded-none (images, portfolio cards)
Buttons:                   2px    →  rounded-sm
Inputs:                    0px    →  rounded-none (underline style only)
Pills/tags:                100px  →  rounded-full (filter buttons only)
```

### Animation Tokens
```css
--ease-smooth:    cubic-bezier(0.22, 1, 0.36, 1);
--ease-in-out:    cubic-bezier(0.4, 0, 0.2, 1);
--duration-fast:  0.2s;
--duration-base:  0.4s;
--duration-slow:  0.6s;
--duration-hero:  0.8s;
```

### Component Token Summary
```
Button border-radius:    2px
Button padding:          14px 32px (primary), 12px 28px (small)
Button font:             DM Sans, 12px, weight 500, uppercase, tracking 0.12em
Nav height:              72px (desktop), 60px (mobile)
Card gap:                12px
Image hover scale:       1.04 (portfolio), 1.03 (blog)
Image hover duration:    0.5s
Parallax ratio:          0.65–0.7x scroll speed
Scroll reveal offset:    28px (translateY)
Scroll reveal duration:  0.6s
Stagger interval:        0.08–0.12s
```

---

*Design Brief — Yardie Design Website Redesign*
*This document governs all build decisions. Reference it before every component, every layout choice, every copy block.*
*Next phase: Build*
