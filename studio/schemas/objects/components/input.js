import { MdTextFields } from 'react-icons/md'

export default {
  name: 'input',
  type: 'object',
  title: 'Input',
  description: 'A HTML5 input field',
  fields: [
    {
      name: 'type',
      type: 'string',
      title: 'Input type',
      description: 'The type of input we want to use, defaults to text',
      options: {
        list: ['text', 'email', 'number', 'tel', 'url']
      },
      required: true
    },
    {
      name: 'name',
      type: 'string',
      title: 'Name of the field',
      description: 'Pick a unique name for this field',
      validation: Rule => Rule.regex(/^[a-z]+$/).error('Please make sure the name is lowercase'),
      required: true
    },
    {
      name: 'label',
      type: 'string',
      title: 'Label',
      description: 'A label to describe the field, for SEO and Accessibility purposes',
      required: true
    },
    {
      name: 'placeholder',
      required: true,
      type: 'string',
      title: 'Placeholder value'
    },
    {
      name: 'required',
      required: false,
      type: 'boolean',
      title: 'Required field',
      description: 'defines whether or not this field is required, defaults to false'
    }
  ],
  preview: {
    select: {
      title: 'label',
      subtitle: 'name',
      type: 'type'
    },
    prepare({ title, subtitle, type }) {
      return {
        media: MdTextFields,
        title,
        subtitle: `field name: ${subtitle}, type: ${type}`
      }
    }
  }
}
