import { i18n, i18nOptions } from "../documentTranslation";

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
            name: 'emptyStateText',
            type: 'string',
            title: 'Empty list text',
            description: 'Text to be displayed when no events can be found'
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
            description: 'Translation for the \'Buy now\' button when opening an event'
        },
        {
            name: 'soldOutText',
            type: 'string',
            title: 'Sold out text',
            description: 'Translation for \'Sold out\''
        },
        {
            name: 'maxProspectEvents',
            type: 'number',
            title: 'Maximum prospect time of events',
            description: 'The maximum amount of time into the future that upcoming events will be displayed, in weeks'
        },
        {
            name: 'eventTypeTranslations',
            options: i18nOptions,
            type: 'object',
            fields: [
                {
                    name: 'concert',
                    title: 'Concert',
                    type: 'string'
                },
                {
                    name: 'dansavond',
                    title: 'Dance night',
                    type: 'string'
                },
                {
                    name: 'voorstelling',
                    title: 'Show',
                    type: 'string'
                },
                {
                    name: 'festival',
                    title: 'Festival',
                    type: 'string'
                },
            ]
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
