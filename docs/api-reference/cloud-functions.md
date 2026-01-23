# Cloud Functions

DocWeb uses Firebase Cloud Functions (Node.js 20) for its backend logic.

## discoverSitemaps

Handles URL discovery using the [Waterfall Discovery](../core-concepts/waterfall-discovery.md) algorithm.

**Memory**: 1 GiB | **Timeout**: 300s

### Actions

| Action | Description |
|--------|-------------|
| `findSitemaps` | Discover sitemap URLs from robots.txt |
| `processSitemaps` | Parse sitemap XML files |
| `crawlSidebar` | Navigation link extraction |
| `discoverAndSave` | Full waterfall discovery + save |
| `cleanupSession` | Archive previous session data |
| `updateStatus` | Update URL statuses |

### Request (discoverAndSave)

```typescript
{
    url: string;
    appId: string;
    action: "discoverAndSave";
    searchId?: string;
    depth?: number;
}
```

### Response

```typescript
{
    success: boolean;
    urlCount: number;
    savedCount: number;
    sessionId: string;
    rootUrl: string;
    clusters: ClusterStats[];
    source: "waterfall" | "cache";
    discoveryStats: {
        sitemapUrls: number;
        navigationUrls: number;
        navScrapeUrls: number;
        totalUnique: number;
        sources: Record<string, number>;
    };
    fromCache: boolean;
    cacheAge?: number;
}
```

---

## scrapeNodes

Handles content extraction and Markdown conversion.

**Memory**: 512 MiB | **Timeout**: 120s

### Actions

| Action | Description | Max Nodes |
|--------|-------------|-----------|
| `autoScrape` | Scrape structural nodes after discovery | 10 |
| `scrapeCluster` | Scrape all nodes in a cluster | 20 |
| `scrapeNodes` | Scrape specific node IDs | Unlimited |

### Request

```typescript
{
    action: "autoScrape" | "scrapeCluster" | "scrapeNodes";
    appId: string;
    searchId?: string;
    clusterId?: string;
    docIds?: string[];
    maxNodes?: number;
}
```

### Response

```typescript
{
    success: boolean;
    scraped: number;
    failed: number;
    skipped: number;
    results: ScrapeResult[];
}
```

---

## chat

Powers the [Dex AI chatbot](../features/rag-chatbot.md) with RAG-based responses.

**Memory**: 1 GiB | **Timeout**: 120s

### Features

- Greeting detection with smart topic suggestions
- Hybrid search (vector + keyword)
- Just-in-Time (JIT) scraping for unscraped pages
- Site map awareness
- Source citations with relevance scores
- Thinking steps display
- Related pages suggestions

### Request

```typescript
{
    message: string;
    appId: string;
    searchId: string;
    conversationId?: string;
    siteName?: string;
}
```

### Response

```typescript
{
    success: boolean;
    response: string;
    conversationId: string;
    sources: SourceCitation[];
    codeBlocks: CodeBlock[];
    messageId: string;
    sourceNodeIds: string[];     // For graph highlighting
    isGreeting: boolean;
    thinkingSteps: string[];     // Dex's reasoning process
    suggestedTopics?: SuggestedTopic[];
    relatedPages?: RelatedPage[];
}
```

---

## generateEmbeddings

Generates vector embeddings for semantic search.

**Memory**: 1 GiB | **Timeout**: 540s

### Actions

| Action | Description |
|--------|-------------|
| `generateForSearch` | Generate embeddings for a search session |
| `generateForDoc` | Generate embedding for single document |
| `regenerateAll` | Regenerate all embeddings for session |

### Embedding Process

1. Combine title + description + mainContent
2. Chunk text (4,000 chars, 400 overlap)
3. Generate embedding per chunk via Gemini text-embedding-004
4. Store in global collection (deduplicated by URL hash)
5. Track searchIds for cross-session sharing

---

## Session Management

### getSessions
Returns all saved sessions for the authenticated user.

### deleteSession
Deletes a session and cascades to URLs/conversations.

### updateSessionAccess
Updates `lastAccessedAt` timestamp when user switches sessions.

---

## Credits & Billing

### getUserCredits
Returns user's credit profile including tier, remaining credits, and reset time.

### checkCredits
Verifies user has sufficient credits for an action.

### deductCredits
Deducts credits after successful action.

### createCheckoutSession
Creates Stripe checkout session for subscription upgrade.

### createCustomerPortal
Creates Stripe customer portal link for subscription management.

### getSubscriptionStatus
Returns current subscription status.

### stripeWebhook
Handles Stripe webhook events:
- `checkout.session.completed`
- `customer.subscription.updated`
- `customer.subscription.deleted`
- `invoice.payment_succeeded`
- `invoice.payment_failed`

---

## Cache Admin

### getCachedDomains
Lists all cached domains with metadata.

### getCachedPages
Lists cached pages for a specific domain.

### deleteCachedDomain
Clears all cache for a domain.

### deleteCachedPage
Clears cache for a single page URL.
