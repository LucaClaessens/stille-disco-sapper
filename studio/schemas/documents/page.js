import { i18n } from '../documentTranslation'

export default {
  name: 'page',
  type: 'document',
  i18n,
  title: 'Page',
  fields: [
    {
      name: 'seo',
      type: 'seoFields',
      title: 'SEO'
    },
    {
      name: 'slug',
      type: 'string',
      title: 'Slug',
      description:
        'The route of the page, e.g. when parent is set to `Rental` and slug is `toc`, it would make `/{$language}/rental/toc`',
      options: {
        source: 'seo.title',
        maxLength: 96
      }
    },
    {
      name: 'scaleLogo',
      type: 'boolean',
      required: 'true',
      title: 'Scale the logo',
      description: 'When true, the logo will show bigger before scrolling the page'
    },
    {
      name: 'parent',
      type: 'string',
      title: 'Parent page',
      description: "The category to file this page under, e.g. 'rental'.",
      options: {
        list: [
          { title: 'No parent (root)', value: '' },
          { title: 'Events', value: 'events' },
          { title: 'Rental', value: 'rental' }
        ]
      }
    },
    {
      name: 'body',
      type: 'layoutPortableText',
      title: 'Body of the page'
    }
  ],
  preview: {
    select: {
      seo: 'seo',
      parent: 'parent',
      slug: 'slug'
    },
    prepare({ seo, parent, slug }) {
      return {
        title: seo.title,
        media: seo.image,
        subtitle: `${parent ? parent + '/' : ''}${slug}`
      }
    }
  }
}
