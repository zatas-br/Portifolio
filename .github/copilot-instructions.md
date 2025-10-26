Purpose
This file gives pragmatic, repository-specific guidance for AI coding agents (and human collaborators) so they can be productive immediately in this codebase.

Quick start (dev / build)
- Dev: npm run dev  # runs `next dev`
- Build: npm run build
- Start (production): npm run start
- Lint: npm run lint

High-level architecture (what to know first)
- Framework: Next.js (App Router). Main application code lives under `src/app/`.
- Routing: localized routes are implemented with a dynamic `src/app/[locale]/` layout. Pages live under that directory (e.g. `src/app/[locale]/about/page.tsx`).
- i18n: `next-intl` is used for internationalization.
  - Routing and supported locales are defined in `src/i18n/routing.ts`.
  - Middleware for locale detection is wired via `src/proxy.ts` (exports default middleware + `config.matcher`).
  - The Next plugin is enabled in `next.config.ts` (see `createNextIntlPlugin('./src/i18n/request.ts')`).
  - Message files live at the repository root `messages/` (e.g. `messages/en-us.json`, `messages/pt-br.json`).

Conventions & patterns (be explicit)
- File-based layout: `src/app/layout.tsx` is the root layout. Per-locale logic is in `src/app/[locale]/layout.tsx` which wraps children with `NextIntlClientProvider` and calls `getMessages()`.
- Absolute imports use a TypeScript path alias: `@/*` maps to `./*` (see `tsconfig.json`). Example: `import Header from '@/src/components/layout/Header'` resolves to `./src/components/layout/Header`.
- Styling: Tailwind CSS is used. Global styles are at `src/app/global.css`; configuration in `tailwind.config.ts` and `postcss.config.mjs`.
- Images: static assets live in `public/images/...`. Components sometimes import public files directly (see `src/components/layout/Header.tsx`).
- Data: project metadata is intended to live in `src/data/projects.ts` (file exists but is currently empty).

Integration points to watch
- next-intl plugin: `next.config.ts` -> `createNextIntlPlugin('./src/i18n/request.ts')` — changing message location or plugin options requires updating that path.
- Middleware: `src/proxy.ts` contains the next-intl middleware and matcher; changes affect route localization matching.
- TypeScript: `tsconfig.json` enables `strict` and the `@/*` path mapping. Keep imports consistent with that alias.

Common tasks & examples
- Add a localized page
  - Create `src/app/[locale]/your-route/page.tsx` and export a default React component.
  - Content will be wrapped by `src/app/[locale]/layout.tsx` which provides i18n messages.

- Add or change supported locales
  - Update `src/i18n/routing.ts` (the `locales` array) and update `messages/` JSON files accordingly.
  - Verify `src/proxy.ts` matcher still matches intended routes.

Small notes for code generation
- Prefer updating existing layout and i18n files rather than adding parallel middleware; the project centralizes i18n in `src/proxy.ts`, `src/i18n/routing.ts`, and `next.config.ts`.
- Keep imports consistent with the `@/*` alias. Use paths like `@/src/components/...` (matches existing code).
- Use React Server Components only where existing patterns do; layouts are async and may use server-only helpers like `getMessages()`.

Files to inspect for context
- `src/app/layout.tsx` — root layout
- `src/app/[locale]/layout.tsx` — locale wrapper (NextIntlClientProvider)
- `src/i18n/routing.ts` — locales + defaultLocale
- `src/proxy.ts` — i18n middleware & matcher
- `next.config.ts` — next-intl plugin wiring
- `messages/` — localization JSON files
- `src/components/` — UI components (e.g. `Header.tsx`)
- `src/data/projects.ts` — project data (currently empty; used by project pages)

When in doubt / missing info
- If you need to know build-time environment variables, or how deployment is configured (Vercel, Netlify, etc.), ask the repo owner — there are no CI/deploy files in the repo root to infer that.
- There are no tests in the repository. Run `npm run dev` to validate changes locally.

If you modify i18n, routing, or middleware
- Run the dev server and exercise localized routes (e.g., `/en-us`, `/pt-br`) to confirm middleware and layouts behave as expected.

Contact for follow-up
- Ask the repository owner for preferred commit message format, PR size limits, or any unstated conventions (e.g., component prop naming, testing strategy).

Please review these instructions and tell me if you'd like more examples (component-level patterns, preferred code style rules, or typical PR checklist items).
