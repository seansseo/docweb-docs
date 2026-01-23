# Firestore Schema

DocWeb stores its data in Google Cloud Firestore with the following collections and schemas.

## DiscoveredUrlDoc

Stores discovered URLs with metadata, clustering, and scraped content.

**Collection**: `artifacts/{userId}/public/data/urls/{docId}`

```typescript
interface DiscoveredUrlDoc {
    // Core identification
    url: string;                          // Full URL
    docId: string;                        // Base64url-encoded unique ID (max 128 chars)

    // Discovery metadata
    discoverySource: "sitemap" | "sitemap-index" | "navigation" |
                     "content-link" | "footer" | "header";
    foundAt?: string;                     // Parent URL (for navigation sources)

    // Nav-Scrape metadata (structural anchor nodes)
    isStructuralNode: boolean;            // Found in nav/aside/header
    importanceScore: number;              // 1.0 for anchor nodes, 0.5 default

    // Clustering (OVERLAPPING - URLs can belong to multiple clusters)
    clusterIds: string[];                 // e.g., ["/features", "/api"]
    clusterLabels: string[];              // e.g., ["Features", "API"]
    primaryClusterId: string;             // Main cluster (first path segment)
    primaryClusterLabel: string;          // Main cluster label

    // Hierarchy (for force-graph links)
    path_segments: string[];              // e.g., ["docs", "api", "users"]
    depth: number;                        // Path depth
    parentPath: string;                   // e.g., "/docs/api"
    parentId: string | null;              // docId of parent URL

    // Priority
    priority: "critical" | "high" | "medium" | "low";
    priorityScore: number;                // 0-100 (lower = more important)
    isDocumentation: boolean;

    // Classification (Inferred Semantic Framework)
    contentCategory: "primary" | "support" | "utility" | "unknown";

    // Session tracking
    sessionId: string;
    searchId: string;
    rootUrl: string;
    status: "discovered" | "scraping" | "completed" | "error" | "archived";

    // Language detection
    language: string;                     // e.g., "en", "fr", "zh-cn"

    // Scraped content
    title?: string;
    description?: string;                 // First 500 chars
    mainContent?: string;                 // Markdown (max 50KB)
    scrapingStatus: "pending" | "scraping" | "complete" | "failed" | "skipped";
    lastScraped?: Date;
    scrapeError?: string;

    // Timestamps
    discovered_at: Date;
    updated_at: Date;
}
```

---

## SavedSession

Stores user's saved discovery sessions.

**Collection**: `artifacts/{userId}/public/data/sessions/{sessionId}`

```typescript
interface SavedSession {
    sessionId: string;                    // Same as searchId
    userId: string;
    domain: string;                       // e.g., "docs.stripe.com"
    rootUrl: string;
    title: string;
    urlCount: number;
    scrapedCount: number;
    messageCount: number;
    createdAt: Date;
    updatedAt: Date;
    lastAccessedAt: Date;
    status: "active" | "archived";
}
```

---

## GlobalEmbeddingDocument

Stores vector embeddings for semantic search (shared across all users).

**Collection**: `artifacts/global/embeddings/{urlHash}_chunk{N}`

```typescript
interface GlobalEmbeddingDocument {
    urlHash: string;                      // SHA256 hash (16 chars)
    url: string;
    domain: string;                       // For domain-scoped queries
    chunkIndex: number;
    chunkText: string;                    // First 2000 chars of chunk
    embedding: number[];                  // 768-dim vector
    title: string;
    description: string;
    searchIds: string[];                  // Sessions referencing this
    contentHash: string;                  // MD5 of content (12 chars)
    createdAt: Timestamp;
    updatedAt: Timestamp;
}
```

---

## DomainCache

Caches discovered URLs for entire domains.

**Collection**: `artifacts/global/domainCache/{domainHash}`

```typescript
interface DomainCache {
    domain: string;
    urls: string[];
    clusters: ClusterStats[];
    discoveryStats: DiscoveryStats;
    source: "waterfall" | "cache";
    discoveredAt: Timestamp;
    expiresAt: Timestamp;                 // 24-hour TTL
}
```

---

## PageCache

Caches scraped page content.

**Collection**: `artifacts/global/pageCache/{urlHash}`

```typescript
interface PageCache {
    url: string;
    domain: string;
    title: string;
    description: string;
    mainContent: string;
    contentHash: string;                  // MD5 (12 chars)
    scrapedAt: Timestamp;
    expiresAt: Timestamp;                 // 24-hour TTL
}
```

---

## UserCreditsProfile

Stores user account and billing information.

**Collection**: `users/{userId}`

```typescript
interface UserCreditsProfile {
    email: string;
    tier: "free" | "pro" | "max";
    creditsUsedToday: number;
    creditsRemaining: number;
    creditsPerDay: number;
    maxSessions: number;
    nextResetTime: string;                // ISO string (midnight UTC)
    totalDiscoveries: number;
    totalChatMessages: number;
    stripeCustomerId?: string;
    subscriptionId?: string;
    subscriptionStatus?: "active" | "canceled" | "past_due";
}
```

---

## Collection Hierarchy

```
firestore/
├── artifacts/
│   ├── {userId}/
│   │   └── public/
│   │       └── data/
│   │           ├── urls/{docId}          # DiscoveredUrlDoc
│   │           └── sessions/{sessionId}   # SavedSession
│   └── global/
│       ├── domainCache/{domainHash}       # DomainCache
│       ├── pageCache/{urlHash}            # PageCache
│       └── embeddings/{urlHash}_chunk{N}  # GlobalEmbeddingDocument
└── users/
    └── {userId}                           # UserCreditsProfile
```

---

## Indexes

Required composite indexes (`firestore.indexes.json`):

```json
{
    "indexes": [
        {
            "collectionGroup": "pageCache",
            "fields": [
                { "fieldPath": "domain", "order": "ASCENDING" },
                { "fieldPath": "scrapedAt", "order": "DESCENDING" }
            ]
        }
    ]
}
```
