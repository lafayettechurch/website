import { Fragment } from 'react';
import { Placeholder } from './Placeholder';

/**
 * Renders CMS text. Anything in [square brackets] shows as a Placeholder tag,
 * so editors can see at a glance what still needs writing. With `paragraphs`,
 * blank lines split the text into <p>s.
 */
export function Rich({ text, paragraphs }: { text?: string; paragraphs?: boolean }) {
  if (!text) return null;
  if (paragraphs) {
    return <>{text.split(/\n\s*\n/).map((p, i) => <p key={i}><Inline text={p.trim()} /></p>)}</>;
  }
  return <Inline text={text} />;
}

function Inline({ text }: { text: string }) {
  return <>{text.split(/(\[[^\]]+\])/g).map((part, i) => /^\[[^\]]+\]$/.test(part)
    ? <Placeholder key={i}>{part.slice(1, -1)}</Placeholder>
    : <Fragment key={i}>{part}</Fragment>)}</>;
}

export const hasPlaceholder = (text?: string) => !!text && /\[[^\]]+\]/.test(text);
