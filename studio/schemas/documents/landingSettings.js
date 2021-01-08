
export default {
    name: 'landingSettings',
    type: 'document',
    title: 'Landingspagina',
    __experimental_actions: ['update', /* 'create', 'delete', */ 'publish'],
    fields: [
        {
            name: 'caption',
            type: 'string',
            title: 'caption',
            options: {
                i18n: true,
                base: 'en_US',
                languages: ['en_US', 'nl_NL'],
                css: (classNames) => `${classNames} custom-classname`,
                messages: {
                    loading: 'Loading languages...',
                    missingTranslations: 'Missing translations message...',
                },
            },
        },
    ]
}
