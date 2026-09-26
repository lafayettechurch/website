import { NextStudio } from 'next-sanity/studio';
import config from '@/sanity.config';
import { sanityConfigured } from '@/sanity/env';

export { metadata, viewport } from 'next-sanity/studio';
export const dynamic = 'force-static';

export default function StudioPage() {
  if (!sanityConfigured) {
    return <div style={{ fontFamily: 'system-ui, sans-serif', maxWidth: 560, margin: '80px auto', padding: '0 20px', lineHeight: 1.6 }}>
      <h1 style={{ fontSize: 24 }}>The editor isn’t connected yet</h1>
      <p>Set <code>NEXT_PUBLIC_SANITY_PROJECT_ID</code> (and <code>NEXT_PUBLIC_SANITY_DATASET</code>) and restart. See “Setting up Sanity” in the README.</p>
    </div>;
  }
  return <NextStudio config={config} />;
}
