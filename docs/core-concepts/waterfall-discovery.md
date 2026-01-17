# Waterfall Discovery

The app doesn't just "scrape" a site; it understands it through a process we call Waterfall Discovery.

## Sitemap & Navigation Crawling
DocWeb identifies the skeleton of a site by looking at sitemaps and navigation menus. This ensures we capture the intended structure of the documentation.

## Waterfall Logic
For massive sites, DocWeb uses a "waterfall" approach to ensure it captures the most important links first without getting bogged down in noise. This prioritization is key to building an [Architecture](architecture.md) that remains responsive even with thousands of nodes.

## Deep Dives
You can select a cluster of information and trigger an on-demand "Deep Dive" to scrape and index those specific pages in detail.

Learn how we categorize these links in [URL Classification](url-classification.md).
