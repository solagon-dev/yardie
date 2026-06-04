// ============================================================
// Form submission handler — posts to /api/contact (Resend).
// Fetches a reCAPTCHA v3 token first so the server can verify.
// ============================================================

import { getRecaptchaToken } from "./recaptcha";

export interface FormData {
  [key: string]: string | undefined;
}

export interface FormResult {
  success: boolean;
  message: string;
}

export type FormType = "contact" | "consultation";

const SUCCESS_MESSAGES: Record<FormType, string> = {
  contact:
    "Thank you. We'll be in touch within one business day.",
  consultation:
    "Thank you. We'll review your project and reach out within 24 hours to set up a property visit.",
};

export async function submitForm(
  formType: FormType,
  data: FormData
): Promise<FormResult> {
  try {
    // Bot defence — token is undefined when reCAPTCHA isn't configured.
    const recaptchaToken = await getRecaptchaToken(formType);

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ formType, data, recaptchaToken }),
    });

    let json: { success?: boolean; message?: string } | null = null;
    try {
      json = await res.json();
    } catch { /* non-JSON response */ }

    if (!res.ok || !json?.success) {
      return {
        success: false,
        message:
          json?.message ??
          "We couldn't deliver your message. Please try again or call us directly.",
      };
    }

    return {
      success: true,
      message: SUCCESS_MESSAGES[formType],
    };
  } catch {
    return {
      success: false,
      message:
        "Something went wrong. Please try again or call us directly.",
    };
  }
}
