import { Eyebrow, Rich, SectionBand } from '@/components/ds';
import { FundHint } from '@/components/site/FundHint';

/**
 * Breeze's own giving form, embedded in a section of the Give page.
 * Card details are typed into Breeze/Stripe's fields inside the frame; they never touch this site.
 * Breeze doesn't report its height, so the frame has a fixed height and scrolls inside if a
 * later step runs long. Signing in inside the frame can fail where browsers block cross-site
 * logins (Safari), so recurring givers get a link that opens Breeze in a new tab.
 */
export function GivingEmbed({ formUrl, eyebrow, title, lede }: { formUrl: string; eyebrow?: string; title?: string; lede?: string }) {
  return <SectionBand tone="white" id="give-online" label={title || 'Give online'}>
    <div className="lcc-giving">
      <div className="lcc-giving__text">
        {eyebrow && <Eyebrow tone="clay">{eyebrow}</Eyebrow>}
        {title && <h2 className="lcc-band__title">{title}</h2>}
        {lede && <p className="lcc-band__lede"><Rich text={lede} /></p>}
        <p className="lcc-giving__alt">
          <a href={formUrl} target="_blank" rel="noopener noreferrer">Open giving in a new window<span className="lcc-sr-only"> (opens in a new tab)</span></a>
          <span>Best for signing in or managing a recurring gift.</span>
        </p>
      </div>
      <div>
        <FundHint />
        <div className="lcc-giving__frame">
          {/* "payment" lets Apple Pay / Google Pay work inside the frame. */}
          <iframe src={formUrl} title="Give online to Lafayette Church of Christ (secure form by Breeze)"
            allow="payment" referrerPolicy="strict-origin-when-cross-origin" />
        </div>
      </div>
    </div>
  </SectionBand>;
}
