import { SiteFooter } from '@/components/site/SiteFooter';
import { SiteHeader } from '@/components/site/SiteHeader';
import { NAV, getSite } from '@/lib/content';
import '@/styles/colors.css';
import '@/styles/typography.css';
import '@/styles/spacing.css';
import '@/styles/shape.css';
import '@/styles/base.css';
import '@/styles/components.css';

/** Header, footer and design-system styles around every public page. */
export async function SiteShell({ children }: { children: React.ReactNode }) {
  const site = await getSite();
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Church',
    name: site.name,
    url: 'https://lafayettechurch.org',
    email: site.office.email,
    telephone: '+1-' + site.office.phone,
    address: { '@type': 'PostalAddress', streetAddress: site.address.street, addressLocality: 'Ballwin', addressRegion: 'MO', postalCode: '63021', addressCountry: 'US' },
    sameAs: [site.links.facebook, site.links.instagram, site.links.youtube].filter(Boolean),
  };
  return <>
    <a className="lcc-skip" href="#main">Skip to content</a>
    <SiteHeader links={NAV} />
    <main id="main" tabIndex={-1}>{children}</main>
    <SiteFooter site={site} />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
  </>;
}
