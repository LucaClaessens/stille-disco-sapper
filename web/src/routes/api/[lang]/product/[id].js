import fetch from 'node-fetch';


export async function get(req, res) {
    try {
        const { id } = req.params;
        // const { from, till } = req.query;
        const domain = 'stille-disco';
        const key = 'API_KEY_HERE';
        const group_EP = `https://${domain}.booqable.com/api/1/product_groups/${id}?api_key=${key}`;

        const groupData = await fetch(group_EP).then(res => res.json());
        console.log({ groupData });
        const { product_group } = groupData;
        const { products, base_price_in_cents, price_period } = product_group;
        res.end(JSON.stringify({ products, base_price_in_cents, price_period }));
    } catch (err) {
        console.log({ err });
        res.writeHead(500, {
            'Content-Type': 'application/json'
        });

        res.end(JSON.stringify({
            message: err.message
        }));
    }
};

/* WHEN THE ENDPOINT FOR AVAILABILITY WORKS AGAIN, IMPLEMENT:
----------------------------------------------------------------------------------------
        for (const product of products) {
            console.log({ product });
            // const endpoint = `https://${domain}.booqable.com/api/1/products/${product.id}/availability?till=${till}&from=${from}&api_key=${key}`
            const endpoint = `https://${domain}.booqable.com/api/1/products/${product.id}`;
            product_calls.push(fetch(endpoint).then(res => {
                const productData = res.json();
                const {stock_counts, id, name, slug}
                 ...res.json(), id: product.id
                }));
        }

        await Promise.all(product_calls).then(productCallsData => {
            const response = { base_price_in_cents, price_period, availability: productCallsData }
            res.end(JSON.stringify(response));
        })
----------------------------------------------------------------------------------------
*/