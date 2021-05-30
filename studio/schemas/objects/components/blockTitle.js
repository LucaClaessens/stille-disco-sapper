import { MdTextFields } from "react-icons/md";

export default {
    name: 'blockTitle',
    type: 'object',
    title: 'Block node title',
    fields: [
        {
            name: 'text',
            required: true,
            type: 'string',
            title: 'Title',
        },
        {
            name: 'sticky',
            type: 'boolean',
            title: 'Sticky',
            description: 'Lets the title stick to the top of the screen (on mobile screens)',
            required: true
        },
        {
            name: 'usePadding',
            type: 'boolean',
            title: 'Padding',
            description: 'Gives the subtitle padding',
            required: true
        },
        {
            name: 'uppercase',
            type: 'boolean',
            title: 'Uppercase',
            description: 'Uppercases the text. if not, it will be capitalized',
            required: true
        },
    ],
    preview: {
        select: {
            title: 'text',
            sticky: 'sticky',
            usePadding: 'usePadding',
            uppercase: 'uppercase'
        },
        prepare({ title, usePadding, uppercase, sticky }) {
            return {
                media: MdTextFields,
                title,
                subtitle: `
                ${usePadding ? 'Uses padding' : 'No padding'}, 
                ${uppercase ? 'uppercased' : 'capitalized'},
                ${sticky ? 'sticky' : 'no stick'}
                `
            }
        }
    }
}
