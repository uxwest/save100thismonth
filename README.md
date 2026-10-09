# Save100ThisMonth.com

**Spend smarter. Get more.** An editorial site about smart spending, better value, and practical money decisions for US readers.

Static site: semantic HTML + CSS + vanilla JavaScript. No build step required — open the files or serve the folder with any static host (GitHub Pages, Netlify, Cloudflare Pages).

## Structure

```
/index.html                 Home (editorial cover)
/about/, /contact/          Trust pages
/editorial-policy/, /fact-checking/, /corrections/
/advertising-disclosure/, /privacy/, /cookies/, /terms/
/money/                     Savings accounts, online banks, investing basics
/shopping/                  Smart shopping, deals, cashback, meal delivery
/bills/                     Insurance, phone plans, local services
/subscriptions/             Website builders, software, Wix vs Squarespace
/tools/                     Interactive calculators (vanilla JS)
/sitemap/                   HTML sitemap
sitemap.xml, robots.txt
/download.html              Helper page describing how to export/deploy the site
/content/facebook-hooks.md  Honest Facebook hook system per article
```

## Editorial rules

- No invented prices, rankings, authors, or statistics.
- Articles are **comparison frameworks**: criteria, methodology, what to verify, and links to primary sources — with a "last verified" note where applicable.
- `$100 this month` is an aspirational goal, never a promise of savings or results.
- AdSense/affiliate placeholders are documented as PENDING until real IDs exist.

## Local preview

```
python3 -m http.server 8000
# open http://localhost:8000
```
