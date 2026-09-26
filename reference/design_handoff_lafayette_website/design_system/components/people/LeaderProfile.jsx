import React from 'react';
import { PhotoFrame } from '../media/PhotoFrame.jsx';
import { Eyebrow } from '../content/Eyebrow.jsx';
import { Card } from '../content/Card.jsx';
export function LeaderProfile({ role, name, photoSrc, photoLabel, children, calloutEyebrow, calloutTitle, calloutBody, action, reverse, style }) {
  const photo = <div style={{ minWidth:0 }}><PhotoFrame ratio="4:5" src={photoSrc} alt={typeof name === 'string' ? name : ''} label={photoLabel || (typeof name === 'string' ? 'Photo of ' + name : 'Photo')} /></div>;
  const hasCallout = calloutTitle || calloutBody || action;
  return <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit, minmax(260px, 1fr))', gap:'clamp(24px, 4vw, 56px)', alignItems:'start', fontFamily:'var(--font-body)', ...style }}>
    {!reverse && photo}
    <div style={{ minWidth:0 }}>
      {role && <Eyebrow>{role}</Eyebrow>}
      <h3 style={{ fontFamily:'var(--font-display)', fontWeight:500, fontSize:'clamp(30px, 3.4vw, 40px)', lineHeight:1.1, letterSpacing:'-0.015em', margin:'0 0 18px', color:'var(--lcc-navy)' }}>{name}</h3>
      {children && <div style={{ fontSize:17, lineHeight:1.65, color:'var(--lcc-ink-2)', maxWidth:'60ch', marginBottom: hasCallout ? 28 : 0 }}>{children}</div>}
      {hasCallout && <Card variant="warm" padding={24} eyebrow={calloutEyebrow} title={calloutTitle} action={action}>{calloutBody}</Card>}
    </div>
    {reverse && photo}
  </div>;
}
