import {defineField, defineType} from 'sanity'

export const postType = defineType({
  name: 'post',
  title: 'Post',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      validation: (Rule) => Rule.required(),
      options: {
        source: 'title',
        maxLength: 96,
      },
    }),
    defineField({
      name: 'excerpt',
      title: 'Excerpt',
      type: 'text',
      rows: 4,
    }),
    defineField({
      name: 'mainImage',
      title: 'Cover image',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [{name: 'label', type: 'string', validation: (Rule) => Rule.required()}],
    }),
    defineField({
      name: 'body',
      type: 'array',
      title: 'Body',
      of: [
        {type: 'block'},
        {
          type: 'image',
          fields: [{name: 'label', type: 'string', validation: (Rule) => Rule.required()}],
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: 'title',
      media: 'mainImage',
    },
    prepare(selection) {
      return {...selection}
    },
  },
})
