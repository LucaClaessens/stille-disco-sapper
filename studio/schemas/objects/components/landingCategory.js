export default {
    name: 'landingCategory',
    type: 'object',
    title: 'Landing category',
    description: 'Object containing the configuration of a landing category',
    fields: [
        {
            name: 'title',
            type: 'string',
            title: 'Title',
            description: 'The title of this category',
            required: true,
        },
        {
            name: 'image',
            type: 'mainImage',
            title: 'Image',
            description: 'Background image for this category',
            required: true,
        },
        {
            name: 'label',
            type: 'text',
            title: "Label",
            description: 'Used to assist people using a screen reader to describe what this section will do. e.g. `Visit the events page`',
            required: true
        }
    ],
    preview: {
        select: {
            media: 'image',
            title: 'name',
            subtitle: 'path'
        }
    }
}
