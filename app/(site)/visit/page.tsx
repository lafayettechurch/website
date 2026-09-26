import type { Metadata } from 'next';
import { Button, Card, Icon, InfoRow, Rich, RuledList, SectionBand } from '@/components/ds';
import { PageHero } from '@/components/site/PageHero';
import { VisitForm } from '@/components/site/VisitForm';
import { directionsHref, getSite, getVisit } from '@/lib/content';

export async function generateMetadata(): Promise<Metadata> {
  const site = await getSite();
  return {
    title: 'Plan your visit',
    description: `What a first Sunday at Lafayette looks like. ${site.sunday.title} · ${site.address.street}, ${site.address.city}.`,
  };
}

export default async function VisitPage() {
  const [site, visit] = await Promise.all([getSite(), getVisit()]);
  return <>
    <PageHero facets="soft" facetOpacity={0.8} eyebrow={visit.hero.eyebrow} title={visit.hero.title} lede={<Rich text={visit.hero.lede} />}>
      <div className="lcc-actions">
        <Button variant="secondary" href="#plan-form">Let us know you’re coming</Button>
        <Button variant="outline" icon="map-pin" href={directionsHref(site.address)}>Get directions</Button>
      </div>
    </PageHero>

    <section className="lcc-strip lcc-strip--top" aria-label="Times and location">
      <div className="lcc-container lcc-grid" style={{ ['--min' as string]: '240px' }}>
        <InfoRow icon="clock" title={site.sunday.title} sub={site.sunday.classes} />
        <InfoRow icon="map-pin" title={site.address.street} sub={site.address.city} />
        <div className="lcc-inforow">
          <Icon name="hourglass" size={22} />
          <div>
            <div className="lcc-inforow__title"><Rich text={visit.length.title} /></div>
            <span className="lcc-inforow__sub"><Rich text={visit.length.detail} /></span>
          </div>
        </div>
      </div>
    </section>

    <SectionBand tone="cream" id="what-to-expect" number="01" title={visit.expect.title}>
      <div className="lcc-grid">
        {visit.expect.cards.map(c => <Card key={c.title} eyebrow={c.eyebrow} title={c.title}><p><Rich text={c.body} /></p></Card>)}
      </div>
    </SectionBand>

    <SectionBand tone="white" id="midweek" number="02" title={visit.midweek.title}>
      <RuledList items={visit.midweek.items.map(i => ({ title: <Rich text={i.title} />, body: <Rich text={i.body} /> }))} />
    </SectionBand>

    <section id="plan-form" className="lcc-band" aria-labelledby="plan-form-title" style={{ scrollMarginTop: 80 }}>
      <div className="lcc-container lcc-grid" style={{ ['--min' as string]: '340px', gap: 40, alignItems: 'start' }}>
        <div className="lcc-band__head lcc-band__head--ruled" style={{ marginBottom: 0 }}>
          <div className="lcc-band__titlerow">
            <span className="lcc-band__num" aria-hidden="true">03</span>
            <h2 id="plan-form-title" className="lcc-band__title">{visit.form.title}</h2>
          </div>
          <p className="lcc-band__lede" style={{ maxWidth: '44ch', margin: '20px 0 32px' }}><Rich text={visit.form.intro} /></p>
          <Card variant="deep" eyebrow={visit.form.meetEyebrow} title={visit.form.meetTitle}
            action={<Button variant="outline-on-dark" href="/leadership">Meet Kyle</Button>}>
            <p><Rich text={visit.form.meetBody} /></p>
          </Card>
        </div>
        <div style={{ background: '#fff', border: '1px solid var(--lcc-line)', borderRadius: 'var(--radius-md)', padding: 'clamp(24px, 4vw, 36px)' }}>
          <VisitForm privacy={visit.form.privacy} successBody={visit.form.successBody} officeEmail={site.office.email} />
        </div>
      </div>
    </section>
  </>;
}
