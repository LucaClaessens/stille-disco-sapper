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
            name: 'hasForm',
            required: true,
            type: 'string',
            title: 'Block has a form',
            describe: 'By toggling this to \'on\' if the block has a form (inputForm, textareaForm), form submissions will be stored and/or sent per email'
        },
        {
            name: 'formId',
            required: true,
            type: 'string',
            title: "Unique form identifier",
            describe: 'A name referring to the contents / function of the inner form, has to be unique'
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
