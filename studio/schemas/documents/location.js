export default {
    name: 'location',
    type: 'document',
    title: 'Location',
    fields: [
        {
            name: "image",
            type: "mainImage",
            title: "Image",
            description: "An image of this location",
        },
        {
            name: 'name',
            type: 'string',
            title: 'Name of location'
        },
        {
            name: 'country',
            type: 'string',
            title: 'Country name',
        },
        {
            name: 'city',
            type: 'string',
            title: 'City name',
        },
        {
            name: 'streetAddress',
            type: 'string',
            title: 'Street address',
        },
        {
            name: 'postalCode',
            type: 'string',
            title: 'Postal code',
        },
        {
            name: 'phoneNo',
            type: 'string',
            title: 'Phone number'
        },
        {
            name: 'email',
            type: 'string',
            title: 'Email'
        },
        {
            name: "socials",
            type: "array",
            title: "Socials",
            description: "This location's social media entries",
            of: [{ type: 'link' }],
        },
    ],
    preview: {
        select: {
            media: 'image',
            title: 'name',
            city: 'city',
            streetAddress: 'streetAddress',
            postalCode: 'postalCode',
            residencenumber: 'residence number',
            country: 'country'
        },
        prepare({ media, title, city, streetAddress, postalCode, country }) {
            const subtitle = `${streetAddress}, ${postalCode}, ${city}, ${country}`
            return {
                media,
                title,
                subtitle
            }
        }
    }
}
