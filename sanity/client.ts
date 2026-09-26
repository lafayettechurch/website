import { createClient } from 'next-sanity';
import { createImageUrlBuilder } from '@sanity/image-url';
import { apiVersion, dataset, projectId, sanityConfigured } from './env';

// useCdn: false on purpose. The site's own pages are cached by Vercel and only re-read
// Sanity when someone publishes. Sanity's CDN can still hold the previous version for
// a few moments after a publish, so reading through it right then can re-cache stale
// content. The direct API is always current, and the request volume is tiny.
export const client = sanityConfigured
  ? createClient({ projectId, dataset, apiVersion, useCdn: false, perspective: 'published' })
  : null;

const builder = sanityConfigured ? createImageUrlBuilder({ projectId, dataset }) : null;

type SanityImage = { asset?: { _ref?: string } } | null | undefined;

/**
 * A photo from Sanity → a sized, cropped URL (honors the hotspot editors set).
 * Returns '' when no photo has been uploaded, so PhotoFrame shows its placeholder.
 */
export function imageUrl(image: unknown, width: number, height: number) {
  const img = image as SanityImage;
  if (!builder || !img?.asset?._ref) return typeof image === 'string' ? image : '';
  return builder.image(img).width(width).height(height).fit('crop').auto('format').url();
}
