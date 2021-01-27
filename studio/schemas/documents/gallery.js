
export default {
    name: 'gallery',
    type: 'document',
    title: 'Gallery',
    fields: [
        {
            name: 'gallery',
            type: 'array',
            title: 'Gallery',
            description: 'Gallery of images, rendered on mobile',
            of: [{ type: 'galleryImage' }],
        },
    ]
}
