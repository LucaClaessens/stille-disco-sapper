export default {
    name: 'spacer',
    type: 'string',
    title: 'Spacer',
    options: {
        list: [
            { title: 'small', value: '6' },
            { title: 'medium', value: '12' },
            { title: 'large', value: '24' }
        ]
    },
    preview: {
        select: {
            size: 'spacer'
        },
        prepare({ size }) {
            return {
                title: "Spacer",
                subtitle: `Size: ${size}`
            }
        }
    }
}
