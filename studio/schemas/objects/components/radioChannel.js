import { i18nOptions } from '../../documentTranslation'

export default {
  name: 'radioChannel',
  type: 'object',
  title: 'Radio channel',
  fields: [
    {
      name: 'key',
      type: 'string',
      title: 'Radio channel key',
      description: "The identifier of this channel, e.g. 'red'",
      required: true
    },
    {
      name: 'invert',
      type: 'boolean',
      title: 'Invert text color',
      description: 'Inverts text color from white to black',
      required: true
    },
    {
      name: 'content',
      type: 'object',
      options: i18nOptions,
      title: 'Translatable fields',
      fields: [
        {
          name: 'url',
          type: 'string',
          title: 'url',
          description: 'The url that clicking this channel will open',
          required: true
        },
        {
          name: 'text',
          type: 'string',
          title: 'Text',
          description: 'The text to be displayed in the channel'
        }
      ]
    }
  ],
  preview: {
    select: {
      key: 'key'
    },
    prepare({ key }) {
      return {
        title: `Channel ${key}`
      }
    }
  }
}
