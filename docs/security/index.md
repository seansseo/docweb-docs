---
sidebar_position: 8
---

# Security

DocWeb is committed to protecting your data and maintaining the security of our platform.

## [Security Overview](overview.md)
Our security architecture and practices.

## [Data Protection](data-protection.md)
How we protect your data at rest and in transit.

## Quick Reference

### Security Features

| Feature | Implementation |
|---------|----------------|
| Encryption in Transit | TLS 1.3 / HTTPS |
| Encryption at Rest | Google Cloud default encryption |
| Authentication | Firebase Auth (email, Google OAuth) |
| Authorization | Firestore security rules |
| Password Storage | Hashed (never plaintext) |
| Payment Security | Stripe PCI-DSS compliance |
| Rate Limiting | p-limit concurrency control |
| Bot Compliance | robots.txt, crawl-delay |

### Reporting Security Issues

If you discover a security vulnerability, please report it responsibly:

**Email**: [seanseo.llc@gmail.com](mailto:seanseo.llc@gmail.com)

**Subject**: Security Vulnerability Report

Please include:
- Description of the vulnerability
- Steps to reproduce
- Potential impact
- Your contact information

We will acknowledge receipt within 48 hours and work to address valid issues promptly.
