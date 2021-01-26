import fetch from 'node-fetch';

export async function get(req, res) {
    try {
        const { lang, id } = req.params;
        const domain = 'lookaluca';
        const endpoint = `https://${domain}.booqable.com/api/1/product_groups/${id}?api_key=734d9e647c1d9df4b7411595a2b32550`
        const data = await fetch(endpoint).then(res => res.json());
        console.log(data);
        res.end(JSON.stringify(data));
    } catch (err) {
        res.writeHead(500, {
            'Content-Type': 'application/json'
        });

        res.end(JSON.stringify({
            message: err.message
        }));
    }
};