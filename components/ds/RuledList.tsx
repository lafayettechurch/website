export type RuledItem = { numeral?: string; title: React.ReactNode; body?: React.ReactNode };

/** Rows separated by 1px warm rules — core values, beliefs, directions. Stacks below 640px. */
export function RuledList({ items, numbered, tone = 'light', style }: {
  items: RuledItem[]; numbered?: boolean; tone?: 'light' | 'dark'; style?: React.CSSProperties;
}) {
  const hasNum = numbered || items.some(i => i.numeral);
  const cls = ['lcc-ruled', hasNum && 'lcc-ruled--numbered', tone === 'dark' && 'lcc-ruled--dark'].filter(Boolean).join(' ');
  return <ul className={cls} style={style}>
    {items.map((it, i) => {
      const num = it.numeral ?? (numbered ? String(i + 1).padStart(2, '0') : null);
      return <li key={i} className="lcc-ruled__row">
        {hasNum && <span className="lcc-ruled__num" aria-hidden="true">{num}</span>}
        <h3 className="lcc-ruled__title">{it.title}</h3>
        {it.body && <div className="lcc-ruled__body">{it.body}</div>}
      </li>;
    })}
  </ul>;
}
