import type { Metadata } from 'next';
import { LeaderProfile, PersonCard, Rich, SectionBand } from '@/components/ds';
import { PageHero } from '@/components/site/PageHero';
import { PendingLinkButton } from '@/components/site/PendingLinkButton';
import { getLeadership, getSite, plain } from '@/lib/content';

export const metadata: Metadata = {
  title: 'Leadership',
  description: 'Meet our minister and our Shepherds (our elders).',
};

export default async function LeadershipPage() {
  const [site, leadership] = await Promise.all([getSite(), getLeadership()]);
  const m = leadership.minister;
  const s = leadership.shepherds;
  const firstName = plain(m.name).split(' ')[0] || 'our minister';
  return <>
    <PageHero flush eyebrow={leadership.hero.eyebrow} title={leadership.hero.title} lede={<Rich text={leadership.hero.lede} />} />

    <section className="lcc-band" aria-label={m.role} style={{ paddingTop: 0 }}>
      <div className="lcc-container" style={{ borderTop: '1px solid var(--lcc-line-strong)', paddingTop: 40 }}>
        <LeaderProfile role={m.role} name={<Rich text={m.name} />} photoSrc={m.photo || undefined}
          photoAlt={'Photo of ' + plain(m.name)} photoLabel={'Photo of ' + firstName}
          calloutEyebrow={m.calloutEyebrow} calloutTitle={m.calloutTitle} calloutBody={<p><Rich text={m.calloutBody} /></p>}
          action={<PendingLinkButton variant="secondary" icon="mail" href={m.email ? 'mailto:' + m.email : undefined}
            fallbackMessage={`Kyle’s email is coming soon. For now, email ${site.office.email} and we’ll pass it on.`}>Email {firstName}</PendingLinkButton>}>
          <Rich text={m.bio} paragraphs />
        </LeaderProfile>
      </div>
    </section>

    <SectionBand tone="white" id="shepherds" eyebrow={s.eyebrow} title={s.title} lede={<Rich text={s.lede} />}>
      <div className="lcc-grid" style={{ ['--min' as string]: '240px' }}>
        {s.people.map((p, i) => <PersonCard key={i} name={<Rich text={p.name} />} photoAlt={plain(p.name)}
          line={p.line ? <Rich text={p.line} /> : undefined} photoSrc={p.photo || undefined} photoLabel="Couple photo" />)}
      </div>
    </SectionBand>
  </>;
}
