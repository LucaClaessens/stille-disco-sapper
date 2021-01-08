import urlBuilder from '@sanity/image-url';
import client from '../../../sanityClient';

const urlFor = source => urlBuilder(client).image(source);

export async function get(req, res) {
    try {
        const { lang } = req.params;
        const filter = '*[_type == "landingSettings" && _lang == $lang][0]';
        const projection = `{image}`
        const settings = await client.fetch(filter + projection, { lang });
        //const sequence = settings.sequence.map(imageRef => urlFor(imageRef).url());
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