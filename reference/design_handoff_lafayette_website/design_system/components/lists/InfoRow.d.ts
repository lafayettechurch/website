export interface InfoRowProps {
  /** Lucide icon name, e.g. "clock", "map-pin", "calendar". */
  icon?: string;
  /** Bold line, e.g. "Sundays at 10 AM". */
  title: React.ReactNode;
  /** Muted sub-line, e.g. "Bible classes for all ages at 9 AM". */
  sub?: React.ReactNode;
  /** Makes the sub-line a link (e.g. directions). */
  href?: string;
  /** light on cream/white (default); dark inside navy bands. */
  tone?: 'light' | 'dark';
  style?: React.CSSProperties;
}
/**
 * @startingPoint section="Content" subtitle="Icon + bold line + muted sub-line for times and address" viewport="700x200"
 */
export declare function InfoRow(props: InfoRowProps): JSX.Element;
