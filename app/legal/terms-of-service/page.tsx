import type { Metadata } from "next";
import { company } from "@/lib/content";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Terms of Service — Yardie",
  description: "The terms governing use of the Yardie website and our design and build services.",
  path: "/legal/terms-of-service",
});

const lastUpdated = "April 30, 2026";

export default function TermsOfServicePage() {
  return (
    <>
      <section className="relative bg-bark text-cream pt-32 lg:pt-44 pb-12 lg:pb-20 -mt-14 lg:-mt-[68px]">
        <div className="mx-auto max-w-[1100px] px-5 sm:px-8 lg:px-12">
          <h1 className="font-display text-5xl sm:text-6xl lg:text-[80px] leading-[1.04] tracking-tight font-light text-cream max-w-[18ch]">
            Terms of
            <span className="italic text-stone"> Service.</span>
          </h1>
          <p className="mt-7 text-[14px] text-cream/65">Last updated {lastUpdated}</p>
        </div>
      </section>

      <article className="bg-cream text-bark">
        <div className="mx-auto max-w-[720px] px-5 sm:px-8 lg:px-0 py-section prose-editorial">
          <p>
            These Terms of Service govern your use of the {company.legalName} website (the &ldquo;Site&rdquo;) and any project services we provide. By using the Site or engaging us, you agree to these terms.
          </p>

          <h2>Use of the site</h2>
          <p>
            You may use the Site for lawful, personal, and non-commercial purposes. You may not copy, reproduce, modify, or distribute content from the Site without our written permission, except for personal reference.
          </p>

          <h2>Project engagements</h2>
          <p>
            All design and build projects are governed by a separate written agreement signed by both parties. Nothing on this Site constitutes an offer of service. Estimates and quotes provided through the Site are preliminary; binding terms are set out in the engagement agreement.
          </p>
          <p>
            Deposits and payments under engagement agreements are non-refundable except as expressly stated in the relevant agreement.
          </p>

          <h2>Intellectual property</h2>
          <p>
            All Site content — copy, photography, drawings, brand marks — is owned by {company.legalName} or used with permission. Project drawings produced for clients are licensed to those clients for the property under contract; reuse outside that scope requires written permission.
          </p>

          <h2>No warranty</h2>
          <p>
            The Site is provided &ldquo;as is&rdquo; without warranty of any kind. Service warranties for completed projects are stated in the relevant engagement agreement.
          </p>

          <h2>Limitation of liability</h2>
          <p>
            To the fullest extent permitted by law, {company.legalName} is not liable for any indirect, incidental, or consequential damages arising from use of the Site.
          </p>

          <h2>Governing law</h2>
          <p>
            These terms are governed by the laws of the State of North Carolina. Any dispute will be brought in the state or federal courts located in Pitt County, North Carolina.
          </p>

          <h2>Changes</h2>
          <p>
            We may revise these terms at any time. Continued use of the Site after a revision means you accept the updated terms.
          </p>

          <h2>Contact</h2>
          <p>
            Questions about these terms: {company.email} · {company.phone} · {company.street}, {company.city}, {company.region} {company.postal}.
          </p>
        </div>
      </article>
    </>
  );
}
