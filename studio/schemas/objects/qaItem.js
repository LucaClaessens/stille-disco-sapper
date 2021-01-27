import { MdQuestionAnswer } from "react-icons/md";
export default {
    name: 'qaItem',
    type: 'object',
    title: 'Question / Answer pair',
    fields: [
        {
            name: 'question',
            type: 'string',
            title: 'Question',
            required: true
        },
        {
            name: 'answer',
            required: true,
            type: 'blockPortableText',
            title: 'Content of the block',
        }
    ],
    preview: {
        select: {
            title: 'question'
        },
        prepare({ title, subtitle = 'Answer text / content' }) {
            return {
                media: MdQuestionAnswer,
                title,
                subtitle
            }
        }
    }
}
