import {defineType, defineField, defineArrayMember} from 'sanity'
import {BasketIcon, ControlsIcon, TagIcon} from '@sanity/icons'
import {GenerateVariants} from './GenerateVariants'

export const productType = defineType({
  name: 'product',
  title: 'Products',
  type: 'document',
  icon: BasketIcon,
  groups: [
    {
      name: 'product',
      title: 'Product Information',
    },
    {
      name: 'media',
      title: 'Media',
    },
    {
      name: 'inventory',
      title: 'Inventory',
    },
    {
      name: 'details',
      title: 'Details',
    },
  ],
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      group: 'product',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      group: 'product',
      options: {
        source: 'name',
        maxLength: 96,
      },
    }),
    defineField({
      name: 'description',
      title: 'Description',
      group: 'product',
      type: 'array',
      of: [{type: 'block'}],
    }),
    defineField({
      name: 'category',
      title: 'Categories',
      type: 'array',
      of: [{type: 'reference', to: {type: 'category'}}],
    }),
    defineField({
      name: 'collections',
      title: 'Collections',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'collection'}]}],
    }),
    defineField({
      name: 'price',
      title: 'Price',
      group: 'product',
      description: 'Value is in smallest fractional unit, ie cents (500 = $5.00)',
      type: 'number',
    }),
    defineField({
      name: 'image',
      title: 'Cover Image',
      type: 'image',
      group: 'media',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'imageGallery',
      title: 'Image Gallery',
      group: 'media',
      type: 'array',
      options: {
        layout: 'grid',
      },
      of: [
        defineArrayMember({
          name: 'image',
          title: 'Images',
          type: 'image',
          options: {
            hotspot: true,
          },
        }),
      ],
    }),

    defineField({
      name: 'stockQuantity',
      type: 'number',
      title: 'Stock Quantity',
      description: 'The number of units (boxes or tiles) currently available.',
      group: 'inventory',
      validation: (Rule) => Rule.min(0),
    }),

    defineField({
      name: 'options',
      title: 'Options',
      type: 'array',
      group: 'product',
      of: [
        defineArrayMember({
          name: 'option',
          title: 'Option',
          type: 'object',
          fields: [
            defineField({
              name: 'name',
              description: 'Size, color, etc.',
              title: 'Option Name',
              type: 'string',
            }),
            defineField({
              name: 'values',
              title: 'Option Values',
              type: 'array',
              of: [
                defineArrayMember({
                  name: 'value',
                  title: 'Value',
                  type: 'string',
                }),
              ],
            }),
          ],
          preview: {
            select: {
              title: 'name',
              subtitle: 'values',
            },
            prepare(selection) {
              const {title, subtitle} = selection
              // Join the values array into a comma-separated string
              const valuesString = Array.isArray(subtitle) ? subtitle.join(', ') : ''
              return {
                title: title,
                subtitle: valuesString,
                icon: ControlsIcon,
              }
            },
          },
        }),
      ],
    }),
    defineField({
      name: 'variants',
      title: 'Variants',
      group: 'product',
      type: 'array',
      components: {input: GenerateVariants},
      of: [
        defineArrayMember({
          name: 'variant',
          title: 'Variant',
          type: 'object',
          fields: [
            defineField({
              name: 'variantName',
              title: 'Variant Name',
              type: 'string',
            }),
            defineField({
              name: 'options',
              title: 'Variant Options',
              description:
                'Avoid editing these directly. They are generated from the product options. If you need to change them, edit the product options instead and generate a new set.',
              type: 'array',
              of: [
                defineArrayMember({
                  name: 'option',
                  title: 'Option',
                  type: 'object',
                  fields: [
                    defineField({
                      name: 'name',
                      title: 'Name',
                      type: 'string',
                    }),
                    defineField({
                      name: 'value',
                      title: 'Value',
                      type: 'string',
                    }),
                  ],
                  preview: {
                    select: {
                      title: 'name',
                      subtitle: 'value',
                    },
                    prepare(selection) {
                      const {title, subtitle} = selection
                      return {
                        title: `${title}: ${subtitle}`,
                        icon: ControlsIcon,
                      }
                    },
                  },
                }),
              ],
            }),
            defineField({
              name: 'variantImages',
              title: 'Image Gallery',
              type: 'array',
              options: {
                layout: 'grid',
              },
              of: [
                defineArrayMember({
                  name: 'image',
                  title: 'Images',
                  type: 'image',
                  options: {
                    hotspot: true,
                  },
                }),
              ],
            }),
            defineField({
              name: 'quantity',
              title: 'Stock',
              description: 'Set the quantity of available stock for this variant',
              type: 'number',
              initialValue: 0,
            }),
          ],
          preview: {
            select: {
              title: 'variantName',
              subtitle: 'quantity',
              images: 'variantImages',
            },
            prepare(selection) {
              const {title, subtitle, images} = selection

              const image = Array.isArray(images) ? images.find((img) => img?.asset) : undefined

              const stockTitle = subtitle !== null ? `Stock: ${subtitle}` : 'No stock info'
              const imageTitle =
                Array.isArray(images) && images.length ? `Images: ${images.length}` : 'No Images'

              return {
                title: title,
                subtitle: `${stockTitle} | ${imageTitle}`,
                media: image ?? TagIcon,
              }
            },
          },
        }),
      ],
    }),
    defineField({
      name: 'details',
      title: 'Details',
      type: 'productDetails',
      group: 'details',
    }),
  ],
})
