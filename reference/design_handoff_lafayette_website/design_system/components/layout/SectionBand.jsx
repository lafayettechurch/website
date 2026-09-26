import React from 'react';
import { FacetMotif } from '../brand/FacetMotif.jsx';
import { Eyebrow } from '../content/Eyebrow.jsx';
const T = {
  cream: { bg:'var(--lcc-cream)', fg:'var(--lcc-navy)', lede:'var(--lcc-ink-2)', rule:'var(--lcc-line-strong)', num:'var(--lcc-slate)', eb:'clay' },
  white: { bg:'var(--lcc-white)', fg:'var(--lcc-navy)', lede:'var(--lcc-ink-2)', rule:'var(--lcc-line)', num:'var(--lcc-slate)', eb:'clay' },
  warm: { bg:'var(--lcc-sand)', fg:'var(--lcc-navy)', lede:'var(--lcc-sand-ink)', rule:'var(--lcc-notice-line)', num:'var(--lcc-amber-ink)', eb:'amber' },
  deep: { bg:'var(--lcc-navy)', fg:'#FFFFFF', lede:'var(--lcc-mist)', rule:'var(--lcc-navy-line)', num:'var(--lcc-mist-2)', eb:'on-dark' },
  brand: { bg:'var(--lcc-slate)', fg:'#FFFFFF', lede:'var(--lcc-mist-3)', rule:'rgba(255,255,255,0.2)', num:'var(--lcc-mist-slate)', eb:'on-dark' },
};
export function SectionBand({ tone = 'cream', number, eyebrow, title, lede, facets, ruled, children, id, padY, style }) {
  const t = T[tone] || T.cream;
  const dark = tone === 'deep' || tone === 'brand';
  const hasHead = number || eyebrow || title || lede;
  return <section id={id} style={{ position:'relative', overflow:'hidden', background:t.bg, color:t.fg, padding:(padY || 'var(--section-pad)') + ' var(--gutter)', fontFamily:'var(--font-body)', ...style }}>
    {facets && <FacetMotif preset={dark ? 'corner' : 'soft'} opacity={dark ? 1 : .8} />}
    <div style={{ position:'relative', maxWidth:'var(--container-max)', margin:'0 auto' }}>
      {hasHead && <div style={{ marginBottom:40, ...(ruled || number ? { borderTop:'1px solid ' + t.rule, paddingTop:28 } : {}) }}>
        {eyebrow && <Eyebrow tone={t.eb === 'on-dark' ? 'on-dark' : t.eb}>{eyebrow}</Eyebrow>}
        {title && <div style={{ display:'flex', alignItems:'baseline', gap:16 }}>
          {number && <span style={{ fontFamily:'var(--font-display)', fontSize:15, color:t.num }}>{number}</span>}
          <h2 style={{ fontFamily:'var(--font-display)', fontWeight:500, fontSize:'clamp(26px, 3.2vw, 38px)', lineHeight:1.1, letterSpacing:'-0.015em', margin:0, maxWidth:'22ch', textWrap:'balance' }}>{title}</h2>
        </div>}
        {lede && <p style={{ fontSize:18, lineHeight:1.65, color:t.lede, maxWidth:'62ch', margin:'20px 0 0' }}>{lede}</p>}
      </div>}
      {children}
    </div>
  </section>;
}
