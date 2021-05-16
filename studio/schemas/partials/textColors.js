export default (name = 'textColor', title = 'Text color') => ({
  name,
  type: 'string',
  title,
  options: {
    list: [
      { title: 'white', value: 'text-white' },
      { title: 'black', value: 'text-black' }
    ]
  }
})
