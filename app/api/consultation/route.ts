import { POST as handleContact } from "../contact/route";

/**
 * Legacy endpoint. The consultation form posts to /api/contact with
 * formType="consultation"; this exists only for anything still pointing here.
 *
 * It used to `fetch()` its own /api/contact over HTTP, which cost a full
 * round-trip per submission and rebuilt the request without the original
 * headers — so the reCAPTCHA token was dropped (a guaranteed 403 whenever the
 * secret is configured) and rate limiting saw the server's own address rather
 * than the client's. Calling the handler in-process fixes all three.
 */
export async function POST(req: Request) {
  let body: unknown = {};
  try {
    body = await req.json();
  } catch {
    /* fall through with an empty body — the contact handler rejects it */
  }

  const source = (body ?? {}) as { data?: unknown; recaptchaToken?: string };

  const forwarded = new Request(new URL("/api/contact", req.url), {
    method: "POST",
    headers: req.headers,
    body: JSON.stringify({
      formType: "consultation",
      data: source.data ?? body,
      recaptchaToken: source.recaptchaToken,
    }),
  });

  return handleContact(forwarded);
}
