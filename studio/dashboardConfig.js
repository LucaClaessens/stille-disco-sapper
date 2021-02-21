export default {
  widgets: [
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
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
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/LucaClaessens/stille-disco-sapper',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://stille-disco-sapper.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
