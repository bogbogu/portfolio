# Benedict Portfolio (React + TypeScript)

A production-style, feature-based developer portfolio built with React, TypeScript, and Vite.

## Tech Stack

- React 19
- TypeScript
- Vite
- Framer Motion

## Architecture

This project follows feature-based architecture:

- `src/features/*` for feature-specific UI and business logic
- `src/features/*/services` for business logic hooks
- `src/components/ui` for shared presentational primitives
- `src/components/cards` for reusable card components
- `src/components/layout` for layout scaffolding
- `src/constants` for typed static data
- `src/types` for per-model TypeScript interfaces

Legacy static files are preserved in `legacy-static/` during migration.

## Run Locally

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Vercel Analytics

Vercel Web Analytics is configured for this project.

- Package installed: `@vercel/analytics`
- React integration used in this Vite app: `@vercel/analytics/react`
- Component added in `src/main.tsx`: `<Analytics />`

If you need to re-install it later:

```bash
npm i @vercel/analytics
```

## Resend Email Setup

Contact form delivery is now wired through a Vercel API route at `/api/contact` using Resend.

1. Add your key in `.env.local`:

```env
RESEND_API_KEY=your_resend_api_key
```

2. Optional overrides:

- `CONTACT_FROM_EMAIL` defaults to `Portfolio Contact <onboarding@resend.dev>`
- `CONTACT_TO_EMAIL` defaults to `ogbogubenedict@gmail.com`

3. Install dependencies (already done in this repo):

```bash
npm i resend
```
