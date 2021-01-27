export default {
    name: 'checkoutPreview',
    type: 'object',
    title: 'Checkout preview',
    fields: [
        {
            name: 'backgroundImage',
            type: 'mainImage',
            title: 'Background Image',
            required: true
        },
        {
            name: 'tagline',
            type: 'string',
            title: 'Tagline',
            required: true
        },
        {
            name: 'textColor',
            type: 'string',
            title: 'Text color',
            options: {
                list: ['black', 'white']
            },
            required: true
        },
        {
            name: 'customComposition',
            type: 'object',
            title: 'Custom composition block',
            fields: [
                {
                    name: 'title',
                    type: 'string',
                    title: 'Title',
                    required: true
                },
                {
                    name: 'subtitle',
                    type: 'string',
                    title: 'Subtitle',
                    required: true
                },
            ]
        },
        {
            name: 'bundles',
            type: 'array',
            of: [
                {
                    name: 'bundle',
                    type: 'object',
                    title: 'Product bundle',
                    fields: [
                        {
                            name: 'title',
                            type: 'string',
                            title: 'Title',
                            required: true
                        },
                        {
                            name: 'subtitle',
                            type: 'string',
                            title: 'Subtitle',
                            required: true
                        },
                        {
                            name: 'color',
                            type: 'string',
                            title: 'Color',
                            required: true
                        },
                        {
                            name: 'id',
                            type: 'string',
                            title: 'Bundle id',
                            required: true
                        },
                    ]
                }
            ]
        }
    ],
    preview: {
        select: {
            media: 'backgroundImage',
            title: 'tagline',
            bundles: 'bundles'
        },
        prepare({ media, title, bundles }) {
            return {
                media,
                title,
                subtitle: `Custom composition, ${bundles ? bundles.length : 0} bundles`
            }
        }
    },
}
