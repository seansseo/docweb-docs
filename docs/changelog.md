---
sidebar_position: 10
---

# Changelog

Release notes and updates for DocWeb.

## January 2026

### January 22, 2026
**Dex AI Persona & Global Embeddings**
- Introduced **Dex** as the named AI assistant with personality
- Added "thinking steps" display showing Dex's reasoning process
- Implemented global embeddings system with cross-session deduplication
- Added BM25 keyword scoring with field weights (title: 5x, description: 2x, content: 1x)
- Introduced theme context for light/dark mode support

### January 21, 2026
**Credits & Billing System**
- Launched credits-based usage system
- Integrated Stripe for subscription payments
- Added Pro ($9.99/mo) and Max ($29.99/mo) tiers
- Created usage modal component showing credit status

### January 20, 2026
**Authentication & Sessions**
- Added Firebase Authentication (email/password + Google OAuth)
- Implemented protected routes and auth guards
- Launched saved sessions with sidebar navigation
- Users can now save and switch between multiple discoveries

### January 16, 2026
**Global Caching**
- Implemented global domain and page caching
- Added admin panel for cache management
- Set 24-hour TTL for cached data
- Caching shared across all users for faster discoveries

## Earlier Updates

### Cluster Focus Mode
- Click on cluster to zoom and highlight
- Cluster hull boundaries visualize topic groupings
- Improved visual distinction between clusters

### Overlapping Cluster Assignment
- URLs can now belong to multiple clusters
- Path-based and keyword-based clustering
- Better representation of documentation structure

### ForceAtlas2 Optimization
- Tuned layout parameters for better visualization
- Improved gravity and scaling settings
- Added linLogMode for hierarchical trees

### Real-time Updates
- Implemented Firestore listeners for live updates
- Graph updates as new URLs are discovered
- Scraping status reflected in real-time

---

## Upcoming Features

Features we're working on:

- **Graph Export**: Export visualizations as images or data
- **Custom Clusters**: User-defined clustering rules
- **Team Sharing**: Share sessions with team members
- **API Access**: Programmatic access for developers
- **Browser Extension**: Discover pages while browsing

---

## Feature Requests

Have a feature idea? Contact us at [seanseo.llc@gmail.com](mailto:seanseo.llc@gmail.com)
