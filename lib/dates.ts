// Date helpers shared by the server (calendar fetch) and the browser (calendar UI).
// Days are handled as "YYYY-MM-DD" keys in church-local time, so no time zone math
// ever happens in the browser.

export const TZ = 'America/Chicago';
export const WEEKDAYS = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
export const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const pad = (n: number) => String(n).padStart(2, '0');

export const parseKey = (key: string) => key.split('-').map(Number) as [number, number, number];
export const toKey = (y: number, m: number, d: number) => `${y}-${pad(m)}-${pad(d)}`;
const utc = (key: string) => { const [y, m, d] = parseKey(key); return new Date(Date.UTC(y, m - 1, d)); };
const fromUtc = (dt: Date) => toKey(dt.getUTCFullYear(), dt.getUTCMonth() + 1, dt.getUTCDate());

export const addDays = (key: string, n: number) => { const dt = utc(key); dt.setUTCDate(dt.getUTCDate() + n); return fromUtc(dt); };
export const weekdayOf = (key: string) => utc(key).getUTCDay();
export const daysInMonth = (y: number, m: number) => new Date(Date.UTC(y, m, 0)).getUTCDate();

/** "2026-09" → "2026-10" (n = 1) */
export const addMonths = (month: string, n: number) => {
  const [y, m] = month.split('-').map(Number);
  const dt = new Date(Date.UTC(y, m - 1 + n, 1));
  return `${dt.getUTCFullYear()}-${pad(dt.getUTCMonth() + 1)}`;
};

/** A moment in time → church-local date key and 24-hour "HH:MM". */
export function localParts(d: Date) {
  const p = Object.fromEntries(new Intl.DateTimeFormat('en-CA', {
    timeZone: TZ, year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', hourCycle: 'h23',
  }).formatToParts(d).map(x => [x.type, x.value]));
  return { date: `${p.year}-${p.month}-${p.day}`, time: `${p.hour}:${p.minute}` };
}

/** "09:00" → "9 AM", "19:30" → "7:30 PM" (the site's house style). */
export function formatTime(hhmm: string) {
  const [h, m] = hhmm.split(':').map(Number);
  const period = h < 12 ? 'AM' : 'PM';
  const h12 = h % 12 || 12;
  return `${h12}${m ? ':' + pad(m) : ''} ${period}`;
}

/** "9–10 AM", "11 AM–12:30 PM", or just "7 PM" with no end. */
export function formatRange(start?: string, end?: string) {
  if (!start) return 'All day';
  const s = formatTime(start);
  if (!end || end === start) return s;
  const e = formatTime(end);
  const sameHalf = s.slice(-2) === e.slice(-2);
  return (sameHalf ? s.slice(0, -3) : s) + '–' + e;
}

/** "2026-09-27" → "Sunday, September 27" */
export function formatDay(key: string) {
  const [, m, d] = parseKey(key);
  return `${WEEKDAYS[weekdayOf(key)]}, ${MONTHS[m - 1]} ${d}`;
}
