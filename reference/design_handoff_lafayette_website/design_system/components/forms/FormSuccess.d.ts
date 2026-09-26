export interface FormSuccessProps {
  /** Fraunces heading. Default "Thank you — we got it." */
  title?: React.ReactNode;
  /** What happens next, in one or two sentences. */
  children?: React.ReactNode;
  action?: React.ReactNode;
  style?: React.CSSProperties;
}
export declare function FormSuccess(props: FormSuccessProps): JSX.Element;
