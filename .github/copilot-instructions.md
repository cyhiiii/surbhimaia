# Copilot Instructions for surbhimaia

## Project Context
This is an enterprise-grade **Next.js 14+ (App Router)** application using **TypeScript** and **Tailwind CSS**.
The primary goal is to implement **pixel-perfect** web pages based on detailed JSON specifications provided by a visual-analysis agent.

## Architecture & Structure
- **`src/app/`**: App Router pages and layouts. `page.tsx` composes sections.
- **`src/components/sections/`**: Major page sections (e.g., `Hero.tsx`, `PremiumCollections.tsx`). Each section corresponds to a logical block in the design spec.
- **`src/components/layout/`**: Global components like `Header.tsx`, `Footer.tsx`.
- **`src/lib/`**: Utilities, including `cloudinary.ts` for image optimization.
- **`src/types/`**: TypeScript definitions, specifically `specification.ts` which defines the JSON spec structure.

## Coding Standards & Patterns

### 1. Pixel-Perfect Implementation
- **Strict Fidelity**: If a spec requires `width: 345px`, use `w-[345px]` or `style={{ width: '345px' }}`. Do not approximate with `w-1/3` or `w-96`.
- **Z-Index**: Respect `z-index` layers explicitly as defined in the spec to ensure correct stacking contexts.
- **Positioning**: Use absolute positioning where the spec dictates exact coordinates, but prefer Flexbox/Grid for internal layout flow where appropriate.

### 2. Styling Strategy
- **Tailwind First**: Use Tailwind utility classes for standard spacing, colors, and typography.
- **Arbitrary Values**: Use Tailwind arbitrary values (e.g., `top-[80px]`, `bg-[#381E55]`) for specific spec values.
- **Inline Styles**: Use `style={{ ... }}` for dynamic values or when copying complex CSS directly from the spec (e.g., gradients, specific transforms).

### 3. Asset Management
- **Cloudinary**: All media assets are hosted on Cloudinary.
- **Helper**: Use `src/lib/cloudinary.ts` -> `getCloudinaryUrl()` for generating optimized URLs.
- **Next.js Image**: Prefer `next/image` for static images to leverage automatic optimization.

### 4. Component Structure
- Components should be functional, typed with `React.FC` or standard function declarations.
- Use `'use client'` directive only when necessary (hooks, interactivity). Default to Server Components.

## Developer Workflow
- **Run Dev Server**: `npm run dev`
- **Linting**: `npm run lint`
- **Type Checking**: Ensure no `any` types; use interfaces from `src/types/specification.ts` when dealing with spec data.

## Critical "Don'ts"
- Do not simplify designs to fit standard Tailwind scales.
- Do not ignore `z-index` or stacking contexts.
- Do not use local asset files unless they are strictly placeholders; prefer Cloudinary.
