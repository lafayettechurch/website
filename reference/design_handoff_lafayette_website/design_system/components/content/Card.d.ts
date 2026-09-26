/**
 * @startingPoint section="Content" subtitle="New here, Watch and Give cards" viewport="700x340"
 */
export interface CardProps {
  /** default = white with warm border; deep = navy with facet accents (Watch); warm = sand (Give); outline = bordered, for use inside navy bands. */
  variant?: 'default' | 'deep' | 'warm' | 'outline';
  /** Uppercase kicker, e.g. "Sundays at 10 AM". */
  eyebrow?: React.ReactNode;
  /** Fraunces 500, 27px. */
  title?: React.ReactNode;
  /** Body copy (Inter 16px). */
  children?: React.ReactNode;
  /** Buttons / links row, usually one <Button>. */
  action?: React.ReactNode;
  /** Show facet panes. Defaults to true for deep. */
  facets?: boolean;
  padding?: number | string;
  style?: React.CSSProperties;
}
export declare function Card(props: CardProps): JSX.Element;
