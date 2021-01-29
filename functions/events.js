import fetch from 'node-fetch';

const stager = {
    token: process.env.STAGER_TOKEN,
};

const fetchEvents = async (currentIndex = 0) => {
    const endpoint = `https://feeds.stager.nl/events?pageIndex=${currentIndex}`;

    const response
        = await fetch(endpoint, {
            method: 'GET',
            headers: {
                'accept': 'application/json;version=V1',
                'Authorization': `Bearer ${stager.token}`
            },
        }).then(res => res.json());

    const { pageIndex, lastPageIndex, events } = response;

    if (pageIndex < lastPageIndex) {
        return [...events, await fetchEvents(pageIndex)]
    } else {
        return events;
    }
}


exports.handler = async function (event) {
    if (event.httpMethod === 'GET') {
        try {
            return {
                statusCode: 200,
                body: JSON.stringify(await fetchEvents())
            };

        } catch (err) {
            return {
                statusCode: 500,
                body: JSON.stringify(err)
            };
        }
    } else {
        return {
            statusCode: 405,
            body: JSON.stringify({ err: "Method not allowed" })
        };
    }


}