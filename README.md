# E-Cell VJIT Astro Project

Production-ready Astro conversion of the finalized static HTML template, preserving layout, classes, spacing, and animation behavior.

## Setup

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## Project Structure

```text
.
|- public/
|- src/
|  |- components/
|  |  |- About.astro
|  |  |- CTA.astro
|  |  |- Events.astro
|  |  |- Footer.astro
|  |  |- Hero.astro
|  |  |- Navbar.astro
|  |  |- Stats.astro
|  |  |- Team.astro
|  |  |- TeamShowcase.astro
|  |- layouts/
|  |  |- BaseLayout.astro
|  |- pages/
|  |  |- index.astro
|  |- styles/
|  |  |- global.css
|  |- env.d.ts
|- astro.config.mjs
|- package.json
|- tsconfig.json
```

## Notes

- Global styles from the original template are in `src/styles/global.css`.
- Head metadata/scripts are centralized in `src/layouts/BaseLayout.astro`.
- Section blocks are componentized and ready for future props/CMS data wiring.