'use client';
import { useEffect } from 'react';
import { Icon, type IconName } from './Icon';

/** Small navy status message fixed at bottom center. One at a time, one short sentence. */
export function Toast({ open, children, icon = 'circle-check', duration = 4000, onClose }: {
  open: boolean; children: React.ReactNode; icon?: IconName; duration?: number; onClose?: () => void;
}) {
  useEffect(() => {
    if (open && duration && onClose) { const t = setTimeout(onClose, duration); return () => clearTimeout(t); }
  }, [open, duration, onClose]);
  // The live region stays mounted so screen readers announce the message when it appears.
  return <div role="status" aria-live="polite">
    {open && <div className="lcc-toast">
      {icon && <Icon name={icon} size={18} />}
      <span>{children}</span>
      {onClose && <button type="button" className="lcc-toast__close" aria-label="Dismiss" onClick={onClose}><Icon name="x" size={16} /></button>}
    </div>}
  </div>;
}
