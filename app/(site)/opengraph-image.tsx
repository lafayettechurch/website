import { readFile } from 'node:fs/promises';
import { join } from 'node:path';
import { ImageResponse } from 'next/og';
import { getSite } from '@/lib/content';

// The picture shown when someone shares a link to the site (Facebook, texts, email previews).
export const alt = 'Lafayette Church of Christ, Ballwin, Missouri';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

// logo-white.png is 1359×526; shown 96px tall.
const LOGO_W = Math.round(96 * 1359 / 526);

/** Fraunces, the site's heading font, as TTF/WOFF for the image renderer (it can't read WOFF2). Falls back to the default font. */
async function fraunces(): Promise<ArrayBuffer | null> {
  try {
    const css = await (await fetch('https://fonts.googleapis.com/css2?family=Fraunces:wght@500&display=swap', {
      // An older browser identity makes Google return WOFF instead of WOFF2.
      headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 6.1) AppleWebKit/534.30 (KHTML, like Gecko) Safari/534.30' },
    })).text();
    // Google splits the font by character set; take the basic "latin" block.
    const url = css.split('/* latin */')[1]?.match(/src: url\((.+?)\) format\('(?:truetype|opentype|woff)'\)/)?.[1];
    return url ? await (await fetch(url)).arrayBuffer() : null;
  } catch {
    return null;
  }
}

export default async function OpengraphImage() {
  const [logo, font, site] = await Promise.all([
    readFile(join(process.cwd(), 'public/assets/logo-white.png')),
    fraunces(),
    getSite(),
  ]);
  const logoSrc = `data:image/png;base64,${logo.toString('base64')}`;

  return new ImageResponse(
    <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', background: '#1E2A3A', padding: '72px 80px', position: 'relative' }}>
      {/* Facet motif, as in the site's hero */}
      <div style={{ position: 'absolute', top: -40, right: 60, width: 260, height: 260, background: '#3E5A76', opacity: 0.85, transform: 'rotate(12deg)' }} />
      <div style={{ position: 'absolute', top: 210, right: 230, width: 170, height: 170, background: '#7890A8', opacity: 0.5, transform: 'rotate(-6deg)' }} />
      <div style={{ position: 'absolute', bottom: -50, right: 120, width: 300, height: 120, background: '#C98A2E', opacity: 0.4, transform: 'rotate(9deg)' }} />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={logoSrc} height={96} width={LOGO_W} alt="" />
      <div style={{ display: 'flex', flexDirection: 'column', maxWidth: 820 }}>
        <div style={{ ...(font ? { fontFamily: 'Fraunces' } : {}), fontSize: 64, lineHeight: 1.1, color: '#FFFFFF' }}>
          {site.tagline}
        </div>
        <div style={{ marginTop: 28, fontSize: 30, color: '#C9D4E0' }}>{`${site.sunday.title} · ${site.address.city.replace(/\s*\d{5}$/, '')}`}</div>
      </div>
    </div>,
    { ...size, fonts: font ? [{ name: 'Fraunces', data: font, weight: 500, style: 'normal' }] : [] },
  );
}
