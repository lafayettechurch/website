import { NextResponse } from 'next/server';
import { Resend } from 'resend';

/**
 * "Let us know you're coming" submissions.
 * Recipient is one config value: VISIT_FORM_TO (comma-separate for several; VISIT_FORM_CC to copy someone).
 */
const FIELDS = ['name', 'email', 'date', 'count', 'kids', 'notes'] as const;
const LABELS: Record<(typeof FIELDS)[number], string> = {
  name: 'Name', email: 'Email', date: 'Which Sunday', count: 'How many', kids: 'Bringing children', notes: 'Anything we should know',
};

const list = (v?: string) => (v || '').split(',').map(s => s.trim()).filter(Boolean);
const clean = (v: unknown, max = 2000) => typeof v === 'string' ? v.trim().slice(0, max) : '';
const escape = (s: string) => s.replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]!));

export async function POST(req: Request) {
  let body: Record<string, unknown>;
  try { body = await req.json(); } catch { return NextResponse.json({ error: 'Bad request' }, { status: 400 }); }

  // Honeypot filled in: pretend it worked so bots don't retry.
  if (clean(body.company)) return NextResponse.json({ ok: true });

  const data = Object.fromEntries(FIELDS.map(f => [f, clean(body[f], f === 'notes' ? 2000 : 200)])) as Record<(typeof FIELDS)[number], string>;
  if (!data.name || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    return NextResponse.json({ error: 'Name and a valid email are required' }, { status: 422 });
  }

  const to = list(process.env.VISIT_FORM_TO);
  const cc = list(process.env.VISIT_FORM_CC);
  const key = process.env.RESEND_API_KEY;
  const subject = `Planning a visit: ${data.name}${data.date ? ' — ' + data.date : ''}`;
  const rows = FIELDS.filter(f => data[f]).map(f => [LABELS[f], data[f]] as const);

  if (!key || to.length === 0) {
    // Not configured yet (local dev or before launch): log so nothing is silently lost.
    console.warn('[visit form] RESEND_API_KEY or VISIT_FORM_TO not set; submission not emailed:', data);
    if (process.env.NODE_ENV === 'production') return NextResponse.json({ error: 'Form not configured' }, { status: 503 });
    return NextResponse.json({ ok: true, delivered: false });
  }

  const resend = new Resend(key);
  const { error } = await resend.emails.send({
    from: process.env.VISIT_FORM_FROM || 'Lafayette website <onboarding@resend.dev>',
    to, cc: cc.length ? cc : undefined,
    replyTo: data.email,
    subject,
    text: `Someone let us know they're planning to visit.\n\n${rows.map(([k, v]) => `${k}: ${v}`).join('\n')}\n\nReply to this email to write back to them.`,
    html: `<p>Someone let us know they’re planning to visit.</p><table cellpadding="6" style="border-collapse:collapse">${rows.map(([k, v]) => `<tr><td style="color:#5A6675;vertical-align:top"><strong>${k}</strong></td><td>${escape(v).replace(/\n/g, '<br>')}</td></tr>`).join('')}</table><p style="color:#5A6675">Reply to this email to write back to them.</p>`,
  });
  if (error) {
    console.error('[visit form] send failed', error);
    return NextResponse.json({ error: 'Could not send' }, { status: 502 });
  }
  return NextResponse.json({ ok: true });
}
