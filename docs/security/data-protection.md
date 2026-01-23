# Data Protection

How DocWeb protects your data at rest, in transit, and during processing.

## Encryption

### In Transit
All data transmitted to and from DocWeb is encrypted:
- **Protocol**: TLS 1.2+ (TLS 1.3 preferred)
- **Certificates**: Managed by Google Cloud
- **HSTS**: Enforced for all connections

### At Rest
Data stored in Google Cloud is encrypted:
- **Firestore**: AES-256 encryption by default
- **Cloud Functions**: Encrypted execution environment
- **Backups**: Encrypted automatically

### Key Management
- Encryption keys managed by Google Cloud KMS
- Automatic key rotation
- No user-accessible encryption keys

## Data Segregation

### User Data Isolation
Each user's data is stored in separate Firestore paths:

```
artifacts/{userId}/public/data/sessions/{sessionId}
artifacts/{userId}/public/data/urls/{docId}
users/{userId}
```

Firestore security rules prevent cross-user access.

### Global Cache
Shared data is anonymized:

```
artifacts/global/domainCache/{domainHash}
artifacts/global/pageCache/{urlHash}
artifacts/global/embeddings/{urlHash}_chunk{N}
```

- No user identifiers in global cache
- URL hashes prevent direct URL exposure
- Content hashes track changes without storing raw URLs

## Data Types and Protection

### Sensitive Data

| Data Type | Protection |
|-----------|------------|
| Passwords | Hashed by Firebase Auth (never stored plaintext) |
| Payment info | Handled by Stripe (we never see full card numbers) |
| Email addresses | Stored encrypted in Firebase/Firestore |
| API keys | Stored as Firebase secrets (not in code) |

### Application Data

| Data Type | Storage | Encryption |
|-----------|---------|------------|
| Sessions | Firestore | AES-256 |
| Discovered URLs | Firestore | AES-256 |
| Scraped content | Firestore | AES-256 |
| Chat history | Firestore | AES-256 |
| Embeddings | Firestore | AES-256 |

## Access Controls

### Authentication Required
- All API endpoints require Firebase Auth token
- Tokens expire and must be refreshed
- Invalid tokens rejected immediately

### Authorization Rules
Firestore security rules enforce:
- Users can only read/write their own data
- Global cache is read-only for users
- Admin endpoints require special permissions

### API Security
- Cloud Functions validate all inputs
- Request size limits enforced
- Malformed requests rejected

## Data Minimization

### What We Collect
We only collect data necessary for the service:
- Account info for authentication
- Session data for functionality
- Usage data for billing
- Error logs for debugging

### What We Don't Collect
- Browsing history outside DocWeb
- Device identifiers or fingerprints
- Location data
- Personal files or documents

## Data Retention

### Automatic Deletion

| Data Type | Retention | Deletion |
|-----------|-----------|----------|
| Domain cache | 24 hours | Auto-expiring TTL |
| Page cache | 24 hours | Auto-expiring TTL |
| Error logs | 30 days | Auto-purged |

### User-Controlled Deletion

| Data Type | How to Delete |
|-----------|---------------|
| Sessions | Delete in app |
| Chat history | Deleted with session |
| Account | Contact support |

### Permanent Data
- Embeddings in global cache are permanent
- Anonymized usage statistics may be retained
- Legal records retained per requirements

## Backup and Recovery

### Automated Backups
- Firestore point-in-time recovery enabled
- Daily backups retained for 7 days
- Disaster recovery procedures in place

### Data Portability
Contact support to request:
- Export of your session data
- Export of your chat history
- Copy of your account information

## Third-Party Data Handling

### Google Gemini
When you use Dex:
- Queries sent to Google Gemini API
- Data processed in Google's infrastructure
- Not used to train Google's models
- Subject to Google's privacy policy

### Stripe
Payment processing:
- Card details handled by Stripe only
- We receive only last 4 digits and expiry
- Subject to Stripe's security standards

## Compliance

### GDPR Considerations
- Data processing lawful basis: Contract performance
- Right to access: Available via support request
- Right to deletion: Available via support request
- Data portability: Available via support request

### CCPA Considerations
- No sale of personal information
- Right to know: Detailed in Privacy Policy
- Right to delete: Available via support request

## Security Contacts

### Report a Vulnerability
Email: [seanseo.llc@gmail.com](mailto:seanseo.llc@gmail.com)
Subject: Security Vulnerability Report

### Data Protection Inquiries
Email: [seanseo.llc@gmail.com](mailto:seanseo.llc@gmail.com)
Subject: Data Protection Request

### Response Times
- Security vulnerabilities: 48 hours
- Data requests: 30 days
- General inquiries: 7 business days
