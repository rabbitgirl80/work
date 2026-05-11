# AGENTS.md

## Cursor Cloud specific instructions

This is a static HTML/CSS landing page (Builder.io homepage clone) with **zero npm/pip dependencies**, no build step, no tests, and no linting configuration.

### Project structure

- `figma-builder-page/index.html` — Single-page HTML with inline JS (IntersectionObserver for scroll-reveal animations)
- `figma-builder-page/styles.css` — Pure CSS with animations and responsive breakpoints

### Running the dev server

Serve the `figma-builder-page/` directory over HTTP:

```sh
cd figma-builder-page && python3 -m http.server 8080
```

Then open `http://localhost:8080/` in Chrome.

### Notes

- All images load from external `figma.com` CDN URLs; internet access is required for images to render.
- The Poppins font loads from Google Fonts CDN.
- There is no package manager, no `package.json`, no build system, no test framework, and no linter configured.
- Changes to `index.html` or `styles.css` take effect on browser refresh — no hot-reload tooling is present.
