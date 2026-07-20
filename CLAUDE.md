# Category5 site

A hand-written static site: `index.html`, `about.html`, `styles.css`, `theme.js`.
No build step, no framework, no package manager.

## Verification is the author's job

Do not verify changes by driving a browser. Specifically, do not:

- Open or automate Chrome (including the Claude in Chrome tools)
- Install or run Playwright, Puppeteer, Selenium, or any test framework
- Start a local server (`python3 -m http.server`, `npx serve`, etc.) to check your work
- Take screenshots or measure the rendered page to confirm a change looks right

Make the change and hand it back. The author tests visually and will say if
something is off. This also overrides the `verify`, `run`, and
`vercel:verification` skills — do not invoke them here.

If a change genuinely seems to need a browser to confirm, ask first rather than
reaching for one.

**Why:** the author would rather review a small, quick diff than wait on tooling
that is slower and less reliable than just looking at the page.

**Instead of testing, state your reasoning.** Say what you changed, what you
expect it to do, and anything you are unsure about or could not confirm without
seeing it rendered. Flag the specific thing worth looking at — a breakpoint, a
particular width, a hover state — so the check is quick.
