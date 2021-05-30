export default {
    name: 'banner',
    type: 'object',
    title: 'Banner configuration',
    fieldsets: [
        {
            name: 'linkConfig',
            title: 'Link configuration',
            options: {
                collapsible: true,
                collapsed: false,
            }
        }
    ],
    fields: [
        {
            name: 'active',
            type: 'boolean',
            required: 'true',
            title: 'Activate the banner',
            description: 'When true, the banner will show'
        },
        {
            name: 'bgColor',
            type: 'string',
            title: 'Background color',
            required: true,
            description: 'The background color of the banner',
            options: {
                list: ['red-pure', 'blue-pure', 'green-pure']
            }
        },
        {
            name: 'textColor',
            type: 'string',
            title: 'Text color',
            required: true,
            options: {
                list: ['black', 'white']
            }
        },
        {
            name: 'localHref',
            type: 'boolean',
            title: 'Local link (use i18n)',
            description: 'Defines whether or not to prefix the link with the user-selected language in the front-end',
            required: true,
            fieldset: 'linkConfig'
        },
        {
            name: 'href',
            type: 'string',
            title: 'The page you want to link to',
            description: 'The page the button on the side of the banner links to, local links can be written like `/local/link`, outside links have to start with `http(s)://`',
            required: true,
            fieldset: 'linkConfig'
        },
        {
            name: 'text',
            type: 'object',
            title: 'Text configuration',
            required: true,
            fields: [
                {
                    name: 'default',
                    type: 'string',
                    title: 'Default text',
                    description: 'The text that will show on the banner in mobile screens',
                    required: true
                },
                {
                    name: 'large',
                    type: 'string',
                    title: 'Large text',
                    description: 'The text that will show on the banner in large screens',
                    required: true
                },
                {
                    name: 'dismiss',
                    type: 'string',
                    title: 'Dismiss text (screenreader only)',
                    required: true
                },
                {
                    name: 'button',
                    type: 'string',
                    title: 'Button text',
                    description: 'Text to display in button on the side of the banner',
                    required: true
                },
            ]
        }
    ],
}
