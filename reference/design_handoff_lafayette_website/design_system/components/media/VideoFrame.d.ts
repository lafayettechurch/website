export interface VideoFrameProps {
  /** YouTube livestream or playlist URL (opens in a new tab). */
  href?: string;
  /** Default "Watch on YouTube". */
  label?: React.ReactNode;
  /** Muted line under the label, e.g. "Live Sundays at 10 AM". */
  sub?: React.ReactNode;
  /** Optional still image, dimmed behind the play icon. Replaces the facet motif. */
  thumbnail?: string;
  style?: React.CSSProperties;
}
/**
 * @startingPoint section="Media" subtitle="16:9 navy video frame linking to YouTube" viewport="700x300"
 */
export declare function VideoFrame(props: VideoFrameProps): JSX.Element;
