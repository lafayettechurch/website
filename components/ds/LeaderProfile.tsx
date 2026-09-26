import { Card } from './Card';
import { Eyebrow } from './Eyebrow';
import { PhotoFrame } from './PhotoFrame';

/** Leader feature: 4:5 photo beside role, name, bio and an optional warm callout with an action. */
export function LeaderProfile({ role, name, photoAlt, photoSrc, photoLabel, children, calloutEyebrow, calloutTitle, calloutBody, action }: {
  role?: string; name: React.ReactNode; photoAlt?: string; photoSrc?: string; photoLabel?: string; children?: React.ReactNode;
  calloutEyebrow?: string; calloutTitle?: string; calloutBody?: React.ReactNode; action?: React.ReactNode;
}) {
  const hasCallout = calloutTitle || calloutBody || action;
  return <div className="lcc-leader">
    <div><PhotoFrame ratio="4:5" src={photoSrc} alt={photoAlt} label={photoLabel || 'Photo'} /></div>
    <div>
      {role && <Eyebrow>{role}</Eyebrow>}
      <h2 className="lcc-leader__name">{name}</h2>
      {children && <div className="lcc-leader__bio">{children}</div>}
      {hasCallout && <Card variant="warm" eyebrow={calloutEyebrow} title={calloutTitle} action={action}>{calloutBody}</Card>}
    </div>
  </div>;
}
