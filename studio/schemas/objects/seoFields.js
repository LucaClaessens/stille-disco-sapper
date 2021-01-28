
export default {
    options: {
        collapsed: false,
        collapsible: true
    },
    name: 'seoFields',
    type: 'object',
    title: 'SEO Fields',
    description: 'Set of fields for search engines and sharing that have to be filled for every page',
    fields: [
        {
            name: 'title',
            type: 'string',
            title: 'Title',
            description: 'The title that displays in the tab indicating this page in your browser',
            validation: Rule => Rule.required()
        },
        {
            name: 'image',
            type: 'mainImage',
            title: 'Image',
            description: 'The Image that will show when sharing this page on e.g. twitter/facebook/whatsapp',
            validation: Rule => Rule.required()
        },
        {
            name: 'description',
            type: 'text',
            title: 'Description',
            description: 'This text ends up on summary pages, on Google, when people share your post in social media.',
            validation: Rule => Rule.required()
        },
    ],
}
