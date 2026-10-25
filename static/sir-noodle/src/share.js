// Game over extras: peek at the board (the card slides away for a screenshot) and share the run.
// The share picture is drawn here on its own canvas (board snapshot + stats), so no DOM screenshot is needed.
// A page opened from file:// can't export it: the board canvas has drawn local PNGs, which taints it,
// so there the dialog leaves the picture out and shares text only.
'use strict';

// brand marks for the post-to buttons (Simple Icons, CC0), in each brand's colour
const BRANDS = {
  x:        { color: '#000000', url: (t, u) => `https://x.com/intent/tweet?text=${t}&url=${u}`,
              path: 'M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z' },
  weibo:    { color: '#e6162d', url: (t, u) => `https://service.weibo.com/share/share.php?title=${t}&url=${u}`,
              path: 'M10.098 20.323c-3.977.391-7.414-1.406-7.672-4.02-.259-2.609 2.759-5.047 6.74-5.441 3.979-.394 7.413 1.404 7.671 4.018.259 2.6-2.759 5.049-6.737 5.439l-.002.004zM9.05 17.219c-.384.616-1.208.884-1.829.602-.612-.279-.793-.991-.406-1.593.379-.595 1.176-.861 1.793-.601.622.263.82.972.442 1.592zm1.27-1.627c-.141.237-.449.353-.689.253-.236-.09-.313-.361-.177-.586.138-.227.436-.346.672-.24.239.09.315.36.18.601l.014-.028zm.176-2.719c-1.893-.493-4.033.45-4.857 2.118-.836 1.704-.026 3.591 1.886 4.21 1.983.64 4.318-.341 5.132-2.179.8-1.793-.201-3.642-2.161-4.149zm7.563-1.224c-.346-.105-.57-.18-.405-.615.375-.977.42-1.804 0-2.404-.781-1.112-2.915-1.053-5.364-.03 0 0-.766.331-.571-.271.376-1.217.315-2.224-.27-2.809-1.338-1.337-4.869.045-7.888 3.08C1.309 10.87 0 13.273 0 15.348c0 3.981 5.099 6.395 10.086 6.395 6.536 0 10.888-3.801 10.888-6.82 0-1.822-1.547-2.854-2.915-3.284v.01zm1.908-5.092c-.766-.856-1.908-1.187-2.96-.962-.436.09-.706.511-.616.932.09.42.511.691.932.602.511-.105 1.067.044 1.442.465.376.421.466.977.316 1.473-.136.406.089.856.51.992.405.119.857-.105.992-.512.33-1.021.12-2.178-.646-3.035l.03.045zm2.418-2.195c-1.576-1.757-3.905-2.419-6.054-1.968-.496.104-.812.587-.706 1.081.104.496.586.813 1.082.707 1.532-.331 3.185.15 4.296 1.383 1.112 1.246 1.429 2.943.947 4.416-.165.48.106 1.007.586 1.157.479.165.991-.104 1.157-.586.675-2.088.241-4.478-1.338-6.235l.03.045z' },
  facebook: { color: '#0866ff', url: (t, u) => `https://www.facebook.com/sharer/sharer.php?u=${u}`,
              path: 'M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 .955.042 1.468.103a8.68 8.68 0 0 1 1.141.195v3.325a8.623 8.623 0 0 0-.653-.036 26.805 26.805 0 0 0-.733-.009c-.707 0-1.259.096-1.675.309a1.686 1.686 0 0 0-.679.622c-.258.42-.374.995-.374 1.752v1.297h3.919l-.386 2.103-.287 1.564h-3.246v8.245C19.396 23.238 24 18.179 24 12.044c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.628 3.874 10.35 9.101 11.647Z' }
};
const brandSvg = (k) => `<svg class="brand" viewBox="0 0 24 24" aria-hidden="true" fill="${BRANDS[k].color}"><path d="${BRANDS[k].path}"/></svg>`;

const PLAY_URL = 'https://sansui233.github.io/static/sir-noodle/';
const playUrl = () => /^https?:$/.test(location.protocol) ? location.origin + location.pathname : PLAY_URL;
let lastRep = null;                        // the game over report on screen (showGameOver)

// ---------- peek ----------
const peeking = () => state === 'over' && $scrOver.classList.contains('peek');
function setPeek(on) {
  if (on === peeking()) return;
  $scrOver.classList.toggle('peek', on);
  if (on) document.activeElement?.blur();
  sfx.click();
}

// ---------- the share picture ----------
const loadImg = (src) => new Promise((ok) => { const i = new Image(); i.onload = () => ok(i); i.onerror = () => ok(null); i.src = src; });

// 720 x 960: title, the board as it was at the crash, avatar + name, the four stats, a line, the link
async function drawShareImage() {
  const r = lastRep.run, W = 720, H = 960;
  const [avatar, clockIco] = await Promise.all([loadImg(`assets/${save.profile.avatar}.png`), loadImg('assets/clock.png')]);
  const c = document.createElement('canvas'); c.width = W; c.height = H;
  const g = c.getContext('2d');
  const font = (size, w = 600) => `${w} ${size}px ${TEXT_FONT}`;
  // text that shrinks (down to 60%) to fit maxW; returns its width
  const txt = (s, x, y, size, color = INK, align = 'center', w = 600, maxW = W) => {
    g.font = font(size, w);
    const k = Math.max(.6, Math.min(1, maxW / g.measureText(s).width));
    if (k < 1) g.font = font(Math.round(size * k), w);
    g.textAlign = align; g.textBaseline = 'middle'; g.fillStyle = color; g.fillText(s, x, y);
    return g.measureText(s).width;
  };
  const box = (x, y, w, h, rad) => { g.beginPath(); g.roundRect(x, y, w, h, rad); };

  const bg = g.createRadialGradient(W * .2, H * .1, 0, W * .2, H * .1, H * 1.1);
  bg.addColorStop(0, '#ffe3f1'); bg.addColorStop(.45, '#ffd2b8'); bg.addColorStop(1, '#c9f0ff');
  g.fillStyle = bg; g.fillRect(0, 0, W, H);

  txt(tr('shareImgTitle'), W / 2, 58, 40, '#e0457b');

  // the board, framed like in the game
  const bx = 60, by = 100, bs = 600;
  g.save(); box(bx, by, bs, bs, 26); g.clip(); g.drawImage(cv, bx, by, bs, bs); g.restore();
  g.lineWidth = 8; g.strokeStyle = INK; box(bx, by, bs, bs, 26); g.stroke();

  // results panel
  const py = 724, ph = 190;
  g.fillStyle = INK; box(bx, py + 8, bs, ph, 26); g.fill();
  g.fillStyle = '#fffaf3'; box(bx, py, bs, ph, 26); g.fill(); g.lineWidth = 6; g.stroke();
  if (avatar) g.drawImage(avatar, bx + 22, py + 18, 52, 52);
  const nameW = txt(shownName(save.profile.name), bx + 86, py + 44, 26, INK, 'left', 600, 220);
  txt(lastRep.newBest ? tr('newHigh') : deathMsg, bx + bs - 24, py + 44, 20, lastRep.newBest ? '#e0457b' : INK, 'right', 500,
    bs - 24 - 86 - nameW - 24);
  const stats = [['coin', tr('score'), fmtNum(score)], ['snackbag', tr('snacks'), fmtNum(eaten)],
    ['worm', tr('length'), fmtNum(r.length)], [clockIco, tr('time'), fmtTime(clock)]];
  const colX = [0, 184, 320, 456], colW = [176, 128, 128, 120];       // score gets the wide column
  stats.forEach(([ico, label, v], i) => {
    const x = bx + 20 + colX[i], y = py + 128;
    const img = typeof ico === 'string' ? ICONS[ico] : ico;
    if (img) g.drawImage(img, x, y - 23, 46, 46);
    g.globalAlpha = .65; txt(label, x + 54, y - 14, 16, INK, 'left', 600, colW[i] - 58); g.globalAlpha = 1;
    txt(v, x + 54, y + 13, i ? 28 : 30, i ? INK : '#e0457b', 'left', 600, colW[i] - 58);
  });

  g.globalAlpha = .7; txt(playUrl().replace(/^https?:\/\//, ''), W / 2, H - 22, 18, INK, 'center', 500); g.globalAlpha = 1;
  return new Promise((ok) => { try { c.toBlob((b) => ok(b), 'image/png'); } catch (e) { ok(null); } });   // tainted (file://)
}

// ---------- the share dialog ----------
let shareBlob = null, shareUrlObj = '', shareGen = 0;
const shareOpen = () => !$scrShare.hidden && !$scrShare.classList.contains('out');
const shareMsg = () => $scrShare.querySelector('#share-text').value.trim();
const fullMsg = () => `${shareMsg()} ${playUrl()}`;

function openShare() {
  if (!lastRep) return;
  const gen = ++shareGen;
  shareBlob = null;
  if (shareUrlObj) URL.revokeObjectURL(shareUrlObj);
  shareUrlObj = '';
  const r = lastRep.run, d = (ms) => `style="--d:${ms}ms"`;
  const socials = lang === 'zh' ? ['weibo', 'x', 'facebook'] : ['x', 'facebook', 'weibo'];
  const picture = location.protocol !== 'file:';      // see the top of this file
  $shareCard.innerHTML = `<div class="share-head pop" ${d(60)}><h2>${tr('shareT')}</h2>
      <button class="btn close" data-act="share-close" title="${tr('closeTip')}" aria-label="${tr('close')}"></button></div>
    ${picture ? `<div class="share-shot pop" ${d(120)} id="share-shot"><span class="note">${tr('drawing')}</span></div>` : ''}
    <textarea id="share-text" class="pop" ${d(180)} rows="3" spellcheck="false" aria-label="${tr('shareT')}">${esc(tr('shareText', {
      best: lastRep.newBest, score: fmtNum(score), snacks: fmtNum(eaten), length: fmtNum(r.length), time: fmtTime(clock), death: r.death }))}</textarea>
    <div class="actions pop" ${d(240)}>
      ${picture ? `<button class="btn small" data-act="share-copy-img" data-img disabled>${tr('copyImg')}</button>
      <button class="btn small" data-act="share-save" data-img disabled>${tr('saveImg')}</button>` : ''}
      <button class="btn small" data-act="share-copy-text">${tr('copyText')}</button>
    </div>
    <div class="share-to pop" ${d(300)}>
      ${socials.map(s => `<button class="btn small" data-act="share-${s}" title="${tr('socialTip')}" aria-label="${tr('net_' + s)}">${brandSvg(s)}${
        s === 'x' ? '' : ' ' + tr('net_' + s)}</button>`).join('')}
    </div>`;
  showScreen($scrShare);
  sfx.click();
  if (!picture) return;
  drawShareImage().then((blob) => {
    if (gen !== shareGen) return;           // closed and reopened meanwhile
    if (!blob) { for (const el of $scrShare.querySelectorAll('#share-shot, [data-img]')) el.remove(); return; }   // couldn't export after all
    const shot = $scrShare.querySelector('#share-shot');
    shareBlob = blob; shareUrlObj = URL.createObjectURL(blob);
    shot.innerHTML = `<img src="${shareUrlObj}" alt="${tr('shareT')}">`;
    for (const b of $scrShare.querySelectorAll('[data-img]')) b.disabled = false;
  });
}
function closeShare() { hideScreen($scrShare); sfx.click(); }
function shareKey(e) { if (e.key === 'Escape') { e.preventDefault(); closeShare(); } }

// a button says what it did for a moment
function flashBtn(b, text) {
  if (!b._label) b._label = b.innerHTML;
  b.innerHTML = text; clearTimeout(b._t);
  b._t = setTimeout(() => { b.innerHTML = b._label; }, 1400);
  sfx.pop();
}
async function copyText(s) {
  try { await navigator.clipboard.writeText(s); return true; } catch (e) {}
  const t = document.createElement('textarea'); t.value = s; document.body.appendChild(t); t.select();
  let ok = false; try { ok = document.execCommand('copy'); } catch (e) {}
  t.remove(); return ok;
}
async function shareAction(act, b) {
  if (act === 'share-copy-img') {
    try { await navigator.clipboard.write([new ClipboardItem({ 'image/png': shareBlob })]); flashBtn(b, tr('copied')); }
    catch (e) { flashBtn(b, tr('copyFailed')); }
  } else if (act === 'share-save') {
    const a = document.createElement('a'); a.href = shareUrlObj; a.download = `sir-noodle-${score}.png`; a.click();
    flashBtn(b, tr('saved'));
  } else if (act === 'share-copy-text') {
    flashBtn(b, (await copyText(fullMsg())) ? tr('copied') : tr('copyFailed'));
  } else {
    const brand = BRANDS[act.slice('share-'.length)];
    if (brand) window.open(brand.url(encodeURIComponent(shareMsg()), encodeURIComponent(playUrl())), '_blank', 'noopener');
  }
}
