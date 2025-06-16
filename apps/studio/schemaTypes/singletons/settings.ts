import {CogIcon, ControlsIcon, ErrorOutlineIcon, MenuIcon, SearchIcon} from '@sanity/icons'
import {defineType, defineField} from 'sanity'

const TITLE = 'Settings'

export const settings = defineType({
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
      name: 'productSettings',
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
      group: 'productSettings',
      type: 'reference',
      to: [{type: 'currency'}],
    }),
    defineField({
      name: 'filters',
      title: 'Filters',
      group: 'productSettings',
      type: 'filters',
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
