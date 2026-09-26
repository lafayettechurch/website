export type EyebrowTone = 'slate' | 'clay' | 'amber' | 'on-dark';

/** Small uppercase kicker above a heading. */
export function Eyebrow({ tone = 'slate', children }: { tone?: EyebrowTone; children: React.ReactNode }) {
  return <p className={'lcc-eyebrow' + (tone === 'slate' ? '' : ' lcc-eyebrow--' + tone)}>{children}</p>;
}
