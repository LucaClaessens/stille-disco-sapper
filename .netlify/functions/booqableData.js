const booqable = {
    apiKey: process.env.BOOKABLE_API_KEY
};

exports.handler = async function (event) {
    // Return available booqable data
    // see: https://docs.netlify.com/functions/build-with-javascript/
    return {
        statusCode: 200,
        body: JSON.stringify({ message: "Is in da process" })
    };
}