import {defineField, defineType} from 'sanity'

const productOptionsType = defineType({
  name: 'productOptions',
  title: 'Product Options',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      options: {source: 'name'},
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'values',
      title: 'Values',
      type: 'array',
      of: [{type: 'string'}],
    }),
  ],
})
export default productOptionsType
