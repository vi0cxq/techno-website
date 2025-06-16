import {defineField} from 'sanity'

export const contactUsType = defineField({
  name: 'contactUs',
  title: 'Contact',
  type: 'object',
  fields: [
    defineField({
      name: 'phoneNumbers',
      type: 'array',
      title: 'Phone Numbers',
      of: [{type: 'string'}],
      description: 'List of phone numbers customers can call.',
    }),
    defineField({
      name: 'email',
      type: 'string',
      title: 'Email',
      description: 'Official email address for inquiries.',
      validation: (Rule) => Rule.email(),
    }),
    defineField({
      name: 'location',
      type: 'string',
      title: 'Location',
      description: 'Head office address',
    }),
    defineField({
      name: 'mapEmbedUrl',
      type: 'url',
      title: 'Map Embed URL',
      description: 'Google Maps embed link for showing your location on the website.',
    }),
    defineField({
      name: 'workingHours',
      type: 'string',
      title: 'Working Hours',
      description: 'e.g. Mon–Sat: 8:00 AM – 6:00 PM',
    }),
    defineField({
      name: 'whatsappNumber',
      type: 'string',
      title: 'WhatsApp Number',
      description: 'Optional WhatsApp contact number.',
    }),
  ],
})
