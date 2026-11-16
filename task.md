# Architecture page

## Scope
- All 14 projects currently in the live Tech by George public list.
- Use relevant prior chats for purpose/history and current GitHub source for actual tooling.
- Public layered overview: UI at top, hardware/cloud foundation at bottom; expandable per-project technical details and linked tool directory.
- Keep current site branding and add visible navigation from Home and How I can help you.

## Progress
- [x] User selected all projects and source verification.
- [x] Downloaded live project list and GitHub repository inventory.
- [x] Map all projects to repos; verify Photo Tour Map source and photography repo.
- [x] Read current feature code/manifests/deployment files and relevant chat passages.
- [x] Present implementation plan; user approved.
- [x] Fetch/rebase newer remote analytics change without overwriting it.
- [x] Check all 14 public URLs (HTTP 200), published scripts and map implementation.
- [x] Create source-grounded inventory and Architecture UI.
- [x] Build/typecheck and lint: pass.
- [x] Browser checks: 14 entries, six ordered layers, search/category filters, disclosures, anchors, 71 tool links, Home/Help navigation.
- [x] Responsive checks: 320/390/768/1024/1440px, dark/light, collapsed/expanded, no horizontal overflow or page errors.
- [x] Live-catalog comparison: new IDs flagged without guessed stacks; API failure retains reviewed content.
- [x] Official link checks: 69 HTTP successes; official Chicago/Cook election sites return automated-request 403, not broken destinations.
- [x] Commit/push preserving remote changes: 2d7b051 pushed to main.
- [ ] Deliver running website.

## Guardrails
- Never present template scaffolding or installed-but-unused dependencies as live capabilities.
- Do not publish secrets, private deployment identifiers, or private repo content wholesale.
- Hardware provider/model is unknown unless verified; distinguish cloud platform from physical hardware.
- Show reviewed date/source snapshot; identify optional integrations and missing evidence.

## Audit decisions
- RCV demo has shared stored ballots and server-side tabulation, not just local simulation.
- GRO LOT source now has native Better Auth providers, SMTP, Telnyx and web push; old architecture document is stale.
- Help Desk uses SQLite, Google OAuth and Cloudflare Email Worker; SMTP is conditional, Resend is default outbound.
- All matching repositories except CommunityCalendar and tech-by-george are private; publish summarized file/commit evidence only.
- Railway configuration documents deployment intent, not proof every live service uses that host. Mark accordingly.
- All public sites checked 2026-10-31; do not claim end-to-end authenticated production tests.
- Supporting RustDesk sources reviewed: CortenDesk bundles rendezvous/relay separately, RDGen generates custom clients; active VPS provider not established.
- Architecture route is lazy-loaded; existing main-bundle size warning remains, no additional main-bundle inventory payload.
- Production check after push still served the previous browser bundle (no Architecture chunk); do not claim production deployment complete.
- GitHub push reported 55 dependency alerts (16 high, 30 moderate, 9 low). No dependency changes/security remediation were in scope.

## Follow-up: My Toolkit / Stack
- Approved with adjustments: rename Home/Help button to My Toolkit, remove its arrow, canonical route `/stack`, then post changes.
- Retain original requested separate general IT support toolkit and larger content text; preserve existing branding.
- [x] Re-read current source and document updated design before implementation.
- [x] Add 11 support tools (RustDesk/CortenDesk shown separately), official links and role descriptions in separate data.
- [x] Update route/title/navigation, retain legacy route/hash redirect, increase scoped typography.
- [x] Lint/build/browser regression including typography, support-tool completeness and responsive reflow.
- Official support links: 9 HTTP 200; Jitsi and Ko-fi return automated-request HTTP 403. Retained verified official destinations.
- Browser checks pass at 320–2560px, including both themes, expanded stacks, open directory, legacy query/hash redirect and no page errors. Body text 18px, supporting text 15px, compact links 14px.
- Build/typecheck and lint pass; existing main-bundle size/deprecation warnings remain.
- Dev server restarted because Vite served a stale cached app route after source update; fresh server uses current routes.
- [x] Commit/push preserving remote changes: `95014b6` pushed to main; remote was unchanged at fetch.
- [x] Production bundle checked after push: `/stack` HTTP 200 but `index-PJEF3B45.js` lacks My Toolkit, `/stack` route and new toolkit chunk. Deployment not yet verified; HTTP 200 is SPA fallback only.
- Preview verified on running development server at port 4200; delivery follows.

## Home card hover zoom
- [x] User approved larger hover preview; live-site links retained, keyboard equivalent, touch unchanged.
- [x] Read component/current styles and document approved design.
- [x] Implement viewport-clamped portal preview, enlarged screenshot/text and dismissal behavior.
- [x] Verify hover transfer, links, Copy, keyboard focus/Escape, touch, themes, reduced motion and viewport edges.
- [x] Lint/typecheck/build pass; Home hover browser tests and existing Stack regression pass.
- Bounds tested at 768/1024/1440/2560px in dark/light, first/middle/last cards; mobile first tap opens live site without preview. No page errors or horizontal overflow.
- Preview uses existing screenshots (including pre-existing photography browser-check screenshot), not a live embedded site.
- User now explicitly requested pushing changes to GitHub and checking the live site.
- Pre-push verification: lint/build and Home hover browser tests pass; remote main has no newer commits. Commit/push and production verification follow.
- [x] Pushed hover zoom to GitHub main: `62b6856`.
- [x] Checked live Home after push: HTTP 200, bundle `index-kDk4tNak.js` includes My Toolkit but not hover-preview markers. Browser has zero zoom-enabled cards and no page errors. Hover zoom is not yet deployed; do not claim it is live.

## Hover zoom: another 30% larger
- [x] User requested increasing the approved preview size another 30%.
- [x] Width target multiplied by 1.3 before viewport clamp; screenshot height allowance and preview text/spacing increased by 30%. Existing cards unchanged.
- [x] Lint/typecheck/build and hover browser regression pass, including exact width scaling, keyboard, Copy/live links, mobile, reduced motion and bounds in both themes.
- [x] Visually inspected enlarged preview; change available in running preview, not yet pushed.

## Community Connections
- [x] Approved `/connections` with five profiles, website-grounded descriptions, source links, Home/Help navigation and existing readable branding.
- [x] Scope: mostly US / Chicago-area discovery. Show related shortlist before adding it; do not add discovered organizations yet.
- [x] Read official sources: Chamber About; Weave Trust Index and organization Home; Relational Builder browser-rendered homepage; NIFI About browser-rendered; Rank the Vote strategy browser-rendered.
- Important distinctions: Weave’s Trust Index is a tool of its Aspen Institute project; Relational Builder is stewarded by Relational Tech Project; Rank the Vote now describes RCV, proportional representation, fair maps and open primaries.
- Automated NIFI/Rank source requests returned 403 but browser reading succeeded. Do not imply user affiliation beyond their stated recent connections.
- [x] Create static profiles and page, add Home and Help navigation; no discovered organizations in public data.
- [x] Lint/typecheck/build pass; Connections, Home hover and Stack browser regressions pass. New page lazy chunk is 25.61KB / 5.59KB gzip; existing main-bundle size warning remains.
- [x] Five profiles, 15 activities and 10 source links verified; body text 18px; jump links/title/theme/reduced motion/no errors; no overflow at 320–2560px in both themes, including Home/Help navigation.
- [x] Visually inspected desktop hero, profile and mobile layout. Official link checks: 8 HTTP 200, 4 automated-request 403 (NIFI routes and Rank financials); retained valid official links. Browser source reading succeeded for NIFI About and Rank strategy.
- Related shortlist researched from official sites: Chi Hack Night (Chicago civic-tech gathering), Alliance of Civic Technologists (national volunteer network; includes Chi Hack Night), Everyday Democracy (community dialogue/training), Code for America (human-centered public-service technology), City Bureau/Documenters (Chicago-origin civic reporting and participatory technology).
- [x] Delivered five-profile preview and presented shortlist for approval before adding further organizations.
- [x] User approved Chi Hack Night, Everyday Democracy, Code for America and Alliance of Civic Technologists; City Bureau / Documenters not selected.
- [x] Added separate “More to explore” research-discovery section, eight official source links, practical starting points and a jump link; original five profiles unchanged.
- [x] Updated affiliation note to distinguish recent connections from research discoveries. Preserved equity focus, public-service distinction and volunteer-network role.
- [x] Lint/typecheck/build, diff checks and Connections/Home hover/Stack browser regressions pass. Both themes and 320–2560px checked; descriptions remain 18px. All eight new source URLs returned HTTP 200.
- [x] Visually inspected desktop light and mobile dark discovery layouts. Connections lazy chunk now 33.60KB / 7.09KB gzip; existing main-bundle warning remains.
- No commit/push requested; changes are preview-only. Updated website delivery follows.