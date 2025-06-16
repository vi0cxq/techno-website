import {defineField} from 'sanity'

export const filtersType = defineField({
  name: 'filters',
  title: 'Filter',
  type: 'object',

  fields: [
    defineField({
      name: 'categories',
      title: 'Usage',
      type: 'array',
      of: [{type: 'reference', to: {type: 'category'}}],
    }),
    defineField({
      name: 'materials',
      title: 'Materials',
      type: 'array',
      of: [{type: 'reference', to: {type: 'material'}}],
    }),
    defineField({
      name: 'sizes',
      title: 'Sizes',
      type: 'array',
      of: [{type: 'reference', to: {type: 'size'}}],
    }),
    defineField({
      name: 'colors',
      title: 'Colors',
      type: 'array',
      of: [{type: 'reference', to: {type: 'color'}}],
    }),
  ],
})
