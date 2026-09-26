import React from 'react';
import { PhotoFrame } from '../media/PhotoFrame.jsx';
export function PersonCard({ name, line, photoSrc, photoLabel, style }) {
  return <div style={{ fontFamily:'var(--font-body)', minWidth:0, ...style }}>
    <PhotoFrame ratio="4:3" src={photoSrc} alt={typeof name === 'string' ? name : ''} label={photoLabel || 'Photo'} />
    <div style={{ fontFamily:'var(--font-display)', fontWeight:500, fontSize:22, lineHeight:1.25, color:'var(--lcc-navy)', margin:'16px 0 4px' }}>{name}</div>
    {line && <div style={{ fontSize:15, lineHeight:1.5, color:'var(--lcc-ink-3)' }}>{line}</div>}
  </div>;
}
