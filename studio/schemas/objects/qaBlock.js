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
            description: 'Title text of the block, displayed in bold'
        },
        {
            name: 'hasForm',
            required: true,
            type: 'boolean',
            title: 'Block has a form',
            description: 'By toggling this to \'on\' if the block has a form (inputForm, textareaForm), form submissions will be stored and/or sent per email'
        },
        {
            name: 'referral',
            type: 'reference',
            to: { type: 'page' },
            title: 'Refer to page (on success)',
            decription: 'If empty, routes to default page after submitting form'
        },
        {
            name: 'formId',
            required: true,
            type: 'string',
            title: "Unique form identifier",
            description: 'A name referring to the contents / function of the inner form, has to be unique'
        },
        {
            name: 'content',
            required: false,
            type: 'qaBlockPortableText',
            title: 'Contents of the block',
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
