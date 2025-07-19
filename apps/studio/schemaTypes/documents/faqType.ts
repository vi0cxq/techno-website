import {defineField, defineType} from 'sanity'
import {CommentIcon} from '@sanity/icons'
export const faqType = defineType({
  name: 'faq',
  title: 'FAQ',
  type: 'document',
  icon: CommentIcon,
  fields: [
    defineField({
      name: 'question',
      type: 'string',
      title: 'Question',
    }),
    defineField({
      name: 'answer',
      title: 'Answer',
      type: 'array',
      of: [{type: 'block'}],
    }),
    defineField({
      name: 'relatedCollections',
      type: 'array',
      title: 'Related Collections',
      of: [{type: 'reference', to: [{type: 'collection'}]}],
      description: 'Assign this FAQ to one or more product Collections.',
    }),
  ],
})
