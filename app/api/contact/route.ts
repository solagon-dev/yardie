import { NextResponse } from 'next/server';
import { getResend, FROM, NOTIFY_TO } from '@/lib/resend';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, phone, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    // Notify Yardie team
    await getResend().emails.send({
      from: FROM,
      to: NOTIFY_TO,
      replyTo: email,
      subject: `New Message — ${name}`,
      html: `
        <div style="font-family:sans-serif;max-width:600px;margin:0 auto;color:#1A1814">
          <div style="background:#1A1814;padding:28px 32px">
            <img src="https://www.yardiedesign.com/yardielogofullwhite.svg" alt="Yardie Design" height="28" />
          </div>
          <div style="padding:32px">
            <h2 style="margin:0 0 24px;font-size:20px;font-weight:400">New Contact Message</h2>

            <table style="width:100%;border-collapse:collapse;font-size:14px">
              <tr><td style="padding:10px 0;border-bottom:1px solid #EAE6DE;color:#8C8478;width:100px">Name</td>
                  <td style="padding:10px 0;border-bottom:1px solid #EAE6DE">${name}</td></tr>
              <tr><td style="padding:10px 0;border-bottom:1px solid #EAE6DE;color:#8C8478">Email</td>
                  <td style="padding:10px 0;border-bottom:1px solid #EAE6DE"><a href="mailto:${email}" style="color:#1A1814">${email}</a></td></tr>
              ${phone ? `<tr><td style="padding:10px 0;border-bottom:1px solid #EAE6DE;color:#8C8478">Phone</td>
                  <td style="padding:10px 0;border-bottom:1px solid #EAE6DE"><a href="tel:${phone}" style="color:#1A1814">${phone}</a></td></tr>` : ''}
            </table>

            <div style="margin-top:24px">
              <p style="font-size:13px;color:#8C8478;margin:0 0 8px">Message</p>
              <p style="font-size:14px;line-height:1.75;background:#F5F3EF;padding:16px;border-left:3px solid #6B7A5C;margin:0">${message.replace(/\n/g, '<br>')}</p>
            </div>

            <div style="margin-top:32px;padding-top:24px;border-top:1px solid #EAE6DE">
              <a href="mailto:${email}" style="display:inline-block;background:#1A1814;color:#F8F4EE;font-size:12px;letter-spacing:0.1em;text-transform:uppercase;padding:12px 28px;text-decoration:none">
                Reply to ${name} →
              </a>
            </div>
          </div>
        </div>
      `,
    });

    // Auto-reply to submitter
    await getResend().emails.send({
      from: FROM,
      to: email,
      subject: `Message received — Yardie Design`,
      html: `
        <div style="font-family:sans-serif;max-width:600px;margin:0 auto;color:#1A1814">
          <div style="background:#1A1814;padding:28px 32px">
            <img src="https://www.yardiedesign.com/yardielogofullwhite.svg" alt="Yardie Design" height="28" />
          </div>
          <div style="padding:32px">
            <h2 style="margin:0 0 16px;font-size:20px;font-weight:400">Message received.</h2>
            <p style="font-size:14px;line-height:1.75;color:#5C5548">
              Thanks for reaching out, ${name}. We'll be in touch within one business day.
            </p>
            <p style="font-size:14px;line-height:1.75;color:#5C5548">
              For urgent matters, call us directly at <a href="tel:+12527567788" style="color:#1A1814">(252) 756-7788</a>.
            </p>
            <div style="margin-top:32px;padding-top:24px;border-top:1px solid #EAE6DE;font-size:12px;color:#A8A098">
              Yardie Design · 5036 Winterville Parkway, Winterville, NC 28590
            </div>
          </div>
        </div>
      `,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error('[contact] email error:', err);
    return NextResponse.json({ error: 'Failed to send' }, { status: 500 });
  }
}
