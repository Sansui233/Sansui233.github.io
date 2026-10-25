// Game rules: spawning, effects, movement, eating, rocks and bombs.
'use strict';

function isFree(x, y) {
  if (snake.some(s => s.x === x && s.y === y)) return false;
  if (food && food.x === x && food.y === y) return false;
  if (special && special.x === x && special.y === y) return false;
  if (bomb && bomb.x === x && bomb.y === y) return false;
  if (stones.some(s => s.x === x && s.y === y)) return false;
  return true;
}

function spawnItem(isFood, kind) {
  for (let tries = 0; tries < 400; tries++) {
    const x = Math.floor(Math.random() * N), y = Math.floor(Math.random() * N);
    if (!isFree(x, y)) continue;
    return isFood ? { x, y, icon: rnd(FOODS) }
                  : { x, y, kind, until: clock + (kind === 'bomb' ? BOMB_MS : kind === 'super' ? SUPER_MS : 9000) };
  }
  return null;
}

function pickSpecialKind() {
  const pool = ['spicy', 'chill', 'dizzy', 'banana'];
  if (score >= STONE_START) {
    pool.push('star');
    if (stones.length >= 3) pool.push('banana');             // monkey paws help clear a crowded board
    if (shields < MAX_SHIELDS) pool.push('shield');
    if (stones.length >= 5) { pool.push('star'); if (shields < MAX_SHIELDS) pool.push('shield'); }
  }
  if (!isActive('night')) {                                  // the faster it gets, the more likely a moon
    if (speedLvl >= 15) pool.push('moon');
    if (speedLvl >= 25) pool.push('moon');
    if (speedLvl >= 33) pool.push('moon', 'moon');
  }
  return rnd(pool);
}

// Rolled on every snack. Tuned with a Monte Carlo sim (150 snacks, item caught ~35%/snack):
// rocks hover around 5-7 instead of piling up to the cap of 16; ~19 bombs and ~5 super bombs per 150 snacks.
function maybeSpawnBomb() {
  sinceSuper++;
  const r = stones.length;
  if (bomb || r === 0) return;
  if (Math.random() >= Math.min(0.5, 0.10 + 0.04 * r)) return;              // more rocks -> more bombs
  const pSuper = r < 6 ? 0 : Math.min(0.45,                               // super needs a real crowd of rocks
    0.02 * (r - 5)                                                        // grows with rock count
    + 0.002 * Math.max(0, snake.length - 30)                              // grows with snake length
    + 0.003 * sinceSuper);                                                // and with time since the last super
  bomb = spawnItem(false, Math.random() < pSuper ? 'super' : 'bomb');
}

function maybeSpawnStone() {
  if (score < STONE_START) return;
  const cap = Math.min(16, 4 + Math.floor(score / 120));
  if (stones.length >= cap) return;
  if (Math.random() > 0.7) return;
  const h = snake[0];
  for (let tries = 0; tries < 400; tries++) {
    const x = Math.floor(Math.random() * N), y = Math.floor(Math.random() * N);
    if (!isFree(x, y)) continue;
    if (Math.max(Math.abs(wd(h.x, x)), Math.abs(wd(h.y, y))) <= 3) continue;   // not right in front of the head
    stones.push({ x, y, t0: clock, solid: false, seed: Math.random() });
    if (!stonesStarted) { stonesStarted = true; say(tr('rocksFalling'), 2400); shake = 200; }
    return;
  }
}

function stoneAt(x, y) { return stones.find(s => s.solid && s.x === x && s.y === y); }

function isActive(k) { return fx[k] > clock; }
function multiplier() { return (isActive('spicy') ? 2 : 1) * (isActive('dizzy') ? 3 : 1) * (isActive('god') ? 2 : 1); }
function interval() {
  let iv = Math.max(75, 150 - speedLvl * 2);
  if (isActive('spicy')) iv *= 0.6;
  if (isActive('chill')) iv *= 1.7;
  if (isActive('night')) iv *= 1.8;
  return iv;
}
function snack() {                                         // sleeping noodles don't speed up
  eaten++;
  if (eaten % 5 === 0) milestone();
  if (!isActive('night')) speedLvl = Math.min(MAX_LVL, speedLvl + 1);
}
function currentTheme() { for (const k of THEME_ORDER) if (isActive(k)) return k; return 'normal'; }

function say(text, ms = 1400) { bubble = { text, ms, total: ms }; }

// ---------- game logic ----------
function start() {
  reset(); setState('play'); acc = 0; sfx.start();
}

// every state change goes through here so the screens (ui.js) follow
function setState(s) {
  state = s;
  syncScreens();
}

// cause: 'self' | 'rock' (some achievements care how you went)
function die(msg, cause = 'self') {
  prev = snake; setState('over'); shake = 450;
  deathMsg = msg || rnd(DEATH_QUOTES);
  fx = fxMap(0);
  wasActive = fxMap(false);
  sfx.die();
  const h = snake[0];
  burst((h.x + .5) * CELL, (h.y + .5) * CELL, 26, ['#ff6b9d','#ffd166','#fff','#9be15d'], 200);
  const prevBest = best;
  if (score > best) {
    best = score;
    try { localStorage.setItem('sirNoodleBest', String(best)); } catch (e) {}
  }
  updateHud();
  const report = finishRun(cause);
  report.newBest = score > prevBest;
  showGameOver(report);
}

function startEffect(k) {
  const e = EFFECTS[k];
  if (k === 'spicy') fx.chill = 0;
  if (k === 'chill') fx.spicy = 0;
  fx[k] = clock + e.ms;
  wasActive[k] = true;
  run.tried.add(k);
  if (k === 'night') run.moons++;
  if (k === 'god') run.godSmash = 0;                         // "rocks in a single God Mode" starts over
  banner = { text: e.banner, icon: e.icon, sub: e.sub, color: e.color, ms: 1700, total: 1700 };
}

// the night is over: back to the starting speed
function wakeUp() {
  speedLvl = 0;
  const h = snake[0], px = (h.x + .5) * CELL, py = (h.y + .5) * CELL;
  burst(px, py, 18, ['#ffd23d', '#ffb84d', '#fff6b8', '#fff'], 170);
  rings.push({ x: px, y: py, ms: 600, total: 600, maxR: 2.2 * CELL });
  banner = { text: tr('morning'), icon: 'sun', sub: tr('morningSub'), color: '#f59a00', ms: 1900, total: 1900 };
  sfx.morning();
  updateHud();
}

function smashStone(st) {
  stones = stones.filter(s => s !== st);
  run.rocks++;
  const px = (st.x + .5) * CELL, py = (st.y + .5) * CELL;
  burst(px, py, 14, ROCK_COLORS, 190);
  burst(px, py, 4, ['#fff'], 120, 'boom');
  score += 5 * multiplier();
  sfx.smash(); shake = Math.max(shake, 90);
  say(tr('crunch'), 700);
}

// a shield charge pops and the rock goes with it
function breakShield(st) {
  shields--; run.saves++;
  smashStone(st);
  const px = (st.x + .5) * CELL, py = (st.y + .5) * CELL;
  burst(px, py, 16, ['#4aa8f0', '#9fd8ff', '#ffffff'], 210);
  rings.push({ x: px, y: py, ms: 500, total: 500, maxR: 1.8 * CELL });
  shake = Math.max(shake, 200);
  sfx.shieldBreak();
  say(tr('shieldSaved', shields), 1500);
  updateHud();
}

function blowUpStone(st, parts) {
  const px = (st.x + .5) * CELL, py = (st.y + .5) * CELL;
  run.rocks++;
  burst(px, py, parts, ROCK_COLORS, 220);
  burst(px, py, 3, ['#fff'], 100, 'boom');
  blasts.push({ x: st.x, y: st.y, ms: 520, total: 520 });
}

// 💣 single bomb: zaps the rock nearest to where it was eaten
function detonate(cx, cy) {
  const px = (cx + .5) * CELL, py = (cy + .5) * CELL;
  let target = null, nearest = Infinity;
  for (const st of stones) {
    const d = Math.hypot(wd(cx, st.x), wd(cy, st.y));
    if (d < nearest) { nearest = d; target = st; }
  }
  rings.push({ x: px, y: py, ms: 450, total: 450, maxR: 1.6 * CELL });
  burst(px, py, 14, ['#ff4d4d','#ffa94d','#ffe066','#fff'], 200);
  shake = Math.max(shake, 220);
  sfx.boom();
  if (!target) { score += 15 * multiplier(); say(tr('bombMiss'), 1700); return; }
  stones = stones.filter(s => s !== target);
  blowUpStone(target, 12);
  // aim the zap along the shortest (wrap-around) path
  zaps.push({ x1: px, y1: py, x2: px + wd(cx, target.x) * CELL, y2: py + wd(cy, target.y) * CELL, ms: 380, total: 380 });
  score += 40 * multiplier();
  say(rnd(tr('bombHit')), 1500);
}

// 🧨 super bomb: every rock on the board is gone
function superDetonate(cx, cy) {
  const px = (cx + .5) * CELL, py = (cy + .5) * CELL, n = stones.length;
  const parts = n > 8 ? 6 : 10;                            // keep the particle count sane on a crowded board
  for (const st of stones) {
    blowUpStone(st, parts);
    zaps.push({ x1: px, y1: py, x2: px + wd(cx, st.x) * CELL, y2: py + wd(cy, st.y) * CELL, ms: 520, total: 520 });
  }
  stones = [];
  sinceSuper = 0;
  run.superBest = Math.max(run.superBest, n);
  rings.push({ x: px, y: py, ms: 900, total: 900, maxR: SIZE * 0.75 });
  rings.push({ x: px, y: py, ms: 650, total: 650, maxR: SIZE * 0.4 });
  burst(px, py, 36, ['#ff4d4d','#ffa94d','#ffe066','#fff'], 300);
  flash = 1.3; shake = 650;
  score += (50 + 20 * n) * multiplier();
  sfx.boom(); sfx.star();
  banner = { text: tr('superBomb'), icon: 'dynamite', sub: tr('superSub', n), color: '#ff5a2a', ms: 1700, total: 1700 };
  say(tr('superSay', n), 1900);
}

function step() {
  if (queue.length) dir = queue.shift();
  const old = snake, h = old[0];
  const nh = { x: mod(h.x + dir.x), y: mod(h.y + dir.y) };
  const god = isActive('god');

  // rocks
  const rock = stoneAt(nh.x, nh.y);
  if (rock) {
    if (god) { smashStone(rock); run.godBest = Math.max(run.godBest, ++run.godSmash); }   // god mode never spends a shield
    else if (shields > 0) breakShield(rock);
    else { die(rnd(STONE_DEATH), 'rock'); return; }
  }

  // own body
  const willGrow = grow > 0;
  const body = willGrow ? old : old.slice(0, -1);
  if (!god && body.some(s => s.x === nh.x && s.y === nh.y)) { die(); return; }

  prev = old;
  snake = [nh, ...old];
  if (willGrow) grow--; else snake.pop();

  consume(nh.x, nh.y);
  if (isActive('monkey')) for (const c of pawCells()) {
    const st = stoneAt(c.x, c.y);
    if (st) fling(st, c.s); else consume(c.x, c.y, true);
  }
  checkAchievements();
}

// the two cells beside the head, s = -1 (left) / 1 (right) of the travel direction
function pawCells() {
  const h = snake[0];
  return [-1, 1].map(s => ({ x: mod(h.x - dir.y * s), y: mod(h.y + dir.x * s), s }));
}

// a paw throws a rock off the board
function fling(st, s) {
  stones = stones.filter(r => r !== st);
  run.rocks++; run.flung++;
  const px = (st.x + .5) * CELL, py = (st.y + .5) * CELL;
  const ox = -dir.y * s, oy = dir.x * s;                   // outward from the head
  flung.push({ x: px, y: py, vx: ox * 700 + dir.x * 120, vy: oy * 700 + dir.y * 120 - 260, rot: 0, ms: 900 });
  burst(px, py, 8, ROCK_COLORS, 140);
  score += 20 * multiplier();
  sfx.fling(); shake = Math.max(shake, 80);
  say(rnd(tr('fling')), 900);
  updateHud();
}

function consume(x, y, viaPaw) {
  const it = [food, bomb, special].find(o => o && o.x === x && o.y === y);
  if (viaPaw && it) {
    const px = (x + .5) * CELL, py = (y + .5) * CELL;
    grabs.push({ icon: it.kind ? PICKUPS[it.kind].icon : it.icon, x: px, y: py, ms: 260, total: 260 });
    burst(px, py, 5, ['#f3cf9c', '#9a5f2c', '#fff'], 90);
  }
  // normal snack
  if (food && x === food.x && y === food.y) {
    const px = (food.x + .5) * CELL, py = (food.y + .5) * CELL;
    score += 10 * multiplier(); snack(); grow += 1;
    burst(px, py, 14, ['#ff6b9d','#ffd166','#6ee7b7','#7dd3fc','#c4b5fd']);
    if (eaten % 5 === 0) {
      sfx.burp();
      if (hatTier < HATS.length - 1) { hatTier++; say(tr('newHat'), 1900); }
      else say(tr('burp'), 1700);
    } else {
      sfx.eat();
      if (!bubble || bubble.ms < 500) say(rnd(EAT_QUOTES));
    }
    food = null;
    food = spawnItem(true);
    maybeSpawnStone();
    maybeSpawnBomb();
    if (!special && Math.random() < (score >= STONE_START ? 0.4 : 0.25)) special = spawnItem(false, pickSpecialKind());
    updateHud();
  }
  // bombs
  else if (bomb && x === bomb.x && y === bomb.y) {
    const kind = bomb.kind;
    bomb = null;
    grow += 1; snack();
    if (kind === 'super') superDetonate(x, y); else detonate(x, y);
    updateHud();
  }
  // shield: a stored charge, not a timed effect
  else if (special && special.kind === 'shield' && x === special.x && y === special.y) {
    const px = (special.x + .5) * CELL, py = (special.y + .5) * CELL;
    special = null;
    shields = Math.min(MAX_SHIELDS, shields + 1);
    score += 30 * multiplier(); snack(); grow += 1;
    burst(px, py, 20, ['#4aa8f0', '#9fd8ff', '#ffc83d', '#fff'], 170);
    rings.push({ x: px, y: py, ms: 450, total: 450, maxR: 1.4 * CELL });
    say(shields > 1 ? tr('shieldsUp', shields) : PICKUPS.shield.text, 1600);
    sfx.shieldUp();
    updateHud();
  }
  // power-ups
  else if (special && x === special.x && y === special.y) {
    const kind = special.kind, def = PICKUPS[kind];
    const px = (special.x + .5) * CELL, py = (special.y + .5) * CELL;
    special = null;
    if (kind === 'moon') nightFrom = speedLvl;
    startEffect(def.fx);
    score += (kind === 'star' ? 50 : 30) * multiplier(); snack(); grow += 2;
    burst(px, py, 26, kind === 'star' ? ['#ffd54a','#fff','#ffb300'] : kind === 'moon' ? ['#fff6b8','#c9d0ff','#8f9bff','#fff'] : ['#ff4d4d','#ffa94d','#ffe066','#fff'], 190);
    say(def.text, 1800);
    if (kind === 'star') sfx.star(); else if (kind === 'banana') sfx.monkey(); else if (kind === 'moon') sfx.lullaby(); else sfx.special();
    shake = Math.max(shake, 150);
    updateHud();
  }
}
