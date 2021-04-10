import { i18nOptions } from "../documentTranslation";
export default {
    name: 'settings',
    type: 'document',
    title: 'Settings',
    fieldsets: [
        {
            name: 'radioSpotify',
            title: 'Spotify playlists',
            options: {
                collapsible: true,
                collapsed: false,
            }
        },
        {
            name: 'bannerConfig',
            title: 'Banner configuraton',
            options: {
                collapsible: true,
                collapsed: false,
            }
        },
    ],
    fields: [
        {
            name: 'name',
            type: 'object',
            title: 'Name of website',
            options: i18nOptions,
            fields: [
                {
                    name: 'name',
                    description: 'The base name of the website/brand, configurable per language',
                    title: 'Name of website',
                    type: 'string'
                }
            ]
        },
        {
          name: 'logoImage',
          type: 'mainImage',
          title: 'logo image',
          required: true
      },
        {
            name: 'radio',
            type: 'object',
            title: 'Radio',
            fieldset: 'radioSpotify',
            fields: [
                {
                    name: 'defaultChannel',
                    title: 'Default channel',
                    type: 'string',
                    description: 'The default channel to select when opening the website (red/green/blue)',
                    options: {
                        list: ['red', 'green', 'blue']
                    }
                },
                {
                    name: 'channels',
                    title: 'Channels',
                    type: 'object',
                    description: 'Configuration of the individual radio channels',
                    fields: [
                        {
                            name: 'red',
                            title: 'Red',
                            type: 'radioChannel'
                        },
                        {
                            name: 'blue',
                            title: 'Blue',
                            type: 'radioChannel'
                        },
                        {
                            name: 'green',
                            title: 'Green',
                            type: 'radioChannel'
                        }
                    ]
                }
            ]
        },
        {
            name: 'banner',
            type: 'object',
            title: 'Banner settings',
            description: 'Localized settings for a site-wide notification banner',
            options: i18nOptions,
            fieldset: 'bannerConfig',
            fields: [
                {
                    name: 'banner',
                    type: 'banner',
                    title: 'Banner settings',
                    description: 'Localized settings for a site-wide notification banner'
                }
            ]
        }
    ]
}
