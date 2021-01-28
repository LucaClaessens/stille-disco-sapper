import { MdLink } from "react-icons/md";

export default {
    name: 'navigation',
    type: 'document',
    title: 'Navigation',
    description: 'The links to display in the navigation bar',
    fields: [
        {
            name: 'links',
            type: 'array',
            description: 'A list of links to be displayed in the navigation bar',
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
                        name: 'link',
                        type: 'i18nLink',
                        title: 'Link',
                        required: true,
                    },
                ]
            }],
        }
    ],
}
