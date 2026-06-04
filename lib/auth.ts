// Auth is not enabled on this build. Stub kept so any legacy code path
// that imports session helpers still type-checks. Wire up auth when an
// admin surface is added back.
export async function getSession(): Promise<null> {
  return null;
}
export async function requireSession(): Promise<never> {
  throw new Error("Admin is not enabled.");
}
