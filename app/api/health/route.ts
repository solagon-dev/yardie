import { NextResponse } from "next/server";
import { checkEmailHealth } from "@/lib/email-health";

export const dynamic = "force-dynamic";

/**
 * Health probe for the form/email pipeline. Point any uptime monitor
 * (UptimeRobot, Better Uptime, Pingdom, …) at /api/health — it returns 503 the
 * moment email delivery would fail, so the breakage surfaces before a customer
 * hits it. Returns booleans + the domain name only; no secrets.
 */
export async function GET() {
  const email = await checkEmailHealth();
  return NextResponse.json(
    { ok: email.ok, checks: { email } },
    { status: email.ok ? 200 : 503, headers: { "Cache-Control": "no-store" } }
  );
}
