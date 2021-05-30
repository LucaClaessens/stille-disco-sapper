import { MdPhotoLibrary } from 'react-icons/md'
import textColors from '../../partials/textColors'

const rateOverride = () => ({
  name: 'rate',
  required: 'false',
  type: 'number',
  title: 'Override for parallax rate',
  description:
    'When using this override, the scroll speed of the image in the parallax will be overridden. see https://www.npmjs.com/package/svelte-parallax'
})

const positionStrategy = () => ({
  name: 'position',
  required: true,
  type: 'flexPositioner',
  title: 'Position'
})

const image = () => ({
  name: 'image',
  required: true,
  type: 'mainImage',
  title: 'Image'
})

const images = () => ({
  name: 'images',
  title: 'Images for layer',
  required: true,
  type: 'array',
  of: [
    {
      type: 'object',
      name: 'entry',
      fields: [positionStrategy(), image(), rateOverride()],
      preview: {
        select: {
          media: 'image',
          title: 'image.alt',
          justify: 'position.justify',
          align: 'position.align'
        },
        prepare: ({ media, title, justify, align }) => ({
          media,
          title,
          subtitle: `justify: ${justify}, align: ${align}`
        })
      }
    }
  ]
})

const color = () => ({
  name: 'color',
  required: 'true',
  type: 'string',
  title: 'Background color',
  options: {
    list: [
      { title: 'red', value: 'bg-red-pure-light' },
      { title: 'green', value: 'bg-green-pure-light' },
      { title: 'blue', value: 'bg-blue-pure-light' }
    ]
  }
})

export default {
  name: 'galleryImage',
  type: 'object',
  title: 'Gallery image',
  fields: [
    {
      name: 'spacer',
      type: 'spacer',
      title: 'Spacing',
      description: 'Vertical spacing on top of this slide'
    },
    {
      name: 'foreground',
      type: 'object',
      title: 'Foreground layer',
      options: {
        collapsible: true,
        collapsed: false
      },
      fields: [images()]
    },
    {
      name: 'background',
      type: 'object',
      title: 'Background layer',
      options: {
        collapsible: true,
        collapsed: false
      },
      fields: [images(), color()]
    },
    {
      name: 'message',
      required: true,
      title: 'Block content layer',
      type: 'object',
      options: {
        collapsible: true,
        collapsed: false
      },
      fields: [
        positionStrategy(),
        {
          title: 'Text',
          name: 'text',
          type: 'defaultPortableText',
          required: true,
          description: 'Portable text for the gallery message'
        },
        textColors(),
        rateOverride()
      ]
    }
  ],
  preview: {
    select: {
      fI: 'foreground.images',
      bI: 'background.images'
    },
    prepare({ fI, bI }) {
      return {
        media: MdPhotoLibrary,
        title: `${fI.length} foreground images.`,
        subtitle: `${bI.length} background images.`
      }
    }
  }
}
