# oriolsubirana.com

Personal site of Oriol Subirana, software engineer lead in Zürich. Two pages: Home and About.

Built with [Astro](https://astro.build) 4, Tailwind CSS 3 and deployed on Netlify. Originally based on the [astro-aria](https://github.com/ccbikai/astro-aria) template.

## Develop

```bash
pnpm install
pnpm dev        # http://localhost:4321
pnpm build      # type check + static build into dist/
pnpm preview    # serve dist/
pnpm check      # biome lint and format
```

## Where things live

- `src/pages/` — `index.astro` (home) and `about.astro`
- `src/collections/` — content as JSON: `experiences.json` (timeline), `focus.json` (what I do), `social.json` (links), `menu.json`
- `src/assets/images/` — photos, optimized at build time by `astro:assets`
- `public/` — favicon, résumé PDF and company logos served as-is

Theme follows the system preference and can be toggled in the header; the choice is stored in `localStorage`.
