# Glossary

Key terms and concepts used throughout DocWeb documentation.

## A

### Anchor Node
A URL discovered from navigation elements (nav, aside, header) that serves as a structural reference point in the graph. Anchor nodes have an `importanceScore` of 1.0.

## B

### BM25
Best Matching 25 - a probabilistic ranking function used for keyword-based search. DocWeb uses BM25 alongside vector search for [hybrid retrieval](../features/rag-chatbot.md#hybrid-search).

## C

### Cluster
A grouping of related URLs based on their path segments and topic keywords. URLs can belong to multiple overlapping clusters (e.g., `/products/api-gateway` belongs to both `/products` and `/api`).

### Cluster Hull
A visual boundary drawn around nodes belonging to the same cluster, calculated using d3-polygon convex hulls.

### Content Category
Classification of a URL as `primary` (core documentation), `support` (FAQs, guides), `utility` (search, login), or `unknown`.

## D

### Dex
DocWeb's AI chatbot assistant powered by Google Gemini 2.5 Flash. Dex provides source-cited answers using RAG (Retrieval-Augmented Generation).

### Discovery
The process of finding and cataloging all URLs on a documentation site using the [Waterfall Discovery](../core-concepts/waterfall-discovery.md) algorithm.

## E

### Embedding
A 768-dimensional vector representation of text content, generated using Google's text-embedding-004 model. Used for semantic similarity search.

## F

### ForceAtlas2
A physics-based graph layout algorithm that positions related nodes closer together. Used in the [Sigma.js Visualization](../features/visualization.md).

## G

### Global Cache
Shared caching layer that stores discovered URLs, scraped content, and embeddings across all users. Reduces redundant crawling and improves performance.

## H

### Hybrid Search
Search methodology combining vector similarity (70%) and BM25 keyword matching (30%) for optimal retrieval accuracy.

## J

### JIT Scraping
Just-in-Time scraping - when Dex needs content from a page that hasn't been scraped yet, it fetches and indexes it on-demand during the chat interaction.

## N

### Nav-Scrape
Priority 0 discovery stage that extracts structural links from navigation elements, capturing link text for use as page titles.

### Neural Map
The interactive graph visualization of a documentation site's structure, rendered using Sigma.js and WebGL.

## P

### Priority Score
A 0-100 score (lower = more important) assigned to each URL based on documentation keywords, path depth, and URL patterns.

| Score Range | Priority Level |
|-------------|----------------|
| 0-25 | Critical |
| 26-45 | High |
| 46-65 | Medium |
| 66-100 | Low |

## R

### RAG
Retrieval-Augmented Generation - an AI technique that grounds LLM responses in retrieved documentation content, eliminating hallucinations.

## S

### Session
A saved discovery instance containing all URLs, scraped content, chat history, and graph state for a specific documentation site.

### Structural Node
A URL found in navigation elements that defines the site's information architecture. These nodes have higher importance scores.

## T

### Thinking Steps
The reasoning process Dex displays when answering questions, showing how it searched, evaluated sources, and formulated its response.

## W

### Waterfall Discovery
DocWeb's multi-stage URL discovery algorithm: Nav-Scrape → Sitemap Discovery → Navigation Crawl → Merge & Classify. See [Waterfall Discovery](../core-concepts/waterfall-discovery.md).
