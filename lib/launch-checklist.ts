// ===========================================================================
// Central launch checklist — factual blockers requiring Yardie approval
// ===========================================================================
//
// Implementation brief §1.3 ("No invented business facts") and §3 ("Factual
// decisions required before launch"). This is the SINGLE source of truth for
// every business fact the website asserts or wants to assert but that has not
// yet been verified from an approved source.
//
// Rules this file enforces by convention:
//   • Nothing here is invented. `current` holds the value the site *currently*
//     asserts (imported from lib/content `company` where one exists) so the
//     checklist stays honest and in sync — it is NOT a proposed answer.
//   • `status` is 'unverified' until a human confirms the fact from an approved
//     source and flips it to 'approved' (recording `verifiedBy` / `verifiedOn`).
//   • Components should prefer omitting an unverified, launch-blocking claim
//     over publishing a plausible-looking placeholder (see `isApproved`).
//
// Nothing in this module changes site behavior on its own; it is a registry +
// helpers. Wire `assertApprovedForLaunch()` into a pre-deploy check when the
// team is ready to gate launch on it.

import { company } from "./content";

export type ChecklistStatus = "unverified" | "approved" | "blocked";
export type ChecklistCategory =
  | "business-identity"
  | "professional-claims"
  | "reviews-and-case-studies"
  | "brand-claims"
  | "service-area";

export interface ChecklistItem {
  id: string;
  category: ChecklistCategory;
  question: string;
  /** What the site currently asserts, if anything. NOT a proposed answer. */
  current?: string;
  /** True when this claim must be resolved before launch is approved. */
  blocksLaunch: boolean;
  status: ChecklistStatus;
  /** Where/how to verify (approved source), for whoever resolves it. */
  verifyVia?: string;
  notes?: string;
  verifiedBy?: string;
  verifiedOn?: string; // ISO date
}

// ---------------------------------------------------------------------------
// §3.1 Business identity
// ---------------------------------------------------------------------------
const businessIdentity: ChecklistItem[] = [
  {
    id: "legal-business-name",
    category: "business-identity",
    question: "Confirm the exact legal business name (entity registration).",
    current: company.legalName,
    blocksLaunch: true,
    status: "unverified",
    verifyVia: "NC Secretary of State business registration.",
  },
  {
    id: "public-brand-name",
    category: "business-identity",
    question: "Confirm the public/customer-facing brand name.",
    current: company.name,
    blocksLaunch: false,
    status: "unverified",
  },
  {
    id: "primary-phone",
    category: "business-identity",
    question: "Confirm the primary conversion phone number.",
    current: company.phone,
    blocksLaunch: true,
    status: "unverified",
    notes:
      "Also hardcoded as +12523207660 in lib/seo.ts localBusinessSchema(); keep both in sync once verified.",
  },
  {
    id: "primary-email",
    category: "business-identity",
    question: "Confirm the primary customer-facing email address.",
    current: company.email,
    blocksLaunch: true,
    status: "unverified",
  },
  {
    id: "business-address",
    category: "business-identity",
    question:
      "Resolve the address inconsistency and confirm the correct public/customer-facing address.",
    current: `${company.street}, ${company.city}, ${company.region} ${company.postal}`,
    blocksLaunch: true,
    status: "blocked",
    notes:
      "KNOWN CONFLICT (brief §3.1): website asserts '5036 Winterville Parkway, Winterville, NC 28590', " +
      "but a prominent public listing has shown '2408 Charles Blvd, Greenville, NC 27858'. " +
      "Do NOT choose between these without confirmation. lib/seo.ts also publishes a specific streetAddress + geo " +
      "(35.5290, -77.4001) in JSON-LD that depends on this.",
    verifyVia: "Owner confirmation + Google Business Profile + mail/utility record.",
  },
  {
    id: "storefront-vs-service-area",
    category: "business-identity",
    question:
      "Decide whether Yardie is represented as a storefront (public address) or a service-area business (hide street address).",
    blocksLaunch: true,
    status: "unverified",
    notes:
      "Drives whether streetAddress is published in LocalBusiness JSON-LD or replaced with areaServed only.",
  },
  {
    id: "operating-hours",
    category: "business-identity",
    question: "Confirm operating hours.",
    current: "JSON-LD asserts Mon–Fri 08:00–17:00 (lib/seo.ts).",
    blocksLaunch: false,
    status: "unverified",
  },
  {
    id: "canonical-instagram",
    category: "business-identity",
    question: "Confirm the canonical Instagram account.",
    current: company.instagram,
    blocksLaunch: false,
    status: "unverified",
  },
  {
    id: "facebook-url",
    category: "business-identity",
    question: "Confirm the Facebook page URL.",
    current: company.facebook,
    blocksLaunch: false,
    status: "unverified",
  },
  {
    id: "google-business-profile",
    category: "business-identity",
    question: "Confirm the Google Business Profile URL / place ID.",
    blocksLaunch: false,
    status: "unverified",
  },
  {
    id: "service-areas-primary-secondary",
    category: "business-identity",
    question: "Confirm primary and secondary service areas.",
    current:
      "content.ts lists 10+ service areas; seo.ts JSON-LD areaServed lists 10 cities.",
    blocksLaunch: false,
    status: "unverified",
    notes: "Brief §12.2 prioritizes Greenville, Winterville, Ayden, Farmville, Washington.",
  },
];

// ---------------------------------------------------------------------------
// §3.2 Professional claims
// ---------------------------------------------------------------------------
const professionalClaims: ChecklistItem[] = [
  {
    id: "licenses-and-numbers",
    category: "professional-claims",
    question: "Confirm exact licenses held and license numbers.",
    blocksLaunch: true,
    status: "unverified",
  },
  {
    id: "insurance-language",
    category: "professional-claims",
    question: "Confirm approved insurance language.",
    blocksLaunch: false,
    status: "unverified",
  },
  {
    id: "manufacturer-certifications",
    category: "professional-claims",
    question: "Confirm any manufacturer certifications.",
    blocksLaunch: false,
    status: "unverified",
  },
  {
    id: "landscape-architect-usage",
    category: "professional-claims",
    question:
      'Confirm whether a licensed landscape architect is employed and whether "landscape architect" may legally be used in marketing.',
    blocksLaunch: true,
    status: "unverified",
    notes:
      'Until verified, prefer "landscape designer" / "exterior designer" / exact factual trade description (brief §3.2).',
  },
  {
    id: "warranty-and-care-terms",
    category: "professional-claims",
    question: "Confirm warranty and ongoing-care terms.",
    blocksLaunch: false,
    status: "unverified",
  },
  {
    id: "permit-handling-claims",
    category: "professional-claims",
    question: "Confirm permit-handling claims.",
    blocksLaunch: false,
    status: "unverified",
  },
  {
    id: "founded-year",
    category: "brand-claims",
    question:
      'Confirm the founding year / "20+ years" experience claim (brief §2.1 lists 2004 as "subject to factual confirmation").',
    current: String(company.founded),
    blocksLaunch: false,
    status: "unverified",
  },
];

// ---------------------------------------------------------------------------
// §3.3 Reviews and case studies
// ---------------------------------------------------------------------------
const reviewsAndCaseStudies: ChecklistItem[] = [
  {
    id: "verbatim-approved-reviews",
    category: "reviews-and-case-studies",
    question:
      "Provide verbatim, approved customer reviews with permission to publish names/initials/locations/photos.",
    blocksLaunch: true,
    status: "unverified",
    notes:
      "Do not rewrite reviews into Yardie's marketing voice, and do not publish invented/composite quotes (brief §3.3, §5.6).",
  },
  {
    id: "flagship-projects",
    category: "reviews-and-case-studies",
    question:
      "Identify 6–10 flagship projects with real facts, plan/sketch assets, and before/after photography.",
    blocksLaunch: true,
    status: "unverified",
    notes:
      "Required to populate the case-study model (brief §6) and the signature plan-to-built interaction (§2.3/§5.5).",
  },
  {
    id: "budget-bands-timelines",
    category: "reviews-and-case-studies",
    question: "Approve optional budget bands and timelines per case study.",
    blocksLaunch: false,
    status: "unverified",
  },
];

export const launchChecklist: ChecklistItem[] = [
  ...businessIdentity,
  ...professionalClaims,
  ...reviewsAndCaseStudies,
];

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

/** True only when a fact has been explicitly verified/approved. */
export function isApproved(id: string): boolean {
  return launchChecklist.find((i) => i.id === id)?.status === "approved";
}

/** Items that still block launch (not yet approved). */
export function unresolvedLaunchBlockers(): ChecklistItem[] {
  return launchChecklist.filter((i) => i.blocksLaunch && i.status !== "approved");
}

export function checklistSummary() {
  const total = launchChecklist.length;
  const approved = launchChecklist.filter((i) => i.status === "approved").length;
  const blockers = unresolvedLaunchBlockers().length;
  return { total, approved, unverified: total - approved, launchBlockers: blockers };
}

/** Throw if any launch-blocking fact is still unresolved. Wire into pre-deploy CI when ready. */
export function assertApprovedForLaunch(): void {
  const blockers = unresolvedLaunchBlockers();
  if (blockers.length > 0) {
    throw new Error(
      `Launch blocked: ${blockers.length} unverified fact(s) require Yardie approval — ` +
        blockers.map((b) => b.id).join(", "),
    );
  }
}
