import {HomeIcon} from '@sanity/icons'
import {defineField} from 'sanity'

const TITLE = 'Home'

export const home = defineField({
  name: 'home',
  title: TITLE,
  type: 'document',
  icon: HomeIcon,

  fields: [
    defineField({
      name: 'seo',
      title: 'SEO',
      type: 'seo',
    }),
  ],
  preview: {
    prepare() {
      return {
        media: HomeIcon,
        subtitle: 'Index',
        title: TITLE,
      }
    },
  },
})
