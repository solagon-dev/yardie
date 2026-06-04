import { NextResponse } from "next/server";
export async function POST() {
  return NextResponse.json({ success: false, message: "Admin uploads are not enabled." }, { status: 503 });
}
