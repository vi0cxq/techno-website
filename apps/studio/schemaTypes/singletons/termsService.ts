import {DocumentsIcon} from '@sanity/icons'
import {defineField} from 'sanity'

const TITLE = 'Terms Of Service'

export const termsOfService = defineField({
  name: 'termsOfService',
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
