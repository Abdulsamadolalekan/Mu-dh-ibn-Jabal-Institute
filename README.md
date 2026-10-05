# Mu'ādh ibn Jabal Institute

Preparing Muslim generation with knowledge and noble character.

The digital presence of Mu'ādh ibn Jabal Institute — a centre of Islamic
learning based at Kamadupe Masjid, Adeun, Abeokuta, Ogun State, Nigeria,
offering physical and online learning.

## Programs

1. Qur'ān Memorization (Hifz)
2. Proper Tajwīd
3. Islamic Studies
4. Arabic Language
5. Character Building
6. Good Manners

## Contact

- **WhatsApp:** 08137280101 — [wa.me/2348137280101](https://wa.me/2348137280101)
- **Phone:** 07025069442 — [tel:07025069442](tel:07025069442)
- **Location:** Kamadupe Masjid, Adeun, Abeokuta, Ogun State, Nigeria

WhatsApp is the primary conversion channel. Every call-to-action on the site
opens WhatsApp with a context-appropriate pre-filled message (general, Hifz,
or learning enquiries). All numbers and messages live in
[`app/lib/institute.js`](app/lib/institute.js) — the single source of truth.

## Stack

- [Next.js 15](https://nextjs.org) (App Router) + React 19
- [Tailwind CSS v4](https://tailwindcss.com) — CSS-based configuration via
  `@theme inline` in [`app/globals.css`](app/globals.css)
- [Framer Motion](https://www.framer.com/motion/) — scroll reveals, hero
  entrance, mobile drawer, floating button
- Fonts: Inter (body) + Playfair Display (editorial headings) via `next/font`
- Visuals are 100% SVG — no raster images

## Getting started

```bash
npm install
npm run dev
```

### Production build

```bash
npm run build
npm start
```

## Structure

```
app/
├── layout.js            Root layout — fonts, SEO metadata, viewport
├── page.js              Single page — assembles all sections
├── globals.css          Design tokens (@theme inline), base styles
├── icon.svg             Favicon (M monogram)
├── lib/
│   ├── institute.js     Verified info: numbers, address, programs,
│   │                    WhatsApp messages + waLink() builder
│   └── nav.js           Navigation links
└── components/
    ├── AnimateOnScroll.js   Scroll-reveal wrapper (reduced-motion aware)
    ├── ArrowIcon.js
    ├── BrandMark.js         M monogram (eight-pointed star)
    ├── CtaLink.js           Shared button vocabulary (primary/outline/text)
    ├── SectionLabel.js      Small-caps label + rule
    ├── StarMotif.js         Eight-pointed-star geometry
    ├── WhatsAppIcon.js      Shared WhatsApp glyph
    ├── Navigation.js        Scroll-reactive header (client)
    ├── MobileMenu.js        Slide-out drawer (client)
    ├── Hero.js              Hero with entrance animation (client)
    ├── About.js             Positioning + six-study index
    ├── Programs.js          Featured Hifz + numbered editorial list
    ├── HifzFeature.js       Hifz feature spread
    ├── Journey.js           Four stages on a drawn thread (client)
    ├── Learning.js          Physical + online split
    ├── Character.js         Typographic statement
    ├── Parents.js           For parents
    ├── Location.js          Find Us + stylised map (client)
    ├── FinalCta.js          Ready to Begin?
    ├── Footer.js
    └── WhatsAppFloat.js     Mobile floating button (client)
```

## Design

Dark chocolate (`#1a0e0a`) anchor with a warm cream (`#faf6f0`) foundation.
Sections alternate dark and cream so the page never sits flat. Islamic
identity is carried by restrained geometry (eight-pointed stars),
typography and composition — not clip-art or stereotypes.

Motion is quiet: fades, rises and a single drawn thread. `prefers-reduced-motion`
is honoured throughout.
