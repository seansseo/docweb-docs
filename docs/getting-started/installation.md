# System Requirements

DocWeb is a web-based SaaS application. No installation is required - simply visit [app.docweb.net](https://app.docweb.net) to get started.

## Browser Support

DocWeb uses WebGL for high-performance graph rendering. We recommend:

| Browser | Minimum Version |
|---------|-----------------|
| Chrome | 90+ |
| Firefox | 88+ |
| Safari | 14+ |
| Edge | 90+ |

**Requirements:**
- WebGL 2.0 support (for Sigma.js visualization)
- JavaScript enabled
- Stable internet connection

## Account Tiers

| Tier | Credits/Day | Max Sessions | Price |
|------|-------------|--------------|-------|
| Free | 3 | 5 | $0 |
| Pro | 10 | 20 | $9.99/mo |
| Max | 100 | 20 | $29.99/mo |

## For Developers

If you're contributing to DocWeb or running a local development instance:

### Prerequisites

- Node.js 20+
- Firebase CLI
- Google Cloud account (for Gemini API)
- Stripe account (for payments)

### Environment Variables

**Frontend** (`.env.local`):
```bash
NEXT_PUBLIC_USE_EMULATORS=false
NEXT_PUBLIC_USE_AUTH_EMULATOR=false
```

**Backend** (`functions/.env`):
```bash
GEMINI_API_KEY=your_gemini_api_key
STRIPE_SECRET_KEY=your_stripe_secret_key
STRIPE_WEBHOOK_SECRET=your_webhook_secret
```

### Local Development

```bash
# Install dependencies
npm install
cd functions && npm install

# Run frontend
npm run dev

# Run functions emulator (separate terminal)
cd functions && npm run serve

# Deploy functions
cd functions && npm run deploy
```

For more details on the architecture, see [Core Concepts](../core-concepts/index.md).
