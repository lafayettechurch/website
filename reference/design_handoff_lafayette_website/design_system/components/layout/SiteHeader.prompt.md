Sticky cream site header — logo left, short nav, persistent clay "Plan your visit"; `compact` for mobile (mark + CTA + menu).

```jsx
<SiteHeader active="Watch" logoSrc="../assets/logo-color-trimmed.png" onNavigate={l => go(l.href)} />
<SiteHeader compact markSrc="../assets/logo-icon.jpeg" />
```

- Translucent cream (92%) with 8px backdrop blur — the only blur in the system.
- Keep nav to five items; never insider labels.
