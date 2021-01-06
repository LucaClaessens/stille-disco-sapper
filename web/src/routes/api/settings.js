import urlBuilder from '@sanity/image-url';
import client from '../../sanityClient';

const urlFor = source => urlBuilder(client).image(source);

export async function get(req, res) {
    try {
        const settings = await client.getDocument('siteSettings');
        const sequence = settings.sequence.map(imageRef => urlFor(imageRef).url());
        res.end(JSON.stringify({ ...settings, sequence }));
    } catch (err) {
        res.writeHead(500, {
            'Content-Type': 'application/json'
        });

        res.end(JSON.stringify({
            message: err.message
        }));
    }
};