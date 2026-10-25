// Sir Noodle: body, face, hats, god aura, monkey paws.
'use strict';

function segPos(j, t, time) {
  const c = snake[j], p = prev[Math.min(j, prev.length - 1)];
  let x = p.x + wd(p.x, c.x) * t, y = p.y + wd(p.y, c.y) * t;
  const amp = (isActive('dizzy') ? 0.14 : 0.05) * (lowFx ? 0.3 : 1);   // body wave, calmer in low FX
  x += Math.sin(time / 150 + j * 0.7) * amp;
  y += Math.cos(time / 170 + j * 0.7) * amp;
  return { x: mod(x), y: mod(y) };
}

function bodyColor(j, time) {
  let h, s = 85, l = 68;
  if (isActive('god')) { h = (time * 0.35 + j * 14) % 360; s = 95; l = 62; }
  else if (isActive('dizzy')) h = (280 + j * 12 + time * 0.15) % 360;
  else if (isActive('night')) { h = 255 + (j * 4) % 40; s = 60; l = 74; }
  else if (isActive('spicy')) h = 8 + (j * 3) % 40;
  else if (isActive('chill')) h = 185 + (j * 4) % 40;
  else h = (335 - j * 7 + 720) % 360;
  return `hsl(${h},${s}%,${l}%)`;
}

function drawSnake(time, t) {
  const len = snake.length;
  const pts = [];
  const pos = [];
  for (let j = 0; j < len; j++) pos.push(segPos(j, t, time));
  const radius = (j) => j === 0 ? 15.5 : 14.5 - 5.5 * (j / Math.max(len - 1, 1));
  for (let j = len - 1; j >= 0; j--) {
    pts.push({ x: pos[j].x, y: pos[j].y, r: radius(j), j });
    if (j > 0) {
      const a = pos[j], b = pos[j - 1];
      pts.push({ x: mod(a.x + wd(a.x, b.x) / 2), y: mod(a.y + wd(a.y, b.y) / 2),
                 r: (radius(j) + radius(j - 1)) / 2, j: j - 0.5 });
    }
  }
  const godOn = isActive('god');
  const scr = [];                                          // screen-space circles incl. wrap-around copies
  for (const p of pts) wrapDraw(p.x, p.y, (x, y) => scr.push({ cx: (x + .5) * CELL, cy: (y + .5) * CELL, r: p.r, j: p.j }));
  // pass 1: outline (golden glow in god mode), batched into one path
  ctx.fillStyle = godOn ? '#b87d00' : INK;
  ctx.beginPath();
  for (const c of scr) { ctx.moveTo(c.cx + c.r + 2.6, c.cy); ctx.arc(c.cx, c.cy, c.r + 2.6, 0, Math.PI * 2); }
  ctx.fill();
  // pass 2: fill + shine
  for (const c of scr) {
    ctx.fillStyle = bodyColor(c.j, time); circle(c.cx, c.cy, c.r); ctx.fill();
    ctx.fillStyle = 'rgba(255,255,255,.28)'; circle(c.cx - c.r * .25, c.cy - c.r * .3, c.r * .42); ctx.fill();
  }
  const hp = pos[0];
  wrapDraw(hp.x, hp.y, (x, y) => drawFace((x + .5) * CELL, (y + .5) * CELL, hp, time), isActive('monkey') ? 2.2 : 1.2);   // monkey paws reach a cell further
  return hp;
}

function drawGodAura(px, py, time) {
  if (fx.god - clock < 1500 && Math.floor(time / 110) % 2) return;     // blinking = about to end
  if (!GOD_GRAD) {
    GOD_GRAD = ctx.createRadialGradient(0, 0, 6, 0, 0, 40);
    GOD_GRAD.addColorStop(0, 'rgba(255,230,90,.6)'); GOD_GRAD.addColorStop(1, 'rgba(255,200,40,0)');
  }
  ctx.save(); ctx.translate(px, py); ctx.lineCap = 'round';
  ctx.fillStyle = GOD_GRAD; circle(0, 0, 40); ctx.fill();
  ctx.lineWidth = 3; ctx.strokeStyle = '#ffc400'; ctx.setLineDash([9, 6]);
  ctx.rotate(time / 380); circle(0, 0, 27); ctx.stroke();
  ctx.rotate(-time / 190); ctx.strokeStyle = 'rgba(255,255,255,.95)'; ctx.setLineDash([3, 9]); ctx.lineWidth = 2.5;
  circle(0, 0, 32); ctx.stroke();
  ctx.setLineDash([]); ctx.restore();
}

function drawFace(px, py, hp, time) {
  const d = dir, p = { x: -d.y, y: d.x };
  const fdx = wd(hp.x, food.x), fdy = wd(hp.y, food.y);
  const fl = Math.hypot(fdx, fdy) || 1;
  const dead = state === 'over';

  if (isActive('god')) drawGodAura(px, py, time);
  else if (shields > 0 && !dead) {                         // shield bubble, one extra ring per charge
    const pulse = 0.5 + 0.5 * Math.sin(time / 260);
    ctx.fillStyle = `rgba(120,200,255,${0.16 + 0.06 * pulse})`;
    circle(px, py, 25); ctx.fill();
    ctx.lineWidth = 2.5;
    for (let i = 0; i < shields; i++) {
      ctx.strokeStyle = `rgba(74,168,240,${0.85 - i * 0.2})`;
      circle(px, py, 25 + i * 4.5); ctx.stroke();
    }
  }

  // dizzy: orbiting stars
  if (isActive('dizzy')) {
    for (let i = 0; i < 3; i++) {
      const a = time / 220 + i * 2.1;
      icon('dizzy', px + Math.cos(a) * 24, py - 18 + Math.sin(a) * 7, 13);
    }
  }
  // chill: little frost puffs
  if (!lowFx && isActive('chill') && Math.random() < 0.15) burst(px, py, 1, ['#e0f7ff', '#9fdcff'], 50);

  if (isActive('monkey') && !dead) drawMonkey(px, py, d, p, time);

  // blush
  ctx.fillStyle = 'rgba(255,90,140,.45)';
  for (const s of [-1, 1]) { circle(px - d.x * 3 + p.x * s * 11, py - d.y * 3 + p.y * s * 11, 3.2); ctx.fill(); }

  // tongue flick
  if (!dead && Math.sin(time / 450) > 0.93) {
    ctx.strokeStyle = '#ff2e63'; ctx.lineWidth = 2.5; ctx.lineCap = 'round';
    ctx.beginPath(); ctx.moveTo(px + d.x * 12, py + d.y * 12);
    ctx.lineTo(px + d.x * 21, py + d.y * 21); ctx.stroke();
  }

  // eyes
  for (const s of [-1, 1]) {
    const ex = px + d.x * 4 + p.x * s * 7.5, ey = py + d.y * 4 + p.y * s * 7.5;
    ctx.fillStyle = '#fff'; ctx.strokeStyle = INK; ctx.lineWidth = 2;
    circle(ex, ey, 6.3); ctx.fill(); ctx.stroke();
    if (dead) {
      ctx.beginPath();
      ctx.moveTo(ex - 3, ey - 3); ctx.lineTo(ex + 3, ey + 3);
      ctx.moveTo(ex + 3, ey - 3); ctx.lineTo(ex - 3, ey + 3); ctx.stroke();
    } else {
      const wob = isActive('dizzy') ? 2.2 : 0.9;
      const lx = fdx / fl * 2.4 + Math.sin(time / 90 + s) * wob;
      const ly = fdy / fl * 2.4 + Math.cos(time / 110 + s) * wob;
      ctx.fillStyle = INK; circle(ex + lx, ey + ly, 3.1); ctx.fill();
      ctx.fillStyle = '#fff'; circle(ex + lx - 1, ey + ly - 1, 1); ctx.fill();
      if (isActive('night')) {                             // heavy eyelids, slowly drooping and lifting
        const lid = 0.15 + 0.12 * Math.sin(time / 600);
        ctx.fillStyle = bodyColor(0, time);
        ctx.beginPath(); ctx.arc(ex, ey, 6.6, Math.PI * (1 - lid), Math.PI * (2 + lid)); ctx.closePath(); ctx.fill();
        ctx.strokeStyle = INK; ctx.lineWidth = 2; ctx.stroke();
      }
    }
  }

  // mouth
  const mx = px + d.x * 11, my = py + d.y * 11;
  if (dead) {
    ctx.fillStyle = '#ff2e63';
    ctx.beginPath(); ctx.ellipse(mx, my, 3.5, 5, Math.atan2(d.y, d.x), 0, Math.PI * 2); ctx.fill();
  } else if (isActive('god')) {                                    // confident grin
    ctx.strokeStyle = INK; ctx.lineWidth = 2.5; ctx.lineCap = 'round';
    ctx.beginPath(); ctx.arc(mx - d.x * 1, my - d.y * 1, 4.5, 0, Math.PI * 2); ctx.stroke();
  } else if (state === 'play' && fl < 2.8) {
    ctx.fillStyle = INK; circle(mx, my, 5.5); ctx.fill();
    ctx.fillStyle = '#ff7aa2'; circle(mx - d.x, my - d.y, 2.6); ctx.fill();
  } else {
    ctx.fillStyle = INK; circle(mx, my, 2); ctx.fill();
  }

  // hat
  if (hatTier > 0) {
    ctx.fillStyle = '#000';
    icon(HATS[hatTier], px + 1, py - 17 + Math.sin(time / 260) * 1.2, 24, -0.2);
  }
}

// fur, ears, muzzle and two paws in the cells beside the head (the eyes and mouth are drawn on top)
function drawMonkey(px, py, d, p, time) {
  const blink = fx.monkey - clock < 1500 && Math.floor(time / 110) % 2;   // about to end
  for (const s of [-1, 1]) {
    const sw = Math.sin(time / 130 + s * 1.6) * 3;                       // paws swing like walking
    const hx = px + p.x * s * CELL + d.x * sw, hy = py + p.y * s * CELL + d.y * sw;
    if (!blink) {
      ctx.lineCap = 'round';
      ctx.strokeStyle = INK; ctx.lineWidth = 9;
      ctx.beginPath(); ctx.moveTo(px + p.x * s * 12, py + p.y * s * 12); ctx.lineTo(hx, hy); ctx.stroke();
      ctx.strokeStyle = '#9a5f2c'; ctx.lineWidth = 4.5; ctx.stroke();
      icon('paw', hx, hy, 20, Math.atan2(p.y * s, p.x * s) + Math.PI / 2);
    }
    const ex = px + p.x * s * 14 - d.x * 3, ey = py + p.y * s * 14 - d.y * 3;  // ears
    ctx.fillStyle = '#9a5f2c'; ctx.strokeStyle = INK; ctx.lineWidth = 2.4;
    circle(ex, ey, 6); ctx.fill(); ctx.stroke();
    ctx.fillStyle = '#f3cf9c'; circle(ex, ey, 3); ctx.fill();
  }
  ctx.fillStyle = '#9a5f2c'; ctx.strokeStyle = INK; ctx.lineWidth = 2.6;
  circle(px, py, 15.5); ctx.fill(); ctx.stroke();
  ctx.fillStyle = '#f3cf9c';
  for (const s of [-1, 1]) { circle(px + d.x * 4 + p.x * s * 7, py + d.y * 4 + p.y * s * 7, 8); ctx.fill(); }
  ctx.beginPath(); ctx.ellipse(px + d.x * 10, py + d.y * 10, 6, 9, Math.atan2(d.y, d.x), 0, Math.PI * 2); ctx.fill();
  ctx.fillStyle = INK;
  for (const s of [-1, 1]) { circle(px + d.x * 13 + p.x * s * 2.5, py + d.y * 13 + p.y * s * 2.5, 1.3); ctx.fill(); }
}
