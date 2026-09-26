// Lists every [bracketed placeholder] still on the site, so the team can see what's left to write.
// Reads from Sanity when it's connected (.env.local), otherwise from the seed files in /content.
// Usage: npm run placeholders
import { createClient } from '@sanity/client';
import { readFileSync, readdirSync } from 'node:fs';

const TYPES = {
  'site.json': 'siteSettings', 'home.json': 'homePage', 'visit.json': 'visitPage', 'watch.json': 'watchPage',
  'about.json': 'aboutPage', 'leadership.json': 'leadershipPage', 'give.json': 'givePage',
  'contact.json': 'contactPage', 'calendar.json': 'calendarPage',
};

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
let docs;
if (projectId) {
  const client = createClient({ projectId, dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production', apiVersion: '2026-09-01', useCdn: false });
  const list = await client.fetch(`*[_id in $ids]`, { ids: Object.values(TYPES) });
  docs = Object.fromEntries(list.map(d => [d._id, d]));
  console.log(`Checking Sanity (${projectId})\n`);
} else {
  const dir = new URL('../content/', import.meta.url);
  docs = Object.fromEntries(readdirSync(dir).filter(f => TYPES[f]).map(f => [TYPES[f], JSON.parse(readFileSync(new URL(f, dir), 'utf8'))]));
  console.log('Sanity not connected; checking the seed files in /content\n');
}

let total = 0;
const flag = (where, what) => { console.log(`  ${where}: ${what}`); total++; };
function walk(value, path, doc) {
  if (typeof value === 'string') for (const m of value.matchAll(/\[([^\]]+)\]/g)) flag(`${doc} › ${path}`, m[1]);
  else if (Array.isArray(value)) value.forEach((v, i) => walk(v, `${path}.${i}`, doc));
  else if (value && typeof value === 'object') for (const [k, v] of Object.entries(value)) if (!k.startsWith('_')) walk(v, path ? `${path}.${k}` : k, doc);
}
for (const [id, doc] of Object.entries(docs)) walk(doc, '', id);

if (!docs.siteSettings?.links?.breeze) flag('siteSettings › links.breeze', 'Breeze giving URL is empty');
if (!docs.leadershipPage?.minister?.email) flag('leadershipPage › minister.email', 'Kyle’s email is empty');

console.log(total ? `\n${total} item(s) still need content.` : 'No placeholders left.');
