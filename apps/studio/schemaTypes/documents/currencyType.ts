import {defineField} from 'sanity'

export const currencyType = defineField({
  name: 'currency',
  title: 'Currencies',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
  ],
})
