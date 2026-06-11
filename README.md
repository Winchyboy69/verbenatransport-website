# Verbena Transport Ltd. — Company Website

Marketing site for [Verbena Transport Ltd.](https://verbenatransport.com), a heavy equipment and oversize load transportation company based in British Columbia, Canada.

**Live site:** https://verbenatransport.com

## Stack

Plain HTML, CSS, and vanilla JavaScript — no frameworks, no build step. Hosted on **Netlify** with automatic deploys from the `main` branch of this repo.

| File | Purpose |
|---|---|
| `index.html` | Single-page site: hero, services, how-it-works, about, quote form |
| `style.css` | All styling (Space Grotesk / Inter type, orange `#F97316` + navy `#1E3A5F` palette) |
| `main.js` | Header scroll state, mobile menu, scroll-reveal animations, form submit |
| `favicon.svg` | SVG petal logo mark |
| `assets/` | Logo and web-optimized photos (EXIF stripped, multiple sizes for `srcset`) |
| `robots.txt` / `sitemap.xml` | Search engine crawling config |
| `RALPH_PRD.md` | Original build spec (historical) |

## Editing the site

Every push to `main` deploys to production automatically — there is no staging site. To make changes:

1. Edit the files (all copy lives directly in `index.html`).
2. Preview locally (see below) before pushing.
3. Commit and push to `main`; Netlify deploys in under a minute.

### Local preview

Any static file server works, e.g.:

```sh
python -m http.server 8000
# then open http://localhost:8000
```

### Adding photos

Don't commit photos straight off a phone — resize to ~1920px wide max and strip EXIF metadata first (location/device data would otherwise be published). Provide a smaller variant too and wire both into `srcset` like the existing images.

## Contact form

The quote form uses **Netlify Forms** (form name: `contact`). Requirements for it to keep working:

- The `<form>` must keep `data-netlify="true"` and the hidden `form-name` input.
- The AJAX submit in `main.js` must POST **URL-encoded** data (Netlify rejects multipart).
- Submission notifications (email to sraw@verbenatransport.com) are configured in the Netlify dashboard under **Forms → Form notifications**, not in this repo.

## Domain / DNS

- Registrar & DNS: GoDaddy (`domaincontrol.com` nameservers)
- Apex `verbenatransport.com` → A record `104.198.14.52` (Netlify load balancer)
- `www` requires a CNAME at GoDaddy pointing to the Netlify site address, plus the alias added in Netlify's Domain management

## Content guidelines

Only claim credentials the company actually holds and can document (e.g., NSC certification, insurance, oversize permits). No invented testimonials, stats, or service claims.
