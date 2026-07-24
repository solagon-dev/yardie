# Yardie Website — Full Redesign, UX, Anti-AI, Content, SEO, and Performance Implementation Brief

## Purpose

This document is the authoritative implementation specification for improving the Yardie website at `yardiedesign.com` and the corresponding Next.js project in this repository.

The work is not a decorative reskin. It is a full refinement of the website's:

- Visual identity and art direction
- Information architecture
- Homepage and page-level user experience
- Portfolio and project storytelling
- Conversion journey
- Copy and content quality
- Anti-AI authenticity
- Local and organic SEO
- Accessibility
- Frontend performance
- Technical hygiene and quality assurance

The desired result is a highly custom website that feels like Yardie's real project fieldbook: site observations, authentic drawings, materials, constraints, construction decisions, finished spaces, and the people responsible for the work.

The site must not look like a generic AI-generated luxury template.

---

# 1. Non-negotiable operating instructions

## 1.1 Preserve existing work

The repository may contain uncommitted user changes. Treat every existing modification as user-owned.

Before changing anything:

1. Read this document completely.
2. Read any repository-level instructions, including `AGENTS.md`, `CLAUDE.md`, and files under `.claude/` if present.
3. Inspect `git status --short`.
4. Identify modified, untracked, and potentially corrupted files.
5. Do not overwrite, revert, discard, reset, or reformat unrelated user work.

Forbidden unless the user explicitly approves the exact action:

- `git reset --hard`
- `git checkout -- <file>`
- Destructive repository cleanup
- Recursive deletion of broad directories
- Replacing modified files wholesale without first understanding their changes
- Deleting images merely because they appear unused without proving they are duplicates or unreferenced

## 1.2 Repository-health gate

Previous inspection found signs that require verification:

- The `public/` directory was approximately 8.5 GB with more than 4,200 files.
- It contained duplicate source photographs, backup files ending in `~`, and individual files above 40 MB.
- Several modified source files appeared to contain null bytes.
- At least one loose Git object appeared corrupt.

Do not assume these conditions still exist. Re-check them.

Before feature implementation:

- Run non-destructive file-type and integrity checks.
- Determine whether null-byte files are genuinely corrupted, cloud placeholders, or concurrent user edits.
- Verify whether Git can read the current commit and relevant objects.
- If the working copy cannot be trusted, stop before overwriting anything and report the exact blocker.
- Recommend a clean clone or recoverable repair plan, but do not perform destructive repair without user approval.

## 1.3 No invented business facts

Do not invent or silently assume:

- Customer testimonials
- Project names, locations, budgets, timelines, or outcomes
- Staff roles
- Licenses, certifications, warranties, or professional titles
- The correct business address
- The correct social-media handle
- Service-area claims
- Exact construction specifications
- Prices, permit rules, material temperatures, or service-life claims

If a required fact is not verifiable from an approved source, use a clearly marked content TODO in a central data file or omit the claim. Do not publish visible placeholder prose that looks complete.

## 1.4 Work in verifiable phases

Implement the phases in this document in order. At the end of each phase:

- Run relevant validation.
- Summarize files changed.
- List unresolved factual inputs.
- Confirm no unrelated user work was overwritten.

Do not claim the project is complete until all acceptance criteria are actually met.

---

# 2. Product and brand objective

## 2.1 Brand position

Yardie's strongest defensible position is:

> One Eastern North Carolina studio studies the property, draws the design, builds it with its own people, and remains involved after installation.

Supporting proof themes:

- Founded in 2004, subject to factual confirmation
- Greenville/Winterville and Eastern North Carolina expertise
- Design and installation under one company
- In-house landscape, hardscape, masonry, lighting, irrigation, and care capabilities
- Authentic plans and drawings before construction
- Long-term stewardship after installation
- Real completed work across the region

Avoid leading with vague words such as:

- Luxury
- Elevated
- Bespoke
- Transformative
- Extraordinary
- Innovative
- Curated
- Dream space
- Oasis
- Stunning
- Premium, unless a concrete material or service level proves it

## 2.2 Creative north star: The Yardie Fieldbook

The site should feel like opening a real exterior designer's working fieldbook.

Core visual ingredients:

- Real Scott Baldwin plans and sketches
- Site measurements and dimension lines
- Material samples and labels
- Plant palettes
- Drainage, grading, and lighting annotations
- Redlines and revisions
- Before, process, finished, and later-maturity photography
- Hand and tool details
- Named people and projects
- Eastern North Carolina environmental context

The design should be editorial and architectural without becoming a generic cream-and-serif template.

## 2.3 Signature interaction

Develop one proprietary Yardie interaction based on real project evidence:

> A finished project image paired with or overlaid by the actual plan, with restrained annotations revealing design decisions such as drainage, grade, materials, lighting, plant masses, circulation, and construction details.

Acceptable implementations include:

- Accessible plan-to-built comparison
- Scroll-driven plan overlay with a static reduced-motion fallback
- “What we saw / what we drew / what we built” sequence
- Clickable or keyboard-focusable material and design annotations

Requirements:

- Use real Yardie assets, not generated pseudo-blueprints.
- Work with keyboard, touch, mouse, and reduced motion.
- Do not make essential content dependent on animation.
- Do not preload large media that is below the fold.
- Avoid scroll-jacking.

---

# 3. Factual decisions required before launch

Create one central launch-checklist data structure or document for these items. The implementation may proceed with safely omitted claims, but launch cannot be approved until they are resolved.

## 3.1 Business identity

Verify:

- Legal business name
- Public brand name
- Primary telephone number
- Primary email address
- Current public/customer-facing address
- Whether Yardie should be represented as a storefront or a service-area business
- Operating hours
- Canonical Instagram account
- Facebook URL
- Google Business Profile URL or place ID
- Primary and secondary service areas

Known inconsistency requiring resolution:

- Website: `5036 Winterville Parkway, Winterville, NC 28590`
- A prominent public listing has shown `2408 Charles Blvd, Greenville, NC 27858`

Do not choose between these addresses without confirmation.

## 3.2 Professional claims

Verify:

- Exact licenses and license numbers
- Insurance language
- Manufacturer certifications
- Whether a licensed landscape architect is employed
- Whether the company may legally use “landscape architect” in marketing
- Warranty and ongoing-care terms
- Permit-handling claims

Unless verified, prefer “landscape designer,” “exterior designer,” or an exact factual trade description.

## 3.3 Reviews and case studies

Collect or identify:

- Verbatim approved customer reviews
- Permission to publish names, initials, locations, and photographs
- Six to ten flagship projects
- Project facts for each case study
- Actual plan/sketch assets
- Before and after photography
- Optional budget bands and timelines

Do not rewrite customer reviews into Yardie's marketing voice.

---

# 4. Information architecture

## 4.1 Recommended primary navigation

Desktop and mobile primary navigation should be concise:

- Work
- Services
- About
- Journal
- Contact
- Primary CTA: Request a Property Consultation

FAQ and Service Areas should remain discoverable through appropriate page content and footer navigation, not necessarily as equal primary-navigation items.

## 4.2 Human-friendly service groups

The existing detailed service URLs can remain for search, but navigation should group them into four families:

1. Landscape Design & Planting
2. Patios, Pools & Outdoor Structures
3. Masonry, Walls & Fire
4. Lighting, Irrigation & Care

Map existing services under those groups. Preserve useful canonical URLs and incoming authority.

Potential detail pages include:

- `/services/landscapes`
- `/services/patios-pavers`
- `/services/outdoor-kitchens`
- `/services/masonry`
- `/services/lighting`
- `/services/irrigation`
- `/services/walkways-driveways`
- `/services/retaining-walls`
- `/services/fire-features`
- `/services/pergolas-pavilions`
- `/services/pool-decks`
- `/services/water-features`

Do not surface twelve undifferentiated choices at once in the main navigation.

## 4.3 Portfolio architecture

Use:

- `/work` or `/gallery` as one final canonical portfolio hub, not both
- `/work/[project-slug]` or `/gallery/[project-slug]` for case studies

Choose one canonical convention after inspecting existing backlinks, redirects, Search Console data if available, and current routing. Update every internal link, sitemap entry, canonical tag, and redirect accordingly.

The current sitemap publishes `/work` while it redirects to `/gallery`. Eliminate that inconsistency.

## 4.4 Conversion architecture

Standardize the primary action as:

> Request a Property Consultation

Supporting expectation copy:

> Tell us about the property. We’ll respond within one business day to decide whether the project is a fit and arrange a site visit.

Do not promise a written estimate within one business day if the real process requires a property visit first.

Use secondary actions contextually:

- View the Work
- Call Yardie
- Ask a Question
- Read the Project

Avoid cycling through “Start a Project,” “Get a Quote,” “Begin a Project,” “Schedule a Consultation,” and “Let’s Talk” for the same action.

---

# 5. Homepage implementation

Reduce the homepage to seven or eight meaningful sections. Do not preserve sections merely because they already exist.

## 5.1 Hero

Use one exceptional project image on initial load.

Remove the six-image autoplay hero carousel, or convert additional imagery into manually requested, non-priority content.

Required content hierarchy:

- Plain-language category and geography
- Distinctive promise
- Short proof-based supporting text
- Primary consultation CTA
- Secondary work CTA
- Project caption

Recommended message architecture, not mandatory final copy:

- Eyebrow: Landscape design + build · Greenville and Eastern NC
- Headline: Designed outside. Drawn for this house.
- Supporting copy: Landscapes, patios, masonry, lighting, and irrigation planned as one property and built by one team.

Final copy must match verified services and brand voice.

## 5.2 Immediate proof

Show no more than three or four proof points. Examples, once verified:

- Working in Eastern North Carolina since 2004
- Design and build under one studio
- In-house crews
- Ongoing care after installation

Avoid an automatically scrolling trust marquee.

## 5.3 Flagship work

Feature two or three real projects with different project types.

Each feature should show:

- Name or safe project identifier
- Location
- Project type
- One meaningful constraint or decision
- A real image
- Link to case study

Do not display an anonymous mosaic as the main evidence of work.

## 5.4 Services

Present the four service families rather than six or twelve near-identical cards.

Use distinct layouts or content density based on each family. Avoid a mechanically repeated image-card grid if a more editorial composition is clearer.

## 5.5 Signature plan-to-built section

Implement the authentic Yardie Fieldbook interaction described earlier using one approved project.

Include a fully usable static fallback.

## 5.6 Founder and trust

Use a concise founder statement in Scott's actual voice, paired with real photography.

Add verbatim reviews linked to real service types or projects. If review verification is unavailable, do not publish invented or polished composite quotes.

## 5.7 Local relevance

Include a restrained Greenville/Eastern NC section that:

- Establishes the home market
- Links to useful priority location pages
- Explains travel/project-fit expectations
- Avoids a decorative list of every possible town

## 5.8 Final CTA

Use one final consultation block. Do not place a second near-identical CTA directly after it.

---

# 6. Case-study implementation

Build a reusable case-study content model and template.

## 6.1 Required model fields

- `slug`
- `title`
- `safeClientLabel`
- `city`
- `region`
- `services`
- `propertyType`
- `summary`
- `challenge`
- `siteConditions`
- `designResponse`
- `materials`
- `plantPalette`
- `lightingNotes`
- `drainageNotes`
- `timeline`, optional and verified
- `budgetBand`, optional and approved
- `completionYear`
- `heroImage`
- `beforeImages`
- `processImages`
- `finishedImages`
- `maturityImages`
- `planAssets`
- `testimonial`, optional and approved
- `relatedServices`
- `relatedJournalPosts`
- `seoTitle`
- `seoDescription`
- `datePublished`
- `dateModified`

The model must tolerate unavailable optional fields without rendering empty decorative sections.

## 6.2 Case-study page order

1. Project hero and concise facts
2. Original challenge
3. Site reading and constraints
4. Plan or drawing
5. Design decisions
6. Materials and planting
7. Build/process documentation
8. Finished result
9. Later maturity, when available
10. Verbatim client review, when approved
11. Related service and project links
12. Consultation CTA

## 6.3 Portfolio hub

The portfolio hub should:

- Lead with selected case studies
- Allow useful service filtering
- Preserve a curated image archive beneath case studies
- Use a deterministic editorial order
- Avoid random shuffling
- Include captions where context adds value
- Avoid rendering approximately 160 full gallery images in the initial document
- Load additional archive images progressively

---

# 7. Service pages

Do not use one identical visual template with nouns swapped for every service.

Each priority service page should answer:

- What work is included?
- Who is the service for?
- What problems does it solve?
- What drives cost?
- What is usually excluded?
- What materials or systems does Yardie recommend?
- What commonly fails and why?
- What maintenance is required?
- What timeline is typical, if verified?
- What does Yardie do differently?
- Which real projects prove the claims?
- Which locations are genuinely served?

## 7.1 Priority commercial pages

Prioritize optimization and proof for:

- Landscape design Greenville NC
- Landscaping company Greenville NC
- Hardscaping Greenville NC
- Paver patios Greenville NC
- Outdoor kitchens Greenville NC
- Retaining walls Greenville NC
- Landscape lighting Greenville NC
- Irrigation installation and repair Greenville NC
- Drainage solutions Greenville NC
- Pool decks Greenville NC

Do not stuff exact-match phrases. Write clear human-facing headings, metadata, and useful local content.

## 7.2 Service-page variety

Vary page structure according to the service:

- Landscape pages can emphasize seasons, plant palettes, and maturity.
- Masonry pages can emphasize joints, bonds, bases, materials, and craft details.
- Lighting pages can use day/night comparisons and fixture-aim diagrams.
- Irrigation pages can use zones, pressure, coverage, and maintenance diagrams.
- Outdoor-kitchen pages can use layout, utilities, appliance, ventilation, and budget decisions.

Reuse design tokens and primitives, but not a visually identical section sequence everywhere.

---

# 8. About page

Lead with the founder's specific Greenville story, not generic language about “transforming vibrant outdoor extensions.”

Recommended content:

- Why Scott started Yardie
- The problem with yards being treated as an afterthought
- How the design/build/care model developed
- Who is actually on the team
- How responsibilities move from consultation to installation
- What clients should expect
- Verified experience, credentials, and service area
- Real team and field photography

Avoid anonymous initials, stock biographies, or invented staff detail.

---

# 9. Consultation and contact experience

## 9.1 Consultation form

Keep the form concise and transparent.

Recommended fields:

- Name
- Email
- Phone
- Project address or city
- Project type, multi-select
- Current condition/problem
- Desired outcome
- Planned investment range
- Ideal timing
- Optional image upload, only if storage/privacy handling is ready
- Referral source, optional

Do not ask for approximate square footage unless Yardie actually uses it during qualification.

Budget ranges must match real project economics. Do not imply that a comprehensive design-build project fits below a misleading threshold.

## 9.2 Form behavior

- Use one shared, tested form submission layer.
- Validate required fields on client and server.
- Preserve user input on recoverable failures.
- Provide accessible inline errors.
- Prevent duplicate submissions.
- Include appropriate bot protection without blocking legitimate users.
- Confirm successful delivery, not merely successful client-side validation.
- Record analytics for form start, validation failure, successful submission, and contact-method clicks without collecting sensitive message content.
- Test the production endpoint end to end.

## 9.3 Privacy

- Do not subscribe consultation leads to marketing by default.
- Use separate, explicit newsletter consent.
- Keep privacy disclosures concise and accurate.

---

# 10. Anti-AI visual rules

The following patterns must not be used as the default section formula:

- Tiny uppercase eyebrow + huge serif headline + italic green phrase
- Three equal numbered cards
- Beige background + hairline border + arrow link
- Repeated `01 / 02 / 03` decoration with no functional purpose
- Automatically scrolling trust marquee
- Generic gradient glow
- Floating glass cards
- Excessive pill-shaped controls
- Decorative pseudo-blueprints
- Repeated fade-up animation on every section
- Giant empty vertical spacing used to simulate luxury
- Identical card hover zoom everywhere

These elements may be used sparingly when they serve a real hierarchy or interaction.

## 10.1 Typography

- Evaluate whether Cormorant Garamond and the current italic treatment are too generic for the final identity.
- Do not add a new font merely for novelty.
- Favor a distinctive, legible display voice and an excellent body face.
- Limit loaded weights and styles.
- Remove decorative handwritten fonts unless used with authentic handwriting or a specific approved purpose.
- Maintain comfortable body size and line length.

## 10.2 Layout

- Use varied editorial rhythm.
- Allow photography to lead where evidence matters.
- Use asymmetry intentionally, not randomly.
- Keep clear alignment logic.
- Avoid card grids when a list, image sequence, comparison, or narrative is more meaningful.
- Make mobile a designed experience, not a stacked desktop page.

## 10.3 Motion

- Motion should explain process, transition between plan and result, or confirm an interaction.
- Do not animate merely to make a quiet section feel less empty.
- Respect `prefers-reduced-motion` everywhere.
- Do not autoplay content without a pause mechanism when it persists beyond accessibility thresholds.

---

# 11. Anti-AI copy rules

## 11.1 Remove repetitive house style

Audit and reduce repeated phrases such as:

- “How you want to live in the space”
- “Composed against the architecture”
- “One studio, one crew”
- “The property is asking for”
- “Quietly improve with time”
- “Feels considered”
- “Tell us about the property”
- “The questions we're asked most often”
- “Not just X — Y” constructions

## 11.2 Preferred copy characteristics

- Concrete nouns
- Verifiable statements
- Local detail
- Shorter sentences mixed with natural longer sentences
- Actual trade language explained plainly
- Human irregularity
- Founder perspective
- Client language left recognizably client-like

Prefer:

- Norfolk sandy loam
- Clay subsoil
- Herringbone brick
- Compacted base
- Bluestone coping
- Drain tile
- Boxwood massing
- Fixture aim
- Irrigation zone
- Seat-wall height

Avoid adjectives that do not change the meaning.

## 11.3 Claim review

Flag and verify before publishing:

- Service-life promises
- Material temperature ranges
- Cost ranges
- Permit thresholds
- “Most clients” statements
- Licensing statements
- Engineering claims
- Return-on-investment claims

Add sources or revise to qualified first-hand language.

---

# 12. Local SEO implementation

## 12.1 Name, address, and phone consistency

Once the business identity is confirmed:

- Update website header/footer/contact data.
- Update LocalBusiness structured data.
- Produce a citation-correction checklist for external listings.
- Align social links.
- Use the verified phone as the primary conversion number.

External citation edits may require user access. Do not perform them without authorization.

## 12.2 Location-page strategy

Do not mass-produce city/service pages.

Prioritize locations with real evidence, likely:

- Greenville
- Winterville
- Ayden
- Farmville
- Washington

Retain other location pages only when they provide substantial unique value.

Every indexable location page should include several of:

- A real project in or near the market
- Local photograph
- City-specific testimonial
- Soil, drainage, architectural, historical, or coastal context
- Actual travel/project-fit policy
- Locally relevant services
- Verified local permit or planting information
- Useful internal links

If a page cannot be made meaningfully unique, consolidate it into the service-area hub and redirect or noindex it based on existing authority and Search Console evidence.

## 12.3 Metadata

- Write one unique title and description per indexable page.
- Put the primary human intent first.
- Keep titles concise enough to avoid avoidable truncation.
- Avoid keyword lists in titles.
- Use the Yardie brand consistently.
- Match metadata promises to visible page content.

Example pattern:

`Landscape Design in Greenville, NC | Yardie`

## 12.4 Structured data

Render JSON-LD in the server-generated HTML rather than injecting all business schema only after interaction.

Implement and validate where appropriate:

- `LocalBusiness` or the most accurate supported subtype
- `Organization`
- `BreadcrumbList`
- `Article` or `BlogPosting`
- Website/brand identity

Include only accurate, visible, maintainable data.

For the business entity, consider verified:

- Name
- URL
- Address or appropriate service-area representation
- Telephone
- Email
- Opening hours
- Logo
- Representative images
- `sameAs` social links
- Areas served

Do not add self-serving aggregate review markup expecting review stars.

## 12.5 Sitemap and redirects

- Include canonical 200-status URLs only.
- Remove `/work` or `/gallery` duplication according to the chosen canonical route.
- Use real significant modification dates.
- Omit unreliable `lastmod` values.
- Remove meaningless `priority` and `changefreq` values unless intentionally retained for a documented non-Google consumer.
- Preserve and test redirects from legacy `/portfolio`, `/project`, `/work`, `/hardscapes`, `/landscapes`, `/blog`, `/post`, and `/insights` URLs as applicable.
- Produce a redirect test table.
- Avoid redirect chains.

## 12.6 Internal linking

Create deliberate links among:

- Case studies and their services
- Services and proven locations
- Journal articles and commercial pages
- Related case studies
- Location pages and locally relevant projects

Use descriptive, varied anchor text. Do not stuff exact-match city/service anchors.

## 12.7 Journal strategy

Organize content into four clusters:

### Cost and planning

- Landscape design cost in Greenville
- Paver patio cost in Eastern NC
- Outdoor-kitchen cost
- Phased yard redesign budgets
- Design fee versus installation cost
- Timelines by project scope

### Regional problems

- Pitt County drainage and flat lots
- Sandy loam over clay subsoil
- Stormwater near foundations
- Shade planting under mature trees
- Irrigation zoning for Eastern NC summers
- Humidity and material durability

### Materials and longevity

- Clay brick versus concrete pavers
- Travertine versus bluestone
- Why patios settle
- Retaining-wall drainage
- Outdoor-kitchen appliance grades
- Lighting-fixture longevity

### Local project stories

- Before/after case studies
- Mature landscape follow-ups
- Active project field notes
- Annotated plan reviews
- “What we changed and why” articles

Every substantive technical article should include:

- A real author
- Reviewer where appropriate
- Publication and meaningful-update dates
- First-hand images or diagrams
- Clear sourcing for external facts
- Relevant service and project links

Do not generate content merely to fill a keyword calendar.

---

# 13. Performance implementation

## 13.1 Homepage targets

Current observed architecture included approximately:

- 486 KB rendered HTML
- 105 image elements
- Seven image preloads
- Five font preloads
- Six priority hero slides
- Twelve major sections

Treat these as reduction targets, not immutable benchmark numbers.

Required changes:

- Only the actual above-the-fold hero image may receive high loading priority.
- Do not preload inactive carousel images.
- Remove duplicate mobile/desktop hero copy from the document when one responsive structure can serve both.
- Reduce initial DOM and serialized page data.
- Do not server-render the entire 160-image gallery archive on first request.
- Lazy-load below-fold media.
- Dynamically load heavy client interactions when useful.
- Prefer server components for static content.
- Minimize client-component boundaries.
- Avoid hydrating decorative content.
- Reduce font files and weights.
- Use correctly sized responsive images.
- Convert oversized originals through a controlled asset pipeline while preserving masters outside production output.

## 13.2 Asset hygiene

Build a non-destructive inventory that identifies:

- Exact duplicates by cryptographic hash
- Backup files ending in `~`
- Unreferenced files
- Oversized originals
- Generated-looking or unapproved illustration assets
- Missing dimensions
- Poor file naming

Do not immediately delete.

Produce a manifest with:

- Source path
- Size
- Dimensions
- Hash
- Reference count
- Recommended action
- Proposed canonical asset

After user approval, move masters outside the production `public/` tree or into a clearly excluded archive, then update references and verify every page.

## 13.3 Measurement

After implementation, run production-mode measurements on at least:

- Homepage
- Portfolio hub
- One case study
- One service page
- One location page
- Consultation page
- One journal article

Capture mobile and desktop:

- Performance
- Accessibility
- Best Practices
- SEO
- LCP
- CLS
- INP or an appropriate lab interaction proxy
- Total transferred bytes
- JavaScript transferred
- Image transferred
- Request count

Do not invent scores when tools are unavailable. Document the limitation and provide the exact command or configured tool needed.

---

# 14. Accessibility implementation

Target WCAG 2.2 AA for new and modified public experiences.

Requirements:

- Semantic heading hierarchy
- One clear page-level H1
- Keyboard-accessible navigation and dropdowns
- Correct focus management in mobile menus, modals, and lightboxes
- Visible focus indicators on every background
- Labeled form controls
- Accessible inline validation and error summary where useful
- No essential pointer-only interaction
- Keyboard-operable before/after or plan/build comparison
- Meaningful image alternatives and empty alternatives for decorative images
- Reduced-motion behavior
- Sufficient text and control contrast
- Adequate target sizes
- No sticky CTA covering content
- 200% zoom support
- Screen-reader announcements for asynchronous form states
- Pause/stop controls for persistent autoplay content, or no autoplay

Test with:

- Keyboard only
- VoiceOver on macOS/iOS where available
- Automated accessibility tooling
- Reduced motion
- High zoom and large text

Automated testing does not replace manual testing.

---

# 15. Analytics and conversion measurement

Preserve existing analytics unless there is a clear reason to replace them.

Implement privacy-conscious events for:

- Primary CTA click
- Phone click
- Email click
- Consultation form start
- Consultation form step completion, if multi-step remains
- Validation failure category
- Successful form submission
- Case-study view
- Service-page CTA
- Gallery engagement
- Outbound social click

Do not send names, email addresses, phone numbers, addresses, message text, or other personal information to analytics.

Define a simple measurement baseline and post-launch review plan.

---

# 16. Testing and engineering quality

## 16.1 Required validation

- Type checking
- Production build
- Existing tests
- New focused tests for routing, forms, content helpers, and structured data where valuable
- Link crawl
- Redirect verification
- Canonical verification
- Sitemap verification
- Metadata sampling
- Structured-data validation
- Image-reference verification
- Form delivery test
- Responsive testing
- Accessibility testing
- Performance testing

If the current lint script is invalid for the installed Next.js version, repair it intentionally rather than skipping lint without explanation.

## 16.2 Browser matrix

At minimum:

- Current Chrome desktop
- Current Safari desktop
- iPhone Safari
- Android Chrome or responsive equivalent

Pay special attention to:

- Fixed navigation
- Mobile menu
- Lightbox
- Plan/build interaction
- Sticky CTA
- Multi-step form
- Image loading and layout stability

## 16.3 No silent failures

- Do not swallow production form or content errors.
- Log safe diagnostic context without personal information.
- Present useful user-facing recovery states.
- Do not show success unless the server confirms delivery.

---

# 17. Phased delivery plan

## Phase 0 — Stabilize and inventory

Deliverables:

- Repository-health report
- Preservation plan for existing modifications
- Asset inventory
- Route, redirect, sitemap, and metadata inventory
- Confirmed list of factual blockers
- Baseline performance and accessibility measurements when tools are available

Gate:

- Do not proceed into broad rewrites if repository corruption makes changes unsafe.

## Phase 1 — Foundations

Deliverables:

- Final canonical route strategy
- Updated navigation architecture
- Refined design tokens
- Typography decision
- Shared page/container/section primitives
- Motion and reduced-motion rules
- Central verified business data model
- Central project/case-study model
- Central SEO helpers

## Phase 2 — Homepage and flagship case study

Deliverables:

- Rebuilt homepage
- One fully populated case-study page using verified content
- Signature Yardie Fieldbook interaction
- Mobile and accessibility review
- Performance comparison against baseline

Gate:

- Confirm the direction before duplicating it across the whole site.

## Phase 3 — Work, services, and About

Deliverables:

- Portfolio hub
- Remaining approved flagship case studies
- Services hub
- Priority service pages
- About page
- Contextual internal linking

## Phase 4 — Contact, local SEO, and journal

Deliverables:

- Consultation and contact experience
- End-to-end form verification
- Service-area hub
- Priority location pages with real evidence
- Consolidation/redirect decisions for weak location pages
- Journal information architecture and article improvements
- Server-rendered structured data
- Correct sitemap and redirects

## Phase 5 — Optimization and launch QA

Deliverables:

- Approved asset cleanup
- Performance optimization
- Accessibility remediation
- Browser QA
- Complete link and redirect crawl
- Analytics verification
- Launch checklist
- Post-launch monitoring plan

---

# 18. Final acceptance criteria

The implementation is complete only when:

## Brand and design

- The website no longer relies on one repeated AI-style section formula.
- Real drawings and real project evidence form the signature identity.
- Homepage hierarchy is shorter and clearer.
- Mobile layouts are intentionally designed.
- No unapproved pseudo-blueprints, AI-looking decorative assets, or placeholder testimonials remain.

## Content

- Generic About and service copy has been revised.
- Major claims are verified or removed.
- Testimonials are approved and authentic.
- Case studies provide concrete project evidence.
- CTA terminology is consistent.

## UX and conversion

- Users can understand what Yardie does, where it works, why it is different, and how to begin within the first screen and first major scroll.
- Consultation expectations are accurate.
- Forms work end to end.
- There is one dominant primary CTA.

## SEO

- Canonicals and sitemap contain final URLs.
- No sitemap URL relies on a redirect.
- `lastmod` values are accurate or omitted.
- Priority location pages are substantially unique.
- Structured data is accurate, server-rendered, and validated.
- Internal linking connects services, projects, locations, and articles.
- Business identity is consistent on the website, with an external citation action list provided.

## Performance

- Only essential hero media is prioritized.
- Homepage image and DOM volume are materially reduced.
- Gallery archive loads progressively.
- Font and JavaScript costs are reduced.
- Production measurements are recorded rather than guessed.

## Accessibility

- Core journeys are keyboard usable.
- Motion has reduced-motion behavior.
- Interactive comparisons have non-pointer access.
- Forms and menus have correct focus and announcements.
- New and modified experiences meet the agreed WCAG 2.2 AA target.

## Engineering

- Type checking passes.
- Production build passes.
- Relevant tests pass.
- No unrelated user work was overwritten.
- All intentional redirects are tested.
- No broken internal links or missing production assets remain.
- The final handoff documents unresolved factual or external-access tasks honestly.

---

# 19. Required final handoff from the implementer

Provide:

1. Executive summary of what changed
2. Phase-by-phase completion status
3. Complete file-change summary
4. Before/after route and redirect table
5. Content TODO list requiring Yardie approval
6. Business-listing correction checklist
7. Performance results
8. Accessibility test results
9. Form-delivery verification
10. Structured-data and sitemap verification
11. Known limitations
12. Recommended next actions

Do not describe deferred, blocked, or unverified work as complete.

