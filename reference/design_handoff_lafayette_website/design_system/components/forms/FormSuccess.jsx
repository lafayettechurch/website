import React from 'react';
import { Icon } from '../brand/Icon.jsx';
export function FormSuccess({ title = 'Thank you — we got it.', children, action, style }) {
  return <div role="status" style={{ background:'var(--lcc-sand)', borderRadius:'var(--radius-md)', padding:28, fontFamily:'var(--font-body)', display:'flex', gap:16, alignItems:'flex-start', ...style }}>
    <Icon name="circle-check" size={28} color="var(--lcc-slate)" style={{ marginTop:2 }} />
    <div style={{ minWidth:0 }}>
      <div style={{ fontFamily:'var(--font-display)', fontWeight:500, fontSize:24, lineHeight:1.25, color:'var(--lcc-navy)', marginBottom: children ? 8 : 0 }}>{title}</div>
      {children && <div style={{ fontSize:16, lineHeight:1.6, color:'var(--lcc-sand-ink)' }}>{children}</div>}
      {action && <div style={{ marginTop:18, display:'flex', gap:12, flexWrap:'wrap' }}>{action}</div>}
    </div>
  </div>;
}
