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
            description: 'The banner you see when landing on the rental page',
            fields: [
                {
                    name: 'image',
                    type: 'mainImage',
                    title: 'Banner image'
                },
                {
                    name: 'tagline',
                    type: 'string',
                    title: 'Tagline',
                    description: 'The big title displayed in the Hero'
                },
                {
                    name: 'body',
                    type: 'text',
                    title: 'Text body',
                    description: 'A smaler text to be displayed under the title'
                },
                {
                    name: 'buttonText',
                    type: 'string',
                    title: 'Button text',
                    description: 'Text to display on the button inside the hero'
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
