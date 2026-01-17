# Architecture

DocWeb's architecture is designed for scalability and real-time performance.

## Frontend
- **React**: For the user interface.
- **Sigma.js & WebGL**: For high-performance graph rendering.
- **Tailwind CSS**: For modern, responsive design.

## Backend
- **Cloud Functions**: For serverless scraping and processing.
- **Firestore**: For storing graph metadata and user sessions.
- **Vector Database**: For RAG-based indexing and retrieval.

## Data Flow
1. User enters a URL.
2. [Discovery](waterfall-discovery.md) engine crawls the site.
3. [URL Classification](url-classification.md) categorizes the pages.
4. Data is sent to the frontend for [Visualization](../features/visualization.md).
5. Content is indexed for the [RAG Chatbot](../features/rag-chatbot.md).
