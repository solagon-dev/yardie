import { cookies } from 'next/headers';
import { sealData, unsealData } from 'iron-session';

const SESSION_COOKIE = 'yardie_admin_session';
const SESSION_TTL = 60 * 60 * 24 * 7; // 7 days

export interface AdminSession {
  userId: string;
  email: string;
  role: string;
}

function getSecret(): string {
  const secret = process.env.AUTH_SECRET;
  if (!secret || secret.length < 32) {
    throw new Error('AUTH_SECRET must be set and at least 32 characters');
  }
  return secret;
}

export async function createSession(data: AdminSession): Promise<string> {
  return sealData(data, { password: getSecret(), ttl: SESSION_TTL });
}

export async function getSession(): Promise<AdminSession | null> {
  try {
    const cookieStore = await cookies();
    const raw = cookieStore.get(SESSION_COOKIE)?.value;
    if (!raw) return null;
    return await unsealData<AdminSession>(raw, { password: getSecret(), ttl: SESSION_TTL });
  } catch {
    return null;
  }
}

export async function requireSession(): Promise<AdminSession> {
  const session = await getSession();
  if (!session) throw new Error('Unauthorized');
  return session;
}

export { SESSION_COOKIE };
