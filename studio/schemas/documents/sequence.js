
export default {
    name: 'sequence',
    type: 'document',
    title: 'Sequence',
    fields: [
        {
            name: 'images',
            required: true,
            type: 'array',
            of: [{ type: 'sequenceImage' }],
            title: 'Image sequence (desktop)',
            description: 'Configures what frames should be used for the image sequence',
        },
        {
            name: 'messages',
            required: true,
            type: 'array',
            of: [{
                type: 'object',
                name: 'message',
                title: 'Message',
                fields: [
                    {
                        name: 'startFrame',
                        type: 'number',
                        title: 'Start frame',
                        required: true
                    },
                    {
                        name: 'endFrame',
                        type: 'number',
                        title: 'End frame',
                        required: true
                    },
                    {
                        name: 'message',
                        type: 'galleryMessage',
                        title: 'Gallery message',
                        required: true
                    }
                ]
            }]
        },
    ]
}
