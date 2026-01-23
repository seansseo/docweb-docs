# Managing Your Subscription

Learn how to upgrade, downgrade, or cancel your DocWeb subscription.

## Upgrading Your Plan

### From the App
1. Click the **credits display** in the session sidebar
2. Click **"Upgrade"** or **"View Plans"**
3. Select your desired tier (Pro or Max)
4. Complete payment via Stripe

### What Happens When You Upgrade
- Immediate access to new tier benefits
- Credits reset to new tier limit
- Session limit increases immediately
- Billing starts from upgrade date

## Downgrading Your Plan

### How to Downgrade
1. Access the **Stripe Customer Portal** (link in account settings)
2. Select **"Change Plan"**
3. Choose a lower tier
4. Confirm the change

### What Happens When You Downgrade
- Change takes effect at end of billing period
- Credits reduce to new tier limit
- Sessions exceeding new limit are archived (not deleted)
- You keep access to Pro/Max until period ends

## Canceling Your Subscription

### How to Cancel
1. Access the **Stripe Customer Portal**
2. Click **"Cancel Subscription"**
3. Confirm cancellation

### What Happens When You Cancel
- Access continues until end of billing period
- Account reverts to Free tier afterward
- Sessions exceeding Free limit are archived
- Data is NOT deleted (you can re-subscribe)

## Stripe Customer Portal

The Stripe Customer Portal lets you:
- View payment history
- Update payment method
- Change subscription plan
- Cancel subscription
- Download invoices

Access via: **Account Settings** → **Manage Subscription**

## Billing Cycle

### Monthly Billing
- Subscriptions are billed monthly
- Billed on the same day each month
- Pro-rated if you upgrade mid-cycle

### Payment Methods
- Credit cards (Visa, Mastercard, Amex)
- Debit cards
- Processed securely via Stripe

### Failed Payments
If a payment fails:
1. You receive an email notification
2. Stripe retries the payment
3. After multiple failures, subscription is paused
4. Update payment method to restore access

## Invoices and Receipts

### Accessing Invoices
1. Open Stripe Customer Portal
2. Click **"Billing History"**
3. Download PDF invoices

### Invoice Contents
- Plan name and price
- Billing period
- Payment method (last 4 digits)
- Tax information (if applicable)

## Refunds

### Refund Policy
- No refunds for partial months
- No refunds for unused credits
- Contact support for exceptional circumstances

### Requesting a Refund
Email [seanseo.llc@gmail.com](mailto:seanseo.llc@gmail.com) with:
- Account email
- Reason for refund request
- Billing period in question

## Session Limits and Archiving

### When You Downgrade
If you have more sessions than your new tier allows:
- Oldest sessions (by `lastAccessedAt`) are archived
- Archived sessions remain in the database
- They don't count toward your limit
- Data is preserved

### Accessing Archived Sessions
Currently, archived sessions are not visible in the UI. To restore access, upgrade to a tier with a higher session limit.

## FAQ

### Can I switch between Pro and Max?
Yes, you can upgrade from Pro to Max or downgrade from Max to Pro at any time via the Stripe Customer Portal.

### What if I need more than 100 credits/day?
Contact us at [seanseo.llc@gmail.com](mailto:seanseo.llc@gmail.com) to discuss enterprise options.

### Is there an annual discount?
Not currently. All subscriptions are monthly.

### Can I pause my subscription?
Not directly, but you can cancel and re-subscribe later. Your data is preserved.

### How do I update my payment method?
Use the Stripe Customer Portal → "Payment Methods" → "Add" or "Update"
