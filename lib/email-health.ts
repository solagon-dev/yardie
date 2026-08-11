import { FROM } from "./resend";

export type EmailHealth = { ok: boolean; domain?: string; reason?: string };

/**
 * Verifies the form's email pipeline can actually deliver — without sending an
 * email. Checks that RESEND_API_KEY is present and that the domain in the FROM
 * address is verified on that Resend account.
 *
 * This is exactly the failure that silently took the forms down: the production
 * key belonged to a Resend account where the sender domain wasn't verified, so
 * every send 502'd. This check catches that class of breakage directly.
 */
export async function checkEmailHealth(): Promise<EmailHealth> {
  const key = process.env.RESEND_API_KEY;
  if (!key) return { ok: false, reason: "RESEND_API_KEY is not set" };

  const domain = FROM.match(/@([^>\s]+)/)?.[1];
  if (!domain) return { ok: false, reason: `could not parse a domain from FROM ("${FROM}")` };

  try {
    const res = await fetch("https://api.resend.com/domains", {
      headers: { Authorization: `Bearer ${key}` },
      cache: "no-store",
    });
    if (!res.ok) return { ok: false, domain, reason: `Resend domains API returned ${res.status}` };

    const body = (await res.json()) as { data?: Array<{ name: string; status: string }> };
    const match = (body.data ?? []).find((d) => d.name === domain);
    if (!match) return { ok: false, domain, reason: `${domain} is not on the configured Resend account` };
    if (match.status !== "verified") {
      return { ok: false, domain, reason: `${domain} status is "${match.status}", not verified` };
    }
    return { ok: true, domain };
  } catch (e) {
    return { ok: false, domain, reason: `exception contacting Resend: ${String(e)}` };
  }
}
