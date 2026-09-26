import type { Metadata } from 'next';
import { Button, Card, Rich, RuledList, SectionBand } from '@/components/ds';
import { PageHero } from '@/components/site/PageHero';
import { getAbout } from '@/lib/content';

export const metadata: Metadata = {
  title: 'About',
  description: 'Who we are, our mission, our core values and what we believe.',
};

const rows = (items: { title: string; body: string }[]) => items.map(i => ({ title: <Rich text={i.title} />, body: <Rich text={i.body} /> }));

export default async function AboutPage() {
  const about = await getAbout();
  return <>
    <PageHero facets="soft" facetOpacity={0.8} titleMax="20ch" eyebrow={about.hero.eyebrow} title={about.hero.title} lede={<Rich text={about.hero.lede} />} />

    <SectionBand tone="deep" facets eyebrow={about.mission.eyebrow} label="Our mission">
      <p style={{ fontFamily: 'var(--font-display)', fontWeight: 300, fontSize: 'clamp(26px, 3.4vw, 42px)', lineHeight: 1.25, margin: 0, maxWidth: '26ch', color: '#fff', textWrap: 'balance' }}>
        <Rich text={about.mission.statement} />
      </p>
    </SectionBand>

    <SectionBand tone="cream" id="who-we-are" number="01" title={about.whoWeAre.title}>
      <div className="lcc-grid" style={{ ['--min' as string]: '280px' }}>
        {about.whoWeAre.cards.map(c => <Card key={c.title} eyebrow={c.eyebrow} title={c.title}><p><Rich text={c.body} /></p></Card>)}
      </div>
    </SectionBand>

    <SectionBand tone="white" id="values" number="02" title={about.values.title}>
      <RuledList numbered items={rows(about.values.items)} />
    </SectionBand>

    <SectionBand tone="cream" id="beliefs" number="03" title={about.beliefs.title} lede={about.beliefs.lede}>
      <RuledList items={rows(about.beliefs.items)} />
    </SectionBand>

    <SectionBand tone="warm" id="next-steps" eyebrow={about.nextSteps.eyebrow} title={about.nextSteps.title}>
      <div className="lcc-actions">
        <Button variant="secondary" href="/leadership">Our leadership</Button>
        <Button variant="outline" href="/visit">What to expect</Button>
      </div>
    </SectionBand>
  </>;
}
