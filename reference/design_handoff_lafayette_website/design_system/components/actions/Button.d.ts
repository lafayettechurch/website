/**
 * @startingPoint section="Actions" subtitle="Clay, slate, outline and link buttons" viewport="700x260"
 */
export interface ButtonProps {
  /** primary = clay, the single most important action in a view (max one per screen). secondary = slate, every other primary action. outline = slate outline on light. outline-on-dark = white text, light-slate outline on navy. link = text with amber underline. */
  variant?: 'primary' | 'secondary' | 'outline' | 'outline-on-dark' | 'link';
  /** md = 48px min height (default), sm = 44px. */
  size?: 'md' | 'sm';
  /** Renders an <a> when set. */
  href?: string;
  /** Lucide icon name before the label. */
  icon?: string;
  /** Lucide icon name after the label (e.g. "arrow-right"). */
  iconRight?: string;
  disabled?: boolean;
  fullWidth?: boolean;
  type?: 'button' | 'submit';
  onClick?: (e: any) => void;
  children?: React.ReactNode;
  style?: React.CSSProperties;
}
export declare function Button(props: ButtonProps): JSX.Element;
