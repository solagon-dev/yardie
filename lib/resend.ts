import { Resend } from 'resend';

// Lazily instantiated so the constructor doesn't run at module evaluation time
// during build (when RESEND_API_KEY is not set in the build environment).
let _client: Resend | null = null;
export function getResend(): Resend {
  if (!_client) _client = new Resend(process.env.RESEND_API_KEY);
  return _client;
}

// Defaults — overridden by RESEND_TO_EMAIL / RESEND_FROM_EMAIL when set.
// Sender requires `solagon.com` to be verified in the Resend dashboard.
// RESEND_TO_EMAIL accepts a comma-separated list so submissions can be
// fanned out to the whole Yardie + Solagon team without code changes.
const DEFAULT_NOTIFY_LIST = [
  'stone@solagon.com',
  'scott@yardiedesign.com',
  'sky@yardiedesign.com',
  'bill@yardiedesign.com',
  'linda@yardiedesign.com',
];

export const NOTIFY_TO: string[] = (process.env.RESEND_TO_EMAIL ?? DEFAULT_NOTIFY_LIST.join(','))
  .split(',')
  .map((addr) => addr.trim())
  .filter((addr) => addr.length > 0);

export const FROM = process.env.RESEND_FROM_EMAIL ?? 'Yardie Design <forms@solagon.com>';
