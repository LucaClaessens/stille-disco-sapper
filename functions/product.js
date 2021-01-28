const fetch = require('node-fetch');

const booqable = {
    apiKey: process.env.BOOKABLE_API_KEY,
    domain: process.env.BOOKABLE_DOMAIN
};

exports.handler = async function (event) {
    if (event.httpMethod === 'GET') {
        const { id } = event.queryStringParameters;

        try {
            const endpoint = `https://${booqable.domain}.booqable.com/api/1/product_groups/${id}?api_key=${booqable.apiKey}`;

            const groupData = await fetch(endpoint).then(res => res.json());
            const { product_group } = groupData;
            const { products, base_price_in_cents, price_period } = product_group;

            return {
                statusCode: 200,
                body: JSON.stringify({ products, base_price_in_cents, price_period })
            };

        } catch (err) {
            return {
                statusCode: 500,
                body: JSON.stringify(err);
            };
        }
    } else {
        return {
            statusCode: 405,
            body: JSON.stringify({ err: "Method not allowed" })
        };
    }


}