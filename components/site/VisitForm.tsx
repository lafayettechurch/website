'use client';
import { useEffect, useRef, useState } from 'react';
import { Button } from '@/components/ds/Button';
import { FormField } from '@/components/ds/FormField';
import { FormSuccess } from '@/components/ds/FormSuccess';

const NOT_SURE = 'Not sure yet';

/** The next four Sundays in St. Louis time, e.g. "Sunday, October 4". */
function nextSundays(): string[] {
  const tz = 'America/Chicago';
  const today = new Date(new Date().toLocaleString('en-US', { timeZone: tz }));
  today.setHours(12, 0, 0, 0);
  today.setDate(today.getDate() + ((7 - today.getDay()) % 7 || 7));
  return [0, 1, 2, 3].map(i => {
    const d = new Date(today);
    d.setDate(today.getDate() + i * 7);
    return d.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' });
  });
}

type Sent = { name: string; date: string };

export function VisitForm({ privacy, successBody, officeEmail }: { privacy: string; successBody: string; officeEmail: string }) {
  // Dates depend on "today", so they're filled in after hydration rather than frozen at build time.
  const [sundays, setSundays] = useState<string[]>([]);
  const [status, setStatus] = useState<'idle' | 'sending' | 'error'>('idle');
  const [sent, setSent] = useState<Sent | null>(null);
  const successRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => { setSundays(nextSundays()); }, []);
  useEffect(() => { if (sent) successRef.current?.focus(); }, [sent]);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget)) as Record<string, string>;
    setStatus('sending');
    try {
      const res = await fetch('/api/visit', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(data) });
      if (!res.ok) throw new Error(String(res.status));
      setStatus('idle');
      setSent({ name: (data.name || '').trim().split(/\s+/)[0] || 'friend', date: data.date || NOT_SURE });
    } catch {
      setStatus('error');
    }
  }

  if (sent) {
    const when = sent.date === NOT_SURE ? 'soon' : 'on ' + sent.date;
    return <div style={{ display: 'grid', gap: 16 }}>
      <FormSuccess ref={successRef} title={`We’ll watch for you, ${sent.name}.`}>{successBody.replace('{date}', when)}</FormSuccess>
      <div><Button variant="link" onClick={() => { setSent(null); }}>Send another</Button></div>
    </div>;
  }

  return <form ref={formRef} className="lcc-form" onSubmit={onSubmit} aria-label="Let us know you’re coming">
    <FormField label="Your name" name="name" required autoComplete="name" />
    <FormField type="email" label="Email" name="email" required autoComplete="email" />
    <div className="lcc-grid" style={{ ['--min' as string]: '180px' }}>
      <FormField type="select" label="Which Sunday?" name="date" required options={[...sundays, NOT_SURE]} />
      <FormField type="select" label="How many of you?" name="count" required options={['Just me', '2', '3', '4', '5 or more']} />
    </div>
    <FormField type="radio" label="Bringing children?" name="kids" options={['Yes', 'No']} />
    <FormField type="textarea" label="Anything we should know?" name="notes" rows={3} />
    {/* Honeypot: hidden from people, tempting to bots. */}
    <div className="lcc-hp" aria-hidden="true">
      <label>Leave this empty<input type="text" name="company" tabIndex={-1} autoComplete="off" /></label>
    </div>
    {status === 'error' && <p className="lcc-form__error" role="alert">
      Sorry — that didn’t go through. Please try again, or email us at <a href={'mailto:' + officeEmail}>{officeEmail}</a>.
    </p>}
    <div><Button variant="secondary" type="submit" disabled={status === 'sending'}>{status === 'sending' ? 'Sending…' : 'Send'}</Button></div>
    <p className="lcc-form__fine">{privacy}</p>
  </form>;
}
