import Link from 'next/link';
import { Icon } from '@/components/ds/Icon';
import { FOOTER_LINKS, type getSite } from '@/lib/content';

type Site = Awaited<ReturnType<typeof getSite>>;

/** Deep navy footer — logo + tagline, times, address, quick links, Facebook and Instagram. */
export function SiteFooter({ site }: { site: Site }) {
  return <footer className="lcc-footer">
    <div className="lcc-container">
      <div className="lcc-footer__grid">
        <div className="lcc-footer__brand">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img className="lcc-footer__logo" src="/assets/logo-white.png" alt="Lafayette Church of Christ" />
          <p className="lcc-footer__tagline">{site.tagline}</p>
        </div>
        <div>
          <h2 className="lcc-footer__col">Gather with us</h2>
          <p className="lcc-footer__text">{lines(site.footer.times)}</p>
          <p className="lcc-footer__text">{site.address.street}<br />{site.address.city}</p>
        </div>
        <nav aria-label="Quick links">
          <h2 className="lcc-footer__col">Quick links</h2>
          <ul className="lcc-footer__links">
            {FOOTER_LINKS.map(l => <li key={l.href}><Link href={l.href}>{l.label}</Link></li>)}
          </ul>
        </nav>
      </div>
      <div className="lcc-footer__bottom">
        <div>{site.footer.since}</div>
        <div className="lcc-footer__social">
          <a href={site.links.facebook} target="_blank" rel="noopener noreferrer"><Icon name="facebook" size={18} />Facebook</a>
          <a href={site.links.instagram} target="_blank" rel="noopener noreferrer"><Icon name="instagram" size={18} />Instagram</a>
        </div>
      </div>
    </div>
  </footer>;
}

const lines = (s: string) => s.split('\n').map((l, i, a) => <span key={i}>{l}{i < a.length - 1 && <br />}</span>);
