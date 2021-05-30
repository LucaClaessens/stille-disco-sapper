import { MdQuestionAnswer } from 'react-icons/md'

export default {
  name: 'faqBlock',
  type: 'object',
  title: 'FAQ block',
  fields: [
    {
      name: 'backgroundColor',
      type: 'backgroundColor',
      title: 'Background color'
    },
    {
      name: 'title',
      required: true,
      type: 'string',
      title: 'Heading of the block',
      description: 'Title text of the block, displayed in bold'
    },
    {
      name: 'subtitle',
      required: true,
      type: 'textPortableText',
      title: 'Subtitle text of the block',
      description: 'Subtitle text of the block, below the title'
    },
    {
      name: 'content',
      required: false,
      type: 'faqBlockPortableText',
      title: 'Contents of the block'
    }
  ],
  preview: {
    select: {
      title: 'title'
    },
    prepare({ title }) {
      return {
        media: MdQuestionAnswer,
        title: `FAQ block (${title})`,
        subtitle: 'A full-width block that contains a FAQ section'
      }
    }
  }
}
