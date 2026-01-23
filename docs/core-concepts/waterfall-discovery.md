# Waterfall Discovery

The app doesn't just "scrape" a site; it understands it through a multi-stage process called **Waterfall Discovery**.

## Discovery Stages

```
┌─────────────────────────────────────────────────────────┐
│ Priority 0: Nav-Scrape                                   │
│ Extract structural links from nav/aside/header elements  │
│ Captures link text for titles                           │
└────────────────────────┬────────────────────────────────┘
                         ▼
┌─────────────────────────────────────────────────────────┐
│ Stage 1: Sitemap Discovery                              │
│ 1. Fetch robots.txt                                     │
│ 2. Parse Sitemap: declarations                          │
│ 3. Recursively process sitemap indexes (max depth 5)    │
│ 4. Handle gzip-compressed sitemaps (.xml.gz)            │
│ 5. Extract all <url><loc> entries                       │
└────────────────────────┬────────────────────────────────┘
                         ▼
┌─────────────────────────────────────────────────────────┐
│ Stage 2: Navigation Crawl (if sitemaps < 500 URLs)      │
│ 1. BFS crawl from base URL (max depth 3)                │
│ 2. Extract links from header, footer, nav, main         │
│ 3. Track source of each discovered URL                  │
│ 4. Respect robots.txt crawl-delay                       │
└────────────────────────┬────────────────────────────────┘
                         ▼
┌─────────────────────────────────────────────────────────┐
│ Stage 3: Merge & Classify                               │
│ 1. Deduplicate URLs                                     │
│ 2. Extract path segments                                │
│ 3. Assign overlapping clusters                          │
│ 4. Calculate priority scores                            │
│ 5. Detect non-English URLs (skip scraping)              │
│ 6. Save to Firestore                                    │
└─────────────────────────────────────────────────────────┘
```

## Configuration Constants

| Parameter | Value | Description |
|-----------|-------|-------------|
| `MAX_CRAWL_DEPTH` | 3 | Maximum BFS depth for navigation crawl |
| `MAX_SITEMAP_DEPTH` | 5 | Maximum recursion for sitemap indexes |
| `REQUEST_TIMEOUT` | 15,000 ms | HTTP request timeout |
| `MAX_RETRIES` | 3 | Retry count for failed requests |
| `CHUNK_SIZE` | 50 | URLs processed per batch |
| `MAX_URLS_PER_SOURCE` | 10,000 | Cap per discovery source |
| `SITEMAP_SUFFICIENT_THRESHOLD` | 500 | Skip nav crawl if sitemaps return this many URLs |

## Nav-Scrape (Priority 0)

Before sitemap discovery, DocWeb performs a **Nav-Scrape** to capture the site's intended navigation structure:

1. Fetch the root URL
2. Extract all links from `<nav>`, `<aside>`, and `<header>` elements
3. Capture link text for use as page titles
4. Mark these URLs as **structural nodes** with `importanceScore: 1.0`

This ensures that even sites with poor sitemaps have meaningful structure.

## Sitemap Discovery (Stage 1)

1. Fetch `robots.txt` from the root domain
2. Parse all `Sitemap:` declarations
3. For each sitemap URL:
   - If it's a sitemap index (`.xml` with `<sitemapindex>`), recursively process child sitemaps
   - If it's gzip-compressed (`.xml.gz`), decompress before parsing
   - Extract all `<url><loc>` entries
4. Track discovery source as `"sitemap"` or `"sitemap-index"`

## Navigation Crawl (Stage 2)

If sitemaps yield fewer than 500 URLs, DocWeb supplements with a BFS navigation crawl:

1. Start from the base URL
2. Extract links from header, footer, nav, and main content areas
3. Follow internal links up to `MAX_CRAWL_DEPTH` (3 levels)
4. Respect `crawl-delay` directives from robots.txt
5. Track discovery source (e.g., `"navigation"`, `"footer"`, `"content-link"`)

## Deep Dives

You can trigger an on-demand **Deep Dive** on a cluster to:

1. Scrape all pages in that cluster
2. Generate embeddings for RAG chat
3. Enable semantic search within that topic area

Learn how we categorize these links in [URL Classification](url-classification.md).
