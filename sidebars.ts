import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
const sidebars: SidebarsConfig = {
  docsSidebar: [
    {
      type: 'category',
      label: 'Getting Started',
      items: [
        'getting-started/index',
        'getting-started/quick-start',
        'getting-started/installation',
        'getting-started/glossary',
      ],
    },
    {
      type: 'category',
      label: 'Core Concepts',
      items: [
        'core-concepts/index',
        'core-concepts/architecture',
        'core-concepts/waterfall-discovery',
        'core-concepts/url-classification',
        'core-concepts/limitations',
      ],
    },
    {
      type: 'category',
      label: 'Features',
      items: [
        'features/index',
        'features/visualization',
        'features/rag-chatbot',
        'features/search',
        'features/content-extraction',
        'features/sessions',
        'features/caching',
      ],
    },
    {
      type: 'category',
      label: 'Use Cases',
      items: [
        'use-cases/index',
        'use-cases/technical-docs',
        'use-cases/seo-auditing',
        'use-cases/legal-research',
        'use-cases/competitor-intelligence',
      ],
    },
    {
      type: 'category',
      label: 'API Reference',
      items: [
        'api-reference/index',
        'api-reference/cloud-functions',
        'api-reference/firestore-schema',
        'api-reference/frontend-hooks',
      ],
    },
    {
      type: 'category',
      label: 'Account & Billing',
      items: [
        'account/index',
        'account/pricing',
        'account/credits',
        'account/subscription',
      ],
    },
    {
      type: 'category',
      label: 'Security',
      items: [
        'security/index',
        'security/overview',
        'security/data-protection',
      ],
    },
    {
      type: 'category',
      label: 'Support',
      items: [
        'support/index',
        'support/faq',
        'support/troubleshooting',
      ],
    },
    {
      type: 'category',
      label: 'Legal',
      items: [
        'legal/index',
        'legal/terms',
        'legal/privacy',
        'legal/acceptable-use',
      ],
    },
    'changelog',
  ],
};

export default sidebars;
