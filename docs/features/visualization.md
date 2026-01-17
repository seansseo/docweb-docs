# Sigma.js Visualization

Using Sigma.js and WebGL, DocWeb renders thousands of pages as interactive nodes.

## Neural Layout
Pages are organized using a physics-based layout (**ForceAtlas2**) that naturally groups related content together. This creates a visual representation of the site's [Architecture](../core-concepts/architecture.md).

## Visual Hierarchies
- **Node Size**: Root nodes are larger and brighter.
- **Hulls**: Shaded boundaries help you see where one topic ends and another begins.
- **Interactivity**: Zoom, pan, and click nodes to see details or trigger a [Deep Dive](../core-concepts/waterfall-discovery.md#deep-dives).

## Edge Strategy
Internal links within the documentation are used to draw the "lines" (edges) between nodes, revealing the true connectivity of the site.

Learn how the [RAG Chatbot](rag-chatbot.md) uses this structure.
