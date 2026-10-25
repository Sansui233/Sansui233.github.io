// Achievements: what each one asks for, the per-run stats they read, and unlocking them.
// m(r) reads the run stats (newRun() below); an achievement unlocks the moment m(r) >= goal.
// life: true ones add up over every game; the others must be reached within a single run
// (their progress bar shows the best run so far).
'use strict';

// Rarity tiers: the grid groups by tier, and each tier has its own medallion, tile, toast and sound
// (css/ui.css .t-<tier> / .r-<tier>). Order here is the order shown.
const TIERS = {
  common:    { name: 'Common' },
  rare:      { name: 'Rare' },
  epic:      { name: 'Epic' },
  legendary: { name: 'Legendary' }
};

const ACHIEVEMENTS = [
  // common: you get these by just playing
  { id: 'first_bite',   tier: 'common',    icon: 'pizza',     name: 'First Bite',         desc: 'Eat your first snack',                       goal: 1,      m: r => r.snacks },
  { id: 'triple_digit', tier: 'common',    icon: 'sparkle',   name: 'Triple Digits',      desc: 'Score 100 points in one run',                goal: 100,    m: r => r.score },
  { id: 'bonk',         tier: 'common',    icon: 'rock',      name: 'Rock Bottom',        desc: 'Get bonked by a rock',                       goal: 1,      m: r => r.death === 'rock' ? 1 : 0 },
  { id: 'ouroboros',    tier: 'common',    icon: 'face_dead', name: 'Ouroboros',          desc: 'Bite your own tail',                         goal: 1,      m: r => r.death === 'self' ? 1 : 0 },
  { id: 'sweet_dreams', tier: 'common',    icon: 'moon',      name: 'Sweet Dreams',       desc: 'Take a nap under the moon',                  goal: 1,      m: r => r.moons },
  { id: 'close_call',   tier: 'common',    icon: 'shield',    name: 'Close Call',         desc: 'Let a shield save you from a rock',          goal: 1,      m: r => r.saves },
  { id: 'regular',      tier: 'common',    icon: 'face_relieved', name: 'Regular Customer', desc: 'Finish 10 games',                          goal: 10,     m: r => r.lifeGames, life: true },
  // rare: a good run
  { id: 'snack_attack', tier: 'rare',      icon: 'donut',     name: 'Snack Attack',       desc: 'Eat 50 snacks in one run',                   goal: 50,     m: r => r.snacks },
  { id: 'tycoon',       tier: 'rare',      icon: 'tophat',    name: 'Snack Tycoon',       desc: 'Score 1,000 points in one run',              goal: 1000,   m: r => r.score },
  { id: 'royal',        tier: 'rare',      icon: 'crown',     name: 'Royal Noodle',       desc: 'Burp your way up to the crown',              goal: HATS.length - 1, m: r => r.hat },
  { id: 'speed_demon',  tier: 'rare',      icon: 'fire',      name: 'Speed Demon',        desc: 'Fill the speed meter to the top',            goal: MAX_LVL, m: r => r.maxSpeed },
  { id: 'demolition',   tier: 'rare',      icon: 'bomb',      name: 'Demolition Crew',    desc: 'Destroy 15 rocks in one run',                goal: 15,     m: r => r.rocks },
  { id: 'fortress',     tier: 'rare',      icon: 'shield',    name: 'Fortress',           desc: `Hold ${MAX_SHIELDS} shields at once`,        goal: MAX_SHIELDS, m: r => r.maxShields },
  { id: 'yeet',         tier: 'rare',      icon: 'monkey',    name: 'YEET!',              desc: 'Fling 5 rocks with monkey paws in one run',  goal: 5,      m: r => r.flung },
  { id: 'triple',       tier: 'rare',      icon: 'dizzy',     name: 'Triple Threat',      desc: 'Have 3 effects active at once',              goal: 3,      m: r => r.maxActive },
  { id: 'night_owl',    tier: 'rare',      icon: 'zzz',       name: 'Night Owl',          desc: 'Sleep through 3 nights in one run',          goal: 3,      m: r => r.moons },
  { id: 'taste_tester', tier: 'rare',      icon: 'mushroom',  name: 'Taste Tester',       desc: `Try all ${Object.keys(EFFECTS).length} power-ups (any games)`, goal: Object.keys(EFFECTS).length, m: r => r.lifeTried, life: true },
  // epic: a great run, or real dedication
  { id: 'bottomless',   tier: 'epic',      icon: 'burger',    name: 'Bottomless Belly',   desc: 'Eat 100 snacks in one run',                  goal: 100,    m: r => r.snacks },
  { id: 'legend',       tier: 'epic',      icon: 'trophy',    name: 'Noodle Legend',      desc: 'Score 3,000 points in one run',              goal: 3000,   m: r => r.score },
  { id: 'longcat',      tier: 'epic',      icon: 'worm',      name: 'Loooong Noodle',     desc: 'Grow to 100 segments',                       goal: 100,    m: r => r.length },
  { id: 'marathon',     tier: 'epic',      icon: 'sun',       name: 'Marathon Noodle',    desc: 'Survive 3 minutes in one run',               goal: 180,    m: r => Math.floor(r.time / 1000) },
  { id: 'iron_stomach', tier: 'epic',      icon: 'chili',     name: 'Iron Stomach',       desc: 'Survive 10 minutes in one run',              goal: 600,    m: r => Math.floor(r.time / 1000) },
  { id: 'kaboom',       tier: 'epic',      icon: 'dynamite',  name: 'KA-BOOM',            desc: 'Clear 8 rocks with one super bomb',          goal: 8,      m: r => r.superBest },
  { id: 'unstoppable',  tier: 'epic',      icon: 'star',      name: 'Unstoppable',        desc: 'Smash 5 rocks in a single God Mode',         goal: 5,      m: r => r.godBest },
  { id: 'quarry_boss',  tier: 'epic',      icon: 'boom',      name: 'Quarry Boss',        desc: 'Destroy 50 rocks in one run',                goal: 50,     m: r => r.rocks },
  { id: 'glutton',      tier: 'epic',      icon: 'cookie',    name: 'Glutton',            desc: 'Eat 1,000 snacks in total',                  goal: 1000,   m: r => r.lifeSnacks, life: true },
  { id: 'devotee',      tier: 'epic',      icon: 'cupcake',   name: 'Noodle Devotee',     desc: 'Finish 100 games',                           goal: 100,    m: r => r.lifeGames, life: true },
  // legendary: brag-worthy
  { id: 'gourmet',      tier: 'legendary', icon: 'drumstick', name: 'Five-Star Gourmet',  desc: 'Eat 200 snacks in one run',                  goal: 200,    m: r => r.snacks },
  { id: 'grandmaster',  tier: 'legendary', icon: 'gradcap',   name: 'Grandmaster Noodle', desc: 'Score 10,000 points in one run',             goal: 10000,  m: r => r.score },
  { id: 'armageddon',   tier: 'legendary', icon: 'dynamite',  name: 'Armageddon',         desc: 'Clear 12 rocks with one super bomb',         goal: 12,     m: r => r.superBest },
  { id: 'rampage',      tier: 'legendary', icon: 'star',      name: 'Divine Rampage',     desc: 'Smash 10 rocks in a single God Mode',        goal: 10,     m: r => r.godBest },
  { id: 'cocktail',     tier: 'legendary', icon: 'face_woozy', name: 'Effect Cocktail',   desc: 'Have 4 effects active at once',              goal: 4,      m: r => r.maxActive },
  { id: 'bottomless_pit', tier: 'legendary', icon: 'fries',   name: 'Bottomless Pit',     desc: 'Eat 10,000 snacks in total',                 goal: 10000,  m: r => r.lifeSnacks, life: true },
  { id: 'hall_of_fame', tier: 'legendary', icon: 'trophy',    name: 'Hall of Fame',       desc: 'Unlock every other achievement',             goal: 0,      m: () => 0, life: true }
];
// Hall of Fame counts the others; it's last, so it unlocks in the same check as the final one it needs
{
  const hof = ACHIEVEMENTS[ACHIEVEMENTS.length - 1];
  hof.goal = ACHIEVEMENTS.length - 1;
  hof.m = () => ACHIEVEMENTS.filter(a => a !== hof && save.unlocked[a.id]).length;
}
const ACH_BY_ID = Object.fromEntries(ACHIEVEMENTS.map(a => [a.id, a]));

// per-run stats; game.js bumps the event counters, checkAchievements() mirrors the rest from game state
function newRun() {
  const r = { score: 0, snacks: 0, length: 3, time: 0, hat: 0, maxSpeed: 0, maxShields: 0, maxActive: 0,
    rocks: 0, saves: 0, flung: 0, godSmash: 0, godBest: 0, superBest: 0, moons: 0,
    death: '', tried: new Set(), unlocked: [], banked: false };
  syncLife(r);
  return r;
}

// lifetime totals, counting the run in progress until finishRun() banks it
function syncLife(r) {
  r.lifeGames = save.life.games;
  r.lifeSnacks = save.life.snacks + (r.banked ? 0 : r.snacks);
  r.lifeTried = new Set([...save.life.tried, ...r.tried]).size;
}

function unlockedCount() { return ACHIEVEMENTS.filter(a => save.unlocked[a.id]).length; }

// 0..goal, for progress bars
function achProgress(a) {
  if (save.unlocked[a.id]) return a.goal;
  return Math.min(a.goal, a.life ? a.m(run) : (save.progress[a.id] || 0));
}

// quiet: unlock without a toast (the game over dialog lists them instead)
function checkAchievements(quiet) {
  const r = run;
  r.score = score; r.snacks = eaten; r.time = clock; r.hat = hatTier;
  r.length = Math.max(r.length, snake.length);
  r.maxSpeed = Math.max(r.maxSpeed, speedLvl);
  r.maxShields = Math.max(r.maxShields, shields);
  r.maxActive = Math.max(r.maxActive, THEME_ORDER.filter(isActive).length);
  syncLife(r);
  let changed = false;
  for (const a of ACHIEVEMENTS) {
    const v = a.m(r);
    if (!a.life && v > (save.progress[a.id] || 0)) save.progress[a.id] = v;
    if (save.unlocked[a.id] || v < a.goal) continue;
    save.unlocked[a.id] = Date.now();
    r.unlocked.push(a.id);
    changed = true;
    if (!quiet) toast(a);
  }
  if (changed) { persist(); updateHud(); }
}

// the run is over: bank lifetime totals, final unlocks, ranking. Returns what the game over dialog shows.
function finishRun(cause) {
  clearToasts();                             // the dialog lists every unlock of this run, so drop queued toasts
  run.death = cause;
  save.life.games++;
  save.life.snacks += eaten;
  save.life.tried = [...new Set([...save.life.tried, ...run.tried])];
  run.banked = true;
  checkAchievements(true);
  const entry = score > 0 ? { score, snacks: eaten, length: run.length, time: Math.round(clock), date: Date.now(),
    name: save.profile.name, avatar: save.profile.avatar } : null;
  const rank = entry ? addRanking(entry) : -1;
  persist();
  return { entry, rank, run, unlocked: run.unlocked.map(id => ACH_BY_ID[id]) };
}

// the locked achievement closest to done, to dangle in front of the player
function nextGoal() {
  let bestA = null, bestP = -1;
  for (const a of ACHIEVEMENTS) {
    if (save.unlocked[a.id] || a.goal <= 1) continue;
    const p = achProgress(a) / a.goal;
    if (p > bestP) { bestP = p; bestA = a; }
  }
  return bestA;
}
