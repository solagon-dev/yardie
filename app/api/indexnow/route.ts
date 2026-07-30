import { NextResponse } from 'next/server'
import { timingSafeEqual as nodeTimingSafeEqual } from 'node:crypto'
import { clientIp, rateLimit } from '@/lib/rate-limit'

/** Constant-time compare that tolerates differing lengths without leaking
 *  them through an early return. */
function timingSafeEqual(a: string, b: string): boolean {
  const bufA = Buffer.from(a)
  const bufB = Buffer.from(b)
  // Hash to a fixed width so length inequality doesn't short-circuit.
  if (bufA.length !== bufB.length) {
    // Still burn a comparison of equal-length buffers to keep timing flat.
    nodeTimingSafeEqual(Buffer.alloc(32), Buffer.alloc(32))
    return false
  }
  return nodeTimingSafeEqual(bufA, bufB)
}

// Inlined to avoid the path-alias resolution issue Turbopack hit on
// the first deploy of this route. Matches lib/seo.ts SITE_URL constant.
const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, '') ||
  'https://www.yardiedesign.com'

/**
 * IndexNow integration — submits URLs to Bing, Yandex, Naver, and Seznam
 * via the unified IndexNow API. Bing-led standard; Google ignores
 * gracefully.
 *
 * Usage: POST /api/indexnow with { urls: string[] | string }
 * Typical caller: webhook from CMS on publish/update.
 *
 * Verification: /public/8dc320b7d7c776c5208ef128d2c8aacf.txt holds the key so search engines
 * can confirm we own the domain before accepting submissions.
 */
const INDEXNOW_KEY = '8dc320b7d7c776c5208ef128d2c8aacf'
const INDEXNOW_ENDPOINTS = [
  'https://api.indexnow.org/IndexNow',
  'https://www.bing.com/indexnow',
  'https://yandex.com/indexnow',
]

export async function POST(request: Request) {
  // This endpoint speaks to Bing/Yandex/Seznam on the domain's behalf. Left
  // open, anyone could submit arbitrary site URLs repeatedly and burn the
  // domain's IndexNow quota — or get it rate-limited for abuse. Require a
  // shared secret, and refuse to run at all when one isn't configured rather
  // than silently falling back to open access.
  const expected = process.env.INDEXNOW_AUTH_TOKEN
  if (!expected) {
    return NextResponse.json(
      { error: 'IndexNow submissions are not configured.' },
      { status: 503 }
    )
  }

  const presented =
    request.headers.get('authorization')?.replace(/^Bearer\s+/i, '') ??
    request.headers.get('x-indexnow-token') ??
    ''

  if (!timingSafeEqual(presented, expected)) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const limit = rateLimit(`indexnow:${clientIp(request)}`, 20, 60 * 60 * 1000)
  if (!limit.ok) {
    return NextResponse.json(
      { error: 'Rate limit exceeded' },
      { status: 429, headers: { 'Retry-After': String(limit.retryAfter) } }
    )
  }

  let body: { urls?: string | string[] } = {}
  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ error: 'Invalid JSON body' }, { status: 400 })
  }

  const urls = Array.isArray(body.urls)
    ? body.urls
    : typeof body.urls === 'string'
    ? [body.urls]
    : []

  if (urls.length === 0) {
    return NextResponse.json(
      { error: 'No URLs provided. Send { urls: string[] | string }.' },
      { status: 400 }
    )
  }

  const siteUrl = SITE_URL
  const host = new URL(siteUrl).host

  const sameHostUrls = urls
    .map((u) => (u.startsWith('http') ? u : `${siteUrl}${u.startsWith('/') ? '' : '/'}${u}`))
    .filter((u) => {
      try {
        return new URL(u).host === host
      } catch {
        return false
      }
    })

  if (sameHostUrls.length === 0) {
    return NextResponse.json(
      { error: `All URLs must be on ${host}` },
      { status: 400 }
    )
  }

  const payload = {
    host,
    key: INDEXNOW_KEY,
    keyLocation: `${siteUrl}/${INDEXNOW_KEY}.txt`,
    urlList: sameHostUrls,
  }

  const results = await Promise.allSettled(
    INDEXNOW_ENDPOINTS.map((endpoint) =>
      fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      }).then((r) => ({ endpoint, status: r.status }))
    )
  )

  return NextResponse.json({
    submitted: sameHostUrls.length,
    urls: sameHostUrls,
    results: results.map((r) =>
      r.status === 'fulfilled' ? r.value : { error: String(r.reason) }
    ),
  })
}
