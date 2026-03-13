import type { Metadata } from 'next';
import SectionLabel from '@/components/ui/SectionLabel';

export const metadata: Metadata = {
  title: 'Privacy Policy | Yardie Design',
  robots: { index: false },
};

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-cream pt-[72px] min-h-screen">
      <div className="max-w-[720px] mx-auto px-6 py-20 lg:py-28">
        <SectionLabel className="mb-6">Legal</SectionLabel>
        <h1 className="font-display text-bark mb-12" style={{ fontSize: 'clamp(2rem,4vw,3rem)', fontWeight: 300 }}>
          Privacy Policy
        </h1>
        <div className="space-y-8 text-clay text-[14px] leading-[1.8]">
          <p>Last updated: 2024</p>
          <p>Yardie Design (&quot;Yardie,&quot; &quot;we,&quot; &quot;us&quot;) is committed to protecting your personal information and your right to privacy.</p>

          <div>
            <h2 className="font-display text-bark text-lg mb-3">Information We Collect</h2>
            <p>We collect information you provide directly — including name, email address, phone number, and project details submitted through our contact and consultation forms. We may also collect standard technical data such as IP addresses and browser types when you visit our website.</p>
          </div>

          <div>
            <h2 className="font-display text-bark text-lg mb-3">How We Use Your Information</h2>
            <p>We use the information we collect to respond to your inquiries, schedule consultations, deliver our services, send relevant communications (with your consent), and improve our website and service offerings.</p>
          </div>

          <div>
            <h2 className="font-display text-bark text-lg mb-3">How We Share Your Information</h2>
            <p>Yardie does not sell, rent, or trade your personal information. We may share information with trusted service providers who assist in operating our business, subject to confidentiality obligations.</p>
          </div>

          <div>
            <h2 className="font-display text-bark text-lg mb-3">Data Security</h2>
            <p>We implement reasonable security measures to protect your personal information. However, no transmission over the internet is completely secure, and we cannot guarantee absolute security.</p>
          </div>

          <div>
            <h2 className="font-display text-bark text-lg mb-3">Your Rights</h2>
            <p>You may request access to, correction of, or deletion of your personal data by contacting us at the information below.</p>
          </div>

          <div>
            <h2 className="font-display text-bark text-lg mb-3">Contact Us</h2>
            <p>
              For privacy-related questions:<br />
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
