import { MdViewColumn } from 'react-icons/md'

export default {
  name: 'layoutFullWidth',
  type: 'object',
  title: 'Full width layout',
  description: 'A full-width content block with 1 slot for block content',
  fields: [
    {
      name: 'backgroundColor',
      type: 'backgroundColor',
      title: 'Background color'
    },
    {
      name: 'content',
      type: 'marketingPagePortableText',
      title: 'Content blocks'
    }
  ],
  preview: {
    prepare() {
      return {
        title: 'Full width layout',
        media: MdViewColumn,
        subtitle: 'A full-width content block with 1 slot for block content'
      }
    }
  }
}
