# Firestore Schema

DocWeb stores its metadata in Google Cloud Firestore.

## `sites` Collection
- `url`: Primary URL of the site.
- `discoveryDate`: Timestamp of the last crawl.
- `nodes`: Array of page objects.

## `pages` Collection
- `siteId`: Reference to the parent site.
- `url`: Full URL of the page.
- `category`: [URL Classification](../core-concepts/url-classification.md) result.
- `contentHash`: MD5 hash of the scraped content.

## `edges` Collection
- `source`: Source page ID.
- `target`: Target page ID.
- `type`: Link type (e.g., "internal").
