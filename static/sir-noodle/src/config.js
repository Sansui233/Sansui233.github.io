// Constants and game data: board size, timed effects, pickups, quotes, art names.
'use strict';

const VERSION = '2.0.2';      // release version (tools/release.mjs, git tag v<VERSION>, CHANGELOG.md)
const N = 20, CELL = 30, SIZE = N * CELL;
const INK = '#5b2a4e';
const STONE_START = 50;      // score at which rocks begin to fall
const WARN_MS = 900;         // rock warning time before it becomes solid
const BOMB_MS = 10000, SUPER_MS = 12000;   // how long bombs stay on the board
const MAX_SHIELDS = 3;                     // shield charges: each one breaks one rock instead of dying
const MAX_LVL = 38;                        // speed level at which the step time hits its 75ms floor

const TEXT_FONT = '"Fredoka","Trebuchet MS",system-ui,sans-serif';

// all art is bundled PNG (drawn by tools/art.js, exported by tools/export.mjs) -> identical on every OS
const ICON_NAMES = ['pizza','donut','burger','banana','strawberry','cupcake','taco','watermelon','cheese','fries',
  'onigiri','croissant','cookie','drumstick','chili','ice','mushroom','star','bomb','dynamite','snow','sparkle','boom',
  'dizzy','sweat','fire','rock','shield','bow','tophat','cowboy','gradcap','crown','worm','trophy','pause','face_dead',
  'monkey','paw','moon','zzz','sun','coin','snackbag'];
const ICONS = {};
const iconHtml = (name) => `<img class="ico" src="assets/${name}.png" alt="">`;

const FOODS = ['pizza','donut','burger','strawberry','cupcake','taco','watermelon','cheese','fries','onigiri','croissant','cookie','drumstick'];

// timed effects
const EFFECTS = {
  spicy: { emo: 'face_hot',   name: 'SPICY',    ms: 6000, color: '#ff5a2a', banner: 'SPICY MODE', icon: 'fire',  sub: 'zoom zoom • double points' },
  chill: { emo: 'face_cold',  name: 'CHILL',    ms: 6000, color: '#2aa8f0', banner: 'CHILL MODE', icon: 'snow',  sub: 'slow-mo • take it easy' },
  dizzy: { emo: 'face_woozy', name: 'DIZZY',    ms: 5000, color: '#b45cff', banner: 'DIZZY MODE', icon: 'dizzy', sub: 'controls FLIPPED • triple points' },
  god:   { emo: 'star',       name: 'GOD MODE', ms: 7000, color: '#f5a800', banner: 'GOD MODE',   icon: 'star',  sub: 'unstoppable • smash rocks • x2' },
  monkey:{ emo: 'monkey',     name: 'MONKEY',   ms: 8000, color: '#b8661f', banner: 'MONKEY MODE', icon: 'banana', sub: 'paws grab snacks • fling rocks' },
  night: { emo: 'face_sleepy', name: 'SLEEPY', ms: 7000, color: '#5b6cff', banner: 'GOOD NIGHT', icon: 'moon', sub: 'sleepy slow-mo • wakes up at starting speed' }
};
const THEME_ORDER = ['god', 'dizzy', 'monkey', 'night', 'spicy', 'chill'];
const fxMap = (v) => Object.fromEntries(Object.keys(EFFECTS).map(k => [k, v]));
const END_QUOTES = {
  spicy: 'Phew... mouth is cooling down.', chill: 'Thawed out! Back to normal speed.',
  dizzy: 'The room stopped spinning.', god: 'God mode over. Back to mortal noodle.',
  monkey: 'Paws gone. Back to plain noodle.', night: '*yawn* Good morning! Fresh and slow.'
};
const GLOWS = {
  normal: '',
  spicy: `0 8px 0 ${INK}, 0 0 34px 10px rgba(255,90,30,.85), 0 18px 30px rgba(91,42,78,.3)`,
  chill: `0 8px 0 ${INK}, 0 0 34px 10px rgba(70,185,255,.9), 0 18px 30px rgba(91,42,78,.3)`,
  dizzy: `0 8px 0 ${INK}, 0 0 34px 10px rgba(200,80,255,.85), 0 18px 30px rgba(91,42,78,.3)`,
  god:   `0 8px 0 ${INK}, 0 0 40px 14px rgba(255,208,40,.95), 0 18px 30px rgba(91,42,78,.3)`,
  monkey:`0 8px 0 ${INK}, 0 0 34px 10px rgba(140,200,60,.85), 0 18px 30px rgba(91,42,78,.3)`,
  night: `0 8px 0 ${INK}, 0 0 34px 10px rgba(150,160,255,.75), 0 18px 30px rgba(10,10,40,.5)`
};

// things lying on the grass
const PICKUPS = {
  spicy: { icon: 'chili',    fx: 'spicy', text: 'HOT HOT HOT!!',            aura: '#ff6a3d' },
  chill: { icon: 'ice',      fx: 'chill', text: 'Brain freeze!',            aura: '#4fc3f7' },
  dizzy: { icon: 'mushroom', fx: 'dizzy', text: 'Whoa... the room is spinny', aura: '#ba68c8' },
  star:  { icon: 'star',     fx: 'god',   text: 'I AM INVINCIBLE!!',        aura: '#ffc107' },
  banana:{ icon: 'banana',   fx: 'monkey', text: 'OOH OOH AH AH!',          aura: '#ffd23d' },
  moon:  { icon: 'moon',     fx: 'night', text: '*yawn* ...nap time',       aura: '#8f9bff' },
  shield:{ icon: 'shield',   fx: null,    text: 'Shields up!',              aura: '#4aa8f0' },
  bomb:  { icon: 'bomb',     fx: null,    text: '',                         aura: '#ff3d3d' },
  super: { icon: 'dynamite', fx: null,    text: '',                         aura: '#ffb300' }
};

const EAT_QUOTES = ['Nom nom nom!','Delicious!','Is that gluten-free?','Carbs, my beloved.',"I'm not fat, I'm fluffy.",
  'Second breakfast!','Tastes like victory.','More. MORE!','Chef\'s kiss!','I regret nothing.','Calories don\'t count today.',
  '*happy wiggle*','Mmm, crunchy!','Do worms get hiccups?','Is it lunch yet?','Snack o\'clock!'];
const DEATH_QUOTES = ['You bit your own butt. Classic.','Worm tied itself in a knot.','That was... your tail. Oops.',
  'Sir Noodle has become spaghetti.','Ouch! Self-nibble detected.','Tail: 1, Worm: 0','Rule #1: do not eat yourself.',
  'Worm.exe has stopped responding.'];
const STONE_DEATH = ['You licked a rock. Not tasty.','Rocks: 1, Noodle: 0','Hard head, soft worm.',
  'That was NOT a snack.','Bonk! Immovable object detected.','Sir Noodle met a boulder. Boulder won.'];
const HATS = ['', 'bow', 'tophat', 'cowboy', 'gradcap', 'crown'];

// profile: everyone starts as Anonymous with the calm grey face; the profile dialog picks from these presets
const DEFAULT_NAME = 'Anonymous', NAME_MAX = 14;
const AVATARS = [
  { id: 'av_anon', name: 'Little Grey' }, { id: 'av_cool', name: 'Vacation Noodle' }, { id: 'av_frog', name: 'Frog' },
  { id: 'av_cat', name: 'Cat' }, { id: 'av_shiba', name: 'Shiba' }, { id: 'av_panda', name: 'Panda' },
  { id: 'av_penguin', name: 'Penguin' }, { id: 'av_chick', name: 'Chick' }, { id: 'av_octopus', name: 'Octopus' },
  { id: 'av_alien', name: 'Alien' }, { id: 'av_ghost', name: 'Ghost' }, { id: 'av_bunny', name: 'Bunny' },
  { id: 'av_robot', name: 'Robot' }
];
const FUNNY_NAMES = ['Captain Crunch', 'Noodle Doodle', 'Sir Snacksalot', 'Lady Lasagna', 'Wiggle Boss', 'Baron von Bun',
  'Chef Chomp', 'Spaghetti Yeti', 'Count Crumb', 'Duke of Donut', 'Prof. Pickle', 'Ramen Ranger', 'Taco Tornado',
  'Mochi Mayor', 'Pudding Pirate'];
