import { revalidateTag } from 'next/cache';
import { type NextRequest, NextResponse } from 'next/server';
import { parseBody } from 'next-sanity/webhook';
import { CONTENT_TAG } from '@/lib/content';

/**
 * Sanity calls this when anyone publishes, so the change is live on the next page load.
 * Configure the webhook in sanity.io/manage (see README) with SANITY_REVALIDATE_SECRET.
 */
export async function POST(req: NextRequest) {
  const secret = process.env.SANITY_REVALIDATE_SECRET;
  if (!secret) return new NextResponse('SANITY_REVALIDATE_SECRET is not set', { status: 500 });
  // `true`: wait until the published change is readable before clearing the cache.
  const { isValidSignature, body } = await parseBody<{ _type?: string }>(req, secret, true);
  if (!isValidSignature) return new NextResponse('Invalid signature', { status: 401 });
  revalidateTag(CONTENT_TAG, { expire: 0 });
  return NextResponse.json({ revalidated: true, type: body?._type ?? null });
}
