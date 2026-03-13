import { Resend } from 'resend';

export const resend = new Resend(process.env.RESEND_API_KEY);

export const NOTIFY_TO = 'info@yardiedesign.com';
export const FROM = 'Yardie Design <notifications@yardiedesign.com>';
