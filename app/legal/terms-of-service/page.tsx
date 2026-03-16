import type { Metadata } from 'next';
import SectionLabel from '@/components/ui/SectionLabel';

export const metadata: Metadata = {
  title: 'Terms of Service | Yardie Design',
  robots: { index: false },
};

export default function TermsPage() {
  return (
    <div className="bg-cream pt-[72px] min-h-screen">
      <div className="max-w-[720px] mx-auto px-6 py-20 lg:py-28">
        <SectionLabel className="mb-6">Legal</SectionLabel>
        <h1 className="font-display text-bark mb-12" style={{ fontSize: 'clamp(2rem,4vw,3rem)', fontWeight: 500 }}>
          Terms of Service
        </h1>
        <div className="space-y-8 text-clay text-[14px] leading-[1.8]">
          <p>Last updated: 2024</p>
          <p>By using the Yardie Design website and services, you agree to these Terms of Service. Please read them carefully.</p>

          <div>
            <h2 className="font-display text-bark text-lg mb-3">Services Provided</h2>
            <p>Yardie Design provides exterior design, landscaping, hardscaping, masonry, lighting, and irrigation services to residential and commercial clients in North Carolina.</p>
          </div>

          <div>
            <h2 className="font-display text-bark text-lg mb-3">Quotes and Contracts</h2>
            <p>All quotes provided by Yardie Design are estimates. Final pricing is confirmed in a written contract. Work begins only upon execution of a written agreement and receipt of any applicable deposit.</p>
          </div>

          <div>
            <h2 className="font-display text-bark text-lg mb-3">Payments and Billing</h2>
            <p>Payment terms are specified in individual project contracts. All payments are non-refundable unless specifically stated otherwise in the applicable contract.</p>
          </div>

          <div>
            <h2 className="font-display text-bark text-lg mb-3">Intellectual Property</h2>
            <p>All designs, plans, drawings, and content created by Yardie Design remain the intellectual property of Yardie Design unless explicitly transferred in writing.</p>
          </div>

          <div>
            <h2 className="font-display text-bark text-lg mb-3">Governing Law</h2>
            <p>These Terms of Service are governed by the laws of the State of North Carolina.</p>
          </div>

          <div>
            <h2 className="font-display text-bark text-lg mb-3">Contact Us</h2>
            <p>
              Yardie Design<br />
              5036 Winterville Parkway, Winterville, NC 28590<br />
              <a href="tel:+12527567788" className="text-bark hover:text-moss transition-colors">(252) 756-7788</a><br />
              <a href="mailto:hello@yardiedesign.com" className="text-bark hover:text-moss transition-colors">hello@yardiedesign.com</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
