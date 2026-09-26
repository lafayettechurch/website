// Loads the copy in /content/*.json into Sanity, one document per page.
// Run once after creating the Sanity project:  npm run seed
//
// Safe to re-run: pages that already exist in Sanity are left alone.
// `npm run seed -- --force` overwrites them with the JSON files (this discards edits made in Sanity).
//
// Needs in .env.local: NEXT_PUBLIC_SANITY_PROJECT_ID, NEXT_PUBLIC_SANITY_DATASET,
// and SANITY_API_WRITE_TOKEN (an "Editor" token from sanity.io/manage → API → Tokens).
import { createClient } from '@sanity/client';
import { randomUUID } from 'node:crypto';
import { readFileSync } from 'node:fs';

const FILES = {
  siteSettings: 'site.json', homePage: 'home.json', visitPage: 'visit.json', watchPage: 'watch.json',
  aboutPage: 'about.json', leadershipPage: 'leadership.json', givePage: 'give.json',
  contactPage: 'contact.json', calendarPage: 'calendar.json',
};

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production';
const token = process.env.SANITY_API_WRITE_TOKEN;
if (!projectId || !token) {
  console.error('Set NEXT_PUBLIC_SANITY_PROJECT_ID and SANITY_API_WRITE_TOKEN in .env.local first (see README).');
  process.exit(1);
}
const force = process.argv.includes('--force');
const client = createClient({ projectId, dataset, token, apiVersion: '2026-09-01', useCdn: false });

/**
 * Sanity wants a _key on every array item. Empty values (the Breeze link, photos, optional
 * end times) are left out so they show as empty fields rather than invalid ones.
 */
function prepare(value) {
  if (Array.isArray(value)) return value.map(v => (v && typeof v === 'object' ? { _key: randomUUID().slice(0, 12), ...prepare(v) } : v));
  if (value && typeof value === 'object') {
    return Object.fromEntries(Object.entries(value).filter(([, v]) => v !== '').map(([k, v]) => [k, prepare(v)]));
  }
  return value;
}

const tx = client.transaction();
for (const [type, file] of Object.entries(FILES)) {
  const data = JSON.parse(readFileSync(new URL(`../content/${file}`, import.meta.url), 'utf8'));
  const doc = { _id: type, _type: type, ...prepare(data) };
  if (force) tx.createOrReplace(doc); else tx.createIfNotExists(doc);
  console.log(`${force ? 'Replacing' : 'Adding (if missing)'}: ${type}`);
}
await tx.commit();
console.log(`\nDone. Open /studio to see it.`);
