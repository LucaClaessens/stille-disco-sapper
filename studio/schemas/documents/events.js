import { i18n } from "../documentTranslation";

export default {
    name: 'events',
    type: 'document',
    i18n,
    title: 'Events',
    fields: [
        {
            name: 'seo',
            type: 'seoFields',
            title: 'SEO'
        },
        {
            name: 'tagline',
            type: 'text',
            title: 'Tagline',
            description: 'Content of the tagline to show for the events page'
        },
        {
            name: 'searchPlaceholder',
            type: 'string',
            title: 'Search placeholder',
            description: 'Translation for the search placeholder'
        },
        {
            name: 'ticketButtonText',
            type: 'string',
            title: 'Ticket button text',
            description: 'Translation for the \'Buy now\' ticket when opening an event'
        }
    ],
    preview: {
        select: {
            seo: 'seo',
        },
        prepare({ seo }) {
            return {
                title: seo.title,
                media: seo.image
            }
        }
    }
}
