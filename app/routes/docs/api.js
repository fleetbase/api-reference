import Route from '@ember/routing/route';
import baseUrl from '../../utils/base-url';

export default class DocsApiRoute extends Route {
    title = 'Fleetbase API Reference';
    description = 'Complete reference documentation for the Fleetbase API. Includes code snippets and examples for our Python, PHP, and Javascript libraries.';

    headTags = [
        // standard meta tags
        {
            type: 'meta',
            tagId: 'meta-description-tag',
            attrs: {
                name: 'description',
                content: this.description,
            },
        },
        {
            type: 'meta',
            tagId: 'meta-robots-tag',
            attrs: {
                name: 'robots',
                content: 'index, follow',
            },
        },
        // opengraph meta tags - facebook
        {
            type: 'meta',
            tagId: 'meta-og-title-tag',
            attrs: {
                property: 'og:title',
                content: this.title,
            },
        },
        {
            type: 'meta',
            tagId: 'meta-og-description-tag',
            attrs: {
                property: 'og:description',
                content: this.description,
            },
        },
        {
            type: 'meta',
            tagId: 'meta-og-type-tag',
            attrs: {
                property: 'og:type',
                content: 'product',
            },
        },
        {
            type: 'meta',
            tagId: 'meta-og-url-tag',
            attrs: {
                property: 'og:url',
                content: baseUrl('docs/api'),
            },
        },
        {
            type: 'meta',
            tagId: 'meta-og-image-tag',
            attrs: {
                property: 'og:image',
                content: baseUrl('images/icon.png'),
            },
        },
        // twitter meta tags
        {
            type: 'meta',
            tagId: 'meta-twitter-card-tag',
            attrs: {
                name: 'twitter:card',
                content: 'summary_large_image',
            },
        },
        {
            type: 'meta',
            tagId: 'meta-twitter-site-tag',
            attrs: {
                name: 'twitter:site',
                content: '@fleetbase_io',
            },
        },
        {
            type: 'meta',
            tagId: 'meta-twitter-title-tag',
            attrs: {
                name: 'twitter:title',
                content: this.title,
            },
        },
        {
            type: 'meta',
            tagId: 'meta-twitter-description-tag',
            attrs: {
                name: 'twitter:description',
                content: this.description,
            },
        },
        {
            type: 'meta',
            tagId: 'meta-twitter-image-src-tag',
            attrs: {
                name: 'twitter:image:src',
                content: baseUrl('images/icon.png'),
            },
        },
        // google+ meta tags
        {
            type: 'meta',
            tagId: 'meta-gplus-name-tag',
            attrs: {
                itemprop: 'name',
                content: this.title,
            },
        },
        {
            type: 'meta',
            tagId: 'meta-gplus-description-tag',
            attrs: {
                itemprop: 'description',
                content: this.description,
            },
        },
        {
            type: 'meta',
            tagId: 'meta-gplus-image-tag',
            attrs: {
                itemprop: 'image',
                content: baseUrl('images/icon.png'),
            },
        },
    ];
}
