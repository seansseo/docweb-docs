---
title: DocWeb Bot
description: Information about the DocWeb web crawler and AI assistant Dex.
---

# DocWeb Bot

A hybrid web crawler and AI agent powering DocWeb's intelligent documentation platform. It performs automated indexing to maintain our visual maps and search index, and enables on-demand, user-directed fetches to provide real-time content summaries through our AI assistant, **Dex**. We respect `robots.txt` and honor `crawl-delay` directives.

## Bot Identification

The DocWeb Bot identifies itself using the following User-Agent string:

`DocWeb-Bot/1.0`

## Purpose

The DocWeb Bot serves two primary functions:

### 1. Intelligent Discovery (Waterfall Crawling)
Our multi-stage discovery process ensures comprehensive URL coverage:

- **Nav-Scrape**: Extract structural links from navigation, aside, and header elements
- **Sitemap Discovery**: Parse robots.txt, process sitemap indexes (up to depth 5), and handle gzip-compressed sitemaps
- **Navigation Crawl**: BFS crawl from base URL (max depth 3) if sitemaps yield fewer than 500 URLs
- **Merge & Classify**: Deduplicate, cluster, and prioritize discovered URLs

### 2. Just-in-Time Content Retrieval
When users interact with **Dex**, our AI chatbot assistant, the bot performs on-demand scraping to:

- Retrieve real-time content for pages not yet in our index
- Extract clean Markdown using Cheerio and Turndown
- Generate vector embeddings (768-dim) for semantic search
- Enable hybrid search combining vector similarity and BM25 keyword matching

## Technical Specifications

| Parameter | Value |
|-----------|-------|
| Max Crawl Depth | 3 |
| Max Sitemap Depth | 5 |
| Request Timeout | 15 seconds |
| Max Retries | 3 |
| Chunk Size | 50 URLs per batch |
| Max URLs Per Source | 10,000 |

## How We Respect Your Site

We aim to be a good citizen of the web:

- **Robots.txt**: We strictly follow the rules defined in your `robots.txt` file
- **Crawl-Delay**: We honor the `crawl-delay` directive to avoid overwhelming your server
- **Rate Limiting**: Built-in concurrency control using p-limit to ensure minimal impact on site performance
- **Intelligent Caching**: 24-hour TTL caching reduces redundant requests to your server
- **Content Hashing**: We track content changes via MD5 hashes to avoid re-scraping unchanged pages

## Opt-Out

If you wish to prevent the DocWeb Bot from crawling your site, you can add the following to your `robots.txt` file:

```text
User-agent: DocWeb-Bot
Disallow: /
```

## About Dex

**Dex** is the AI assistant that powers DocWeb's intelligent chatbot interface. When you interact with Dex:

- Questions are processed using hybrid search (70% vector similarity + 30% keyword matching)
- Relevant documentation chunks are retrieved from our embeddings database
- Responses are generated using Google Gemini 2.5 Flash with full source citations
- Dex displays "thinking steps" to show its reasoning process
- Related pages and suggested topics help guide further exploration

## Contact Us

If you have any questions or concerns regarding the DocWeb Bot or Dex, please contact [seanseo.llc@gmail.com](mailto:seanseo.llc@gmail.com).
