'use client';
import { useId } from 'react';

type Option = string | { value: string; label: string };
const val = (o: Option) => typeof o === 'string' ? o : o.value;
const lab = (o: Option) => typeof o === 'string' ? o : o.label;

/** Labelled form control at 48px. Optional fields say "(optional)"; required ones carry no marker. */
export function FormField({ type = 'text', label, name, options = [], placeholder, hint, required, autoComplete, rows = 4, defaultValue }: {
  type?: 'text' | 'email' | 'tel' | 'select' | 'radio' | 'textarea'; label: string; name: string; options?: Option[];
  placeholder?: string; hint?: string; required?: boolean; autoComplete?: string; rows?: number; defaultValue?: string;
}) {
  const id = useId();
  const hintId = hint ? id + '-hint' : undefined;
  const text = <>{label}{!required && <span className="lcc-field__opt"> (optional)</span>}</>;
  const common = { id, name, required, 'aria-describedby': hintId, className: 'lcc-input', defaultValue };

  if (type === 'radio') {
    return <fieldset className="lcc-field" aria-describedby={hintId}>
      <legend className="lcc-field__label">{text}</legend>
      <div className="lcc-radios">
        {options.map(o => <label key={val(o)} className="lcc-input lcc-radio">
          <input type="radio" name={name} value={val(o)} required={required} defaultChecked={defaultValue === val(o)} />
          <span>{lab(o)}</span>
        </label>)}
      </div>
      {hint && <div id={hintId} className="lcc-field__hint">{hint}</div>}
    </fieldset>;
  }

  let control;
  if (type === 'textarea') control = <textarea {...common} rows={rows} placeholder={placeholder} />;
  else if (type === 'select') control = <select {...common}>
    {placeholder && <option value="">{placeholder}</option>}
    {options.map(o => <option key={val(o)} value={val(o)}>{lab(o)}</option>)}
  </select>;
  else control = <input {...common} type={type} placeholder={placeholder} autoComplete={autoComplete} />;

  return <div className="lcc-field">
    <label htmlFor={id} className="lcc-field__label">{text}</label>
    {control}
    {hint && <div id={hintId} className="lcc-field__hint">{hint}</div>}
  </div>;
}
