export default {
  name: 'contactDetails',
  type: 'object',
  title: 'Contact details block',
  description: 'Details on how to contact you',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Contact title',
      description: "'Contact' in the selected language"
    },
    {
      name: 'addressTitle',
      type: 'string',
      title: 'Address title',
      description: "'Address' in the selected language"
    },
    {
      name: 'socialsTitle',
      type: 'string',
      title: 'Socials title',
      description: "'Socials' in the selected language"
    },
    {
      title: 'Location',
      name: 'location',
      type: 'reference',
      description: "A reference to the location's details you want to show in the contact card",
      to: [{ type: 'location' }]
    }
  ],
  preview: {
    select: {
      title: 'title',
      media: 'location.image',
      country: 'location.country',
      city: 'location.city'
    },
    prepare({ title, media, country, city }) {
      return {
        media,
        title,
        subtitle: `${city}, ${country}`
      }
    }
  }
}
