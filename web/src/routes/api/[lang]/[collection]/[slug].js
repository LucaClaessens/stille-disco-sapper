import client from '../../../../sanityClient';

export async function get(req, res) {
    try {
        const { lang, collection, slug } = req.params;
        const filter = '*[_type == "page" && _lang == $lang && slug.current == $slug && parent == $collection][0]';
        const projection = `{
            body[]{
            ...,
            location->,
            referral->
            }
        }`
        const settings = await client.fetch(filter + projection, { lang, slug, collection });
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