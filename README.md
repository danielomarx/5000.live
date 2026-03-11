# 5000.live — Landing Page

> **Native mobile apps. 4 weeks. $5,000. Guaranteed.**
> A venture by [We Pioners LTD](https://wepioners.com) — Registered in the United Kingdom.

Production landing page for **5000.live** — a service that builds native iOS & Android mobile apps in 4 weeks for $5,000 USD, with a full money-back guarantee if the deadline is missed.

**Live URL:** https://5000.live  
**Target market:** Gulf region — UAE, Saudi Arabia, Qatar, Kuwait, Bahrain — and Arab entrepreneurs worldwide.

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 14 (App Router) |
| Styling | Tailwind CSS v3 |
| Animations | Framer Motion v11 |
| Icons | Lucide React |
| i18n | next-intl v3 (EN + AR, RTL-ready) |
| Fonts | Google Fonts via `next/font` — Syne, DM Sans, Space Mono, IBM Plex Sans Arabic |
| Language | TypeScript |
| Deployment | Netlify (`@netlify/plugin-nextjs`) |

---

## Project Structure

```
nextjs/
├── app/
│   ├── layout.tsx                  # Minimal root layout (delegates to locale layout)
│   ├── globals.css                 # Tailwind + custom utilities (.glass, .glow-gold, etc.)
│   └── [locale]/
│       ├── layout.tsx              # <html lang dir> + fonts + SEO metadata + JSON-LD
│       └── page.tsx                # Assembles all sections in order
│
├── components/
│   ├── CountUp.tsx                 # Reusable count-up animation (Framer Motion useInView)
│   ├── Navbar.tsx                  # Sticky nav, mobile menu, EN|AR language switcher
│   ├── Hero.tsx                    # Full-screen hero with staggered entrance animations
│   ├── Problem.tsx                 # 4 glassmorphism pain-point cards
│   ├── Solution.tsx                # Side-by-side comparison table (Old Way vs 5000.live)
│   ├── WhatIsIncluded.tsx          # 8-card grid of deliverables with Lucide icons
│   ├── HowItWorks.tsx              # Vertical animated timeline (7 steps, Week 0–4)
│   ├── WhoIsItFor.tsx              # Two-column good/bad audience split
│   ├── Guarantee.tsx               # Centered guarantee section with ShieldCheck icon
│   ├── FAQ.tsx                     # AnimatePresence accordion (8 Q&As)
│   ├── FinalCTA.tsx                # Bottom CTA with pulsing gold button
│   └── Footer.tsx                  # Logo, social links, language switcher, legal
│
├── messages/
│   ├── en.json                     # All English strings (source of truth)
│   └── ar.json                     # Professional Arabic translations (فصحى مبسطة)
│
├── public/                         # Static assets (add OG image, favicon, etc. here)
│
├── middleware.ts                   # next-intl locale routing (en/ar, default: en)
├── i18n.ts                         # next-intl server config (getRequestConfig)
├── next.config.mjs                 # Next.js config + next-intl plugin
├── tailwind.config.ts              # Custom design tokens (colors, fonts, keyframes)
├── postcss.config.js               # Tailwind + autoprefixer
├── tsconfig.json                   # TypeScript config (strict mode)
├── netlify.toml                    # Netlify build config (@netlify/plugin-nextjs)
└── package.json                    # Dependencies and scripts
```

---

## Design System

### Colors

```css
--bg:       #07091A   /* Deep dark navy — page background */
--surface:  #0D1130   /* Slightly lighter — card/section surfaces */
--primary:  #0A1628   /* Deep navy — primary brand */
--gold:     #F5A623   /* Amber/gold — primary accent, CTAs, price callouts */
--cyan:     #00E5C3   /* Neon cyan — live indicator, badges, icons */
--muted:    #8892A4   /* Muted text — descriptions, placeholders */
--border:   rgba(255,255,255,0.08)  /* Subtle white borders */
```

### Fonts

| Usage | Font | Weight | CSS Variable |
|---|---|---|---|
| Headlines / Display | Syne | 700, 800 | `--font-syne` / `font-display` |
| Body text | DM Sans | 400, 500, 600 | `--font-dm-sans` / `font-body` |
| Numbers ($5,000 / 4 Weeks) | Space Mono | 400, 700 | `--font-space-mono` / `font-mono` |
| Arabic (RTL) | IBM Plex Sans Arabic | 400–700 | `--font-arabic` |

### Tailwind Custom Classes

```css
.glass           /* Glassmorphism: bg rgba(255,255,255,0.04), blur(12px), white border */
.glow-gold       /* Static gold box-shadow glow */
.glow-gold-hover /* Gold glow on hover */
.section-padding /* Consistent 96px top/bottom padding */
.grid-bg         /* Subtle background grid overlay */
.text-gradient-gold  /* Gold gradient text */
.text-gradient-cyan  /* Cyan gradient text */
```

---

## Getting Started

### Prerequisites

- Node.js 18+
- npm 9+

### Local development

```bash
# Clone the repo
git clone https://github.com/YOUR_USERNAME/5000live.git
cd 5000live

# Install dependencies
npm install

# Start dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) — the middleware redirects automatically to `/en`.

- English version: http://localhost:3000/en
- Arabic (RTL) version: http://localhost:3000/ar

### Build for production

```bash
npm run build    # Compiles and type-checks (should exit 0)
npm run start    # Serves the production build locally
```

---

## Internationalization (i18n)

### How it works

- **Routing:** `middleware.ts` detects locale from URL prefix (`/en/*`, `/ar/*`). Default locale is `en`. No locale detection from browser headers (intentional, for predictable URLs).
- **Messages:** All user-facing strings live in `messages/en.json` and `messages/ar.json`. **Zero hardcoded strings in components.**
- **RTL:** When locale is `ar`, the `<html>` element gets `dir="rtl"` and IBM Plex Sans Arabic font is applied automatically via the locale layout.
- **Language switcher:** Both `Navbar` and `Footer` include an `EN | AR` switcher that navigates to the same page in the other locale.

### Adding a new locale (e.g. French)

1. Add `'fr'` to the `locales` array in `middleware.ts` and `i18n.ts`
2. Create `messages/fr.json` with all keys from `messages/en.json`
3. Add `fr` to the language switcher in `Navbar.tsx` and `Footer.tsx`
4. Add the hreflang entry in `app/[locale]/layout.tsx` metadata

### Adding or editing translations

All translation keys are organized by section:

```
nav, hero, problem, solution, included, process, audience, guarantee, faq, cta, footer
```

Edit `messages/en.json` for English, `messages/ar.json` for Arabic. Components access them via:

```tsx
const t = useTranslations('sectionName')
// Then: t('keyName')
```

---

## Deployment — Netlify

### Automatic (recommended)

1. Push this repository to GitHub
2. Go to [netlify.com](https://netlify.com) → **Add new site** → **Import from Git**
3. Select the repository
4. Netlify auto-detects `netlify.toml` — build command and settings are pre-configured:

```toml
[build]
  command = "npm run build"
  publish = ".next"

[[plugins]]
  package = "@netlify/plugin-nextjs"
```

5. Click **Deploy site** — done.

### Environment variables on Netlify

If you add any `.env` variables in the future (e.g., for a contact form API, Calendly, analytics), add them in:
**Netlify Dashboard → Site → Environment variables**

Current required variables: **None** — the site builds with zero environment variables.

### Custom domain

In **Netlify Dashboard → Domain management**, add `5000.live` as a custom domain and follow the DNS instructions.

---

## Sections Overview

| # | Section | ID | Component |
|---|---|---|---|
| 1 | Navigation | — | `Navbar` |
| 2 | Hero | `#hero` | `Hero` |
| 3 | Pain points | `#problem` | `Problem` |
| 4 | Comparison table | `#solution` | `Solution` |
| 5 | What's included | `#included` | `WhatIsIncluded` |
| 6 | How it works (timeline) | `#how-it-works` | `HowItWorks` |
| 7 | Who is it for | `#audience` | `WhoIsItFor` |
| 8 | Money-back guarantee | `#guarantee` | `Guarantee` |
| 9 | FAQ accordion | `#faq` | `FAQ` |
| 10 | Final CTA | `#contact` | `FinalCTA` |
| 11 | Footer | — | `Footer` |

---

## SEO

Implemented in `app/[locale]/layout.tsx`:

- Full `<title>`, `description`, `keywords` meta tags
- Open Graph (`og:title`, `og:description`, `og:url`, `og:type`)
- Twitter Card (`summary_large_image`)
- Canonical URL
- `hreflang` alternates for `en` and `ar`
- **JSON-LD structured data** (`@type: Service`) with provider, offers, and areaServed

### Recommended next steps for SEO
- Add an OG image (`public/og-image.png`, 1200×630px) and reference it in metadata
- Add a `public/sitemap.xml`
- Add `public/robots.txt`

---

## Animations

All animations use **Framer Motion**:

| Effect | Where | Implementation |
|---|---|---|
| Staggered entrance | Hero | `motion.div` with custom delay variants |
| Scroll reveal fade-up | All sections | `whileInView` + `viewport: { once: true }` |
| Card hover lift | Problem, WhatIsIncluded | `whileHover: { y: -6 }` |
| FAQ height accordion | FAQ | `AnimatePresence` + `height: 0 → 'auto'` |
| Count-up number | Hero `$5,000` | Custom `CountUp.tsx` + `useInView` |
| CTA pulse glow | Hero & FinalCTA CTAs | CSS keyframe `animate-pulse-glow` |

---

## Common Tasks

### Change the contact email

Search for `contact@5000.live` in:
- `components/FinalCTA.tsx` — the mailto href
- `components/Footer.tsx` — the contact link
- `messages/en.json` and `messages/ar.json` if referenced in translations

### Add a Calendly popup

Replace the `mailto:` href in `FinalCTA.tsx` and `Navbar.tsx` with a Calendly embed:

```tsx
// Install: npm install react-calendly
import { PopupButton } from 'react-calendly'
```

### Add Google Analytics / Plausible

Add the script tag to `app/[locale]/layout.tsx` inside `<head>`, or use Next.js `<Script>` component.

### Change the price or timeline

All copy is in `messages/en.json` and `messages/ar.json`. The `$5,000` price in gold monospace in the Hero is rendered as a literal string — update `hero.price` (or the `$5,000.` text in `Hero.tsx` directly).

---

## For AI Assistants

> If you are an AI reading this file to understand the codebase, here is a precise map:

**Key architectural decisions:**
- `app/layout.tsx` returns `children` directly (no `<html>`/`<body>`) — this is intentional. The locale layout at `app/[locale]/layout.tsx` owns the full HTML shell including `lang` and `dir` attributes for RTL support.
- All components are `'use client'` because they use Framer Motion (`motion.*`, `whileInView`, `AnimatePresence`). This is correct — Next.js streams the server-rendered HTML and hydrates on client.
- `useTranslations` from `next-intl` works in client components because `NextIntlClientProvider` wraps the tree in `app/[locale]/layout.tsx` and passes all messages down.
- `next.config.mjs` (not `.ts`) — Next.js 14 does not support TypeScript config files.
- The `CountUp.tsx` component is NOT used in the current implementation; it is provided as a utility for whoever wants to wire up the `$5,000` counter in `Hero.tsx`.

**Translation key structure:**
```
messages/{locale}.json
  nav.{howItWorks|whatsIncluded|faq|contact|cta}
  hero.{badge|headlineLine1|for|sub|micro|badge1-4|cta|secondary}
  problem.{tag|title|card1-4Title|card1-4Desc|bottom}
  solution.{tag|title|subtitle|oldWayTitle|newWayTitle|row1-5Old|row1-5New|note}
  included.{tag|title|card1-8Title|card1-8Desc|note}
  process.{tag|title|step1-7Label|step1-7Title|step1-7Desc}
  audience.{tag|title|goodTitle|good1-6|badTitle|bad1-4}
  guarantee.{tag|title|title2|body|badge1-3}
  faq.{tag|title|q1-8|a1-8}
  cta.{title|title2|sub|button|micro}
  footer.{tagline|ventureBy|company|privacy|terms|contact|copyright}
```

**To add a new section:**
1. Create `components/NewSection.tsx` with `'use client'` and `useTranslations('newSection')`
2. Add translation keys to `messages/en.json` and `messages/ar.json` under `"newSection": {}`
3. Import and add `<NewSection />` in `app/[locale]/page.tsx`

---

## Company Info

| Field | Value |
|---|---|
| Product | 5000.live |
| Parent company | We Pioners LTD |
| Registration | United Kingdom |
| Website | https://wepioners.com |
| Contact | contact@5000.live |
| Competitor reference | 5000.dev (web apps, separate company — no affiliation) |

---

## License

Private — All rights reserved. © 2025 5000.live — A We Pioners LTD Venture.
