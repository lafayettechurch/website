import { FacetMotif } from './FacetMotif';
import { Icon } from './Icon';

const R = { '4:5': '4 / 5', '4:3': '4 / 3', '16:9': '16 / 9', '1:1': '1 / 1' } as const;

/** Photo-ready frame: a sand panel with a facet accent and label until a real photo is set. */
export function PhotoFrame({ ratio = '4:3', src, alt = '', label = 'Photo', facets = true, anchor = 'left' }: {
  ratio?: keyof typeof R; src?: string; alt?: string; label?: string; facets?: boolean; anchor?: 'left' | 'right';
}) {
  return <div className="lcc-photo" style={{ aspectRatio: R[ratio] }}>
    {src
      // eslint-disable-next-line @next/next/no-img-element -- CMS uploads with unknown dimensions
      ? <img src={src} alt={alt} loading="lazy" />
      : <>
        {facets && <FacetMotif preset="accent" anchor={anchor} scale={1.4} />}
        <div className="lcc-photo__label">
          <Icon name="image" size={22} />
          <span>{label}</span>
        </div>
      </>}
  </div>;
}
