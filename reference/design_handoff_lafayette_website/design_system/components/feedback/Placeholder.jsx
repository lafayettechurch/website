import React from 'react';
export function Placeholder({ children = 'Copy needed', block, style }) {
  return <span style={{ display: block ? 'flex' : 'inline-flex', alignItems:'center', gap:6, padding: block ? '12px 14px' : '1px 8px', border:'1px dashed var(--lcc-line-dashed)', borderRadius:'var(--radius-sm)', background:'var(--lcc-notice)', color:'var(--lcc-notice-ink)', fontFamily:'var(--font-body)', fontSize:13, fontWeight:600, lineHeight:1.5, fontStyle:'normal', letterSpacing:0, verticalAlign:'baseline', ...style }}>[{children}]</span>;
}
