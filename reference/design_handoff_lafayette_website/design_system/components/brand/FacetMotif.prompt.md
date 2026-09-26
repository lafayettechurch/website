The "light through facets" signature motif — translucent rotated panes anchored to one edge; drop inside any position:relative container (hero, deep band, dark card, photo frame).

```jsx
<div style={{position:'relative',overflow:'hidden',background:'var(--lcc-navy)'}}>
  <FacetMotif preset="corner" />
  <div style={{position:'relative'}}>…content…</div>
</div>
```

- Presets: hero (with opacity={0.5} on navy), corner, card, soft (cream/white panels), accent.
- Rules: 3–5 panes, ±20°, rectangles only. Never centered, never a cross or grid — it must not echo the logo.
