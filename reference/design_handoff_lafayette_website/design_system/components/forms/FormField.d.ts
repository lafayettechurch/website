export interface FormFieldOption { value: string; label: string; }
export interface FormFieldProps {
  /** Control type. text/email/tel/date/number render an input. */
  type?: 'text' | 'email' | 'tel' | 'date' | 'number' | 'select' | 'radio' | 'textarea';
  /** 14px/600 label. Non-required fields get " (optional)". */
  label: React.ReactNode;
  name?: string;
  /** For select and radio. */
  options?: (string | FormFieldOption)[];
  /** Placeholder, or the empty first option for select. */
  placeholder?: string;
  /** Muted help text under the control. */
  hint?: React.ReactNode;
  required?: boolean;
  value?: string;
  defaultValue?: string;
  onChange?: (value: string, e: any) => void;
  /** Textarea rows. Default 4. */
  rows?: number;
  style?: React.CSSProperties;
}
/**
 * @startingPoint section="Forms" subtitle="Text, email, select, radio and textarea fields + success panel" viewport="700x420"
 */
export declare function FormField(props: FormFieldProps): JSX.Element;
