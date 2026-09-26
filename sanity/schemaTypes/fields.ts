// Small field builders so each page schema reads like the page itself.
import { defineArrayMember, defineField, type StringRule } from 'sanity';

const PLACEHOLDER = /\[[^\]]+\]/;
/** Editors see a yellow warning while a field still has a [bracketed] placeholder in it. */
const placeholderWarning = (rule: StringRule) => rule
  .custom(v => (v && PLACEHOLDER.test(v) ? 'Still has a [bracketed] placeholder. Replace it, brackets included, with the real text.' : true))
  .warning();

type Opts = { description?: string; required?: boolean; rows?: number; hidden?: boolean };

export const str = (name: string, title: string, o: Opts = {}) => defineField({
  name, title, type: 'string', description: o.description,
  validation: rule => o.required ? [rule.required(), placeholderWarning(rule)] : placeholderWarning(rule),
});

export const txt = (name: string, title: string, o: Opts = {}) => defineField({
  name, title, type: 'text', rows: o.rows ?? 3, description: o.description,
  validation: rule => o.required ? [rule.required(), placeholderWarning(rule)] : placeholderWarning(rule),
});

export const url = (name: string, title: string, o: Opts = {}) => defineField({
  name, title, type: 'url', description: o.description,
  validation: rule => {
    const r = rule.uri({ scheme: ['http', 'https'] });
    return o.required ? r.required() : r;
  },
});

/** "HH:MM" in 24-hour time, e.g. 09:00 or 19:30. */
export const time = (name: string, title: string, o: Opts = {}) => defineField({
  name, title, type: 'string', description: o.description ?? '24-hour time, like 09:00 or 19:30.',
  validation: rule => {
    const r = rule.regex(/^([01]\d|2[0-3]):[0-5]\d$/, { name: '24-hour time' });
    return o.required ? r.required() : r;
  },
});

export const photo = (name: string, title: string, description: string) => defineField({
  name, title, type: 'image', description, options: { hotspot: true },
});

export const group = (name: string, title: string, fields: ReturnType<typeof defineField>[], o: { description?: string; collapsed?: boolean } = {}) => defineField({
  name, title, type: 'object', description: o.description, fields,
  options: { collapsible: true, collapsed: o.collapsed ?? false },
});

/** Top-of-page block: small label, headline, intro. */
export const hero = (title = 'Top of page') => group('hero', title, [
  str('eyebrow', 'Small label', { description: 'The short uppercase line above the headline.' }),
  str('title', 'Headline', { required: true }),
  txt('lede', 'Intro'),
]);

export const cardFields = () => [
  str('eyebrow', 'Small label'),
  str('title', 'Title', { required: true }),
  txt('body', 'Text', { description: 'Keep it to one or two sentences.' }),
];

export const card = (name: string, title: string) => group(name, title, cardFields());

export const cards = (name: string, title: string, description?: string) => defineField({
  name, title, description, type: 'array',
  of: [defineArrayMember({ type: 'object', name: 'card', title: 'Card', fields: cardFields(), preview: { select: { title: 'title', subtitle: 'eyebrow' } } })],
});

/** Title + text rows (beliefs, values, directions). */
export const rows = (name: string, title: string, description?: string) => defineField({
  name, title, description, type: 'array',
  of: [defineArrayMember({ type: 'object', name: 'row', title: 'Row', fields: [str('title', 'Title', { required: true }), txt('body', 'Text')], preview: { select: { title: 'title', subtitle: 'body' } } })],
});
