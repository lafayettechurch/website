Small navy status message fixed at bottom center — confirmations like "Link copied" or "Message sent".

```jsx
const [t, setT] = React.useState(false);
<Button onClick={() => setT(true)}>Copy address</Button>
<Toast open={t} onClose={() => setT(false)}>Address copied</Toast>
```

- One at a time, one short sentence, no actions beyond dismiss.
