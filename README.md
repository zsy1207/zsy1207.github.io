# Shiyang (Zephyr) Zhou — personal homepage

Bilingual academic homepage built with Next.js 14, React, TypeScript, and Tailwind CSS. Production is exported as static files for GitHub Pages. The architecture refactor preserves the existing page content and visual design.

## Development

Use Node.js 22 (`.nvmrc`) and npm. Install the locked dependency versions:

```bash
npm ci
npm run dev
```

Development runs on port 3000. It uses the normal Next.js router, including dynamic blog routes. Production uses `output: 'export'`; `.next/` holds build internals and `out/` holds the deployable site. Do not run development and production builds concurrently in the same checkout.

Inter is bundled locally through `@fontsource-variable/inter`, preserving the font while removing Google Fonts requests from builds. Font licensing is included in the package. No application secrets or backend services are required.

## Project structure

```text
app/                         Server route entries, metadata, global layout/styles
  (routes)/blogs/[slug]/      Static blog paths and article metadata
components/
  pages/                     Client page views; original UI and layouts
  blog-posts/                Server Markdown renderer and client language/navigation shell
  ui/                        Reusable UI primitives
  navigation.tsx             Shared navigation
content/
  academic.ts                Resume translations and timeline records
  publications.tsx           Original publication citations
  home.ts                    Profile social links
  navigation.ts              Navigation entries
  projects.ts                Project records
  blog-posts/                Typed blog records and Markdown
context/                     Language, theme, and animation providers
lib/                         Shared helpers and persisted-preference hook
tests/smoke.cjs               Browser regression checks
public/                      Images, icons, and downloadable CV
```

Keep route files small: resolve data and metadata on the server, then pass only the data required by the client view. Blog lists receive summaries rather than article Markdown. Article Markdown is rendered on the server and passed through a React children slot, keeping the parser out of the client bundle.

Language and theme preferences share one storage hook. It validates stored values, handles disabled storage, synchronizes storage events, and writes only deliberate changes so the initial render cannot overwrite saved preferences.

## Validation

```bash
npm run lint
npm run typecheck
npm test
npm run build
npm start
```

`npm start` serves the static `out/` directory; `next start` does not support static export. To use another port: `npm start -- --listen 3002`.

Run browser checks against a running development or static server:

```bash
npx playwright install chromium
npm run test:e2e
# Different server or an existing system Chromium:
HOMEPAGE_TEST_URL=http://127.0.0.1:3002 CHROMIUM_PATH=/usr/bin/chromium npm run test:e2e
```

The checks cover existing routes, desktop/mobile overflow regressions, language/theme persistence, search and filtering, mobile navigation, article 404s, CV download, and browser errors. A failing assertion exits nonzero. The existing Markdown image renderer intentionally retains its HTML output and can produce a Next.js image optimization advisory.

## UI and motion conventions

The original page structure, content, typography, and black/white palette are retained. `AnimationProvider` combines the animation setting with the live system `prefers-reduced-motion` preference. CSS also disables motion before hydration. Use `useAnimation().enabled` for any JavaScript animation; do not animate layout or static reading cards on hover.

Interactive controls share brief color/focus feedback. Only interactive cards use hover shadows. The mobile navigation becomes inert immediately when closed, while its height/opacity transition finishes. Theme preference is applied by a small head script before first paint to prevent a light flash when restoring dark mode.

Browser regression checks cover keyboard filtering, native theme controls, touch targets, menu focus/closing, actual theme animation frames, and live reduced-motion changes, in addition to the existing content and preference checks.

## Content updates

- Edit resume translations and timeline data in `content/academic.ts`.
- Edit citations in `content/publications.tsx` and projects in `content/projects.ts`.
- Add a typed post under `content/blog-posts/` and register it in `index.ts`. Keep its slug stable so existing links continue to work.
- Update profile links in `content/home.ts` and navigation in `content/navigation.ts`.
- Replace the CV PDF in `public/` while keeping its path in the resume view synchronized.

## Deployment

`.github/workflows/deploy.yml` validates, builds, and deploys `out/` to GitHub Pages on pushes to `main`, or by manual workflow dispatch. Other branches do not deploy. The workflow adds `.nojekyll` to the artifact. The legacy `npm run deploy` command publishes to the `gh-pages` branch and is not required for the Actions-based deployment.

## License

MIT
