export default {
  name: 'youtube',
  type: 'object',
  title: 'Youtube video',
  fields: [
    {
      name: 'videoId',
      type: 'string',
      title: 'Youtube video'
    }
  ],
  preview: {
    select: {
      title: 'videoId'
    }
  }
}
