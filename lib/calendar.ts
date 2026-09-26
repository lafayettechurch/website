// Church calendar: read from Kyle's Google Calendar and shown in the site's own design.
//
// Setup (see README): make the calendar public, then set GOOGLE_CALENDAR_ID and
// GOOGLE_CALENDAR_API_KEY in Vercel. Without them, the page shows the regular weekly
// schedule from the Calendar page in Sanity instead.
import { getCalendarContent, getSite } from '@/lib/content';
import { addDays, addMonths, daysInMonth, localParts, weekdayOf } from '@/lib/dates';

export type CalEvent = {
  id: string;
  title: string;
  /** First day, "YYYY-MM-DD" church-local. */
  date: string;
  /** Last day (inclusive). Same as `date` for single-day events. */
  endDate: string;
  /** "HH:MM" church-local; absent for all-day events. */
  start?: string;
  end?: string;
  location?: string;
  description?: string;
};

export type CalendarData = {
  events: CalEvent[];
  firstMonth: string;
  lastMonth: string;
  source: 'google' | 'weekly';
  subscribe?: { google: string; ical: string };
};

/** How far ahead people can browse. */
const MONTHS_AHEAD = 5;
/** Re-read Google Calendar at most every 15 minutes. */
export const CALENDAR_REVALIDATE = 900;

type GoogleEvent = {
  id: string; status?: string; visibility?: string; summary?: string; description?: string; location?: string;
  start: { date?: string; dateTime?: string }; end: { date?: string; dateTime?: string };
};

export async function getCalendar(): Promise<CalendarData> {
  const today = localParts(new Date()).date;
  const firstMonth = today.slice(0, 7);
  const lastMonth = addMonths(firstMonth, MONTHS_AHEAD);
  const [ly, lm] = lastMonth.split('-').map(Number);
  const firstDay = firstMonth + '-01';
  const lastDay = `${lastMonth}-${String(daysInMonth(ly, lm)).padStart(2, '0')}`;
  const base = { firstMonth, lastMonth };
  const [site, content] = await Promise.all([getSite(), getCalendarContent()]);
  const churchStreet = site.address.street.toLowerCase();

  const id = process.env.GOOGLE_CALENDAR_ID;
  const key = process.env.GOOGLE_CALENDAR_API_KEY;
  if (id && key) {
    try {
      const events = await fetchGoogle(id, key, firstDay, lastDay, churchStreet);
      const enc = encodeURIComponent(id);
      return {
        ...base, events, source: 'google',
        subscribe: {
          google: `https://calendar.google.com/calendar/u/0/r?cid=${enc}`,
          ical: `webcal://calendar.google.com/calendar/ical/${enc}/public/basic.ics`,
        },
      };
    } catch (err) {
      console.error('[calendar] Google Calendar fetch failed; showing weekly schedule', err);
    }
  }
  return { ...base, events: weekly(content.weekly, firstDay, lastDay), source: 'weekly' };
}

async function fetchGoogle(id: string, key: string, firstDay: string, lastDay: string, churchStreet: string): Promise<CalEvent[]> {
  const url = new URL(`https://www.googleapis.com/calendar/v3/calendars/${encodeURIComponent(id)}/events`);
  url.search = new URLSearchParams({
    key, singleEvents: 'true', orderBy: 'startTime', maxResults: '2500', timeZone: 'America/Chicago',
    // A day of padding either side; events are trimmed to church-local days below.
    timeMin: new Date(addDays(firstDay, -1) + 'T00:00:00Z').toISOString(),
    timeMax: new Date(addDays(lastDay, 2) + 'T00:00:00Z').toISOString(),
    fields: 'items(id,status,visibility,summary,description,location,start,end)',
  }).toString();

  const res = await fetch(url, { next: { revalidate: CALENDAR_REVALIDATE } });
  if (!res.ok) throw new Error(`Google Calendar ${res.status}: ${(await res.text()).slice(0, 300)}`);
  const { items = [] } = await res.json() as { items?: GoogleEvent[] };

  return items
    // Never publish events Kyle marked private, even if Google returns them.
    .filter(e => e.status !== 'cancelled' && e.visibility !== 'private' && e.visibility !== 'confidential')
    .map(e => toEvent(e, churchStreet))
    .filter(e => e.endDate >= firstDay && e.date <= lastDay);
}

function toEvent(e: GoogleEvent, churchStreet: string): CalEvent {
  // Only show a location when it's somewhere other than the church building.
  const loc = e.location?.trim();
  const location = loc && !loc.toLowerCase().includes(churchStreet) ? loc : undefined;
  const common = { id: e.id, title: e.summary?.trim() || 'Church event', location, description: plainText(e.description) };
  if (e.start.date) {
    // All-day: Google's end date is exclusive.
    return { ...common, date: e.start.date, endDate: addDays(e.end.date || e.start.date, -1) };
  }
  const s = localParts(new Date(e.start.dateTime!));
  const en = localParts(new Date(e.end.dateTime || e.start.dateTime!));
  // Something ending exactly at midnight belongs to the previous day.
  const endDate = en.time === '00:00' && en.date > s.date ? addDays(en.date, -1) : en.date;
  return { ...common, date: s.date, endDate, start: s.time, end: en.time === '00:00' ? '23:59' : en.time };
}

/** Google stores descriptions as light HTML. Keep the words and line breaks only. */
function plainText(html?: string) {
  if (!html) return undefined;
  const text = html
    .replace(/<br\s*\/?>/gi, '\n').replace(/<\/(p|div|li)>/gi, '\n').replace(/<li>/gi, '• ')
    .replace(/<[^>]+>/g, '')
    .replace(/&nbsp;/g, ' ').replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&quot;/g, '"').replace(/&#39;/g, '\'')
    .replace(/\n{3,}/g, '\n\n').trim();
  return text || undefined;
}

/** The standing weekly schedule, used until Google Calendar is connected (or if it's unreachable). */
type Weekly = { weekday: number; start: string; end: string; title: string; description: string };
function weekly(schedule: Weekly[], firstDay: string, lastDay: string): CalEvent[] {
  const out: CalEvent[] = [];
  for (let day = firstDay; day <= lastDay; day = addDays(day, 1)) {
    schedule.forEach((w, i) => {
      if (w.weekday === weekdayOf(day)) {
        out.push({ id: `weekly-${day}-${i}`, title: w.title, date: day, endDate: day, start: w.start, end: w.end || undefined, description: w.description || undefined });
      }
    });
  }
  return out;
}
