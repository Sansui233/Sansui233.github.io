// The HUD header on top of the board (css/hud.css): profile button, counters, buttons, speed + effect strip.
'use strict';

// write a HUD number only when it changes; going up during play gives its counter a little bump
function setNum(el, v) {
  const s = String(v);
  if (el.textContent === s) return;
  const up = state === 'play' && v > (parseInt(el.textContent, 10) || 0);
  el.textContent = s;
  if (up && !lowFx) { const p = el.parentElement; p.classList.remove('bump'); void p.offsetWidth; p.classList.add('bump'); }
}

function updateHud() {
  setNum($score, score); setNum($best, best); setNum($snacks, eaten);
  const got = String(unlockedCount());
  if ($trophyCount.textContent !== got) { $trophyCount.textContent = got; $trophies.title = `Records: ranking and achievements, ${got}/${ACHIEVEMENTS.length} unlocked (T)`; }
  const parts = [];
  for (const k of THEME_ORDER) {
    if (isActive(k)) parts.push(`${iconHtml(EFFECTS[k].emo)} ${EFFECTS[k].name} ${Math.ceil((fx[k] - clock) / 1000)}s`);
  }
  if (shields > 0) parts.push(`${iconHtml('shield')} SHIELD${shields > 1 ? ' ×' + shields : ''}`);
  const m = multiplier();
  const t = parts.length ? parts.join(' • ') + (m > 1 ? `  (×${m})` : '') : `${iconHtml('face_relieved')} Feeling normal`;
  if (t !== lastFxText) { $fx.innerHTML = t; lastFxText = t; }
  updateSpeedMeter();
  const th = currentTheme();
  if (th !== theme) {
    theme = th;
    for (const k of THEME_ORDER) document.body.classList.toggle('fx-' + k, k === th);   // keeps low-fx / idle classes
    $board.style.boxShadow = GLOWS[th];
  }
}

// name + avatar on the profile button
function updateProfile() {
  const p = save.profile;
  $hudAvatar.src = `assets/${p.avatar}.png`;
  $hudName.textContent = p.name;
  $profileBtn.title = `${p.name}: click to change your name and avatar`;
}

let lastSpd = '';
function updateSpeedMeter() {
  const night = isActive('night') && state !== 'over';
  const pct = Math.round(speedLvl / MAX_LVL * 100);
  const x = (150 / interval()).toFixed(1);
  const key = pct + '|' + x + '|' + night;
  if (key === lastSpd) return;
  lastSpd = key;
  $spdbar.style.width = Math.max(4, pct) + '%';
  $spdbar.style.backgroundColor = night ? '#7c8cff' : `hsl(${120 - 120 * pct / 100},80%,52%)`;
  $spdlbl.innerHTML = night ? `${iconHtml('zzz')} Speed` : 'Speed';
  $spdx.textContent = x + '×';
}
