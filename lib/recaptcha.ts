// ============================================================
// reCAPTCHA v3 (invisible) helper — client-side only.
// Lazy-loads google's script the first time it's needed and
// resolves a token for the requested action. Returns undefined
// when the site key isn't configured (so dev still works).
// ============================================================

const SITE_KEY = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;
const SCRIPT_ID = "google-recaptcha-v3";

declare global {
  interface Window {
    grecaptcha?: {
      ready: (cb: () => void) => void;
      execute: (siteKey: string, opts: { action: string }) => Promise<string>;
    };
  }
}

let loadPromise: Promise<void> | null = null;

function loadScript(): Promise<void> {
  if (typeof window === "undefined") return Promise.resolve();
  if (window.grecaptcha) return Promise.resolve();
  if (loadPromise) return loadPromise;

  loadPromise = new Promise((resolve, reject) => {
    if (document.getElementById(SCRIPT_ID)) {
      // Another instance already started loading.
      const interval = window.setInterval(() => {
        if (window.grecaptcha) {
          window.clearInterval(interval);
          resolve();
        }
      }, 60);
      window.setTimeout(() => {
        window.clearInterval(interval);
        reject(new Error("recaptcha-load-timeout"));
      }, 8000);
      return;
    }
    const script = document.createElement("script");
    script.id = SCRIPT_ID;
    script.src = `https://www.google.com/recaptcha/api.js?render=${SITE_KEY}`;
    script.async = true;
    script.defer = true;
    script.onload = () => resolve();
    script.onerror = () => reject(new Error("recaptcha-script-error"));
    document.head.appendChild(script);
  });

  return loadPromise;
}

/**
 * Resolve a reCAPTCHA v3 token for the given action.
 * Returns undefined when no site key is configured — the server
 * verification routine treats that as "skip" so dev keeps working.
 */
export async function getRecaptchaToken(action: string): Promise<string | undefined> {
  if (!SITE_KEY) return undefined;
  try {
    await loadScript();
    if (!window.grecaptcha) return undefined;
    return await new Promise<string>((resolve, reject) => {
      window.grecaptcha!.ready(async () => {
        try {
          const token = await window.grecaptcha!.execute(SITE_KEY, { action });
          resolve(token);
        } catch (e) {
          reject(e);
        }
      });
    });
  } catch (e) {
    console.warn("[recaptcha] token error:", e);
    return undefined;
  }
}

export const RECAPTCHA_ENABLED = Boolean(SITE_KEY);
