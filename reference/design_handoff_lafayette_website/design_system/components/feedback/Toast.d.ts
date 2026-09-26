export interface ToastProps {
  /** Show/hide. Default true. */
  open?: boolean;
  /** Short status, e.g. "Link copied". */
  children?: React.ReactNode;
  /** Lucide icon; "" to hide. Default "circle-check". */
  icon?: string;
  /** Auto-dismiss ms (needs onClose). Default 4000; 0 to persist. */
  duration?: number;
  onClose?: () => void;
  /** Render in flow instead of fixed bottom-center (for docs/cards). */
  inline?: boolean;
  style?: React.CSSProperties;
}
export declare function Toast(props: ToastProps): JSX.Element;
