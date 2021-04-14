# Stille Disco Content Management System
The content managment system for Stille Disco is encapsulated in this folder. We utilize [Sanity Studio](https://www.sanity.io/studio) for the entire CMS and database solution. The CMS is a highly configurable react app that is deployed to netlify along with the frontend.
### Development

#### Getting started
In order to get started with development of the CMS, catch up with the Sanity Docs and examples. We've decided to work with this environment because of the extensive documentation and ease of customization.

#### Migrating data between environments
In order to [migrate](https://www.sanity.io/docs/migrating-data#1-export) data between environments, for example at a new release. We can move data by exporting data from the development environment and importing into the production environment through the sanity CLI.

#### Querying the database
In order to get familiar with the database and the way we use it, it's possible to utilize the [Vision plugin](https://www.sanity.io/docs/the-vision-plugin). The plugin is accessible behind the eye icon in the top bar of the Sanity Studio. In the playground we can query documents using [GROQ](https://www.sanity.io/docs/how-queries-work). GROQ is sanity's own query language, somewhat similar to GraphQL. The frontend also utilizes GROQ queries to fetch content from the CMS.

### Environments
The CMS is configured with a development and production dataset, both containing their own cms client. The production dataset is deployed from the `main` branch, the development dataset from the `www-tst` branch. 

Environment specific properties are managed in the `/config/dashboardConfig` file. At buildtime the __SANITY_STUDIO_ACTIVE_ENV__ variable is inferred to build with the proper settings. Extending environment dependant functionality can be done following this pattern.
