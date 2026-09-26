import React from 'react';
const LUCIDE='https://unpkg.com/lucide-static@0.460.0/icons/';
export function Icon({ name, size = 24, color = 'currentColor', label, style }) {
  const url = 'url(' + LUCIDE + name + '.svg) center/contain no-repeat';
  return <span role={label ? 'img' : undefined} aria-label={label} aria-hidden={label ? undefined : true}
    style={{ display: 'inline-block', flex: 'none', width: size, height: size, background: color, WebkitMask: url, mask: url, verticalAlign: 'middle', ...style }} />;
}
