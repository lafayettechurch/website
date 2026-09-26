'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Button } from '@/components/ds/Button';
import { Icon } from '@/components/ds/Icon';

/**
 * Sticky cream header. At 900px and up: logo, nav and the clay "Plan your visit" button.
 * Below 900px: the round mark, the same button and a menu toggle that opens a full-width list.
 * The swap is pure CSS so there's no layout flash before hydration.
 */
export function SiteHeader({ links }: { links: { href: string; label: string }[] }) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  useEffect(() => { setOpen(false); }, [pathname]);
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setOpen(false); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  const current = (href: string) => pathname === href ? 'page' as const : undefined;

  return <header className="lcc-header">
    <div className="lcc-header__bar">
      <Link href="/" className="lcc-header__home" aria-label="Lafayette Church of Christ — home">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img className="lcc-header__logo" src="/assets/logo-color-trimmed.png" alt="" width={180} height={48} />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img className="lcc-header__mark" src="/assets/logo-icon.jpeg" alt="" width={44} height={44} />
      </Link>
      <nav className="lcc-header__nav" aria-label="Main">
        {links.map(l => <Link key={l.href} href={l.href} aria-current={current(l.href)}>{l.label}</Link>)}
      </nav>
      <Button variant="primary" size="sm" href="/visit" className="lcc-header__cta">Plan your visit</Button>
      <div className="lcc-header__compact">
        <Button variant="primary" size="sm" href="/visit">Plan your visit</Button>
        <button type="button" className="lcc-header__menu" aria-label="Menu" aria-expanded={open} aria-controls="lcc-mobile-nav" onClick={() => setOpen(o => !o)}>
          <Icon name={open ? 'x' : 'menu'} size={22} />
        </button>
      </div>
    </div>
    {open && <nav id="lcc-mobile-nav" className="lcc-header__drawer" aria-label="Main">
      {links.map(l => <Link key={l.href} href={l.href} aria-current={current(l.href)} onClick={() => setOpen(false)}>{l.label}</Link>)}
    </nav>}
  </header>;
}
