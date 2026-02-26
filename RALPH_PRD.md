# Project PRD: Verbena Transport Website

## Context

One-page landing page for Verbena Transport Ltd., a construction equipment
transportation company based in BC, Canada.

- **Phone**: 778-891-6237
- **Email**: sraw@verbenatransport.com
- **Domain**: verbenatransport.com (hosted on Netlify via GitHub auto-deploy)
- **Tagline**: "Moving the machines that build the world."
- **Colors**: orange `#F97316`, navy `#1E3A5F`, grey `#6B7280`, white `#FFFFFF`
- **Logo**: `assets/logo.jpg`
- **Photos**: `assets/photo1.jpg`, `assets/photo2.jpg` (real photos of truck + equipment on it)
- **Contact form**: must use Netlify Forms — add `netlify` attribute to the form tag
  and a hidden input `<input type="hidden" name="form-name" value="contact">`
- **No JavaScript frameworks** — plain HTML and CSS only

## Tasks

- [ ] Create `index.html` and `style.css` files. Confirm `assets/` folder contains
  `logo.jpg`, `photo1.jpg`, `photo2.jpg`.

- [ ] Write the complete HTML structure in `index.html`:
  sticky nav (logo left, anchor links right),
  hero section (tagline + "Get a Quote" CTA button scrolling to contact),
  services section (3-4 service cards),
  about section,
  contact form section,
  footer with phone + email + copyright.

- [ ] Write all page copy directly into `index.html`:
  - Hero: tagline "Moving the machines that build the world." with a one-sentence
    sub-heading about specialized heavy equipment transport
  - Services (pick 4 that apply): Oversize Load Transport, Flatbed & Lowboy Hauling,
    Job Site Equipment Moves, Long-Distance Heavy Haul — write 1-2 sentence
    descriptions for each
  - About: 2-3 sentences establishing Verbena Transport as a reliable, experienced
    operator trusted by contractors across BC
  - Contact section heading: "Get a Quote" with a short line inviting clients to reach out

- [ ] Write all CSS in `style.css`:
  - Orange `#F97316` for CTA buttons, accents, hover states
  - Navy `#1E3A5F` for nav, footer, dark section backgrounds, headings
  - Grey `#6B7280` for body text, secondary info
  - White `#FFFFFF` for page background and text on dark backgrounds
  - Clean sans-serif font (use Google Fonts: Inter or similar via @import)
  - Card styling for services section
  - Form styling matching the palette

- [ ] Make the layout fully mobile responsive:
  - Nav collapses to stacked or hidden links on small screens
  - Hero and sections go single-column below 768px
  - Form fields full-width on mobile
  - Font sizes scale down appropriately

- [ ] Integrate photos and logo:
  - Logo in nav (height ~50px)
  - `photo1.jpg` as the hero background or a full-width image below the hero headline
  - `photo2.jpg` in the about section alongside the about text

- [ ] Build the Netlify contact form with fields:
  name (required), company, phone, message (required).
  Form must have `data-netlify="true"` and hidden `form-name` input.
  On submit show a simple thank-you message.
  Form sends to sraw@verbenatransport.com (Netlify handles this via form settings).

- [ ] Add to `index.html` `<head>`:
  - `<title>Verbena Transport Ltd. | Heavy Equipment Transportation BC</title>`
  - Meta description: "Verbena Transport Ltd. provides specialized heavy equipment
    and oversize load transportation across BC. Reliable, experienced, fully insured."
  - Viewport meta tag
  - Open Graph tags (title, description, image using photo1.jpg)

- [ ] Commit everything and push to GitHub:
  `git add -A && git commit -m "Complete Verbena Transport landing page" && git push origin main`
