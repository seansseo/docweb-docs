# Core Concepts

DocWeb is built on several key principles that differentiate it from standard AI models and traditional documentation tools.

## Real-Time Retrieval vs. Outdated Training
Most LLMs have a knowledge cut-off. DocWeb doesn't rely on a memory bank; it crawls the live site the moment you request it. This provides "Just-in-Time" intelligence.

## Grounded Context
By using Retrieval-Augmented Generation (RAG), DocWeb strictly limits the AI's "brain" to the Markdown data scraped from the specific website, eliminating hallucinations.

## Three Stages of Operation
1. **[Intelligent Discovery](waterfall-discovery.md)**: Understanding the site structure.
2. **[High-Performance Visualization](../features/visualization.md)**: Rendering the data as a graph.
3. **[AI Intelligence](../features/rag-chatbot.md)**: Interacting with the content via RAG.

Check out our [Architecture](architecture.md) for a deeper dive.
