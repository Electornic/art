# PeachWeb Landing Clone

A learning clone of the [peachweb.io](https://peachweb.io/) landing page,
rebuilt from scratch with a scroll-driven WebGL backdrop where five spheres
choreograph their position, scale, distortion, and color across every section.

[![Vite](https://img.shields.io/badge/Vite-8.0.10-646CFF.svg)](https://vite.dev/)
[![React](https://img.shields.io/badge/React-19.2.5-61DAFB.svg)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-6.0.2-3178C6.svg)](https://www.typescriptlang.org/)
[![pnpm](https://img.shields.io/badge/pnpm-package%20manager-F69220.svg)](https://pnpm.io/)
[![Three.js](https://img.shields.io/badge/Three.js-0.184.0-000000.svg)](https://threejs.org/)
[![React Three Fiber](https://img.shields.io/badge/R3F-9.6.1-black.svg)](https://r3f.docs.pmnd.rs/)
[![drei](https://img.shields.io/badge/drei-10.7.7-7B61FF.svg)](https://drei.docs.pmnd.rs/)

---

## What this is

A study project. The structure, copy, and visual language follow
peachweb.io closely so I could practice translating a real, design-heavy
landing page into modern React + R3F. **No assets from the original site
are used** — every gradient, SVG mockup, and 3D object in this repo is
hand-built.

Don't ship this somewhere as your own product. Read the code, take the
ideas, build something yours.

---

## The interesting part: scroll-driven sphere choreography

The hero on peachweb.io centers on a heavy WebGL scene. To get a
similar feel without copying their `.glb` models, this repo runs a
single global `<Canvas>` pinned to the viewport, with five distorted
spheres that morph between **six section keyframes** as you scroll.

```
Hero  ─►  Awards  ─►  Use Cases  ─►  Experts  ─►  Steps  ─►  Footer
0%        18%         45%             68%           85%       100%
```

Per frame, each sphere:

1. reads `window.scrollY` directly (no React state — that would
   thrash R3F's tree),
2. resolves which segment of `stops` it sits in,
3. applies `MathUtils.smoothstep` for easing inside the segment,
4. lerps `position`, `scale`, `distort`, and `color` between the
   segment's two adjacent keyframes,
5. damps the mesh toward the target with a frame-rate-independent
   `1 - Math.exp(-delta * k)` factor.

The first frame snaps directly to the target so a reload at any
scroll depth lands in the right configuration. `prefers-reduced-motion`
parks the scene at the hero formation.

In the footer, all five spheres converge on the origin, scale up, and
overlap to read as one big "magic" blob.

All of this lives in [`src/components/BackgroundScene.tsx`](src/components/BackgroundScene.tsx).

---

## Page sections

1. **Nav** — Floating glass pill, brand mark, four dropdown menus, login + CTAs.
2. **Hero** — Headline with gradient serif italic "Minutes", badge, dual CTAs, scroll indicator.
3. **Loading sequence** — Infinite marquee of the original's six boot phrases.
4. **Awards** — Three credibility cards (Award Winning / Trend Setting / Scalable) with custom SVG glyphs.
5. **Gallery CTA** — "Launch your Visually Stunning Interactive 3D Website" + a 3×2 grid of fictional client tiles.
6. **Use Cases** — Ecommerce / Tech / Creative / Storytelling, each with an inline-SVG visual.
7. **Expert Services** — Two-column panel: animated component-stack visual + dual CTAs and trust bullets.
8. **Steps** — Tell us About Yourself → Pick Your Theme → Edit & Launch, with arrow connectors.
9. **Footer CTA banner** — "Start building *magic* today" with multi-stop gradient on the serif word.
10. **Footer** — Sitemap (Product / Resources / Use Cases / Plans), socials, ghosted giant wordmark.

---

## Getting started

```bash
pnpm install
pnpm dev      # http://localhost:5173
pnpm build    # type-check + production bundle into dist/
pnpm lint
```

Desktop only — there's no mobile breakpoint work here yet.

---

## Project structure

```
src/
├── main.tsx
├── App.tsx                       # Section composition + global <BackgroundScene />
├── index.css                     # Design tokens, scrollbar, scroll-driven reveal animation
└── components/
    ├── BackgroundScene.tsx       # Five spheres + per-frame keyframe lerp (the fun file)
    ├── Nav.tsx | .css
    ├── Hero.tsx | .css
    ├── LoadingSequence.tsx | .css
    ├── Awards.tsx | .css
    ├── GalleryCTA.tsx | .css
    ├── UseCases.tsx | .css
    ├── ExpertServices.tsx | .css
    ├── Steps.tsx | .css
    └── Footer.tsx | .css
```

---

## Tweaking it

| Want to change… | Edit |
|---|---|
| Color/typography/radius tokens | [`src/index.css`](src/index.css) `:root` |
| Where each section's keyframe lands | `stops` array in [`BackgroundScene.tsx`](src/components/BackgroundScene.tsx) |
| Sphere positions / scales / colors per section | `spheres[i].frames[j]` in the same file |
| How quickly spheres ease toward targets | `Math.exp(-delta * 4.5)` damping constant |
| Sphere glow intensity | `emissiveIntensity={0.35}` on `<MeshDistortMaterial>` |
| Section background opacity (sphere visibility) | `rgba(0,0,0,X)` on each section's outer wrapper |

---

## Browser notes

- Tested on recent Chrome/Edge.
- Scroll-triggered reveal animations rely on
  [`animation-timeline: view()`](https://developer.mozilla.org/en-US/docs/Web/CSS/animation-timeline),
  available in Chromium 115+ and Safari 26+. In older browsers the
  page renders cleanly without the reveal effect.
- WebGL is required for the background scene; if it fails the rest of
  the page still works (canvas just stays empty).

---

## Credits

- Design inspiration & verbatim copy: [peachweb.io](https://peachweb.io/) (Peach Worlds Ltd).
  This repo is fan-made / educational; no affiliation.
- 3D scene built on [three.js](https://threejs.org/),
  [@react-three/fiber](https://r3f.docs.pmnd.rs/), and
  [@react-three/drei](https://drei.docs.pmnd.rs/) (`MeshDistortMaterial`).
- Typography: [Inter](https://rsms.me/inter/) +
  [Instrument Serif](https://fonts.google.com/specimen/Instrument+Serif).

---

Built collaboratively with Claude Code.
