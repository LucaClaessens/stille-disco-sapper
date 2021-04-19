export const getEnvSites = (env) => {
    return env === 'development' ?
        [
            {
                buildHookId: '607d410e815f4cf8076c6cfc',
                title: 'Sanity studio (dev)',
                name: 'stille-disco-sapper-studio',
                apiId: '05bf6169-557f-4c38-9d9c-1dd2f7e631bc'
            },
            {
                buildHookId: '607d40baa4ca1268db773bc6',
                title: 'Stille Disco (dev)',
                name: 'stille-disco-sapper',
                apiId: '256c76ae-1e9a-49ee-87ec-7f63d07b35f8'
            }
        ] :
        [
            {
                buildHookId: '5ff471e90ca292008b5b9c10',
                title: 'Sanity Studio',
                name: 'stille-disco-sapper-studio',
                apiId: '05bf6169-557f-4c38-9d9c-1dd2f7e631bc'
            },
            {
                buildHookId: '5ff471e938a80e00977c64ea',
                title: 'Stille Disco Websites',
                name: 'stille-disco-sapper',
                apiId: '256c76ae-1e9a-49ee-87ec-7f63d07b35f8'
            }
        ]
}

export const getEnvFrontend = (env) => env === 'development' ? 'https://www-tst.stilledisco.eu' : 'https://www.stilledisco.eu';
