import { handler as getBooqableData } from './booqableData';

exports.handler = async (event, context) => {
    if (event.httpMethod === 'GET') {
        getBooqableData(event)
    } else if (event.httpMethod === 'POST') {
        //... handle redirects or some ish like this
        return {
            statusCode: 200,
            body: JSON.stringify({ message: "Is in da process too" })
        };
    } else {
        return {
            statusCode: 405,
            body: JSON.stringify({ err: "Method not allowed" })
        };
    }
}