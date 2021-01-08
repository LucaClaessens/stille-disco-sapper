export default {
  name: 'category',
  type: 'document',
  title: 'Category',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title'
    },
    {
      name: 'description',
      type: 'text',
      title: 'Description'
    }
  ],
  preview: {
    select: {
      title: 'title',
      description: 'description'
    },
    prepare({ title = 'No title', description = 'No description' }) {
      return {
        title,
        subtitle: description.slice(0, 50)
      }
    }
  }
}
