import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'

import {structure} from './structure'
import {presentationTool} from 'sanity/presentation'

const projectId = process.env.SANITY_STUDIO_PROJECT_ID!
const dataset = process.env.SANITY_STUDIO_DATASET!

export default defineConfig({
  name: 'default',
  title: 'Ceram',

  projectId,
  dataset,

  plugins: [
    structureTool({structure}),
    presentationTool({
      previewUrl: {
        origin: process.env.SANITY_STUDIO_PREVIEW_URL,
      },
    }),
    visionTool(),
  ],

  schema: {
    types: schemaTypes,
  },
})
