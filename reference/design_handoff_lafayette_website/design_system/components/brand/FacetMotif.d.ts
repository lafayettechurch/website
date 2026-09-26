export interface FacetMotifProps {
  /** Pane arrangement. hero = 5 panes for page heroes; corner = 3 panes bleeding off a corner; card = 2 panes for dark cards; soft = 3 overlapping panes for light panels; accent = single pane on a photo frame. */
  preset?: 'hero' | 'corner' | 'card' | 'soft' | 'accent';
  /** Which edge the cluster bleeds off. Never centered. Default right. */
  anchor?: 'right' | 'left';
  /** Multiplies pane sizes. Default 1. */
  scale?: number;
  /** Overall layer opacity (hero uses 0.5 on navy). Default 1. */
  opacity?: number;
  style?: React.CSSProperties;
}
/** Absolutely-positioned "light through facets" layer. Parent must be position:relative; overflow:hidden. */
export declare function FacetMotif(props: FacetMotifProps): JSX.Element;
