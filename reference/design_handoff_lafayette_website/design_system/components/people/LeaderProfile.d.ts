export interface LeaderProfileProps {
  /** Eyebrow, e.g. "Minister". */
  role?: React.ReactNode;
  /** Fraunces heading, e.g. "Kyle [Last name]". */
  name: React.ReactNode;
  /** Portrait URL; placeholder frame when omitted. */
  photoSrc?: string;
  photoLabel?: string;
  /** Bio paragraphs. */
  children?: React.ReactNode;
  /** Optional warm Card below the bio (e.g. "Meet before you visit"). */
  calloutEyebrow?: React.ReactNode;
  calloutTitle?: React.ReactNode;
  calloutBody?: React.ReactNode;
  /** Button(s) inside the callout card. */
  action?: React.ReactNode;
  /** Photo on the right. */
  reverse?: boolean;
  style?: React.CSSProperties;
}
/**
 * @startingPoint section="People" subtitle="Portrait + role, name, bio and a warm callout" viewport="700x420"
 */
export declare function LeaderProfile(props: LeaderProfileProps): JSX.Element;
