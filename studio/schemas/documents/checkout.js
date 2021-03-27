import { MdPictureInPicture } from "react-icons/md";
import { i18n } from "../documentTranslation";

export default {
    name: 'checkout',
    type: 'document',
    title: 'Checkout',
    i18n,
    fields: [
        {
            name: 'seo',
            type: 'seoFields',
            title: 'SEO',
            options: {
              collapsible: true,
              collapsed: true,
            }
        },
        {
            name: 'checkoutFlow',
            type: 'array',
            description: 'The steps in the checkout displayed inbetween date selection and the overview, the order these are sorted in defines the order in which they appear on the website',
            options: {
                editModal: 'fullscreen',
            },
            of: [{
                name: 'checkoutStep',
                type: 'object',
                title: 'Checkout step',
                fields: [
                    {
                        name: 'product',
                        description: 'The product that we want to connect to this step',
                        type: 'reference',
                        to: [{ type: 'product'}],
                        options: {filter:  'isRental != $rental', filterParams: {rental: false}}
                    },
                    {
                        name: 'heading',
                        type: 'text',
                        title: 'Product heading',
                        description: 'Bigger text to describe what this step of the checkout does'
                    },
                    {
                        name: 'variationDescriptor',
                        type: 'string',
                        title: 'Variation descriptor',
                        description: 'When there are multiple variations of the product in this step, pose the following question to ask which variation the user wants to have'
                    }
                ],
                preview: {
                    select: {
                        title: 'product.name',
                        subtitle: 'heading',
                        variation: 'variationDescriptor'
                    },
                    prepare({ index, title, subtitle, variation }) {
                        return {
                            media: MdPictureInPicture,
                            title: `Checkout step: ${title}`,
                            subtitle: variation || subtitle || 'Missing details'
                        }
                    }
                }
            }]
        },
        {
            name: 'uiFields',
            type: 'object',
            title: ' UI Fields',
            fields: [
                {
                    name: 'step',
                    type: 'string',
                    title: 'Step',
                    description: 'Translation for the word `step`'
                },
                {
                    name: 'dateSelection',
                    type: 'string',
                    title: 'Date selection',
                    description: 'Translation for the words `Date selection`'
                },
                {
                    name: 'miscItems',
                    type: 'string',
                    title: 'Miscellaneous items',
                    description: 'Translation for the words `Miscellaneous items`'
                },
                {
                    name: 'quantity',
                    type: 'string',
                    title: 'Quantity',
                    description: 'Translation for the words `Quantity`'
                },
                {
                    name: 'amountError',
                    type: 'string',
                    title: 'Amount error',
                    description: 'Translation for the text `Amount must be between 1 and {maxAmount}`'
                }
            ],
            options: {
              collapsible: true,
              collapsed: true,
            }
        },
        {
            name: 'dateSelection',
            type: 'object',
            title: 'Date Selection',
            fields: [
                {
                    name: 'image',
                    type: 'mainImage',
                    title: 'Date selection Image',
                    description: 'The image to show on the first step, date selection'
                },
                {
                    name: 'tagline',
                    type: 'string',
                    title: 'Tagline',
                    description: 'Bigger text to describe what this step of the checkout does, defaults to `When would you like to rent equipment?`'
                },
                {
                    name: 'from',
                    type: 'string',
                    title: 'From',
                    description: 'Translation for \'From\'',
                    validation: Rule => Rule.regex(/^[A-Z]/).error('Please make sure the word is capitalized')
                },
                {
                    name: 'until',
                    type: 'string',
                    title: 'Until',
                    description: 'Translation for \'Until\'',
                    validation: Rule => Rule.regex(/^[A-Z]/).error('Please make sure the word is capitalized')
                },
                {
                    name: 'inputInfo',
                    type: 'string',
                    title: 'Input info',
                    description: 'Information on what the date selection means for the pricing of the products'
                },
                {
                    name: 'inputPlaceholder',
                    type: 'string',
                    title: 'Input placeholder',
                    description: 'Placeholder text to show in the date selector'
                },
                {
                    name: 'noDatesSelected',
                    type: 'string',
                    title: 'No Dates Selected text',
                    description: 'Placeholder text to show when no dates are selected yet, defaults to `no dates selected yet`'
                }
            ],
            options: {
              collapsible: true,
              collapsed: true,
            }
        },
        {
          name: 'miscProducts',
          type: 'object',
          title: 'Miscellaneous products',
          fields: [
              {
                  name: 'image',
                  type: 'mainImage',
                  title: 'Date selection Image',
                  description: 'The image to show on the last step, miscellanesous'
              },
              {
                  name: 'heading',
                  type: 'string',
                  title: 'Tagline',
                  description: 'Bigger text to describe what this step of the checkout does, defaults to `Any other products that you would like to buy?`'
              },
              {
                  name: 'info',
                  type: 'string',
                  title: 'info',
                  description: 'Information on what you can buy in the final step (rendered as subheading)'
              },
              {
                name: 'products',
                title: 'Products',
                type: 'array',
                of: [
                  {
                    name: 'product',
                    description: 'Add a product that is for sale',
                    type: 'reference',
                    to: [{ type: 'product', }],
                    options: {filter:  'isRental == $rental', filterParams: {rental: false}}
                },
                ]
              }
          ],
          options: {
            collapsible: true,
            collapsed: true,
          }
      }
    ],
    preview: {
        select: {
            seo: 'seo',
            parent: 'parent',
            slug: 'slug'
        },
        prepare({ seo, parent, slug }) {
            return {
                title: seo.title,
                media: seo.image,
                subtitle: `${parent ? parent + '/' : ''}${slug.current}`
            }
        }
    }
}
