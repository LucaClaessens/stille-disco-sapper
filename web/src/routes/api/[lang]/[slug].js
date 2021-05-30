import client from "../../../sanityClient";

export async function get(req, res) {
  try {
    const { lang, slug } = req.params;
    const filter = '*[_type == "page" && _lang == $lang && slug == $slug][0]';
    const projection = `{
            ...,
            body[]{
            ...,
            location->,
            referral->
            }
        }`;
    const settings = await client.fetch(filter + projection, {
      lang,
      slug,
    });
    res.end(JSON.stringify({ ...settings }));
  } catch (err) {
    res.writeHead(500, {
      "Content-Type": "application/json",
    });

    res.end(
      JSON.stringify({
        message: err.message,
      })
    );
  }
}
