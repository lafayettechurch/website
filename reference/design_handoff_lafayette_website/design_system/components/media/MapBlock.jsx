import React from 'react';
import { Button } from '../actions/Button.jsx';
import { InfoRow } from '../lists/InfoRow.jsx';
export function MapBlock({ address = '115 New Ballwin Road', city = 'Ballwin, MO 63021', query, embedSrc, directionsHref, ratio = '16 / 9', style }) {
  const q = encodeURIComponent(query || address + ', ' + city);
  const src = embedSrc || 'https://maps.google.com/maps?q=' + q + '&z=15&output=embed';
  const dir = directionsHref || 'https://www.google.com/maps/dir/?api=1&destination=' + q;
  return <div style={{ fontFamily:'var(--font-body)', ...style }}>
    <div style={{ display:'flex', flexWrap:'wrap', gap:16, alignItems:'center', justifyContent:'space-between', marginBottom:20 }}>
      <InfoRow icon="map-pin" title={address} sub={city} />
      <Button variant="outline" icon="navigation" href={dir}>Get directions</Button>
    </div>
    <div style={{ border:'1px solid var(--lcc-line)', borderRadius:'var(--radius-md)', overflow:'hidden', background:'var(--lcc-sand)', aspectRatio: ratio }}>
      <iframe title={'Map of ' + address} src={src} loading="lazy" style={{ border:0, width:'100%', height:'100%', display:'block' }} />
    </div>
  </div>;
}
