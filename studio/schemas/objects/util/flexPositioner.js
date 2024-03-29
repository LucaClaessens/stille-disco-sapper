const list = ['start', 'center', 'end']

export default {
  name: 'flexPositioner',
  type: 'object',
  title: 'Flex positioner',
  fields: [
    {
      name: 'justify',
      validation: Rule => Rule.required().error('Een waarde is verplicht!'),
      required: true,
      type: 'string',
      title: 'Justification',
      description: 'How to justify (horizontally by default) the message',
      options: {
        list
      }
    },
    {
      name: 'align',
      validation: Rule => Rule.required().error('Een waarde is verplicht!'),
      required: true,
      type: 'string',
      title: 'Alignment',
      description: 'How to align (vertically by default) the message',
      options: {
        list
      }
    }
  ],
  preview: {
    select: {
      align: 'align',
      justify: 'justify'
    },
    prepare({ align, justify }) {
      return {
        title: 'flex strategy',
        subtitle: `align: ${align}, justify: ${justify}`
      }
    }
  }
}
