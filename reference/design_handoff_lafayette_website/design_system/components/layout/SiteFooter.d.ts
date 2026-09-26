export interface FooterLink { label: string; href: string; }
/**
 * @startingPoint section="Layout" subtitle="Navy footer with tagline, times, address, social" viewport="700x420"
 */
export interface SiteFooterProps {
  /** Path to assets/logo-white.png (reversed lockup) relative to the page. */
  logoSrc?: string;
  links?: FooterLink[];
  facebook?: string;
  instagram?: string;
  onNavigate?: (link: FooterLink) => void;
  style?: React.CSSProperties;
}
export declare function SiteFooter(props: SiteFooterProps): JSX.Element;
