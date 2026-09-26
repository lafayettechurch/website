import React from 'react';
import { Eyebrow } from './Eyebrow.jsx';
import { FacetMotif } from '../brand/FacetMotif.jsx';
const V = {
  default: { bg:'var(--lcc-white)', bd:'1px solid var(--lcc-line)', fg:'var(--lcc-navy)', body:'var(--lcc-ink-3)', eb:'slate' },
  deep: { bg:'var(--lcc-navy)', bd:'none', fg:'#FFFFFF', body:'var(--lcc-mist-2)', eb:'on-dark' },
  warm: { bg:'var(--lcc-sand)', bd:'none', fg:'var(--lcc-navy)', body:'var(--lcc-sand-ink)', eb:'amber' },
  outline: { bg:'transparent', bd:'1px solid var(--lcc-navy-line)', fg:'#FFFFFF', body:'var(--lcc-mist-2)', eb:'on-dark' },
};
export function Card({ variant = 'default', eyebrow, title, children, action, facets, padding = 30, style }) {
  const v = V[variant] || V.default;
  const showFacets = facets ?? variant === 'deep';
  return <div style={{ position:'relative', overflow:'hidden', background:v.bg, border:v.bd, borderRadius:'var(--radius-md)', padding, color:v.fg, fontFamily:'var(--font-body)', boxSizing:'border-box', display:'flex', flexDirection:'column', ...style }}>
    {showFacets && <FacetMotif preset="card" />}
    <div style={{ position:'relative', display:'flex', flexDirection:'column', flex:1 }}>
      {eyebrow && <Eyebrow tone={v.eb}>{eyebrow}</Eyebrow>}
      {title && <h3 style={{ fontFamily:'var(--font-display)', fontWeight:500, fontSize:27, lineHeight:1.2, margin:'0 0 12px', color:v.fg, textWrap:'balance' }}>{title}</h3>}
      {children && <div style={{ fontSize:16, lineHeight:1.6, color:v.body, margin: action ? '0 0 22px' : 0, flex:1 }}>{children}</div>}
      {action && <div style={{ display:'flex', flexWrap:'wrap', gap:12, alignItems:'center' }}>{action}</div>}
    </div>
  </div>;
}
