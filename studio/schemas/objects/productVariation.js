export default {
    name: 'productVariation',
    type: 'object',
    title: 'Product variation',
    fields: [
        {
            name: 'name',
            type: 'string',
            description: 'A name describing this variation of the product',
            title: 'Variation name',
            required: true,
        },
        {
            name: 'info',
            type: 'string',
            validation: Rule => Rule.required().max(72).warning('Try to keep the description under 60 characters'),
            title: 'Variation description',
            description: 'When multiple variations exist, this text will show as the selection text in a radio button'
        },
        {
            name: 'quantityHelper',
            type: 'text',
            title: 'Quantity helper text',
            description: 'When this variation is selected (or is the only variation), the following text will be displayed to guide users in picking a suitable amount of products',
            validation: Rule => Rule.required().max(72).warning('Try to keep the description under 60 characters'),
        },
        {
            name: 'maxAmount',
            type: 'number',
            title: 'Maximum amount',
            description: 'The maximum amount of this item you can rent / order'
        },
        {
            name: 'id',
            required: true,
            type: 'string',
            title: 'ID',
            description: 'The Product ID provided in Booqable',
            validation: Rule => Rule.length(36).regex(/^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/).error('Product variations need a valid uuid matching the one in booqable')
        },
        {
            name: 'useHotspotImage',
            required: true,
            type: 'boolean',
            title: 'Use hotspot image',
            description: 'Defines whether to display a hotspot image, or use the product image'
        }
    ],
    preview: {
        select: {
            title: 'name',
            subtitle: 'id'
        }
    }
}
