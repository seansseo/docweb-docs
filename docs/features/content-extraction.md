# Content Extraction

DocWeb's ability to extract and understand content is what powers [Dex](rag-chatbot.md), our AI chatbot.

## Technology Stack

| Library | Purpose |
|---------|---------|
| Cheerio 1.0.0 | HTML parsing and DOM traversal |
| Turndown 7.2.2 | HTML to Markdown conversion |
| Axios 1.7.9 | HTTP client for fetching pages |

## Extraction Pipeline

1. **Fetch**: HTTP GET with 15-second timeout, 3 retries
2. **Parse**: Cheerio loads HTML, extracts `<main>`, `<article>`, or body content
3. **Clean**: Remove scripts, styles, navigation, and non-content elements
4. **Convert**: Turndown transforms HTML to clean Markdown
5. **Store**: Markdown saved to Firestore (max 50KB)

## Scraping Modes

### Auto-Scrape
After discovery, DocWeb automatically scrapes **structural nodes** (found in navigation elements):

```typescript
{
    action: "autoScrape",
    appId: string,
    searchId: string,
    maxNodes: 10
}
```

Prioritizes nodes with `isStructuralNode: true` and `importanceScore: 1.0`.

### Cluster Scrape
Scrape all nodes in a specific cluster:

```typescript
{
    action: "scrapeCluster",
    appId: string,
    searchId: string,
    clusterId: "/api",
    maxNodes: 20
}
```

### On-Demand Scrape
Scrape specific document IDs:

```typescript
{
    action: "scrapeNodes",
    appId: string,
    searchId: string,
    docIds: ["abc123", "def456"]
}
```

### JIT Scraping
When [Dex](rag-chatbot.md) needs content from an unscraped page during chat, it triggers **Just-in-Time scraping** automatically.

## Scraped Content Schema

```typescript
interface ScrapedContent {
    title?: string;              // Page title
    description?: string;        // First 500 chars
    mainContent?: string;        // Markdown (max 50KB)
    scrapingStatus: "pending" | "scraping" | "complete" | "failed" | "skipped";
    lastScraped?: Date;
    scrapeError?: string;
}
```

## Scraping Status

| Status | Meaning |
|--------|---------|
| `pending` | Not yet scraped |
| `scraping` | Currently being scraped |
| `complete` | Successfully scraped |
| `failed` | Scrape attempt failed |
| `skipped` | Intentionally skipped (e.g., non-English) |

## Content Filtering

Using [URL Classification](../core-concepts/url-classification.md), DocWeb filters content:

- **Skip non-English URLs**: Detected via path patterns (e.g., `/fr/`, `/zh-cn/`)
- **Prioritize documentation**: URLs with doc keywords scraped first
- **Limit utility pages**: Login, search, legal pages get lower priority

## Caching

Scraped content is cached globally:

| Cache | Collection | TTL |
|-------|------------|-----|
| Page Cache | `artifacts/global/pageCache` | 24 hours |

Content hash (MD5, 12 chars) tracks freshness - unchanged pages aren't re-scraped.

## Cloud Function

**Endpoint**: `scrapeNodes`
**Memory**: 512 MiB
**Timeout**: 120 seconds

**Response**:
```typescript
{
    success: boolean;
    scraped: number;
    failed: number;
    skipped: number;
    results: ScrapeResult[];
}
```
