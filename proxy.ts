// Admin proxy / middleware is disabled on this build. The file is kept
// as a no-op to satisfy any historical references. To re-enable an admin
// surface, restore iron-session and route auth here.
import { NextResponse } from "next/server";

export function proxy() {
  return NextResponse.next();
}

export const config = { matcher: [] };
