// Renders tools/art.js into assets/*.png using headless Chrome (no npm dependencies).
//   node tools/export.mjs            -> writes assets/<name>.png (128x128)
//   node tools/export.mjs --sheet x.png  -> also saves a screenshot of the art sheet
// Set CHROME=<path to chrome/edge> if it is not in the default Windows location.
import { spawn } from 'node:child_process';
import { mkdirSync, writeFileSync, mkdtempSync, rmSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const SIZE = 128;
const here = dirname(fileURLToPath(import.meta.url));
const outDir = resolve(here, '..', 'assets');
const sheetArg = process.argv.indexOf('--sheet');
const sheetOut = sheetArg > 0 ? resolve(process.argv[sheetArg + 1]) : null;
const CHROME = process.env.CHROME || 'C:/Program Files/Google/Chrome/Application/chrome.exe';
const PORT = 9300 + Math.floor(Math.random() * 500);

const profile = mkdtempSync(join(tmpdir(), 'noodle-art-'));
const chrome = spawn(CHROME, ['--headless=new', `--remote-debugging-port=${PORT}`, `--user-data-dir=${profile}`,
  '--window-size=1200,1400', '--hide-scrollbars', 'about:blank']);
const sleep = ms => new Promise(r => setTimeout(r, ms));

try {
  let targets;
  for (let i = 0; i < 60 && !targets; i++) {
    try { targets = await (await fetch(`http://127.0.0.1:${PORT}/json`)).json(); } catch { await sleep(200); }
  }
  if (!targets) throw new Error('Chrome did not start; set CHROME to your browser path');
  const ws = new WebSocket(targets.find(t => t.type === 'page').webSocketDebuggerUrl);
  await new Promise((ok, fail) => { ws.onopen = ok; ws.onerror = fail; });
  let seq = 0; const pending = new Map();
  ws.onmessage = e => { const m = JSON.parse(e.data); if (pending.has(m.id)) { pending.get(m.id)(m); pending.delete(m.id); } };
  const send = (method, params = {}) => new Promise(r => { const id = ++seq; pending.set(id, r); ws.send(JSON.stringify({ id, method, params })); });

  await send('Page.enable');
  await send('Page.navigate', { url: pathToFileURL(join(here, 'sheet.html')).href });
  await sleep(1200);
  const res = await send('Runtime.evaluate', { expression: `exportAll(${SIZE})`, returnByValue: true });
  if (res.result.exceptionDetails) throw new Error(res.result.exceptionDetails.exception.description);
  const icons = res.result.result.value;

  mkdirSync(outDir, { recursive: true });
  for (const [name, b64] of Object.entries(icons)) writeFileSync(join(outDir, `${name}.png`), Buffer.from(b64, 'base64'));
  console.log(`wrote ${Object.keys(icons).length} icons to ${outDir}`);

  if (sheetOut) {
    const shot = await send('Page.captureScreenshot', { format: 'png', captureBeyondViewport: true });
    writeFileSync(sheetOut, Buffer.from(shot.result.data, 'base64'));
    console.log(`sheet screenshot: ${sheetOut}`);
  }
  ws.close();
} finally {
  chrome.kill();
  await sleep(300);
  try { rmSync(profile, { recursive: true, force: true }); } catch {}
}
