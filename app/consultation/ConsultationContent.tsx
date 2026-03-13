'use client';

import { useState } from 'react';
import RevealOnScroll from '@/components/ui/RevealOnScroll';
import SectionLabel from '@/components/ui/SectionLabel';

const serviceOptions = ['Landscapes', 'Hardscapes', 'Masonry', 'Lighting', 'Irrigation', 'Multiple Services'];
const budgetOptions = ['Under $5,000', '$5,000 – $15,000', '$15,000 – $30,000', '$30,000 – $60,000', '$60,000+', 'Not sure yet'];
const timeframeOptions = ['Within 1 month', '1–3 months', '3–6 months', '6–12 months', 'Planning ahead'];

export default function ConsultationContent() {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    service: '',
    city: '',
    sqft: '',
    budget: '',
    startTimeframe: '',
    vision: '',
  });

  const update = (field: string, value: string) =>
    setForm((prev) => ({ ...prev, [field]: value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setError('');
    try {
      const res = await fetch('/api/consultation', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error('Failed to send');
      setSubmitted(true);
    } catch {
      setError('Something went wrong. Please try again or call us at (252) 756-7788.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      {/* ── HERO ── */}
      <section className="bg-cream-alt pt-[72px]" aria-label="Consultation hero">
        <div className="max-w-[1320px] mx-auto px-6 lg:px-[clamp(24px,5vw,80px)] pt-20 pb-16 lg:pt-28 lg:pb-20 text-center">
          <SectionLabel className="mb-8 animate-fade-up opacity-0" style={{ animationFillMode: 'forwards' }}>
            Free Consultation
          </SectionLabel>
          <h1
            className="font-display text-bark text-balance mx-auto animate-fade-up opacity-0"
            style={{
              fontSize: 'clamp(2rem,5.5vw,5rem)',
              lineHeight: '1.02',
              fontWeight: 300,
              maxWidth: '660px',
              animationDelay: '0.1s',
              animationFillMode: 'forwards',
            }}
          >
            Let&apos;s talk about<br /><em>your space.</em>
          </h1>
          <p
            className="text-clay text-[15px] leading-[1.75] mt-8 max-w-[440px] mx-auto animate-fade-up opacity-0"
            style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}
          >
            Fill out the form below and one of our designers will contact you within one business day to schedule your complimentary site consultation.
          </p>
        </div>
      </section>

      {/* ── FORM ── */}
      <section className="bg-cream py-16 lg:py-24 px-6 lg:px-[clamp(24px,5vw,80px)]">
        <div className="max-w-[860px] mx-auto">
          {submitted ? (
            <RevealOnScroll className="text-center py-20">
              <div className="w-14 h-14 rounded-full bg-moss/15 flex items-center justify-center mx-auto mb-8">
                <svg width="22" height="18" viewBox="0 0 22 18" fill="none">
                  <path d="M1 9L8 16L21 1" stroke="#6B7A5C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h2 className="font-display text-bark text-3xl mb-4">We&apos;ll be in touch.</h2>
              <p className="text-clay text-[15px] leading-[1.75] max-w-[400px] mx-auto">
                Thank you for reaching out. A member of our team will contact you within one business day to schedule your consultation.
              </p>
            </RevealOnScroll>
          ) : (
            <form onSubmit={handleSubmit} noValidate>
              {/* Step indicator */}
              <div className="flex items-center gap-3 mb-14">
                {[1, 2, 3].map((s) => (
                  <div key={s} className="flex items-center gap-3">
                    <div className={`w-7 h-7 rounded-full flex items-center justify-center text-[11px] font-[500] tracking-wide border transition-all duration-200 ${
                      step >= s ? 'bg-bark border-bark text-cream' : 'border-border-warm text-clay'
                    }`}>
                      {step > s ? (
                        <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                          <path d="M1 4L3.5 6.5L9 1" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      ) : s}
                    </div>
                    {s < 3 && (
                      <div className={`flex-1 h-px w-8 transition-colors duration-200 ${step > s ? 'bg-bark' : 'bg-border-warm'}`} />
                    )}
                  </div>
                ))}
                <span className="ml-3 label">
                  {step === 1 ? 'About You' : step === 2 ? 'Your Project' : 'Your Vision'}
                </span>
              </div>

              {/* Step 1: Contact */}
              {step === 1 && (
                <RevealOnScroll>
                  <h2 className="font-display text-bark mb-10" style={{ fontSize: 'clamp(1.5rem,2.5vw,2rem)', fontWeight: 400 }}>
                    Tell us about yourself
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 mb-10">
                    <div>
                      <label htmlFor="firstName" className="field-label">First Name *</label>
                      <input id="firstName" type="text" required autoComplete="given-name" value={form.firstName} onChange={e => update('firstName', e.target.value)} className="field-input" placeholder="Jane" />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="field-label">Last Name *</label>
                      <input id="lastName" type="text" required autoComplete="family-name" value={form.lastName} onChange={e => update('lastName', e.target.value)} className="field-input" placeholder="Smith" />
                    </div>
                    <div>
                      <label htmlFor="email" className="field-label">Email Address *</label>
                      <input id="email" type="email" required autoComplete="email" value={form.email} onChange={e => update('email', e.target.value)} className="field-input" placeholder="jane@example.com" />
                    </div>
                    <div>
                      <label htmlFor="phone" className="field-label">Phone Number</label>
                      <input id="phone" type="tel" autoComplete="tel" value={form.phone} onChange={e => update('phone', e.target.value)} className="field-input" placeholder="(252) 000-0000" />
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() => setStep(2)}
                    disabled={!form.firstName || !form.lastName || !form.email}
                    className="inline-block bg-bark text-cream text-[11px] tracking-[0.12em] uppercase font-[500] px-10 py-4 hover:bg-earth transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
                    style={{ borderRadius: '2px' }}
                  >
                    Continue →
                  </button>
                </RevealOnScroll>
              )}

              {/* Step 2: Project */}
              {step === 2 && (
                <RevealOnScroll>
                  <h2 className="font-display text-bark mb-10" style={{ fontSize: 'clamp(1.5rem,2.5vw,2rem)', fontWeight: 400 }}>
                    About your project
                  </h2>
                  <div className="space-y-10 mb-10">
                    <div>
                      <label className="field-label block mb-4">Service Type</label>
                      <div className="flex flex-wrap gap-2">
                        {serviceOptions.map((opt) => (
                          <button
                            key={opt}
                            type="button"
                            onClick={() => update('service', opt)}
                            className={`text-[11px] tracking-[0.1em] uppercase px-4 py-3 border transition-colors ${
                              form.service === opt
                                ? 'bg-bark text-cream border-bark'
                                : 'border-border-warm text-clay hover:border-bark hover:text-bark'
                            }`}
                            style={{ borderRadius: '2px' }}
                          >
                            {opt}
                          </button>
                        ))}
                      </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
                      <div>
                        <label htmlFor="city" className="field-label">Project City</label>
                        <input id="city" type="text" value={form.city} onChange={e => update('city', e.target.value)} className="field-input" placeholder="Greenville" />
                      </div>
                      <div>
                        <label htmlFor="sqft" className="field-label">Approximate Sq. Ft.</label>
                        <input id="sqft" type="text" value={form.sqft} onChange={e => update('sqft', e.target.value)} className="field-input" placeholder="e.g. 2,000" />
                      </div>
                    </div>
                    <div>
                      <label className="field-label block mb-4">Budget Range</label>
                      <div className="flex flex-wrap gap-2">
                        {budgetOptions.map((opt) => (
                          <button
                            key={opt}
                            type="button"
                            onClick={() => update('budget', opt)}
                            className={`text-[11px] tracking-[0.1em] uppercase px-4 py-3 border transition-colors ${
                              form.budget === opt
                                ? 'bg-bark text-cream border-bark'
                                : 'border-border-warm text-clay hover:border-bark hover:text-bark'
                            }`}
                            style={{ borderRadius: '2px' }}
                          >
                            {opt}
                          </button>
                        ))}
                      </div>
                    </div>
                    <div>
                      <label className="field-label block mb-4">Desired Start Timeframe</label>
                      <div className="flex flex-wrap gap-2">
                        {timeframeOptions.map((opt) => (
                          <button
                            key={opt}
                            type="button"
                            onClick={() => update('startTimeframe', opt)}
                            className={`text-[11px] tracking-[0.1em] uppercase px-4 py-3 border transition-colors ${
                              form.startTimeframe === opt
                                ? 'bg-bark text-cream border-bark'
                                : 'border-border-warm text-clay hover:border-bark hover:text-bark'
                            }`}
                            style={{ borderRadius: '2px' }}
                          >
                            {opt}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <button type="button" onClick={() => setStep(1)} className="text-clay text-[11px] tracking-[0.1em] uppercase hover:text-bark transition-colors py-4">
                      ← Back
                    </button>
                    <button
                      type="button"
                      onClick={() => setStep(3)}
                      className="inline-block bg-bark text-cream text-[11px] tracking-[0.12em] uppercase font-[500] px-10 py-4 hover:bg-earth transition-colors"
                      style={{ borderRadius: '2px' }}
                    >
                      Continue →
                    </button>
                  </div>
                </RevealOnScroll>
              )}

              {/* Step 3: Vision */}
              {step === 3 && (
                <RevealOnScroll>
                  <h2 className="font-display text-bark mb-10" style={{ fontSize: 'clamp(1.5rem,2.5vw,2rem)', fontWeight: 400 }}>
                    Describe your vision
                  </h2>
                  <div className="mb-10">
                    <label htmlFor="vision" className="field-label">What are you imagining? *</label>
                    <textarea
                      id="vision"
                      required
                      rows={6}
                      value={form.vision}
                      onChange={e => update('vision', e.target.value)}
                      placeholder="Tell us what you're envisioning for your outdoor space — style, function, feel, specific features. The more detail, the better."
                      className="field-input resize-none mt-3"
                      style={{ borderBottom: '1px solid var(--color-border-warm)' }}
                    />
                  </div>
                  {error && (
                    <p className="text-red-600 text-[13px] mb-4">{error}</p>
                  )}
                  <div className="flex gap-4 flex-wrap">
                    <button type="button" onClick={() => setStep(2)} className="text-clay text-[11px] tracking-[0.1em] uppercase hover:text-bark transition-colors py-4">
                      ← Back
                    </button>
                    <button
                      type="submit"
                      disabled={!form.vision || submitting}
                      className="inline-block bg-moss text-cream text-[11px] tracking-[0.12em] uppercase font-[500] px-10 py-4 hover:bg-moss-dark transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
                      style={{ borderRadius: '2px' }}
                    >
                      {submitting ? 'Sending…' : 'Submit Request'}
                    </button>
                  </div>
                </RevealOnScroll>
              )}
            </form>
          )}

          {/* Trust signals below form */}
          {!submitted && (
            <RevealOnScroll delay={0.2} className="mt-16 pt-12 border-t border-border-light grid grid-cols-1 sm:grid-cols-3 gap-8">
              {[
                ['Complimentary', 'Initial consultations are always free — no cost, no obligation.'],
                ['Local Expertise', 'Based in Greenville, NC. We know this market, this climate, these neighborhoods.'],
                ['Response in 24hrs', 'We respond to every inquiry within one business day.'],
              ].map(([title, body]) => (
                <div key={title}>
                  <p className="font-display text-bark mb-2" style={{ fontSize: '1.1rem', fontWeight: 400 }}>{title}</p>
                  <p className="text-clay text-[13px] leading-[1.7]">{body}</p>
                </div>
              ))}
            </RevealOnScroll>
          )}
        </div>
      </section>
    </>
  );
}
