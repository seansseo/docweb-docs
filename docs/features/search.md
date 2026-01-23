# Hybrid Search

DocWeb uses a sophisticated hybrid search algorithm that combines vector similarity with BM25 keyword matching for optimal retrieval accuracy.

## How It Works

```typescript
async function hybridSearch(query, appId, searchId, limit, apiKey, domain) {
    // Run searches in parallel
    const [vectorResults, keywordResults] = await Promise.all([
        vectorSearch(query, domain),      // Gemini embeddings + cosine similarity
        keywordSearch(query, searchId),   // BM25 scoring
    ]);

    // Merge and re-rank
    return mergeAndRank(vectorResults, keywordResults, limit);
}
```

## Vector Search

Vector search finds semantically similar content by comparing embedding vectors.

### Embedding Generation

1. Combine title + description + mainContent
2. Chunk text (4,000 characters, 400 overlap)
3. Generate embedding per chunk via Gemini text-embedding-004
4. Store 768-dimensional vectors in global collection

### Similarity Calculation

Cosine similarity measures the angle between query and document vectors:

```
similarity = (A · B) / (||A|| × ||B||)
```

Range: -1 to 1 (higher = more similar)

### When It Excels

- Natural language questions: "How do I authenticate?"
- Conceptual queries: "user permissions and access control"
- Synonym handling: finds "authorization" when searching "permissions"

## BM25 Keyword Search

BM25 (Best Matching 25) is a probabilistic ranking function that scores documents based on query term frequency.

### Parameters

```typescript
const BM25_K1 = 1.5;        // Term frequency saturation
const BM25_B = 0.75;        // Length normalization
const AVG_DOC_LENGTH = 5000; // Average document length estimate
```

### Formula

```
score = Σ IDF(qi) × (f(qi, D) × (k1 + 1)) / (f(qi, D) + k1 × (1 - b + b × |D|/avgdl))
```

Where:
- `IDF(qi)` = Inverse document frequency of query term
- `f(qi, D)` = Term frequency in document
- `|D|` = Document length
- `avgdl` = Average document length

### When It Excels

- Exact term matching: API names, error codes
- Code references: `stripeClient.checkout.sessions.create`
- Technical terms: "OAuth2", "JWT", "WebSocket"

## Field Weights

Different fields are weighted based on their importance:

| Field | Weight | Rationale |
|-------|--------|-----------|
| Title | 5x | Page titles are highly descriptive |
| Description | 2x | Summaries capture key concepts |
| Content | 1x | Body text provides detailed context |

## Score Merging

Final scores combine both search methods:

```typescript
finalScore = (0.7 * normalizedVectorScore) + (0.3 * normalizedKeywordScore);
```

### Normalization

Scores are normalized to 0-1 range before combining:

```typescript
normalizedScore = (score - minScore) / (maxScore - minScore);
```

### Deduplication

When the same document appears in both result sets:
1. Keep the entry with the higher final score
2. Merge metadata from both entries

## Result Format

```typescript
interface SearchResult {
    url: string;
    title: string;
    description: string;
    chunkText: string;
    relevanceScore: number;    // 0-1, combined score
    vectorScore?: number;      // Raw vector similarity
    keywordScore?: number;     // Raw BM25 score
    domain: string;
    docId: string;
}
```

## Performance

| Metric | Typical Value |
|--------|---------------|
| Vector search latency | 50-200ms |
| Keyword search latency | 100-300ms |
| Total hybrid search | 150-400ms |
| Results returned | Top 10 |

## Best Practices for Queries

1. **Be specific**: "Stripe webhook signature verification" > "webhooks"
2. **Use natural language**: "How do I handle errors?" works well
3. **Include key terms**: Mix concepts with specific API names
4. **Ask follow-ups**: [Dex](rag-chatbot.md) remembers conversation context
