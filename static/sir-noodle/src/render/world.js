// Grass, effect moods, vignettes, rocks and pickups.
'use strict';

function tileRGB(x, y, time) {
  const odd = (x + y) % 2;
  let c = odd ? [185, 238, 157] : [200, 245, 174];
  const a = fxAmt, head = snake[0];
  if (a.chill > 0.01) {
    const sp = 9 * Math.sin(time / 450 + x * 2.1 + y * 3.3);
    const t = odd ? [168, 222, 252] : [208, 241, 255];
    c = mix(c, [t[0] + sp, t[1] + sp, t[2] + sp * .5], a.chill);
  }
  if (a.spicy > 0.01) {
    const heat = 16 * Math.sin(time / 170 - y * 0.9 + x * 0.3);
    const t = odd ? [255, 150, 92] : [255, 186, 118];
    c = mix(c, [t[0], t[1] + heat, t[2] + heat * .5], a.spicy);
  }
  if (a.dizzy > 0.01) {
    const t = hslToRgb(x * 24 + y * 24 + time * 0.14, .85, odd ? .72 : .8);
    c = mix(c, t, a.dizzy);
  }
  if (a.monkey > 0.01) {                       // jungle: deeper green with drifting leaf shade
    const sp = 14 * Math.sin(x * 1.7 + y * 2.3 + time / 900);
    const t = odd ? [128, 200, 92] : [150, 216, 108];
    c = mix(c, [t[0] + sp, t[1] + sp, t[2]], a.monkey);
  }
  if (a.night > 0.01) {                        // dark blue night with a pool of moonlight around the head
    const glow = Math.exp(-Math.hypot(wd(head.x, x), wd(head.y, y)) / 3.5) * 0.45;
    const t = odd ? [58, 80, 132] : [68, 92, 146];
    c = mix(c, mix(t, [150, 170, 215], glow), a.night);
  }
  if (a.god > 0.01) {
    const dx = wd(head.x, x), dy = wd(head.y, y);
    const ray = 24 * Math.sin(Math.atan2(dy, dx) * 7 + time / 260) * Math.exp(-Math.hypot(dx, dy) / 9);
    const t = odd ? [255, 220, 105] : [255, 238, 150];
    c = mix(c, [t[0], t[1] + ray, t[2] + ray], a.god);
  }
  return c;
}

// one pixel per tile, scaled up with nearest-neighbour: 1 drawImage instead of 400 fillRects
const grassCv = document.createElement('canvas');
grassCv.width = grassCv.height = N;
const grassCtx = grassCv.getContext('2d');
const grassImg = grassCtx.createImageData(N, N);
let grassStatic = false;
function drawGrass(time) {
  const a = fxAmt;
  const plain = Object.values(a).every(v => v <= 0.01);
  if (!plain || !grassStatic) {
    const d = grassImg.data;
    for (let y = 0; y < N; y++) for (let x = 0; x < N; x++) {
      const c = tileRGB(x, y, time), i = (y * N + x) * 4;
      d[i] = clamp(c[0]); d[i + 1] = clamp(c[1]); d[i + 2] = clamp(c[2]); d[i + 3] = 255;
    }
    grassCtx.putImageData(grassImg, 0, 0);
    grassStatic = plain;
  }
  ctx.imageSmoothingEnabled = false;
  ctx.drawImage(grassCv, 0, 0, SIZE, SIZE);
  ctx.imageSmoothingEnabled = true;
  if (a.night > 0.01) drawNightSky(time, a.night);   // cheap and it's what tells you it's night, so kept in low FX
  if (lowFx) return;                          // skip the animated overlays below
  if (a.spicy > 0.01) {                       // rising heat shimmer
    ctx.fillStyle = `rgba(255,110,30,${0.1 * a.spicy})`;
    for (let k = 0; k < 5; k++) {
      const yy = SIZE - ((time / 12 + k * 130) % (SIZE + 40));
      ctx.fillRect(0, yy, SIZE, 22);
    }
  }
  if (a.chill > 0.01) {                       // frost sparkles
    ctx.strokeStyle = '#fff'; ctx.lineWidth = 2; ctx.lineCap = 'round';
    for (let i = 0; i < 26; i++) {
      const sx = (i * 137) % SIZE, sy = (i * 211) % SIZE;
      ctx.globalAlpha = (0.5 + 0.5 * Math.sin(time / 300 + i * 1.7)) * a.chill;
      ctx.beginPath(); ctx.moveTo(sx - 5, sy); ctx.lineTo(sx + 5, sy); ctx.moveTo(sx, sy - 5); ctx.lineTo(sx, sy + 5); ctx.stroke();
    }
    ctx.globalAlpha = 1;
  }
  if (a.dizzy > 0.01) {                       // hypnotic rainbow rings
    ctx.lineWidth = 12;
    for (let k = 0; k < 4; k++) {
      const r = (time / 11 + k * 90) % 360;
      ctx.strokeStyle = `hsla(${(time / 5 + k * 90) % 360},90%,60%,${(1 - r / 360) * 0.3 * a.dizzy})`;
      circle(SIZE / 2, SIZE / 2, r); ctx.stroke();
    }
  }
  if (a.god > 0.01) {                         // golden pulses from the head
    const h = snake[0], hx = (h.x + .5) * CELL, hy = (h.y + .5) * CELL;
    ctx.lineWidth = 7;
    for (let k = 0; k < 3; k++) {
      const r = (time / 5 + k * 80) % 240;
      ctx.strokeStyle = `rgba(255,205,40,${(1 - r / 240) * 0.45 * a.god})`;
      circle(hx, hy, r); ctx.stroke();
    }
  }
}

function drawNightSky(time, al) {
  ctx.fillStyle = '#fff6c8';
  for (let i = 0; i < 30; i++) {                           // twinkling stars at fixed spots
    const sx = (i * 151 + 37) % SIZE, sy = (i * 97 + 11) % SIZE;
    ctx.globalAlpha = al * (0.35 + 0.65 * Math.abs(Math.sin(time / 700 + i * 2.3)));
    circle(sx, sy, 1.4 + (i % 3) * 0.6); ctx.fill();
  }
  ctx.globalAlpha = al;
  icon('moon', SIZE - 54, 54 + Math.sin(time / 900) * 3, 56, -0.1);
  ctx.globalAlpha = 1;
}

// vignettes are pre-rendered at low res (smooth gradients upscale cleanly) and faded with globalAlpha
const VIG_PX = 128, vigCache = new Map();
function vignette(r, g, b, al) {
  if (al < 0.01) return;
  r |= 0; g |= 0; b |= 0;
  const key = (r << 16) | (g << 8) | b;
  let c = vigCache.get(key);
  if (!c) {
    c = document.createElement('canvas'); c.width = c.height = VIG_PX;
    const v = c.getContext('2d'), m = VIG_PX / 2;
    const gr = v.createRadialGradient(m, m, VIG_PX * 0.3, m, m, VIG_PX * 0.78);
    gr.addColorStop(0, `rgba(${r},${g},${b},0)`);
    gr.addColorStop(1, `rgba(${r},${g},${b},1)`);
    v.fillStyle = gr; v.fillRect(0, 0, VIG_PX, VIG_PX);
    vigCache.set(key, c);
  }
  ctx.globalAlpha = Math.min(1, al);
  ctx.drawImage(c, 0, 0, SIZE, SIZE);
  ctx.globalAlpha = 1;
}
function drawVignettes(time) {
  if (lowFx) return;                          // full-canvas alpha blends are costly in software rendering
  const a = fxAmt;
  vignette(255, 60, 20, a.spicy * (0.38 + 0.12 * Math.sin(time / 140)));
  vignette(120, 205, 255, a.chill * 0.45);
  const dz = hslToRgb(Math.round(time / 60) * 10, .9, .6);   // hue in 10° steps -> 36 cached sprites max
  vignette(dz[0], dz[1], dz[2], a.dizzy * 0.4);
  vignette(60, 140, 30, a.monkey * 0.3);
  vignette(15, 18, 55, a.night * 0.55);
  vignette(255, 205, 40, a.god * (0.4 + 0.1 * Math.sin(time / 120)));
}

// ---------- drawing: rocks ----------
// gradients live in user space at fill time, so one object works for every (translated) rock
let STONE_GRAD = null;
function makeStoneGrad() {
  const gr = ctx.createLinearGradient(-13, -12, 13, 11);
  gr.addColorStop(0, '#cfd4d8'); gr.addColorStop(1, '#7b8187');
  return gr;
}
function drawStone(st, time) {
  const cx = (st.x + .5) * CELL, cy = (st.y + .5) * CELL;
  const age = clock - st.t0;
  if (!st.solid) {                                         // warning: cracking ground
    const p = Math.min(1, age / WARN_MS);
    ctx.save(); ctx.translate(cx + Math.sin(time / 35) * 1.6 * p, cy);
    ctx.fillStyle = `rgba(80,60,50,${0.25 + 0.25 * p})`;
    ctx.beginPath(); ctx.ellipse(0, 2, 6 + 10 * p, 4 + 7 * p, 0, 0, Math.PI * 2); ctx.fill();
    ctx.strokeStyle = `rgba(60,40,40,${0.5 + 0.4 * p})`; ctx.lineWidth = 2; ctx.lineCap = 'round';
    ctx.beginPath();
    ctx.moveTo(-12 * p, -3); ctx.lineTo(-3, 1); ctx.lineTo(-6, 8 * p);
    ctx.moveTo(3, 1); ctx.lineTo(12 * p, -5); ctx.moveTo(2, 3); ctx.lineTo(7, 10 * p);
    ctx.stroke(); ctx.restore();
    ctx.strokeStyle = `rgba(255,70,70,${0.35 + 0.35 * Math.sin(time / 80)})`; ctx.lineWidth = 3;
    rr(st.x * CELL + 3, st.y * CELL + 3, CELL - 6, CELL - 6, 8); ctx.stroke();
    return;
  }
  const since = age - WARN_MS;
  const pop = since < 260 ? 1 - since / 260 : 0;           // drop-in bounce
  const s = 1 + 0.55 * pop * pop, oy = -22 * pop * pop;
  const god = isActive('god') && !(fx.god - clock < 1500 && Math.floor(time / 110) % 2);
  ctx.save(); ctx.translate(cx, cy + oy); ctx.scale(s, s);
  ctx.fillStyle = 'rgba(40,50,30,.28)';
  ctx.beginPath(); ctx.ellipse(1, 11, 13, 4.5, 0, 0, Math.PI * 2); ctx.fill();
  rr(-13, -12, 26, 23, 8 + st.seed * 4);
  if (god) {                                               // cheap glow instead of shadowBlur
    ctx.strokeStyle = 'rgba(255,204,0,.3)'; ctx.lineWidth = 14; ctx.stroke();
    ctx.strokeStyle = 'rgba(255,204,0,.45)'; ctx.lineWidth = 8; ctx.stroke();
  }
  ctx.fillStyle = STONE_GRAD || (STONE_GRAD = makeStoneGrad());
  ctx.fill();
  ctx.lineWidth = god ? 3.2 : 2.6; ctx.strokeStyle = god ? '#ffc400' : INK; ctx.stroke();
  ctx.fillStyle = 'rgba(255,255,255,.5)';
  ctx.beginPath(); ctx.ellipse(-5, -6, 5, 3, -0.5, 0, Math.PI * 2); ctx.fill();
  ctx.strokeStyle = 'rgba(60,60,70,.7)'; ctx.lineWidth = 1.8; ctx.lineCap = 'round';
  ctx.beginPath();
  ctx.moveTo(2 + st.seed * 4, -4); ctx.lineTo(6, 1); ctx.lineTo(3, 6);
  ctx.moveTo(-8, 2); ctx.lineTo(-3 - st.seed * 3, 5);
  ctx.stroke();
  if (st.seed > 0.5) {
    ctx.fillStyle = '#7ccf6a'; circle(8, -8, 3.5); ctx.fill(); circle(4.5, -10, 2.4); ctx.fill();
  }
  ctx.restore();
}

// ---------- drawing: pickups ----------
const auraGrads = {};
let GOD_GRAD = null;
function drawAura(kind, px, py, time) {
  const col = PICKUPS[kind].aura;
  const pulse = 0.5 + 0.5 * Math.sin(time / 200);
  if (kind === 'super') {                                  // fast red/gold flashing + spinning hazard ring
    const on = Math.floor(time / 110) % 2;
    ctx.fillStyle = on ? 'rgba(255,214,60,.9)' : 'rgba(255,70,40,.7)';
    circle(px, py, 16 + pulse * 3); ctx.fill();
    ctx.save(); ctx.translate(px, py); ctx.rotate(time / 260);
    ctx.lineWidth = 4; ctx.strokeStyle = on ? '#ff3d3d' : '#ffd23d'; ctx.setLineDash([8, 6]);
    circle(0, 0, 22 + pulse * 3); ctx.stroke();
    ctx.setLineDash([]); ctx.restore();
    return;
  }
  if (kind === 'bomb') {
    const on = Math.floor(time / 170) % 2;                 // flashing warning
    ctx.fillStyle = on ? 'rgba(255,255,255,.92)' : 'rgba(255,60,60,.55)';
    circle(px, py, 15 + pulse * 3); ctx.fill();
    ctx.strokeStyle = on ? '#ff3d3d' : '#fff'; ctx.lineWidth = 3;
    circle(px, py, 18 + pulse * 4); ctx.stroke();
    return;
  }
  let g = auraGrads[kind];
  if (!g) {
    g = auraGrads[kind] = ctx.createRadialGradient(0, 0, 2, 0, 0, 28);
    g.addColorStop(0, col + 'cc'); g.addColorStop(1, col + '00');
  }
  ctx.translate(px, py); ctx.fillStyle = g; circle(0, 0, 28); ctx.fill(); ctx.translate(-px, -py);
  if (kind === 'star') {                                   // the star's ring
    ctx.save(); ctx.translate(px, py); ctx.lineCap = 'round';
    ctx.lineWidth = 3; ctx.strokeStyle = '#ffb300'; ctx.setLineDash([7, 6]);
    ctx.rotate(time / 500); circle(0, 0, 19); ctx.stroke();
    ctx.setLineDash([3, 8]); ctx.strokeStyle = '#fff'; ctx.lineWidth = 2.4;
    ctx.rotate(-time / 250); circle(0, 0, 24); ctx.stroke();
    ctx.setLineDash([]);
    ctx.fillStyle = '#fff3a0';
    for (let i = 0; i < 6; i++) {
      const a = time / 300 + i * Math.PI / 3;
      circle(Math.cos(a) * 24, Math.sin(a) * 24, 2.2); ctx.fill();
    }
    ctx.restore();
  } else {
    ctx.strokeStyle = col; ctx.lineWidth = 2.5; ctx.globalAlpha = 0.5 + 0.4 * pulse;
    circle(px, py, 17 + pulse * 3); ctx.stroke(); ctx.globalAlpha = 1;
  }
}

function drawPickups(time) {
  for (const it of [food, special, bomb]) {
    if (!it) continue;
    const sp = !!it.kind;
    if (sp && it.until - clock < 2000 && Math.floor(time / 120) % 2) continue;   // blink before vanishing
    const px = (it.x + .5) * CELL, py = (it.y + .5) * CELL;
    const h = snake[0];
    const near = Math.hypot(wd(h.x, it.x), wd(h.y, it.y)) < 3.2 && state === 'play';
    const bob = Math.sin(time / 220 + it.x) * 2.5;
    const jx = near ? Math.sin(time / 28) * 2 : 0;
    ctx.fillStyle = 'rgba(60,90,40,.22)';
    ctx.beginPath(); ctx.ellipse(px, py + 12, 11, 4, 0, 0, Math.PI * 2); ctx.fill();
    if (sp) drawAura(it.kind, px, py + bob, time);
    ctx.fillStyle = '#000';
    const ic = sp ? PICKUPS[it.kind].icon : it.icon;
    const sc = it.kind === 'star' ? 1 + 0.08 * Math.sin(time / 150) : it.kind === 'super' ? 1.15 + 0.1 * Math.sin(time / 90) : 1;
    icon(ic, px + jx, py + bob - 1, 25 * sc, Math.sin(time / 300 + it.y) * 0.1);
    if (it.kind === 'bomb') {                              // fuse spark
      ctx.fillStyle = Math.random() < 0.5 ? '#ffe066' : '#ff8a2a';
      circle(px + 8 + jx, py - 13 + bob, 2.6 + Math.random() * 1.5); ctx.fill();
    }
    if (near) icon('sweat', px + 12, py - 12 + bob, 11);
  }
}
