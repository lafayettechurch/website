export interface EyebrowProps {
  /** slate on white/cream; clay for "The direction"-style warm kickers; amber on sand (Give); on-dark inside navy. */
  tone?: 'slate' | 'clay' | 'amber' | 'on-dark';
  children?: React.ReactNode;
  style?: React.CSSProperties;
}
export declare function Eyebrow(props: EyebrowProps): JSX.Element;
