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
