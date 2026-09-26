import { Eyebrow } from './Eyebrow';
import { FacetMotif } from './FacetMotif';

export type BandTone = 'cream' | 'white' | 'warm' | 'deep' | 'brand';
const EB = { cream: 'clay', white: 'clay', warm: 'amber', deep: 'on-dark', brand: 'on-dark' } as const;

/** Full-width page section with a centered 1180px container and optional heading block. */
export function SectionBand({ tone = 'cream', number, eyebrow, title, lede, facets, ruled, children, id, label }: {
  tone?: BandTone; number?: string; eyebrow?: React.ReactNode; title?: React.ReactNode; lede?: React.ReactNode;
  facets?: boolean; ruled?: boolean; children?: React.ReactNode; id?: string;
  /** Accessible name when the band has no visible title. */
  label?: string;
}) {
  const dark = tone === 'deep' || tone === 'brand';
  const hasHead = number || eyebrow || title || lede;
  const headingId = title && id ? id + '-title' : undefined;
  return <section id={id} aria-labelledby={headingId} aria-label={headingId ? undefined : label} className={'lcc-band' + (tone === 'cream' ? '' : ' lcc-band--' + tone)}>
    {facets && <FacetMotif preset={dark ? 'corner' : 'soft'} opacity={dark ? 1 : .8} />}
    <div className="lcc-container">
      {hasHead && <div className={'lcc-band__head' + (ruled || number ? ' lcc-band__head--ruled' : '')}>
        {eyebrow && <Eyebrow tone={EB[tone]}>{eyebrow}</Eyebrow>}
        {title && <div className="lcc-band__titlerow">
          {number && <span className="lcc-band__num" aria-hidden="true">{number}</span>}
          <h2 id={headingId} className="lcc-band__title">{title}</h2>
        </div>}
        {lede && <p className="lcc-band__lede">{lede}</p>}
      </div>}
      {children}
    </div>
  </section>;
}
