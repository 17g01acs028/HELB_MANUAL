import { themes as prismThemes } from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Helb-Communications-Portal-Manual',

  // Set the production url of your site here
  url: 'https://your-docusaurus-site.example.com',
  baseUrl: '/',

  // GitHub pages deployment config
  organizationName: 'agichimu',
  projectName: 'Helb-Communications-Portal-Manual',

  onBrokenLinks: 'ignore',
  onBrokenMarkdownLinks: 'ignore',

  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'sw'],
  },

  presets: [
    [
      'classic',
      ({
        docs: {
          sidebarPath: './sidebars.js',
          editUrl: 'https://github.com/agichimu/Helb-Communications-Portal-Manual.git',
          routeBasePath: '/',
        },
        blog: false, // Disable blog plugin
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
  /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
      ({
        navbar: {
          logo: {
            alt: 'png',
            src: 'img/helb-logo.png',
          },
          items: [
            {
              type: 'docSidebar',
              sidebarId: 'customTutorialSidebar',
              position: 'left',
              label: 'Helb-Communications-Portal-Manual',
            },
          ],
        },
        prism: {
          theme: prismThemes.github,
          darkTheme: prismThemes.dracula,
        },
      }),
};

export default config;
