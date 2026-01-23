import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'DocWeb',
  tagline: 'Visual Intelligence for Digital Content',
  headTags: [
    {
      tagName: 'link',
      attributes: {
        rel: 'icon',
        type: 'image/png',
        href: '/docs/img/dex-black.png',
        media: '(prefers-color-scheme: light)',
      },
    },
    {
      tagName: 'link',
      attributes: {
        rel: 'icon',
        type: 'image/png',
        href: '/docs/img/dex-white.png',
        media: '(prefers-color-scheme: dark)',
      },
    },
    {
      tagName: 'link',
      attributes: {
        rel: 'icon',
        type: 'image/png',
        href: '/docs/img/dex-black.png',
      },
    },
  ],

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://docweb.net',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/docs/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'seansseo', // Usually your GitHub org/user name.
  projectName: 'docweb-docs', // Usually your repo name.

  onBrokenLinks: 'throw',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          routeBasePath: '/',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/dex-black.png',
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'DocWeb',
      logo: {
        alt: 'DocWeb Logo',
        src: 'img/dex-black.png',
        srcDark: 'img/dex-white.png',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'docsSidebar',
          position: 'left',
          label: 'Docs',
        },
        {
          href: 'https://docweb.net',
          label: 'Try DocWeb',
          position: 'right',
        },
        // {to: '/blog', label: 'Blog', position: 'left'},
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
              to: '/getting-started/',
            },
            {
              label: 'Features',
              to: '/features/',
            },
            {
              label: 'API Reference',
              to: '/api-reference/',
            },
          ],
        },
        {
          title: 'Account',
          items: [
            {
              label: 'Pricing',
              to: '/account/pricing',
            },
            {
              label: 'Credits',
              to: '/account/credits',
            },
          ],
        },
        {
          title: 'Legal & Security',
          items: [
            {
              label: 'Terms of Service',
              to: '/legal/terms',
            },
            {
              label: 'Privacy Policy',
              to: '/legal/privacy',
            },
            {
              label: 'Security',
              to: '/security/',
            },
            {
              label: 'Bot Information',
              to: '/bot',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Main App',
              href: 'https://docweb.net',
            },
            {
              label: 'Support',
              to: '/support/',
            },
            {
              label: 'Changelog',
              to: '/changelog',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} DocWeb, Inc. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
