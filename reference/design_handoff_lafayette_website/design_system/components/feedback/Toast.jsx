import React from 'react';
import { Icon } from '../brand/Icon.jsx';
export function Toast({ open = true, children, icon = 'circle-check', duration = 4000, onClose, inline, style }) {
  React.useEffect(() => { if (open && duration && onClose) { const t = setTimeout(onClose, duration); return () => clearTimeout(t); } }, [open, duration, onClose]);
  if (!open) return null;
  const pos = inline ? { position:'relative' } : { position:'fixed', left:'50%', bottom:24, transform:'translateX(-50%)', zIndex:50 };
  return <div role="status" aria-live="polite" style={{ ...pos, display:'inline-flex', alignItems:'center', gap:10, maxWidth:'calc(100vw - 32px)', boxSizing:'border-box', background:'var(--lcc-navy)', color:'#FFFFFF', borderRadius:'var(--radius-md)', padding:'12px 18px', fontFamily:'var(--font-body)', fontSize:15, fontWeight:500, lineHeight:1.4, ...style }}>
    {icon && <Icon name={icon} size={18} color="var(--lcc-mist)" />}
    <span>{children}</span>
    {onClose && <button aria-label="Dismiss" onClick={onClose} style={{ marginLeft:6, width:28, height:28, display:'grid', placeItems:'center', background:'transparent', border:0, cursor:'pointer', padding:0 }}><Icon name="x" size={16} color="var(--lcc-mist-2)" /></button>}
  </div>;
}
