import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/docs/bot',
    component: ComponentCreator('/docs/bot', 'a77'),
    exact: true
  },
  {
    path: '/docs/',
    component: ComponentCreator('/docs/', '2a6'),
    exact: true
  },
  {
    path: '/docs/',
    component: ComponentCreator('/docs/', '4e2'),
    routes: [
      {
        path: '/docs/',
        component: ComponentCreator('/docs/', 'bd7'),
        routes: [
          {
            path: '/docs/',
            component: ComponentCreator('/docs/', 'c92'),
            routes: [
              {
                path: '/docs/account/',
                component: ComponentCreator('/docs/account/', 'ee2'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/account/credits',
                component: ComponentCreator('/docs/account/credits', '76e'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/account/pricing',
                component: ComponentCreator('/docs/account/pricing', '9f8'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/account/subscription',
                component: ComponentCreator('/docs/account/subscription', 'a06'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/api-reference/',
                component: ComponentCreator('/docs/api-reference/', '4d7'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/api-reference/cloud-functions',
                component: ComponentCreator('/docs/api-reference/cloud-functions', '358'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/api-reference/firestore-schema',
                component: ComponentCreator('/docs/api-reference/firestore-schema', '106'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/api-reference/frontend-hooks',
                component: ComponentCreator('/docs/api-reference/frontend-hooks', '9aa'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/changelog',
                component: ComponentCreator('/docs/changelog', '74a'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/core-concepts/',
                component: ComponentCreator('/docs/core-concepts/', '48b'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/core-concepts/architecture',
                component: ComponentCreator('/docs/core-concepts/architecture', '0a9'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/core-concepts/limitations',
                component: ComponentCreator('/docs/core-concepts/limitations', 'ea6'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/core-concepts/url-classification',
                component: ComponentCreator('/docs/core-concepts/url-classification', 'efc'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/core-concepts/waterfall-discovery',
                component: ComponentCreator('/docs/core-concepts/waterfall-discovery', '6ad'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/features/',
                component: ComponentCreator('/docs/features/', '433'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/features/caching',
                component: ComponentCreator('/docs/features/caching', 'fe8'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/features/content-extraction',
                component: ComponentCreator('/docs/features/content-extraction', 'aa1'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/features/rag-chatbot',
                component: ComponentCreator('/docs/features/rag-chatbot', 'ff4'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/features/search',
                component: ComponentCreator('/docs/features/search', 'ee1'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/features/sessions',
                component: ComponentCreator('/docs/features/sessions', '36c'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/features/visualization',
                component: ComponentCreator('/docs/features/visualization', 'eb7'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/getting-started/',
                component: ComponentCreator('/docs/getting-started/', 'c1b'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/getting-started/glossary',
                component: ComponentCreator('/docs/getting-started/glossary', '88b'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/getting-started/installation',
                component: ComponentCreator('/docs/getting-started/installation', 'f1f'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/getting-started/quick-start',
                component: ComponentCreator('/docs/getting-started/quick-start', '835'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/legal/',
                component: ComponentCreator('/docs/legal/', '5d1'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/legal/acceptable-use',
                component: ComponentCreator('/docs/legal/acceptable-use', 'eb9'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/legal/privacy',
                component: ComponentCreator('/docs/legal/privacy', 'c11'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/legal/terms',
                component: ComponentCreator('/docs/legal/terms', '5ca'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/security/',
                component: ComponentCreator('/docs/security/', 'b6f'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/security/data-protection',
                component: ComponentCreator('/docs/security/data-protection', 'db5'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/security/overview',
                component: ComponentCreator('/docs/security/overview', 'de5'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/support/',
                component: ComponentCreator('/docs/support/', 'd02'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/support/faq',
                component: ComponentCreator('/docs/support/faq', 'fb9'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/support/troubleshooting',
                component: ComponentCreator('/docs/support/troubleshooting', '80e'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/use-cases/',
                component: ComponentCreator('/docs/use-cases/', '73e'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/use-cases/competitor-intelligence',
                component: ComponentCreator('/docs/use-cases/competitor-intelligence', '5f0'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/use-cases/legal-research',
                component: ComponentCreator('/docs/use-cases/legal-research', 'f6f'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/use-cases/seo-auditing',
                component: ComponentCreator('/docs/use-cases/seo-auditing', '098'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/use-cases/technical-docs',
                component: ComponentCreator('/docs/use-cases/technical-docs', 'ef9'),
                exact: true,
                sidebar: "docsSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
