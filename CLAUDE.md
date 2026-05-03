# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

## Commands

```bash
npm run dev      # start dev server with Turbopack
npm run build    # production build (run this to catch type + lint errors)
npm run lint     # ESLint
npm run start    # start production server
```

No test suite exists in this project.

## Stack

- **Next.js 16.2.3** with App Router and Turbopack — read `node_modules/next/dist/docs/` before using any Next.js API; this version has breaking changes from older training data.
- **React 19**, **TypeScript** strict, **Tailwind CSS v4**, **Framer Motion 12**, **Lucide React**
- **Tailwind v4**: configured via `@import "tailwindcss"` in `src/app/globals.css`. No `tailwind.config.*` file. Custom tokens live in the `@theme {}` block in globals.css. Custom keyframes and animation utilities are also defined there (not in a config file).
- **RTL site** (Hebrew). Always consider RTL when adding layout or directional CSS.

## Architecture

### Pages (`src/app/`)

App Router pages. Each page imports and composes section components.

- `/` — home page, assembles `src/components/home/` sections
- `/courses` — catalog, uses `src/components/courses/`
- `/courses/[slug]` — course detail, assembles `src/components/course/` sections
- `/certification`, `/business`, `/solo` — standalone landing pages
- `src/app/v1/` — experimental mirror of routes using `src/components-v1/`; treat as legacy

### Data (`src/data/`)

- `courses.ts` — `Course` type + `courses` array. `CertificationTier = "Ai01" | "Ai03" | "Ai05"` (Ai10 is fully removed — do not re-add it).
- `sectors.ts` — sector metadata keyed by `sectorSlug`
- `instructors.ts` — `heroGridInstructors` (40-entry array for hero grid) + individual instructor exports

### Components

- `src/components/home/` — home page sections
- `src/components/course/` — course detail page sections
- `src/components/courses/` — catalog page components + shared `labels.ts` (certification tiers, colors, helpers)
- `src/components/ui/` — shared primitives (`Reveal`, etc.)
- `src/components-v1/` — legacy copies used only by `src/app/v1/`; avoid editing

### Animations

Use `<Reveal>` for scroll-triggered entrance animations (fade + blur + translate-y). It accepts `as`, `delay`, `y`, and `className`. Valid `as` values: `"div" | "section" | "li" | "article"`.

For staggered lists, pass `delay={index * 0.1}` (cap at 2–3 to avoid long waits).

## Critical Gotchas

**Turbopack rejects IIFEs as JSX children.** TypeScript will pass cleanly but Turbopack will throw a parse error (`Expected '</', got 'jsx text'`). Never write `{(() => { ... })()}` inside JSX. Extract all derived variables before the `return` and use regular `&&` conditionals.

**`CertificationTier`** is `"Ai01" | "Ai03" | "Ai05"` only. Any reference to `"Ai10"` will cause a type error.

**Partners carousel** uses `dir="ltr"` on the animated track to prevent RTL from reversing `translateX`. The marquee keyframe translates `0 → -50%`; the track contains two identical copies of the logo list.

**Hero grid** has 45 cells (9 cols × 5 rows). Real instructor photos should be placed at indices near the center (around index 22) in `heroGridInstructors` to land on high-opacity cells. Opacity is calculated by Manhattan distance from the center cell (col 4, row 2).
