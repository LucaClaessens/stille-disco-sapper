import { getEnvFrontend, getEnvSites } from "./config/dashboardConfig";

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
          { title: 'Frontend', value: getEnvFrontend(process.env.SANITY_STUDIO_ACTIVE_ENV), category: 'apps' }
        ]
      }
    },
    {
      name: 'document-list',
      options: { title: 'Recently added pages', order: '_createdAt desc', types: ['page'] },
      layout: { width: 'small', height: 'small' }
    },
    {
      name: 'document-list',
      options: { title: 'Recently added products', order: '_createdAt desc', types: ['product'] },
      layout: { width: 'small', height: 'small' }
    },
    { name: 'project-users', layout: { height: 'small' } }
  ]
}
