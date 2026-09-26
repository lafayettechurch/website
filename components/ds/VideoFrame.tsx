import { FacetMotif } from './FacetMotif';
import { Icon } from './Icon';

/** 16:9 navy frame that links out to YouTube instead of embedding. */
export function VideoFrame({ href, label = 'Watch on YouTube', sub, thumbnail }: { href: string; label?: string; sub?: string; thumbnail?: string }) {
  return <a className="lcc-video" href={href} target="_blank" rel="noopener noreferrer">
    {/* eslint-disable-next-line @next/next/no-img-element */}
    {thumbnail ? <img src={thumbnail} alt="" /> : <FacetMotif preset="corner" />}
    <div className="lcc-video__center">
      <Icon name="circle-play" size={64} className="lcc-video__play" />
      <div className="lcc-video__label">{label}<span className="lcc-sr-only"> (opens YouTube in a new tab)</span></div>
      {sub && <div className="lcc-video__sub">{sub}</div>}
    </div>
  </a>;
}
