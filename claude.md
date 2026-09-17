# CLAUDE.md — VisaHub (USA Visa Hub) Marketing Site

This file is the standing brief for Claude Code on this repo. Read it before touching any file. It defines the stack, the design contract, the page structure, and the rules Claude must not violate.

## 1. What this project is

A conversion-focused marketing/landing site for a visa & travel consultancy ("VisaHub / USA Visa Hub") targeting Tamil Nadu clients seeking USA/Canada/UK/Schengen/Australia visas, doorstep consular assistance, flight bookings, dummy tickets, and travel insurance. Reference mock: `screen.png`. Reference design tokens: `DESIGN.md`. A rough static HTML/Tailwind-CDN prototype (`code.html`) already exists — treat it as a wireframe of intent, not production code. Nothing from it should be copy-pasted as-is (inline `<script>` tags, CDN Tailwind, no components, no accessibility, no SEO).

Primary business goals, in priority order:

1. Get the visitor to call/WhatsApp or book a consultation.
2. Establish institutional trust fast (approvals count, consular language, doorstep service).
3. Let the visitor self-serve an eligibility/fee estimate before talking to a human.

## 2. Tech stack (use exactly this unless the user says otherwise)

- **Framework:** Next.js 15 (App Router), TypeScript, React 19.
- **Styling:** Tailwind CSS v4, tokens driven from `DESIGN.md` (see §4) via `@theme` in `globals.css` — no `tailwind.config.js` color hardcoding, no CDN Tailwind.
- **Components:** shadcn/ui as the primitive layer (Button, Card, Accordion, Tabs, Dialog, Input, Select, Badge) — installed via CLI, not hand-copied, then themed to match §4.
- **Icons:** `lucide-react`.
- **Motion:** `framer-motion` (or `motion` package) for the float/glow/hover micro-interactions — CSS `@keyframes` only for simple looped effects (badge pulse, background drift), JS-driven motion only where it responds to scroll/viewport.
- **Forms:** `react-hook-form` + `zod` for the consultation/callback form.
- **Fonts:** `next/font/google` for Plus Jakarta Sans — never a `<link>` tag to Google Fonts.
- **Deployment:** Vercel, connected to the git repo, framework preset auto-detected as Next.js. No custom `vercel.json` needed unless redirects/headers are added later.
- **Package manager:** pnpm.
- **Lint/format:** ESLint (`next lint`) + Prettier with the Tailwind plugin (`prettier-plugin-tailwindcss`) so class order is deterministic.

Do not introduce: CRA, plain Vite+React (loses SEO/SSR that a lead-gen site needs), CSS-in-JS libraries, jQuery, or any client-side-only calculator logic living in a raw `<script>` tag — port that into a typed React component with state.

## 3. Non-negotiable project structure

```
app/
  layout.tsx                 # fonts, metadata, theme, JSON-LD
  page.tsx                   # composes sections only — no markup lives here
  globals.css                # Tailwind v4 @theme tokens from DESIGN.md
components/
  sections/                  # one file per landing-page section (see §5)
  ui/                         # shadcn primitives
  shared/                    # Header, Footer, WhatsAppFAB, StickyBar
lib/
  constants.ts               # phone numbers, social handles, nav links, visa fee tables
  types.ts
public/
  ...optimized images/icons
```

`page.tsx` must read like a table of contents: a list of `<SectionX />` imports, nothing else. Every section is its own component so it can be edited, reordered, or A/B tested independently.

## 4. Design system contract (source of truth: `DESIGN.md`)

`DESIGN.md` is authoritative for color tokens, type scale, spacing, radii, and elevation — port it into Tailwind v4 `@theme` variables verbatim (e.g. `--color-primary`, `--color-secondary`, `--font-size-display-hero`, `--radius-lg`, etc.), don't reinvent hex values. Where `code.html`'s ad-hoc palette (`brand-*`, `navy-*`, `accent-*`) conflicts with `DESIGN.md`, `DESIGN.md` wins — it's the maintained system, the CDN prototype was a throwaway.

Enforce these rules from `DESIGN.md` everywhere:

- **Glassmorphism is structural, not decorative.** Frosted panels (`backdrop-filter: blur(16px)`, translucent white) are reserved for elevated cards/popovers/modals (Level 1–3). Never apply blur to full-bleed background sections — keep the base canvas gradient solid/cheap so scrolling stays smooth on low-end Android phones, which is most of this audience.
- **Typography:** Plus Jakarta Sans only, use the named scale (`display-hero`, `headline-lg/md/sm`, `body-lg/md/sm`, `label-lg/md/caps`) — never an arbitrary `text-[17px]`. Use the `-mobile` variants of hero/headline styles below the `md` breakpoint via responsive classes, not a separate mobile component.
- **Roundedness:** 8px on interactive controls, 16px on cards/modals, 24px on hero/cockpit surfaces, full pill on badges/status chips/segmented tabs. Don't mix radii within the same visual tier.
- **Color roles are semantic, not literal:** primary (deep navy) = authority/nav/headers; secondary (electric cyan) = live/active telemetry state; tertiary (royal blue) = primary CTA buttons and focus states; slate neutral = metadata/labels/dividers. A component that needs a new color first asks "which role is this playing" before picking a hex.
- **Motion budget:** hover lift on cards is `-4px` Y-translate with cyan-ring highlight; button hover shifts navy → royal blue with a soft cyan glow; background float/drift loops stay under 6–8s duration and `ease-in-out` so nothing feels frantic. Respect `prefers-reduced-motion`: disable float/pulse loops for users who request it.

## 5. Page sections (top to bottom, matching `screen.png`)

1. **Top utility bar** — live slot-tracking pill, multi-country ticker, call/WhatsApp link, "31k+ approvals" trust line. Sticky-adjacent, not itself sticky.
2. **Header** — logo, desktop nav, mobile hamburger → sheet/drawer (shadcn `Sheet`), primary CTA button. `sticky top-0`, condenses (shadow + height) on scroll.
3. **Hero** — headline + gradient-highlighted subphrase, subcopy, a segmented "Flight / Visa / Work Visa / Doorstep" search-style module (shadcn `Tabs` + `Select`/`Input`), trust stat strip (31k+, 100%, Doorstep, 24/7).
4. **Services grid** — 6 cards (Flight Tickets, Dummy Tickets, Visa Services, Hotel Booking, Travel Insurance, Currency Exchange), icon + title + 1-line description + text link. Dark trust-marker strip beneath (Best Prices / Fast Booking / 24×7 Support / Trusted by Thousands).
5. **Doorstep Visa Assistance** — dark glass card (pain-point list) paired with a light card (in-person support pitch + trust badges), a 5-step process rail below (icon + short label per step), and a callout banner for Tamil Nadu availability.
6. **Call/WhatsApp banner** — high-contrast strip with tel: and https://wa.me/ links — must be real `<a>` tags, not JS `onclick`, so they work with no JS and are crawlable/tappable everywhere.
7. **All Countries Visa Assistance** — 4–5 destination/category cards (Tourist, Student, Work, Global Partner), each with fee/turnaround chip and a bullet checklist.
8. **Interactive Cost & Timeline Calculator** — port `code.html`'s inline script into a client component (`"use client"`): visa-type select, traveler stepper, concierge-tier radio group, live-updating MRV/concierge/total breakdown, and a timeline estimate that swaps color/copy based on tier. Keep the calculation pure (a `computeFee()` function, unit-testable) separate from the JSX.
9. **Social proof** — "31,000+ happy travelers" stat + 3 short testimonial cards + Instagram follow strip.
10. **FAQ** — accordion (shadcn `Accordion`, not raw `<details>`), 3–5 Q&As, single-open-at-a-time.
11. **Footer** — brand blurb, 3 link columns (Services / Doorstep Regions / Global Visas), consular disclaimer (must stay verbatim — legal boilerplate stating this is a private consultancy, not a government body), copyright.
12. **Persistent WhatsApp FAB** — bottom-right floating action button on mobile, always tappable, doesn't overlap the sticky CTA.

## 6. Mobile-first & responsive rules

- Build every section mobile-first (base classes = mobile), then layer `sm:`/`md:`/`lg:` up — never the reverse.
- Breakpoints follow `DESIGN.md`: mobile <768px (4-col, 16px gutter), tablet 768–1023px (8-col, 24px gutter), desktop ≥1024px (12-col, 32px gutter, 1280px max container).
- The segmented search/tab module and the calculator's two-column layout (8/4 split) **must** collapse to a single stacked column below `md`, in source order that keeps the primary decision (visa type, traveler count) above the live summary.
- Tap targets ≥44×44px; sticky header height ok to shrink slightly on scroll but never below that.
- Test every section at 360px width (common low-end Android) as the real minimum, not 375px.
- No horizontal scroll anywhere except explicitly-designed carousels (destination cards on mobile may become a horizontal edge-swipe row per `DESIGN.md`).

## 7. Accessibility (treat as a requirement, not a nice-to-have)

- Semantic landmarks: one `<header>`, one `<nav>` (with `aria-label` if there are two, e.g. desktop vs mobile), `<main>`, one `<footer>`.
- All interactive icons (call, WhatsApp, hamburger, accordion chevrons) need an accessible name (`aria-label` or visible text) — an icon alone is not a button label.
- Color contrast: verify navy-on-cyan and any white-on-frosted-glass text combos against `DESIGN.md` tokens meet WCAG AA (4.5:1 body text, 3:1 large text) — the electric-cyan-on-white and light-slate-on-white combos in the source mock are the ones to double check.
- Accordion, tabs, and select must be keyboard operable (shadcn primitives handle this — don't rebuild with raw `<div onClick>`).
- Form inputs (calculator, any lead form) get real `<label>`s, not just placeholder text.
- Respect `prefers-reduced-motion` as noted in §4.

## 8. SEO & performance

- Real `metadata` export in `app/layout.tsx` and per-section `page.tsx` (title, description, OG image, canonical).
- JSON-LD `LocalBusiness`/`TravelAgency` structured data with the phone number and service area.
- `next/image` for every raster asset — no plain `<img>` — with explicit width/height or `fill` + sized container to avoid layout shift.
- Lighthouse mobile targets before calling a page "done": Performance ≥ 90, Accessibility ≥ 95, SEO ≥ 95. Re-run after adding the calculator/animations, since those are the likely regressions.
- Keep the client-JS surface small: calculator, tabs, accordion, mobile nav, and the WhatsApp FAB are the only things that need `"use client"`; everything else stays a server component.

## 9. Content & compliance rules

- Phone/WhatsApp number, Instagram handles, and the consular disclaimer text live in `lib/constants.ts` as the single source of truth — never hardcode them twice.
- The consular disclaimer ("independent private travel concierge... not an official government embassy or affiliate...") is legally load-bearing copy — carry it forward unchanged unless the user explicitly gives you new wording.
- Fee figures in the calculator are illustrative placeholders from the prototype — flag them to the user rather than presenting them as verified government fees; don't silently invent new numbers.

## 10. Workflow expectations for Claude Code in this repo

- Scaffold with `create-next-app` (TypeScript, Tailwind, App Router, `src/` off, ESLint on) before writing any component.
- Add shadcn/ui via its CLI (`npx shadcn@latest init`, then `add` per component) rather than hand-writing primitives.
- Build section-by-section in the order in §5, committing logically (one section per commit/PR-sized chunk), not one giant first commit.
- After scaffolding, wire up Vercel by pushing to the connected git remote — no manual `vercel --prod` needed once the project is linked; mention it to the user if it isn't linked yet.
- Before marking any section "done," self-check it against §4 (tokens), §6 (mobile), and §7 (a11y) — don't wait for the user to catch these.
