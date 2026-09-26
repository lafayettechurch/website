import { forwardRef } from 'react';
import { Icon } from './Icon';

/** Sand success panel that replaces a form after submit. Focusable so it can receive focus on reveal. */
export const FormSuccess = forwardRef<HTMLDivElement, { title: React.ReactNode; children?: React.ReactNode; action?: React.ReactNode }>(
  function FormSuccess({ title, children, action }, ref) {
    return <div ref={ref} className="lcc-success" role="status" tabIndex={-1}>
      <Icon name="circle-check" size={28} />
      <div style={{ minWidth: 0 }}>
        <h3 className="lcc-success__title">{title}</h3>
        {children && <div className="lcc-success__body">{children}</div>}
        {action && <div style={{ marginTop: 18, display: 'flex', gap: 12, flexWrap: 'wrap' }}>{action}</div>}
      </div>
    </div>;
  });
