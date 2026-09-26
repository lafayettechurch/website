export interface HeaderLink { label: string; href: string; }
/**
 * @startingPoint section="Layout" subtitle="Sticky site header with persistent Plan your visit" viewport="700x300"
 */
export interface SiteHeaderProps {
  /** Short nav: I'm new, Watch, About, Times & location, Give. */
  links?: HeaderLink[];
  /** Label of the current page (amber underline). */
  active?: string;
  /** Path to assets/logo-color-trimmed.png relative to the page. */
  logoSrc?: string;
  /** Path to assets/logo-icon.jpeg (used in compact/mobile mode). */
  markSrc?: string;
  /** Persistent clay CTA. Default "Plan your visit". Pass "" to hide. */
  ctaLabel?: string;
  onCta?: () => void;
  onNavigate?: (link: HeaderLink) => void;
  /** Mobile layout: mark + CTA + hamburger menu. */
  compact?: boolean;
  sticky?: boolean;
  style?: React.CSSProperties;
}
export declare function SiteHeader(props: SiteHeaderProps): JSX.Element;
