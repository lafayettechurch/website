// All editable copy comes from Sanity (edited at /studio). The JSON files in /content are
// the seed: they're loaded into Sanity once, and used as-is until Sanity is connected.
import { cache } from 'react';
import siteSeed from '@/content/site.json';
import homeSeed from '@/content/home.json';
import visitSeed from '@/content/visit.json';
import watchSeed from '@/content/watch.json';
import aboutSeed from '@/content/about.json';
import leadershipSeed from '@/content/leadership.json';
import giveSeed from '@/content/give.json';
import contactSeed from '@/content/contact.json';
import calendarSeed from '@/content/calendar.json';
import { client, imageUrl } from '@/sanity/client';

const SEEDS = {
  siteSettings: siteSeed, homePage: homeSeed, visitPage: visitSeed, watchPage: watchSeed, aboutPage: aboutSeed,
  leadershipPage: leadershipSeed, givePage: giveSeed, contactPage: contactSeed, calendarPage: calendarSeed,
};
type Docs = typeof SEEDS;

/** Cache tag cleared by the Sanity publish webhook (/api/revalidate). */
export const CONTENT_TAG = 'content';

/**
 * Fetches one page's content. The result always has the seed file's shape: a field an
 * editor cleared comes back empty (not the old seed text), and nothing is ever undefined.
 */
// Live site: cached, cleared by the publish webhook (and re-checked every 5 minutes as a backstop).
// Local dev: always fresh, so a publish in /studio shows on the next reload.
const FETCH_OPTIONS = process.env.NODE_ENV === 'development'
  ? { cache: 'no-store' as const }
  : { next: { tags: [CONTENT_TAG], revalidate: 300 } };

const getDoc = cache(async <K extends keyof Docs>(id: K): Promise<Docs[K]> => {
  if (!client) return SEEDS[id];
  const doc = await client.fetch(`*[_id == $id][0]`, { id: id as string }, FETCH_OPTIONS);
  return doc ? conform(SEEDS[id], doc) as Docs[K] : SEEDS[id];
});

export const getSite = () => getDoc('siteSettings');
export const getHome = () => getDoc('homePage');
export const getVisit = () => getDoc('visitPage');
export const getWatch = () => getDoc('watchPage');
export const getAbout = () => getDoc('aboutPage');
export const getGive = () => getDoc('givePage');
export const getContact = () => getDoc('contactPage');
export const getCalendarContent = () => getDoc('calendarPage');

export async function getLeadership() {
  const doc = await getDoc('leadershipPage');
  return {
    ...doc,
    minister: { ...doc.minister, photo: imageUrl(doc.minister.photo, 800, 1000) },
    shepherds: { ...doc.shepherds, people: doc.shepherds.people.map(p => ({ ...p, photo: imageUrl(p.photo, 800, 600) })) },
  };
}

/** Lays Sanity's data over an empty copy of the seed's shape. */
function conform(shape: unknown, value: unknown): unknown {
  if (Array.isArray(shape)) {
    if (!Array.isArray(value)) return [];
    const item = shape[0];
    return item === undefined ? value : value.map(v => conform(item, v));
  }
  if (shape && typeof shape === 'object') {
    const src = (value && typeof value === 'object' ? value : {}) as Record<string, unknown>;
    return Object.fromEntries(Object.entries(shape).map(([k, s]) => [k, conform(s, src[k])]));
  }
  if (typeof shape === 'string') {
    // Image fields are strings in the seed but image objects in Sanity; keep those as-is.
    return typeof value === 'string' ? value : (value && typeof value === 'object' ? value : '');
  }
  if (typeof shape === 'number') return typeof value === 'number' ? value : shape;
  return value ?? shape;
}

export const NAV = [
  { href: '/visit', label: 'I’m new' },
  { href: '/watch', label: 'Watch' },
  { href: '/about', label: 'About' },
  { href: '/leadership', label: 'Leadership' },
  { href: '/calendar', label: 'Calendar' },
  { href: '/give', label: 'Give' },
  { href: '/contact', label: 'Contact' },
];

export const FOOTER_LINKS = [
  { href: '/visit', label: 'Plan your visit' },
  { href: '/watch', label: 'Watch' },
  { href: '/about#beliefs', label: 'What we believe' },
  { href: '/leadership', label: 'Leadership' },
  { href: '/give', label: 'Give' },
  { href: '/calendar', label: 'Calendar' },
  { href: '/contact', label: 'Contact & location' },
];

/** "636-391-6697" → "tel:+16363916697" */
export const telHref = (phone: string) => 'tel:+1' + phone.replace(/\D/g, '').replace(/^1(?=\d{10}$)/, '');

/** Drops [placeholder] tags for plain-text contexts such as alt text and metadata. */
export const plain = (text: string) => text.replace(/\s*\[[^\]]+\]/g, '').trim();

export const directionsHref = (address: { street: string; city: string }) =>
  'https://www.google.com/maps/dir/?api=1&destination=' + encodeURIComponent(address.street + ', ' + address.city);
