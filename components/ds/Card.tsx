import { Eyebrow } from './Eyebrow';
import { FacetMotif } from './FacetMotif';

const EB = { default: 'slate', deep: 'on-dark', warm: 'amber', outline: 'on-dark' } as const;

/** Content card — eyebrow, Fraunces title, short body and one action. */
export function Card({ variant = 'default', eyebrow, title, children, action, facets, titleAs: H = 'h3' }: {
  variant?: 'default' | 'deep' | 'warm' | 'outline'; eyebrow?: React.ReactNode; title?: React.ReactNode;
  children?: React.ReactNode; action?: React.ReactNode; facets?: boolean; titleAs?: 'h2' | 'h3';
}) {
  const showFacets = facets ?? variant === 'deep';
  return <div className={'lcc-card' + (variant === 'default' ? '' : ' lcc-card--' + variant)}>
    {showFacets && <FacetMotif preset="card" />}
    <div className="lcc-card__inner">
      {eyebrow && <Eyebrow tone={EB[variant]}>{eyebrow}</Eyebrow>}
      {title && <H className="lcc-card__title">{title}</H>}
      {children && <div className="lcc-card__body">{children}</div>}
      {action && <div className="lcc-card__action">{action}</div>}
    </div>
  </div>;
}
