

# Stille disco
[![Netlify Status](https://api.netlify.com/api/v1/badges/256c76ae-1e9a-49ee-87ec-7f63d07b35f8/deploy-status)](https://app.netlify.com/sites/stille-disco-sapper/deploys)

[🤠 check out the preview environment](https://www-tst.stilledisco.eu)

This repository contains the CMS and the frontend + backend code for the Stille Disco project. The frontend contains an overview of events, rental information and a rental funnel by default, other pages are configurable via the cms. Multilanguage support is baked into the application.

# Architecture
### High-level overview
The environment uses a headless architecture, meaning that content management and presentation are completely separated. The CMS is fully disconnected from the frontend. The biggest advantage to this approach is that the CMS can be expanded into a multi-channel solution that can also, for example, be used as a datasource for events.

The frontend utilizes a serializing strategy provided by an SDK from the CMS provider, meaning it's not fully independent from the backend.

The utilized stack is as follows:
- content management with [Sanity Studio](https://www.sanity.io)
- CI/CD, hosting, forms, webhooks and serverless functions provided by [Netlify](https://www.netlify.com)
- Frontend built with [Sapper](https://sapper.svelte.dev/) and [Tailwind](https://tailwindcss.com/)
- Packages and build/development scripts are managed with [Lerna](https://lerna.js.org/)

More documentation can be found in the [CMS README](studio/README.md) and [Frontend README](web/README.md).

# Local development and deployment
### Getting started
To get started with local development, ensure [netlify CLI](https://docs.netlify.com/cli/get-started/#installation) is installed globally.

Start off by running `npm install`, this will install packages for all projects. As of now it's unfortunately required to use npm instead of yarn, because the system that caches node-modules in netlify is incompatible with yarn (read: using yarn seems to crash the CI/CD pipeline).

After gaining login credentials to the stille disco project, ensure that you have linked the netlify CLI to the `stille-disco-sapper` project by using `netlify link`.

Once that is taken care of, running `netlify dev` from the root directory of the project should spin up both the CMS and a development server, proxied by netlify so serverless functions can be accessable from the dev environment.

If you run into issues, troubleshoot the [netlify dev docs](https://docs.netlify.com/cli/get-started/#netlify-dev).


### Environment
The CMS, Serverless functions and Frontend all rely on environment variables that are injected during build time.
During development, the netlify CLI takes care of injecting these variables into our development build.

#### Global configuration: 
Global configuration is stored in netlify's environment settings tab. Things like API keys and tokens should go here. These settings are accessible under `Site settings > Build & deploy > Environment`.

#### Branch dependant configuration
Branch dependant configuration is stored in the `netlify.toml` file residing in the project root. This allows for more granular control over what values will be injected at build time.

Settings are stored in the following schema:
```toml
[context.main.environment]
SANITY_STUDIO_API_DATASET = 'production'
[context.www-tst.environment]
SANITY_STUDIO_API_DATASET = 'development'
```

As a rule of thumb, take into account that this file is commited to github and things like api keys and secrets should __NEVER__ be stored here.

### Serverless functions
In order to hide sensitive data, we utilize serverless functions to do API requests to booqable and stager. In the project root there is a `functions` folder. The files contained in this folder are being compiled by netlify at build time and used to deploy serverless functions.

Because we proxy the development server to the same port we run the netlify functions on locally, it's possible to develop serverless functions along with the frontend in realtime. Changes to the files will be detected and compiled in real-time.

For more information, visit [the documentation](https://docs.netlify.com/functions/overview/).
### Branch deployments
Netlify automatically deploys new changes commited to master on GitHub. If you want to change deployment branch, do so in [build & deploy settings on Netlify](https://www.netlify.com/docs/continuous-deployment/#branches-deploys).

### Forms
Webforms that are filled in the frontend are handled by Netlify. The form settings are available under `Site settings > Forms`.

Received forms are stored in netlify and can be configured to send outgoing notifications via either webhooks, slack or email. In the CMS, the `Form styled content block` can be configured with textarea and input area forms.

![Existing form component types](https://raw.githubusercontent.com/LucaClaessens/stille-disco-sapper/www-tst/assets/documentation/form_blocks.png "Existing form component types")

These forms are submitted to netlify based on the name property of the field. These have to be unique.


# Moving forward and maintenance

### Sapper deprecation
During the development of this project, sapper has been denied a v1.0 release, if any big changes in the frontend will be considered in the future, it might be worthwhile to migrate to [SvelteKit](https://kit.svelte.dev/), which now rendered Sapper as deprecated.


