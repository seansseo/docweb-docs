# Architecture

DocWeb's architecture is designed for scalability and real-time performance.

## System Overview

```
                                +------------------+
                                |   Firebase Auth  |
                                +--------+---------+
                                         |
+------------------+          +----------v-----------+
|                  |   HTTPS  |                      |
|  Next.js Frontend+---------->  Firebase Functions  |
|  (React 19)      |          |  (Node.js 20)        |
|                  <----------+                      |
+--------+---------+  Realtime+----------+-----------+
         |            Firestore          |
         |                               |
+--------v---------+          +----------v-----------+
|                  |          |                      |
|  Sigma.js Graph  |          |  Google Gemini AI    |
|  Visualization   |          |  (2.5 Flash)         |
|                  |          |                      |
+------------------+          +----------+-----------+
                                         |
                              +----------v-----------+
                              |                      |
                              |  Firestore Database  |
                              |  + Global Embeddings |
                              |                      |
                              +----------------------+
```

## Frontend Stack

| Technology | Version | Purpose |
|------------|---------|---------|
| Next.js | 16.1.1 | React framework with App Router |
| React | 19.2.3 | UI library |
| TypeScript | 5.x | Type safety |
| Tailwind CSS | 4.x | Styling |
| Sigma.js | 3.0.2 | WebGL graph rendering |
| @react-sigma/core | 5.0.6 | React bindings for Sigma |
| graphology | 0.26.0 | Graph data structure |
| d3-polygon | 3.0.1 | Cluster hull calculations |
| Firebase | 12.7.0 | Auth, Firestore, Functions client |

## Backend Stack (Cloud Functions)

| Technology | Version | Purpose |
|------------|---------|---------|
| Node.js | 20 | Runtime |
| firebase-functions | 6.3.0 | Cloud Functions framework |
| firebase-admin | 13.0.2 | Admin SDK |
| @google/generative-ai | 0.24.1 | Gemini API client |
| Cheerio | 1.0.0 | HTML parsing |
| Turndown | 7.2.2 | HTML to Markdown conversion |
| Axios | 1.7.9 | HTTP client |
| robots-parser | 3.0.1 | robots.txt parsing |
| Stripe | 20.2.0 | Payment processing |
| p-limit | 3.1.0 | Concurrency control |

## AI Models

| Model | Purpose | Dimensions |
|-------|---------|------------|
| gemini-2.5-flash | Chat responses, content analysis | N/A |
| text-embedding-004 | Vector embeddings | 768 |

## Data Flow

1. **User Authentication**: Firebase Auth (Email/Password or Google OAuth)
2. **[Discovery](waterfall-discovery.md)**: Waterfall algorithm crawls the site structure
3. **[URL Classification](url-classification.md)**: Pages are categorized and prioritized
4. **Real-time Sync**: Firestore listeners push updates to the frontend
5. **[Visualization](../features/visualization.md)**: Sigma.js renders the graph with ForceAtlas2 layout
6. **Content Scraping**: Cheerio extracts HTML, Turndown converts to Markdown
7. **Embedding Generation**: Gemini text-embedding-004 creates 768-dim vectors
8. **[RAG Chat](../features/rag-chatbot.md)**: Hybrid search retrieves context, Gemini generates responses

## Global Caching Layer

All caching is shared across users for optimal performance:

| Cache Type | Collection | TTL |
|------------|------------|-----|
| Domain Cache | `artifacts/global/domainCache` | 24 hours |
| Page Cache | `artifacts/global/pageCache` | 24 hours |
| Embeddings | `artifacts/global/embeddings` | Permanent |

See [Caching](../features/caching.md) for more details.
