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
        'getting-started/installation',
        'getting-started/quick-start',
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
        'features/content-extraction',
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
  ],
};

export default sidebars;
