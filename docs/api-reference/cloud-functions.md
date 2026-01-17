# Cloud Functions

DocWeb uses Firebase Cloud Functions for its backend logic.

## `discoverSite`
- **Input**: `url` (string)
- **Output**: `siteStructure` (JSON)
- **Description**: Triggers the [Waterfall Discovery](../core-concepts/waterfall-discovery.md) process.

## `scrapeContent`
- **Input**: `urls` (string[])
- **Output**: `markdownContent` (string[])
- **Description**: Extracts clean Markdown from the provided URLs.

## `queryChatbot`
- **Input**: `query` (string), `context` (string)
- **Output**: `response` (string)
- **Description**: Interfaces with the [RAG Chatbot](../features/rag-chatbot.md).
