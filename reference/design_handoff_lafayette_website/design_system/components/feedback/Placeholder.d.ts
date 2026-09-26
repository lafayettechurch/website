export interface PlaceholderProps {
  /** Who/what is missing, without brackets, e.g. "Kyle to write". Rendered as "[Kyle to write]". */
  children?: React.ReactNode;
  /** Full-width block for a missing paragraph. Default inline. */
  block?: boolean;
  style?: React.CSSProperties;
}
export declare function Placeholder(props: PlaceholderProps): JSX.Element;
