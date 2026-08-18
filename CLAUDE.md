# CLAUDE.md

## Project

joshuarichard.co — personal portfolio site for Joshua Richard. Bauhaus-themed, horizontal-scrolling on desktop, vertical-scrolling on mobile.

## Stack

- React 19 + TypeScript 7 + Vite 8 + styled-components 6
- Fonts: Staatliches (display), Barlow / Barlow Condensed (body) — loaded from Google Fonts in `index.html`
- No test framework configured

## Commands

- `yarn dev` — start Vite dev server
- `yarn build` — type-check then build to `dist/`
- `yarn preview` — preview production build locally

## Architecture

```
src/
├── App.tsx              # Root — scroll logic, layout, panel composition
├── main.tsx             # React entry point
├── theme/colors.ts      # Color constants (Ellsworth Kelly palette)
├── data/                # Static data arrays (jobs, projects, techGroups, contactLinks)
└── components/
    ├── common/          # Shared: GlobalStyle, Layout, NavDots, SectionStrip
    ├── HeroPanel.tsx    # Panel 1 — name, bio, links, geometric shapes, tech stack
    ├── ExperiencePanel.tsx  # Panel 2 — work history + education
    ├── ProjectsPanel.tsx    # Panel 3 — project cards with hover effects
    └── ContactPanel.tsx     # Panel 4 — contact links
```

## Design

- Color palette (Ellsworth Kelly): `BLUE=#003DA5`, `GREEN=#009B4D`, `RED=#ED1C24`, `BLACK=#111111`, `WHITE=#F4F1EC`, `CREAM=#EDE8DF`
- Color sequences always repeat: blue, green, red
- Mobile breakpoint: 768px
- Transient props use `$` prefix for styled-components (e.g. `$active`, `$accent`)
- Hero panel has cream background; Projects/Contact panels have dark/blue backgrounds

## Deployment

- S3 bucket: `joshuarichard.co` (us-east-1)
- CloudFront distribution: `E1LXK9MTZQVRXB` (`d2vnos5pk0niy2.cloudfront.net`)
- ACM cert: `arn:aws:acm:us-east-1:520475252710:certificate/ff808203-4bd8-41d1-8af0-0c723c00f99c`
- Route 53 hosted zone: `Z01392553L7CJIWFXW1H4`
- Deploy: `yarn build`, sync `dist/` to S3, invalidate CloudFront cache

## Conventions

- No comments unless the "why" is non-obvious
- Keep styled components co-located with their panel component
- Data arrays live in `src/data/` and are imported by components
- Company logos in `src/assets/` (SVG/PNG/AVIF with transparent backgrounds)
