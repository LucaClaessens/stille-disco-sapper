import { i18n } from "../documentTranslation";

export default {
    name: 'landing',
    type: 'document',
    i18n,
    title: 'Landingspagina',
    __experimental_actions: ['update', /* 'create', 'delete', */ 'publish'],
    fields: [
        {
            name: 'seo',
            type: 'seoFields',
            title: 'SEO'
        },
        {
            name: 'events',
            type: 'landingCategory',
            title: 'Events',
            required: true,
        },
        {
            name: 'rental',
            type: 'landingCategory',
            title: 'Rental',
            required: true,
        },
    ]
}
