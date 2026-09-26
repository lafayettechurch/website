import type { Metadata, Viewport } from 'next';
import { SiteShell } from '@/components/site/SiteShell';
import { getSite } from '@/lib/content';

export async function generateMetadata(): Promise<Metadata> {
  const site = await getSite();
  return {
    title: { default: site.name + ' · Ballwin, MO', template: '%s · ' + site.name },
    description: `${site.tagline} Worship ${site.sunday.title.toLowerCase()} at ${site.address.street}, ${site.address.city}.`,
    openGraph: { siteName: site.name, locale: 'en_US', type: 'website' },
  };
}

export const viewport: Viewport = { themeColor: '#F6F1E9' };

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return <SiteShell>{children}</SiteShell>;
}
