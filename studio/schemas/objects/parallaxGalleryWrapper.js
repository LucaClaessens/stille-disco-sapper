import { MdImage } from 'react-icons/md'

export default {
  name: 'parallaxGalleryWrapper',
  type: 'object',
  title: 'Parallax gallery',
  fields: [
    {
      name: 'gallery',
      type: 'array',
      title: 'Gallery',
      description: 'Gallery of images, rendered on mobile',
      options: {
        editModal: 'fullscreen'
      },
      of: [{ type: 'galleryImage' }]
    }
  ],
  preview: {
    select: {
      slides: 'gallery'
    },
    prepare({ slides }) {
      return {
        media: MdImage,
        title: 'Parallax gallery',
        subtitle: `Slides: ${slides.length}`
      }
    }
  }
}
