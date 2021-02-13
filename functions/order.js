import fetch from 'node-fetch';

const booqable = {
    apiKey: process.env.BOOKABLE_API_KEY,
    domain: process.env.BOOKABLE_DOMAIN,
    cartApiStoreId: '5503cdd9-01e5-402d-a5a8-ccca087339e2'

};

const baseCartEndpoint = `https://${booqable.cartApiStoreId}.booqable.shop/api/1/cart`

const bookItemToCart = async (cartId, itemId, quantity) => {
    const payload = {
        id: cartId,
        item_id: itemId,
        quantity
    };
    const data = await fetch(`${baseCartEndpoint}/book`, {
        method: 'post',
        body: JSON.stringify(payload),
        headers: { 'Content-Type': 'application/json;charset=UTF-8' },
    }).then(res => res.json());

    return data;
}

const applyRentalDateRange = async (order) => {
    const payload = {
        starts_at: order.starts_at,
        stops_at: order.stops_at
    }
    const res = await fetch(baseCartEndpoint, {
        method: 'put',
        body: JSON.stringify(payload),
        headers: { 'Content-Type': 'application/json;charset=UTF-8' }
    }).then(res => res.json());
    return res;
}

const getCartStatus = async (id) => {
    return await fetch(`${baseCartEndpoint}?source=store&id=${id}`).then(res => res.json());
}

exports.handler = async function (event) {
    if (event.httpMethod === 'POST') {
        const { order, ids } = JSON.parse(event.body);
        try {
            // First, we create a new cart, we do this by calling
            // the cart endpoint and setting our date range
            // the response provides us with an ID that we can use to book items into our
            const { cart } = await applyRentalDateRange(order);
            // For every item we want to add to the cart, we have to call the endpoint to book an item.
            const bookings = [];
            for (const [itemId, quantity] of Object.entries(ids)) {
                // ids[id] = amount;
                bookings.push(bookItemToCart(cart.id, itemId, quantity));
            }
            await Promise.all(bookings);
            // when all items are booked, return the checkout url to the frontend
            return {
                statusCode: 200,
                body: JSON.stringify(await getCartStatus(cart.id))
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
            body: JSON.stringify({ err: "Method not allowed, this endpoint only supports POST requests, baby boy!!" })
        };
    }
}