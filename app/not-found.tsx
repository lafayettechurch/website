import { Button } from '@/components/ds';
import { PageHero } from '@/components/site/PageHero';
import { SiteShell } from '@/components/site/SiteShell';

export const metadata = { title: 'Page not found · Lafayette Church of Christ' };

export default function NotFound() {
  return <SiteShell>
    <PageHero facets="soft" facetOpacity={0.8} eyebrow="Page not found" title="We couldn’t find that page."
      lede="It may have moved when we rebuilt the site. These are good places to start.">
      <div className="lcc-actions">
        <Button variant="primary" href="/visit">Plan your visit</Button>
        <Button variant="outline" href="/">Go to the home page</Button>
      </div>
    </PageHero>
  </SiteShell>;
}
