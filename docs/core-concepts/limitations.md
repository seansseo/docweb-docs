# Limitations

While DocWeb is a powerful tool for visual intelligence and content extraction, there are certain technical and ethical limitations to its operation.

## Scraping Limitations

DocWeb's [Waterfall Discovery](waterfall-discovery.md) engine may encounter issues with the following types of content:

- **Dynamic Content (SPA)**: Websites that rely heavily on client-side JavaScript (e.g., highly interactive React or Vue apps) may not be fully indexed if the content is not rendered on the initial load.
- **Paywalls and Authentication**: DocWeb cannot access content that is behind a paywall or requires user authentication (login).
- **Anti-Scraping Measures**: Sites using advanced bot detection (e.g., Cloudflare Turnstile, Akamai) may block DocWeb's scraping attempts.
- **Large Files**: Non-textual content such as large PDFs, images, or videos are not currently processed for RAG intelligence.

## Searching Limitations

- **Real-Time Latency**: While discovery is fast, deep-diving into large websites can take time depending on the number of pages and server response rates.
- **Search Depth**: By default, DocWeb limits the depth of crawling to prevent infinite loops and excessive resource consumption.

## Ethical Considerations

DocWeb is designed for research and intelligence purposes. Users are expected to:
- Respect `robots.txt` files.
- Avoid overwhelming target servers with excessive requests.
- Use the extracted data in compliance with local laws and terms of service.
