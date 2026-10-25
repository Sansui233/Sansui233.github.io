// UI layer over the canvas: title / pause / game over screens, the records modal and achievement toasts.
// These are DOM (real buttons, CSS animations); the canvas keeps drawing the world underneath.
// Layer order, screen flow and the game over timeline are written up in docs/ui.md.
'use strict';

const DEATH_PAUSE = 600;       // ms of watching the crash before the game over dialog drops in
const LANDED_MS = 620;         // the card's drop-in animation (css/ui.css): Replay works from here on
const ACT_AT = 160;            // the buttons pop in with the card (pop is 450ms, done just as it lands)
const STEP = 80;               // ms between the other parts popping in (they keep going after Replay works)

// ---------- achievement looks by rarity ----------
const TIER_RANK = Object.fromEntries(Object.keys(TIERS).map((k, i) => [k, i]));
// the icon in a medallion whose frame shows the tier: plain / blue ring / purple glow + twinkle / gold sunburst
const emblem = (a) => `<span class="emb t-${a.tier}">${iconHtml(a.icon)}</span>`;
const tierSfx = (tier) => tier === 'legendary' ? 'fanfare' : 'achieve';

// ---------- showing / hiding screens ----------
function showScreen(el) {
  clearTimeout(el._hide);
  if (!el.hidden && !el.classList.contains('out')) return;
  el.classList.remove('out', 'in');
  el.hidden = false;
  void el.offsetWidth;                       // restart the entry animations
  el.classList.add('in');
}
function hideScreen(el) {
  if (el.hidden || el.classList.contains('out')) return;
  el.classList.add('out');
  el._hide = setTimeout(() => { el.hidden = true; el.classList.remove('out', 'in'); }, 220);
}

// called by setState(): exactly one of title / pause / game over is up (records can sit on top of any)
function syncScreens() {
  const p = save.profile;
  if (state === 'title') {
    $titlePlayer.innerHTML = `${avatarHtml(p.avatar, 'sm')}<small>${tr('playingAs')}</small> ${esc(shownName(p.name))} <span class="edit">${tr('change')}</span>`;
    $titleSub.innerHTML = `<span class="chip">${iconHtml('crown')} ${tr('bestChip', fmtNum(best))}</span>` +
      `<span class="chip">${iconHtml('star')} ${tr('achChip', unlockedCount(), ACHIEVEMENTS.length)}</span>`;
    showScreen($scrTitle);
  } else hideScreen($scrTitle);
  if (state === 'pause') {
    $pauseAvatar.src = `assets/${p.avatar}.png`;
    $pauseWho.textContent = rnd(tr('pauseLines', shownName(p.name)));
    $pauseSub.innerHTML = statChip('coin', tr('score'), fmtNum(score)) + statChip('snackbag', tr('snacks'), fmtNum(eaten)) +
      statChip('clock', tr('time'), fmtTime(clock));
    showScreen($scrPause);
  } else hideScreen($scrPause);
  if (state !== 'over') { cancelOver(); hideScreen($scrOver); }
}

// ---------- formatting ----------
const fmtTime = (ms) => { const s = Math.floor(ms / 1000); return `${Math.floor(s / 60)}:${String(s % 60).padStart(2, '0')}`; };
const fmtDate = (ts) => new Date(ts).toLocaleDateString(tr('locale'), { month: 'short', day: 'numeric' });
const fmtNum = (v) => v.toLocaleString('en-US');
const baseSpeed = (lvl) => (150 / Math.max(75, 150 - lvl * 2)).toFixed(1) + '×';   // speed without effects
const esc = (s) => String(s).replace(/[&<>"']/g, (c) => `&#${c.charCodeAt(0)};`);   // names go into innerHTML
const avatarHtml = (id, cls = '') => `<span class="avatar ${cls}"><img src="assets/${id}.png" alt=""></span>`;
const statChip = (icon, label, v) => `<span class="stat-chip">${iconHtml(icon)}<span><small>${label}</small><br><b>${v}</b></span></span>`;
const bar = (p, goal, cls = '') => `<span class="bar ${cls}"><i style="width:${Math.round(p / goal * 100)}%"></i></span>`;

function countUp(el, to, fmt, ms = 650) {
  const t0 = performance.now();
  const tick = (now) => {
    const k = Math.min(1, (now - t0) / ms);
    el.textContent = fmt(Math.round(to * (1 - Math.pow(1 - k, 3))));
    if (k < 1) requestAnimationFrame(tick);
  };
  requestAnimationFrame(tick);
}

// ---------- game over dialog ----------
let overTimers = [], overReady = false, lastEntry = null;
function later(ms, fn) { overTimers.push(setTimeout(fn, ms)); }
function cancelOver() { overTimers.forEach(clearTimeout); overTimers = []; overReady = false; }

// Builds the dialog, then plays it as a timeline: card drops in, parts pop in one after another,
// numbers count up, the podium rises, unlocked badges pop. Replay unlocks only after the last part.
function showGameOver(rep) {
  cancelOver();
  lastEntry = rep.entry; lastRep = rep;
  $scrOver.classList.remove('peek');
  const r = rep.run, top = save.ranking.slice(0, 3);
  let t = 160;                                         // timeline in ms from the moment the card starts dropping
  const next = (dt = STEP) => (t += dt);
  const sounds = [];                                   // [ms, sfx name]
  const counts = [];                                   // [ms, element index, value, formatter]
  const d = (ms) => `style="--d:${ms}ms"`;

  // corner tools arrive with the buttons: hide the card to see the board, share the run (share.js)
  let h = `<div class="over-tools pop" ${d(ACT_AT)}>
      <button class="btn icon" data-act="peek" title="${tr('peekTip')}" aria-label="${tr('peekTip')}">${iconHtml('eye')}</button>
      <button class="btn icon" data-act="share" title="${tr('shareTip')}" aria-label="${tr('shareTip')}">${iconHtml('share')}</button>
    </div>
    <div class="over-head pop" ${d(next())}><span class="over-avatar" title="${esc(shownName(save.profile.name))}">${avatarHtml(save.profile.avatar)}<img class="stars" src="assets/dizzy.png" alt=""></span><h2>${tr('gameOver')}</h2></div>
    <p class="quote pop" ${d(next())}>${deathMsg}</p>
    <div class="stats">`;
  const stats = [[tr('score'), 'coin', score, fmtNum, 'big'], [tr('snacks'), 'snackbag', eaten, fmtNum], [tr('length'), 'worm', r.length, fmtNum], [tr('time'), 'clock', clock, fmtTime]];
  stats.forEach(([label, icon, v, fmt, cls], i) => {
    const ms = next();
    counts.push([ms, i, v, fmt]); sounds.push([ms, 'pop']);
    h += `<div class="stat pop ${cls || ''}" ${d(ms)}>${iconHtml(icon)}<span><small>${label}</small><b data-count>${fmt(0)}</b></span></div>`;
  });
  h += `</div><div class="chips pop" ${d(next())}>
    ${r.rocks ? `<span class="chip">${iconHtml('rock')} ${tr('rocksDestroyed', r.rocks)}</span>` : ''}
    <span class="chip">${iconHtml('fire')} ${tr('topSpeed', baseSpeed(r.maxSpeed))}</span>
    ${r.hat ? `<span class="chip">${iconHtml(HATS[r.hat])} ${tr('bestHat')}</span>` : ''}
    ${r.saves ? `<span class="chip">${iconHtml('shield')} ${tr('shieldSaves', r.saves)}</span>` : ''}
  </div>`;

  // ribbon: how this run did against the board
  let rib, ribCls = '';
  if (rep.newBest) { rib = `${iconHtml('trophy')} ${tr('newHigh')} ${iconHtml('trophy')}`; ribCls = 'best'; }
  else if (rep.rank >= 0 && rep.rank <= 2) rib = tr('podium', rep.rank + 1);
  else if (rep.rank > 2) rib = tr('rankTop', rep.rank + 1, RANK_SIZE);
  else if (!score) rib = tr('noPoints');
  else rib = tr('morePoints', fmtNum(save.ranking[save.ranking.length - 1].score - score + 1), RANK_SIZE);
  const ribAt = next(150);
  sounds.push([ribAt, rep.newBest ? 'fanfare' : 'pop']);
  h += `<div class="ribbon stamp ${ribCls}" ${d(ribAt)}>${rib}</div>`;

  // top 3 podium, drawn 2nd / 1st / 3rd; places rise 3rd, 2nd, 1st
  h += `<div class="label pop" ${d(next(120))}>${tr('top3')}</div><div class="podium">`;
  const riseAt = [next(200), next(110), next(110)];    // for places 3, 2, 1 -> stored by place index below
  const placeAt = [riseAt[2], riseAt[1], riseAt[0]];
  for (const i of [1, 0, 2]) {
    const e = top[i], me = e && e === rep.entry;
    sounds.push([placeAt[i], 'pop']);
    h += `<div class="place p${i + 1}${me ? ' me' : ''}">
      <div class="who pop" ${d(placeAt[i] + 200)} ${e ? `title="${esc(shownName(e.name))}, ${fmtDate(e.date)}"` : ''}>${i === 0 ? `<span class="crown">${iconHtml('crown')}</span>` : ''}
        ${e ? avatarHtml(e.avatar) : ''}<b>${e ? fmtNum(e.score) : '—'}</b><small>${e ? (me ? tr('you') : esc(shownName(e.name))) : tr('empty')}</small></div>
      <div class="step rise" ${d(placeAt[i])}><span>${i + 1}</span></div>
    </div>`;
  }
  h += `</div>`;

  // what this run unlocked (rarest first), or the next goal to chase
  if (rep.unlocked.length) {
    h += `<div class="label pop" ${d(next(160))}>${tr('unlockedRun')}</div><div class="badges">`;
    const shown = [...rep.unlocked].sort((a, b) => TIER_RANK[b.tier] - TIER_RANK[a.tier]).slice(0, 6);
    shown.forEach((a, i) => {
      const ms = next(i ? 110 : 90);
      sounds.push([ms, i ? 'pop' : tierSfx(a.tier)]);
      h += `<span class="badge pop r-${a.tier}" ${d(ms)} title="${TIERS[a.tier].name}: ${a.desc}">${emblem(a)}${a.name}</span>`;
    });
    if (rep.unlocked.length > shown.length) h += `<span class="badge more pop" ${d(next())}>${tr('more', rep.unlocked.length - shown.length)}</span>`;
    h += `</div>`;
  } else {
    const g = nextGoal();
    if (g) {
      const p = achProgress(g);
      h += `<div class="label pop" ${d(next(160))}>${tr('nextGoal')}</div>
        <div class="goal pop r-${g.tier}" ${d(next())}>${emblem(g)}<div><b>${g.name}</b><small>${g.desc}</small>
        ${bar(p, g.goal)}</div><span class="num">${fmtNum(p)}/${fmtNum(g.goal)}</span></div>`;
    }
  }

  // Records lives on the title card and the HUD (and T), so the dialog keeps a single clear action.
  // The button arrives with the card, so Replay is usable as soon as the dialog has landed
  h += `<div class="actions pop" ${d(ACT_AT)}>
      <button class="btn primary" data-act="replay" disabled>${tr('replay')} <kbd>Space</kbd></button>
    </div>`;
  $overCard.innerHTML = h;

  const nums = $overCard.querySelectorAll('[data-count]');
  const btn = $overCard.querySelector('[data-act=replay]');
  later(DEATH_PAUSE, () => { showScreen($scrOver); sfx.whoosh(); });
  for (const [ms, name] of sounds) later(DEATH_PAUSE + ms, () => sfx[name]());
  for (const [ms, i, v, fmt] of counts) later(DEATH_PAUSE + ms, () => countUp(nums[i], v, fmt));
  later(DEATH_PAUSE + LANDED_MS, () => { overReady = true; btn.disabled = false; btn.classList.add('ready'); });
  later(DEATH_PAUSE + t + 800, () => { for (const [, i, v, fmt] of counts) nums[i].textContent = fmt(v); });   // in case rAF was throttled
}

// the only way out of game over: Replay button, Space or Enter, once the dialog has landed
function replay() {
  if (state !== 'over' || !overReady) return;
  sfx.click();
  start();
  wake();
}

// ---------- records modal: ranking + achievements ----------
let recTab = 'rank', wipeArmed = false;
function recordsOpen() { return !$scrRecords.hidden && !$scrRecords.classList.contains('out'); }
function openRecords(tab) {
  if (state === 'play') setState('pause');
  if (tab) recTab = tab;
  wipeArmed = false;
  renderRecords();
  showScreen($scrRecords);
  sfx.click();
}
function closeRecords() { hideScreen($scrRecords); sfx.click(); }
function switchTab(tab) {
  if (tab === recTab) return;
  recTab = tab; wipeArmed = false;
  renderRecords(); sfx.click();
}

function recordsKey(e) {
  const k = e.key;
  if (k === 'Escape' || k === 't' || k === 'T') closeRecords();
  else if (k === 'Enter') {                  // Enter presses the focused button, otherwise closes
    const b = document.activeElement;
    if (b && b.tagName === 'BUTTON' && $scrRecords.contains(b)) b.click(); else closeRecords();
  }
  else if (k === 'ArrowLeft' || k === 'ArrowRight' || k === 'a' || k === 'd') { e.preventDefault(); switchTab(recTab === 'rank' ? 'ach' : 'rank'); }
  else if (k === 'm' || k === 'M') toggleMute();
  else if (KEYMAP[k]) e.preventDefault();
}

function renderRecords() {
  for (const b of $scrRecords.querySelectorAll('[data-tab]')) b.setAttribute('aria-selected', b.dataset.tab === recTab);
  $scrRecords.querySelector('#rec-ach-count').textContent = `${unlockedCount()}/${ACHIEVEMENTS.length}`;
  const d = (ms) => `style="--d:${ms}ms"`;
  let h = '';
  if (recTab === 'rank') {
    const L = save.life;
    h += `<div class="life pop"><span class="chip">${iconHtml('worm')} ${tr('games', L.games, fmtNum(L.games))}</span>
      <span class="chip">${iconHtml('pizza')} ${tr('snacksEaten', fmtNum(L.snacks))}</span>
      <span class="chip">${iconHtml('trophy')} ${tr('best', fmtNum(best))}</span></div>`;
    if (!save.ranking.length) {
      h += `<div class="empty pop" ${d(120)}>${iconHtml('worm')}<b>${tr('noRuns')}</b><small>${tr('noRunsSub', RANK_SIZE)}</small></div>`;
    } else {
      h += `<table class="rank"><thead><tr><th>#</th><th>${tr('player')}</th><th>${tr('score')}</th><th>${tr('snacks')}</th><th>${tr('time')}</th><th>${tr('date')}</th></tr></thead><tbody>`;
      save.ranking.forEach((e, i) => {
        h += `<tr class="slide${e === lastEntry ? ' me' : ''}" ${d(60 + i * 45)}>
          <td><span class="medal m${i + 1}">${i + 1}</span></td><td class="pl">${avatarHtml(e.avatar, 'sm')} ${esc(shownName(e.name))}</td>
          <td class="sc">${fmtNum(e.score)}${e === lastEntry ? ` <em>${tr('newTag')}</em>` : ''}</td>
          <td>${fmtNum(e.snacks)}</td><td>${fmtTime(e.time)}</td><td>${fmtDate(e.date)}</td></tr>`;
      });
      h += `</tbody></table>`;
    }
    h += `<div class="rec-foot"><button class="btn small danger" data-act="wipe">${tr('wipe')}</button></div>`;
  } else {
    // summary, then one section per tier (common -> legendary), each with its own look
    const n = unlockedCount(), byTier = (k) => ACHIEVEMENTS.filter(a => a.tier === k);
    h += `<div class="ach-sum pop"><b>${n} / ${ACHIEVEMENTS.length}</b> ${tr('unlocked')} ${bar(n, ACHIEVEMENTS.length)}
      <div class="chips">${Object.keys(TIERS).map(k => `<span class="chip tier-chip r-${k}">${TIERS[k].name}
        ${byTier(k).filter(a => save.unlocked[a.id]).length}/${byTier(k).length}</span>`).join('')}</div></div>`;
    let i = 0;
    for (const k of Object.keys(TIERS)) {
      h += `<div class="label tier-label r-${k} pop" ${d(60 + i * 22)}>${TIERS[k].name}</div><div class="ach-grid">`;
      for (const a of byTier(k)) {
        const got = save.unlocked[a.id], p = achProgress(a);
        h += `<div class="ach pop r-${a.tier} ${got ? 'got' : 'locked'}" ${d(60 + ++i * 22)}>${emblem(a)}<div>
          <b>${a.name}</b><small>${a.desc}</small>
          ${got ? `<small class="when">${tr('unlockedOn', fmtDate(got))}</small>`
                : a.goal > 1 ? `<span class="prog">${bar(p, a.goal, 'sm')}<small>${fmtNum(p)}/${fmtNum(a.goal)}</small></span>` : ''}
        </div></div>`;
      }
      h += `</div>`;
    }
  }
  $recBody.innerHTML = h;
  $recBody.scrollTop = 0;                    // fresh elements replay their .pop / .slide entry
}

function wipeRecords(btn) {
  if (!wipeArmed) { wipeArmed = true; btn.textContent = tr('wipeSure'); btn.classList.add('armed'); return; }
  wipeSave();
  best = 0;
  try { localStorage.removeItem('sirNoodleBest'); } catch (e) {}
  lastEntry = null; wipeArmed = false;
  updateHud(); renderRecords(); syncScreens();
}

// ---------- profile: name + avatar (save.profile) ----------
let pfAvatar = null;
function profileOpen() { return !$scrProfile.hidden && !$scrProfile.classList.contains('out'); }
function openProfile() {
  if (state === 'play') setState('pause');
  if (recordsOpen()) hideScreen($scrRecords);
  const p = save.profile;
  pfAvatar = p.avatar;
  $pfName.value = p.name === DEFAULT_NAME ? '' : p.name;
  $pfPreview.src = `assets/${p.avatar}.png`;
  $pfGrid.innerHTML = AVATARS.map((a, i) => `<button class="av-pick pop" role="radio" aria-checked="${a.id === pfAvatar}"
    data-av="${a.id}" title="${a.name}" style="--d:${260 + i * 25}ms"><img src="assets/${a.id}.png" alt="${a.name}"></button>`).join('');
  showScreen($scrProfile);
  sfx.click();
  if (matchMedia('(pointer: fine)').matches) setTimeout(() => $pfName.focus(), 60);   // no surprise keyboard on phones
}
function pickAvatar(id) {
  pfAvatar = id;
  for (const b of $pfGrid.children) b.setAttribute('aria-checked', b.dataset.av === id);
  $pfPreview.src = `assets/${id}.png`;
  const w = $pfPreview.parentElement;
  w.classList.remove('boing'); void w.offsetWidth; w.classList.add('boing');
  sfx.pop();
}
function randomName() {
  let n;
  do n = rnd(FUNNY_NAMES); while (n === $pfName.value);
  $pfName.value = n;
  sfx.pop();
}
function saveProfile() {
  save.profile = { name: cleanName($pfName.value), avatar: pfAvatar };
  persist();
  updateProfile();
  syncScreens();                             // the title / pause cards show the profile too
  closeProfile();
  sfx.shieldUp();
}
function closeProfile() { $pfName.blur(); hideScreen($scrProfile); }
function profileKey(e) {
  if (e.key === 'Enter') { e.preventDefault(); saveProfile(); }
  else if (e.key === 'Escape') { e.preventDefault(); closeProfile(); sfx.click(); }
}

// ---------- achievement toasts: drop down from the top of the board, one at a time ----------
const toastQ = [];
let toastBusy = false;
function toast(a) { toastQ.push(a); if (!toastBusy) nextToast(); }
// drop the queue and send the one on screen back up quickly
function clearToasts() {
  toastQ.length = 0;
  for (const el of $toasts.children) el.classList.add('leave');
}
function nextToast() {
  const a = toastQ.shift();
  if (!a) { toastBusy = false; return; }
  toastBusy = true;
  const el = document.createElement('div');
  el.className = 'toast r-' + a.tier;
  const kind = a.tier === 'common' ? tr('toast') : tr('toastTier', TIERS[a.tier].name);
  el.innerHTML = `${emblem(a)}<div><small>${kind}</small><b>${a.name}</b></div>`;
  $toasts.appendChild(el);
  sfx[tierSfx(a.tier)]();                    // sound and celebration play when its toast shows, not when queued
  if (a.tier === 'epic' || a.tier === 'legendary') celebrate(a.tier);
  let done = false;
  const end = () => { if (done) return; done = true; el.remove(); nextToast(); };
  el.addEventListener('animationend', (e) => { if (e.target === el) end(); });
  setTimeout(end, a.tier === 'legendary' ? 4000 : 3200);   // the animation is 2.8s (3.6s legendary); covers browsers that skip it
}

// ---------- clicks ----------
function onScreenClick(e) {
  const b = e.target.closest('button');
  if (b) b.blur();
  const act = b && b.dataset.act, tab = b && b.dataset.tab;
  audio();
  if (e.currentTarget === $scrOver && peeking()) return setPeek(false);   // peeking: any click brings the card back
  if (tab) return switchTab(tab);
  if (act === 'play') { start(); wake(); return; }
  if (act === 'resume') { setState('play'); wake(); return; }
  if (act === 'replay') return replay();
  if (act === 'records') return openRecords();
  if (act === 'close') return closeRecords();
  if (act === 'wipe') return wipeRecords(b);
  if (act === 'profile') return openProfile();
  if (act === 'pf-random') return randomName();
  if (act === 'pf-save') return saveProfile();
  if (act === 'pf-cancel') { closeProfile(); sfx.click(); return; }
  if (act === 'peek') return setPeek(true);
  if (act === 'share') return openShare();
  if (act === 'share-close') return closeShare();
  if (act && act.startsWith('share-')) return shareAction(act, b);
  if (b && b.dataset.av) return pickAvatar(b.dataset.av);
  if (b || e.target.closest('input, textarea')) return;
  // a click on the backdrop or card: title starts, pause resumes, records closes (backdrop only)
  if (e.currentTarget === $scrTitle) { start(); wake(); }
  else if (e.currentTarget === $scrPause) { setState('play'); wake(); }
  else if (e.currentTarget === $scrRecords && e.target === $scrRecords) closeRecords();
  else if (e.currentTarget === $scrProfile && e.target === $scrProfile) closeProfile();
  else if (e.currentTarget === $scrShare && e.target === $scrShare) closeShare();
}
for (const el of [$scrTitle, $scrPause, $scrOver, $scrRecords, $scrProfile, $scrShare]) el.addEventListener('click', onScreenClick);
