import React from 'react';
const C = { navy:'#1E2A3A', slate:'#3E5A76', light:'#7890A8', clay:'#B4533C', amber:'#C98A2E', cream:'#F6F1E9' };
// [top, side, w, h, color, opacity, rotate] — side is right or left offset per anchor
const PRESETS = {
  hero: [['-8%','4%',190,190,'slate',.85,12],['18%','16%',130,130,'light',.55,-6],['44%','2%',220,90,'amber',.4,9],['b-12%','22%',160,160,'clay',.45,-14],['b6%','9%',70,70,'cream',.25,18]],
  corner: [[-20,-10,150,150,'slate',.85,14],['b24',54,84,84,'clay',.6,-9],['b-18',-14,100,100,'amber',.45,20]],
  card: [[-30,-20,120,120,'slate',.7,16],['b-24',34,74,74,'amber',.4,-10]],
  soft: [[20,26,110,110,'slate',.5,-8],[62,88,96,96,'light',.55,11],[108,34,130,62,'amber',.42,-5]],
  accent: [[-14,-14,70,70,'light',.45,16]],
};
export function FacetMotif({ preset = 'corner', anchor = 'right', scale = 1, opacity = 1, style }) {
  const panes = PRESETS[preset] || PRESETS.corner;
  const px = v => typeof v === 'number' ? v * scale + 'px' : v;
  return <div aria-hidden="true" style={{ position:'absolute', inset:0, overflow:'hidden', pointerEvents:'none', opacity, ...style }}>
    {panes.map(([t, s, w, h, c, o, r], i) => {
      const bottom = typeof t === 'string' && t[0] === 'b';
      const tv = bottom ? (t.slice(1).includes('%') ? t.slice(1) : Number(t.slice(1))) : t;
      const pos = { [bottom ? 'bottom' : 'top']: px(tv), [anchor === 'left' ? 'left' : 'right']: px(s) };
      return <div key={i} style={{ position:'absolute', ...pos, width: w * scale, height: h * scale, background: C[c], opacity: o, transform: 'rotate(' + (anchor === 'left' ? -r : r) + 'deg)' }} />;
    })}
  </div>;
}
