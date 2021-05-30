import { MdPanTool } from 'react-icons/md'

export default {
  name: 'button',
  type: 'object',
  title: 'Button',
  fields: [
    {
      name: 'text',
      type: 'string',
      title: 'text',
      description: 'text content for the button'
    },
    {
      name: 'invert',
      type: 'boolean',
      title: 'Invert the button styling?',
      initialValue: false
    }
  ],
  preview: {
    select: {
      title: 'text',
      subtitle: 'href'
    },
    prepare({ title, subtitle }) {
      return {
        media: MdPanTool,
        title,
        subtitle
      }
    }
  }
}
