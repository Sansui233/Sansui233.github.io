// Canvas drawing primitives and the icon sprite cache.
'use strict';

function rr(x, y, w, h, r) {
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.arcTo(x + w, y, x + w, y + h, r);
  ctx.arcTo(x + w, y + h, x, y + h, r);
  ctx.arcTo(x, y + h, x, y, r);
  ctx.arcTo(x, y, x + w, y, r);
  ctx.closePath();
}
function text(s, x, y, size, color, weight = '600', outline = true) {
  size = Math.max(size, minTextPx);
  ctx.font = `${weight} ${size}px ${TEXT_FONT}`;
  ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
  if (outline) { ctx.lineWidth = 5; ctx.strokeStyle = '#fff'; ctx.lineJoin = 'round'; ctx.strokeText(s, x, y); }
  ctx.fillStyle = color; ctx.fillText(s, x, y);
}
// The 128px PNGs are pre-shrunk (high quality, once) into size buckets of 4 device px, so each
// frame is a near 1:1 drawImage: crisp, and cheap even when the CPU does the rendering.
const spriteCache = new Map();
function iconSprite(name, d) {
  const img = ICONS[name], px = Math.min(128, Math.ceil(d * dpr / 4) * 4);
  if (px >= 128) return img;
  const key = name + '|' + px;
  let c = spriteCache.get(key);
  if (!c) {
    c = document.createElement('canvas'); c.width = c.height = px;
    const g = c.getContext('2d');
    g.imageSmoothingQuality = 'high';
    g.drawImage(img, 0, 0, px, px);
    spriteCache.set(key, c);
  }
  return c;
}
// size ~ the visible width of the art (the art fills ~80% of its 100x100 box)
function icon(name, x, y, size, rot = 0) {
  const d = size * 1.25, img = iconSprite(name, d);
  if (!rot) { ctx.drawImage(img, x - d / 2, y - d / 2, d, d); return; }
  ctx.translate(x, y); ctx.rotate(rot);
  ctx.drawImage(img, -d / 2, -d / 2, d, d);
  ctx.rotate(-rot); ctx.translate(-x, -y);
}
function circle(x, y, r) { ctx.beginPath(); ctx.arc(x, y, r, 0, Math.PI * 2); }
function wrapDraw(x, y, fn, m = 1.2) {     // m: how far (in cells) the drawing reaches past its centre
  fn(x, y);
  if (x < m) fn(x + N, y);
  if (x > N - m) fn(x - N, y);
  if (y < m) fn(x, y + N);
  if (y > N - m) fn(x, y - N);
}
