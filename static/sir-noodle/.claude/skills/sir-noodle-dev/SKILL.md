---
name: sir-noodle-dev
description: How to add art, power-ups/timed effects, and playtest Sir Noodle's Snack Quest (index.html canvas game). Use when changing gameplay, adding pickups/effects, or editing icons in this project.
---

# Sir Noodle dev workflow

Single-file canvas game: `index.html` (one IIFE). No build step, no npm deps.

## Art (cheap, code-drawn)
- Every icon is code in `tools/art.js`: `ART.<name> = g => { ... }`, drawn in a 100x100 box with the shared
  helpers (`circ`, `ell`, `paint`, `ink`, `shine`, `dot`...) and the ink outline `#5b2a4e`. Match that style.
- Export: `node tools/export.mjs` (headless Chrome, writes all `assets/*.png` at 128px).
  `--sheet <path.png>` also saves a preview sheet. `CHROME=<path>` if Chrome isn't at the default Windows path.
- New icons used on the canvas must be added to `ICON_NAMES` in `index.html`.
- Things that must rotate with the snake's direction (e.g. the monkey head) are drawn with canvas calls in
  `drawFace`, not PNGs. Rotatable parts (e.g. `paw`) are PNGs drawn pointing up, rotated via `icon(name, x, y, size, rot)`.

## Adding a timed effect / power-up
1. `EFFECTS.<k>` (emo, name, ms, color, banner, icon, sub) and its position in `THEME_ORDER`.
   `fx`, `wasActive`, `fxAmt` are built from `EFFECTS` keys via `fxMap`, so they need no edits.
2. `END_QUOTES.<k>`, `GLOWS.<k>`, CSS `body.fx-<k>` page background.
3. `PICKUPS.<kind>` (icon, fx, text, aura) and add the kind to `pickSpecialKind()`'s pool.
4. Optional mood: a branch in `tileRGB` (grass tint), `drawVignettes`, `ambient` particles. Skip heavy work when `lowFx`.
5. Speed comes from `speedLvl` (one level per snack via `snack()`, capped at `MAX_LVL`), not from `eaten`;
   the moon / night effect drains it back to 0. Effect multipliers go in `interval()`.
   Eating logic lives in `consume(x, y, viaPaw)` (called for the head and for monkey paws), not inline in `step()`.
6. Any new short-lived animation array must be reset in `reset()`, ticked in `frame()`, and included in `settled()`,
   otherwise the idle loop sleeps too early or never sleeps.
7. Update the `.hint` text in the HTML.

## Playtesting headlessly
The real file has no test hooks. To test, make a copy in a scratch directory that:
- adds `<base href="file:///.../sir-noodle/">` after `<head>` so assets resolve,
- replaces the closing `})();</script>` with `window.T = (c) => eval(c);\n})();</script>` (direct eval can read and
  write closure state),
then drive it over the Chrome DevTools Protocol, the same way `tools/export.mjs` does. Useful calls:
`T("start(); ...set snake/stones/food/special...; acc = -1e9; wake(); 'ok'")`, then `T("step(); 'ok'")` and read state back as JSON.
- `wake()` is required: the render loop sleeps on the title screen, so screenshots otherwise show the title panel.
- `acc = -1e9` stops automatic stepping so screenshots are deterministic, but the movement tween then extrapolates
  (`t = acc / interval()` is hugely negative) and the snake is drawn in the wrong place. For screenshots prefer
  advancing frames by hand with `acc = 0` each frame (below).
- In a background headless tab `requestAnimationFrame` may never fire, so real-time waits do nothing (timers, fades,
  effect endings). Advance time by hand: `T("for (let i = 0; i < 60; i++) { acc = 0; frame(last + 16); acc = 0; } 'ok'")`
  runs ~1s of frames without stepping the snake.
- Collect `Runtime.exceptionThrown` events to catch errors. Screenshot only the `#c` canvas's bounding rect.
