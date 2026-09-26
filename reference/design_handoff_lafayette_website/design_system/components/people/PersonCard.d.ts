export interface PersonCardProps {
  /** e.g. "[Shepherd] & [Spouse] [Last name]". */
  name: React.ReactNode;
  /** One short line, e.g. "Members since 1998". */
  line?: React.ReactNode;
  /** 4:3 photo URL; placeholder frame when omitted. */
  photoSrc?: string;
  photoLabel?: string;
  style?: React.CSSProperties;
}
/**
 * @startingPoint section="People" subtitle="4:3 photo above a name and one line — Shepherd couples" viewport="700x300"
 */
export declare function PersonCard(props: PersonCardProps): JSX.Element;
