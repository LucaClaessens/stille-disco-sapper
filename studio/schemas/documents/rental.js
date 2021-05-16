import { i18n } from '../documentTranslation'

export default {
  name: 'rental',
  type: 'document',
  title: 'Rental',
  i18n,
  fields: [
    {
      name: 'seo',
      type: 'seoFields',
      title: 'SEO'
    },
    {
      name: 'body',
      type: 'marketingPagePortableText',
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
        subtitle: `${parent ? parent + '/' : ''}${slug.current}`
      }
    }
  }
}
