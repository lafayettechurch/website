'use client';
// Sanity Studio, served inside the website at /studio.
import { visionTool } from '@sanity/vision';
import { defineConfig } from 'sanity';
import { structureTool, type StructureBuilder } from 'sanity/structure';
import { apiVersion, dataset, projectId } from './sanity/env';
import { SINGLETONS, schemaTypes } from './sanity/schemaTypes';

const singletonTypes = new Set<string>(SINGLETONS.map(s => s.type));
// Pages can be edited and published, but never created, duplicated or deleted.
const allowedActions = new Set(['publish', 'discardChanges', 'restore']);

export default defineConfig({
  name: 'lafayette',
  title: 'Lafayette website',
  basePath: '/studio',
  projectId: projectId || 'not-configured',
  dataset,
  schema: {
    types: schemaTypes,
    templates: prev => prev.filter(t => !singletonTypes.has(t.schemaType)),
  },
  document: {
    actions: (prev, { schemaType }) => singletonTypes.has(schemaType) ? prev.filter(a => a.action && allowedActions.has(a.action)) : prev,
    newDocumentOptions: (prev, { creationContext }) => creationContext.type === 'global' ? [] : prev,
  },
  plugins: [
    structureTool({
      title: 'Website',
      structure: S => S.list().title('Website').items([
        singleton(S, SINGLETONS[0]),
        S.divider(),
        ...SINGLETONS.slice(1).map(s => singleton(S, s)),
      ]),
    }),
    // Query playground, for developers only.
    ...(process.env.NODE_ENV === 'development' ? [visionTool({ defaultApiVersion: apiVersion })] : []),
  ],
});

function singleton(S: StructureBuilder, s: (typeof SINGLETONS)[number]) {
  return S.listItem().title(s.title).id(s.type).icon(s.icon)
    .child(S.document().schemaType(s.type).documentId(s.type).title(s.title));
}
