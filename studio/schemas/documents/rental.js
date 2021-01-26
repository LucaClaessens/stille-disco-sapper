import { i18n } from "../documentTranslation";

export default {
    name: 'rental',
    type: 'document',
    title: 'Rental',
    i18n,
    fields: [
        {
            name: 'seo',
            type: 'seoFields',
            title: 'SEO'
        },
        {
            name: "hero",
            type: "object",
            title: "Hero",
            description: 'The first banner you see when landing on the rental page',
            fields: [
                {
                    name: 'image',
                    type: 'mainImage',
                    title: 'Banner image'
                },
                {
                    name: 'tagline',
                    type: 'string',
                    title: 'Tagline'
                },
                {
                    name: 'body',
                    type: 'text',
                    title: 'Text body'
                },
                {
                    name: 'buttonText',
                    type: 'string',
                    title: 'Button text'
                }
            ]
        },
        {
            name: 'body',
            type: 'blockPortableText',
            title: 'Body of the page'
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
