export default {
    name: 'addressDetails',
    type: 'object',
    title: 'Address details',
    fields: [
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
    ],
    preview: {
        select: {
            city: 'city',
            streetname: 'street_name',
            postalcode: 'postal_code',
            residencenumber: 'residence number',
            country: 'country'
        },
        prepare({ city, streetAddress, postalCode, country }) {
            const title = `${streetAddress}, ${postalCode}`
            const subtitle = `${city}, ${country}`
            return {
                title,
                subtitle
            }
        }
    }
}
