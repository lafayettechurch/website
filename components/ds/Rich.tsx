import { Fragment } from 'react';
import { Placeholder } from './Placeholder';

/**
 * Renders CMS text. Anything in [square brackets] shows as a Placeholder tag,
 * so editors can see at a glance what still needs writing. Line breaks typed in
 * the Studio are kept: Enter starts a new line, and a blank line leaves a gap.
 * With `paragraphs`, blank lines split the text into real <p>s instead.
 */
export function Rich({ text, paragraphs }: { text?: string; paragraphs?: boolean }) {
  if (!text) return null;
  const clean = text.replace(/\r\n?/g, '\n').trim();
  if (paragraphs) {
    return <>{clean.split(/\n\s*\n/).map((p, i) => <p key={i}><Lines text={p.trim()} /></p>)}</>;
  }
  return <Lines text={clean} />;
}

/** Each line on its own, joined with <br>. A blank line becomes an empty line. */
function Lines({ text }: { text: string }) {
  const lines = text.split('\n');
  return <>{lines.map((line, i) => <Fragment key={i}>
    {i > 0 && <br />}
    <Inline text={line.trimEnd()} />
  </Fragment>)}</>;
}

function Inline({ text }: { text: string }) {
  return <>{text.split(/(\[[^\]]+\])/g).map((part, i) => /^\[[^\]]+\]$/.test(part)
    ? <Placeholder key={i}>{part.slice(1, -1)}</Placeholder>
    : <Fragment key={i}>{part}</Fragment>)}</>;
}

export const hasPlaceholder = (text?: string) => !!text && /\[[^\]]+\]/.test(text);
