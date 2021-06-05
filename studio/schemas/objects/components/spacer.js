export default {
  name: 'spacer',
  type: 'object',
  title: 'Spacer',
  fields: [
    {
      name: 'height',
      type: 'string',
      options: {
        list: ['none', 'small', 'medium', 'large', 'huge']
      }
    }
  ],
  preview: {
    select: {
      size: 'height'
    },
    prepare({ size }) {
      return {
        title: 'Spacer',
        subtitle: `Size: ${size}`
      }
    }
  }
}
