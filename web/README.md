# Stille Disco frontend

### Consuming content from the CMS

### Development
We utilize Sapper as backbone of our frontend development. This bring us out of the box SSR and a highly performant bundle. In order to start developing, please read up on the workings of Sapper as it is a very opinionated system with many gotcha's and quirks.

To get started, read the [Sapper docs](https://sapper.svelte.dev/docs#Introduction).

### Building
One important thing while building the frontend to keep in mind is that ALL pages have to be discoverable in some path via the root path. In order to achieve this, we've included the following snippet in `routes/index.svelte`.

```svelte
{#each languageParams as param}
  <a href={param} class="hidden">{param}</a>
{/each}
```

this ensures all language roots are discoverable from the generic index file.

A repercussion of using sapper is that dynamic pages generated in the CMS that are not linked to in any other page will __not__ be included in the build. It's entirely possible to build a workaround, but for now one does not exist.

#### API Routes
Another part of sapper's all-in-one approach is that the frontend bundle includes API routes. In the `src/routes/api/[lang]` folder, we find all the endpoints available to the frontend (besides the netlify functions), these files are structured to do crud operations and behave like express functions. Most endpoints are solely engaged with querying the CMS via the [sanity client library](https://www.npmjs.com/package/@sanity/client).

One thing to keep in mind is that an API route can not be equal to the name of a folder in the frontend routes, this is a known bug that causes internal errors in the sapper compiler at build time. For this reason, the files `rental-query` and `events-query` are not following the convention other files do.

### Testing
The project is lacking a thorough testing strategy, but utilizes cypress to run integration and e2e tests to verify crucial paths and content are present. These tests are not integrated into githooks or CI/CD, and are only available as a quick way to automate manual testing.

[Cypress](https://www.cypress.io/) is an advanced test runner that allows for easy validation of app behavior and supports features like time travelling, automatic waiting and off-the-shelf autoreloading.

Apart from the checkout funnel there is no complex component behavior, leaving unit tests out of the scope of the project for now.
