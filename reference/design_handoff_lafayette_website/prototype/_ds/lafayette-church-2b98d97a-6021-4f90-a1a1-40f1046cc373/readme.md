# Lafayette Church of Christ — Design System ("Warm Clarity")

Lafayette Church of Christ, 115 New Ballwin Road, Ballwin, MO 63021 — in Ballwin since 1962. Brand line: **"A Jesus-community of life, light, and love."** This system covers the church website (rebuild of lafayettechurch.org), print (bulletins, flyers, connect cards), slides and social.

Direction: a calm slate-blue/navy backbone that matches the existing mosaic-cross logo, warmed with cream backgrounds, a clay accent and a soft serif. It must work with **no photography**; every frame is sized so a photo can drop in later.

## Sources
- `uploads/Lafayette Brand System.dc.html` — brand guide v1.0, **source of truth** for color, type, motif, voice, core elements.
- `uploads/Lafayette Church of Christ_ Brand and Design System Brief.md` — research brief: palette rationale, contrast notes, microcopy, homepage structure.
- `uploads/logo-color.png`, `uploads/logo-icon.jpeg`, `uploads/logo-white.jpg` — logo files (raster, c. 2011–12).
- `uploads/Lafayette Website Launch Meeting, 7_30_26 (1).pdf` — kickoff meeting notes: V1 priorities, site audit, content keep/cut list.
- Local folder `Lafayette Logo/` — designer logo package (color, grey, black, white in .ai/.eps/.pdf/.psd/.jpg) + Balkan logo font. Vector originals live there; not copied.
- Live site referenced in brief: https://lafayettechurch.org (not accessed).

## Index
- `styles.css` — entry point (imports only) → `tokens/fonts.css`, `colors.css`, `typography.css`, `spacing.css`, `shape.css`, `base.css`
- `guidelines/` — foundation specimen cards (Colors, Type, Spacing, Brand, Voice)
- `components/` — React primitives (see below), each with `.d.ts`, `.prompt.md` and a directory card
- `ui_kits/website/` — click-through church website (Home, Plan your visit, Watch, Give)
- `assets/` — `logo-color.png` (original), `logo-color-trimmed.png` (same file, transparent margins cropped), `logo-icon.jpeg` (mark), `logo-white.png` + `logo-white-mark.png` (reversed, transparent — extracted from the designer's white-on-black JPG)
- `thumbnail.html`, `SKILL.md`

## Components
- **Button** (`components/actions/`) — primary (clay), secondary (slate), outline, outline-on-dark, link
- **Card** (`components/content/`) — default, deep, warm, outline
- **Eyebrow** (`components/content/`) — uppercase kicker
- **SectionBand** (`components/layout/`) — full-width band: cream, white, warm, deep, brand
- **SiteHeader** (`components/layout/`) — sticky header, persistent "Plan your visit", compact mobile mode
- **SiteFooter** (`components/layout/`) — navy footer with tagline, times, address, social
- **FacetMotif** (`components/brand/`) — "light through facets" pane layer (hero, corner, card, soft, accent)
- **Icon** (`components/brand/`) — Lucide line icon

Intentional additions (not named in the request): **Eyebrow** — the guide's uppercase label recurs on every card and band; **Icon** — wrapper so the one chosen line set is used everywhere.

---

## CONTENT FUNDAMENTALS
The church already writes well; new copy should sound like the existing welcome.

- **Grace first, second person.** Speak to "you"; lead with welcome, not with "we". The site opens with "Grace and peace" (Philemon 3).
- **Plain and specific.** Real times, real address, real next step: "Sundays at 10 AM · Bible classes for all ages at 9 AM", "115 New Ballwin Road, Ballwin, MO 63021".
- **Warm, not slick.** Sincere hospitality, no hype, go easy on exclamation points.
- **Confident but low-pressure.** Invite, don't corner — "Whenever you're ready", "there's no expectation to give".
- **Theologically careful, accessible.** Keep substance; subtitle insider terms: "Shepherds (our elders)", "Sunday worship (theGathering)", "Wednesday Bible study (theMiddle)", "Monday gathering (theScattering)", "What we believe" instead of "Core Beliefs".
- **Casing:** sentence case for headings and buttons ("Plan your visit", "Watch live"). Uppercase only for small tracked labels ("SUNDAYS AT 10 AM").
- **Buttons:** verb first, 2–3 words: "Plan your visit", "Get directions", "Give online", "Email the office".
- **Times:** "10 AM", "7 PM" (space, caps, no periods). Separator: middle dot " · ".
- **Emoji:** never. Punctuation uses real em dashes and curly apostrophes.
- Example voice: "Come as you are — there's no dress code, and someone will be near the door to help you find your way." / "Questions? Talk to a real person."
- Social: Facebook and Instagram only (X/Twitter retired).
- From the kickoff notes: no walls of text on the homepage, plain language over Churches of Christ jargon, key info within 1–2 clicks, pages easy to skim. Communicate "people come from throughout the greater St. Louis metro" rather than listing cities.

## VISUAL FOUNDATIONS
- **Color.** Navy `#1E2A3A` (ink, deep bands), Slate `#3E5A76` (brand primary, links, secondary buttons), Light Slate `#7890A8` (logo echo, decoration only), Clay `#B4533C` (the one CTA per view), Amber `#C98A2E` (underlines, small marks — never text), Cream `#F6F1E9` (page), White (cards/forms), Sand `#F0E7D6` (Give surfaces). **Rule:** navy or slate text on cream/white; white text on slate, clay or navy; never text in light slate, amber or cream.
- **Type.** Fraunces (display, 300–600, optical sizing on) + Inter (body/UI, 400/500/600, 700 sparingly). Display 56–72px / 1.05, H1 40–56 / 1.1, H2 30–36, H3 22–24 Fraunces 600, body 16–18 / 1.6, labels 12px Inter 600–700 +0.14em uppercase. Ledes and quotes in Fraunces 300. Tight negative tracking on display (−0.02 to −0.03em). No third typeface.
- **Spacing.** 8px base: 8, 16, 24, 32, 48, 64, 96. Container 1180px; gutters clamp(20px, 5vw, 80px); section padding clamp(56px, 8vw, 104px); cards 28–36px padding; grids gap 20px.
- **Backgrounds.** Flat color fields only — cream page, white/sand cards, full-bleed navy bands. No gradients, no textures. The only graphic is the facet motif. No photography at launch.
- **Facet motif ("light through facets").** 3–5 rotated rectangles (±20°) in slate / light slate / clay / amber / cream at 40–60% opacity (base pane up to 85% on navy), overlapping so colors mix. Anchored to and bleeding off one edge; never centered, never a cross, rays or equal grid.
- **Corner radii.** 3px buttons/inputs, 4px cards/panels, 999px pills, 50% for the mark. Nothing else.
- **Cards.** White + 1px `#E8E0D3` border, 4px radius, **no shadow**. Deep cards: navy, no border, facet accents. Warm cards: sand, no border.
- **Borders & rules.** 1px warm rules (`#E2D9CB` section rules, `#F0E9DC` dividers). Section headers sit on a top rule with a small Fraunces numeral.
- **Shadows.** None. Elevation is expressed by white-on-cream contrast.
- **Transparency & blur.** Only on the sticky header (cream at 92% + 8px backdrop blur) and in the facet panes.
- **Hover.** Buttons darken ~10% (clay → `#9C4631`, slate → `#324B63`); outline buttons get an 8% tint; links turn clay; link-buttons' amber underline turns clay. 150ms ease.
- **Press / focus.** No shrink or bounce. Focus: 2px slate outline, 2px offset, always visible.
- **Animation.** Minimal: 150–220ms color transitions, `cubic-bezier(.2,.7,.2,1)`. No parallax, no bouncing, no auto-playing motion.
- **Layout.** Sticky header; persistent clay "Plan your visit"; service times + location above the fold; 48px tap targets 8px apart; body measure 45–75ch.
- **Imagery (future).** Photos drop into the same frames the motif occupies; keep them warm and natural, real people and place, no heavy filters.

## ICONOGRAPHY
- The guide specifies one open-source line set: 24px grid, 1.75–2px stroke, rounded caps/joins, stroked (never filled) in slate or navy, always with a text label. No set was chosen in the sources.
- **Substitution (flagged):** Lucide, loaded from CDN `https://unpkg.com/lucide-static@0.460.0/icons/<name>.svg` (2px rounded stroke) via CSS mask so it takes `currentColor`. Use the `Icon` component.
- The nine site icons: New here `sparkles`, Times `clock`, Location `map-pin`, Watch `circle-play`, Give `heart-handshake`, Calendar `calendar`, Contact `mail`, Kids `baby`, Students `users`. Social: `facebook`, `instagram`.
- No emoji, no unicode glyph icons (the middle dot and → arrow are typographic only).

## Logo
- Use the provided files unaltered. Primary lockup on white/cream (min width 180px); mark alone for favicon/avatar (min 32px). On navy, slate, clay or photos use `logo-white.png` / `logo-white-mark.png`.
- Clear space = height of the circular mark. Never recolor, stretch, rotate, shadow, or build graphics from the mosaic cross.
- The reversed files were made by converting the designer's white-on-black `Lafayette_C_C_white.jpg` to a transparent PNG (luminance → alpha); the artwork itself is untouched. The original upload `logo-white.jpg` is blank white and unused.
- Vector originals (.ai/.eps/.pdf) exist in the designer package — export SVGs from those for production instead of a retrace.
- The wordmark is set in **Balkan Normal** (2012). It is part of the logo only — never use it for headings or body.

## Fonts
Fraunces and Inter are loaded from Google Fonts (`tokens/fonts.css`). No font binaries were supplied; self-host for production.
