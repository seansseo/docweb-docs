# Dex AI Chatbot

Meet **Dex**, your AI documentation assistant that truly understands your documentation.

## Ask Your Docs

Instead of searching for keywords, ask Dex complex questions like:
- "How do I implement authentication using OAuth?"
- "What's the difference between webhooks and polling?"
- "Show me examples of error handling"

Dex understands context and can answer follow-up questions within the conversation.

## Powered by RAG

By using **Retrieval-Augmented Generation (RAG)**, Dex is grounded in the actual documentation content:

1. Your question is converted to a 768-dimensional embedding vector
2. Hybrid search finds relevant documentation chunks
3. Retrieved context is passed to Google Gemini 2.5 Flash
4. Dex generates a response with source citations

This eliminates hallucinations - Dex only knows what's in your documentation.

## Hybrid Search

Dex uses a sophisticated hybrid search algorithm combining vector similarity and keyword matching:

```typescript
finalScore = (0.7 * normalizedVectorScore) + (0.3 * normalizedKeywordScore);
```

### Vector Search
- Query is embedded using Google's text-embedding-004 model (768 dimensions)
- Cosine similarity finds semantically similar content chunks
- Works well for conceptual and natural language queries

### BM25 Keyword Search
- Classic probabilistic ranking function
- Parameters: k1=1.5, b=0.75, avgDocLength=5000
- Works well for specific terms, API names, and code references

### Field Weights

| Field | Weight | Rationale |
|-------|--------|-----------|
| Title | 5x | Page titles are highly relevant |
| Description | 2x | Summaries capture key concepts |
| Content | 1x | Body text provides detail |

## Features

### Source Citations
Every response includes clickable source links with relevance scores. Click a source to open the original documentation page.

### Thinking Steps
Expand "Dex's Thinking" to see:
- Search queries executed
- Sources evaluated and ranked
- Reasoning process
- Why certain sources were selected

### Just-in-Time Scraping
If Dex needs content from a page that hasn't been scraped yet, it automatically fetches and indexes that page during the conversation.

### Suggested Topics
After greeting messages or broad questions, Dex suggests relevant topics based on the discovered documentation structure.

### Related Pages
At the end of responses, Dex suggests related pages you might want to explore next.

### Graph Highlighting
When Dex cites sources, those nodes pulse in the [visualization](visualization.md), helping you see where information came from.

## Chat Request/Response

**Request:**
```typescript
{
    message: string;
    appId: string;
    searchId: string;
    conversationId?: string;
    siteName?: string;
}
```

**Response:**
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
    thinkingSteps: string[];     // Dex's reasoning
    suggestedTopics?: SuggestedTopic[];
    relatedPages?: RelatedPage[];
}
```

## Best Practices

1. **Be Specific**: "How do I authenticate API requests?" works better than "authentication"
2. **Use Follow-ups**: Dex remembers conversation context
3. **Check Sources**: Always verify answers against the linked documentation
4. **Trigger Deep Dives**: If Dex can't find content, scrape the relevant cluster first
