# joshuarichard.co

Personal portfolio site for Joshua Richard. Bauhaus-themed with horizontal scrolling on desktop and vertical scrolling on mobile.

**Live:** [joshuarichard.co](https://joshuarichard.co)

## Stack

- React 19, TypeScript 7, Vite 8, styled-components 6
- Fonts: [Staatliches](https://fonts.google.com/specimen/Staatliches) + [Barlow](https://fonts.google.com/specimen/Barlow)
- Hosted on AWS S3 + CloudFront with HTTPS

## Development

```bash
yarn install
yarn dev
```

## Build & Deploy

```bash
yarn build
aws s3 sync dist/ s3://joshuarichard.co --delete
aws cloudfront create-invalidation --distribution-id E1LXK9MTZQVRXB --paths "/*"
```

## Structure

```
src/
├── App.tsx                  # Root layout and scroll logic
├── theme/colors.ts          # Ellsworth Kelly color palette
├── data/                    # Jobs, projects, tech stack, contact links
├── components/
│   ├── common/              # GlobalStyle, Layout, NavDots, SectionStrip
│   ├── HeroPanel.tsx
│   ├── ExperiencePanel.tsx
│   ├── ProjectsPanel.tsx
│   └── ContactPanel.tsx
└── assets/                  # Company logos, resume PDF
```
