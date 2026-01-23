---
sidebar_position: 1
---

# Getting Started

Welcome to **DocWeb**, the AI-powered documentation visualization and exploration platform.

DocWeb transforms static website documentation into interactive, neural-brain-style graph visualizations with an intelligent chatbot assistant named **Dex**. Instead of scrolling through endless links and pages, you can see the entire structure of a website at once, exploring clusters of information through a high-performance WebGL graph.

## The Problem

Modern technical documentation is often vast and fragmented. Users struggle to:
- Understand how topics relate to one another
- Find where specific information fits into the "big picture"
- Stay current with frequently updated documentation
- Quickly onboard to new codebases or APIs

## The Solution

DocWeb provides **Just-in-Time intelligence** rather than static knowledge by:

1. **Intelligent Discovery**: Crawling live sites using our [Waterfall Discovery](../core-concepts/waterfall-discovery.md) algorithm
2. **Visual Mapping**: Rendering documentation structure as an interactive [Sigma.js graph](../features/visualization.md)
3. **AI-Powered Chat**: Answering questions through **Dex**, our [RAG-powered chatbot](../features/rag-chatbot.md) with source citations
4. **Hybrid Search**: Combining vector embeddings and BM25 keyword matching for accurate retrieval

## Tech Stack

| Layer | Technologies |
|-------|-------------|
| **Frontend** | Next.js 16, React 19, Sigma.js 3.0, Tailwind CSS 4 |
| **Backend** | Firebase Cloud Functions (Node.js 20), Firestore |
| **AI** | Google Gemini 2.5 Flash, text-embedding-004 (768-dim) |
| **Payments** | Stripe |

## Next Steps

- **[Quick Start](quick-start.md)** - Get your first neural map in minutes
- **[Core Concepts](../core-concepts/index.md)** - Understand how DocWeb works
- **[Features](../features/index.md)** - Explore visualization, chatbot, and more
