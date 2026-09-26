import React from 'react';
import { Icon } from '../brand/Icon.jsx';
export function InfoRow({ icon, title, sub, href, tone = 'light', style }) {
  const dark = tone === 'dark';
  const subStyle = { fontSize:15, lineHeight:1.5, color: dark ? 'var(--lcc-mist-2)' : 'var(--lcc-ink-3)' };
  return <div style={{ display:'flex', gap:12, alignItems:'flex-start', fontFamily:'var(--font-body)', ...style }}>
    {icon && <Icon name={icon} size={22} color={dark ? 'var(--lcc-mist)' : 'var(--lcc-slate)'} style={{ marginTop:1 }} />}
    <div style={{ minWidth:0 }}>
      <div style={{ fontSize:17, lineHeight:1.45, fontWeight:600, color: dark ? '#FFFFFF' : 'var(--lcc-navy)' }}>{title}</div>
      {sub && (href ? <a href={href} style={{ ...subStyle, color: dark ? 'var(--lcc-mist)' : 'var(--lcc-slate)' }}>{sub}</a> : <div style={subStyle}>{sub}</div>)}
    </div>
  </div>;
}
