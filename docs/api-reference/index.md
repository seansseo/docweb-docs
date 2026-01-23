# API Reference

Technical documentation for developers integrating with or extending DocWeb.

## Backend API

### [Cloud Functions](cloud-functions.md)
Firebase Cloud Functions powering discovery, scraping, chat, and billing. Includes request/response schemas for all endpoints.

### [Firestore Schema](firestore-schema.md)
Complete data models for URLs, sessions, embeddings, cache, and user profiles.

## Frontend API

### [Frontend Hooks](frontend-hooks.md)
React hooks for session management, credit tracking, and authentication.

## External Integrations

| Service | Purpose |
|---------|---------|
| Firebase Auth | Email/Password and Google OAuth |
| Firestore | Real-time database |
| Google Gemini | AI chat and embeddings |
| Stripe | Payment processing |

## Function Resources

| Function | Memory | Timeout |
|----------|--------|---------|
| discoverSitemaps | 1 GiB | 300s |
| scrapeNodes | 512 MiB | 120s |
| chat | 1 GiB | 120s |
| generateEmbeddings | 1 GiB | 540s |
