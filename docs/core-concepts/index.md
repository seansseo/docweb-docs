# Core Concepts

DocWeb is built on several key principles that differentiate it from standard AI models and traditional documentation tools.

## Real-Time Retrieval vs. Outdated Training

Most LLMs have a knowledge cut-off. DocWeb doesn't rely on a memory bank; it crawls the live site the moment you request it. This provides **Just-in-Time intelligence**.

## Grounded Context

By using Retrieval-Augmented Generation (RAG), DocWeb strictly limits the AI's "brain" to the Markdown data scraped from the specific website, eliminating hallucinations. Every response from **Dex** includes source citations.

## Five-Phase Data Flow

1. **[Discovery Phase](waterfall-discovery.md)**: User enters URL → Waterfall discovery (robots.txt → sitemaps → navigation crawl) → URLs saved to Firestore
2. **[Visualization Phase](../features/visualization.md)**: Frontend subscribes to Firestore → Real-time graph updates via Sigma.js → ForceAtlas2 layout
3. **[Scraping Phase](../features/content-extraction.md)**: On-demand or auto-scrape → Content extraction via Cheerio → Markdown conversion → Stored in Firestore
4. **Embedding Phase**: Scraped content → Chunked text (4000 chars, 400 overlap) → Gemini embeddings (768-dim) → Global embeddings collection
5. **[Chat Phase](../features/rag-chatbot.md)**: User query → Hybrid search (vector + BM25) → Context retrieval → Gemini response → Source citations

## Core Algorithms

| Algorithm | Purpose |
|-----------|---------|
| [Waterfall Discovery](waterfall-discovery.md) | Multi-stage URL discovery |
| [Priority Scoring](url-classification.md) | Rank URLs by importance (0-100) |
| [Cluster Assignment](url-classification.md#cluster-assignment) | Overlapping topic groupings |
| [Hybrid Search](../features/rag-chatbot.md#hybrid-search) | Vector + keyword retrieval |
| ForceAtlas2 | Physics-based graph layout |

## Key Technical Decisions

- **Global Caching**: All embeddings and scraped content are shared across users to reduce redundant work
- **Overlapping Clusters**: URLs can belong to multiple topic clusters (e.g., `/api/webhooks` is in both `/api` and `/webhooks`)
- **768-Dimensional Embeddings**: Using Google's text-embedding-004 model for semantic similarity

Check out our [Architecture](architecture.md) for a deeper dive.
