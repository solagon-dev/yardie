"use client";

import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setError("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (!res.ok) throw new Error("Failed to send");
      setSubmitted(true);
    } catch {
      setError("Something went wrong. Please try again or call (252) 756-7788.");
    } finally {
      setSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="border border-moss/30 p-10 bg-paper">
        <h3
          className="font-display text-forest text-[28px] mb-4 leading-[1.2]"
          style={{ fontWeight: 500 }}
        >
          Your note is in. Thanks.
        </h3>
        <p className="text-ink text-[16px] leading-[1.65]">
          We&rsquo;ll be in touch within one business day. If you&rsquo;re in a hurry,
          give us a call at{" "}
          <a href="tel:+12527567788" className="text-ochre link-underline">
            (252) 756-7788
          </a>
          .
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        <div>
          <label htmlFor="name" className="field-label">
            Full name
          </label>
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
          <label htmlFor="phone" className="field-label">
            Phone
          </label>
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
        <label htmlFor="email" className="field-label">
          Email
        </label>
        <input
          id="email"
          type="email"
          required
          autoComplete="email"
          placeholder="you@email.com"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className="field-input"
        />
      </div>
      <div>
        <label htmlFor="message" className="field-label">
          Message
        </label>
        <textarea
          id="message"
          required
          rows={5}
          placeholder="Tell us about your project or ask us anything."
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          className="field-input resize-none"
          style={{ paddingTop: "12px" }}
        />
      </div>
      {error && <p className="text-brick text-[14px] font-sans">{error}</p>}
      <button
        type="submit"
        disabled={submitting}
        className="inline-flex items-center justify-center gap-2 bg-forest text-limestone text-[14px] font-medium px-7 py-3.5 hover:bg-ochre hover:text-ink transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
      >
        {submitting ? "Sending…" : "Send message"}
        <span aria-hidden>→</span>
      </button>
    </form>
  );
}
