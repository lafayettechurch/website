# Handoff: lafayettechurch.org — Version 1

## Overview
A rebuild of the Lafayette Church of Christ website (115 New Ballwin Road, Ballwin, MO 63021). Audience: **first-time guests first, members second.** Every page should answer a newcomer's questions within 1–2 clicks. The site has seven pages: Home, I'm new / Plan your visit, Watch, About, Leadership, Give, Contact & location.

## About the design files
The files in `prototype/` are **design references built in HTML**. They show the intended look, content and behavior. They are not production code to copy. Recreate them as a **React site hosted on Vercel**, using the components in `design_system/components/` as the source of truth for UI.

Open `prototype/Lafayette Website.dc.html` in a browser to click through it. It uses hash routes (`#/visit`, `#/watch`, …); the real site should use normal URLs (`/visit`, `/watch`, `/about`, `/leadership`, `/give`, `/contact`).

## Fidelity
**High fidelity.** Colors, type, spacing, components and copy are final, apart from the marked placeholders. Match them closely.

## Key technical requirements
1. **Stack:** React on Vercel. Next.js is a sensible default (static pages, easy CMS integration); confirm with the owner.
2. **CMS (required):** 3–5 volunteers who aren't technical (the minister, office staff) must be able to edit copy, times, leader bios and photos without touching code. Recommend and walk the owner through a headless CMS with a friendly editor, such as Sanity, TinaCMS or Decap. Content that must be editable: every page's text, service times, leader profiles and photos, core values, beliefs, directions, office hours, and links.
3. **"Let us know you're coming" form:** it must send submissions somewhere. Not decided yet: the office inbox, Kyle directly, or the office inbox with Kyle copied. Build it so the recipient is a single config value. Use Vercel serverless functions plus an email service, or a form service.
4. **No photography at launch.** Every photo spot uses `PhotoFrame`, and real photos drop in later through the CMS.
5. **Accessibility:** WCAG 2.2 AA. Visible focus (2px slate outline, 2px offset), 48px tap targets, labeled form fields, alt text, logical H1–H3 order.

## Design system
Everything is built from the Lafayette Church design system ("Warm Clarity"). Source is in `design_system/`:
- `tokens/*.css`: colors, typography, spacing, shape and base styles (CSS custom properties). Port these as-is.
- `components/**`: React source (`.jsx`) plus a type definition (`.d.ts`) and usage notes (`.prompt.md`) for each component.

Components used: **SiteHeader, SiteFooter, SectionBand, Card, Button, Eyebrow, Icon, FacetMotif, InfoRow, RuledList, FormField, FormSuccess, PhotoFrame, VideoFrame, MapBlock, LeaderProfile, PersonCard, Placeholder, Toast.**

### Tokens (summary)
- **Colors:** Navy `#1E2A3A` (text, deep bands, footer) · Slate `#3E5A76` (brand, links, secondary buttons) · Light slate `#7890A8` (decoration only) · Clay `#B4533C` (the one primary CTA per view, "Plan your visit") · Amber `#C98A2E` (underlines and small marks only, never text) · Cream `#F6F1E9` (page) · White (cards, forms) · Sand `#F0E7D6` (Give surfaces). Rule: navy or slate text on cream/white; white text on slate, clay or navy.
- **Type:** Fraunces (display/headings, 300–600) + Inter (body/UI 400/500/600). Display `clamp(40px,6vw,72px)`/1.05, H1 `clamp(32px,4.4vw,56px)`/1.1, H2 `clamp(26px,3.2vw,38px)`, H3 22–27px, body 16–18px/1.6, labels 12px Inter 700 uppercase +0.14em.
- **Spacing:** 8px base. Container 1180px; gutter `clamp(20px,5vw,80px)`; section padding `clamp(56px,8vw,104px)`; grid gap 20px; card padding 28–30px.
- **Radius:** 3px buttons/inputs, 4px cards/panels, 999px pills.
- **Shadows:** none. **Gradients:** none. Motion: 150–220ms color transitions only, `cubic-bezier(.2,.7,.2,1)`.
- **Icons:** Lucide line icons (via the `Icon` component), always with a visible label.

## Global layout
- **Header (`SiteHeader`):** sticky, cream at 92% with 8px blur. Logo left; nav: I'm new · Watch · About · Leadership · Give · Contact; clay "Plan your visit" button always visible. **Below 900px:** compact mode shows the logo mark, the "Plan your visit" button and a menu button that opens a full-width link list. The header stays at the top of the screen, so "Plan your visit" is always reachable on mobile.
- **Footer (`SiteFooter`):** navy. Tagline, times, address, quick links (Plan your visit, Watch, What we believe, Leadership, Give, Contact & location), "In Ballwin since 1962", Facebook and Instagram.
- **Grids** use `repeat(auto-fit, minmax(min(100%, Npx), 1fr))` so they collapse to one column on mobile.

## Pages

### 1. Home (`/`)
1. **Hero:** navy band with the `FacetMotif` "hero" preset at 0.5 opacity. Eyebrow "Lafayette Church of Christ · Ballwin, MO". H1 "A Jesus-community of life, light, and love." Lede (Fraunces 300): "Grace and peace to you. Come as you are — you're welcome here." Buttons: **Plan your visit** (primary), **Watch this Sunday** (outline-on-dark, circle-play icon).
2. **Times strip:** white, three `InfoRow`s: Sundays at 10 AM / Worship · Bible classes for all ages at 9 AM · Wednesdays at 7 PM / Bible study · 115 New Ballwin Road / Ballwin, MO 63021 · Get directions (links to Contact).
3. **Cards (cream):** "New here? We'd love to meet you." (default card, button "What to expect" → Plan your visit) and "Not ready to visit in person? Watch this Sunday." (deep card, button "Watch live" → Watch).
4. **Who we are (white band):** title "A loving family called by God, saved by Christ and led by the Spirit." The lede covers the mission, Ballwin since 1962, and the greater St. Louis metro. Link buttons: What we believe, Meet our leaders.
5. **Give (warm band):** thank-you copy plus "there's no expectation to give", and a "Ways to give" button.
6. **Contact (cream):** "Questions? Talk to a real person." Buttons: Email the office, Call the office, Map and directions.

### 2. I'm new / Plan your visit (`/visit`)
- Hero (cream, soft facets): H1 "Plan your visit". Buttons: "Let us know you're coming" (scrolls to the form), "Get directions".
- Info strip: Sundays at 10 AM, the address, and "Worship lasts about [X] minutes".
- **01 What to expect on a Sunday:** six cards: A friendly face at the door · Where to park · Come as you are (no dress code) · How long it runs · Classes for every age (kids) · What worship is like.
- **02 Midweek:** `RuledList`: Wednesdays at 7 PM, Bible study.
- **03 Let us know you're coming:** marked optional. Left: intro and a deep card "Kyle would be glad to meet you before you visit." → Leadership. Right: form with Your name (required), Email (required), Which Sunday? (the next 4 Sundays plus "Not sure yet"), How many of you? (Just me, 2, 3, 4, 5 or more), Bringing children? (Yes/No radio), Anything we should know? (textarea, optional). Below it: "We'll only use this to welcome you. No mailing lists." On success, show `FormSuccess`: "We'll watch for you, {first name}." plus the date line.

### 3. Watch (`/watch`)
- Navy hero: H1 "Not ready to visit in person? Watch this Sunday." Buttons: Watch live (primary) → YouTube channel; Browse past sermons → playlist.
- `VideoFrame` linking to the YouTube channel ("Live Sundays at 10 AM").
- Three cards: Sundays at 10 AM (live, no account needed) · Recent sermons (playlist) · Watched online? Come in person (→ Plan your visit).
- **There is no sermon archive on the site**; always link out to YouTube.

### 4. About (`/about`)
- Hero: "A loving family called by God, saved by Christ and led by the Spirit." Lede: honor God in all we do; Ballwin since 1962; people come from throughout the greater St. Louis metro.
- Mission (deep band): "To be and make disciples of Jesus Christ in our families, community and world."
- **01 Who we are:** cards: Rooted in Ballwin (since 1962) · From across the metro · A Church of Christ (placeholder explaining the tradition).
- **02 Our core values:** numbered `RuledList`, 4 placeholder rows.
- **03 What we believe:** `RuledList` topics: God, Jesus, The Bible, Baptism and the church (placeholder bodies).
- Next steps (warm): Our leadership, What to expect.

### 5. Leadership (`/leadership`)
- Hero: "The people who care for this church". Lede mentions the minister and the Shepherds (our elders).
- `LeaderProfile`: role Minister, name Kyle [last name], photo 4:5, bio, warm callout "Want to meet first?" with an **Email Kyle** button.
- Shepherds (white band): eyebrow "Shepherds (our elders)", a short explanation, then a 4-up grid of `PersonCard`s (4:3 couple photo, "[Shepherd name] & [Spouse name]", an optional line).

### 6. Give (`/give`)
- Sand hero: "Thank you for supporting the work of Lafayette." "No expectation to give" for guests. **Give online** button → Breeze (new tab), with the note "Opens our secure giving page on Breeze".
- Cards: There's no expectation to give · Safe and secure (Breeze, one-time or recurring) · In person or by mail (placeholder).
- "Questions about giving? Email the office."

### 7. Contact & location (`/contact`)
- Hero: "Questions? Talk to a real person."
- Cards: Email **office.lafayettechurch@gmail.com** · Phone **636-391-6697** plus office hours (placeholder) · Follow along (Facebook, Instagram).
- **01 Find us:** `MapBlock` with a Google Maps embed of the address and a "Get directions" button (Google Maps directions URL).
- Written directions as a `RuledList`: From the east · From the west · When you arrive (placeholders).

## Content and voice rules
- Speak to "you". Be warm, plain, specific and low-pressure. Go easy on exclamation points and never use emoji. Use sentence case for headings and buttons.
- Times are written "10 AM", "7 PM"; the separator is " · ". Use real em dashes and curly apostrophes.
- Explain insider terms in brackets, e.g. "Shepherds (our elders)".
- **Do not use "theGathering", "theMiddle" or "theScattering" as names for services.** They are the names of Kyle's weekly emails (Sunday, midweek and Monday), not every one goes out every week, and they don't appear on the site in V1.
- Say "people come from throughout the greater St. Louis metro"; don't list cities.
- Don't make up names, quotes or statistics.

## Links
- Facebook: https://www.facebook.com/lafayettechurchstl/
- Instagram: https://www.instagram.com/lafayettechurch/
- YouTube channel (livestream): https://youtube.com/@lafayettechurch
- Sermon playlist: https://youtube.com/playlist?list=PLnjGU3khFn4MOEdSk2JMQ4tOITYXWcBDE
- Office email: office.lafayettechurch@gmail.com
- Office phone: 636-391-6697
- **Still needed:** the Breeze giving URL and Kyle's email address.

## Placeholders to fill (via the CMS)
- How long worship runs, and the end time
- What worship is like (2–3 sentences)
- Children: what's available during worship, and how drop-off works
- Parking, which door to use, accessible parking
- What being part of the Churches of Christ means (1 sentence)
- Core values: names plus one line each (number to be confirmed)
- What we believe: 1–2 sentences each on God, Jesus, the Bible, and baptism and the church
- Kyle: last name, bio, photo, email, and how he meets people before a visit
- The four Shepherd couples: names, photos, an optional line each
- Office hours
- Written directions (east, west, on arrival)
- Other ways to give (in person, mailing address)

## Future (not in V1)
- **Email sign-up for Kyle's weekly emails:** if it's requested later, add a fourth card on Contact ("Get Kyle's weekly emails") and a small link in the footer. Keep it off Home.

## Assets
- `prototype/assets/logo-color-trimmed.png`: primary lockup (header; min width 180px)
- `prototype/assets/logo-icon.jpeg`: circular mark (mobile header, favicon)
- `prototype/assets/logo-white.png`: reversed lockup (footer and navy surfaces)
- Vector originals (.ai/.eps/.pdf) are in the designer's logo package; export SVGs from those for production. Never recolor, stretch or rebuild the logo.
- Fonts: Fraunces and Inter from Google Fonts; self-host for production.

## Files
- `prototype/Lafayette Website.dc.html`: the clickable prototype (all seven pages)
- `prototype/_ds/`, `prototype/support.js`, `prototype/assets/`: needed to open the prototype locally
- `design_system/components/`: component source, types and usage notes
- `design_system/tokens/`: CSS design tokens
