/**
 * @startingPoint section="Layout" subtitle="Full-width section bands: cream, deep navy, warm" viewport="700x420"
 */
export interface SectionBandProps {
  /** cream = default page; white = alternate; warm = sand (Give); deep = navy (Watch, Voice, feature bands); brand = slate (one-rule callouts). Max 1–2 deep bands per page. */
  tone?: 'cream' | 'white' | 'warm' | 'deep' | 'brand';
  /** Small Fraunces numeral before the title ("01") — guide/editorial pages only. Adds a top rule. */
  number?: string;
  eyebrow?: React.ReactNode;
  title?: React.ReactNode;
  lede?: React.ReactNode;
  /** Adds the facet motif anchored to the right edge. */
  facets?: boolean;
  /** Top rule above the heading (implied by number). */
  ruled?: boolean;
  id?: string;
  /** Override vertical padding (CSS length). */
  padY?: string;
  children?: React.ReactNode;
  style?: React.CSSProperties;
}
export declare function SectionBand(props: SectionBandProps): JSX.Element;
