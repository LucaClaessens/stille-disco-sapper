import { MdLink } from 'react-icons/md'
import { i18nOptions } from '../../documentTranslation'

export default {
  name: 'i18nLink',
  type: 'object',
  title: 'Link (i18n supported)',
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
      name: 'text',
      type: 'object',
      title: 'Text',
      description: 'the text content to be used in the link',
      options: i18nOptions,
      fields: [
        {
          name: 'text',
          type: 'string',
          title: 'text'
        }
      ]
    }
  ],
  preview: {
    select: {
      title: 'text',
      subtitle: 'href'
    },
    prepare({ title, subtitle }) {
      return {
        media: MdLink,
        title,
        subtitle
      }
    }
  }
}
