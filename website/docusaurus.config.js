// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github')
const darkCodeTheme = require('prism-react-renderer/themes/dracula')

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'ComposeDB',
  tagline: 'Composable data on Ceramic',
  url: 'https://ceramicstudio.github.io',
  baseUrl: '/js-composedb/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  // GitHub pages deployment config.
  organizationName: 'ceramicstudio',
  projectName: 'js-composedb',
  trailingSlash: false,
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],
  plugins: [
    [
      'docusaurus-plugin-typedoc',
      {
        tsconfig: '../tsconfig.docs.json',
        sidebar: {
          autoConfiguration: false,
        },
      },
    ],
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'ComposeDB',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'introduction',
            position: 'left',
            label: 'Docs',
          },
          {
            to: 'docs/api/modules/client',
            activeBasePath: 'docs/api',
            position: 'left',
            label: 'API',
          },
          {
            href: 'https://github.com/ceramicstudio/js-composedb',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Getting Started',
                to: '/docs/installation',
              },
              {
                label: 'Guides',
                to: '/docs/guides/concepts-overview',
              },
              {
                label: 'API',
                to: '/docs/api/modules/client',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Forum',
                href: 'https://forum.ceramic.network/',
              },
              {
                label: 'Discord',
                href: 'http://chat.ceramic.network/',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/ceramicnetwork',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Ceramic documentation',
                href: 'https://developers.ceramic.network',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/ceramicstudio/js-composedb',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} 3Box Labs.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
}

module.exports = config
