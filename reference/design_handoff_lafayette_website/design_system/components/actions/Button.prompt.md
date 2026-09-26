Action button — clay "primary" for the one key action per view (usually "Plan your visit"), slate "secondary" for everything else.

```jsx
<Button variant="primary" href="/visit">Plan your visit</Button>
<Button variant="secondary" icon="circle-play">Watch live</Button>
<Button variant="outline">Get directions</Button>
<Button variant="link">Browse past sermons</Button>
```

- Variants: primary (clay), secondary (slate), outline, outline-on-dark (inside navy bands), link (amber underline).
- 48px min height, 3px radius, Inter 600. Sentence-case labels, verb first. Never two clay buttons on one screen.
