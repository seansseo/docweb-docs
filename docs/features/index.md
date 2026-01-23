# Features

DocWeb offers a suite of tools to visualize and interact with digital content.

## Core Features

### [Sigma.js Visualization](visualization.md)
High-performance, interactive graph rendering using WebGL. See your documentation as a neural map with cluster boundaries, zoom controls, and real-time updates.

### [Dex AI Chatbot](rag-chatbot.md)
Meet **Dex**, your AI documentation assistant. Powered by Google Gemini 2.5 Flash with RAG (Retrieval-Augmented Generation), Dex provides accurate, source-cited answers with transparent thinking steps.

### [Content Extraction](content-extraction.md)
Intelligent scraping converts HTML to clean Markdown using Cheerio and Turndown. Auto-scrape prioritizes structural nodes while JIT scraping fetches content on-demand during chat.

### [Hybrid Search](search.md)
Combines vector embeddings (70%) with BM25 keyword matching (30%) for optimal retrieval. Field weights prioritize title (5x) and description (2x) over content.

### [Session Management](sessions.md)
Save multiple documentation discoveries as sessions. Switch between projects, track chat history, and access your maps across browser sessions.

### [Global Caching](caching.md)
Shared caching layer reduces redundant crawling. Domain cache, page cache, and embeddings are stored globally with 24-hour TTL.

## Feature Comparison by Tier

| Feature | Free | Pro | Max |
|---------|------|-----|-----|
| Daily Credits | 3 | 10 | 100 |
| Max Sessions | 5 | 20 | 20 |
| Discovery | Yes | Yes | Yes |
| Chat with Dex | Yes | Yes | Yes |
| Global Cache Access | Yes | Yes | Yes |

Explore how these features are used in our [Use Cases](../use-cases/index.md).
