# Pranit Portfolio Website

A premium animated professional portfolio with a main page, project case-study pages, SEO support files, and branding assets.

## Files

- `pranit-portfolio.html` — complete responsive website with advanced animations
- `projects/*.html` — detailed project case-study pages
- `assets/projects/*.svg` — lightweight visual gallery assets for project pages
- `404.html` — custom not-found page
- `Pranit-Muttha-Resume.txt` — downloadable resume snapshot
- `resume.html` — print-friendly resume page (use browser Print to save PDF)
- `favicon.svg` — brand favicon
- `og-image.svg` — social preview image
- `site.webmanifest` — web app metadata for browser integration
- `sitemap.xml` — SEO sitemap for search engines
- `robots.txt` — crawling directives + sitemap location
- `netlify.toml` — Netlify redirects, headers, and custom 404 routing

## Run locally

```bash
cd "/Users/pranit/Downloads/pranit porfolio"
python3 -m http.server 8080
```

Then open:

- `http://localhost:8080/pranit-portfolio.html`
- `http://localhost:8080/projects/mutthasales-enterprise-platform.html`
- `http://localhost:8080/resume.html`
- `http://localhost:8080/404.html`

## Customize quickly

- Update personal details in the hero/about/contact sections.
- Replace project cards in the `#projects` section.
- Update case studies in the `#case-studies` section with fresh measurable outcomes.
- Update dedicated project pages inside `projects/`.
- Replace placeholder SVG gallery visuals under `assets/projects/` with real screenshots when available.
- Open `resume.html` and use "Print / Save as PDF" for your latest shareable PDF.
- Tune animations inside the bottom `<script>` block.
- Edit colors in `:root` CSS variables.
- Replace `G-XXXXXXXXXX` with your real GA4 measurement ID.
- Replace `https://pranitmuttha.com/` in canonical, OpenGraph, `sitemap.xml`, and `robots.txt` with your final domain.

## Launch automation

Use these scripts before production launch:

```bash
cd "/Users/pranit/Downloads/pranit porfolio"
./scripts/update-domain.sh yourdomain.com
./scripts/preflight.sh
```

What they do:

- `update-domain.sh` updates domain references in key files.
- `preflight.sh` fails if placeholder values still exist or required files are missing.

## Deploy flow (GitHub + Netlify auto deploy)

```bash
cd "/Users/pranit/Downloads/pranit porfolio"
git add .
git commit -m "launch updates"
git push
```
