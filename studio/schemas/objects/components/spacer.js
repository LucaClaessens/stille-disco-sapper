export default {
  name: 'spacer',
  type: 'string',
  title: 'Spacer',
  options: {
    list: [
      { title: 'none', value: '' },
      { title: 'small', value: '6' },
      { title: 'medium', value: '12' },
      { title: 'large', value: '24' },
      { title: 'huge', value: '48' }
    ]
  },
  preview: {
    select: {
      size: 'spacer'
    },
    prepare({ size }) {
      return {
        title: 'Spacer',
        subtitle: `Size: ${size}`
      }
    }
  }
}
