import fetch from "node-fetch";

const domain = "stille-disco";
const key = "API_KEY_HERE";

const createCart = async (order) => {
  const endpoint = `https://${domain}.booqable.com/api/1/cart`;

  const orderData = await fetch(endpoint, {
    method: "post",
    body: JSON.stringify(order),
    headers: { "Content-Type": "application/json" },
  }).then((res) => res.json());

  return orderData;
};

const bookItems = async (orderId, ids) => {
  const endpoint = `https://${domain}.booqable.com/api/1/orders/${orderId}/book?api_key=${key}`;

  const items = await fetch(endpoint, {
    method: "post",
    body: JSON.stringify(ids),
    headers: { "Content-Type": "application/json" },
  }).then((res) => res.json());

  return items;
};

export async function post(req, res) {
  try {
    const { order, ids, cartId } = req.body;

    const orderData = await createCart(order);
    await bookItems(orderData.id, ids);

    res.end(JSON.stringify(orderData));
  } catch (err) {
    console.log({ err });
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
