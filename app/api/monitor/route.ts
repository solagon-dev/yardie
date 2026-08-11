import { NextResponse } from "next/server";
import { checkEmailHealth } from "@/lib/email-health";
import { sendOpsAlert } from "@/lib/alert";

export const dynamic = "force-dynamic";

/**
 * Scheduled canary (wired up in vercel.json → crons). Runs the email-pipeline
 * health check on a schedule and fires an ops alert the moment it goes
 * unhealthy — so config drift (a swapped API key, an unverified domain) is
 * caught proactively instead of weeks later by word of mouth.
 *
 * Protected by CRON_SECRET when it's set: Vercel automatically sends
 * `Authorization: Bearer <CRON_SECRET>` on scheduled invocations.
 */
export async function GET(req: Request) {
  const secret = process.env.CRON_SECRET;
  if (secret) {
    const presented = req.headers.get("authorization");
    if (presented !== `Bearer ${secret}`) {
      return NextResponse.json({ error: "unauthorized" }, { status: 401 });
    }
  }

  const email = await checkEmailHealth();

  if (!email.ok) {
    console.error("[monitor] EMAIL PIPELINE UNHEALTHY —", email.reason);
    await sendOpsAlert({
      title: "🚨 Yardie form delivery is DOWN",
      text: "The contact and consultation forms cannot deliver email right now. Fix this before more leads are lost.",
      fields: { reason: email.reason ?? "unknown", domain: email.domain ?? "unknown" },
    });
    return NextResponse.json({ ok: false, email }, { status: 503, headers: { "Cache-Control": "no-store" } });
  }

  return NextResponse.json({ ok: true, email }, { headers: { "Cache-Control": "no-store" } });
}
