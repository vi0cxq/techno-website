import {CogIcon, ControlsIcon, ErrorOutlineIcon, MenuIcon, SearchIcon} from '@sanity/icons'
import {defineType, defineField} from 'sanity'

const TITLE = 'Settings'
interface ProductOptions {
  title: string
}

const settings = defineType({
  name: 'settings',
  title: TITLE,
  type: 'document',
  icon: CogIcon,
  groups: [
    {
      default: true,
      name: 'navigation',
      title: 'Navigation',
      icon: MenuIcon,
    },
    {
      name: 'productOptions',
      title: 'Product options',
      icon: ControlsIcon,
    },
    {
      name: 'notFoundPage',
      title: '404 page',
      icon: ErrorOutlineIcon,
    },
    {
      name: 'seo',
      title: 'SEO',
      icon: SearchIcon,
    },
  ],
  fields: [
    defineField({
      name: 'currency',
      title: 'Currency',
      group: 'productOptions',
      type: 'reference',
      to: [{type: 'currency'}],
    }),
    defineField({
      name: 'seo',
      title: 'SEO',
      type: 'seo',
      group: 'seo',
    }),
  ],
  preview: {
    prepare() {
      return {
        title: TITLE,
      }
    },
  },
})

export default settings
