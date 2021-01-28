import client from '../../../sanityClient';

export async function get(req, res) {
    try {
        const { lang } = req.params;
        const filter = '*[_type == "landing" && _lang == $lang][0]';
        const settings = await client.fetch(filter, { lang });
        res.end(JSON.stringify({ ...settings }));
    } catch (err) {
        res.writeHead(500, {
            'Content-Type': 'application/json'
        });

        res.end(JSON.stringify({
            message: err.message
        }));
    }
};