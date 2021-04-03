import fetch from 'node-fetch';

const booqable = {
    apiKey: process.env.BOOKABLE_API_KEY,
    domain: process.env.BOOKABLE_DOMAIN
};

exports.handler = async function (event) {
    if (event.httpMethod === 'GET') {
        const { id, till, from} = event.queryStringParameters;
        console.log({id, till, from});

        try {
            const endpoint = `https://${booqable.domain}.booqable.com/api/1/product_groups/${id}?api_key=${booqable.apiKey}`;
            const groupData = await fetch(endpoint).then(res => res.json());
            const { product_group } = groupData;
            const { products, base_price_in_cents, price_period } = product_group;

            // const availability = `https://${booqable.domain}.booqable.com/api/1/products/${products[0].id}/availability/?from=${from}&till=${till}&interval=month&api_key=${booqable.apiKey}`;
            // const availabilityData = await fetch(availability).then(res => res.json());
            // console.log({availability, availabilityData});
            return {
                statusCode: 200,
                body: JSON.stringify({ products, base_price_in_cents, price_period })
            };

        } catch (err) {
            return {
                statusCode: 500,
                body: JSON.stringify(err)
            };
        }
    } else {
        return {
            statusCode: 405,
            body: JSON.stringify({ err: "Method not allowed" })
        };
    }


}
