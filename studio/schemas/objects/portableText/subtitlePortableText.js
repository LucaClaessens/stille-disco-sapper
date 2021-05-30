export default {
    name: 'subtitlePortableText',
    type: 'array',
    title: 'Markup for subtitle / detail content',
    of: [
        {
            type: 'block',
            title: 'Block',
            styles: [
                { title: 'Normal', value: 'normal' },
                { title: 'H3', value: 'h3' },
                { title: 'Quote', value: 'blockquote' }
            ],
            marks: {
                decorators: [{ title: 'Strong', value: 'strong' }, { title: 'Emphasis', value: 'em' }],
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
                    }
                ]
            },
        }
    ]
}
