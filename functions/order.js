import fetch from 'node-fetch';

const booqable = {
    apiKey: process.env.BOOKABLE_API_KEY,
    domain: process.env.BOOKABLE_DOMAIN
};

const createCart = async (cartId, order) => {
    const endpoint = `https://${booqable.domain}.booqable.com/api/1/cart?source=store&id=${cartId}`;

    const orderData = await fetch(endpoint, {
        method: 'post',
        body: JSON.stringify(order),
        headers: { 'Content-Type': 'application/json' },
    }).then(res => res.json());

    return orderData;
}

const bookItems = async (cartId, ids) => {
    const endpoint = `https://${booqable.domain}.booqable.com/api/1/cart/book?source=store&id=${cartId}`;

    const items = await fetch(endpoint, {
        method: 'post',
        body: JSON.stringify(ids),
        headers: { 'Content-Type': 'application/json' },
    }).then(res => res.json());

    return items;
}

exports.handler = async function (event) {
    if (event.httpMethod === 'POST') {
        const { order, ids, cartId } = event.body;

        try {

            const cartData = await createCart(cartId, order);
            await bookItems(cartId, orderData.id, ids);

            return {
                statusCode: 200,
                body: JSON.stringify(cartData)
            }

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