/** Dashed notice tag marking copy that still needs writing. Filled in via the CMS. */
export function Placeholder({ children = 'Copy needed', block }: { children?: React.ReactNode; block?: boolean }) {
  return <span className={'lcc-ph' + (block ? ' lcc-ph--block' : '')}>[{children}]</span>;
}
