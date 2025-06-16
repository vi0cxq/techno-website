import {defineField} from 'sanity'
import {DocumentsIcon} from '@sanity/icons'

const TITLE = 'Privacy Policy'

export const privacyPolicy = defineField({
  name: 'privacyPolicy',
  title: TITLE,
  type: 'document',
  icon: DocumentsIcon,

  fields: [
    defineField({
      name: 'content',
      type: 'array',
      title: 'Content',
      of: [{type: 'block'}],
    }),
  ],
  preview: {
    prepare() {
      return {
        media: DocumentsIcon,
        subtitle: 'Index',
        title: TITLE,
      }
    },
  },
})
