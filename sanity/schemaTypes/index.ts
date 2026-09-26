// One document per page, plus "Church details" for facts used everywhere.
// Field names match the seed files in /content, so the site reads either one the same way.
import {
  BookOpen as BookIcon, Calendar as CalendarIcon, Settings as CogIcon, HeartHandshake as HeartIcon, House as HomeIcon,
  MapPin as PinIcon, CirclePlay as PlayIcon, Sparkles as SparklesIcon, Users as UsersIcon,
} from 'lucide-react';
import { defineArrayMember, defineField, defineType } from 'sanity';
import { card, cards, group, hero, photo, rows, str, time, txt, url } from './fields';

const PLACEHOLDER_TIP = 'Anything in [square brackets] shows on the site as a yellow “still needs writing” tag.';

const siteSettings = defineType({
  name: 'siteSettings', title: 'Church details', type: 'document', icon: CogIcon,
  description: 'Times, address, office contact and links used across the whole site.',
  fields: [
    str('name', 'Church name', { required: true }),
    str('tagline', 'Tagline', { description: 'Shown in the footer.' }),
    group('address', 'Address', [str('street', 'Street', { required: true }), str('city', 'City, state and ZIP', { required: true })]),
    group('sunday', 'Sundays', [
      str('title', 'Time', { description: 'For example, “Sundays at 10 AM”.' }),
      str('worship', 'What happens'),
      str('classes', 'Bible classes'),
    ]),
    group('midweek', 'Midweek', [str('title', 'Time'), str('detail', 'What happens')]),
    group('stream', 'Sunday livestream window', [time('start', 'Starts'), time('end', 'Ends')], {
      description: 'During these hours on Sundays, the Watch page video panel points at the live stream instead of past sermons.',
    }),
    group('office', 'Church office', [
      str('email', 'Email'),
      str('phone', 'Phone', { description: 'Written like 636-391-6697.' }),
      str('hours', 'Office hours'),
    ]),
    group('links', 'Links', [
      url('facebook', 'Facebook'),
      url('instagram', 'Instagram'),
      url('youtube', 'YouTube channel'),
      url('live', 'YouTube live link', { description: 'The channel address plus /live. YouTube sends this to whatever is streaming right now.' }),
      url('playlist', 'YouTube sermon playlist'),
      url('breeze', 'Breeze giving page', { description: 'Until this is filled in, “Give online” explains that online giving is being set up.' }),
    ]),
    group('footer', 'Footer', [txt('times', 'Times (one per line)'), str('since', 'Bottom line')]),
  ],
  preview: { prepare: () => ({ title: 'Church details' }) },
});

const homePage = defineType({
  name: 'homePage', title: 'Home', type: 'document', icon: HomeIcon, description: PLACEHOLDER_TIP,
  fields: [
    hero(),
    card('newHere', '“New here?” card'),
    card('watch', '“Watch this Sunday” card'),
    group('whoWeAre', 'Who we are', [str('eyebrow', 'Small label'), str('title', 'Title'), txt('lede', 'Text')]),
    card('give', 'Give section'),
    group('contact', 'Contact section', [str('eyebrow', 'Small label'), str('title', 'Title'), txt('lede', 'Text')]),
  ],
  preview: { prepare: () => ({ title: 'Home' }) },
});

const visitPage = defineType({
  name: 'visitPage', title: 'Plan your visit', type: 'document', icon: SparklesIcon, description: PLACEHOLDER_TIP,
  fields: [
    hero(),
    group('length', 'How long worship lasts (info strip)', [str('title', 'Line 1'), str('detail', 'Line 2')]),
    group('expect', '01 · What to expect on a Sunday', [str('title', 'Section title'), cards('cards', 'Cards')]),
    group('midweek', '02 · Midweek', [str('title', 'Section title'), rows('items', 'Rows')]),
    group('form', '03 · Let us know you’re coming', [
      str('title', 'Section title'),
      txt('intro', 'Intro'),
      str('meetEyebrow', 'Kyle card: small label'),
      str('meetTitle', 'Kyle card: title'),
      txt('meetBody', 'Kyle card: text'),
      str('privacy', 'Note under the form'),
      txt('successBody', 'Thank-you message', { description: '{date} becomes “on Sunday, October 4” (or “soon”).' }),
    ]),
  ],
  preview: { prepare: () => ({ title: 'Plan your visit' }) },
});

const watchPage = defineType({
  name: 'watchPage', title: 'Watch', type: 'document', icon: PlayIcon, description: PLACEHOLDER_TIP,
  fields: [
    hero(),
    group('video', 'Video panel', [
      str('liveLabel', 'During the livestream: label'),
      str('liveSub', 'During the livestream: second line'),
      str('offLabel', 'Rest of the week: label'),
      str('offSub', 'Rest of the week: second line'),
    ]),
    group('cards', 'Cards', [card('live', 'Live card'), card('recent', 'Recent sermons card'), card('visit', 'Come in person card')]),
  ],
  preview: { prepare: () => ({ title: 'Watch' }) },
});

const aboutPage = defineType({
  name: 'aboutPage', title: 'About', type: 'document', icon: BookIcon, description: PLACEHOLDER_TIP,
  fields: [
    hero(),
    group('mission', 'Mission', [str('eyebrow', 'Small label'), txt('statement', 'Mission statement')]),
    group('whoWeAre', '01 · Who we are', [str('title', 'Section title'), cards('cards', 'Cards')]),
    group('values', '02 · Core values', [str('title', 'Section title'), rows('items', 'Values')]),
    group('beliefs', '03 · What we believe', [str('title', 'Section title'), str('lede', 'Intro'), rows('items', 'Beliefs')]),
    group('nextSteps', 'Next steps', [str('eyebrow', 'Small label'), str('title', 'Title')]),
  ],
  preview: { prepare: () => ({ title: 'About' }) },
});

const leadershipPage = defineType({
  name: 'leadershipPage', title: 'Leadership', type: 'document', icon: UsersIcon, description: PLACEHOLDER_TIP,
  fields: [
    hero(),
    group('minister', 'Minister', [
      str('role', 'Role'),
      str('name', 'Full name'),
      photo('photo', 'Photo', 'Portrait (taller than wide). Drag the circle to the face so cropping keeps it in frame.'),
      str('email', 'Email', { description: 'Powers the “Email Kyle” button.' }),
      txt('bio', 'Bio', { rows: 6, description: 'Leave a blank line between paragraphs.' }),
      str('calloutEyebrow', 'Callout: small label'),
      str('calloutTitle', 'Callout: title'),
      txt('calloutBody', 'Callout: text'),
    ]),
    group('shepherds', 'Shepherds', [
      str('eyebrow', 'Small label'),
      str('title', 'Title'),
      txt('lede', 'Intro'),
      defineField({
        name: 'people', title: 'Shepherd couples', type: 'array',
        of: [defineArrayMember({
          type: 'object', name: 'couple', title: 'Couple',
          fields: [
            str('name', 'Names', { description: 'Like “John & Jane Smith”.' }),
            str('line', 'One line about them (optional)'),
            photo('photo', 'Photo', 'Landscape (wider than tall).'),
          ],
          preview: { select: { title: 'name', subtitle: 'line', media: 'photo' } },
        })],
      }),
    ]),
  ],
  preview: { prepare: () => ({ title: 'Leadership' }) },
});

const givePage = defineType({
  name: 'givePage', title: 'Give', type: 'document', icon: HeartIcon, description: PLACEHOLDER_TIP,
  fields: [
    group('hero', 'Top of page', [str('eyebrow', 'Small label'), str('title', 'Headline'), txt('lede', 'Intro'), str('note', 'Note beside the button')]),
    cards('cards', 'Cards'),
  ],
  preview: { prepare: () => ({ title: 'Give' }) },
});

const contactPage = defineType({
  name: 'contactPage', title: 'Contact & location', type: 'document', icon: PinIcon, description: PLACEHOLDER_TIP,
  fields: [
    hero(),
    group('findUs', 'Find us', [str('title', 'Section title')]),
    rows('directions', 'Written directions'),
  ],
  preview: { prepare: () => ({ title: 'Contact & location' }) },
});

const calendarPage = defineType({
  name: 'calendarPage', title: 'Calendar', type: 'document', icon: CalendarIcon,
  description: 'The events themselves come from the church Google Calendar. Edit them there.',
  fields: [
    hero(),
    str('subscribe', 'Line above the “add to your calendar” buttons'),
    str('empty', 'When a month has nothing on it'),
    str('unavailable', 'When Google Calendar can’t be reached'),
    defineField({
      name: 'weekly', title: 'Regular weekly schedule (backup)', type: 'array',
      description: 'Shown only if Google Calendar can’t be reached.',
      of: [defineArrayMember({
        type: 'object', name: 'weeklyEvent', title: 'Weekly event',
        fields: [
          defineField({
            name: 'weekday', title: 'Day', type: 'number', validation: r => r.required(),
            options: { list: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'].map((title, value) => ({ title, value })) },
          }),
          time('start', 'Starts', { required: true }),
          time('end', 'Ends (optional)'),
          str('title', 'Title', { required: true }),
          txt('description', 'Description (optional)'),
        ],
        preview: { select: { title: 'title', subtitle: 'start' } },
      })],
    }),
  ],
  preview: { prepare: () => ({ title: 'Calendar' }) },
});

export const schemaTypes = [siteSettings, homePage, visitPage, watchPage, aboutPage, leadershipPage, givePage, contactPage, calendarPage];

/** Each of these exists exactly once; its document ID is the same as its type name. */
export const SINGLETONS = schemaTypes.map(t => ({ type: t.name, title: t.title as string, icon: t.icon }));
