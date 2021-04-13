

# Stille disco
[![Netlify Status](https://api.netlify.com/api/v1/badges/256c76ae-1e9a-49ee-87ec-7f63d07b35f8/deploy-status)](https://app.netlify.com/sites/stille-disco-sapper/deploys)

[🤠 check out the preview environment](https://www-tst.stilledisco.eu)

This repository contains the CMS and the frontend + backend code for the Stille Disco environment.

`TODO:` do we need more generic information?

# Architecture
## High-level overview
The environment uses a headless architecture, meaning that content management and presentation are completely separated. The CMS is fully disconnected from the frontend. The biggest advantage to this approach is that the CMS can be expanded into a multi-channel solution that can also, for example, be used as a datasource for events.

The frontend utilizes a serializing strategy provided by an SDK from the CMS provider, meaning it's not fully independent from the backend.

The utilized stack is as follows:
- content management with [Sanity Studio](https://www.sanity.io)
- CI/CD, hosting, webhooks and serverless functions provided by [Netlify](https://www.netlify.com)
- Frontend built with [Sapper](https://sapper.svelte.dev/) and [Tailwind](https://tailwindcss.com/)
- Packages and build/development scripts are managed with [Lerna](https://lerna.js.org/)

# Local development and deployment
## Getting started
To get started with local development, ensure [netlify CLI](https://docs.netlify.com/cli/get-started/#installation) is installed globally.

Start off by running `npm install`, this will install packages for all projects.

After gaining login credentials to the stille disco project, ensure that you have linked the netlify CLI to the `stille-disco-sapper` project.

Once taken care of, running `netlify dev` from the root directory of the project should spin up both the CMS and a development server, proxied by netlify so serverless functions can be accessable from the dev environment.

If you run into issues, troubleshoot the [netlify dev docs](https://docs.netlify.com/cli/get-started/#netlify-dev).


## Environment
The CMS, Serverless functions and Frontend all rely on environment variables that are injected during build time.
During development, the netlify CLI takes care of injecting these variables into our development build.

### Global configuration: 
Global configuration is stored in netlify's environment settings tab. Things like API keys and tokens should go here.

### Branch dependant configuration
Branch dependant configuration is stored in the `netlify.toml` file residing in the project root. This allows for more granular control over what values will be injected at build time.

Settings are stored in the following schema:
```toml
[context.main.environment]
SANITY_STUDIO_API_DATASET = 'production'
[context.www-tst.environment]
SANITY_STUDIO_API_DATASET = 'development'
```

As a rule of thumb, take into account that this file is commited to github and things like api keys and secrets should __NEVER__ be stored here.

## Serverless functions
In order to hide sensitive data, we utilize serverless functions to do API requests to booqable and stager. In the project root there is a `functions` folder. The files contained in this folder are being compiled by netlify at build time and used to deploy serverless functions.

Because we proxy the development server to the same port we run the netlify functions on locally, it's possible to develop serverless functions along with the frontend in realtime. Changes to the files will be detected and compiled in real-time.

For more information, visit [the documentation](https://docs.netlify.com/functions/overview/).
## Branch deployments
Netlify automatically deploys new changes commited to master on GitHub. If you want to change deployment branch, do so in [build & deploy settings on Netlify](https://www.netlify.com/docs/continuous-deployment/#branches-deploys).

## Moving forward and maintenance
During the development of this project, sapper has been denied a v1.0 release, if any big changes in the frontend will be considered in the future, it might be worthwhile to migrate to [SvelteKit](https://kit.svelte.dev/), which now rendered Sapper as deprecated.

# TODO

- specify Sanity specifics in /studio
   - Dashboard
   - Schema
   - Files / media
   - Vision plugin
   - Environment specific functions
   - Gotcha's
      - ENV variable naming schema
   - Plugins
- specify Frontend specifics in /web
   - SSR
   - language splitting
   - api routes
   - BlockContent
   - Unit tests, or the lack thereof


