import type { Metadata } from "next";
import { company } from "@/lib/content";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Privacy Policy — Yardie",
  description: "How Yardie collects, uses, and protects information collected through our website and services.",
  path: "/legal/privacy-policy",
  noIndex: false,
});

const lastUpdated = "April 30, 2026";

export default function PrivacyPolicyPage() {
  return (
    <>
      <section className="relative bg-bark text-cream pt-32 lg:pt-44 pb-12 lg:pb-20 -mt-14 lg:-mt-[68px]">
        <div className="mx-auto max-w-[1100px] px-5 sm:px-8 lg:px-12">
          <h1 className="font-display text-5xl sm:text-6xl lg:text-[80px] leading-[1.04] tracking-tight font-light text-cream max-w-[18ch]">
            Privacy
            <span className="italic text-stone"> Policy.</span>
          </h1>
          <p className="mt-7 text-[14px] text-cream/65">Last updated {lastUpdated}</p>
        </div>
      </section>

      <article className="bg-cream text-bark">
        <div className="mx-auto max-w-[720px] px-5 sm:px-8 lg:px-0 py-section prose-editorial">
          <p>
            {company.legalName} (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) respects your privacy. This policy explains what information we collect when you visit our website, contact us, or work with us, and how we use it.
          </p>

          <h2>Information we collect</h2>
          <p>
            We collect information you give us directly — for example, when you submit a contact or consultation form. This may include your name, email address, phone number, mailing address, and any details you share about your project.
          </p>
          <p>
            We also collect a small amount of information automatically as you use the site: pages visited, referring URL, approximate location based on IP, and browser/device type. We use a privacy-respecting analytics tool (Ahrefs Web Analytics) that does not set cookies or track individuals across sites.
          </p>

          <h2>How we use your information</h2>
          <ul>
            <li>To respond to inquiries and schedule consultations.</li>
            <li>To deliver and manage projects we&rsquo;ve agreed to perform.</li>
            <li>To send occasional, transactional email related to your project.</li>
            <li>To improve our website and services.</li>
            <li>To comply with legal obligations.</li>
          </ul>

          <h2>How we share your information</h2>
          <p>
            We do not sell or rent your personal information. We share information only with service providers who help us operate (for example, our email service for transactional messages) and only as needed for them to perform their work, under confidentiality terms.
          </p>
          <p>
            We may disclose information if required by law, or where necessary to enforce our terms or protect our rights, property, or safety.
          </p>

          <h2>Cookies & analytics</h2>
          <p>
            We do not use advertising cookies. Our analytics provider (Ahrefs Web Analytics) is configured to operate without cookies and without collecting personally identifying information.
          </p>

          <h2>Data retention</h2>
          <p>
            We retain submission data only as long as necessary to respond to your inquiry, deliver any work you&rsquo;ve engaged us for, and meet legal/accounting obligations. You may request deletion at any time by emailing {company.email}.
          </p>

          <h2>Your rights</h2>
          <p>
            You may ask us what information we hold about you, request that we correct or delete it, or object to its processing. Contact {company.email} with any such request.
          </p>

          <h2>Children</h2>
          <p>
            Our services are not directed to children under 13, and we do not knowingly collect information from children.
          </p>

          <h2>Changes to this policy</h2>
          <p>
            We may update this policy occasionally. The &ldquo;last updated&rdquo; date above will reflect the most recent revision.
          </p>

          <h2>Contact</h2>
          <p>
            Questions or requests under this policy: {company.email} · {company.phone}.
          </p>
        </div>
      </article>
    </>
  );
}
