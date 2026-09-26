export interface PhotoFrameProps {
  /** 4:5 portraits (leaders), 4:3 people/places, 16:9 wide scenes. Default 4:3. */
  ratio?: '4:5' | '4:3' | '16:9' | '1:1';
  /** Real image URL. When set, replaces the placeholder and motif. */
  src?: string;
  alt?: string;
  /** Placeholder label, e.g. "Photo of Kyle". */
  label?: string;
  /** Show the facet accent in the placeholder. Default true. */
  facets?: boolean;
  /** Edge the facet accent bleeds off. Default left. */
  anchor?: 'left' | 'right';
  style?: React.CSSProperties;
}
/**
 * @startingPoint section="Media" subtitle="Photo-ready sand frame in 4:5, 4:3, 16:9" viewport="700x260"
 */
export declare function PhotoFrame(props: PhotoFrameProps): JSX.Element;
