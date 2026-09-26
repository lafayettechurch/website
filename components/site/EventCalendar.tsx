'use client';
import { Fragment, useEffect, useMemo, useRef, useState } from 'react';
import { Icon } from '@/components/ds/Icon';
import type { CalEvent } from '@/lib/calendar';
import {
  MONTHS, WEEKDAYS, addDays, addMonths, daysInMonth, formatDay, formatRange, formatTime,
  localParts, parseKey, toKey, weekdayOf,
} from '@/lib/dates';

type View = 'auto' | 'month' | 'list';
const MAX_CHIPS = 3;

/**
 * The church calendar in the site's own design. Month grid on wide screens, a list on
 * phones (either can be chosen). In "auto" mode CSS picks the view, so there's no flash
 * of the wrong layout while the page loads.
 */
export function EventCalendar({ events, firstMonth, lastMonth, notice, emptyText }: {
  events: CalEvent[]; firstMonth: string; lastMonth: string; notice?: string; emptyText: string;
}) {
  const [month, setMonth] = useState(firstMonth);
  const [view, setView] = useState<View>('auto');
  const [wide, setWide] = useState(true);
  const [today, setToday] = useState<string | null>(null);
  const [selected, setSelected] = useState<string | null>(null);

  useEffect(() => {
    const t = localParts(new Date()).date;
    setToday(t);
    setSelected(t.startsWith(firstMonth) ? t : null);
    const mq = window.matchMedia('(min-width: 720px)');
    const update = () => setWide(mq.matches);
    update();
    mq.addEventListener('change', update);
    return () => mq.removeEventListener('change', update);
  }, [firstMonth]);

  const byDay = useMemo(() => groupByDay(events), [events]);
  const effective = view === 'auto' ? (wide ? 'month' : 'list') : view;
  const [y, m] = month.split('-').map(Number);
  const title = `${MONTHS[m - 1]} ${y}`;

  function goMonth(n: number) { showMonth(addMonths(month, n)); }
  function showMonth(next: string) {
    setMonth(next);
    setSelected(today?.startsWith(next) ? today : null);
  }

  return <div className="lcc-cal" data-view={view}>
    <div className="lcc-cal__surface">
    <div className="lcc-cal__bar">
      <div className="lcc-cal__nav">
        <button type="button" className="lcc-cal__iconbtn" onClick={() => goMonth(-1)} disabled={month <= firstMonth} aria-label="Previous month">
          <Icon name="chevron-left" size={20} />
        </button>
        <button type="button" className="lcc-cal__iconbtn" onClick={() => goMonth(1)} disabled={month >= lastMonth} aria-label="Next month">
          <Icon name="chevron-right" size={20} />
        </button>
        <h2 className="lcc-cal__title" aria-live="polite">{title}</h2>
      </div>
      <div className="lcc-cal__tools">
        {month !== firstMonth && <button type="button" className="lcc-cal__textbtn" onClick={() => showMonth(firstMonth)}>This month</button>}
        <div className="lcc-cal__seg" role="group" aria-label="Calendar view">
          <button type="button" aria-pressed={effective === 'month'} onClick={() => setView('month')}><Icon name="calendar-days" size={18} />Month</button>
          <button type="button" aria-pressed={effective === 'list'} onClick={() => setView('list')}><Icon name="list" size={18} />List</button>
        </div>
      </div>
    </div>

    {notice && <p className="lcc-cal__notice"><Icon name="info" size={18} />{notice}</p>}

    <div className="lcc-cal__month">
      <MonthGrid y={y} m={m} byDay={byDay} today={today} selected={selected} onSelect={setSelected} />
    </div>

    <div className="lcc-cal__list">
      <ListView y={y} m={m} byDay={byDay} today={today} emptyText={emptyText} />
    </div>
    </div>

    <div className="lcc-cal__daypanel lcc-cal__month" aria-live="polite">
      {selected
        ? <DayEvents day={selected} events={byDay.get(selected) || []} headingLevel="h3" />
        : <p className="lcc-cal__hint">Choose a day to see what’s happening.</p>}
    </div>
  </div>;
}

function groupByDay(events: CalEvent[]) {
  const map = new Map<string, CalEvent[]>();
  for (const e of events) {
    // Multi-day events appear on each of their days (capped, in case of a runaway entry).
    for (let d = e.date, i = 0; d <= e.endDate && i < 62; d = addDays(d, 1), i++) {
      const list = map.get(d) || [];
      list.push(e);
      map.set(d, list);
    }
  }
  for (const list of map.values()) list.sort((a, b) => (a.start ?? '') < (b.start ?? '') ? -1 : 1);
  return map;
}

function MonthGrid({ y, m, byDay, today, selected, onSelect }: {
  y: number; m: number; byDay: Map<string, CalEvent[]>; today: string | null; selected: string | null; onSelect: (d: string) => void;
}) {
  const first = toKey(y, m, 1);
  const count = daysInMonth(y, m);
  const lead = weekdayOf(first);
  const cells: (string | null)[] = [...Array(lead).fill(null), ...Array.from({ length: count }, (_, i) => toKey(y, m, i + 1))];
  while (cells.length % 7) cells.push(null);
  const weeks = Array.from({ length: cells.length / 7 }, (_, i) => cells.slice(i * 7, i * 7 + 7));

  // Roving focus: one day is tabbable; arrow keys move between days.
  const focusKey = selected?.startsWith(first.slice(0, 7)) ? selected : (today?.startsWith(first.slice(0, 7)) ? today : first);
  const refs = useRef(new Map<string, HTMLButtonElement>());
  function onKey(e: React.KeyboardEvent, day: string) {
    const step = { ArrowLeft: -1, ArrowRight: 1, ArrowUp: -7, ArrowDown: 7 }[e.key];
    if (!step) return;
    const next = addDays(day, step);
    const [ny, nm] = parseKey(next);
    if (ny !== y || nm !== m) return;
    e.preventDefault();
    onSelect(next);
    refs.current.get(next)?.focus();
  }

  return <table className="lcc-cal__grid">
    <caption className="lcc-sr-only">{MONTHS[m - 1]} {y}. Choose a day to see its events.</caption>
    <thead>
      <tr>{WEEKDAYS.map(w => <th key={w} scope="col"><abbr title={w}>{w.slice(0, 3)}</abbr></th>)}</tr>
    </thead>
    <tbody>
      {weeks.map((week, i) => <tr key={i}>
        {week.map((day, j) => {
          if (!day) return <td key={j} className="lcc-cal__blank" />;
          const list = byDay.get(day) || [];
          const d = parseKey(day)[2];
          const past = today !== null && day < today;
          return <td key={j}>
            <button type="button" ref={el => { if (el) refs.current.set(day, el); else refs.current.delete(day); }}
              className={'lcc-cal__day' + (past ? ' is-past' : '') + (day === today ? ' is-today' : '')}
              aria-pressed={day === selected} tabIndex={day === focusKey ? 0 : -1}
              aria-label={`${formatDay(day)}${day === today ? ' (today)' : ''}, ${list.length ? list.length + (list.length === 1 ? ' event' : ' events') : 'no events'}`}
              onClick={() => onSelect(day)} onKeyDown={e => onKey(e, day)}>
              <span className="lcc-cal__num" aria-hidden="true">{d}</span>
              <span className="lcc-cal__chips" aria-hidden="true">
                {list.slice(0, MAX_CHIPS).map(e => <span key={e.id} className="lcc-cal__chip">
                  {e.start && e.date === day && <b>{formatTime(e.start)}</b>} {e.title}
                </span>)}
                {list.length > MAX_CHIPS && <span className="lcc-cal__more">+{list.length - MAX_CHIPS} more</span>}
              </span>
              {list.length > 0 && <span className="lcc-cal__dots" aria-hidden="true">{list.slice(0, 3).map(e => <i key={e.id} />)}</span>}
            </button>
          </td>;
        })}
      </tr>)}
    </tbody>
  </table>;
}

function ListView({ y, m, byDay, today, emptyText }: { y: number; m: number; byDay: Map<string, CalEvent[]>; today: string | null; emptyText: string }) {
  const days: string[] = [];
  for (let d = 1; d <= daysInMonth(y, m); d++) {
    const key = toKey(y, m, d);
    if (byDay.has(key) && (today === null || key >= today)) days.push(key);
  }
  if (!days.length) return <p className="lcc-cal__hint">{emptyText}</p>;
  return <ol className="lcc-cal__days">
    {days.map(day => {
      const [, mm, dd] = parseKey(day);
      return <li key={day} className="lcc-cal__dayrow">
        <div className="lcc-cal__date" aria-hidden="true">
          <span className="lcc-cal__dow">{WEEKDAYS[weekdayOf(day)].slice(0, 3)}</span>
          <span className="lcc-cal__dnum">{dd}</span>
          <span className="lcc-cal__mon">{MONTHS[mm - 1].slice(0, 3)}</span>
        </div>
        <DayEvents day={day} events={byDay.get(day)!} headingLevel="h3" visuallyHiddenHeading today={day === today} />
      </li>;
    })}
  </ol>;
}

function DayEvents({ day, events, headingLevel: H, visuallyHiddenHeading, today }: {
  day: string; events: CalEvent[]; headingLevel: 'h3'; visuallyHiddenHeading?: boolean; today?: boolean;
}) {
  return <div className="lcc-cal__dayevents">
    <H className={visuallyHiddenHeading ? 'lcc-sr-only' : 'lcc-cal__dayhead'}>{formatDay(day)}{today && ' (today)'}</H>
    {events.length === 0
      ? <p className="lcc-cal__hint">Nothing scheduled.</p>
      : <ul className="lcc-cal__events">{events.map(e => <li key={e.id} className="lcc-cal__event">
        <p className="lcc-cal__time">{e.date !== e.endDate ? spanLabel(e) : formatRange(e.start, e.end)}</p>
        <h4 className="lcc-cal__etitle">{e.title}</h4>
        {e.location && <p className="lcc-cal__meta"><Icon name="map-pin" size={16} />
          <a href={'https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent(e.location)} target="_blank" rel="noopener noreferrer">{e.location}</a>
        </p>}
        {e.description && <p className="lcc-cal__desc"><Linkify text={e.description} /></p>}
      </li>)}</ul>}
  </div>;
}

function spanLabel(e: CalEvent) {
  const [, m1, d1] = parseKey(e.date);
  const [, m2, d2] = parseKey(e.endDate);
  const range = m1 === m2 ? `${MONTHS[m1 - 1]} ${d1}–${d2}` : `${MONTHS[m1 - 1]} ${d1}–${MONTHS[m2 - 1]} ${d2}`;
  return e.start ? `${range} · starts ${formatTime(e.start)}` : range;
}

/** Turns web addresses in event descriptions into links. */
function Linkify({ text }: { text: string }) {
  return <>{text.split(/(https?:\/\/[^\s<]+)/g).map((part, i) => /^https?:\/\//.test(part)
    ? <a key={i} href={part} target="_blank" rel="noopener noreferrer">{part.replace(/^https?:\/\/(www\.)?/, '').replace(/\/$/, '')}</a>
    : <Fragment key={i}>{part}</Fragment>)}</>;
}
