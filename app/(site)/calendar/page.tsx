import type { Metadata } from 'next';
import { Button, InfoRow, SectionBand } from '@/components/ds';
import { EventCalendar } from '@/components/site/EventCalendar';
import { PageHero } from '@/components/site/PageHero';
import { getCalendar } from '@/lib/calendar';
import { getCalendarContent, getSite } from '@/lib/content';

export const metadata: Metadata = {
  title: 'Calendar',
  description: 'Classes, gatherings and events at Lafayette Church of Christ.',
};

// Rebuild at most every 15 minutes so new calendar entries show up on their own.
export const revalidate = 900;

export default async function CalendarPage() {
  const [site, calendar, data] = await Promise.all([getSite(), getCalendarContent(), getCalendar()]);
  return <>
    <PageHero flush facets="soft" facetOpacity={0.8} eyebrow={calendar.hero.eyebrow} title={calendar.hero.title} lede={calendar.hero.lede} />

    <section className="lcc-strip lcc-strip--top" aria-label="Weekly schedule">
      <div className="lcc-container lcc-grid" style={{ ['--min' as string]: '230px' }}>
        <InfoRow icon="clock" title={site.sunday.title} sub={`${site.sunday.worship} · ${site.sunday.classes}`} />
        <InfoRow icon="calendar" title={site.midweek.title} sub={site.midweek.detail} />
        <InfoRow icon="map-pin" title={site.address.street} sub={`${site.address.city} · Get directions`} href="/contact#find-us" />
      </div>
    </section>

    <SectionBand tone="cream" label="Church calendar">
      <EventCalendar events={data.events} firstMonth={data.firstMonth} lastMonth={data.lastMonth}
        notice={data.source === 'weekly' ? calendar.unavailable : undefined} emptyText={calendar.empty} />
      {data.subscribe && <div className="lcc-cal__subscribe">
        <p>{calendar.subscribe}</p>
        <div className="lcc-actions">
          <Button variant="outline" icon="calendar" href={data.subscribe.google}>Google Calendar</Button>
          <Button variant="outline" icon="calendar" href={data.subscribe.ical}>Apple or Outlook</Button>
        </div>
      </div>}
    </SectionBand>
  </>;
}
