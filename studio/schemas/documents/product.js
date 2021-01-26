import { i18n } from "../documentTranslation";

export default {
    name: 'product',
    type: 'document',
    i18n,
    title: 'Product',
    fields: [
        {
            name: 'name',
            type: 'string',
            title: 'Title',
            required: true,
            description: 'Titles should be catchy, descriptive, and not too long'
        },
        {
            name: 'slug',
            type: 'slug',
            title: 'Slug',
            validation: Rule => Rule.required(),
            options: {
                source: 'name',
                maxLength: 96
            }
        },
        {
            name: 'info',
            type: 'text',
            title: 'Information',
            description: 'Short block of information on the product, meant to be shown under the `how many x would you like to rent?` question.'
        },
        {
            name: 'details',
            type: 'text',
            title: 'Details',
            description: 'Block of text that will be shown when hovering over the info icon in the image section of this product\'s display'
        },
        {
            name: 'image',
            type: 'mainImage',
            title: 'Product Image'
        },
        {
            name: 'variations',
            type: 'array',
            of: [{ type: 'productVariation' }],
            title: 'Product variations',
            validation: Rule => Rule.required().min(1)
        }
    ],
    preview: {
        select: {
            media: 'image',
            title: 'name',
            subtitle: 'info'
        }
    }
}
