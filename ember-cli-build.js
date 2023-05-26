'use strict';

const EmberApp = require('ember-cli/lib/broccoli/ember-app');
const postcssImport = require('postcss-import');
const autoprefixer = require('autoprefixer');
const postcssPresetEnv = require('postcss-preset-env');
const tailwind = require('tailwindcss');
const isGithubPagesEnv = process.env.GITHUB_PAGES_ENV === 'true';

module.exports = function (defaults) {
    let app = new EmberApp(defaults, {
        storeConfigInMeta: false,

        fingerprint: {
            enabled: isGithubPagesEnv,
        },

        multiIndex: {
            targets: [
                {
                    outputPath: 'error.html',
                },
                {
                    outputPath: '404.html',
                },
            ],
        },

        'ember-prism': {
            theme: 'okaidia',
            components: ['markup-templating', 'markdown', 'json', 'javascript', 'typescript', 'bash', 'php', 'python', 'ruby', 'java', 'csharp'],
            plugins: ['line-highlight', 'line-numbers'],
        },

        snippetPaths: ['snippets'],
        snippetExtensions: ['js', 'json', 'sh', 'bash', 'php', 'py', 'rb'],

        postcssOptions: {
            compile: {
                cacheInclude: [/.*\.(css|scss|hbs)$/, /.tailwind\.js$/],
                plugins: [postcssImport({ path: 'node_modules' }), autoprefixer, postcssPresetEnv({ stage: 1 }), tailwind('./tailwind.js')],
            },
        },
    });

    return app.toTree();
};
