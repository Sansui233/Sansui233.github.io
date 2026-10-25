// Main loop (sleeps when idle) and boot.
'use strict';

let last = performance.now(), acc = 0;
let sleeping = false;
// When nothing is moving (pause, or title / game over once the effects have settled) the scene is
// drawn once and the loop stops completely until input wakes it -> 0% CPU while idle.
function settled() {
  return !particles.length && !blasts.length && !rings.length && !zaps.length && !flung.length && !grabs.length && !pops.length &&
    !banner && !bubble && flash <= 0 && shake <= 0 && Object.values(fxAmt).every(v => v === 0);
}
function wake() {
  if (!sleeping) return;
  sleeping = false; last = performance.now();
  document.body.classList.remove('idle');
  requestAnimationFrame(frame);
}
applyLowFx();
applyMute();

// Window fit: small windows shrink the page around the board (hint, padding) to 75%, the board takes the room
// that frees up, and canvas text keeps a 10px floor on screen. Runs once settled after a resize, not per event.
let minTextPx = 0;                         // smallest canvas font size, in board units (the canvas is SIZE wide)
function fitWindow() {
  const root = document.documentElement.style;
  const ui = Math.max(.75, Math.min(1, innerWidth / 760, innerHeight / 860));
  root.setProperty('--ui', ui.toFixed(3));
  const hint = document.querySelector('.hint').offsetHeight;
  const gh = document.getElementById('gh-link'), ghH = getComputedStyle(gh).position === 'fixed' ? 0 : gh.offsetHeight;
  root.setProperty('--chrome', Math.ceil(hint + 12 * ui + 36 * ui + 14 + (ghH && ghH + 12 * ui)) + 'px');   // hint + gaps + padding + board shadow
  for (let i = 0; i < 2; i++) {             // the header share depends on the board width: settle it in two passes
    root.setProperty('--hud-k', ($hud.offsetHeight / $board.offsetWidth).toFixed(4));
  }
  minTextPx = 10 * SIZE / Math.max(1, cv.getBoundingClientRect().width);
  wake();                                  // redraw canvas text at the new floor
}
let fitTimer = 0;
window.addEventListener('resize', () => { clearTimeout(fitTimer); fitTimer = setTimeout(fitWindow, 150); });
reset();

function frame(now) {
  // rAF timestamps are taken at frame start, so right after wake() `now` can be earlier than `last`;
  // a negative dt would push the clock below 0 and briefly "activate" every effect
  const dt = Math.max(0, Math.min(now - last, 100)); last = now;

  // smooth effect fade for the visuals
  for (const k in fxAmt) {
    const target = (isActive(k) && state !== 'over') ? 1 : 0;
    fxAmt[k] += (target - fxAmt[k]) * Math.min(1, dt / 180);
    if (Math.abs(target - fxAmt[k]) < 0.003) fxAmt[k] = target;
  }

  if (state === 'play') {
    clock += dt; acc += dt;

    // rocks become solid after their warning
    for (const st of stones) {
      if (!st.solid && clock - st.t0 >= WARN_MS && !snake.some(s => s.x === st.x && s.y === st.y)) {
        st.solid = true; st.t0 = clock - WARN_MS;
        burst((st.x + .5) * CELL, (st.y + .5) * CELL + 8, 8, ['#c9b79c', '#a89880', '#ddd'], 90);
        sfx.thump(); shake = Math.max(shake, 110);
      }
    }

    let iv = interval();
    while (acc >= iv && state === 'play') { acc -= iv; step(); iv = interval(); }

    if (state === 'play') {
      if (special && special.until < clock) special = null;
      if (bomb && bomb.until < clock) bomb = null;
      // asleep: the speed level drains to 0 over the night, so the meter visibly empties
      if (isActive('night')) speedLvl = nightFrom * (fx.night - clock) / EFFECTS.night.ms;
      // effect just ended?
      for (const k of THEME_ORDER) {
        const a = isActive(k);
        if (wasActive[k] && !a) {
          say(END_QUOTES[k], 1800);
          if (k === 'night') wakeUp(); else sfx.end();
        }
        wasActive[k] = a;
      }
      // sleepy Zzz drifting up from the head
      if (isActive('night') && Math.random() < 0.018 * dt / 16.7) {
        const h = snake[0];
        particles.push({ x: (h.x + .5) * CELL + 10, y: (h.y + .5) * CELL - 14, vx: 10 + Math.random() * 12, vy: -38, g: 0,
          life: 1800, max: 1800, size: 8 + Math.random() * 2, icon: 'zzz', rot: -0.15, still: true });
      }
      // flames while spicy
      if (isActive('spicy') && Math.random() < (lowFx ? 0.15 : 0.6)) {
        const h = snake[0];
        particles.push({ x: (h.x + .5) * CELL, y: (h.y + .5) * CELL, vx: (Math.random() - .5) * 40, vy: -60 - Math.random() * 40,
          life: 450, max: 450, size: 4 + Math.random() * 4, color: rnd(['#ff4d4d','#ffa94d','#ffe066']), rot: 0 });
      }
      updateHud();
    }
  } else if (state === 'title' || state === 'over') {
    acc = 0;
  }

  ambient(dt);

  // real-time things
  let alive = 0;
  for (const p of particles) {
    p.x += p.vx * dt / 1000; p.y += p.vy * dt / 1000;
    p.vy += (p.g === undefined ? 260 : p.g) * dt / 1000;
    p.life -= dt; if (!p.still) p.rot += dt / 200;
    if (p.life > 0) particles[alive++] = p;
  }
  particles.length = alive;
  for (const b of blasts) b.ms -= dt;
  blasts = blasts.filter(b => b.ms > 0);
  for (const r of rings) r.ms -= dt;
  rings = rings.filter(r => r.ms > 0);
  for (const z of zaps) z.ms -= dt;
  zaps = zaps.filter(z => z.ms > 0);
  for (const f of flung) { f.x += f.vx * dt / 1000; f.y += f.vy * dt / 1000; f.vy += 600 * dt / 1000; f.rot += dt / 60; f.ms -= dt; }
  flung = flung.filter(f => f.ms > 0);
  for (const g of grabs) g.ms -= dt;
  grabs = grabs.filter(g => g.ms > 0);
  for (const p of pops) p.ms -= dt;
  pops = pops.filter(p => p.ms > 0);
  if (bubble && state !== 'pause') { bubble.ms -= dt; if (bubble.ms <= 0) bubble = null; }
  if (banner && state !== 'pause') { banner.ms -= dt; if (banner.ms <= 0) banner = null; }
  if (shake > 0) shake -= dt;
  if (flash > 0) flash -= dt / 450;

  const t = (state === 'play' || state === 'pause') ? Math.min(1, acc / interval()) : 1;
  render(now, t);
  if (state === 'pause' || (state !== 'play' && settled())) {
    sleeping = true; document.body.classList.add('idle');
    return;
  }
  requestAnimationFrame(frame);
}

// start once every PNG and the bundled font are ready, so the first frame is complete
const loadIcon = (name) => new Promise((ok) => {
  const img = new Image();
  img.onload = ok;
  img.onerror = () => { console.warn('missing art: assets/' + name + '.png'); ok(); };
  img.src = `assets/${name}.png`;
  ICONS[name] = img;
});
const fontReady = document.fonts ? document.fonts.load(`700 20px "Fredoka"`).catch(() => {}) : Promise.resolve();
Promise.all([...ICON_NAMES.map(loadIcon), fontReady]).then(() => { fitWindow(); updateProfile(); syncScreens(); requestAnimationFrame(frame); });
