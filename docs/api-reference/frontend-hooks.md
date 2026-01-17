# Frontend Hooks

Custom React hooks for building DocWeb interfaces.

## `useGraphData(siteId)`
Returns the nodes and edges for the specified site, formatted for [Sigma.js](../features/visualization.md).

## `useChat(siteId)`
Provides methods to send queries to the [RAG Chatbot](../features/rag-chatbot.md) and manage conversation history.

## `useDiscoveryStatus(siteId)`
Tracks the progress of the [Waterfall Discovery](../core-concepts/waterfall-discovery.md) engine.
