import React from 'react'

const i18nUrlIcon = () => (
    <span style={{ fontWeight: 'bold' }}>⛓</span>
)

const i18nUrlRenderer = props => (
    <span style={{ backgroundColor: 'yellow' }}>⛓{props.children}</span>
)

export default {
    name: 'qaBlockPortableText',
    type: 'array',
    title: 'Markup for block content',
    of: [
        {
            type: 'block',
            title: 'Block',
            styles: [
                { title: 'Normal', value: 'normal' },
                { title: 'H3', value: 'h3' },
                { title: 'Quote', value: 'blockquote' }
            ],
            marks: {
                decorators: [{ title: 'Strong', value: 'strong' }, { title: 'Emphasis', value: 'em' }],
                annotations: [
                    {
                        name: 'link',
                        type: 'object',
                        title: 'URL',
                        fields: [
                            {
                                title: 'URL',
                                name: 'href',
                                type: 'url'
                            }
                        ]
                    },
                    {
                        blockEditor: {
                            icon: i18nUrlIcon,
                            render: i18nUrlRenderer
                        },
                        name: 'i18nlink',
                        type: 'object',
                        title: 'i18n URL (local)',
                        description: 'url prefixed with /{lang}/',
                        fields: [
                            {
                                title: 'URL',
                                name: 'href',
                                type: 'url'
                            },
                            {
                                title: 'Color',
                                name: 'textColor',
                                type: 'string',
                                options: {
                                    list: ['blue-pure', 'black', 'white', 'gray-100']
                                }
                            }
                        ]
                    }
                ]
            },
        },
        {
            type: 'textareaForm'
        },
        {
            type: 'inputForm'
        },
        {
            type: 'spacer'
        }
    ]
}
