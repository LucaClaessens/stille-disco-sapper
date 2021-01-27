import { i18n } from "../documentTranslation";

export default {
    name: 'checkout',
    type: 'document',
    title: 'Checkout',
    i18n,
    fields: [
        {
            name: 'seo',
            type: 'seoFields',
            title: 'SEO'
        },
        {
            name: 'checkoutFlow',
            type: 'array',
            of: [{
                name: 'checkoutStep',
                type: 'object',
                title: 'Checkout step',
                fields: [
                    {
                        name: 'product',
                        type: 'reference',
                        to: [{ type: 'product' }]
                    },
                    {
                        name: 'heading',
                        type: 'text',
                        title: 'Product heading'
                    },
                    {
                        name: 'variationDescriptor',
                        type: 'string',
                        title: 'Variation descriptor',
                        description: 'When there are multiple variations of the product in this step, pose the following question to ask which variation the user wants to have'
                    }
                ],
                preview: {
                    select: {
                        title: 'product.name',
                        subtitle: 'heading',
                        variation: 'variationDescriptor'
                    },
                    prepare({ index, title, subtitle, variation }) {
                        return {
                            title: `Checkout step: ${title}`,
                            subtitle: variation || subtitle || 'Missing details'
                        }
                    }
                }
            }]
        },
        {
            name: 'dateSelection',
            type: 'object',
            title: 'Date Selection',
            fields: [
                {
                    name: 'image',
                    type: 'mainImage',
                    title: 'Date selection Image'
                },
                {
                    name: 'tagline',
                    type: 'string',
                    title: 'Tagline'
                },
                {
                    name: 'from',
                    type: 'string',
                    title: 'From',
                    description: 'Translation for \'From\'',
                    validation: Rule => Rule.regex(/^[A-Z]/).error('Please make sure the word is capitalized')
                },
                {
                    name: 'until',
                    type: 'string',
                    title: 'Until',
                    description: 'Translation for \'Until\'',
                    validation: Rule => Rule.regex(/^[A-Z]/).error('Please make sure the word is capitalized')
                },
                {
                    name: 'inputInfo',
                    type: 'string',
                    title: 'Input info'
                },
                {
                    name: 'inputPlaceholder',
                    type: 'string',
                    title: 'Input placeholder'
                },
                {
                    name: 'noDatesSelected',
                    type: 'string',
                    title: 'No Dates Selected text',
                    description: 'Placeholder text to show when no dates are selected yet, defaults to `no dates selected yet`'
                }
            ]
        }
    ],
    preview: {
        select: {
            seo: 'seo',
            parent: 'parent',
            slug: 'slug'
        },
        prepare({ seo, parent, slug }) {
            return {
                title: seo.title,
                media: seo.image,
                subtitle: `${parent ? parent + '/' : ''}${slug.current}`
            }
        }
    }
}
