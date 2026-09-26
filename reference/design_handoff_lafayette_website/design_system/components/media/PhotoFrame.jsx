import React from 'react';
import { FacetMotif } from '../brand/FacetMotif.jsx';
import { Icon } from '../brand/Icon.jsx';
const R = { '4:5':'4 / 5', '4:3':'4 / 3', '16:9':'16 / 9', '1:1':'1 / 1' };
export function PhotoFrame({ ratio = '4:3', src, alt = '', label = 'Photo', facets = true, anchor = 'left', style }) {
  return <div style={{ position:'relative', overflow:'hidden', aspectRatio: R[ratio] || R['4:3'], background:'var(--lcc-sand)', borderRadius:'var(--radius-md)', width:'100%', ...style }}>
    {src ? <img src={src} alt={alt} style={{ position:'absolute', inset:0, width:'100%', height:'100%', objectFit:'cover', display:'block' }} /> : <>
      {facets && <FacetMotif preset="accent" anchor={anchor} scale={1.4} />}
      <div style={{ position:'absolute', inset:0, display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', gap:8, padding:16, textAlign:'center', fontFamily:'var(--font-body)', fontSize:13, fontWeight:600, color:'var(--lcc-sand-ink)' }}>
        <Icon name="image" size={22} color="var(--lcc-sand-ink)" />
        <span>{label}</span>
      </div>
    </>}
  </div>;
}
