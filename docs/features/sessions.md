# Session Management

Sessions allow you to save and manage multiple documentation discoveries. Each session contains the discovered URLs, scraped content, chat history, and graph state for a specific documentation site.

## What is a Session?

A session represents a complete discovery of a documentation site, including:

- All discovered URLs with metadata
- Scraped content and embeddings
- Chat conversation history
- Graph visualization state

## Session Data Model

```typescript
interface SavedSession {
    sessionId: string;            // Unique identifier
    userId: string;               // Owner's Firebase UID
    domain: string;               // e.g., "docs.stripe.com"
    rootUrl: string;              // Starting URL
    title: string;                // Session name (derived from domain)
    urlCount: number;             // Total discovered URLs
    scrapedCount: number;         // URLs with scraped content
    messageCount: number;         // Chat messages
    createdAt: Date;
    updatedAt: Date;
    lastAccessedAt: Date;
    status: "active" | "archived";
}
```

## Session Limits by Tier

| Tier | Max Sessions | Notes |
|------|--------------|-------|
| Free | 5 | Oldest sessions archived when limit reached |
| Pro | 20 | - |
| Max | 20 | - |

## Using Sessions

### Creating a Session

1. Enter a documentation URL in the search bar
2. Click "Discover" to start the [Waterfall Discovery](../core-concepts/waterfall-discovery.md)
3. A new session is automatically created and saved

### Switching Sessions

1. Click the session in the left sidebar
2. The graph and chat history load automatically
3. Continue exploring or chatting where you left off

### Session Sidebar Features

- **Session List**: All your saved sessions with domain icons
- **Search/Filter**: Find sessions by domain name
- **New Session**: Button to start a fresh discovery
- **Credits Display**: Shows remaining credits and reset countdown
- **User Profile**: Sign out option

## Session Storage

Sessions are stored in Firestore:

**Collection**: `artifacts/{userId}/public/data/sessions/{sessionId}`

Related data:
- URLs: `artifacts/{userId}/public/data/urls/{docId}`
- Chat: Stored per session in conversation subcollection
- Embeddings: `artifacts/global/embeddings/{urlHash}_chunk{N}` (shared)

## Session Operations

### Get Sessions

```typescript
// Returns all sessions for the authenticated user
const sessions = await getSessions({ appId });
```

### Delete Session

```typescript
// Deletes session and cascades to URLs/conversations
await deleteSession({ appId, sessionId });
```

### Update Access Time

```typescript
// Called when user switches to a session
await updateSessionAccess({ appId, sessionId });
```

## Cross-Session Features

### Shared Embeddings

Embeddings are stored globally and shared across sessions:

- If you discover `docs.stripe.com` and another user already has embeddings for those pages, you benefit from the cached embeddings
- `searchIds` array tracks which sessions reference each embedding

### Domain Cache

If someone recently discovered the same domain, you may get cached results:

- 24-hour cache TTL
- Instant discovery from cache
- Fresh discovery after cache expires

## Data Persistence

- **Session metadata**: Persists indefinitely (until deleted)
- **URLs and content**: Persists with session
- **Chat history**: Persists with session
- **Embeddings**: Global, permanent (deduplicated by URL hash)
- **Domain cache**: 24-hour TTL

## Archiving

When you exceed your session limit:

1. Oldest sessions by `lastAccessedAt` are marked as `archived`
2. Archived sessions remain in the database but don't count toward limit
3. You can manually delete sessions to free up slots

## Best Practices

1. **Name meaningfully**: Session titles are auto-generated from domain, but you can identify them by the URL
2. **Use Deep Dives**: Scrape important clusters before chatting for better Dex responses
3. **Clean up old sessions**: Delete sessions you no longer need to stay within limits
4. **Leverage caching**: Re-discovering the same domain uses cached data when available
