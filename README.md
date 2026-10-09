# FXCup Loading Screen

A minimal Next.js splash screen for FXCup. It plays a short competition-themed intro, assembles the FXCup mark inside a trophy, and then fades to a black screen.

## Stack

- Next.js 16
- React 19
- JavaScript / JSX
- CSS keyframe animations
- Inline SVG for the animated trophy and logo

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

For a production check:

```bash
npm run build
npm start
```

## Project structure

```text
app/
  layout.js      Page metadata and global CSS import
  page.js        Trophy, FXCup mark, and loader markup
  globals.css    Layout, colors, and the complete animation timeline
public/
  fxcup-logo.svg Original full FXCup wordmark
```

## Animation flow

The complete sequence lasts `2.7s`:

1. The `FXCUP` title appears.
2. A green line moves upward and introduces the trophy.
3. Trophy paths are drawn independently.
4. The FXCup mark assembles inside the trophy.
5. Particles and the `MONTHLY TRADING CUP` caption appear.
6. The loader fades out, leaving a black screen.

## Common adjustments

- Duration: `--loader-time` in `.loader`.
- Trophy size: `.loader__trophy` width.
- Logo size and position: `.loader__cup` width, top, and left.
- Brand colors: `--aqua`, `--blue`, and the SVG gradients.
- Fade timing: `@keyframes loaderExit`.

The logo uses a polygon clip mask so it cannot extend beyond the trophy bowl.

## Vercel deployment

Use the repository root as the Root Directory and select the Next.js framework preset. Keep Output Directory unset; do not set it to `public`.
