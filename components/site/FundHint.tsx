'use client';
import { useEffect, useState } from 'react';
import { Icon } from '@/components/ds/Icon';

const EVENT = 'lcc:fund-hint';

/**
 * A "Give to …" link for a ministry that is given to through the main Breeze form.
 * It jumps to the form on this page and asks the form to show which fund to pick.
 */
export function FundLink({ fund, children }: { fund: string; children: React.ReactNode }) {
  return <a className="lcc-btn lcc-btn--link" href="#give-online"
    onClick={() => window.dispatchEvent(new CustomEvent(EVENT, { detail: fund }))}>
    <span className="lcc-btn__label">{children}</span>
  </a>;
}

/** Shown above the giving form only after someone clicks a FundLink. */
export function FundHint() {
  const [fund, setFund] = useState<string | null>(null);
  useEffect(() => {
    const show = (e: Event) => setFund((e as CustomEvent<string>).detail);
    window.addEventListener(EVENT, show);
    return () => window.removeEventListener(EVENT, show);
  }, []);
  return <div role="status" aria-live="polite">
    {fund && <p className="lcc-fund-hint">
      <Icon name="info" size={18} />
      <span>Giving to <strong>{fund}</strong>? Choose it in the “Give to” dropdown, just below the amount.</span>
      <button type="button" aria-label="Dismiss" onClick={() => setFund(null)}><Icon name="x" size={16} /></button>
    </p>}
  </div>;
}
