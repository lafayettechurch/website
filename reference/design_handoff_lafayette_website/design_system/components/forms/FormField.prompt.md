Labelled form control — text, email, select, radio or textarea at 48px height with a 1px light-slate border and 3px radius; pair with FormSuccess after submit.

```jsx
<form style={{display:'grid',gap:20}}>
  <FormField label="Your name" name="name" required />
  <FormField type="email" label="Email" name="email" required />
  <FormField type="select" label="Which Sunday?" options={['This Sunday','Next Sunday']} placeholder="Choose one" />
  <FormField type="radio" label="Bringing kids?" name="kids" options={['Yes','No']} />
  <FormField type="textarea" label="Anything we should know?" />
  <Button variant="primary" type="submit">Let us know</Button>
</form>
```

- Focus uses the global 2px slate ring. Mark required fields by leaving others "(optional)"; no asterisks.
