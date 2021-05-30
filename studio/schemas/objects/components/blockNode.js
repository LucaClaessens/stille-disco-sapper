export default {
    name: 'blockNode',
    type: 'object',
    title: 'Block',
    fields: [
        {
            name: 'title',
            type: 'string',
            title: 'Title',
        },
        {
            name: 'subtitle',
            type: 'string',
            title: 'Subtitle',
        },
    ],
    preview: {
        select: {
            title: 'title',
            subtitle: 'subtitle'
        },
    },
}
