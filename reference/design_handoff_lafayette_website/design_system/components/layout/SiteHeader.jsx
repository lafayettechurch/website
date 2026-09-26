import React from 'react';
import { Button } from '../actions/Button.jsx';
const DEFAULT_LINKS = [{ label:"I'm new", href:'#new' }, { label:'Watch', href:'#watch' }, { label:'About', href:'#about' }, { label:'Times & location', href:'#visit' }, { label:'Give', href:'#give' }];
export function SiteHeader({ links = DEFAULT_LINKS, active, logoSrc = 'assets/logo-color-trimmed.png', markSrc = 'assets/logo-icon.jpeg', ctaLabel = 'Plan your visit', onCta, onNavigate, compact, sticky = true, style }) {
  const [open, setOpen] = React.useState(false);
  const nav = (l) => (e) => { if (onNavigate) { e.preventDefault(); onNavigate(l); } setOpen(false); };
  return <header style={{ position: sticky ? 'sticky' : 'relative', top:0, zIndex:30, background:'rgba(246,241,233,0.92)', backdropFilter:'blur(8px)', WebkitBackdropFilter:'blur(8px)', borderBottom:'1px solid var(--lcc-line-strong)', fontFamily:'var(--font-body)', ...style }}>
    <div style={{ maxWidth:'var(--container-max)', margin:'0 auto', padding:'0 var(--gutter)', minHeight:72, display:'flex', alignItems:'center', gap:24 }}>
      <a href="#" onClick={nav({ label:'Home', href:'#' })} style={{ display:'flex', alignItems:'center', flex:'none' }}>
        {compact ? <img src={markSrc} alt="Lafayette Church of Christ" style={{ width:44, height:44, borderRadius:'50%' }} />
          : <img src={logoSrc} alt="Lafayette Church of Christ" style={{ height:48, width:'auto' }} />}
      </a>
      <nav style={{ display:'flex', gap:28, alignItems:'center', marginLeft:'auto', fontSize:15, fontWeight:500 }} className="lcc-header-nav">
        {!compact && links.map(l => <a key={l.label} href={l.href} onClick={nav(l)} style={{ color: active === l.label ? 'var(--lcc-navy)' : 'var(--lcc-slate)', textDecoration:'none', padding:'12px 0', borderBottom: active === l.label ? '2px solid var(--lcc-amber)' : '2px solid transparent' }}>{l.label}</a>)}
      </nav>
      {!compact && ctaLabel && <Button variant="primary" size="sm" onClick={onCta}>{ctaLabel}</Button>}
      {compact && <div style={{ marginLeft:'auto', display:'flex', gap:8, alignItems:'center' }}>
        {ctaLabel && <Button variant="primary" size="sm" onClick={onCta}>{ctaLabel}</Button>}
        <button aria-label="Menu" aria-expanded={open} onClick={() => setOpen(!open)} style={{ width:48, height:48, border:'1.5px solid var(--lcc-slate)', borderRadius:3, background:'transparent', display:'grid', placeItems:'center', cursor:'pointer' }}>
          <span style={{ width:22, height:22, background:'var(--lcc-slate)', WebkitMask:'url(https://unpkg.com/lucide-static@0.460.0/icons/' + (open ? 'x' : 'menu') + '.svg) center/contain no-repeat', mask:'url(https://unpkg.com/lucide-static@0.460.0/icons/' + (open ? 'x' : 'menu') + '.svg) center/contain no-repeat' }} />
        </button>
      </div>}
    </div>
    {compact && open && <nav style={{ borderTop:'1px solid var(--lcc-line-strong)', padding:'8px var(--gutter) 16px', display:'grid' }}>
      {links.map(l => <a key={l.label} href={l.href} onClick={nav(l)} style={{ color:'var(--lcc-navy)', textDecoration:'none', fontFamily:'var(--font-display)', fontSize:22, padding:'12px 0', borderBottom:'1px solid var(--lcc-line-soft)' }}>{l.label}</a>)}
    </nav>}
  </header>;
}
