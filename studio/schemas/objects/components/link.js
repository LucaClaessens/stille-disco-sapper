import { MdLink } from "react-icons/md";

export default {
    name: 'link',
    type: 'object',
    title: 'Link',
    fields: [
        {
            name: 'href',
            type: 'string',
            title: 'URL',
            description: 'The page to link to, if it is an external link, make sure to include the `https://` section, otherwise the browser will redirect to a route within the current website',
            validation: Rule => Rule.error('You have to fill in a valid URL.').required(),
        },
        {
            name: 'target',
            type: 'string',
            title: 'Target',
            description: 'Redirect target, see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#attr-target',
            options: {
                list: [
                    { title: 'The current tab', value: '_self' },
                    { title: 'A new tab', value: '_blank' }
                ],
            },
            validation: Rule => Rule.error('You have to pick a target.').required(),
        },
        {
            name: 'text',
            type: 'string',
            title: 'text',
            description: 'the text content to be used in the link'
        },
    ],
    preview: {
        select: {
            title: 'text',
            subtitle: 'href'
        },
        prepare({ title, subtitle }) {
            return {
                media: MdLink,
                title,
                subtitle
            }
        }
    },
}
