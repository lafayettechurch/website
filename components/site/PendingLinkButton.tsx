'use client';
import { useCallback, useState } from 'react';
import { Button, type ButtonVariant } from '@/components/ds/Button';
import { Toast } from '@/components/ds/Toast';
import type { IconName } from '@/components/ds/Icon';

/**
 * A button whose destination may not be known yet (the Breeze giving page, Kyle's email).
 * With an href it's a normal link; without one it explains, in a toast, where to go instead.
 */
export function PendingLinkButton({ href, fallbackMessage, variant = 'secondary', icon, children }: {
  href?: string; fallbackMessage: string; variant?: ButtonVariant; icon?: IconName; children: React.ReactNode;
}) {
  const [toast, setToast] = useState(false);
  const close = useCallback(() => setToast(false), []);
  if (href) return <Button variant={variant} icon={icon} href={href}>{children}</Button>;
  return <>
    <Button variant={variant} icon={icon} onClick={() => setToast(true)}>{children}</Button>
    <Toast open={toast} icon="info" duration={5000} onClose={close}>{fallbackMessage}</Toast>
  </>;
}
