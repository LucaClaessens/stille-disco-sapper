
export default {
    options: {
        collapsed: false,
        collapsible: true
    },
    name: 'seoFields',
    type: 'object',
    title: 'SEO Fields',
    fields: [
        {
            name: 'title',
            type: 'string',
            title: 'Title',
            description: 'Titles should be catchy, descriptive, and not too long'
        },
        {
            name: 'image',
            type: 'mainImage',
            title: 'Image',
        },
        {
            name: 'description',
            type: 'text',
            title: 'Description',
            description: 'This ends up on summary pages, on Google, when people share your post in social media.',
        },
    ],
}
