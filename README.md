# Save100ThisMonth.com

**Spend smarter. Get more.** An independent US personal-finance and consumer-decisions publication. Static site: semantic HTML, one stylesheet, vanilla JavaScript. No build step, no database.

## Editorial position

We publish **comparison frameworks**, not frozen rankings. Rates, fees and terms change constantly, so every guide teaches you how to compare and points you to primary sources, with illustrative figures clearly labelled. We never publish invented prices, rankings, authors or results. "$100 this month" is an aspirational goal, never a promise.

## Design system (v6)

- One stylesheet: `assets/css/style.css`
- Serif headlines (Georgia) for an editorial feel, system sans for body text
- Dark navy hero and footer, white content cards, soft grey page background
- Components: hero, stat cards, data tables with highlighted rows, formula blocks, callouts, pull-quotes, figures with captions, FAQ accordions, calculator result panels
- Ad slots are marked PENDING and contain no ad code

## Template rule (important)

The header and footer are **written statically into every page** with identical markup, identical class names and identical menu order. There is no JavaScript-injected navigation, because that is what previously caused the menu to differ between pages.

Menu order, everywhere: Money · Shopping · Bills · Subscriptions · Tools, plus a Search button.

## Structure

```
index.html                          Home
money/                              Money & Better Returns
shopping/                           Smart Shopping & Deals
bills/                              Bills, Insurance & Telecom
subscriptions/                      Subscriptions & Digital Services
tools/                              Calculators & Tools
search/  sitemap/  404.html         Discovery pages
about/ contact/ editorial-policy/   Trust pages
fact-checking/ corrections/ advertising-disclosure/
privacy/ cookies/ terms/
assets/css/style.css                The single stylesheet
assets/template-v3.html             Reference markup block
content/facebook/README.md          Open Graph hooks for external posting
sitemap.xml  robots.txt
```

## Article standard

Long-form guides include: a narrative lede, stat cards, table of contents, multiple H2 sections, at least two data tables, a formula block where arithmetic matters, callouts, a pull-quote, a figure with caption and alt text, an FAQ accordion, and a sources section. There is deliberately no "quick answer" box — the reader is meant to read.

## Local preview

```
python3 -m http.server 8000
# open http://localhost:8000
```

## Deployment

Fully static. Works on GitHub Pages, Cloudflare Pages, Netlify or any web server. For GitHub Pages: Settings → Pages → deploy from branch `main`, root folder.

## Still pending (documented, not hidden)

- AdSense: slot markup is reserved but no publisher ID or ads.txt exists yet, and none is invented.
- Contact email addresses are placeholders and must be replaced before launch.
- Privacy and cookie policies are drafts that must match the analytics and advertising actually deployed.
- Trust pages predate the v6 theme and should be migrated to the same header and footer when convenient.
