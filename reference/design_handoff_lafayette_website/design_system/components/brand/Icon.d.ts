export interface IconProps {
  /** Lucide icon name, e.g. "clock", "map-pin", "circle-play", "heart-handshake", "calendar", "mail", "baby", "users", "sparkles" */
  name: string;
  /** Pixel size on the 24px grid. Default 24. */
  size?: number;
  /** Stroke color. Use slate or navy only — never clay or amber. Default currentColor. */
  color?: string;
  /** Accessible label; omit when a visible text label sits beside the icon (preferred). */
  label?: string;
  style?: React.CSSProperties;
}
export declare function Icon(props: IconProps): JSX.Element;
