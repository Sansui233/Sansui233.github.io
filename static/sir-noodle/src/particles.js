// Particle bursts and the ambient particles of each effect.
'use strict';

function burst(px, py, n, colors, speed = 140, ic) {
  if (lowFx) n = Math.ceil(n / 3);
  for (let i = 0; i < n; i++) {
    const a = Math.random() * Math.PI * 2, s = speed * (0.3 + Math.random());
    particles.push({ x: px, y: py, vx: Math.cos(a) * s, vy: Math.sin(a) * s - 40,
      life: 600 + Math.random() * 500, max: 1100, size: 3 + Math.random() * 4,
      color: rnd(colors), icon: ic || null, rot: Math.random() * 6 });
  }
}
const ROCK_COLORS = ['#9aa0a6', '#6b7075', '#cfd4d8', '#7d8389'];

// every 5th snack a little "×N" pops out beside the head; every 10th is bigger and gold, with sparkles
function milestone() {
  const h = snake[0], px = (h.x + .5) * CELL, py = (h.y + .5) * CELL, big = eaten % 10 === 0;
  pops.push({ x: px, y: py, n: eaten, big, ms: 1200, total: 1200 });
  if (big) burst(px, py - 16, 6, ['#fff'], 120, 'sparkle');
}

// a rare achievement unlocked mid-run: confetti from the head (gold sparkles + flash for legendary)
function celebrate(tier) {
  if (state !== 'play') return;
  const h = snake[0], px = (h.x + .5) * CELL, py = (h.y + .5) * CELL;
  const gold = tier === 'legendary';
  burst(px, py, gold ? 40 : 24, gold ? ['#ffd23d', '#ffb300', '#fff6b8', '#fff'] : ['#b45cff', '#d9a8ff', '#7fd3ff', '#fff'], gold ? 260 : 200);
  burst(px, py, gold ? 8 : 4, ['#fff'], 160, 'sparkle');
  rings.push({ x: px, y: py, ms: 700, total: 700, maxR: (gold ? 4 : 2.5) * CELL });
  if (gold) { flash = Math.max(flash, 0.5); shake = Math.max(shake, 160); }
  wake();
}

// ambient particles that make each effect feel alive
function ambient(dt) {
  if (particles.length > (lowFx ? 60 : 320)) return;
  const a = fxAmt, f = dt / 16.7 * (lowFx ? 0.25 : 1);
  if (a.spicy > 0.05 && Math.random() < 0.6 * a.spicy * f)
    particles.push({ x: Math.random() * SIZE, y: SIZE + 6, vx: (Math.random() - .5) * 30, vy: -(50 + Math.random() * 80), g: 0,
      life: 1900, max: 1900, size: 2.5 + Math.random() * 3.5, color: rnd(['#ff4d1a','#ff8a2a','#ffd54a']), rot: Math.random() * 6 });
  if (a.chill > 0.05 && Math.random() < 0.3 * a.chill * f)
    particles.push({ x: Math.random() * SIZE, y: -10, vx: (Math.random() - .5) * 20, vy: 25 + Math.random() * 35, g: 0,
      life: 5000, max: 5000, size: 3 + Math.random() * 2.5, icon: 'snow', rot: Math.random() * 6 });
  if (a.dizzy > 0.05 && Math.random() < 0.4 * a.dizzy * f)
    particles.push({ x: Math.random() * SIZE, y: Math.random() * SIZE, vx: (Math.random() - .5) * 60, vy: -60, g: 120,
      life: 1300, max: 1300, size: 3 + Math.random() * 3, color: `hsl(${Math.floor(Math.random() * 360)},95%,60%)`, rot: Math.random() * 6 });
  if (a.monkey > 0.05 && Math.random() < 0.2 * a.monkey * f)
    particles.push({ x: Math.random() * SIZE, y: -10, vx: (Math.random() - .5) * 50, vy: 40 + Math.random() * 30, g: 0,
      life: 4500, max: 4500, size: 5 + Math.random() * 3, color: rnd(['#5cb83c','#8fd14f','#3f9a35']), rot: Math.random() * 6 });
  if (a.god > 0.05 && Math.random() < 0.6 * a.god * f)
    particles.push({ x: Math.random() * SIZE, y: Math.random() * SIZE, vx: 0, vy: -15, g: 0,
      life: 1100, max: 1100, size: 3.5, icon: 'sparkle', rot: 0 });
}
