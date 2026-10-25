// Keyboard, touch and mouse input.
'use strict';

function turn(dx, dy) {
  if (state !== 'play') return;
  if (isActive('dizzy')) { dx = -dx; dy = -dy; }
  const last = queue.length ? queue[queue.length - 1] : dir;
  if (last.x === -dx && last.y === -dy) return;
  if (last.x === dx && last.y === dy) return;
  if (queue.length < 2) queue.push({ x: dx, y: dy });
}
// space / enter / tap. Game over has its own rule: Space / Enter / Replay once the dialog has landed (replay()).
function primary() {
  audio();
  if (state === 'title') start();
  else if (state === 'play') setState('pause');
  else if (state === 'pause') setState('play');
  wake();
}
function toggleMute() { muted = !muted; $mute.innerHTML = iconHtml(muted ? 'speaker_off' : 'speaker'); if (!muted) audio(); }

function applyLowFx() {
  $lowfx.innerHTML = iconHtml(lowFx ? 'feather' : 'sparkle');
  $lowfx.title = lowFx ? 'Effects: low (L to switch back to high)' : 'Effects: high (L to switch to low for slower devices)';
  document.body.classList.toggle('low-fx', lowFx);
  dpr = lowFx ? 1 : Math.min(window.devicePixelRatio || 1, 2);
  cv.width = cv.height = SIZE * dpr;                       // resizing also resets the context state
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  spriteCache.clear();                                     // sprite buckets are per dpr
  grassStatic = false;
}
function toggleLowFx() {
  lowFx = !lowFx;
  try { localStorage.setItem('sirNoodleLowFx', lowFx ? '1' : '0'); } catch (e) {}
  applyLowFx(); wake();
}

const KEYMAP = {
  ArrowUp:[0,-1], ArrowDown:[0,1], ArrowLeft:[-1,0], ArrowRight:[1,0],
  w:[0,-1], s:[0,1], a:[-1,0], d:[1,0], W:[0,-1], S:[0,1], A:[-1,0], D:[1,0]
};
window.addEventListener('keydown', (e) => {
  const k = e.key;
  if (profileOpen()) { profileKey(e); return; }               // typing a name: every key belongs to the input
  // Enter/Space are handled here only; a focused button must not also "click" on them
  if (k === ' ' || k === 'Enter') e.preventDefault();
  if (e.repeat && (k === ' ' || k === 'Enter')) return;      // a held key must not skip through the game over
  if (recordsOpen()) { recordsKey(e); return; }               // the records modal owns the keyboard while open
  if (k === 'm' || k === 'M') { toggleMute(); return; }
  if (k === 'l' || k === 'L') { toggleLowFx(); return; }
  if (k === 't' || k === 'T') { audio(); openRecords(); return; }
  if (state === 'over') {                                     // Space / Enter restart, once the dialog has landed
    if (k === ' ' || k === 'Enter') replay();
    else if (KEYMAP[k]) e.preventDefault();
    return;
  }
  if (k === ' ' || k === 'Enter') { primary(); return; }
  if (k === 'p' || k === 'P' || k === 'Escape') { if (state === 'play' || state === 'pause') primary(); return; }
  const m = KEYMAP[k];
  if (m) {
    e.preventDefault();
    if (state === 'title') { audio(); start(); }
    else if (state === 'pause') { setState('play'); }
    turn(m[0], m[1]);
    wake();
  }
});
$mute.addEventListener('click', (e) => { toggleMute(); e.currentTarget.blur(); });
$lowfx.addEventListener('click', (e) => { toggleLowFx(); e.currentTarget.blur(); });
$trophies.addEventListener('click', (e) => { audio(); openRecords(); e.currentTarget.blur(); });
$profileBtn.addEventListener('click', (e) => { audio(); openProfile(); e.currentTarget.blur(); });
window.addEventListener('blur', () => { if (state === 'play') setState('pause'); });

// touch / swipe / click on the canvas (title, pause and game over have their own screens on top)
let tx = 0, ty = 0;
cv.addEventListener('touchstart', (e) => {
  const t = e.changedTouches[0]; tx = t.clientX; ty = t.clientY; e.preventDefault();
}, { passive: false });
cv.addEventListener('touchend', (e) => {
  const t = e.changedTouches[0], dx = t.clientX - tx, dy = t.clientY - ty;
  e.preventDefault();
  if (Math.abs(dx) < 24 && Math.abs(dy) < 24) { primary(); return; }
  if (state === 'title') start();
  else if (state === 'pause') setState('play');
  if (Math.abs(dx) > Math.abs(dy)) turn(dx > 0 ? 1 : -1, 0); else turn(0, dy > 0 ? 1 : -1);
  wake();
}, { passive: false });
cv.addEventListener('mousedown', () => { if (state !== 'play') primary(); });
