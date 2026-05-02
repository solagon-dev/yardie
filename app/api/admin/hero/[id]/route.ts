import { NextResponse } from "next/server";
const stub = () => NextResponse.json({ success: false, message: "Admin is not enabled." }, { status: 503 });
export async function GET()    { return stub(); }
export async function PUT()    { return stub(); }
export async function PATCH()  { return stub(); }
export async function DELETE() { return stub(); }
