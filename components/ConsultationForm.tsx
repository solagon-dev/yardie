"use client";

import { useState, useRef, useEffect } from "react";
import { submitForm } from "@/lib/form-handler";

const inputBase =
  "w-full border-0 border-b bg-transparent px-0 py-3.5 text-[15px] text-bark placeholder:text-clay/55 outline-none transition-colors focus:border-moss";
const inputNormal = `${inputBase} border-clay/30`;
const inputError = `${inputBase} border-terracotta focus:border-terracotta`;
const labelCls = "block text-[11px] uppercase tracking-[0.22em] font-medium text-clay mb-2";

const SERVICES = ["Landscapes", "Pavers & Hardscapes", "Outdoor Kitchens", "Masonry", "Lighting", "Irrigation", "Multiple / Not sure"];
const BUDGETS = ["Under $25k", "$25k–$50k", "$50k–$100k", "$100k–$250k", "$250k+"];
const TIMEFRAMES = ["This season", "Within 6 months", "Within a year", "Exploratory"];

// Single-word labels stay on one line at every breakpoint — the
// section headings inside each step still spell out the full context
// ("Tell us about you.", "Timeline & budget.", etc.).
const STEPS = [
  { id: 1, label: "About" },
  { id: 2, label: "Project" },
  { id: 3, label: "Timeline" },
  { id: 4, label: "Vision" },
];

type FormState = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  service: string;
  city: string;
  state: string;
  squareFootage: string;
  budget: string;
  startTimeframe: string;
  endTimeframe: string;
  vision: string;
};

const INITIAL: FormState = {
  firstName: "", lastName: "", email: "", phone: "",
  service: "", city: "", state: "NC", squareFootage: "",
  budget: "", startTimeframe: "", endTimeframe: "",
  vision: "",
};

export default function ConsultationForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [step, setStep] = useState(1);
  const [data, setData] = useState<FormState>(INITIAL);
  const [errors, setErrors] = useState<Record<string, boolean>>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  // Only scroll once the user has advanced past step 1. The previous
  // ref-based "skip first render" guard didn't survive StrictMode's
  // double-effect — the ref persisted, the second effect fired, and
  // page-load visitors got bumped past the hero.
  useEffect(() => {
    if (step > 1 && formRef.current) {
      formRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [step]);

  function set<K extends keyof FormState>(key: K, value: FormState[K]) {
    setData((d) => ({ ...d, [key]: value }));
    setErrors((e) => ({ ...e, [key]: false }));
  }

  function validateStep(s: number): boolean {
    const e: Record<string, boolean> = {};
    if (s === 1) {
      if (!data.firstName.trim()) e.firstName = true;
      if (!data.lastName.trim()) e.lastName = true;
      if (!data.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) e.email = true;
      if (!data.phone.trim()) e.phone = true;
    } else if (s === 2) {
      if (!data.service) e.service = true;
      if (!data.city.trim()) e.city = true;
    } else if (s === 3) {
      if (!data.budget) e.budget = true;
      if (!data.startTimeframe) e.startTimeframe = true;
    } else if (s === 4) {
      if (!data.vision.trim()) e.vision = true;
    }
    setErrors(e);
    return Object.keys(e).length === 0;
  }

  function next() {
    if (validateStep(step)) setStep((s) => Math.min(STEPS.length, s + 1));
  }

  function prev() {
    setStep((s) => Math.max(1, s - 1));
  }

  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!validateStep(4)) return;

    setStatus("submitting");
    setErrorMsg("");

    const payload = {
      name: `${data.firstName} ${data.lastName}`.trim(),
      email: data.email,
      phone: data.phone,
      city: `${data.city}, ${data.state}`,
      service: data.service,
      squareFootage: data.squareFootage,
      budget: data.budget,
      startTimeframe: data.startTimeframe,
      endTimeframe: data.endTimeframe,
      vision: data.vision,
    };

    try {
      const result = await submitForm("consultation", payload as Record<string, string>);
      if (result.success) {
        setStatus("success");
        setData(INITIAL);
      } else {
        setStatus("error");
        setErrorMsg(result.message);
      }
    } catch {
      setStatus("error");
      setErrorMsg("Something went wrong. Please try again or call us directly.");
    }
  }

  if (status === "success") {
    return (
      <div className="text-center py-20">
        <div className="h-16 w-16 border border-moss/40 flex items-center justify-center mx-auto mb-7">
          <svg className="h-7 w-7 text-moss" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
          </svg>
        </div>
        <h3 className="font-display text-4xl sm:text-5xl text-bark mb-4 font-light tracking-tight">
          Thank you.
        </h3>
        <p className="text-[16px] text-clay leading-relaxed max-w-md mx-auto">
          We&rsquo;ve received your project details. A member of the Yardie team will reach out within 24 hours to set up a property visit.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-cream">
      {/* Stepper — circles centered on a single connector line that
          fills with moss as the user advances. Labels sit below each
          circle, single-word so they don't wrap or fight each other. */}
      <div className="relative mb-10 lg:mb-14">
        {/* Background track + filled progress — sit behind the circles
            and span exactly between the first and last circle centers. */}
        <div aria-hidden className="absolute top-4 left-4 right-4 h-px bg-clay/20" />
        <div
          aria-hidden
          className="absolute top-4 left-4 h-px bg-moss transition-[width] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]"
          style={{
            width: `calc(${
              ((Math.min(step, STEPS.length) - 1) / (STEPS.length - 1)) * 100
            }% - ${
              ((Math.min(step, STEPS.length) - 1) / (STEPS.length - 1)) * 32
            }px)`,
          }}
        />

        <ol className="relative flex items-start justify-between">
          {STEPS.map((s) => {
            const done = step > s.id;
            const active = step === s.id;
            return (
              <li key={s.id} className="flex flex-col items-center text-center">
                <span
                  className={`relative z-10 inline-flex items-center justify-center h-8 w-8 rounded-full border text-[12px] font-medium transition-colors duration-300 ${
                    done
                      ? "bg-moss border-moss text-cream"
                      : active
                      ? "bg-cream border-bark text-bark"
                      : "bg-cream border-clay/30 text-clay/50"
                  }`}
                >
                  {done ? (
                    <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" strokeWidth={2.25} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                    </svg>
                  ) : (
                    s.id
                  )}
                </span>
                <span
                  className={`mt-3 text-[10.5px] tracking-[0.22em] uppercase whitespace-nowrap transition-colors duration-300 ${
                    active ? "text-bark font-medium" : done ? "text-clay/80" : "text-clay/50"
                  }`}
                >
                  {s.label}
                </span>
              </li>
            );
          })}
        </ol>
      </div>

      <form ref={formRef} onSubmit={submit} noValidate>
        {status === "error" && (
          <div className="mb-6 p-4 bg-terracotta/10 border border-terracotta/40">
            <p className="text-[13px] text-terracotta font-medium">{errorMsg}</p>
          </div>
        )}

        {/* Step 1 */}
        {step === 1 && (
          <div className="space-y-7">
            <div>
              <h3 className="font-display text-3xl sm:text-4xl text-bark font-light tracking-tight">Tell us about you.</h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label htmlFor="firstName" className={labelCls}>First Name <span className="text-terracotta">*</span></label>
                <input id="firstName" type="text" required className={errors.firstName ? inputError : inputNormal}
                  value={data.firstName} onChange={(e) => set("firstName", e.target.value)} placeholder="Jane" />
              </div>
              <div>
                <label htmlFor="lastName" className={labelCls}>Last Name <span className="text-terracotta">*</span></label>
                <input id="lastName" type="text" required className={errors.lastName ? inputError : inputNormal}
                  value={data.lastName} onChange={(e) => set("lastName", e.target.value)} placeholder="Doe" />
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label htmlFor="email" className={labelCls}>Email <span className="text-terracotta">*</span></label>
                <input id="email" type="email" required className={errors.email ? inputError : inputNormal}
                  value={data.email} onChange={(e) => set("email", e.target.value)} placeholder="you@email.com" />
              </div>
              <div>
                <label htmlFor="phone" className={labelCls}>Phone <span className="text-terracotta">*</span></label>
                <input id="phone" type="tel" required className={errors.phone ? inputError : inputNormal}
                  value={data.phone} onChange={(e) => set("phone", e.target.value)} placeholder="(252) 555-0123" />
              </div>
            </div>
          </div>
        )}

        {/* Step 2 */}
        {step === 2 && (
          <div className="space-y-7">
            <div>
              <h3 className="font-display text-3xl sm:text-4xl text-bark font-light tracking-tight">The project.</h3>
            </div>
            <div>
              <label className={labelCls}>Primary service <span className="text-terracotta">*</span></label>
              <div className="flex flex-wrap gap-2 mt-1">
                {SERVICES.map((s) => (
                  <button
                    key={s}
                    type="button"
                    onClick={() => set("service", s)}
                    className={`px-4 py-2 text-[13px] tracking-wide border transition-colors ${
                      data.service === s
                        ? "bg-bark text-cream border-bark"
                        : "bg-cream text-bark border-clay/30 hover:border-bark"
                    }`}
                  >
                    {s}
                  </button>
                ))}
              </div>
              {errors.service && <p className="text-[11px] text-terracotta mt-2">Please select a service</p>}
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              <div className="sm:col-span-2">
                <label htmlFor="city" className={labelCls}>City <span className="text-terracotta">*</span></label>
                <input id="city" type="text" required className={errors.city ? inputError : inputNormal}
                  value={data.city} onChange={(e) => set("city", e.target.value)} placeholder="Greenville" />
              </div>
              <div>
                <label htmlFor="state" className={labelCls}>State</label>
                <input id="state" type="text" className={inputNormal}
                  value={data.state} onChange={(e) => set("state", e.target.value)} placeholder="NC" />
              </div>
            </div>
            <div>
              <label htmlFor="sqft" className={labelCls}>Approximate property / project size (sq. ft.)</label>
              <input id="sqft" type="text" className={inputNormal}
                value={data.squareFootage} onChange={(e) => set("squareFootage", e.target.value)} placeholder="e.g. 4,500" />
            </div>
          </div>
        )}

        {/* Step 3 */}
        {step === 3 && (
          <div className="space-y-7">
            <div>
              <h3 className="font-display text-3xl sm:text-4xl text-bark font-light tracking-tight">Timeline & budget.</h3>
              <p className="mt-3 max-w-xl text-[14.5px] text-clay leading-relaxed">
                Honest ranges help us recommend an honest direction. Numbers won&rsquo;t lock you in — they help us decide whether we&rsquo;re a fit.
              </p>
            </div>
            <div>
              <label className={labelCls}>Construction budget <span className="text-terracotta">*</span></label>
              <div className="flex flex-wrap gap-2 mt-1">
                {BUDGETS.map((b) => (
                  <button
                    key={b}
                    type="button"
                    onClick={() => set("budget", b)}
                    className={`px-4 py-2 text-[13px] border transition-colors ${
                      data.budget === b
                        ? "bg-bark text-cream border-bark"
                        : "bg-cream text-bark border-clay/30 hover:border-bark"
                    }`}
                  >
                    {b}
                  </button>
                ))}
              </div>
              {errors.budget && <p className="text-[11px] text-terracotta mt-2">Please select a budget range</p>}
            </div>
            <div>
              <label className={labelCls}>When would you like to begin? <span className="text-terracotta">*</span></label>
              <div className="flex flex-wrap gap-2 mt-1">
                {TIMEFRAMES.map((t) => (
                  <button
                    key={t}
                    type="button"
                    onClick={() => set("startTimeframe", t)}
                    className={`px-4 py-2 text-[13px] border transition-colors ${
                      data.startTimeframe === t
                        ? "bg-bark text-cream border-bark"
                        : "bg-cream text-bark border-clay/30 hover:border-bark"
                    }`}
                  >
                    {t}
                  </button>
                ))}
              </div>
              {errors.startTimeframe && <p className="text-[11px] text-terracotta mt-2">Please choose a starting timeframe</p>}
            </div>
            <div>
              <label htmlFor="endTimeframe" className={labelCls}>Any deadline or completion target?</label>
              <input id="endTimeframe" type="text" className={inputNormal}
                value={data.endTimeframe} onChange={(e) => set("endTimeframe", e.target.value)} placeholder="e.g. before next summer" />
            </div>
          </div>
        )}

        {/* Step 4 */}
        {step === 4 && (
          <div className="space-y-7">
            <div>
              <h3 className="font-display text-3xl sm:text-4xl text-bark font-light tracking-tight">Your vision.</h3>
              <p className="mt-3 max-w-xl text-[14.5px] text-clay leading-relaxed">
                Tell us what you&rsquo;re imagining — even in fragments. Photos and references can come later; the words are what start the design.
              </p>
            </div>
            <div>
              <label htmlFor="vision" className={labelCls}>What are you imagining? <span className="text-terracotta">*</span></label>
              <textarea
                id="vision" rows={6} required className={`${errors.vision ? inputError : inputNormal} resize-y`}
                value={data.vision} onChange={(e) => set("vision", e.target.value)}
                placeholder="A rear terrace for entertaining, a front-yard refresh, a long-term masonry plan..."
              />
            </div>
          </div>
        )}

        {/* Footer */}
        <div className="mt-12 flex items-center justify-between gap-4 pt-8 border-t border-border">
          <button
            type="button"
            onClick={prev}
            disabled={step === 1}
            className="text-[11px] tracking-[0.22em] uppercase font-medium text-clay disabled:opacity-30 disabled:cursor-not-allowed hover:text-bark transition-colors"
          >
            ← Back
          </button>

          {step < STEPS.length ? (
            <button
              type="button"
              onClick={next}
              className="group inline-flex items-center justify-center gap-2.5 px-9 py-4 bg-bark text-cream text-[12px] tracking-[0.22em] uppercase font-medium hover:bg-earth transition-colors"
            >
              Continue
              <svg className="h-4 w-4 transition-transform group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" strokeWidth={1.75} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
              </svg>
            </button>
          ) : (
            <button
              type="submit"
              disabled={status === "submitting"}
              className="group inline-flex items-center justify-center gap-2.5 px-9 py-4 bg-bark text-cream text-[12px] tracking-[0.22em] uppercase font-medium hover:bg-earth disabled:opacity-60 disabled:cursor-not-allowed transition-colors"
            >
              {status === "submitting" ? "Submitting..." : "Submit"}
              {status !== "submitting" && (
                <svg className="h-4 w-4 transition-transform group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" strokeWidth={1.75} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                </svg>
              )}
            </button>
          )}
        </div>

        <p className="pt-6 text-[10.5px] text-clay/65 leading-relaxed">
          By submitting this form you agree to our{" "}
          <a href="/legal/privacy-policy" className="underline underline-offset-2 hover:text-bark transition-colors">Privacy Policy</a>{" "}
          and{" "}
          <a href="/legal/terms-of-service" className="underline underline-offset-2 hover:text-bark transition-colors">Terms of Service</a>.
          This site is protected by reCAPTCHA and the Google{" "}
          <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 hover:text-bark transition-colors">Privacy Policy</a>{" "}
          and{" "}
          <a href="https://policies.google.com/terms" target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 hover:text-bark transition-colors">Terms of Service</a>{" "}
          apply.
        </p>
      </form>
    </div>
  );
}
