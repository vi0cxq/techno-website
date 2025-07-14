import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'

import {structure} from './structure'
import {presentationTool} from 'sanity/presentation'

export default defineConfig({
  name: 'default',
  title: 'Ceram',

  projectId: 'spfifpte',
  dataset: 'production',

  plugins: [
    structureTool({structure}),
    presentationTool({
      previewUrl: {
        origin: process.env.SANITY_STUDIO_PREVIEW_URL || 'http://localhost:5173',
        previewMode: {
          enable: '/preview/enable',
          disable: '/preview/disable',
        },
      },
    }),
    visionTool(),
  ],

  schema: {
    types: schemaTypes,
  },
})
