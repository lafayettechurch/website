import React from 'react';
const V = {
  primary: { bg:'var(--lcc-clay)', hover:'var(--lcc-clay-hover)', fg:'#FFFFFF', bd:'transparent' },
  secondary: { bg:'var(--lcc-slate)', hover:'var(--lcc-slate-hover)', fg:'#FFFFFF', bd:'transparent' },
  outline: { bg:'transparent', hover:'rgba(62,90,118,0.08)', fg:'var(--lcc-slate)', bd:'var(--lcc-slate)' },
  'outline-on-dark': { bg:'transparent', hover:'rgba(255,255,255,0.08)', fg:'#FFFFFF', bd:'var(--lcc-slate-light)' },
};
export function Button({ variant = 'secondary', size = 'md', href, icon, iconRight, disabled, fullWidth, onClick, children, style, type = 'button' }) {
  const [h, setH] = React.useState(false);
  const Tag = href ? 'a' : 'button';
  const common = { href, onClick: disabled ? undefined : onClick, onMouseEnter: () => setH(true), onMouseLeave: () => setH(false), 'aria-disabled': disabled || undefined, type: href ? undefined : type, disabled: href ? undefined : disabled };
  const fs = size === 'sm' ? 15 : 16;
  const iconEl = (n) => n ? <span style={{ display:'inline-block', width:18, height:18, background:'currentColor', WebkitMask:'url(https://unpkg.com/lucide-static@0.460.0/icons/' + n + '.svg) center/contain no-repeat', mask:'url(https://unpkg.com/lucide-static@0.460.0/icons/' + n + '.svg) center/contain no-repeat' }} /> : null;
  if (variant === 'link') {
    return <Tag {...common} style={{ display:'inline-flex', alignItems:'center', gap:8, background:'none', border:0, padding:'0 0 2px', borderBottom:'2px solid ' + (h ? 'var(--lcc-clay)' : 'var(--lcc-amber)'), color:'var(--lcc-slate)', fontFamily:'var(--font-body)', fontWeight:600, fontSize:fs, lineHeight:1.4, textDecoration:'none', cursor: disabled ? 'not-allowed' : 'pointer', opacity: disabled ? .45 : 1, transition:'border-color 150ms', ...style }}>{iconEl(icon)}{children}{iconEl(iconRight)}</Tag>;
  }
  const v = V[variant] || V.secondary;
  const pad = size === 'sm' ? '0 20px' : '0 26px';
  return <Tag {...common} style={{ display: fullWidth ? 'flex' : 'inline-flex', width: fullWidth ? '100%' : undefined, alignItems:'center', justifyContent:'center', gap:10, boxSizing:'border-box', minHeight: size === 'sm' ? 44 : 48, padding: pad, background: h && !disabled ? v.hover : v.bg, color: v.fg, border: '1.5px solid ' + (v.bd === 'transparent' ? (h && !disabled ? v.hover : v.bg) : v.bd), borderRadius:'var(--radius-sm)', fontFamily:'var(--font-body)', fontWeight:600, fontSize:fs, lineHeight:1.2, textDecoration:'none', whiteSpace:'nowrap', cursor: disabled ? 'not-allowed' : 'pointer', opacity: disabled ? .45 : 1, transition:'background-color 150ms, border-color 150ms', ...style }}>{iconEl(icon)}{children}{iconEl(iconRight)}</Tag>;
}
