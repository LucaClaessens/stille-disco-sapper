export default {
    name: 'landingSettings',
    type: 'document',
    title: 'Landingspagina',
    __experimental_actions: ['update', /* 'create', 'delete', */ 'publish'],
    fields: [
        {
            name: 'sequence',
            type: 'array',
            title: 'Foto sequence',
            of: [
                {
                    type: 'sequenceImage'
                }
            ]
        },
        {
            name: 'alt',
            type: 'string',
            title: 'Sequence alt',
            description: 'Important for SEO and accessiblity.',
            validation: Rule => Rule.error('You have to fill out the alternative text.').required(),
            options: {
                isHighlighted: true
            }
        }
    ]
}
