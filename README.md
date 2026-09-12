# Colloqate

A marketing landing page for "Colloqate" — a fictional invitation-only learning
institute — built with Next.js and Tailwind CSS. A single long-scroll page with a
matching blog, dark editorial design and an email-capture form.

## Features

- Long-scroll landing page composed of section components: hero, exclusivity, impact,
  courses, events, testimonials, insights, mindset, careers and a closing call to action.
- Blog with dynamic routes (`/blog` and `/blog/[slug]`).
- Email capture form and scroll-tracking.
- Light/dark theming, animated sections and a full set of Radix UI primitives.
- SEO metadata, sitemap, robots and optional Google Analytics / Vercel Analytics.

## Tech

- Next.js (App Router) + React
- TypeScript
- Tailwind CSS
- Radix UI, lucide-react, framer-motion
- react-hook-form + zod

## Run

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

To build for production:

```bash
npm run build
npm start
```

Optional: set `NEXT_PUBLIC_GA_ID` to enable Google Analytics.
