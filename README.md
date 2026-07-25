# Tomas Salto Portfolio

Personal developer portfolio built with Astro, TypeScript, and Tailwind CSS. The site is designed for job-search visibility as a Front-end, PHP/Laravel, and Full Stack developer, with a curated project showcase and build-time GitHub integration.

## Live Site

- Production: https://tomassaltodev.netlify.app
- GitHub profile: https://github.com/tomassalto
- LinkedIn: https://www.linkedin.com/in/tomas-agustin-salto-2585b6170/

## What This Project Shows

- A bilingual portfolio with Spanish and English routes.
- A curated featured-project section for the strongest work.
- Automatic repository metadata fetched from the GitHub REST API at build time.
- Local overrides for project descriptions, technologies, categories, screenshots, and deploy URLs.
- Downloadable CV files for both languages.
- A static, fast, SEO-friendly Astro build.

## Tech Stack

- Astro 7
- TypeScript
- Tailwind CSS 4 through `@tailwindcss/vite`
- GitHub REST API
- Astro i18n routing
- Static deployment on Netlify

## Project Structure

```text
src/
  components/        UI sections and reusable Astro components
  config/            Site-wide config such as profile links and CV paths
  data/              Curated portfolio project data
  helpers/           Static stack/icon data
  i18n/              Translation strings and locale helpers
  lib/               GitHub API integration and project mapping logic
  layouts/           Shared document layout, SEO, header, footer
  pages/             Astro pages for Spanish and English routes
  styles/            Global Tailwind/CSS layer

public/
  featuredProjects/  Screenshots used by featured project cards
  assets/            Static site assets
  *.pdf              Public CV files
```

## Featured Projects

Featured projects are controlled from `src/data/portfolio.ts`.

Each featured item can define:

- `repo`: the GitHub repository name.
- `nameOverride`: the display name used in the UI.
- `order`: the display order.
- `categories`: filters used by the portfolio UI.
- `technologies`: manually curated stack labels.
- `image`: local screenshot path from `public/`.
- `demoUrl`: production deploy URL.
- `summaryOverride`: short explanation of what the project demonstrates.
- `descriptionOverride`: user-facing project description.

This keeps the portfolio dynamic while still allowing editorial control over the projects that matter most.

## GitHub Integration

The project list is generated at build time in `src/lib/github.ts`.

The integration:

- fetches public repositories from the configured GitHub user.
- filters out forks, archived repos, and the profile repo.
- reads repository metadata such as description, homepage, language, topics, and last update.
- attempts to fetch each README and extract a short summary.
- merges the GitHub data with the curated local configuration.
- falls back to local featured-project data if the GitHub API request fails.

Optional environment variable:

```bash
GITHUB_TOKEN=
```

The token is optional. Without it, the build still works but depends on GitHub's public unauthenticated rate limit.

## CV Files

The CV download paths are configured in `src/config/site.ts`.

Current public files:

```text
/cv-tomas-salto-es.pdf
/cv-tomas-salto-en.pdf
/cv-tomas-salto.pdf
```

The Spanish route downloads the Spanish CV. The English route downloads the English CV. The generic PDF is kept as a Spanish fallback.

## Local Development

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Run a production build:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

## Deployment

The site is a static Astro project and can be deployed to Netlify, Vercel, Cloudflare Pages, or any static hosting provider.

Recommended Netlify build settings:

```text
Build command: npm run build
Publish directory: dist
```

If a `GITHUB_TOKEN` is available, configure it as an environment variable in the deployment provider.

## Repository Hygiene

Generated folders are intentionally ignored:

```text
dist
.astro
tmp
.codex
```

Only source files, public assets, and project configuration should be committed.
