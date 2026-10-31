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

## My Toolkit / Stack — approved follow-up

Canonical page route is `/stack`, titled “Stack — My Toolkit”; Home and Help links read “My Toolkit” without an arrow. Preserve old `/architecture` links with a replace redirect that retains the hash. Internal inventory and CSS names can remain unchanged.

Add a separate, always-visible “General IT support toolkit” section between the project index and project tool directory. Use editorial rows with a role label, tool name, description and official link, in two columns on desktop and one on mobile. Include Vaultwarden, RustDesk, CortenDesk, Jitsi, Mattermost, Short.io, Ko-fi, TidyCal, HiHello, GenOffice and Docker. These are George’s general support tools, not automatically assigned dependencies of any project; do not imply unverified integrations or deployments.

Increase Stack-page body content to 18px with generous line height, supporting text and controls to at least 15px, and compact tool links to 14px. Keep existing Bricolage/Plex typography and both themes. Remove mobile font-size reductions; allow labels, controls and rows to wrap without overflow. Do not change site-wide typography or APIs/database.

## Home card hover preview — approved

On hover-capable desktop devices, a brief pointer pause enlarges a project card into a floating preview above the grid. Use the existing screenshot (no live iframe or new requests to project sites), larger readable title/description and retained screenshot/title/host links to the live site in a new tab. Keep Copy link independent. Portal the preview to the body to escape animated stacking contexts; clamp it within viewport edges and allow long content to scroll. Moving off the original/preview closes it; Escape, page scroll and viewport resize dismiss it too. No grid reflow.

Keyboard focus on a card shows the same visual enlargement without duplicating its focusable controls; original links and Copy remain operable. Touch devices keep existing cards and direct first-tap links. Preserve both themes, rounded catalog cards and brand fonts; skip preview animation for reduced motion. This is a Home-only component/style change, with no API/database or analytics changes.
