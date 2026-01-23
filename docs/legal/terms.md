# Terms of Service

**Effective Date**: January 22, 2026
**Last Updated**: January 22, 2026

Welcome to DocWeb. By accessing or using our services at docweb.app, you agree to be bound by these Terms of Service ("Terms"). Please read them carefully.

## 1. Acceptance of Terms

By creating an account or using DocWeb, you agree to these Terms and our [Privacy Policy](privacy.md). If you do not agree, do not use our services.

## 2. Description of Service

DocWeb is an AI-powered documentation visualization platform that:
- Discovers and maps website structures using Waterfall Discovery
- Scrapes and indexes documentation content as Markdown
- Provides AI-assisted chat via "Dex" (powered by Google Gemini 2.5 Flash)
- Creates interactive neural-graph visualizations using Sigma.js
- Stores vector embeddings for semantic search (768-dimensional)

## 3. Account Registration

### 3.1 Requirements
- You must be at least 18 years old (or the age of majority in your jurisdiction, whichever is higher)
- You must provide accurate account information
- You are responsible for maintaining account security
- One account per person (no shared accounts)

### 3.2 Authentication Methods
DocWeb supports:
- Email and password (via Firebase Auth)
- Google OAuth sign-in

### 3.3 Account Security
- Keep your password confidential
- Use a strong, unique password
- Notify us immediately of unauthorized access at seanseo.llc@gmail.com
- You are responsible for all activity under your account
- We are not liable for losses due to compromised credentials

## 4. Subscription and Billing

### 4.1 Tiers and Pricing

| Tier | Price | Credits/Day | Max Sessions |
|------|-------|-------------|--------------|
| Free | $0 | 3 | 5 |
| Pro | $9.99/month | 10 | 20 |
| Max | $29.99/month | 100 | 20 |

Prices are in USD and may be subject to applicable taxes.

### 4.2 Credit System
- 1 credit = 1 discovery OR 1 chat message with Dex
- Credits reset daily at midnight UTC
- Unused credits do not roll over to the next day
- Cached discoveries may not consume credits
- Scraping within a session does not cost credits

### 4.3 Billing Terms
- Payments processed securely via Stripe
- Subscriptions auto-renew monthly on the billing date
- Cancel anytime via Stripe Customer Portal
- Downgrades take effect at end of billing period
- Upgrades take effect immediately with prorated charges

### 4.4 Refund Policy
- No refunds for partial months
- No refunds for unused credits
- Contact support for exceptional circumstances
- Chargebacks may result in account termination

## 5. Acceptable Use

### 5.1 Permitted Uses
- Visualizing and exploring publicly accessible documentation sites
- Research and competitive intelligence on public content
- Personal and commercial use within tier limits
- Educational and academic research
- Building internal knowledge bases from public documentation

### 5.2 Prohibited Uses
You may NOT use DocWeb to:
- Violate any applicable laws or regulations
- Infringe intellectual property rights
- Access content behind paywalls, logins, or authentication
- Circumvent robots.txt restrictions or anti-bot measures
- Overwhelm target servers beyond our built-in rate limits
- Scrape personal, private, or sensitive information
- Collect data for building competing AI training datasets
- Resell or redistribute scraped content without rights
- Create multiple accounts to circumvent tier limits
- Automate access beyond normal UI usage
- Engage in any malicious, harmful, or illegal activity

See our [Acceptable Use Policy](acceptable-use.md) for comprehensive guidelines.

### 5.3 Crawling Behavior
DocWeb's bot (`DocWeb-Bot/1.0`):
- Strictly respects robots.txt directives
- Honors crawl-delay specifications
- Uses rate limiting (p-limit concurrency control)
- Does not bypass authentication
- Maximum crawl depth of 3 levels
- Maximum 10,000 URLs per discovery source

## 6. Intellectual Property

### 6.1 DocWeb IP
DocWeb, the DocWeb logo, "Dex", and all software, algorithms, features, and documentation are our intellectual property or licensed to us. You may not:
- Copy, modify, or create derivative works
- Reverse engineer or decompile our software
- Remove proprietary notices or labels
- Use our trademarks without permission

### 6.2 Your Content
You retain ownership of:
- Custom queries and chat conversations
- Session organization and notes
- Any original content you create

By using DocWeb, you grant us a non-exclusive, worldwide license to process, store, and display your content as necessary to provide the service.

### 6.3 Third-Party Content
- Scraped content remains property of original website owners
- You are responsible for compliance with source site terms
- DocWeb makes no claim to third-party content
- Some content may be subject to Creative Commons or other licenses

### 6.4 Global Cache
- Embeddings and cached content are shared across users
- By using DocWeb, you consent to your discoveries contributing to the global cache
- Cached data is anonymized and not attributed to individual users

## 7. Data and Privacy

### 7.1 Data Processing
We process your data as described in our [Privacy Policy](privacy.md), including:
- Account information in Firebase Auth
- Session and URL data in Firestore
- Vector embeddings in global collection
- Payment data via Stripe

### 7.2 Data Retention
- User data retained until account deletion
- Session data retained until you delete it
- Global cache: 24-hour TTL (domain/page) or permanent (embeddings)
- Error and debugging logs: 30 days
- Payment records: 7 years (legal requirement)
- We may retain anonymized, aggregated data indefinitely

### 7.3 Data Export
You may request an export of your personal data by contacting us at [seanseo.llc@gmail.com](mailto:seanseo.llc@gmail.com). We will provide your data in a machine-readable format within 30 days of a verified request.

### 7.4 AI Processing
Chat queries are processed by Google Gemini:
- Queries sent with relevant content context
- Not used to train Google's models
- Subject to Google's AI terms of service

## 8. Service Availability

### 8.1 Uptime
We strive for high availability but do not guarantee:
- 100% uptime or uninterrupted service
- Specific response times or latency
- Availability in all geographic regions

### 8.2 Maintenance
We may perform maintenance that temporarily affects service. When possible, we will provide advance notice.

### 8.3 Third-Party Dependencies
DocWeb relies on:
- Google Cloud Platform (Firebase, Firestore)
- Google Gemini AI
- Stripe payment processing
- Third-party documentation websites

We are not responsible for outages or changes to these services.

## 9. Disclaimers

### 9.1 "As Is" Service
DOCWEB IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.

### 9.2 No Guarantee of Accuracy
We do not guarantee that:
- All URLs on a site will be discovered
- Scraped content will be complete, accurate, or current
- AI responses from Dex will be error-free or accurate
- Vector search will return all relevant results
- The service will meet your specific requirements

### 9.3 Third-Party Sites
We are not responsible for:
- Availability or uptime of third-party websites
- Accuracy or quality of third-party content
- Changes to third-party site structures or terms
- Actions taken by third-party site operators

### 9.4 AI Limitations
Dex (our AI assistant):
- May produce incorrect or incomplete responses
- Is limited to discovered and scraped content
- Cannot access real-time or authenticated information
- Should not be relied upon for critical decisions

## 10. Limitation of Liability

TO THE MAXIMUM EXTENT PERMITTED BY LAW:

- WE ARE NOT LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES
- WE ARE NOT LIABLE FOR LOSS OF PROFITS, DATA, USE, OR GOODWILL
- OUR TOTAL LIABILITY IS LIMITED TO AMOUNTS PAID BY YOU IN THE 12 MONTHS PRECEDING THE CLAIM
- FREE TIER USERS: OUR LIABILITY IS LIMITED TO $0

These limitations apply regardless of the theory of liability (contract, tort, or otherwise).

## 11. Indemnification

You agree to indemnify, defend, and hold harmless DocWeb and its officers, directors, employees, and agents from any claims, damages, losses, or expenses (including reasonable attorneys' fees) arising from:
- Your use of the service
- Your violation of these Terms
- Your violation of third-party rights
- Your violation of applicable laws
- Content you submit or actions you take

## 12. Termination

### 12.1 By You
- Cancel your subscription anytime via Stripe Customer Portal
- Delete your account by contacting seanseo.llc@gmail.com
- Data deletion per our Privacy Policy

### 12.2 By Us
We may suspend or terminate accounts that:
- Violate these Terms or Acceptable Use Policy
- Engage in fraudulent or illegal activity
- Abuse the service or other users
- Fail to pay subscription fees

Termination may be immediate and without refund for serious violations.

### 12.3 Effect of Termination
Upon termination:
- Access to the service ends immediately
- Your data may be deleted per our retention policy
- Global cache contributions are not removed

### 12.4 Survival
The following sections survive termination: Section 6 (Intellectual Property), Section 9 (Disclaimers), Section 10 (Limitation of Liability), Section 11 (Indemnification), Section 14 (Dispute Resolution), and any accrued payment obligations.

## 13. Changes to Terms

We may modify these Terms at any time. Changes will be:
- Posted on this page with updated "Last Updated" date
- Announced via email for material changes
- Effective immediately upon posting (or as specified)

Continued use after changes constitutes acceptance. If you disagree with changes, stop using DocWeb and cancel your account.

## 14. Dispute Resolution

### 14.1 Governing Law
These Terms are governed by the laws of the State of California, USA, without regard to conflict of law principles.

### 14.2 Informal Resolution
Before filing a formal dispute, contact us at seanseo.llc@gmail.com to attempt informal resolution. We will respond within 30 days.

### 14.3 Arbitration Agreement
Any disputes not resolved informally will be resolved through binding arbitration administered by JAMS under its Streamlined Arbitration Rules. Arbitration will be conducted in San Francisco, California.

### 14.4 Class Action Waiver
YOU AGREE TO RESOLVE DISPUTES ONLY ON AN INDIVIDUAL BASIS AND WAIVE ANY RIGHT TO PARTICIPATE IN CLASS ACTIONS.

### 14.5 Exceptions
The following may be brought in court:
- Small claims court actions
- Intellectual property disputes
- Injunctive relief for ongoing violations

## 15. Miscellaneous

- **Entire Agreement**: These Terms, Privacy Policy, and Acceptable Use Policy constitute the entire agreement
- **Severability**: Invalid provisions will be modified to minimum extent necessary; remaining provisions remain in effect
- **Waiver**: Failure to enforce a right does not waive it
- **Assignment**: You may not assign these Terms; we may assign them in connection with a merger or acquisition
- **Force Majeure**: We are not liable for failures due to circumstances beyond our control
- **Notices**: We may send notices via email or in-app notifications
- **Headings**: Section headings are for convenience and do not affect interpretation

## 16. Contact Us

For questions about these Terms:

**Email**: [seanseo.llc@gmail.com](mailto:seanseo.llc@gmail.com)

**Response Time**: We aim to respond within 7 business days

For urgent matters, include "URGENT" in your subject line.
