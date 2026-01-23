# Security Overview

DocWeb implements multiple layers of security to protect your data and ensure safe operation.

## Architecture Security

### Infrastructure
DocWeb runs on Google Cloud Platform:
- **Firebase Auth**: Handles authentication securely
- **Cloud Firestore**: Encrypted database with security rules
- **Cloud Functions**: Serverless, isolated execution environment
- **HTTPS**: All traffic encrypted with TLS

### Authentication

We support two secure authentication methods:

| Method | Provider | Features |
|--------|----------|----------|
| Email/Password | Firebase Auth | Password hashing, email verification |
| Google OAuth | Google Identity | 2FA support, secure token exchange |

### Authorization

Firestore security rules enforce data access:

```
users can only access their own data:
- artifacts/{userId}/** → User-specific sessions and URLs
- users/{userId} → User profile and credits

global data is read-only for authenticated users:
- artifacts/global/** → Shared cache and embeddings
```

## Application Security

### Input Validation
- URLs are validated before discovery
- User inputs are sanitized
- Request payloads are type-checked

### Rate Limiting
- Built-in concurrency control (p-limit)
- Credit system limits discovery and chat
- Per-user session limits

### Error Handling
- Errors are logged securely
- Sensitive information is not exposed to clients
- Stack traces are not returned in production

## Crawling Security

### Respectful Crawling
DocWeb's bot (`DocWeb-Bot/1.0`) follows web standards:
- **robots.txt**: Strictly respected
- **crawl-delay**: Honored
- **noindex/nofollow**: Respected where applicable

### Limitations
- Max crawl depth: 3 levels
- Max sitemap depth: 5 levels
- Request timeout: 15 seconds
- Max URLs per source: 10,000

### No Bypass
DocWeb does NOT:
- Bypass authentication or paywalls
- Circumvent anti-bot measures
- Access restricted content
- Ignore robots.txt rules

## Third-Party Security

### Google Cloud
- SOC 2 Type II certified
- ISO 27001 certified
- GDPR compliant

### Stripe
- PCI-DSS Level 1 compliant
- We never see or store full card numbers
- Tokenized payment processing

### Google Gemini
- Enterprise-grade AI service
- Data not used for model training
- Secure API connections

## Incident Response

### Monitoring
- Real-time error logging
- Performance monitoring
- Unusual activity detection

### Response Process
1. Detection and assessment
2. Containment and mitigation
3. User notification (if required)
4. Root cause analysis
5. Prevention measures

### Contact
Report security issues to: [seanseo.llc@gmail.com](mailto:seanseo.llc@gmail.com)

## Compliance

### Data Protection
- User data segregated by userId
- Data deletion available on request
- Data export available on request

### Privacy
- No selling of personal data
- Minimal data collection
- Clear privacy policy

See our [Privacy Policy](../legal/privacy.md) for complete details.

## Security Best Practices for Users

### Account Security
1. Use a strong, unique password
2. Enable Google OAuth for added security
3. Don't share your account credentials
4. Log out from shared devices

### Safe Usage
1. Only discover sites you have permission to analyze
2. Review scraped content for sensitive information
3. Be cautious with third-party site terms of service
4. Report suspicious activity
