import client from '../../../sanityClient';

export async function get(req, res) {
	try {
		const { lang } = req.params;
		const filter = '*[_type == "rental" && _lang == $lang][0]';
		const projection = `{
            ...,
		"gallery": *[_type == 'gallery'][0].gallery[]
			{
			img,
			message{
				align, 
				justify,
				"button": heading['button']{
					...,
					"text": text[$lang]['text']
				},
				"text": heading['text'][$lang]['text'],
			}
            },
          "sequence": *[_type == 'sequence'][0]{
                images,
                "messages": messages[]{
                    startFrame,
					endFrame,
					"align": message.align,
					"justify": message.justify,
					"button": message.heading[$lang]['button'],
					"text": message.heading[$lang]['text']
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