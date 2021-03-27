import { i18n } from "../documentTranslation";

export default {
    name: 'product',
    type: 'document',
    i18n,
    title: 'Product',
    validation: Rule => Rule.custom(fields => {
      console.log(fields);
      if(fields.isRental === false && fields.variations.length > 1) return "A non-rental product can only have one product variation for booqable integration compliance";
      return true;
    }),
    initialValue: {
      isRental: true,
    },
    fields: [
      {
        name: 'isRental',
        title: 'Rental product',
        type: 'boolean'
      },
        {
            name: 'name',
            type: 'string',
            title: 'Title',
            required: true,
            description: 'Titles should be catchy, descriptive, and not too long'
        },
        {
            name: 'slug',
            type: 'slug',
            title: 'Slug',
            description: 'A unique ID that is connected to this product, autogenerated when you click `generate`.',
            validation: Rule => Rule.required(),
            options: {
                source: 'name',
                maxLength: 96
            }
        },
        {
            name: 'info',
            type: 'text',
            title: 'Information',
            description: 'Short block of information on the product, meant to be shown under the `how many x would you like to rent?` question.'
        },
        {
            name: 'details',
            type: 'text',
            title: 'Details',
            description: 'Block of text that will be shown when hovering over the info icon in the image section of this product\'s display'
        },
        {
            name: 'image',
            type: 'mainImage',
            title: 'Product Image'
        },
        {
            name: 'variations',
            type: 'array',
            of: [{ type: 'productVariation' }],
            title: 'Product variations',
            validation: Rule => Rule.required().min(1)
        }
    ],
    preview: {
        select: {
            media: 'image',
            title: 'name',
            subtitle: 'info'
        }
    }
}
