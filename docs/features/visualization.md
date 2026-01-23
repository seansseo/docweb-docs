# Sigma.js Visualization

Using Sigma.js and WebGL, DocWeb renders thousands of pages as interactive nodes in a neural-brain-style graph.

## Technology Stack

| Technology | Purpose |
|------------|---------|
| Sigma.js 3.0.2 | WebGL graph rendering |
| @react-sigma/core 5.0.6 | React bindings |
| graphology 0.26.0 | Graph data structure |
| d3-polygon 3.0.1 | Cluster hull calculations |

## ForceAtlas2 Layout

Pages are organized using a physics-based layout that naturally groups related content together:

```typescript
const layoutSettings = {
    gravity: 0.5,                         // Keeps branches connected
    scalingRatio: 10,                     // Prevents explosion
    strongGravityMode: true,              // Pulls toward origin
    linLogMode: true,                     // Essential for hierarchical trees
    outboundAttractionDistribution: true, // Spreads leaves outward
    adjustSizes: true,
};
```

The layout runs in a **web worker thread** to keep the UI responsive.

## Cluster Positioning

Nodes are positioned based on their cluster direction:

```typescript
const CLUSTER_ANGLES: Record<string, number> = {
    // Documentation (top - 12 o'clock)
    docs: 90, documentation: 90, guide: 75,
    // API (top-right - 1-2 o'clock)
    api: 45, sdk: 30, cli: 15,
    // Features (right - 3 o'clock)
    features: 0, products: -15,
    // Support (bottom-right)
    support: -60, help: -75,
    // ... and more
};
```

Child nodes inherit their parent's angle with small random spread, creating organic branch structures.

## Cluster Color Mapping

Each cluster has a distinct color for easy identification:

| Cluster | Color | Hex |
|---------|-------|-----|
| docs | Light Purple | #d8b4fe |
| api | Green | #4ade80 |
| features | Blue | #60a5fa |
| support | Amber | #fbbf24 |
| legal | Slate | #94a3b8 |
| examples | Fuchsia | #e879f9 |

50+ cluster colors are defined to handle diverse documentation structures.

## Visual Hierarchies

- **Node Size**: Based on [priority score](../core-concepts/url-classification.md) - critical nodes are larger
- **Node Brightness**: Structural nodes (from nav elements) are brighter
- **Cluster Hulls**: Shaded convex hull boundaries show cluster extents
- **Edges**: Parent-child relationships based on URL path hierarchy

## Interactivity

| Interaction | Action |
|-------------|--------|
| Click Cluster | Zoom and focus on that cluster |
| Hover Node | Show tooltip with title and URL |
| Click Node | Open URL in new tab |
| Scroll | Zoom in/out |
| Drag | Pan the view |
| Zoom Controls | +/- buttons and reset camera |

## Real-Time Updates

The graph subscribes to Firestore and updates in real-time:

1. New URLs discovered → nodes appear with animation
2. Scraping status changes → node visual updates
3. Chat citations → source nodes pulse with highlight animation

## Components

| Component | Purpose | Lines |
|-----------|---------|-------|
| SigmaMap | Main graph container | 1650 |
| LoadGraph | Data fetching and graph building | - |
| ClusterBoundaries | Hull rendering canvas overlay | - |
| InitialCameraState | Camera initialization | - |
| ZoomControls | +/- and reset buttons | - |

## Dark/Light Theme

The visualization supports both themes via ThemeContext:
- Dark mode: Dark background, light nodes
- Light mode: Light background, dark nodes

Learn how [Dex](rag-chatbot.md) highlights nodes when citing sources.
