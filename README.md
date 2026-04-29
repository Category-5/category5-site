# category5-site

The Category5 studio site. Static HTML/CSS, hosted on GitHub Pages at [category5.co](https://category5.co).

## Structure

- `index.html` — home page (hero, apps showcase, team peek)
- `about.html` — about page (why we build, four bios, say hi)
- `styles.css` — single stylesheet with all design tokens
- `assets/` — images, fonts (currently using Google Fonts CDN), logos
- `CNAME` — points the GH Pages site at `category5.co`
- `.nojekyll` — opt out of Jekyll processing on GH Pages

## Development

There is no build step. Open `index.html` directly in a browser, or serve the directory:

```sh
python3 -m http.server 8000
# then visit http://localhost:8000
```

## Deploy

Push to `main` on the `Category-5/category5-site` repo. GitHub Pages serves the root.

DNS at the domain registrar: A records for `category5.co` point to the GitHub Pages IPs (`185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`), and `www` is a CNAME to `Category-5.github.io`.

## Open TODOs

- Team photos for Josh, Connor, Theo, Stephen (replace initials placeholders in `index.html` and `about.html`).
- Team bios — 2-3 sentences each in their own voice (replace `Bio coming soon.` placeholders in `about.html`).
- GitHub handle for each of the four (replace `href="#"` on bio links).
- One-line specialty for each on the home-page team peek (`.team-spec` `<p>` tags in `index.html`).
- Generate `og-image.png` (1200×630) and place at `assets/images/og-image.png`.
- Replace SetCheck OG card with a real UI screenshot once available.
- Optionally swap Google Fonts CDN for self-hosted Fraunces + Inter woff2 in `assets/fonts/` for offline / privacy.
- Revise the "Why we build" copy in `about.html` (currently a draft — see `<!-- DRAFT: revise -->`).
