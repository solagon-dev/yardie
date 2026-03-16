import { Resend } from 'resend';

// Lazily instantiated so the constructor doesn't run at module evaluation time
// during build (when RESEND_API_KEY is not set in the build environment).
let _client: Resend | null = null;
export function getResend(): Resend {
  if (!_client) _client = new Resend(process.env.RESEND_API_KEY);
  return _client;
}

export const NOTIFY_TO = 'info@yardiedesign.com';
export const FROM = 'Yardie Design <notifications@yardiedesign.com>';
