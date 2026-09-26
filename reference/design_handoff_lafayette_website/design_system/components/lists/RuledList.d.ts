export interface RuledListItem {
  /** Fraunces 500, 22px. */
  title: React.ReactNode;
  /** Inter 16px body. */
  body?: React.ReactNode;
  /** Explicit numeral ("01", "9 AM"); overrides auto numbering. */
  numeral?: string;
}
export interface RuledListProps {
  items: RuledListItem[];
  /** Auto numerals 01, 02, 03… */
  numbered?: boolean;
  /** split = title left, body right (default); stacked = body under title (narrow columns, mobile). */
  layout?: 'split' | 'stacked';
  /** light on cream/white; dark inside navy bands. */
  tone?: 'light' | 'dark';
  style?: React.CSSProperties;
}
/**
 * @startingPoint section="Content" subtitle="Rows on warm rules for values, beliefs, schedules, directions" viewport="700x320"
 */
export declare function RuledList(props: RuledListProps): JSX.Element;
