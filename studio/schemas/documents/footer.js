import { MdLink } from "react-icons/md";
import { i18n, i18nOptions } from "../documentTranslation";

export default {
    name: 'footer',
    type: 'document',
    i18n,
    title: 'Footer',
    fieldsets: [
        {
            name: 'details',
            title: 'Footer details',
            options: {
                collapsible: true,
                collapsed: false,
            }
        }
    ],
    fields: [
        {
            name: 'links',
            type: 'array',
            of: [{
                name: 'entry',
                type: 'object',
                title: 'Entry',
                preview: {
                    select: {
                        title: 'link.href',
                        visibility: 'visibility'
                    },
                    prepare({ title, visibility }) {
                        return {
                            title,
                            subtitle: `display: ${visibility}`,
                            media: MdLink,
                        }
                    }
                },
                fields: [
                    {
                        name: 'visibility',
                        type: 'string',
                        title: 'Visibility',
                        description: 'Whether to always show this item in the menu, or only on a specific page',
                        options: {
                            list: ['rental', 'events', 'all']
                        },
                        required: true
                    },
                    {
                        name: 'localHref',
                        type: 'boolean',
                        title: 'Local link (use i18n)',
                        description: 'Defines whether or not to prefix the link with the user-selected language in the front-end',
                        required: true,
                    },
                    {
                        name: 'link',
                        type: 'i18nLink',
                        title: 'Link',
                        required: true,
                    },
                ]
            }],
        },
        {
            name: 'email',
            required: true,
            type: 'string',
            title: 'Email',
            fieldset: 'details'
        },
        {
            name: 'bottomText',
            required: true,
            type: 'object',
            options: i18nOptions,
            title: 'Bottom text',
            fieldset: 'details',
            fields: [{
                name: 'text',
                type: 'string'
            }]
        },
    ],
}
