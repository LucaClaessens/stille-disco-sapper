import { i18nOptions } from '../documentTranslation';

const positionStrategy = () => ({
  name: 'position',
  required: true,
  type: 'flexPositioner',
  title: 'Position'
});

const image = () => ({
    name: 'image',
    required: true,
    type: 'mainImage',
    title: 'Image'
})

export default {
    name: 'galleryImage',
    type: 'object',
    title: 'Gallery image',
    fields: [
        {
            name: 'foreground',
            type: 'object',
            title: 'Foreground image',
            options: {
              collapsible: true,
              collapsed: false,
            },
            fields: [
              positionStrategy(),
              image()
            ]
        },
        {
          name: 'background',
          type: 'object',
          title: 'Background image',
          options: {
            collapsible: true,
            collapsed: false,
          },
          fields: [
            positionStrategy(),
            image()
          ]
      },
        {
            name: 'message',
            required: true,
            title: "Message",
            type: 'object',
            options: {
              collapsible: true,
              collapsed: false,
            },
            fields: [
              positionStrategy(),
              {
                title: "Text",
                name: 'text',
                type: 'object',
                options: i18nOptions,
                fields: [
                    {
                        title: 'Text',
                        name: 'text',
                        type: 'text',
                        required: true,
                        description: 'Text that the message displays, you can write HTML here.'
                    },
                ]
            },
            ]
        }
    ],
    preview: {
        select: {
            media: 'background.image',
        },
        prepare({ media }) {
            return {
                media,
                title: 'Slide'
            }
        }
    }
}
