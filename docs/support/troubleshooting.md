# Troubleshooting

Common issues and how to resolve them.

## Discovery Issues

### "Discovery failed" error

**Symptoms**: Discovery starts but fails with an error message.

**Possible Causes**:
1. Invalid URL format
2. Site is unreachable
3. Site blocks bots (robots.txt)
4. Server timeout

**Solutions**:
- Verify the URL is correct and accessible in your browser
- Check if the site has a robots.txt that blocks crawlers
- Try discovering a different page on the same site
- Wait and try again (site may be temporarily down)

### No pages discovered

**Symptoms**: Discovery completes but shows 0 or very few URLs.

**Possible Causes**:
1. No sitemap available
2. Navigation not crawlable
3. JavaScript-rendered content (SPA)
4. robots.txt restrictions

**Solutions**:
- Check if the site has a sitemap at `/sitemap.xml`
- Try discovering from a different starting URL
- Some SPAs may not be fully discoverable

### Discovery takes too long

**Symptoms**: Discovery runs for several minutes without completing.

**Possible Causes**:
1. Large site with many pages
2. Slow server responses
3. Deep sitemap hierarchy

**Solutions**:
- Wait for completion (large sites take time)
- Try discovering a more specific section of the site
- Check your internet connection

---

## Graph Visualization Issues

### Graph not loading

**Symptoms**: Blank screen where graph should appear.

**Possible Causes**:
1. WebGL not supported
2. Browser compatibility issue
3. JavaScript disabled

**Solutions**:
- Update your browser to the latest version
- Enable WebGL in browser settings
- Try a different browser (Chrome recommended)
- Check browser console for errors

### Graph is slow/laggy

**Symptoms**: Graph moves slowly when zooming or panning.

**Possible Causes**:
1. Too many nodes visible
2. Older GPU/device
3. Other browser tabs consuming resources

**Solutions**:
- Zoom into a specific cluster to reduce visible nodes
- Close other browser tabs
- Use a device with better graphics performance
- Wait for ForceAtlas2 layout to settle

### Nodes overlapping

**Symptoms**: Nodes are clustered together and hard to distinguish.

**Possible Causes**:
1. Layout still running
2. Many similar URLs

**Solutions**:
- Wait for the ForceAtlas2 layout to complete
- Zoom in to spread nodes apart
- Click on a cluster to focus on it

---

## Chat Issues

### Dex not responding

**Symptoms**: Chat message sent but no response received.

**Possible Causes**:
1. Out of credits
2. Server timeout
3. Network issue

**Solutions**:
- Check your remaining credits
- Wait and try again
- Check your internet connection
- Refresh the page

### Dex gives wrong answers

**Symptoms**: Dex's response doesn't match the documentation.

**Possible Causes**:
1. Relevant page not scraped
2. Information in non-scraped section
3. AI misinterpretation

**Solutions**:
- Scrape the relevant cluster first
- Be more specific in your question
- Check the source links provided
- Rephrase your question

### "No relevant content found"

**Symptoms**: Dex can't find information to answer your question.

**Possible Causes**:
1. Content not scraped
2. Question too vague
3. Information doesn't exist in documentation

**Solutions**:
- Trigger a scrape on relevant clusters
- Ask more specific questions
- Check if the topic exists on the source site

---

## Account Issues

### Can't sign in

**Symptoms**: Login fails or loops.

**Possible Causes**:
1. Incorrect password
2. Account doesn't exist
3. Browser blocking cookies

**Solutions**:
- Reset your password
- Create a new account
- Enable cookies for docweb.net
- Try signing in with Google OAuth
- Clear browser cache and cookies

### Credits not updating

**Symptoms**: Credit count doesn't change after reset time.

**Possible Causes**:
1. Time zone confusion (resets at midnight UTC)
2. Display cache
3. Account sync issue

**Solutions**:
- Check the reset time displayed in the sidebar
- Refresh the page
- Sign out and sign back in

### Sessions missing

**Symptoms**: Previously saved sessions not appearing.

**Possible Causes**:
1. Signed into wrong account
2. Sessions were deleted
3. Archived due to session limit

**Solutions**:
- Verify you're signed into the correct account
- Sessions may have been archived if you exceeded your limit
- Upgrade to increase session limit

---

## Billing Issues

### Payment failed

**Symptoms**: Subscription payment didn't process.

**Possible Causes**:
1. Card declined
2. Insufficient funds
3. Card expired

**Solutions**:
- Check your payment method in Stripe portal
- Update to a valid card
- Contact your bank if the card should work

### Subscription not active

**Symptoms**: Showing as Free tier after subscribing.

**Possible Causes**:
1. Payment still processing
2. Webhook delay
3. Account mismatch

**Solutions**:
- Wait a few minutes and refresh
- Check your email for confirmation
- Contact support with your payment receipt

### Can't access Stripe portal

**Symptoms**: "Manage Subscription" link doesn't work.

**Possible Causes**:
1. No active subscription
2. Popup blocked
3. Browser issue

**Solutions**:
- Enable popups for docweb.net
- Try a different browser
- Contact support for direct portal link

---

## Scraping Issues

### "Scrape failed" on specific pages

**Symptoms**: Some pages fail to scrape while others succeed.

**Possible Causes**:
1. Page blocks bots
2. Invalid HTML
3. Timeout
4. Non-text content

**Solutions**:
- Some pages may not be scrapeable
- Check if page loads in browser
- Report persistent issues to support

### Scraped content looks wrong

**Symptoms**: Markdown content doesn't match original page.

**Possible Causes**:
1. Complex HTML structure
2. Dynamic content not captured
3. Conversion limitations

**Solutions**:
- View original page for accurate content
- Report formatting issues for improvement
- Some content types (tables, images) may not convert well

---

## Still Stuck?

If none of these solutions work:

1. **Refresh the page** and try again
2. **Clear browser cache** and cookies
3. **Try a different browser**
4. **Contact support** at [seanseo.llc@gmail.com](mailto:seanseo.llc@gmail.com)

Include in your support request:
- Your account email
- Steps to reproduce the issue
- Screenshots of any errors
- Browser and device information
