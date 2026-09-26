import Link from 'next/link';
import { Icon, type IconName } from './Icon';

/** Icon beside a bold line and a muted sub-line — service times, address, quick facts. */
export function InfoRow({ icon, title, sub, href, tone = 'light' }: {
  icon?: IconName; title: React.ReactNode; sub?: React.ReactNode; href?: string; tone?: 'light' | 'dark';
}) {
  return <div className={'lcc-inforow' + (tone === 'dark' ? ' lcc-inforow--dark' : '')}>
    {icon && <Icon name={icon} size={22} />}
    <div style={{ minWidth: 0 }}>
      <div className="lcc-inforow__title">{title}</div>
      {sub && (href ? <Link className="lcc-inforow__sub" href={href}>{sub}</Link> : <span className="lcc-inforow__sub">{sub}</span>)}
    </div>
  </div>;
}
