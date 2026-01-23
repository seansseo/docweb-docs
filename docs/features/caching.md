# Global Caching

DocWeb uses a shared caching layer to optimize performance and reduce redundant crawling. All caching is global - benefiting all users of the platform.

## Cache Types

### Domain Cache

Stores discovered URLs for entire domains.

**Collection**: `artifacts/global/domainCache/{domainHash}`

```typescript
interface DomainCache {
    domain: string;               // e.g., "docs.stripe.com"
    urls: string[];               // All discovered URLs
    clusters: ClusterStats[];     // Cluster metadata
    discoveryStats: DiscoveryStats;
    source: "waterfall" | "cache";
    discoveredAt: Timestamp;
    expiresAt: Timestamp;         // 24-hour TTL
}
```

**Benefits**:
- Instant discovery when cache hit
- No redundant robots.txt/sitemap fetching
- Consistent URL classification across users

### Page Cache

Stores scraped content per URL.

**Collection**: `artifacts/global/pageCache/{urlHash}`

```typescript
interface PageCache {
    url: string;
    domain: string;
    title: string;
    description: string;
    mainContent: string;          // Markdown
    contentHash: string;          // MD5 (12 chars)
    scrapedAt: Timestamp;
    expiresAt: Timestamp;         // 24-hour TTL
}
```

**Benefits**:
- Skip scraping already-cached pages
- Faster content retrieval for chat
- Content hash detects changes

### Global Embeddings

Stores vector embeddings per URL chunk.

**Collection**: `artifacts/global/embeddings/{urlHash}_chunk{N}`

```typescript
interface GlobalEmbeddingDocument {
    urlHash: string;              // SHA256 hash (16 chars)
    url: string;
    domain: string;               // For domain-scoped queries
    chunkIndex: number;
    chunkText: string;            // First 2000 chars
    embedding: number[];          // 768-dim vector
    title: string;
    description: string;
    searchIds: string[];          // Sessions referencing this
    contentHash: string;          // MD5 (12 chars)
    createdAt: Timestamp;
    updatedAt: Timestamp;
}
```

**Benefits**:
- Embeddings generated once, used by all
- `searchIds` tracks which sessions use each embedding
- Permanent storage (no TTL)

## Cache TTL

| Cache Type | TTL | Reason |
|------------|-----|--------|
| Domain Cache | 24 hours | Sites update their structure infrequently |
| Page Cache | 24 hours | Content may change daily |
| Embeddings | Permanent | Expensive to generate, rarely change |

## Cache Flow

### Discovery

```
User requests discovery
    ↓
Check domainCache for domain
    ↓
[Cache Hit]                    [Cache Miss]
    ↓                              ↓
Return cached URLs            Run Waterfall Discovery
    ↓                              ↓
Copy to user's session        Save to domainCache
    ↓                              ↓
    └──────────────┬───────────────┘
                   ↓
            Display graph
```

### Scraping

```
User triggers scrape
    ↓
Check pageCache for URL
    ↓
[Cache Hit]                    [Cache Miss]
    ↓                              ↓
Return cached content         Fetch and parse page
    ↓                              ↓
Copy to user's session        Save to pageCache
    ↓                              ↓
    └──────────────┬───────────────┘
                   ↓
          Generate embeddings (if needed)
```

## Cache Functions

```typescript
// Check domain cache
const cached = await getDomainCache(GLOBAL_CACHE_APP_ID, domain);

// Save to domain cache
await setDomainCache(GLOBAL_CACHE_APP_ID, domain, {
    urls, clusters, discoveryStats, source: "waterfall"
});

// Get cache age
const ageMs = getAgeMs(cachedDomain.discoveredAt);
```

## Cache Admin Panel

Administrators can manage the cache at `/admin`:

| Action | Endpoint | Description |
|--------|----------|-------------|
| List Domains | `getCachedDomains` | View all cached domains |
| List Pages | `getCachedPages` | View cached pages for domain |
| Delete Domain | `deleteCachedDomain` | Clear domain cache |
| Delete Page | `deleteCachedPage` | Clear single page cache |

## Cache Indicators

The UI shows cache status:

| Indicator | Meaning |
|-----------|---------|
| `source: "cache"` | Discovery used cached data |
| `fromCache: true` | Response includes cache info |
| `cacheAge` | Time since cache was created |

## Cache Invalidation

Caches are invalidated when:

1. **TTL expires**: After 24 hours
2. **Content changes**: Content hash mismatch triggers re-scrape
3. **Manual deletion**: Via admin panel
4. **Domain deletion**: Removes all related cache entries

## Performance Impact

| Scenario | Without Cache | With Cache |
|----------|---------------|------------|
| Discovery | 5-30 seconds | < 1 second |
| Scraping | 1-5 seconds/page | < 100ms/page |
| Embedding | 2-5 seconds/chunk | Instant |

## Best Practices

1. **First discovery benefits everyone**: Your crawl populates cache for future users
2. **Check cache age**: Very recent caches may not reflect latest site changes
3. **Force refresh**: Delete domain cache if you need fresh data
4. **Monitor cache size**: Large sites may have significant cache footprint
