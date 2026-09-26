import { Button, Card, InfoRow, Rich, SectionBand } from '@/components/ds';
import { PageHero } from '@/components/site/PageHero';
import { getHome, getSite, telHref } from '@/lib/content';

export default async function HomePage() {
  const [site, home] = await Promise.all([getSite(), getHome()]);
  return <>
    <PageHero tone="navy" facets="hero" facetOpacity={0.5} display ledeDisplay
      eyebrow={home.hero.eyebrow} title={home.hero.title} lede={home.hero.lede}>
      <div className="lcc-actions">
        <Button variant="primary" href="/visit">Plan your visit</Button>
        <Button variant="outline-on-dark" icon="circle-play" href="/watch">Watch this Sunday</Button>
      </div>
    </PageHero>

    <section className="lcc-strip" aria-label="Times and location">
      <div className="lcc-container lcc-grid" style={{ ['--min' as string]: '230px' }}>
        <InfoRow icon="clock" title={site.sunday.title} sub={`${site.sunday.worship} · ${site.sunday.classes}`} />
        <InfoRow icon="calendar" title={site.midweek.title} sub={site.midweek.detail} />
        <InfoRow icon="map-pin" title={site.address.street} sub={`${site.address.city} · Get directions`} href="/contact#find-us" />
      </div>
    </section>

    <SectionBand tone="cream" label="Visit or watch">
      <div className="lcc-grid">
        <Card eyebrow={home.newHere.eyebrow} title={home.newHere.title}
          action={<Button variant="secondary" href="/visit">What to expect</Button>}>
          <p><Rich text={home.newHere.body} /></p>
        </Card>
        <Card variant="deep" eyebrow={home.watch.eyebrow} title={home.watch.title}
          action={<Button variant="outline-on-dark" icon="circle-play" href="/watch">Watch live</Button>}>
          <p><Rich text={home.watch.body} /></p>
        </Card>
      </div>
    </SectionBand>

    <SectionBand tone="white" id="who-we-are" eyebrow={home.whoWeAre.eyebrow} title={home.whoWeAre.title} lede={<Rich text={home.whoWeAre.lede} />}>
      <div className="lcc-actions" style={{ gap: 24 }}>
        <Button variant="link" href="/about#beliefs">What we believe</Button>
        <Button variant="link" href="/leadership">Meet our leaders</Button>
      </div>
    </SectionBand>

    <SectionBand tone="warm" id="give" eyebrow={home.give.eyebrow} title={home.give.title}>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '24px 32px', alignItems: 'flex-end', justifyContent: 'space-between' }}>
        <p style={{ margin: 0, fontSize: 18, lineHeight: 1.65, color: 'var(--lcc-sand-ink)', maxWidth: '56ch', flex: '1 1 320px' }}><Rich text={home.give.body} /></p>
        <div><Button variant="secondary" href="/give">Ways to give</Button></div>
      </div>
    </SectionBand>

    <SectionBand tone="cream" id="contact" eyebrow={home.contact.eyebrow} title={home.contact.title} lede={<Rich text={home.contact.lede} />}>
      <div className="lcc-actions">
        <Button variant="secondary" icon="mail" href={'mailto:' + site.office.email}>Email the office</Button>
        <Button variant="outline" icon="phone" href={telHref(site.office.phone)}>Call the office</Button>
        <Button variant="outline" icon="map-pin" href="/contact#find-us">Map and directions</Button>
      </div>
    </SectionBand>
  </>;
}
