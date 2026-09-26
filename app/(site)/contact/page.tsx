import type { Metadata } from 'next';
import { Icon, MapBlock, Rich, RuledList } from '@/components/ds';
import { PageHero } from '@/components/site/PageHero';
import { directionsHref, getContact, getSite, telHref } from '@/lib/content';

export async function generateMetadata(): Promise<Metadata> {
  const site = await getSite();
  return {
    title: 'Contact & location',
    description: `Email ${site.office.email} or call ${site.office.phone}. ${site.address.street}, ${site.address.city}.`,
  };
}

export default async function ContactPage() {
  const [site, contact] = await Promise.all([getSite(), getContact()]);
  return <>
    <PageHero flush eyebrow={contact.hero.eyebrow} title={contact.hero.title} lede={<Rich text={contact.hero.lede} />} />

    <section aria-label="Ways to reach us" style={{ background: 'var(--lcc-cream)', padding: '0 var(--gutter) 48px' }}>
      <div className="lcc-container lcc-grid" style={{ ['--min' as string]: '250px' }}>
        <div className="lcc-tile">
          <Icon name="mail" />
          <h2 className="lcc-tile__label">Email</h2>
          <a className="lcc-tile__value" href={'mailto:' + site.office.email}>{site.office.email}</a>
        </div>
        <div className="lcc-tile">
          <Icon name="phone" />
          <h2 className="lcc-tile__label">Phone</h2>
          <a className="lcc-tile__value" href={telHref(site.office.phone)}>{site.office.phone}</a>
          <div className="lcc-tile__meta">Office hours: <Rich text={site.office.hours} /></div>
        </div>
        <div className="lcc-tile">
          <Icon name="users" />
          <h2 className="lcc-tile__label">Follow along</h2>
          <div className="lcc-social">
            <a href={site.links.facebook} target="_blank" rel="noopener noreferrer"><Icon name="facebook" size={20} />Facebook</a>
            <a href={site.links.instagram} target="_blank" rel="noopener noreferrer"><Icon name="instagram" size={20} />Instagram</a>
          </div>
        </div>
      </div>
    </section>

    <section id="find-us" className="lcc-band lcc-band--white" aria-labelledby="find-us-title" style={{ borderTop: '1px solid var(--lcc-line)', scrollMarginTop: 72 }}>
      <div className="lcc-container">
        <div className="lcc-band__head lcc-band__head--ruled" style={{ marginBottom: 32 }}>
          <div className="lcc-band__titlerow">
            <span className="lcc-band__num" aria-hidden="true">01</span>
            <h2 id="find-us-title" className="lcc-band__title">{contact.findUs.title}</h2>
          </div>
        </div>
        <MapBlock address={site.address.street} city={site.address.city} directionsHref={directionsHref(site.address)} />
        <RuledList style={{ marginTop: 48 }} items={contact.directions.map(d => ({ title: <Rich text={d.title} />, body: <Rich text={d.body} /> }))} />
      </div>
    </section>
  </>;
}
