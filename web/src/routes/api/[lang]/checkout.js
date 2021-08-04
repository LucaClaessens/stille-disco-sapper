import client from "../../../sanityClient";

export async function get(req, res) {
  try {
    const { lang } = req.params;
    const filter =
      '*[_type == "checkout" && _lang == $lang] | order(dateTime(_updatedAt) desc)[0]';
    const projection = `
        {
            ...,
          checkoutFlow[]{
                ...,
                ...product->
          },
          miscProducts{
            ...,
            products[]->
          }
        }`;
    const settings = await client.fetch(filter + projection, { lang });
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
