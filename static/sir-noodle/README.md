# Sir Noodle's Snack Quest

Open `index.html` in a browser. Everything is local: no network access needed.

```
index.html            the game (canvas 2D)
assets/*.png          all art, 128x128 (no system emoji are used, so it looks the same on every OS)
assets/fonts/         Fredoka (SIL Open Font License, see OFL.txt)
tools/art.js          the art, drawn as code in a 100x100 box
tools/sheet.html      preview of every icon (open in a browser)
tools/export.mjs      renders tools/art.js -> assets/*.png via headless Chrome
```

## Changing the art

1. Edit or add a drawing in `tools/art.js` (`ART.<name> = g => { ... }`).
2. Run `node tools/export.mjs` (set `CHROME=<path>` if Chrome/Edge is not in the default Windows location).
3. New icons used on the canvas must also be listed in `ICON_NAMES` in `index.html`.
