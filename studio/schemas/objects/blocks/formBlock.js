import { MdFormatAlignJustify } from 'react-icons/md'

export default {
  name: 'formBlock',
  type: 'object',
  title: 'Form block',
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
      name: 'referral',
      type: 'reference',
      to: { type: 'page' },
      title: 'Refer to page (on success)',
      decription: 'If empty, routes to default page after submitting form'
    },
    {
      name: 'formId',
      required: true,
      type: 'string',
      title: 'Unique form identifier',
      description: 'A name referring to the contents / function of the inner form, has to be unique'
    },
    {
      name: 'content',
      required: false,
      type: 'formBlockPortableText',
      title: 'Contents of the block'
    },
    {
      name: 'privacyStatementRequired',
      required: true,
      type: 'boolean',
      title: 'Privacy statement needed',
      description:
        'The user needs to tick a checkbox to confirm agreeing to the privacy statement to submit this form'
    },
    {
      name: 'buttonText',
      required: true,
      type: 'string',
      title: 'Button text',
      description: 'The text to display in the submit button'
    }
  ],
  preview: {
    select: {
      title: 'title'
    },
    prepare({ title }) {
      return {
        media: MdFormatAlignJustify,
        title: `Form block (${title})`,
        subtitle: 'A full-width block that contains a form, edit to configure the form'
      }
    }
  }
}
