export const getEnvSites = (env) => {
    return env === 'development' ?
        [
            {
                buildHookId: '60327cf0f3ce85967ba01e48',
                title: 'Sanity studio (dev)',
                name: 'stille-disco-sapper-studio',
                apiId: '05bf6169-557f-4c38-9d9c-1dd2f7e631bc'
            },
            {
                buildHookId: '60327de8b2938b9b27847068',
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
