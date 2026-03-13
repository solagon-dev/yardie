'use client';

import { useState } from 'react';
import RevealOnScroll from '@/components/ui/RevealOnScroll';
import SectionLabel from '@/components/ui/SectionLabel';
import Button from '@/components/ui/Button';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setError('');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (!res.ok) throw new Error('Failed to send');
      setSubmitted(true);
    } catch {
      setError('Something went wrong. Please try again or call (252) 756-7788.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="bg-cream py-20 lg:py-32 px-6 lg:px-[clamp(24px,5vw,80px)]">
      <div className="max-w-[1320px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">

        {/* Contact details */}
        <RevealOnScroll>
          <SectionLabel className="mb-8">Contact Details</SectionLabel>
          <address className="not-italic space-y-10">
            <div>
              <p className="label mb-3">Phone</p>
              <a href="tel:+12527567788" className="font-display text-bark hover:text-moss transition-colors" style={{ fontSize: 'clamp(1.3rem,2vw,1.75rem)', fontWeight: 400 }}>
                (252) 756-7788
              </a>
            </div>
            <div>
              <p className="label mb-3">Email</p>
              <a href="mailto:hello@yardiedesign.com" className="font-display text-bark hover:text-moss transition-colors" style={{ fontSize: 'clamp(1.1rem,1.8vw,1.5rem)', fontWeight: 400 }}>
                hello@yardiedesign.com
              </a>
            </div>
            <div>
              <p className="label mb-3">Address</p>
              <p className="text-clay text-[15px] leading-[1.75]">
                5036 Winterville Parkway<br />
                Winterville, NC 28590
              </p>
            </div>
            <div>
              <p className="label mb-3">Service Area</p>
              <p className="text-clay text-[14px] leading-[1.75]">
                Greenville, Winterville, Farmville, Ayden,<br />
                and the greater Pitt County region.
              </p>
            </div>
          </address>

          <div className="mt-12 pt-10 border-t border-border-light">
            <p className="text-clay text-[14px] mb-6 leading-relaxed">
              For new project inquiries, our consultation form gives us the context we need to have the most productive first conversation.
            </p>
            <Button href="/consultation" variant="primary" size="md">Schedule a Consultation</Button>
          </div>
        </RevealOnScroll>

        {/* Form */}
        <RevealOnScroll delay={0.1}>
          <SectionLabel className="mb-8">Send a Message</SectionLabel>
          {submitted ? (
            <div className="py-16 text-center border border-border-light">
              <div className="w-10 h-10 rounded-full bg-moss/15 flex items-center justify-center mx-auto mb-6">
                <svg width="18" height="14" viewBox="0 0 18 14" fill="none">
                  <path d="M1 7L6.5 12.5L17 1" stroke="#6B7A5C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="font-display text-bark text-xl mb-3">Message received.</h3>
              <p className="text-clay text-[14px] max-w-[320px] mx-auto leading-relaxed">
                We&apos;ll be in touch within one business day. Looking forward to connecting.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="space-y-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div>
                  <label htmlFor="name" className="field-label">Full Name</label>
                  <input
                    id="name"
                    type="text"
                    required
                    autoComplete="name"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="field-input"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="field-label">Phone</label>
                  <input
                    id="phone"
                    type="tel"
                    autoComplete="tel"
                    placeholder="(252) 000-0000"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="field-input"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="email" className="field-label">Email Address</label>
                <input
                  id="email"
                  type="email"
                  required
                  autoComplete="email"
                  placeholder="your@email.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="field-input"
                />
              </div>
              <div>
                <label htmlFor="message" className="field-label">Message</label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  placeholder="Tell us about your project or question…"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="field-input resize-none"
                  style={{ borderBottom: '1px solid var(--color-border-warm)', paddingTop: '12px' }}
                />
              </div>
              {error && <p className="text-red-600 text-[13px]">{error}</p>}
              <button
                type="submit"
                disabled={submitting}
                className="inline-block bg-bark text-cream text-[11px] tracking-[0.12em] uppercase font-[500] px-10 py-4 hover:bg-earth transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
                style={{ borderRadius: '2px' }}
              >
                {submitting ? 'Sending…' : 'Send Message'}
              </button>
            </form>
          )}
        </RevealOnScroll>
      </div>
    </section>
  );
}
