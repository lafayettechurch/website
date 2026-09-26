# lafayettechurch.org

The Lafayette Church of Christ website: Next.js (App Router) on Vercel, with content edited in Sanity Studio at `/studio`.

The design handoff (prototype, tokens, component source) is in `reference/design_handoff_lafayette_website/`.

## Run it locally

```bash
npm install
cp .env.example .env.local   # then fill in what you have
npm run dev                  # site: http://localhost:3000   editor: http://localhost:3000/studio
npm run placeholders         # what copy is still missing
```

The site works before Sanity is set up: it reads the seed files in `content/*.json` until `NEXT_PUBLIC_SANITY_PROJECT_ID` is set.

## How it's put together

| Path | What's there |
| --- | --- |
| `app/(site)/` | One folder per page (`/visit`, `/watch`, `/about`, `/leadership`, `/give`, `/contact`, `/calendar`) |
| `app/studio/` | Sanity Studio, the content editor |
| `app/api/` | The visit form (`visit`) and the publish webhook (`revalidate`) |
| `components/ds/` | The design system components; site-specific pieces are in `components/site/` |
| `styles/` | Design tokens copied from the handoff, plus `components.css` |
| `sanity/` | Sanity connection and the editor's schema (one document per page, plus "Church details") |
| `content/*.json` | **Seed copy.** Loaded into Sanity once with `npm run seed`, and used as a fallback until Sanity is connected. After seeding, Sanity is the source of truth; edit there, not here. |
| `lib/content.ts` | The only place pages get content from |

Text in `[square brackets]` renders as a yellow placeholder tag on the page, and the Studio shows a warning on any field that still has one. `npm run placeholders` lists all of them.

## Design notes

- **Button icons.** A button gets an icon when it does something in another medium: play a video (`circle-play`), start an email (`mail`), place a call (`phone`), open a map (`map-pin`), or give (`heart-handshake`, only on "Give online"). Buttons that just go to another page of the site ("Plan your visit", "What to expect", "Ways to give") stay plain. Icons are always paired with a text label.
- The full rules and tokens are in `reference/design_handoff_lafayette_website/` (see its README and each component's `.prompt.md`).

## Setting up Sanity (one time)

Use a **church-owned** email for the account, and add a second admin, so the project never depends on one person.

1. Sign up at [sanity.io](https://www.sanity.io) and create a project named "Lafayette website" with a dataset called `production` (public). Note the **project ID**.
2. In [sanity.io/manage](https://www.sanity.io/manage) → your project:
   - **API → CORS origins:** add `http://localhost:3000` and `https://lafayettechurch.org`, both with **Allow credentials** checked. (Add the Vercel preview URL too if you want the editor there.)
   - **API → Tokens:** create an **Editor** token for seeding (keep it on your computer only).
   - **Members:** invite Kyle and the other editors. They sign in with Google or email.
3. Put the project ID and token in `.env.local`, then load the current copy into Sanity:
   ```bash
   npm run seed
   ```
   It only adds pages that don't exist yet, so it's safe to re-run. `npm run seed -- --force` overwrites Sanity with the JSON files and discards edits made there.
4. Open http://localhost:3000/studio and check that everything's there.
5. **Publish webhook** (so edits show up right away): in sanity.io/manage → **API → Webhooks → Create**:
   - URL: `https://lafayettechurch.org/api/revalidate`
   - Trigger on: Create, Update, Delete. Filter: leave empty. Projection: `{_type}`.
   - Secret: a long random string. Put the same string in Vercel as `SANITY_REVALIDATE_SECRET`.

   Without the webhook, changes still appear within about 5 minutes.
6. **Backups:** the free plan keeps only a few days of edit history, so `.github/workflows/sanity-backup.yml` exports all content nightly and keeps 90 days. It needs two GitHub secrets, listed at the top of that file.

## Deploying to Vercel

1. Push this folder to a GitHub repository (church-owned organization) and import it in Vercel. Framework: Next.js, no build settings needed.
2. Add the environment variables from `.env.example` in Vercel, except `SANITY_API_WRITE_TOKEN`:
   - `NEXT_PUBLIC_SANITY_PROJECT_ID`, `NEXT_PUBLIC_SANITY_DATASET`, `SANITY_REVALIDATE_SECRET`: from the Sanity setup above.
   - `VISIT_FORM_TO`: **who gets "Let us know you're coming" submissions.** Set it to the office inbox, Kyle, or both (comma-separated). Use `VISIT_FORM_CC` to copy someone instead.
   - `RESEND_API_KEY` and `VISIT_FORM_FROM`: create a free [Resend](https://resend.com) account, verify the `lafayettechurch.org` domain, and use a sender on it, e.g. `Lafayette website <forms@lafayettechurch.org>`. Replies go straight to the guest.
   - `GOOGLE_CALENDAR_ID` and `GOOGLE_CALENDAR_API_KEY`: see below.

Without `RESEND_API_KEY`, the form still works in development and logs submissions to the server console. In production it returns an error and asks the guest to email the office, so no submission disappears silently.

## Connecting the calendar

`/calendar` shows Kyle's Google Calendar in the site's own design, and refreshes itself every 15 minutes. Until it's connected, it shows the regular weekly schedule from the Calendar page in Sanity.

1. **Decide what's public.** In Google Calendar, open the calendar's **Settings and sharing → Access permissions** and turn on **Make available to public** with "See all event details". Anything marked *Private* on an individual event is never shown on the site, but it's cleaner to keep private items on a separate calendar.
2. Copy the **Calendar ID** from **Integrate calendar** into `GOOGLE_CALENDAR_ID`.
3. In [Google Cloud Console](https://console.cloud.google.com/), create a project (church account), enable the **Google Calendar API**, and create an **API key** restricted to that API. Put it in `GOOGLE_CALENDAR_API_KEY`. It's free at this volume.

Once connected, the page also shows "add to your calendar" buttons for Google, Apple and Outlook.

## Still needed from the church

- The Breeze giving URL: in the Studio under **Church details → Links**. Until then, "Give online" shows a note pointing people to the office email.
- Kyle's email: under **Leadership → Minister**. Until then, "Email Kyle" points people to the office.
- Everything listed by `npm run placeholders`: worship length, parking, kids, core values, beliefs, bios, Shepherd names and photos, office hours, directions, other ways to give. Much of this can be carried over from the current site.
- A decision on the form recipient (`VISIT_FORM_TO`).
- SVG exports of the logo from the designer's package, to replace the PNGs in `public/assets/`.

See [CMS.md](CMS.md) for the guide to hand to editors.
