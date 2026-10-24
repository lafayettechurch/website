import { type NextRequest, NextResponse } from 'next/server';

const BREEZE_PORTAL = 'https://lafayette.breezechms.com';

// Old WordPress pages were addressed as /?page_id=N. Links to them live on in search results,
// bookmarks and old emails, so each forwards to its closest new page (without the old query).
// Retired pages go to the home page.
const OLD_PAGES: Record<string, string> = {
  '2': '/about', // About Us
  '25': '/contact', // Contact
  '61': '/contact#find-us', // Directions
  '41': '/calendar', '9661': '/calendar', // Calendar & Schedule, Church Calendar
  '5480': '/give', '1258': '/give', // Online Giving, Financial Stewardship
  '1593': '/give#missions', '11197': '/give#missions', // Para-church Organizations, International Missions
  '6288': '/watch', // Sermons
  '12263': '/leadership', '47': '/leadership', // Shepherds, Ministry Staff
  '1275': '/about#beliefs', // Core Beliefs
  '1320': '/about#values', // Core Values
  '1791': '/about', // Cities Represented
  '13555': '/visit', '15072': '/visit', '235': '/visit', '9223': '/visit', // Guests, Connect, Worship, theGathering
  '9186': '/visit#midweek', // theMiddle
  // Member-only pages now live in Breeze.
  '6522': BREEZE_PORTAL, '1128': BREEZE_PORTAL, '1897': BREEZE_PORTAL, '7488': BREEZE_PORTAL, // Breeze portal, Members, Directory, Birthdays
};

export function proxy(request: NextRequest) {
  const id = request.nextUrl.searchParams.get('page_id');
  if (!id) return NextResponse.next();
  return NextResponse.redirect(new URL(OLD_PAGES[id] ?? '/', request.url), 308);
}

// Only the home page address carried ?page_id=, so nothing else runs through this.
export const config = { matcher: '/' };
