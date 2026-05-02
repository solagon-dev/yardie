import { NextResponse } from "next/server";
export async function POST() {
  return NextResponse.json({ success: false, message: "Admin is not enabled." }, { status: 503 });
}
