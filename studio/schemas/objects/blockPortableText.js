export default {
    name: 'blockPortableText',
    type: 'array',
    title: 'Markup for block content',
    of: [
        {
            type: 'block',
            title: 'Block',
            styles: [
                { title: 'Normal', value: 'normal' },
                { title: 'H1', value: 'h1' },
                { title: 'H2', value: 'h2' },
                { title: 'H3', value: 'h3' },
                { title: 'H4', value: 'h4' },
                { title: 'Quote', value: 'blockquote' }
            ],
            lists: [{ title: 'Bullet', value: 'bullet' }, { title: 'Numbered', value: 'number' }],
            // Marks let you mark up inline text in the block editor.
            marks: {
                // Decorators usually describe a single property – e.g. a typographic
                // preference or highlighting by editors.
                decorators: [{ title: 'Strong', value: 'strong' }, { title: 'Emphasis', value: 'em' }],
                // Annotations can be any object structure – e.g. a link or a footnote.
                annotations: [
                    {
                        name: 'link',
                        type: 'object',
                        title: 'URL',
                        fields: [
                            {
                                title: 'URL',
                                name: 'href',
                                type: 'url'
                            }
                        ]
                    },
                    {
                        name: 'i18nlink',
                        type: 'object',
                        title: 'i18n URL (local)',
                        description: 'url prefixed with /{lang}/',
                        fields: [
                            {
                                title: 'URL',
                                name: 'href',
                                type: 'url'
                            },
                            {
                                title: 'Color',
                                name: 'textColor',
                                type: 'string',
                                options: {
                                    list: ['blue-pure', 'black', 'white', 'gray-100']
                                }
                            }
                        ]
                    }
                ]
            },
        },
        {
            type: 'blockTitle'
        },
        {
            type: 'blockSubtitle'
        },
        {
            type: 'qaItem'
        },
        {
            type: 'contactDetails'
        },
        {
            type: 'qaBlock'
        },
        {
            type: 'mainImage'
        },
        {
            type: 'checkoutPreview'
        },
        {
            type: 'spacer'
        }
    ]
}
