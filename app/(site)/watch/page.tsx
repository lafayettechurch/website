import type { Metadata } from 'next';
import { Button, Card, Rich, SectionBand } from '@/components/ds';
import { LiveVideoFrame } from '@/components/site/LiveVideoFrame';
import { PageHero } from '@/components/site/PageHero';
import { getSite, getWatch } from '@/lib/content';

export const metadata: Metadata = {
  title: 'Watch',
  description: 'Watch Lafayette live on YouTube Sundays from 9 AM, or browse past sermons.',
};

export default async function WatchPage() {
  const [site, watch] = await Promise.all([getSite(), getWatch()]);
  const { cards } = watch;
  return <>
    <PageHero tone="navy" facets="hero" facetOpacity={0.5} ledeDisplay
      eyebrow={watch.hero.eyebrow} title={watch.hero.title} lede={<Rich text={watch.hero.lede} />}>
      <div className="lcc-actions">
        <Button variant="primary" icon="circle-play" href={site.links.live}>Watch live</Button>
        <Button variant="outline-on-dark" icon="list-video" href={site.links.playlist}>Browse past sermons</Button>
      </div>
    </PageHero>

    <SectionBand tone="cream" label="Watch online">
      <LiveVideoFrame liveHref={site.links.live} playlistHref={site.links.playlist}
        start={site.stream.start} end={site.stream.end} copy={watch.video} />
      <div className="lcc-grid" style={{ ['--min' as string]: '280px', marginTop: 20 }}>
        <Card eyebrow={cards.live.eyebrow} title={cards.live.title}><p><Rich text={cards.live.body} /></p></Card>
        <Card eyebrow={cards.recent.eyebrow} title={cards.recent.title}
          action={<Button variant="outline" icon="list-video" href={site.links.playlist}>Browse past sermons</Button>}>
          <p><Rich text={cards.recent.body} /></p>
        </Card>
        <Card variant="warm" eyebrow={cards.visit.eyebrow} title={cards.visit.title}
          action={<Button variant="secondary" href="/visit">What to expect</Button>}>
          <p><Rich text={cards.visit.body} /></p>
        </Card>
      </div>
    </SectionBand>
  </>;
}
