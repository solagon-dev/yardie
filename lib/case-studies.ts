// ===========================================================================
// Case-study content model (implementation brief §6)
// ===========================================================================
//
// A reusable model + registry for project case studies. The template that
// renders these lives at app/gallery/[slug]/page.tsx and follows the section
// order in §6.2.
//
// RULES (§1.3, §3.3):
//   • Nothing in this registry may be invented. Every value must come from an
//     approved Yardie source: real project facts, real photography, real
//     drawings, and — for `testimonial` — a verbatim review the client has
//     given permission to publish.
//   • `safeClientLabel` is the public-facing identifier (e.g. a street or
//     neighbourhood name). Do not publish a full client name without written
//     permission.
//   • Optional fields may be omitted freely. The template SKIPS any section
//     whose data is absent rather than rendering an empty decorative block
//     (§6.1), so a sparse case study still reads as finished work.
//   • `timeline` and `budgetBand` are optional AND must be verified/approved
//     before use (§6.1, §3.3).
//
// The registry ships EMPTY on purpose: no flagship projects have been approved
// yet (see lib/launch-checklist.ts → `flagship-projects`). Adding the first
// entry automatically publishes /gallery/<slug>, links it from the portfolio
// hub, and includes it in the sitemap.

export interface CaseStudyImage {
  src: string;
  alt: string;
  /** Optional caption — adds context where it genuinely helps (§6.3). */
  caption?: string;
}

export interface CaseStudyTestimonial {
  /** Verbatim client words. Do NOT rewrite into Yardie's marketing voice (§3.3). */
  quote: string;
  /** How the client agreed to be credited (e.g. "Homeowner, Winterville"). */
  attribution: string;
  /** Must be true — publication permission on file. */
  approved: true;
}

export interface CaseStudy {
  // — Identity ————————————————————————————————————————————————
  slug: string;
  title: string;
  /** Public-facing project label; never an unapproved client name. */
  safeClientLabel: string;
  city: string;
  region: string;
  /** Service slugs this project demonstrates (must match lib/content services). */
  services: string[];
  propertyType: string;
  completionYear: number;

  // — Narrative ——————————————————————————————————————————————
  summary: string;
  challenge: string;
  siteConditions: string;
  designResponse: string;

  // — Craft detail (all optional; sections are skipped when absent) ————
  materials?: string[];
  plantPalette?: string[];
  lightingNotes?: string;
  drainageNotes?: string;
  /** Optional AND verified before publishing (§6.1). */
  timeline?: string;
  /** Optional AND approved before publishing (§6.1). */
  budgetBand?: string;

  // — Media ——————————————————————————————————————————————————
  heroImage: CaseStudyImage;
  /** Real Yardie plans/sketches — never generated pseudo-blueprints (§2.3). */
  planAssets?: CaseStudyImage[];
  beforeImages?: CaseStudyImage[];
  processImages?: CaseStudyImage[];
  finishedImages?: CaseStudyImage[];
  maturityImages?: CaseStudyImage[];

  // — Proof & linking ————————————————————————————————————————
  testimonial?: CaseStudyTestimonial;
  /** Service slugs to cross-link (§12.6). */
  relatedServices?: string[];
  /** Journal post slugs to cross-link (§12.6). */
  relatedJournalPosts?: string[];

  // — SEO ————————————————————————————————————————————————————
  seoTitle: string;
  seoDescription: string;
  datePublished: string; // ISO
  dateModified: string;  // ISO
}

/**
 * Approved case studies. EMPTY until Yardie supplies verified project facts,
 * plan assets, and photography (launch-checklist → `flagship-projects`).
 */
export const caseStudies: CaseStudy[] = [];

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return caseStudies.find((c) => c.slug === slug);
}

export function caseStudySlugs(): string[] {
  return caseStudies.map((c) => c.slug);
}

/** True when at least one approved case study exists. */
export function hasCaseStudies(): boolean {
  return caseStudies.length > 0;
}

/** Case studies that demonstrate a given service slug — for service-page proof (§7). */
export function caseStudiesForService(serviceSlug: string): CaseStudy[] {
  return caseStudies.filter(
    (c) => c.services.includes(serviceSlug) || c.relatedServices?.includes(serviceSlug),
  );
}

/** Most recently completed first — deterministic editorial order, no shuffling (§6.3). */
export function caseStudiesByRecency(): CaseStudy[] {
  return [...caseStudies].sort(
    (a, b) => b.completionYear - a.completionYear || a.title.localeCompare(b.title),
  );
}
