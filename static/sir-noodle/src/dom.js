// Page elements the game talks to.
'use strict';

const $board = document.getElementById('board');     // header + stage; carries the effect glow
const $hud = document.getElementById('hud');
const cv = document.getElementById('c');
const ctx = cv.getContext('2d');
let dpr = 1;

const $score = document.getElementById('score');
const $best = document.getElementById('best');
const $snacks = document.getElementById('snacks');
const $fx = document.getElementById('fx');
const $spdbar = document.getElementById('spdbar');
const $spdlbl = document.getElementById('spdlbl');
const $spdx = document.getElementById('spdx');
const $mute = document.getElementById('mute');
const $lowfx = document.getElementById('lowfx');
const $lang = document.getElementById('lang');
const $trophies = document.getElementById('trophies');
const $trophyCount = document.getElementById('trophy-count');
const $profileBtn = document.getElementById('profile');
const $hudAvatar = document.getElementById('hud-avatar');
const $hudName = document.getElementById('hud-name');

// UI layer over the canvas (ui.js)
const $toasts = document.getElementById('toasts');
const $scrTitle = document.getElementById('scr-title');
const $scrPause = document.getElementById('scr-pause');
const $pauseSub = document.getElementById('pause-sub');
const $pauseWho = document.getElementById('pause-who');
const $pauseAvatar = document.getElementById('pause-avatar');
const $titlePlayer = document.getElementById('title-player');
const $scrProfile = document.getElementById('scr-profile');
const $pfName = document.getElementById('pf-name');
const $pfGrid = document.getElementById('pf-grid');
const $pfPreview = document.getElementById('pf-preview');
const $scrOver = document.getElementById('scr-over');
const $overCard = document.getElementById('over-card');
const $scrRecords = document.getElementById('scr-records');
const $recBody = document.getElementById('rec-body');
const $titleSub = document.getElementById('title-sub');
