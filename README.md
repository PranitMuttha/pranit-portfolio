# Pranit Portfolio Website

A premium animated professional portfolio with a main page, project case-study pages, SEO support files, and branding assets.

## Files

- `pranit-portfolio.html` — complete responsive website with advanced animations
- `projects/*.html` — detailed project case-study pages
- `404.html` — custom not-found page
- `Pranit-Muttha-Resume.txt` — downloadable resume snapshot
- `favicon.svg` — brand favicon
- `og-image.svg` — social preview image
- `sitemap.xml` — SEO sitemap for search engines
- `robots.txt` — crawling directives + sitemap location

## Run locally

```bash
cd "/Users/pranit/Downloads/pranit porfolio"
python3 -m http.server 8080
```

Then open:

- `http://localhost:8080/pranit-portfolio.html`
- `http://localhost:8080/projects/mutthasales-enterprise-platform.html`
- `http://localhost:8080/404.html`

## Customize quickly

- Update personal details in the hero/about/contact sections.
- Replace project cards in the `#projects` section.
- Update case studies in the `#case-studies` section with fresh measurable outcomes.
- Update dedicated project pages inside `projects/`.
- Tune animations inside the bottom `<script>` block.
- Edit colors in `:root` CSS variables.
- Replace `G-XXXXXXXXXX` with your real GA4 measurement ID.
- Replace `https://pranitmuttha.com/` in canonical, OpenGraph, `sitemap.xml`, and `robots.txt` with your final domain.
