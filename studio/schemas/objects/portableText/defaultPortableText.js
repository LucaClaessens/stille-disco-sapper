import React from 'react'

export default {
  name: 'defaultPortableText',
  type: 'array',
  title: 'Default, minimalistic, markup for block content',
  of: [
    {
      type: 'block',
      title: 'Block',
      styles: [
        { title: 'Normal', value: 'normal' },
        { title: 'H1', value: 'h1' },
        { title: 'H2', value: 'h2' },
        { title: 'H3', value: 'h3' },
        { title: 'H4', value: 'h4' },
        { title: 'Quote', value: 'blockquote' }
      ],
      lists: [
        { title: 'Bullet', value: 'bullet' },
        { title: 'Numbered', value: 'number' }
      ],
      // Marks let you mark up inline text in the block editor.
      marks: {
        // Decorators usually describe a single property – e.g. a typographic
        // preference or highlighting by editors.
        decorators: [
          { title: 'Strong', value: 'strong' },
          { title: 'Emphasis', value: 'em' }
        ],
        // Annotations can be any object structure – e.g. a link or a footnote.
        annotations: [
          {
            name: 'color',
            title: 'Color',
            type: 'color',
            blockEditor: {
              icon: () => '🌈'
            }
          },
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
            name: 'i18nlink',
            type: 'object',
            title: 'i18n URL (local)',
            description: 'url prefixed with /{lang}/',
            blockEditor: {
              icon: () => '🌎',
              render: props => <span style={{ backgroundColor: 'yellow' }}>🌎{props.children}</span>
            },
            fields: [
              {
                name: 'href',
                type: 'string',
                title: 'URL',
                description:
                  'The page to link to, if it is an external link, make sure to include the `https://` section, otherwise the browser will redirect to a route within the current website',
                validation: Rule => Rule.error('You have to fill in a valid URL.').required()
              },
              {
                name: 'target',
                type: 'string',
                title: 'Target',
                initialValue: '_self',
                description:
                  'Redirect target, see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#attr-target',
                options: {
                  list: [
                    { title: 'The current tab', value: '_self' },
                    { title: 'A new tab', value: '_blank' }
                  ]
                },
                validation: Rule => Rule.error('You have to pick a target.').required()
              }
            ]
          }
        ]
      }
    },
    {
      type: 'button'
    },
    {
      type: 'spacer'
    },
    {
      type: 'youtube'
    }
  ]
}
