import React from 'react';
const col = { fontSize:12, letterSpacing:'0.14em', textTransform:'uppercase', fontWeight:700, color:'var(--lcc-mist-2)', marginBottom:14 };
const DEFAULT_LINKS = [{ label:'Plan your visit', href:'#visit' }, { label:'Watch', href:'#watch' }, { label:'What we believe', href:'#about' }, { label:'Give', href:'#give' }, { label:'Contact', href:'#contact' }];
export function SiteFooter({ logoSrc = 'assets/logo-white.png', links = DEFAULT_LINKS, facebook = '#', instagram = '#', onNavigate, style }) {
  const nav = (l) => (e) => { if (onNavigate) { e.preventDefault(); onNavigate(l); } };
  const icon = (n) => <span style={{ width:18, height:18, background:'currentColor', WebkitMask:'url(https://unpkg.com/lucide-static@0.460.0/icons/' + n + '.svg) center/contain no-repeat', mask:'url(https://unpkg.com/lucide-static@0.460.0/icons/' + n + '.svg) center/contain no-repeat' }} />;
  const a = { color:'#FFFFFF', textDecoration:'none' };
  return <footer style={{ background:'var(--lcc-navy)', color:'#FFFFFF', fontFamily:'var(--font-body)', padding:'clamp(56px, 8vw, 88px) var(--gutter) 40px', ...style }}>
    <div style={{ maxWidth:'var(--container-max)', margin:'0 auto' }}>
      <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit, minmax(200px, 1fr))', gap:40, paddingBottom:48 }}>
        <div style={{ gridColumn:'span 2', minWidth:0 }}>
          <img src={logoSrc} alt="Lafayette Church of Christ" style={{ display:'block', height:64, width:'auto', marginBottom:28 }} />
          <p style={{ fontFamily:'var(--font-display)', fontWeight:300, fontSize:26, lineHeight:1.3, color:'var(--lcc-mist)', margin:0, maxWidth:'22ch' }}>A Jesus-community of life, light, and love.</p>
        </div>
        <div>
          <div style={col}>Gather with us</div>
          <div style={{ fontSize:15, lineHeight:1.7, color:'var(--lcc-mist)' }}>Sundays at 10 AM · worship<br />Bible classes at 9 AM<br />Wednesdays at 7 PM · Bible study</div>
          <div style={{ fontSize:15, lineHeight:1.6, color:'var(--lcc-mist)', marginTop:14 }}>115 New Ballwin Road<br />Ballwin, MO 63021</div>
        </div>
        <div>
          <div style={col}>Quick links</div>
          <div style={{ display:'grid', gap:8, fontSize:15 }}>{links.map(l => <a key={l.label} href={l.href} onClick={nav(l)} style={a}>{l.label}</a>)}</div>
        </div>
      </div>
      <div style={{ borderTop:'1px solid var(--lcc-navy-line)', paddingTop:24, display:'flex', flexWrap:'wrap', gap:16, justifyContent:'space-between', alignItems:'center', fontSize:13, color:'var(--lcc-mist-2)' }}>
        <div>In Ballwin since 1962</div>
        <div style={{ display:'flex', gap:20 }}>
          <a href={facebook} style={{ ...a, display:'flex', gap:8, alignItems:'center', color:'var(--lcc-mist)' }}>{icon('facebook')}Facebook</a>
          <a href={instagram} style={{ ...a, display:'flex', gap:8, alignItems:'center', color:'var(--lcc-mist)' }}>{icon('instagram')}Instagram</a>
        </div>
      </div>
    </div>
  </footer>;
}
