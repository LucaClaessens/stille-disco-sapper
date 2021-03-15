import { getEnvSites } from "./config/buildHooks";

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
              sites: getEnvSites(process.env.SANITY_STUDIO_ACTIVE_ENV)
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
