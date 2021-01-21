import { i18n } from "../documentTranslation";

export default {
    name: 'product',
    type: 'document',
    i18n,
    title: 'Page',
    fieldsets: [
        {
            name: 'SEO',
            title: 'SEO Fields',
            options: {
                collapsible: true,
                collapsed: false,
            }
        }
    ],
    fields: [
        {
            name: 'title',
            type: 'string',
            title: 'Title',
            required: true,
            description: 'Titles should be catchy, descriptive, and not too long'
        },
        {
            name: 'id',
            required: true,
            type: 'string',
            title: 'ID',
            description: 'The Product ID provided in Booqable'
        },
        {
            name: 'image',
            required: true,
            type: 'mainImage',
            title: 'Main image',
        },
    ],
    preview: {
        select: {
            title: 'title',
            media: 'image',
            subtitle: 'id'
        }
    }
}
