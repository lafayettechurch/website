import React from 'react';
import { FacetMotif } from '../brand/FacetMotif.jsx';
import { Icon } from '../brand/Icon.jsx';
export function VideoFrame({ href = 'https://www.youtube.com/', label = 'Watch on YouTube', sub, thumbnail, style }) {
  const [h, setH] = React.useState(false);
  return <a href={href} target="_blank" rel="noopener" onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)} style={{ position:'relative', display:'block', overflow:'hidden', aspectRatio:'16 / 9', background:'var(--lcc-navy)', borderRadius:'var(--radius-md)', color:'#FFFFFF', textDecoration:'none', fontFamily:'var(--font-body)', ...style }}>
    {thumbnail ? <img src={thumbnail} alt="" style={{ position:'absolute', inset:0, width:'100%', height:'100%', objectFit:'cover', opacity:.55 }} /> : <FacetMotif preset="corner" />}
    <div style={{ position:'absolute', inset:0, display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', gap:12, padding:24, textAlign:'center' }}>
      <Icon name="circle-play" size={64} color={h ? 'var(--lcc-amber)' : '#FFFFFF'} style={{ transition:'background-color 150ms' }} />
      <div style={{ fontSize:17, fontWeight:600 }}>{label}</div>
      {sub && <div style={{ fontSize:14, color:'var(--lcc-mist-2)' }}>{sub}</div>}
    </div>
  </a>;
}
