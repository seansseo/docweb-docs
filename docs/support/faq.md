# Frequently Asked Questions

Common questions about DocWeb and how it works.

## General

### What is DocWeb?
DocWeb is an AI-powered documentation visualization platform that transforms website documentation into interactive neural-graph visualizations. It includes Dex, an AI chatbot that can answer questions about the discovered documentation.

### How does DocWeb work?
1. Enter a documentation URL
2. DocWeb discovers all pages using Waterfall Discovery (sitemaps + navigation crawl)
3. Pages are visualized as an interactive graph
4. Content is scraped and indexed for AI chat
5. Ask Dex questions and get source-cited answers

### Is DocWeb free?
Yes! The Free tier includes 3 credits per day and 5 sessions. Paid tiers (Pro: $9.99/mo, Max: $29.99/mo) offer more credits and sessions.

### What sites can I discover?
DocWeb can discover any publicly accessible documentation site. It works best with:
- Technical documentation
- API references
- Product documentation
- Knowledge bases

It cannot access:
- Content behind logins
- Paywalled content
- Sites blocking our bot

## Credits and Billing

### How do credits work?
- 1 credit = 1 discovery OR 1 chat message
- Credits reset daily at midnight UTC
- Unused credits don't roll over
- Cached discoveries may not use credits

### Why didn't my discovery use a credit?
If the domain was recently discovered by another user, you may have received cached results, which don't consume credits.

### Can I get more credits?
Upgrade to a higher tier for more daily credits:
- Free: 3 credits/day
- Pro: 10 credits/day
- Max: 100 credits/day

### How do I cancel my subscription?
1. Click your account in the sidebar
2. Select "Manage Subscription"
3. Use the Stripe Customer Portal to cancel

## Discovery

### Why didn't DocWeb find all pages?
Possible reasons:
- Pages aren't linked from navigation or sitemaps
- robots.txt blocks our bot
- Pages require authentication
- Content is dynamically loaded (SPA)
- Pages are deeper than crawl depth (3 levels)

### How long does discovery take?
- Cached domains: < 1 second
- Small sites (< 100 pages): 5-15 seconds
- Medium sites (100-500 pages): 15-60 seconds
- Large sites (500+ pages): 1-5 minutes

### Can I re-discover a site?
Yes. If you need fresh data, start a new discovery. The cache expires after 24 hours anyway.

## Dex (AI Chatbot)

### Who is Dex?
Dex is DocWeb's AI assistant powered by Google Gemini 2.5 Flash. Dex answers questions about discovered documentation with source citations.

### Why doesn't Dex know about a topic?
- The relevant page may not be scraped yet (trigger a cluster scrape)
- The content might be in a non-English section
- The information might not exist in the documentation

### Are Dex's answers accurate?
Dex uses RAG (Retrieval-Augmented Generation) to ground answers in actual documentation. However:
- Always verify answers against source links
- Dex may misinterpret complex topics
- Some information may be outdated if the source site changed

### What are "thinking steps"?
Dex shows its reasoning process: what it searched for, which sources it found relevant, and how it formulated the answer.

## Graph Visualization

### What do the colors mean?
Each cluster has a distinct color. Common mappings:
- Purple: Documentation/Docs
- Green: API
- Blue: Features
- Amber: Support/Help

### What do node sizes mean?
Larger nodes have higher priority scores (more important pages). Structural nodes (from navigation) are also emphasized.

### Can I export the graph?
Currently, the graph cannot be exported. This feature may be added in the future.

## Data and Privacy

### Is my data private?
Your sessions and chat history are private to your account. However, scraped content and embeddings contribute to a shared cache that benefits all users.

### Can I delete my data?
Yes:
- Delete individual sessions in the app
- Delete your entire account by contacting support

### Does DocWeb store my passwords?
No. Passwords are hashed by Firebase Auth. We never see or store plaintext passwords.

## Technical

### What browsers are supported?
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

WebGL 2.0 support is required for the graph visualization.

### Why is the graph slow?
Large graphs (1000+ nodes) may be slow on older devices. Try:
- Zooming into a specific cluster
- Using a device with better GPU
- Reducing the number of visible nodes

### Why did scraping fail?
Common reasons:
- Site blocks bots
- Request timeout (page too slow)
- Invalid HTML structure
- Server errors

## Still Have Questions?

Contact support at [seanseo.llc@gmail.com](mailto:seanseo.llc@gmail.com)
