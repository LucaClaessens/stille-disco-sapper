
export default {
    name: 'galleryImage',
    type: 'object',
    title: 'Gallery image',
    fields: [
        {
            name: 'img',
            required: true,
            type: 'mainImage',
            title: 'Image'
        },
        {
            name: 'message',
            required: true,
            type: 'galleryMessage'
        }
    ],
    preview: {
        select: {
            media: 'img',
            title: 'img.alt',
            align: 'message.align',
            justify: 'message.justify'
        },
        prepare({ media, title, align, justify }) {
            return {
                media,
                title,
                subtitle: `align: ${align}, justify: ${justify}`
            }
        }
    }
}
