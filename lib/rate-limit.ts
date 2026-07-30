// Fixed-window rate limiter, in-process.
//
// Scope note: state lives in module memory, so each serverless instance keeps
// its own counters. That makes this a throttle on casual abuse — a script
// hammering one endpoint, a stuck retry loop, someone burning the Resend quota
// — not a defence against a distributed attacker, who would land on different
// instances. It costs nothing and needs no external store; if Yardie ever
// needs real guarantees, swap the map for Vercel KV behind the same signature.

type Bucket = { count: number; resetAt: number };

const buckets = new Map<string, Bucket>();

// Bound the map so a spray of unique IPs can't grow it without limit.
const MAX_KEYS = 5_000;

function sweep(now: number) {
  for (const [key, b] of buckets) {
    if (b.resetAt <= now) buckets.delete(key);
  }
}

export type RateLimitResult = {
  ok: boolean;
  remaining: number;
  /** Seconds until the window resets — suitable for a Retry-After header. */
  retryAfter: number;
};

export function rateLimit(key: string, limit: number, windowMs: number): RateLimitResult {
  const now = Date.now();
  const existing = buckets.get(key);

  if (!existing || existing.resetAt <= now) {
    if (buckets.size >= MAX_KEYS) sweep(now);
    if (buckets.size >= MAX_KEYS) buckets.clear();
    buckets.set(key, { count: 1, resetAt: now + windowMs });
    return { ok: true, remaining: limit - 1, retryAfter: 0 };
  }

  existing.count += 1;
  const retryAfter = Math.max(1, Math.ceil((existing.resetAt - now) / 1000));
  return {
    ok: existing.count <= limit,
    remaining: Math.max(0, limit - existing.count),
    retryAfter,
  };
}

/**
 * Best-effort client IP.
 *
 * On Vercel `x-forwarded-for` is set by the platform edge and the left-most
 * entry is the real client, so it can be trusted here. Falls back to a shared
 * bucket when no header is present (local dev) rather than to something
 * spoofable per-request.
 */
export function clientIp(req: Request): string {
  const xff = req.headers.get("x-forwarded-for");
  if (xff) return xff.split(",")[0]!.trim();
  return req.headers.get("x-real-ip")?.trim() || "unknown";
}
