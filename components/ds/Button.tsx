import Link from 'next/link';
import { Icon, type IconName } from './Icon';

export type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'outline-on-dark' | 'link';

type Props = {
  variant?: ButtonVariant; size?: 'md' | 'sm'; href?: string; icon?: IconName; iconRight?: IconName;
  fullWidth?: boolean; type?: 'button' | 'submit'; disabled?: boolean;
  onClick?: React.MouseEventHandler; children: React.ReactNode; className?: string;
};

/** Clay "primary" for the one key action per view; slate "secondary" for everything else. */
export function Button({ variant = 'secondary', size = 'md', href, icon, iconRight, fullWidth, type = 'button', disabled, onClick, children, className }: Props) {
  const cls = ['lcc-btn', 'lcc-btn--' + variant, size === 'sm' && variant !== 'link' && 'lcc-btn--sm', fullWidth && 'lcc-btn--full', className].filter(Boolean).join(' ');
  const inner = <>
    {icon && <Icon name={icon} size={18} />}
    {variant === 'link' ? <span className="lcc-btn__label">{children}</span> : children}
    {iconRight && <Icon name={iconRight} size={18} />}
  </>;
  if (href) {
    if (/^https?:/.test(href)) {
      return <a className={cls} href={href} onClick={onClick} target="_blank" rel="noopener noreferrer">
        {inner}<span className="lcc-sr-only"> (opens in a new tab)</span>
      </a>;
    }
    if (/^(mailto|tel):/.test(href)) return <a className={cls} href={href} onClick={onClick}>{inner}</a>;
    return <Link className={cls} href={href} onClick={onClick}>{inner}</Link>;
  }
  return <button className={cls} type={type} disabled={disabled} onClick={onClick}>{inner}</button>;
}
