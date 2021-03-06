import { i18nOptions } from '../documentTranslation';

const list = ['start', 'center', 'end'];

export default {
    name: 'galleryMessage',
    type: 'object',
    title: 'Gallery image',

    fields: [
        {
            name: 'justify',
            required: true,
            type: 'string',
            title: 'Justification',
            description: 'How to justify (horizontally by default) the message',
            options: {
                list
            }
        },
        {
            name: 'align',
            required: true,
            type: 'string',
            title: 'Alignment',
            description: 'How to align (vertically by default) the message',
            options: {
                list
            }
        },
        {
            name: 'heading',
            title: 'Heading',
            type: 'object',
            description: 'Content to be displayed in the message',
            fields: [
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
                {
                    title: 'Button',
                    name: 'button',
                    type: 'i18nLink',
                    required: true
                }
            ]
        }
    ],
    preview: {
        select: {
            title: 'text',
            align: 'align',
            justify: 'justify'
        },
        prepare({ title, align, justify }) {
            return {
                title,
                subtitle: `align: ${align}, justify: ${justify}`
            }
        }
    }
}
