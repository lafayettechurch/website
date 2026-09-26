import React from 'react';
const box = { width:'100%', boxSizing:'border-box', minHeight:48, padding:'0 14px', border:'1px solid var(--lcc-slate-light)', borderRadius:'var(--radius-sm)', background:'#FFFFFF', color:'var(--lcc-navy)', fontFamily:'var(--font-body)', fontSize:16, lineHeight:1.4 };
export function FormField({ type = 'text', label, name, options = [], placeholder, hint, required, value, defaultValue, onChange, rows = 4, style }) {
  const id = React.useId ? React.useId() : name;
  const lab = <label htmlFor={type === 'radio' ? undefined : id} style={{ display:'block', fontSize:14, fontWeight:600, lineHeight:1.4, color:'var(--lcc-navy)', marginBottom:6 }}>{label}{required ? '' : <span style={{ fontWeight:400, color:'var(--lcc-ink-3)' }}> (optional)</span>}</label>;
  const common = { id, name, required, value, defaultValue, placeholder, onChange: onChange ? (e) => onChange(e.target.value, e) : undefined };
  let control;
  if (type === 'textarea') control = <textarea {...common} rows={rows} style={{ ...box, padding:'12px 14px', resize:'vertical', minHeight:120 }} />;
  else if (type === 'select') control = <select {...common} style={{ ...box, appearance:'none', WebkitAppearance:'none', paddingRight:40, backgroundImage:'linear-gradient(45deg, transparent 50%, #3E5A76 50%), linear-gradient(135deg, #3E5A76 50%, transparent 50%)', backgroundPosition:'calc(100% - 20px) 50%, calc(100% - 15px) 50%', backgroundSize:'5px 5px', backgroundRepeat:'no-repeat' }}>
    {placeholder && <option value="">{placeholder}</option>}
    {options.map(o => { const v = typeof o === 'string' ? o : o.value; return <option key={v} value={v}>{typeof o === 'string' ? o : o.label}</option>; })}
  </select>;
  else if (type === 'radio') control = <div role="radiogroup" aria-label={typeof label === 'string' ? label : undefined} style={{ display:'grid', gap:8 }}>
    {options.map(o => { const v = typeof o === 'string' ? o : o.value; return <label key={v} style={{ ...box, display:'flex', alignItems:'center', gap:12, cursor:'pointer' }}>
      <input type="radio" name={name} value={v} required={required} defaultChecked={defaultValue === v} checked={value === undefined ? undefined : value === v} onChange={onChange ? (e) => onChange(e.target.value, e) : undefined} style={{ width:18, height:18, margin:0, accentColor:'var(--lcc-slate)' }} />
      <span>{typeof o === 'string' ? o : o.label}</span>
    </label>; })}
  </div>;
  else control = <input {...common} type={type} style={box} />;
  return <div style={{ fontFamily:'var(--font-body)', minWidth:0, ...style }}>
    {type === 'radio' ? <div>{lab}</div> : lab}
    {control}
    {hint && <div style={{ fontSize:13, lineHeight:1.5, color:'var(--lcc-ink-3)', marginTop:6 }}>{hint}</div>}
  </div>;
}
