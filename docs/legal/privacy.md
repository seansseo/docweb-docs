# Privacy Policy

**Effective Date**: January 22, 2026
**Last Updated**: January 22, 2026

DocWeb ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our documentation visualization platform at docweb.app.

## Information We Collect

### Account Information
When you create an account, we collect:
- Email address
- Password (hashed via Firebase Auth, never stored in plaintext)
- Google account information (if using Google OAuth)
- Display name (optional)

### Usage Data
We automatically collect:
- URLs you discover and analyze
- Chat conversations with Dex (our AI assistant)
- Session metadata (domain, URL count, timestamps)
- Credit usage and billing information
- Discovery statistics (sitemap URLs, navigation URLs, sources)

### Technical Data
- Browser type and version
- Device information
- IP address (for security and rate limiting)
- Access timestamps
- Error logs and debugging information

### Scraped Content
When you discover documentation sites, we collect:
- Page titles and descriptions
- Main content converted to Markdown (max 50KB per page)
- URL structure and hierarchy
- Cluster assignments and priority scores

## How We Use Your Information

### To Provide Our Services
- Authenticate your account via Firebase Auth
- Process URL discoveries using our Waterfall Discovery algorithm
- Generate vector embeddings (768-dimensional) for semantic search
- Power AI chat responses via Google Gemini 2.5 Flash
- Track and manage your credits and sessions

### To Improve Our Services
- Analyze usage patterns to improve features
- Debug and fix issues using error logs
- Develop new features based on usage data
- Optimize caching and performance

### For Billing
- Process payments via Stripe
- Manage subscriptions (Pro: $9.99/mo, Max: $29.99/mo)
- Send billing notifications
- Handle subscription lifecycle events

## Data Storage

### Firestore Collections
Your data is stored in Google Cloud Firestore:

| Collection | Data Stored | Retention |
|------------|-------------|-----------|
| `users/{userId}` | Account profile, tier, credits | Until deletion |
| `artifacts/{userId}/public/data/sessions` | Session metadata | Until you delete |
| `artifacts/{userId}/public/data/urls` | Discovered URLs, content | Until session deletion |
| `artifacts/global/domainCache` | Cached domain data | 24-hour TTL |
| `artifacts/global/pageCache` | Cached page content | 24-hour TTL |
| `artifacts/global/embeddings` | Vector embeddings | Permanent |

### Global Cache
Scraped content and embeddings are stored in a global cache that benefits all users:
- **Domain cache**: Discovered URLs for entire domains (24-hour TTL)
- **Page cache**: Scraped Markdown content (24-hour TTL)
- **Embeddings**: 768-dimensional vectors (permanent, deduplicated by URL hash)

Your discoveries contribute to this shared cache, and you benefit from others' discoveries. Cached data is anonymized and not linked to individual users.

### Content Hashing
We use content hashing to track changes:
- URL hash: SHA256 (16 characters) for deduplication
- Content hash: MD5 (12 characters) for freshness detection

## Data Sharing

### We Do NOT Sell Your Data
We never sell your personal information to third parties.

### Third-Party Services

| Service | Data Shared | Purpose |
|---------|-------------|---------|
| **Firebase Auth** | Email, password hash | Authentication |
| **Google Firestore** | All application data | Database storage |
| **Google Gemini** | Chat queries, content chunks | AI responses, embeddings |
| **Stripe** | Email, payment method | Billing |

### AI Processing
When you chat with Dex:
- Your query and relevant content chunks are sent to Google Gemini
- Queries are not used to train Google's models
- Responses are generated in real-time and not stored by Google

### Legal Requirements
We may disclose information if required by law or to:
- Comply with legal process
- Protect our rights and safety
- Prevent fraud or abuse

## Data Retention

| Data Type | Retention Period | Notes |
|-----------|------------------|-------|
| Account info | Until account deletion | Includes email, tier, credits |
| Sessions | Until you delete them | Includes all URLs and chat |
| Chat history | Until session deletion | Stored per session |
| Domain cache | 24 hours | Auto-expiring TTL |
| Page cache | 24 hours | Auto-expiring TTL |
| Embeddings | Permanent | Shared across users |
| Payment records | 7 years | Legal requirement |
| Error logs | 30 days | Debugging purposes |

## Your Rights

### Access and Export
You can view your data through the DocWeb interface:
- All saved sessions with metadata
- Discovered URLs and scraped content
- Chat history with Dex
- Credit usage statistics

### Deletion
You can delete:
- Individual sessions (cascades to URLs and chat)
- Your entire account (contact support at seanseo.llc@gmail.com)

Note: Global cache entries (embeddings, page cache) are shared and cannot be individually deleted, but they are not linked to your identity.

### Data Portability
Contact us to request an export of your data in machine-readable format.

### Opt-Out
- Unsubscribe from marketing emails (if any)
- Disable cookies (may affect authentication)
- Delete your account to remove all personal data

## Your Privacy Rights by Region

### For California Residents (CCPA)
If you are a California resident, you have the right to:
- **Know** what personal information we collect, use, and disclose
- **Delete** your personal information (subject to certain exceptions)
- **Opt-out** of the sale of personal information (we do not sell your data)
- **Non-discrimination** for exercising your privacy rights

To exercise these rights, contact us at [seanseo.llc@gmail.com](mailto:seanseo.llc@gmail.com).

### For European Users (GDPR)
If you are located in the European Economic Area, you have the right to:
- **Access** your personal data
- **Rectification** of inaccurate data
- **Erasure** ("right to be forgotten")
- **Restrict processing** of your data
- **Data portability** in a machine-readable format
- **Object** to processing based on legitimate interests
- **Withdraw consent** at any time (where processing is based on consent)

**Legal Basis for Processing**: We process your data based on:
- Contract performance (providing our services)
- Legitimate interests (improving services, security)
- Consent (marketing communications, if applicable)

**Data Controller**: DocWeb (Sean Seo)
**Contact**: [seanseo.llc@gmail.com](mailto:seanseo.llc@gmail.com)

You may also lodge a complaint with your local data protection authority.

## Cookies and Local Storage

We use cookies and local storage for:
- **Authentication state**: Firebase Auth session tokens
- **Theme preferences**: Light/dark mode setting
- **Session management**: Current session ID

We do not use third-party tracking cookies.

You can manage cookie preferences through your browser settings. Note that disabling cookies may affect authentication functionality.

## Children's Privacy

DocWeb is not intended for users under 18 years of age. We do not knowingly collect personal information from minors. If we discover we have collected data from a user under 18, we will delete it promptly.

## Security Measures

We implement comprehensive security measures:

| Measure | Implementation |
|---------|----------------|
| Encryption in transit | HTTPS/TLS for all connections |
| Encryption at rest | Firestore encryption |
| Password security | Firebase Auth with hashing |
| Access control | Firestore security rules per user |
| Rate limiting | p-limit concurrency control |
| Bot protection | robots.txt compliance, crawl-delay |
| Payment security | Stripe PCI compliance |
| Incident response | Users notified within 72 hours of confirmed breach |

See our [Security](../security/index.md) page for more details.

## Third-Party Websites

When you discover and scrape third-party websites:
- We access only publicly available content
- We strictly respect robots.txt directives
- We honor crawl-delay specifications
- We do not bypass authentication or paywalls
- We identify ourselves as `DocWeb-Bot/1.0`

You are responsible for ensuring your use complies with third-party terms of service. See our [Acceptable Use Policy](acceptable-use.md).

## International Data Transfers

DocWeb uses Google Cloud infrastructure. Your data may be processed in:
- United States (primary)
- Other Google Cloud regions for redundancy

We rely on Google's data processing agreements and standard contractual clauses for international transfers.

## Changes to This Policy

We may update this Privacy Policy periodically. Changes will be:
- Posted on this page with updated "Last Updated" date
- Announced via email for significant changes
- Effective immediately upon posting

Continued use of DocWeb after changes constitutes acceptance of the updated policy.

## Contact Us

For privacy-related questions, requests, or concerns:

**Email**: [seanseo.llc@gmail.com](mailto:seanseo.llc@gmail.com)

**Data Protection Contact**: Sean Seo

**Response Time**: We aim to respond within 7 business days

**Mailing Address**: Available upon request
