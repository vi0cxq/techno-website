import {CogIcon, ControlsIcon, EarthGlobeIcon, SearchIcon} from '@sanity/icons'
import {defineType, defineField} from 'sanity'

const TITLE = 'Settings'

export const settings = defineType({
  name: 'settings',
  title: TITLE,
  type: 'document',
  icon: CogIcon,
  groups: [
    {
      name: 'filters',
      title: 'Filters',
      icon: SearchIcon,
    },
    {
      name: 'contactUs',
      title: 'Contact Us',
      icon: EarthGlobeIcon,
    },
    {
      name: 'productSettings',
      title: 'Product Settings',
      icon: ControlsIcon,
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
      description: 'Store currency (e.g., DZD, EUR).',
      group: 'productSettings',
      type: 'reference',
      to: [{type: 'currency'}],
    }),
    defineField({
      name: 'filters',
      title: 'Filters',
      description:
        'Tags used for filtering products on the website (e.g., “blue”, “textured”, “outdoor”). These should reflect key product traits customers might search or filter by.',
      group: 'filters',
      type: 'filters',
    }),
    defineField({
      name: 'contactUS',
      title: 'Contact Us',
      group: 'contactUs',
      type: 'contactUs',
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
