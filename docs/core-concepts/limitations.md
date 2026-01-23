# Limitations

While DocWeb is a powerful tool for visual intelligence and content extraction, there are certain technical and ethical limitations to its operation.

## Discovery Limitations

DocWeb's [Waterfall Discovery](waterfall-discovery.md) engine may encounter issues with:

| Limitation | Description |
|------------|-------------|
| **Dynamic Content (SPA)** | Websites relying heavily on client-side JavaScript may not be fully indexed if content isn't rendered on initial load |
| **Paywalls & Authentication** | DocWeb cannot access content behind paywalls or requiring user login |
| **Anti-Scraping Measures** | Sites using bot detection (Cloudflare Turnstile, Akamai) may block requests |
| **Non-English Content** | URLs detected as non-English are skipped during scraping (discovery still captures them) |

## Technical Limits

| Parameter | Limit | Reason |
|-----------|-------|--------|
| Max Crawl Depth | 3 levels | Prevent infinite loops |
| Max Sitemap Depth | 5 levels | Limit recursion |
| Max URLs Per Source | 10,000 | Memory and performance |
| Request Timeout | 15 seconds | Prevent hanging requests |
| Main Content Size | 50 KB | Firestore document limits |
| Chunk Size | 4,000 characters | Embedding model limits |
| Max Sessions (Free) | 5 | Tier limitation |
| Max Sessions (Pro/Max) | 20 | Tier limitation |

## Content Limitations

- **Large Files**: PDFs, images, and videos are not processed for RAG intelligence
- **Markdown Conversion**: Complex HTML layouts may not convert cleanly to Markdown
- **Code Blocks**: Syntax highlighting depends on proper language annotations in source HTML

## Search Limitations

- **Real-Time Latency**: Deep-diving into large sites takes time depending on page count and server response rates
- **Embedding Generation**: Initial embedding generation for large sites can take several minutes
- **BM25 Approximation**: Keyword search uses estimated document length averages (5,000 chars)

## Rate Limits

| Tier | Credits/Day | Actions |
|------|-------------|---------|
| Free | 3 | 3 discoveries or chat messages |
| Pro | 10 | 10 discoveries or chat messages |
| Max | 100 | 100 discoveries or chat messages |

Credits reset at midnight UTC.

## Caching Behavior

- **24-Hour TTL**: Cached domains and pages expire after 24 hours
- **Shared Cache**: All users share the same cache, so your discovery may use cached data from another user
- **Stale Content**: If a site updates frequently, cached content may be outdated until TTL expires

## Ethical Considerations

DocWeb is designed for research and intelligence purposes. Users are expected to:

- **Respect `robots.txt`**: DocWeb strictly follows robots.txt rules and crawl-delay directives
- **Avoid Server Overload**: Built-in rate limiting prevents excessive requests, but users should avoid repeatedly discovering the same site
- **Comply with Terms of Service**: Users are responsible for ensuring their use complies with target site ToS
- **Data Privacy**: Do not use DocWeb to access or index personal or sensitive information without authorization

See our [Privacy Policy](../legal/privacy.md) and [Terms of Service](../legal/terms.md) for more details.
