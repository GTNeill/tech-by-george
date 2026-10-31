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
- [ ] Commit/push preserving remote changes; deliver running website.

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