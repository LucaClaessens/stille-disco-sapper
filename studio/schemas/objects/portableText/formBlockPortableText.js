import React from 'react'

const i18nUrlIcon = () => <span style={{ fontWeight: 'bold' }}>⛓</span>

const i18nUrlRenderer = props => (
  <span style={{ backgroundColor: 'yellow' }}>⛓{props.children}</span>
)

export default {
  name: 'formBlockPortableText',
  type: 'array',
  title: 'Markup for block content',
  of: [
    {
      type: 'textPortableText'
    },
    {
      type: 'textarea'
    },
    {
      type: 'input'
    },
    {
      type: 'spacer'
    }
  ]
}
