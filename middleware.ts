import { NextRequest, NextResponse } from 'next/server';
import { unsealData } from 'iron-session';

const SESSION_COOKIE = 'yardie_admin_session';
const PUBLIC_ADMIN_PATHS = ['/admin/login'];

export async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // Only guard /admin routes
  if (!pathname.startsWith('/admin')) return NextResponse.next();

  // Allow login page through
  if (PUBLIC_ADMIN_PATHS.some((p) => pathname.startsWith(p))) {
    return NextResponse.next();
  }

  const secret = process.env.AUTH_SECRET;
  if (!secret) return NextResponse.redirect(new URL('/admin/login', req.url));

  const raw = req.cookies.get(SESSION_COOKIE)?.value;
  if (!raw) return NextResponse.redirect(new URL('/admin/login', req.url));

  try {
    const session = await unsealData(raw, { password: secret, ttl: 60 * 60 * 24 * 7 });
    if (!session) return NextResponse.redirect(new URL('/admin/login', req.url));
    return NextResponse.next();
  } catch {
    return NextResponse.redirect(new URL('/admin/login', req.url));
  }
}

export const config = {
  matcher: ['/admin/:path*'],
};
