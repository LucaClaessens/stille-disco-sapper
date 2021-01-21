import { MdTextFields } from "react-icons/md";

export default {
    name: 'blockSubtitle',
    type: 'object',
    title: 'Block node subtitle',
    fields: [
        {
            name: 'usePadding',
            type: 'boolean',
            title: 'Padding',
            description: 'Defines whether or not to give the subtitle padding',
            required: true
        },
        {
            name: 'text',
            required: true,
            type: 'subtitlePortableText',
            title: 'Subtitle text',
        }
    ],
    preview: {
        select: {
            usePadding: 'usePadding'
        },
        prepare({ usePadding }) {
            return {
                media: MdTextFields,
                title: 'Subtitle text',
                subtitle: usePadding ? 'Uses padding' : 'No padding'
            }
        }
    }
}
