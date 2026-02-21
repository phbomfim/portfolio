# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run develop   # Start dev server at http://localhost:8000
npm run build     # Production build
npm run serve     # Serve the production build locally
npm run clean     # Clear Gatsby cache and public directory
npm run format    # Format all JS/JSX/TS/JSON/MD files with Prettier
```

GraphiQL explorer is available at `http://localhost:8000/___graphql` during development.

## Architecture

This is a single-page Gatsby portfolio site (Gatsby v2) with one page and no routing.

**Component hierarchy:**
- `src/pages/index.js` — The only page; renders `<Layout>` wrapping all content sections (hero, skills, about, contact)
- `src/components/layout.js` — Wraps `<Header>` + `{children}` + `<Footer>`
- `src/components/header.js` — Fixed top nav with logo and social links (GitHub, LinkedIn, StackOverflow, freeCodeCamp)
- `src/components/footer.js` — Shows dynamic copyright year

**Styling:**
- Single global stylesheet at `src/styles/global.css`, imported in `gatsby-browser.js`
- Typography system via `gatsby-plugin-typography` configured in `src/utils/typography.js` using `typography-theme-fairy-gates`
- SVG icons in `src/images/` are colored via CSS `filter` rules in `global.css`

**Prettier config** (`.prettierrc`): no semicolons, avoid arrow function parens.
