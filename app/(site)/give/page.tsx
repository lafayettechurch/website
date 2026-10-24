import type { Metadata } from 'next';
import Link from 'next/link';
import { Button, Card, Placeholder, Rich, RuledList, SectionBand } from '@/components/ds';
import { PageHero } from '@/components/site/PageHero';
import { PendingLinkButton } from '@/components/site/PendingLinkButton';
import { getGive, getSite, plain } from '@/lib/content';

export const metadata: Metadata = {
  title: 'Give',
  description: 'Thank you for supporting the work of Lafayette. Give online through Breeze, once or recurring.',
};

export default async function GivePage() {
  const [site, give] = await Promise.all([getSite(), getGive()]);
  const ministries = give.ministries.items.filter(m => m.name);
  const questions = <p style={{ margin: '32px 0 0', fontSize: 16, lineHeight: 1.6, color: 'var(--lcc-ink-2)' }}>
    Questions about giving? <Link href="/contact">Email the office</Link> — a real person will answer.
  </p>;

  return <>
    <PageHero tone="sand" facets="soft" facetOpacity={0.6} eyebrow={give.hero.eyebrow} title={give.hero.title} lede={<Rich text={give.hero.lede} />}>
      <div className="lcc-actions">
        <PendingLinkButton variant="secondary" icon="heart-handshake" href={site.links.breeze || undefined}
          fallbackMessage={`Online giving is being set up. Questions? Email ${site.office.email}.`}>Give online</PendingLinkButton>
        <span className="lcc-hero__note">{give.hero.note}</span>
      </div>
    </PageHero>

    <SectionBand tone="cream" label="Ways to give">
      <div className="lcc-grid" style={{ ['--min' as string]: '280px' }}>
        {give.cards.map(c => <Card key={c.title} eyebrow={c.eyebrow} title={c.title}><p><Rich text={c.body} /></p></Card>)}
      </div>
      {ministries.length === 0 && questions}
    </SectionBand>

    {ministries.length > 0 && <SectionBand tone="white" id="missions" eyebrow={give.ministries.eyebrow} title={give.ministries.title}
      lede={give.ministries.lede ? <Rich text={give.ministries.lede} /> : undefined}>
      <RuledList items={ministries.map(m => ({
        title: <Rich text={m.name} />,
        body: <>
          {m.note && <p style={{ margin: '0 0 8px' }}><Rich text={m.note} /></p>}
          {m.url
            ? <Button variant="link" href={m.url}>Give to {plain(m.name)}</Button>
            : <Placeholder>Giving link needed</Placeholder>}
        </>,
      }))} />
      {questions}
    </SectionBand>}
  </>;
}
