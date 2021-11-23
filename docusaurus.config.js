// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
    title: 'Elderbot Docs',
    tagline: 'How *does* one use this thing?',
    url: 'https://docs.elderbot.xyz',
    baseUrl: '/',
    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',
    favicon: 'img/favicon.ico',
    organizationName: 'BizzyLive', // Usually your GitHub org/user name.
    projectName: 'ElderBot', // Usually your repo name.

    presets: [
        [
            '@docusaurus/preset-classic',
            /** @type {import('@docusaurus/preset-classic').Options} */
            ({
                docs: {
                    sidebarPath: require.resolve('./sidebars.js'),
                    // Please change this to your repo.
                    editUrl: 'https://github.com/BizzyLive/elderbot-issues',
                    routeBasePath: '/'
                },
                theme: {
                    customCss: require.resolve('./src/css/custom.css'),
                },
            }),
        ],
    ],

    themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
        ({
        navbar: {
            title: 'ElderBot Docs',
            logo: {
                alt: 'ElderBot logo',
                src: 'img/logo.png',
            },
            items: [{
                href: 'https://github.com/BizzyLive/elderbot-docs',
                label: 'GitHub',
                position: 'right',
            }, ],
        },
        prism: {
            theme: lightCodeTheme,
            darkTheme: darkCodeTheme,
        },
        colorMode: {
            defaultMode: 'dark'
        }
    }),
};

module.exports = config;