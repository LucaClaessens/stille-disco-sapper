export default {
    name: 'sequenceImage',
    type: 'image',
    title: 'Image',
    storeOriginalFilename: true,
    options: {
        storeOriginalFilename: true,
        hotspot: true
    },
    preview: {
        select: {
            imageUrl: 'asset.url',
            title: 'asset.url'
        }
    }
}
