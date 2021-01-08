import { i18n } from "../documentTranslation";

export default {
  name: 'siteSettings',
  type: 'document',
  i18n,
  title: 'Site Settings',
  __experimental_actions: ['update', /* 'create', 'delete', */ 'publish'],
  fields: [
    {
      name: 'event_description',
      type: 'text',
      title: 'Event Description',
      description: 'Describe the events in 120 words or less.'
    },
    {
      name: 'rental_description',
      type: 'text',
      title: 'Rental Description',
      description: 'Describe the rentals in 120 words or less.'
    }
  ]
}
