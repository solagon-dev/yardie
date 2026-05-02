"use client";

import { useState, useRef } from "react";
import { submitForm } from "@/lib/form-handler";

const inputBase =
  "w-full border-0 border-b bg-transparent px-0 py-3.5 text-[15px] text-bark placeholder:text-clay/55 outline-none transition-colors focus:border-moss";
const inputNormal = `${inputBase} border-clay/30`;
const inputError = `${inputBase} border-terracotta focus:border-terracotta`;
const labelCls = "block text-[11px] uppercase tracking-[0.22em] font-medium text-clay mb-2";

export default function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const [fieldErrors, setFieldErrors] = useState<Record<string, boolean>>({});

  function validate(form: HTMLFormElement): boolean {
    const data = new FormData(form);
    const errors: Record<string, boolean> = {};
    if (!data.get("name")?.toString().trim()) errors.name = true;
    const email = data.get("email")?.toString().trim() || "";
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errors.email = true;
    if (!data.get("message")?.toString().trim()) errors.message = true;
    setFieldErrors(errors);
    return Object.keys(errors).length === 0;
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    if (!validate(form)) return;

    setStatus("submitting");
    setErrorMsg("");

    try {
      const data = Object.fromEntries(new FormData(form));
      const result = await submitForm("contact", data as Record<string, string>);
      if (result.success) {
        setStatus("success");
        form.reset();
        setFieldErrors({});
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
      <div className="text-center py-14">
        <div className="h-14 w-14 border border-moss/40 flex items-center justify-center mx-auto mb-6">
          <svg className="h-6 w-6 text-moss" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
          </svg>
        </div>
        <h3 className="font-display text-3xl text-bark mb-3 font-light tracking-tight">Thank you.</h3>
        <p className="text-[14.5px] text-clay leading-relaxed max-w-sm mx-auto">
          The Yardie team will review your message and follow up within one business day.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="group mt-7 inline-flex items-center justify-center gap-3 text-[11px] tracking-[0.22em] uppercase font-medium text-moss hover:text-bark transition-colors"
        >
          <span aria-hidden className="block h-px w-6 bg-moss group-hover:w-10 group-hover:bg-bark transition-all duration-500 ease-out" />
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form ref={formRef} className="space-y-5" onSubmit={handleSubmit} noValidate>
      {status === "error" && (
        <div className="p-4 bg-terracotta/10 border border-terracotta/40">
          <p className="text-[13px] text-terracotta font-medium">{errorMsg}</p>
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="cf-name" className={labelCls}>Name <span className="text-terracotta">*</span></label>
          <input
            type="text" id="cf-name" name="name" required
            className={fieldErrors.name ? inputError : inputNormal}
            placeholder="Your full name"
            onChange={() => setFieldErrors((e) => ({ ...e, name: false }))}
          />
          {fieldErrors.name && <p className="text-[11px] text-terracotta mt-2">Please enter your name</p>}
        </div>
        <div>
          <label htmlFor="cf-email" className={labelCls}>Email <span className="text-terracotta">*</span></label>
          <input
            type="email" id="cf-email" name="email" required
            className={fieldErrors.email ? inputError : inputNormal}
            placeholder="you@email.com"
            onChange={() => setFieldErrors((e) => ({ ...e, email: false }))}
          />
          {fieldErrors.email && <p className="text-[11px] text-terracotta mt-2">Please enter a valid email</p>}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="cf-phone" className={labelCls}>Phone</label>
          <input type="tel" id="cf-phone" name="phone" className={inputNormal} placeholder="(252) 555-0123" />
        </div>
        <div>
          <label htmlFor="cf-city" className={labelCls}>City / Area</label>
          <input type="text" id="cf-city" name="city" className={inputNormal} placeholder="Greenville, NC" />
        </div>
      </div>

      <div>
        <label htmlFor="cf-message" className={labelCls}>Message <span className="text-terracotta">*</span></label>
        <textarea
          id="cf-message" name="message" rows={5} required
          className={`${fieldErrors.message ? inputError : inputNormal} resize-y`}
          placeholder="Tell us a little about what you're imagining."
          onChange={() => setFieldErrors((e) => ({ ...e, message: false }))}
        />
        {fieldErrors.message && <p className="text-[11px] text-terracotta mt-2">Please enter a message</p>}
      </div>

      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pt-2">
        <button
          type="submit"
          disabled={status === "submitting"}
          className="group inline-flex items-center justify-center gap-2.5 px-9 py-4 bg-bark text-cream text-[12px] tracking-[0.22em] uppercase font-medium hover:bg-earth disabled:opacity-60 disabled:cursor-not-allowed transition-colors"
        >
          {status === "submitting" ? (
            <>
              <svg className="h-4 w-4 animate-spin" viewBox="0 0 24 24" fill="none">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
              </svg>
              Sending...
            </>
          ) : (
            <>
              Send Message
              <svg className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
              </svg>
            </>
          )}
        </button>
        <p className="text-[11.5px] text-clay tracking-wide">We respond within one business day.</p>
      </div>

      <p className="pt-2 text-[10.5px] text-clay/65 leading-relaxed">
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
  );
}
