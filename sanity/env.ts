// Sanity connection settings. Set these in .env.local and in Vercel (see README).
export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '';
export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production';
export const apiVersion = '2026-09-01';

/** False until the Sanity project exists; the site then reads the seed files in /content. */
export const sanityConfigured = /^[a-z0-9]+$/.test(projectId);
