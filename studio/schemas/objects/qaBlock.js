import { MdNote } from "react-icons/md";

export default {
    name: 'qaBlock',
    type: 'object',
    title: 'Question / Answer styled block',
    fields: [
        {
            name: 'bg',
            type: 'string',
            title: 'Background color',
            options: {
                list: [
                    { title: 'white', value: 'white' },
                    { title: 'light gray', value: 'gray-100' },
                ]
            }
        },
        {
            name: 'title',
            required: true,
            type: 'string',
            title: 'Heading of the block',
        },
        {
            name: 'content',
            required: false,
            type: 'qaBlockPortableText',
            title: 'Content of the block',
        }
    ],
    preview: {
        select: {
            title: 'title',
        },
        prepare({ title }) {
            return {
                media: MdNote,
                title,
                subtitle: 'Custom block content'
            }
        }
    }
}
