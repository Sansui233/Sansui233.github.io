// Speech bubble, particles, blasts, banners and render(). Title / pause / game over are DOM screens (ui.js).
'use strict';

function drawBubble(hp) {
  if (!bubble) return;
  const alpha = Math.min(1, bubble.ms / 300);
  ctx.save(); ctx.globalAlpha = alpha;
  ctx.font = `600 15px ${TEXT_FONT}`;
  const w = ctx.measureText(bubble.text).width + 26, h = 30;
  const px = (hp.x + .5) * CELL, py = (hp.y + .5) * CELL;
  let bx = Math.max(w / 2 + 6, Math.min(SIZE - w / 2 - 6, px));
  let by = py - 50, below = false;
  if (by < h / 2 + 4) { by = py + 50; below = true; }
  ctx.lineWidth = 3; ctx.strokeStyle = INK; ctx.fillStyle = '#fff';
  rr(bx - w / 2, by - h / 2, w, h, 12); ctx.fill(); ctx.stroke();
  const ty = below ? by - h / 2 : by + h / 2, dy = below ? -9 : 9;
  ctx.beginPath(); ctx.moveTo(bx - 6, ty); ctx.lineTo(bx, ty + dy); ctx.lineTo(bx + 6, ty);
  ctx.closePath(); ctx.fill();
  ctx.beginPath(); ctx.moveTo(bx - 6, ty); ctx.lineTo(bx, ty + dy); ctx.lineTo(bx + 6, ty); ctx.stroke();
  ctx.fillStyle = '#fff'; ctx.fillRect(bx - 5, ty + (below ? -1 : -2), 10, 3);
  ctx.fillStyle = INK; ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
  ctx.fillText(bubble.text, bx, by + 1);
  ctx.restore();
}

function drawParticles() {
  for (const p of particles) {
    const a = Math.max(0, p.life / p.max);
    ctx.globalAlpha = Math.min(1, a * 1.6);
    if (p.icon) { icon(p.icon, p.x, p.y, p.size * 3, p.rot); }
    else {
      ctx.translate(p.x, p.y); ctx.rotate(p.rot);
      ctx.fillStyle = p.color; ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size * 0.6);
      ctx.rotate(-p.rot); ctx.translate(-p.x, -p.y);
    }
  }
  ctx.globalAlpha = 1;
}

function drawBlasts() {
  ctx.lineCap = 'round';
  for (const z of zaps) {                                  // bomb -> rock lightning streak
    const k = z.ms / z.total;
    ctx.strokeStyle = `rgba(255,140,40,${k * 0.9})`; ctx.lineWidth = 9 * k + 2;
    ctx.beginPath(); ctx.moveTo(z.x1, z.y1); ctx.lineTo(z.x2, z.y2); ctx.stroke();
    ctx.strokeStyle = `rgba(255,255,255,${k})`; ctx.lineWidth = 3 * k + 1;
    ctx.stroke();
  }
  for (const b of blasts) {                                // flash over each rock cell the blast reaches
    const k = b.ms / b.total;
    ctx.fillStyle = `rgba(255,${200 + 55 * (1 - k) | 0},120,${k * 0.95})`;
    rr(b.x * CELL + 1, b.y * CELL + 1, CELL - 2, CELL - 2, 8); ctx.fill();
    icon('boom', (b.x + .5) * CELL, (b.y + .5) * CELL, 14 + 22 * (1 - k));
  }
  for (const f of flung) icon('rock', f.x, f.y, 24 * (1 + (900 - f.ms) / 900), f.rot);
  if (grabs.length) {                                      // paw -> mouth
    const h = snake[0], hx = (h.x + .5) * CELL, hy = (h.y + .5) * CELL;
    for (const g of grabs) {
      const k = 1 - g.ms / g.total;
      icon(g.icon, g.x + (hx - g.x) * k, g.y + (hy - g.y) * k, 22 * (1 - 0.5 * k));
    }
  }
  for (const r of rings) {
    const k = 1 - r.ms / r.total, rad = r.maxR * (1 - Math.pow(1 - k, 3));
    ctx.lineWidth = 10 * (1 - k) + 2; ctx.strokeStyle = `rgba(255,255,255,${1 - k})`;
    circle(r.x, r.y, rad); ctx.stroke();
    ctx.lineWidth = 4; ctx.strokeStyle = `rgba(255,120,40,${(1 - k) * 0.8})`;
    circle(r.x, r.y, rad * 0.85); ctx.stroke();
  }
}

function drawBanner() {
  if (!banner) return;
  const p = 1 - banner.ms / banner.total;
  const sc = p < 0.12 ? 0.4 + 0.8 * (p / 0.12) : 1.2 - 0.2 * Math.min(1, (p - 0.12) / 0.2);
  ctx.save(); ctx.globalAlpha = banner.ms < 350 ? banner.ms / 350 : 1;
  ctx.translate(SIZE / 2, 96); ctx.scale(sc, sc);
  text(banner.text, 0, 0, 34, banner.color, '600');
  if (banner.icon) {
    const w = ctx.measureText(banner.text).width / 2 + 26;
    icon(banner.icon, -w, 0, 32, -0.15); icon(banner.icon, w, 0, 32, 0.15);
  }
  text(banner.sub, 0, 32, 16, INK, '600');
  ctx.restore();
}

// "×N" snack milestones (milestone() in particles.js): pop out beside the head, float up a little, fade
function drawPops() {
  for (const p of pops) {
    const k = 1 - p.ms / p.total;                                         // 0 -> 1
    const sc = k < .14 ? .3 + 1.05 * k / .14 : k < .28 ? 1.35 - .35 * (k - .14) / .14 : 1;   // pop, settle
    const side = p.x > SIZE - 80 ? -1 : 1;                                // stay on the board
    const size = p.big ? 26 : 18, label = '×' + p.n;
    ctx.font = `600 ${size}px ${TEXT_FONT}`;
    const w = ctx.measureText(label).width, gw = size + 3 + w;           // snack bag + gap + text
    ctx.save();
    ctx.globalAlpha = k > .72 ? (1 - k) / .28 : 1;
    ctx.translate(p.x + side * (gw / 2 + 18), Math.max(size, p.y - 8 - 28 * k));
    ctx.rotate(-.1 * side); ctx.scale(sc, sc);
    icon('snackbag', -gw / 2 + size / 2, 0, size);
    text(label, -gw / 2 + size + 3 + w / 2, 1, size, p.big ? '#f59a00' : '#e0457b', '600');
    ctx.restore();
  }
}

function render(time, t) {
  ctx.save();
  ctx.clearRect(0, 0, SIZE, SIZE);
  if (shake > 0) ctx.translate((Math.random() - .5) * 8, (Math.random() - .5) * 8);
  const sway = lowFx ? 0 : fxAmt.dizzy;                    // dizzy: the whole world wobbles
  if (sway > 0.01) {
    ctx.translate(SIZE / 2, SIZE / 2);
    ctx.rotate(Math.sin(time / 380) * 0.028 * sway);
    const sc = 1 + 0.05 * sway + 0.012 * Math.sin(time / 300) * sway;
    ctx.scale(sc, sc);
    ctx.translate(-SIZE / 2, -SIZE / 2);
  }
  drawGrass(time);
  for (const st of stones) drawStone(st, time);
  drawPickups(time);
  const hp = drawSnake(time, t);
  drawBlasts();
  drawParticles();
  drawVignettes(time);
  drawPops();
  drawBubble(hp);
  drawBanner();
  if (flash > 0.01) { ctx.fillStyle = `rgba(255,255,255,${Math.min(1, flash) * 0.9})`; ctx.fillRect(-20, -20, SIZE + 40, SIZE + 40); }
  ctx.restore();
}
