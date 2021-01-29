import client from '../../../sanityClient';
export async function get(req, res) {
    try {
        const { lang } = req.params;
        const query = `{
					"navigation": *[_type == "navigation"][0]{
						links[]{
							visibility,
							"href": link.href,
							"target": link.target,
							"text": link.text[$lang]['text']
						}
					},
					"footer": *[_type == "footer"][0]{
						email,
						"bottomText": bottomText[$lang]['text'],
						links[]{
							visibility,
							"href": link.href,
							"target": link.target,
							"text": link.text[$lang]['text']
						},
						"pages": *[_type == "page" && _lang == $lang]{
							parent,
						  	slug
						}
					},
					"settings": *[_type == "settings"][0]{
						"banner": banner[$lang]['banner'],
						"name": name[$lang]['name'],
						radio{
							defaultChannel,
							channels{
								blue{
									invert,
									key,
									"text": content[$lang]['text'],
									"url": content[$lang]['url'],
								},
								red{
									invert,
									key,
									"text": content[$lang]['text'],
									"url": content[$lang]['url'],
								},
								green{
									invert,
									key,
									"text": content[$lang]['text'],
									"url": content[$lang]['url'],
								}
							}
						}
					},
        }`
        const data = await client.fetch(query, { lang });
        res.end(JSON.stringify({ ...data }));
    } catch (err) {
        res.writeHead(500, {
            'Content-Type': 'application/json'
        });
        res.end(JSON.stringify({
            message: err.message
        }));
    }
};