# sailikhithk-portfolio-v2

Personal portfolio of **Sai Likhith Kanuparthi** — Sr. Software Engineer (ML Infrastructure & AI Engineering @ Airbnb).  
Built with Next.js 16 App Router, TypeScript, Framer Motion, and a centralized CSS design system.

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 16.2 (App Router, static export) |
| Language | TypeScript 5 |
| Styling | Vanilla CSS + CSS Variables (no Tailwind runtime) |
| Animation | Framer Motion 12 |
| 3D / Interactive | Spline (`@splinetool/react-spline`) |
| 3D Animation lib | GSAP 3 |
| Card tilt effect | `react-tilt` |
| Formatting | Prettier 3 |
| Linting | ESLint 9 + `eslint-config-next` |
| Node | 20+ |

---

## Project Structure

```
app/
├── components/
│   ├── Navbar.tsx              # Sticky top nav, mobile-responsive
│   ├── Hero.tsx                # Landing section with photo + social links
│   ├── AboutAndTechStack.tsx   # 3-col: About cards | Spline keyboard | Stats
│   ├── Experience.tsx          # Work history cards
│   ├── Projects.tsx            # Project cards with tilt + hover overlays
│   ├── Recognition.tsx         # Testimonial carousel (arrow nav + dots)
│   ├── Education.tsx           # Degree cards (NYU + JNTUA)
│   ├── Footer.tsx              # Contact / social links
│   └── ui/
│       └── SectionHeading.tsx  # Shared heading component (h2 + divider)
│
├── data/                       # All hardcoded content — single source of truth
│   ├── index.ts                # Barrel: import everything from @/app/data
│   ├── experience.ts           # jobs[] array
│   ├── projects.ts             # projects[] array + ProjectTag type
│   ├── recognition.ts          # recognitions[] array (quotes)
│   └── about.ts                # cards[], stats[], SKILLS{}
│
├── types/
│   └── index.ts                # Shared TypeScript interfaces (Job, Recognition, Skill, etc.)
│
├── globals.css                 # ← DESIGN SYSTEM: all tokens, layout classes
├── layout.tsx                  # Root layout: fonts, metadata, FA icons
└── page.tsx                    # Page assembly — imports all sections in order
```

---

## Design System

All visual tokens and layout rules live in **`app/globals.css`**.  
Nothing is hardcoded in components — everything points to a CSS variable.

### Color Tokens (`:root`)

```css
:root {
  --bg:          #091227;   /* Site-wide background — all sections */
  --teal:        #18bc9c;   /* Accent / highlight color */
  --text:        #ffffff;   /* Primary text */
  --muted:       #aaaaaa;   /* Secondary / subdued text */
  --card-bg:     rgba(255, 255, 255, 0.04);  /* Glass card background */
  --card-border: rgba(255, 255, 255, 0.08);  /* Glass card border */
}
```

### How to Change the Background Color

**Globally (all sections at once):**
```css
/* app/globals.css */
--bg: #091227;  /* ← change this one value */
```

**Per-section (different color per section):**  
Add a CSS variable override scoped to the section's `id`:

```css
/* app/globals.css */
#about       { --bg: #0a1428; background-color: var(--bg); }
#experience  { --bg: #080f20; background-color: var(--bg); }
#portfolio   { --bg: #091227; background-color: var(--bg); }
#recognition { --bg: #0b1530; background-color: var(--bg); }
#education   { --bg: #091227; background-color: var(--bg); }
```

Section IDs in use:

| Section | HTML `id` |
|---|---|
| Hero | `page-top` |
| About & Skills | `about` |
| Work Experience | `experience` |
| Projects | `portfolio` |
| Recognition | `recognition` |
| Education | `education` |

### Layout Classes

```css
.section-wrapper   /* Full-width section: bg-color + vertical padding (6rem 0) */
.section-inner     /* Horizontal content inset: padding: 0 calc(5rem + 84px)   */
                   /* This matches Recognition card width exactly              */
.section-body      /* Legacy alias for section-inner (no extra margin now)     */
.card-glass        /* Glass morphism card: bg, border, blur, border-radius     */
.tag-pill          /* Small pill chip for skill/tech tags                      */
```

### Typography

```css
--font-montserrat  /* Used for headings, nav, labels — uppercase tracking */
                   /* Loaded via next/font/google in layout.tsx            */
```

---

## Data Layer

All content arrays live in `app/data/` and are imported through the barrel `app/data/index.ts`.

**Correct import pattern (always use barrel):**
```ts
import { jobs, projects, recognitions, cards, SKILLS } from "@/app/data";
```

**Never import directly from individual files:**
```ts
// ❌ Don't do this
import { jobs } from "@/app/data/experience";
```

### Adding / editing content

| What to change | File to edit |
|---|---|
| Work experience entries | `app/data/experience.ts` — `jobs[]` |
| Project cards | `app/data/projects.ts` — `projects[]` |
| Testimonial quotes | `app/data/recognition.ts` — `recognitions[]` |
| About cards / stats | `app/data/about.ts` — `cards[]`, `stats[]` |
| Skill keyboard keys | `app/data/about.ts` — `SKILLS{}` (key = Spline object name) |
| Education entries | `app/components/Education.tsx` — `degrees[]` (local array) |
| Nav links | `app/components/Navbar.tsx` — `navLinks[]` (local array) |
| Social links | `app/components/Hero.tsx` + `app/components/Footer.tsx` — `socialLinks[]` |

---

## Shared Components

### `SectionHeading`

Renders a centered `h2` + optional subtitle + decorative `hr` divider.

```tsx
import SectionHeading from "@/app/components/ui/SectionHeading";

<SectionHeading
  title="Work Experience"       // required — h2 text
  subtitle="My career"          // optional — small teal label above
  divider="primary"             // "primary" | "light" (default: "primary")
  mb="3rem"                     // margin-bottom (default: "3rem")
/>
```

---

## Scripts

```bash
npm run dev           # Start dev server (hot reload) — use for local development
npm run build         # Production build → .next/
npm run start         # Serve production build — requires a prior `npm run build`
npm run format        # Auto-format all app/**/*.{ts,tsx,css,json} with Prettier
npm run format:check  # Check formatting without writing (good for CI)
npm run lint          # Run ESLint
```

> **Tip:** Always use `npm run dev` during development. `npm run start` serves
> a static snapshot of the last build — CSS/code changes won't appear until you
> rebuild with `npm run build`.

---

## Local Setup

```bash
# 1. Install dependencies (react-tilt requires legacy peer deps)
npm install --legacy-peer-deps

# 2. Start dev server
npm run dev

# 3. Open browser
open http://localhost:3000
```

---

## Deployment

The project builds to a fully static site.  
Deploy to **Vercel** (zero config — just connect the GitHub repo).

Or build and serve manually:
```bash
npm run build
npm run start
```

---

## Known Quirks

| Issue | Detail |
|---|---|
| `react-tilt` peer conflict | Requires `@types/react@^18` but project uses `^19`. Use `--legacy-peer-deps` for installs. |
| Lockfile warning on start | `outputFileTracingRoot` is set in `next.config.ts` to silence the "multiple lockfiles" warning caused by a root-level `package-lock.json` at `~/`. |
| Spline keyboard | Loads lazily via `React.lazy`. Keycap names must match the `SKILLS` record keys in `app/data/about.ts`. |
| `npm run format` scope | Only formats `app/**` — does not touch `next.config.ts`, `postcss.config.mjs`, etc. |
