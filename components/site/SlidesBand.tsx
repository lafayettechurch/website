import { Button, Eyebrow, Icon, Rich, SectionBand } from '@/components/ds';

/**
 * The church's Proclaim announcement slides (Faithlife Digital Signage), framed in a navy band.
 * Kyle edits the slides in Proclaim; the site only embeds the sign's player.
 * Wide screens: text and the calendar button on the left, slides on the right.
 * Phones: text, slides, then the calendar button. The full-screen link always sits
 * directly under the slides, since that's what it opens.
 */
export function SlidesBand({ eyebrow, title, lede, signUrl }: { eyebrow?: string; title?: string; lede?: string; signUrl: string }) {
  return <SectionBand tone="deep" id="this-month" label={title || 'Announcements'}>
    <div className="lcc-slides-band">
      <div className="lcc-slides-band__text">
        {eyebrow && <Eyebrow tone="on-dark">{eyebrow}</Eyebrow>}
        {title && <h2 className="lcc-band__title">{title}</h2>}
        {lede && <p className="lcc-band__lede"><Rich text={lede} /></p>}
      </div>
      <div className="lcc-slides__actions">
        <Button variant="outline-on-dark" href="/calendar">See the full calendar</Button>
      </div>
      <figure className="lcc-slides-wrap">
        <div className="lcc-slides">
          <iframe src={signUrl} title={(title || 'Announcements') + ' (rotating slides)'}
            loading="lazy" allow="fullscreen" allowFullScreen referrerPolicy="strict-origin-when-cross-origin" />
        </div>
        <figcaption>
          <a className="lcc-slides__full" href={signUrl} target="_blank" rel="noopener noreferrer">
            <Icon name="maximize" size={16} />View slides full screen<span className="lcc-sr-only"> (opens in a new tab)</span>
          </a>
        </figcaption>
      </figure>
    </div>
  </SectionBand>;
}
