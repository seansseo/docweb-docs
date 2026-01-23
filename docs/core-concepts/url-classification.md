# URL Classification

To ensure the [Visualization](../features/visualization.md) is meaningful, DocWeb automatically categorizes and prioritizes pages.

## Content Categories

DocWeb uses an **Inferred Semantic Framework** to classify URLs:

| Category | Description | Examples |
|----------|-------------|----------|
| **Primary** | Core documentation pages | API reference, guides, tutorials |
| **Support** | Help and troubleshooting | FAQs, support articles, troubleshooting |
| **Utility** | Functional pages | Search, login, settings, legal |
| **Unknown** | Unclassified | New or ambiguous pages |

## Priority Scoring Algorithm

URLs are scored 0-100 (lower = more important):

```typescript
function calculatePriorityScore(url: string, pathSegments: string[]): number {
    let score = 50; // Start at medium

    // Documentation keywords reduce score (-15)
    const DOC_KEYWORDS = ["docs", "api", "guide", "tutorial", "reference", ...];

    // Low-value keywords increase score (+20)
    const LOW_VALUE_KEYWORDS = ["blog", "news", "changelog", "careers", ...];

    // Depth penalty
    if (depth === 0) score += 10;        // Root less specific
    else if (depth <= 3) score -= 5;     // Sweet spot
    else if (depth > 5) score += 10;     // Too deep

    // Index pages are important (-10)
    if (["index", "overview", "introduction"].includes(lastSegment)) {
        score -= 10;
    }

    return Math.max(0, Math.min(100, score));
}
```

### Priority Level Mapping

| Score Range | Level | Visual Treatment |
|-------------|-------|------------------|
| 0-25 | Critical | Largest nodes, brightest colors |
| 26-45 | High | Large nodes |
| 46-65 | Medium | Standard nodes |
| 66-100 | Low | Small nodes, muted colors |

## Cluster Assignment

URLs can belong to **multiple overlapping clusters**:

```typescript
function extractClusterInfo(pathSegments: string[]): ClusterInfo {
    const clusterIds: string[] = [];
    const clusterLabels: string[] = [];

    // Primary cluster from first segment
    const primarySegment = pathSegments[0].toLowerCase();
    const primaryClusterId = `/${primarySegment}`;
    clusterIds.push(primaryClusterId);

    // Additional clusters from topic keywords
    const TOPIC_KEYWORDS = {
        "api": "API", "docs": "Documentation", "guide": "Guides",
        "sdk": "SDK", "cli": "CLI", "webhooks": "Webhooks", ...
    };

    // Check all segments for topic keywords
    for (const segment of pathSegments.slice(1)) {
        if (TOPIC_KEYWORDS[segment]) {
            clusterIds.push(`/${segment}`);
        }
    }

    return { clusterIds, clusterLabels, primaryClusterId, primaryClusterLabel };
}
```

### Example

For the URL `/products/api-gateway/webhooks/setup`:

| Field | Value |
|-------|-------|
| `primaryClusterId` | `/products` |
| `clusterIds` | `["/products", "/api", "/webhooks"]` |
| `path_segments` | `["products", "api-gateway", "webhooks", "setup"]` |
| `depth` | 4 |

## Structural Nodes

URLs discovered from navigation elements are marked as **structural nodes**:

| Field | Value |
|-------|-------|
| `isStructuralNode` | `true` |
| `importanceScore` | `1.0` (highest) |
| `discoverySource` | `"navigation"`, `"header"`, `"footer"` |

These nodes form the backbone of the visualization and are always visible.

## Why it Matters

By classifying URLs, DocWeb can:

1. **Visual Prioritization**: Root nodes are larger and brighter, utility pages are minimized
2. **Smart Scraping**: Auto-scrape focuses on structural and high-priority nodes first
3. **Better Search**: Priority weighting improves search result relevance
4. **Cluster Navigation**: Users can quickly find related content areas

This classification is a critical part of our [Waterfall Discovery](waterfall-discovery.md) engine.
