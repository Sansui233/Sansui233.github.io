// Everything kept between visits: ranking, achievements, lifetime totals (one localStorage key).
// Every access is guarded: storage can be blocked (private mode, file:// policies) or full,
// and the game must still play normally without it.
'use strict';

const SAVE_KEY = 'sirNoodleSave';
const RANK_SIZE = 10;                        // runs kept on the ranking board

function emptySave() {
  return { v: 1, profile: { name: DEFAULT_NAME, avatar: AVATARS[0].id }, ranking: [], unlocked: {}, progress: {},
    life: { games: 0, snacks: 0, tried: [] } };
}

function loadSave() {
  const s = emptySave();
  try {
    const d = JSON.parse(localStorage.getItem(SAVE_KEY));
    if (!d || d.v !== 1) return s;
    const num = (v) => Number.isFinite(v) ? v : 0;
    if (Array.isArray(d.ranking)) s.ranking = d.ranking.filter(r => r && num(r.score) > 0).slice(0, RANK_SIZE)
      .map(r => ({ score: num(r.score), snacks: num(r.snacks), length: num(r.length), time: num(r.time), date: num(r.date),
        name: cleanName(r.name), avatar: cleanAvatar(r.avatar) }));
    if (d.profile) s.profile = { name: cleanName(d.profile.name), avatar: cleanAvatar(d.profile.avatar) };
    if (d.unlocked && typeof d.unlocked === 'object') s.unlocked = d.unlocked;
    if (d.progress && typeof d.progress === 'object') s.progress = d.progress;
    if (d.life) {
      s.life.games = num(d.life.games); s.life.snacks = num(d.life.snacks);
      if (Array.isArray(d.life.tried)) s.life.tried = d.life.tried.filter(k => k in EFFECTS);
    }
  } catch (e) {}
  return s;
}

// names are shown in the HUD, dialogs and ranking: one line, at most NAME_MAX characters, never empty
function cleanName(v) {
  const s = typeof v === 'string' ? v.replace(/\s+/g, ' ').trim().slice(0, NAME_MAX) : '';
  return s || DEFAULT_NAME;
}
function cleanAvatar(v) { return AVATARS.some(a => a.id === v) ? v : AVATARS[0].id; }

const save = loadSave();

function persist() { try { localStorage.setItem(SAVE_KEY, JSON.stringify(save)); } catch (e) {} }

// keeps the profile: "reset records" is about scores, not who you are
function wipeSave() {
  Object.assign(save, emptySave(), { profile: save.profile });
  persist();
}

// Puts a finished run on the board. Returns its 0-based place, or -1 if it didn't make the top RANK_SIZE.
function addRanking(entry) {
  const r = save.ranking;
  r.push(entry);
  r.sort((a, b) => b.score - a.score || a.date - b.date);   // a tie keeps the older run ahead
  const i = r.indexOf(entry);
  if (r.length > RANK_SIZE) r.length = RANK_SIZE;
  return i < RANK_SIZE ? i : -1;
}
