import { NextResponse } from "next/server";
import { getResend, FROM, NOTIFY_TO as TO } from "@/lib/resend";

const RECAPTCHA_SECRET = process.env.RECAPTCHA_SECRET_KEY;
const RECAPTCHA_MIN_SCORE = Number(process.env.RECAPTCHA_MIN_SCORE ?? "0.5");

/** Verify a reCAPTCHA v3 token. Returns true when verification passes
 *  OR when no secret is configured (so local dev still works without it). */
async function verifyRecaptcha(token: string | undefined, expectedAction: string): Promise<{ ok: true } | { ok: false; reason: string }> {
  if (!RECAPTCHA_SECRET) return { ok: true };
  if (!token) return { ok: false, reason: "missing-token" };

  try {
    const params = new URLSearchParams({ secret: RECAPTCHA_SECRET, response: token });
    const res = await fetch("https://www.google.com/recaptcha/api/siteverify", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: params.toString(),
    });
    const data = (await res.json()) as { success?: boolean; score?: number; action?: string; "error-codes"?: string[] };

    if (!data.success) return { ok: false, reason: (data["error-codes"] ?? ["verify-failed"]).join(",") };
    if (data.action && data.action !== expectedAction) return { ok: false, reason: `action-mismatch:${data.action}` };
    if (typeof data.score === "number" && data.score < RECAPTCHA_MIN_SCORE) return { ok: false, reason: `low-score:${data.score}` };
    return { ok: true };
  } catch (e) {
    console.error("[recaptcha] verify exception:", e);
    return { ok: false, reason: "verify-exception" };
  }
}

type Payload = Record<string, string>;
type FormType = "contact" | "consultation";

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;").replace(/</g, "&lt;")
    .replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;");
}

function renderRow(label: string, value: string) {
  return `<tr>
    <td style="padding:8px 16px 8px 0;color:#6B5D50;font-size:11px;letter-spacing:0.18em;text-transform:uppercase;vertical-align:top;width:160px;font-weight:500;">${escapeHtml(label)}</td>
    <td style="padding:8px 0;color:#3D3830;font-size:14px;line-height:1.6;white-space:pre-wrap;">${escapeHtml(value)}</td>
  </tr>`;
}

function htmlEmail(title: string, rows: { label: string; value: string }[]) {
  return `<!doctype html>
<html><body style="margin:0;padding:0;background:#F8F4EE;font-family:'DM Sans','Helvetica Neue',Arial,sans-serif;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#F8F4EE;padding:32px 16px;">
    <tr><td align="center">
      <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;background:#FFFDF8;border:1px solid #E4DDD4;">
        <tr><td style="padding:28px 32px;border-bottom:1px solid #E4DDD4;">
          <p style="margin:0;color:#6B7A5C;font-size:11px;letter-spacing:0.22em;text-transform:uppercase;font-weight:500;">Yardie</p>
          <h1 style="margin:8px 0 0;color:#1A1814;font-size:26px;font-weight:300;font-family:'Cormorant Garamond',Georgia,serif;letter-spacing:-0.012em;">${escapeHtml(title)}</h1>
        </td></tr>
        <tr><td style="padding:24px 32px;">
          <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
            ${rows.map((r) => renderRow(r.label, r.value)).join("")}
          </table>
        </td></tr>
        <tr><td style="padding:18px 32px;border-top:1px solid #E4DDD4;color:#6B5D50;font-size:11px;letter-spacing:0.18em;text-transform:uppercase;">
          Submitted ${new Date().toLocaleString("en-US", { timeZone: "America/New_York", dateStyle: "medium", timeStyle: "short" })} ET
        </td></tr>
      </table>
    </td></tr>
  </table>
</body></html>`;
}

export async function POST(req: Request) {
  if (!process.env.RESEND_API_KEY) {
    return NextResponse.json(
      { success: false, message: "Email service is not configured." },
      { status: 500 }
    );
  }

  let body: { formType?: FormType; data?: Payload; recaptchaToken?: string };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ success: false, message: "Invalid request payload." }, { status: 400 });
  }

  const formType = body.formType;
  const data = body.data ?? {};

  if (formType !== "contact" && formType !== "consultation") {
    return NextResponse.json({ success: false, message: "Invalid form type." }, { status: 400 });
  }

  // reCAPTCHA — invisible bot defence; soft-passes when not configured.
  const verification = await verifyRecaptcha(body.recaptchaToken, formType);
  if (!verification.ok) {
    console.warn("[recaptcha] rejected:", verification.reason);
    return NextResponse.json(
      { success: false, message: "We couldn't verify your submission. Please refresh and try again." },
      { status: 403 }
    );
  }

  const labels: Record<FormType, Record<string, string>> = {
    contact: {
      name: "Name",
      email: "Email",
      phone: "Phone",
      city: "City / Area",
      message: "Message",
    },
    consultation: {
      name: "Name",
      email: "Email",
      phone: "Phone",
      city: "Project location",
      service: "Service",
      squareFootage: "Approx. size (sq. ft.)",
      budget: "Budget",
      startTimeframe: "Start timeframe",
      endTimeframe: "Completion target",
      vision: "Project vision",
    },
  };

  const fieldLabels = labels[formType];
  const rows = Object.entries(fieldLabels)
    .map(([key, label]) => ({ label, value: (data[key] ?? "").toString().trim() }))
    .filter((r) => r.value.length > 0);

  if (rows.length === 0) {
    return NextResponse.json({ success: false, message: "Form submission was empty." }, { status: 400 });
  }

  const replyEmail = (data.email ?? "").toString().trim();

  const subject =
    formType === "consultation"
      ? `New consultation request — ${data.name ?? "Unknown"}`
      : `New contact message — ${data.name ?? "Unknown"}`;

  const title =
    formType === "consultation" ? "New Consultation Request" : "New Contact Message";

  const html = htmlEmail(title, rows);
  const text =
    `${title}\n\n` +
    rows.map((r) => `${r.label}: ${r.value}`).join("\n") +
    `\n\n— Submitted via yardiedesign.com\n`;

  try {
    const result = await getResend().emails.send({
      from: FROM,
      to: TO,
      subject,
      html,
      text,
      replyTo: replyEmail || undefined,
    });

    if (result.error) {
      console.error("[resend] send error:", result.error);
      return NextResponse.json(
        { success: false, message: "We couldn't deliver your message. Please try again or call us." },
        { status: 502 }
      );
    }

    return NextResponse.json({ success: true, message: "Sent." });
  } catch (err) {
    console.error("[resend] exception:", err);
    return NextResponse.json(
      { success: false, message: "Something went wrong. Please try again or call us." },
      { status: 500 }
    );
  }
}
