"use client";

import { useState } from "react";
import {
  DraftRule,
  PlanBackground,
  SectionNumber,
} from "@/components/brand";

const serviceOptions = [
  "Landscapes",
  "Hardscapes",
  "Masonry",
  "Lighting",
  "Irrigation",
  "Multiple",
];
const budgetOptions = [
  "Under $5k",
  "$5k – $15k",
  "$15k – $30k",
  "$30k – $60k",
  "$60k+",
  "Not sure yet",
];
const timeframeOptions = [
  "Within 1 month",
  "1 – 3 months",
  "3 – 6 months",
  "6 – 12 months",
  "Planning ahead",
];

export default function ConsultationContent() {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    service: "",
    city: "",
    sqft: "",
    budget: "",
    startTimeframe: "",
    vision: "",
  });

  const update = (field: string, value: string) =>
    setForm((prev) => ({ ...prev, [field]: value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setError("");
    try {
      const res = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("Failed to send");
      setSubmitted(true);
    } catch {
      setError("Something went wrong. Please try again or call us at (252) 756-7788.");
    } finally {
      setSubmitting(false);
    }
  };

  const chipClass = (active: boolean) =>
    `font-mono text-[12px] uppercase tracking-[0.08em] px-4 py-3 border transition-colors ${
      active
        ? "bg-forest text-limestone border-forest"
        : "border-moss/50 text-moss hover:border-forest hover:text-forest"
    }`;

  const primaryBtn =
    "inline-flex items-center justify-center gap-2 bg-forest text-limestone text-[14px] font-medium px-7 py-3.5 hover:bg-ochre hover:text-ink transition-colors disabled:opacity-40 disabled:cursor-not-allowed";
  const ghostBtn =
    "text-moss hover:text-forest transition-colors text-[13px] uppercase tracking-[0.08em] py-3.5";

  return (
    <>
      <section className="relative bg-forest text-limestone pt-40 pb-20 px-6 lg:px-gutter overflow-hidden">
        <PlanBackground variant={3} opacity={0.08} />
        <div className="relative max-w-content mx-auto">
          <p className="eyebrow text-ochre mb-6">FREE CONSULTATION</p>
          <h1
            className="font-display text-limestone text-[clamp(2.5rem,6vw,5rem)] leading-[1.05] tracking-[-0.02em] max-w-[900px]"
            style={{ fontWeight: 500 }}
          >
            Start a project.
          </h1>
          <p className="mt-8 text-limestone/80 text-[19px] leading-[1.6] max-w-[620px]">
            Tell us about the property. A designer will be in touch within one
            business day to schedule a walk-through. There&rsquo;s no cost and no
            commitment.
          </p>
        </div>
      </section>

      <section className="bg-limestone py-section px-6 lg:px-gutter">
        <div className="max-w-[860px] mx-auto">
          {submitted ? (
            <div className="border border-moss/30 p-12 text-center bg-paper">
              <p className="eyebrow text-ochre mb-4">RECEIVED</p>
              <h2
                className="font-display text-forest text-[32px] mb-4 leading-[1.15]"
                style={{ fontWeight: 500 }}
              >
                We&rsquo;ll be in touch.
              </h2>
              <p className="text-ink text-[17px] leading-[1.65] max-w-[480px] mx-auto">
                Thanks for reaching out. A member of our team will contact you
                within one business day to set up your consultation.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate>
              {/* Step indicator */}
              <div className="flex items-center gap-3 mb-12">
                {[1, 2, 3].map((s) => (
                  <div key={s} className="flex items-center gap-3">
                    <div
                      className={`w-8 h-8 flex items-center justify-center text-[12px] font-mono tabular-nums border transition-all duration-200 ${
                        step >= s
                          ? "bg-forest border-forest text-limestone"
                          : "border-moss/40 text-moss"
                      }`}
                    >
                      {step > s ? "✓" : s}
                    </div>
                    {s < 3 && (
                      <div
                        className={`h-px w-8 transition-colors duration-200 ${
                          step > s ? "bg-forest" : "bg-moss/40"
                        }`}
                      />
                    )}
                  </div>
                ))}
                <span className="ml-3 mono-caption uppercase">
                  {step === 1 ? "About you" : step === 2 ? "Your project" : "Your vision"}
                </span>
              </div>

              {/* Step 1 */}
              {step === 1 && (
                <div>
                  <SectionNumber number="01" label="About you" />
                  <DraftRule className="my-8 text-moss/40" />
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-10">
                    <div>
                      <label htmlFor="firstName" className="field-label">
                        First name *
                      </label>
                      <input
                        id="firstName"
                        type="text"
                        required
                        autoComplete="given-name"
                        value={form.firstName}
                        onChange={(e) => update("firstName", e.target.value)}
                        className="field-input"
                        placeholder="Jane"
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="field-label">
                        Last name *
                      </label>
                      <input
                        id="lastName"
                        type="text"
                        required
                        autoComplete="family-name"
                        value={form.lastName}
                        onChange={(e) => update("lastName", e.target.value)}
                        className="field-input"
                        placeholder="Smith"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="field-label">
                        Email *
                      </label>
                      <input
                        id="email"
                        type="email"
                        required
                        autoComplete="email"
                        value={form.email}
                        onChange={(e) => update("email", e.target.value)}
                        className="field-input"
                        placeholder="jane@example.com"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="field-label">
                        Phone
                      </label>
                      <input
                        id="phone"
                        type="tel"
                        autoComplete="tel"
                        value={form.phone}
                        onChange={(e) => update("phone", e.target.value)}
                        className="field-input"
                        placeholder="(252) 000-0000"
                      />
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() => setStep(2)}
                    disabled={!form.firstName || !form.lastName || !form.email}
                    className={primaryBtn}
                  >
                    Continue <span aria-hidden>→</span>
                  </button>
                </div>
              )}

              {/* Step 2 */}
              {step === 2 && (
                <div>
                  <SectionNumber number="02" label="Your project" />
                  <DraftRule className="my-8 text-moss/40" />

                  <div className="space-y-10 mb-10">
                    <div>
                      <label className="field-label block mb-4">
                        What do you want built?
                      </label>
                      <div className="flex flex-wrap gap-2">
                        {serviceOptions.map((opt) => (
                          <button
                            key={opt}
                            type="button"
                            onClick={() => update("service", opt)}
                            className={chipClass(form.service === opt)}
                          >
                            {opt}
                          </button>
                        ))}
                      </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                      <div>
                        <label htmlFor="city" className="field-label">
                          Project city
                        </label>
                        <input
                          id="city"
                          type="text"
                          value={form.city}
                          onChange={(e) => update("city", e.target.value)}
                          className="field-input"
                          placeholder="Greenville"
                        />
                      </div>
                      <div>
                        <label htmlFor="sqft" className="field-label">
                          Approximate Sq. Ft.
                        </label>
                        <input
                          id="sqft"
                          type="text"
                          value={form.sqft}
                          onChange={(e) => update("sqft", e.target.value)}
                          className="field-input"
                          placeholder="e.g. 2,000"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="field-label block mb-4">
                        Budget range
                      </label>
                      <div className="flex flex-wrap gap-2">
                        {budgetOptions.map((opt) => (
                          <button
                            key={opt}
                            type="button"
                            onClick={() => update("budget", opt)}
                            className={chipClass(form.budget === opt)}
                          >
                            {opt}
                          </button>
                        ))}
                      </div>
                    </div>
                    <div>
                      <label className="field-label block mb-4">
                        Start timeframe
                      </label>
                      <div className="flex flex-wrap gap-2">
                        {timeframeOptions.map((opt) => (
                          <button
                            key={opt}
                            type="button"
                            onClick={() => update("startTimeframe", opt)}
                            className={chipClass(form.startTimeframe === opt)}
                          >
                            {opt}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <button type="button" onClick={() => setStep(1)} className={ghostBtn}>
                      ← Back
                    </button>
                    <button type="button" onClick={() => setStep(3)} className={primaryBtn}>
                      Continue <span aria-hidden>→</span>
                    </button>
                  </div>
                </div>
              )}

              {/* Step 3 */}
              {step === 3 && (
                <div>
                  <SectionNumber number="03" label="Your vision" />
                  <DraftRule className="my-8 text-moss/40" />
                  <div className="mb-10">
                    <label htmlFor="vision" className="field-label">
                      What are you picturing? *
                    </label>
                    <textarea
                      id="vision"
                      required
                      rows={6}
                      value={form.vision}
                      onChange={(e) => update("vision", e.target.value)}
                      placeholder="Tell us what you want — style, function, feel, specific features you&rsquo;ve been thinking about. The more detail, the better."
                      className="field-input resize-none mt-3"
                      style={{ paddingTop: "12px" }}
                    />
                  </div>
                  {error && (
                    <p className="text-brick text-[14px] font-sans mb-4">{error}</p>
                  )}
                  <div className="flex items-center gap-4 flex-wrap">
                    <button type="button" onClick={() => setStep(2)} className={ghostBtn}>
                      ← Back
                    </button>
                    <button
                      type="submit"
                      disabled={!form.vision || submitting}
                      className="inline-flex items-center justify-center gap-2 bg-ochre text-ink text-[14px] font-medium px-7 py-3.5 hover:bg-forest hover:text-limestone transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
                    >
                      {submitting ? "Sending…" : "Submit request"}
                      <span aria-hidden>→</span>
                    </button>
                  </div>
                </div>
              )}
            </form>
          )}

          {/* Trust signals */}
          {!submitted && (
            <div className="mt-20 pt-12 border-t border-moss/30 grid grid-cols-1 sm:grid-cols-3 gap-8">
              {[
                ["01 · Free", "First consultation is always on us. No commitment."],
                ["02 · Local", "Winterville HQ. We know the soil, the climate, the neighborhoods."],
                ["03 · Fast", "We respond to every inquiry within one business day."],
              ].map(([title, body]) => (
                <div key={title}>
                  <p className="mono-caption uppercase text-ochre mb-2">{title}</p>
                  <p className="text-ink text-[15px] leading-[1.55]">{body}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
