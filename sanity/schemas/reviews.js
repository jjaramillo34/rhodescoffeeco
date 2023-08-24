export default {
  type: 'document',
  name: 'review',
  title: 'Review',
  fields: [
    {
      type: 'string',
      name: 'title',
      title: 'Title',
    },
    {
      type: 'string',
      name: 'author',
      title: 'Author',
    },
    {
      type: 'string',
      name: 'company',
      title: 'Company',
    },
    {
      type: 'string',
      name: 'description',
      title: 'Description',
    },
    {
      type: 'image',
      name: 'image',
      title: 'Image',
      fields: [
        {
          type: 'string',
          name: 'alt',
          title: 'Alternative Text',
        },
      ],
      options: {
        hotspot: true,
        metadata: ['palette'],
      },
    },
  ],
  preview: {
    select: {
      title: 'title',
      media: 'image',
    },
  },
}
