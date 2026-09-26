import React from 'react';
const T = { slate:'var(--lcc-slate)', clay:'var(--lcc-clay-ink)', amber:'var(--lcc-amber-ink)', 'on-dark':'var(--lcc-mist-2)' };
export function Eyebrow({ tone = 'slate', children, style }) {
  return <div style={{ fontFamily:'var(--font-body)', fontSize:12, letterSpacing:'0.14em', textTransform:'uppercase', fontWeight:700, lineHeight:1.4, color: T[tone] || T.slate, marginBottom:14, ...style }}>{children}</div>;
}
