import { MdViewColumn } from 'react-icons/md'

export default {
  name: 'layoutOneOne',
  type: 'object',
  title: '1:1 layout',
  description: 'A full-width 1:1 content block with 2 slots for block content',
  fields: [
    {
      name: 'backgroundColor',
      type: 'backgroundColor',
      title: 'Background color'
    },
    {
      name: 'contentLeft',
      type: 'marketingPagePortableText',
      title: 'Content blocks | left pane'
    },
    {
      name: 'contentRight',
      type: 'marketingPagePortableText',
      title: 'Content blocks | right pane'
    }
  ],
  preview: {
    prepare() {
      return {
        title: '1:1 layout',
        media: MdViewColumn,
        subtitle: 'A full-width 1:1 content block with 2 slots for block content'
      }
    }
  }
}
