import { MdPanTool } from 'react-icons/md'

export default {
  name: 'linkButton',
  type: 'object',
  title: 'Link button',
  fields: [
    {
      name: 'href',
      type: 'string',
      title: 'URL',
      description:
        'The page to link to, if it is an external link, make sure to include the `https://` section, otherwise the browser will redirect to a route within the current website',
      validation: Rule => Rule.error('You have to fill in a valid URL.').required()
    },
    {
      name: 'target',
      type: 'string',
      title: 'Target',
      initialValue: '_self',
      description:
        'Redirect target, see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#attr-target',
      options: {
        list: [
          { title: 'The current tab', value: '_self' },
          { title: 'A new tab', value: '_blank' }
        ]
      },
      validation: Rule => Rule.error('You have to pick a target.').required()
    },
    {
      name: 'localHref',
      type: 'boolean',
      title: 'Local link (use i18n)',
      description:
        'Defines whether or not to prefix the link with the user-selected language in the front-end',
      required: true
    },
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
