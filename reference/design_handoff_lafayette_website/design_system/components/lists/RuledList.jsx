import React from 'react';
export function RuledList({ items = [], numbered, layout = 'split', tone = 'light', style }) {
  const dark = tone === 'dark';
  const rule = '1px solid ' + (dark ? 'var(--lcc-navy-line)' : 'var(--lcc-line-strong)');
  const split = layout === 'split';
  return <div style={{ fontFamily:'var(--font-body)', borderBottom: rule, ...style }}>
    {items.map((it, i) => {
      const num = it.numeral ?? (numbered ? String(i + 1).padStart(2, '0') : null);
      return <div key={i} style={{ borderTop: rule, padding:'22px 0', display:'grid', gridTemplateColumns: (num ? '40px ' : '') + (split ? 'minmax(0,1fr) minmax(0,1.6fr)' : 'minmax(0,1fr)'), columnGap:24, rowGap:6, alignItems:'baseline' }}>
        {num && <span style={{ fontFamily:'var(--font-display)', fontSize:15, color: dark ? 'var(--lcc-mist-2)' : 'var(--lcc-slate)' }}>{num}</span>}
        <div style={{ fontFamily:'var(--font-display)', fontWeight:500, fontSize:22, lineHeight:1.25, color: dark ? '#FFFFFF' : 'var(--lcc-navy)', textWrap:'balance' }}>{it.title}</div>
        {it.body && <div style={{ gridColumn: !split && num ? '2' : undefined, fontSize:16, lineHeight:1.6, color: dark ? 'var(--lcc-mist)' : 'var(--lcc-ink-3)', textWrap:'pretty' }}>{it.body}</div>}
      </div>;
    })}
  </div>;
}
