# Credits System

Credits are DocWeb's usage currency. Understanding how credits work helps you make the most of your tier.

## How Credits Work

### Credit Costs

| Action | Cost | Description |
|--------|------|-------------|
| Discovery | 1 credit | Discover and map a documentation site |
| Chat message | 1 credit | Send a message to Dex |

### Daily Limits

| Tier | Credits/Day |
|------|-------------|
| Free | 3 |
| Pro | 10 |
| Max | 100 |

### Reset Time

Credits reset at **midnight UTC** every day. The countdown is displayed in the session sidebar.

### No Rollover

Unused credits do **not** roll over to the next day. Use them or lose them!

## Checking Your Credits

### Session Sidebar
The left sidebar shows:
- Current credits remaining
- Time until reset
- Your current tier

### Usage Modal
Click your credits display to open the Usage Modal with detailed information:
- Credits used today
- Credits remaining
- Next reset time
- Total discoveries
- Total chat messages

## Conserving Credits

### Use Cached Discoveries
If someone recently discovered the same domain, you may get cached results instantly without using a credit. The response will indicate `source: "cache"`.

### Plan Your Chat
Each message costs 1 credit. Make your questions specific and comprehensive to get better answers in fewer messages.

### Scraping is Free
Scraping content within a session does NOT cost credits. Only the initial discovery and chat messages use credits.

### Session Switching is Free
Switching between saved sessions does not cost credits.

## What Happens When Credits Run Out

### Discovery
You cannot start new discoveries until credits reset.

### Chat
You cannot send new messages to Dex until credits reset.

### Existing Sessions
You can still:
- View existing sessions and graphs
- Browse discovered URLs
- Read previous chat history
- Navigate the visualization

## Credit Tracking

Credits are tracked in your user profile:

```typescript
interface UserCreditsProfile {
    creditsUsedToday: number;
    creditsRemaining: number;
    creditsPerDay: number;
    nextResetTime: string;     // ISO string (midnight UTC)
    totalDiscoveries: number;
    totalChatMessages: number;
}
```

## Upgrading for More Credits

If you frequently run out of credits, consider upgrading:

| From | To | Additional Credits |
|------|----|--------------------|
| Free | Pro | +7 credits/day |
| Free | Max | +97 credits/day |
| Pro | Max | +90 credits/day |

See [Pricing & Plans](pricing.md) for details.

## FAQ

### Why didn't my discovery use a credit?
If the domain was recently discovered by another user, you may have received cached results.

### Can I buy additional credits?
Currently, the only way to get more credits is to upgrade your tier.

### Do credits transfer between accounts?
No, credits are tied to individual accounts.

### What timezone is the reset?
Credits reset at midnight UTC, regardless of your local timezone.
