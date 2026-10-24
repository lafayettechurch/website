import type { MetadataRoute } from 'next';

const PAGES = ['', '/visit', '/watch', '/about', '/leadership', '/calendar', '/give', '/contact'];

export default function sitemap(): MetadataRoute.Sitemap {
  return PAGES.map(p => ({
    url: 'https://lafayettechurch.org' + p,
    changeFrequency: p === '/calendar' ? 'daily' : 'weekly',
    priority: p === '' ? 1 : p === '/visit' ? 0.9 : 0.7,
  }));
}
