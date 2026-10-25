// Mutable game state and reset().
'use strict';

let state = 'title';           // title | play | pause | over
let snake, prev, dir, queue, grow;
let food, special, bomb, score, eaten, best = 0;   // bombs get their own slot, separate from power-ups
let fx, wasActive, clock, shake, bubble, particles, deathMsg, lastFxText = '', theme = 'normal';
let hatTier = 0;
let stones, blasts, rings, zaps, flash, banner, stonesStarted, sinceSuper, shields;
let flung, grabs;              // monkey mode: rocks flying off the board, items flying from a paw to the mouth
let pops;                      // "×N" snack milestones floating up beside the head
let speedLvl, nightFrom;       // speed rises one level per snack; a night's sleep drains it from nightFrom to 0
let run;                       // stats of the current run, for achievements and the game over dialog (achievements.js)
const fxAmt = fxMap(0);        // smooth 0..1 fade for visuals

try { best = parseInt(localStorage.getItem('sirNoodleBest') || '0', 10) || 0; } catch (e) {}
if (save.ranking.length) best = Math.max(best, save.ranking[0].score);
$best.textContent = best;

// low effects: fewer particles, no overlays/sway, 1x canvas resolution
let lowFx = false;
try {
  const saved = localStorage.getItem('sirNoodleLowFx');
  lowFx = saved !== null ? saved === '1' : matchMedia('(prefers-reduced-motion: reduce)').matches;
} catch (e) {}

function reset() {
  snake = [{x:6,y:10},{x:5,y:10},{x:4,y:10}];
  prev = snake;
  dir = {x:1,y:0}; queue = []; grow = 0;
  score = 0; eaten = 0; hatTier = 0;
  fx = fxMap(0);
  wasActive = fxMap(false);
  clock = 0; shake = 0; bubble = null; particles = []; special = null;
  stones = []; blasts = []; rings = []; zaps = []; flash = 0; banner = null; stonesStarted = false;
  bomb = null; sinceSuper = 0; shields = 0;
  flung = []; grabs = []; pops = [];
  speedLvl = 0; nightFrom = 0;
  run = newRun();
  food = null;
  food = spawnItem(true);
  updateHud();
}
