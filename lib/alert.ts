// Independent ops-alert channel.
//
// Deliberately does NOT use email — so it still fires when the email pipeline
// is the exact thing that broke (which is how the form went down silently:
// Resend was misconfigured, and there was no second channel to shout about it).
//
// Points at any webhook that accepts a JSON POST — a Slack incoming webhook, a
// Discord webhook, or anything custom. Set FORM_ALERT_WEBHOOK_URL to enable it;
// with the var unset this is a no-op, so nothing changes until it's configured.

export async function sendOpsAlert(opts: {
  title: string;
  text: string;
  fields?: Record<string, string>;
}): Promise<boolean> {
  const url = process.env.FORM_ALERT_WEBHOOK_URL;
  if (!url) return false;

  const lines = [opts.title, "", opts.text];
  if (opts.fields) {
    for (const [k, v] of Object.entries(opts.fields)) {
      if (v) lines.push(`• ${k}: ${v}`);
    }
  }
  const message = lines.join("\n");

  try {
    // `text` is what a Slack incoming webhook reads; `content` is Discord's key.
    // Sending both means one payload works for either service (each ignores the
    // key it doesn't use).
    const res = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text: message, content: message }),
    });
    if (!res.ok) console.error("[ops-alert] webhook returned", res.status);
    return res.ok;
  } catch (e) {
    console.error("[ops-alert] webhook failed:", e);
    return false;
  }
}
