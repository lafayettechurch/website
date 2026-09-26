import { PhotoFrame } from './PhotoFrame';

/** Compact person tile: 4:3 photo above a Fraunces name and one muted line. */
export function PersonCard({ name, photoAlt, line, photoSrc, photoLabel }: { name: React.ReactNode; photoAlt?: string; line?: React.ReactNode; photoSrc?: string; photoLabel?: string }) {
  return <div className="lcc-person">
    <PhotoFrame ratio="4:3" src={photoSrc} alt={photoAlt} label={photoLabel || 'Photo'} />
    <h3 className="lcc-person__name">{name}</h3>
    {line && <p className="lcc-person__line">{line}</p>}
  </div>;
}
