import client from '../../../sanityClient';

export async function get(req, res) {
	try {
		const { lang } = req.params;
		const filter = '*[_type == "rental" && _lang == $lang][0]';
		const projection = `{
            ...,
		"gallery": *[_type == 'gallery'][0].gallery[]
			{
			foreground,
      background,
			message{
				position,
				"text": text[$lang]['text'],
      }
			}
    }`
		const settings = await client.fetch(filter + projection, { lang });
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
