export interface MapBlockProps {
  /** Street line. Default "115 New Ballwin Road". */
  address?: string;
  /** City line. Default "Ballwin, MO 63021". */
  city?: string;
  /** Map search query; defaults to address + city. */
  query?: string;
  /** Override the embed URL (e.g. a Google Maps "Embed a map" src). */
  embedSrc?: string;
  /** Override the directions URL. */
  directionsHref?: string;
  /** CSS aspect-ratio of the map. Default "16 / 9". */
  ratio?: string;
  style?: React.CSSProperties;
}
/**
 * @startingPoint section="Media" subtitle="Address + Get directions above a bordered map embed" viewport="700x420"
 */
export declare function MapBlock(props: MapBlockProps): JSX.Element;
