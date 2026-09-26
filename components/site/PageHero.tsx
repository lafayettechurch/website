import { Eyebrow, type EyebrowTone } from '@/components/ds/Eyebrow';
import { FacetMotif, type FacetPreset } from '@/components/ds/FacetMotif';

/** The top-of-page hero pattern shared by every page in the prototype. */
export function PageHero({ tone = 'cream', facets, facetOpacity, eyebrow, eyebrowTone, title, display, lede, ledeDisplay, flush, titleMax, children }: {
  tone?: 'cream' | 'navy' | 'sand'; facets?: FacetPreset; facetOpacity?: number;
  eyebrow: React.ReactNode; eyebrowTone?: EyebrowTone; title: React.ReactNode;
  /** Home only: the larger display size. */ display?: boolean;
  lede?: React.ReactNode; /** Fraunces 300 lede used on navy heroes. */ ledeDisplay?: boolean;
  /** Tighter bottom padding when the next section continues on the same cream. */ flush?: boolean;
  titleMax?: string; children?: React.ReactNode;
}) {
  const cls = ['lcc-hero', tone !== 'cream' && 'lcc-hero--' + tone, flush && 'lcc-hero--flush'].filter(Boolean).join(' ');
  const tones = { cream: 'clay', navy: 'on-dark', sand: 'amber' } as const;
  return <section className={cls} aria-labelledby="page-title">
    {facets && <FacetMotif preset={facets} opacity={facetOpacity} />}
    <div className="lcc-container">
      <Eyebrow tone={eyebrowTone ?? tones[tone]}>{eyebrow}</Eyebrow>
      <h1 id="page-title" className={display ? 'lcc-hero__display' : 'lcc-hero__title'} style={titleMax ? { ['--title-max' as string]: titleMax } : undefined}>{title}</h1>
      {lede && <p className={ledeDisplay ? 'lcc-hero__lede-display' : 'lcc-hero__lede'} style={display ? { maxWidth: '30ch' } : undefined}>{lede}</p>}
      {children}
    </div>
  </section>;
}
