import { NextResponse } from "next/server";

/**
 * The consultation form submits to /api/contact with formType="consultation".
 * This endpoint exists only to forward any legacy clients still posting here.
 */
export async function POST(req: Request) {
  let body: unknown = {};
  try { body = await req.json(); } catch { /* ignore */ }
  const url = new URL("/api/contact", req.url);
  const forwarded = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ formType: "consultation", data: (body as { data?: unknown }).data ?? body }),
  });
  const text = await forwarded.text();
  try {
    return NextResponse.json(JSON.parse(text), { status: forwarded.status });
  } catch {
    return new NextResponse(text, { status: forwarded.status });
  }
}
