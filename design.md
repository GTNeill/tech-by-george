# My Projects (tech.gneill.net) — Design

A single shareable index of George's Runable-built projects. Public page: a grid of project cards, each with an auto-generated screenshot, a title that links out, an editable description, and a one-tap "copy link". Admin (Google sign-in, email allowlist): add/edit/hide/reorder projects and refresh screenshots. Web only.

Visual direction: a quiet "engineering catalog" — near-black graphite canvas, hairline borders, mono metadata, one hot signal-orange accent. Screenshots are the color; the chrome stays out of the way. Light mode is a warm paper variant.

## Brand & Colors

CSS variables in `packages/web/src/web/styles.css`. Dark is the default; `.light` class on `<html>` flips it (stored in localStorage).

| Token | Dark (default) | Light | Use |
|-------|----------------|-------|-----|
| background | #0E0F12 | #FAF8F4 | Page canvas |
| surface / card | #15171C | #FFFFFF | Cards, panels |
| surface-2 | #1C1F26 | #F1EEE8 | Inputs, chips, hover |
| foreground | #EDEEF1 | #16171A | Primary text |
| muted-foreground | #8E939E | #5E6167 | Meta, descriptions |
| border | rgba(255,255,255,.09) | rgba(0,0,0,.10) | Hairlines |
| accent | #FF5C2B | #D9401A | Links on hover, focus ring, active states |
| success | #4ED88C | #157F4D | Copied / visible states |
| destructive | #F2544B | #C3362D | Delete, hidden badge |

Background texture: a very low-contrast 32px dot grid plus a soft accent radial glow behind the header. No gradients on cards.

## Typography

- **Display**: Bricolage Grotesque (600/700) — page title, card titles.
- **Body**: IBM Plex Sans (400/500) — descriptions, UI.
- **Mono**: IBM Plex Mono (400/500, uppercase + letter-spacing for labels) — URLs, counts, section labels, buttons.
Loaded from Google Fonts in `packages/web/index.html`.

## Pages

- **Home** (`src/web/pages/index.tsx`) — header (wordmark, project count, theme toggle, admin link), hero line, responsive card grid (1 / 2 / 3 columns; featured items span 2 columns on desktop). Card = 16:10 screenshot, title link with external arrow, description, mono host chip, copy-link button. Staggered fade-up on load.
- **Admin** (`src/web/pages/admin.tsx`) — Google sign-in gate, then a stacked editor list: thumbnail, inline fields (title, URL, description), toggles (visible / featured), move up/down, refresh screenshot, delete, plus an "Add project" form.

## Key Flows

1. Visitor opens `/` → sees visible projects newest-order-first → clicks a title (opens in new tab) or copies the link to share.
2. George opens `/admin` → signs in with Google (allowlisted email) → edits a description, hides an item, reorders, hits refresh on a stale screenshot → `/` updates immediately.
3. Screenshots: server captures the URL through a screenshot service or accepts an admin upload, stores bytes on the instance filesystem, and serves them from `/api/shot/:id` with cache headers + a version query. Durable production storage requires a mounted volume.

## Architecture

- API: oRPC procedures in `src/api/routes/projects.ts`; admin procedures use an `admin` middleware (Better Auth session + `ADMIN_EMAILS` allowlist). Plain HTTP route `/api/shot/:id` serves filesystem screenshot bytes.
- Auth: Better Auth with the site's own Google OAuth client (Google only).
- DB: projects and site settings, plus auth tables (Drizzle/Turso).
- Badge: custom "Made with Runable" pill at 50% opacity (100% on hover) → `https://runable.link/{VITE_REFERRAL_CODE ?? "gtn"}`.

## Architecture page — approved extension

`/architecture` is an engineering field guide, not a dashboard. Keep the existing graphite / warm-paper themes, Bricolage display type, Plex body and mono labels. Use a large editorial title beside a compact six-layer schematic; ordered horizontal bands place UI first and physical hardware last. The orange signal line links the layers visually without implying every request traverses them in order.

Below the overview, a searchable project index uses full-width numbered disclosure rows rather than a generic card grid. Expanded rows pair a six-layer stack with a plain-language request flow, caveats, developer tools and dated source evidence. Tool names link to official documentation. A linked glossary completes the guide. Restrained hairlines, square-ish corners and generous section spacing keep dense technical material readable.

The inventory is curated static TypeScript, separate from database-managed project content. Compare live project IDs to reviewed IDs to flag newly added projects awaiting review. Evidence labels separate source implementation, observed public behavior and configuration-dependent services. GitHub, TypeScript, Vite and Runable sit in a separate build/workbench block, not the runtime stack. Hosting configs are labeled deployment targets; hardware models remain explicitly unknown. No private infrastructure identifiers or raw private source are published.

Navigation: a secondary outlined Architecture button beside the existing orange Home help CTA; Architecture links in Help navigation and footer. Architecture provides Home and How I can help you return links plus shared theme toggle. Direct project anchors open their disclosure. Search, category filters, expand/collapse and reduced-motion support are keyboard accessible. Route is lazy-loaded to keep the existing Home bundle lean.
