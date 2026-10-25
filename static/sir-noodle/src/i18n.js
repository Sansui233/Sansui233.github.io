// Languages: English (the source text) and Simplified Chinese.
// - Static page text: English stays in index.html; elements carry data-i18n (innerHTML), data-i18n-title,
//   data-i18n-alt, data-i18n-aria or data-i18n-ph (placeholder) = a key into UI_ZH.
// - Data tables (effects, pickups, quotes, achievements...): English stays in config.js / achievements.js,
//   the Chinese overrides below are swapped in by setLang() (English is kept aside to swap back).
// - Text built in code: tr('key', ...args) with both languages in STR.
// The choice is an option in localStorage (sirNoodleLang); until the player picks one, the browser language decides.
// Chinese glyphs come from system UI fonts (css/style.css).
'use strict';

let lang = 'en';
function pickLang() {
  let l = null;
  try { l = localStorage.getItem('sirNoodleLang'); } catch (e) {}
  if (l === 'en' || l === 'zh') return l;
  return /^zh\b/i.test(navigator.language || '') ? 'zh' : 'en';
}

const STR = {
  en: {
    langBtn: 'EN', langTitle: 'Language: English (click for 中文)',
    locale: 'en-US',
    anon: 'Anonymous',
    // HUD
    records: (got, all) => `Records: ranking and achievements, ${got}/${all} unlocked (T)`,
    profile: (name) => `${name}: click to change your name and avatar`,
    shield: 'SHIELD', normal: 'Feeling normal', speed: 'Speed',
    fxLow: 'Effects: low (L to switch back to high)', fxHigh: 'Effects: high (L to switch to low for slower devices)',
    // canvas
    rocksFalling: 'Uh-oh... rocks are falling!',
    morning: 'GOOD MORNING', morningSub: 'speed reset • back to a gentle wiggle',
    crunch: 'CRUNCH!',
    shieldSaved: (left) => left ? `Shield saved you! (${left} left)` : 'Shield saved you! (last one)',
    bombMiss: 'BOOM! ...nothing to blow up. Oops.',
    bombHit: ['Pew! One rock down.', 'Bullseye!', 'Rock? What rock?', 'Gravel delivered.'],
    superBomb: 'SUPER BOMB',
    superSub: (n) => n ? `${n} rock${n > 1 ? 's' : ''} turned to gravel` : 'nothing left to blow up',
    superSay: (n) => n ? 'KA-BOOOOM! Squeaky clean!' : 'KA-BOOM! ...for nothing?',
    fling: ['YEET!', 'Outta here!', 'Monkey see, monkey throw!', 'Catch!'],
    newHat: '*BUUURP* ...ooh, a new hat!', burp: '*BUUURP* Pardon me!',
    shieldsUp: (n) => `Shields up! (${n} charges)`,
    // title / pause
    playingAs: 'Playing as', change: 'change',
    bestChip: (v) => `Best ${v}`, achChip: (got, all) => `${got}/${all} achievements`,
    pauseLines: (n) => [`${n} is munching a snack.`, `${n} went to get more napkins.`,
      `${n} is catching their breath.`, `Hold my noodle, ${n} will be right back.`],
    score: 'Score', snacks: 'Snacks', length: 'Length', time: 'Time', player: 'Player', date: 'Date',
    // game over
    gameOver: 'GAME OVER',
    rocksDestroyed: (n) => `${n} rock${n === 1 ? '' : 's'} destroyed`,
    topSpeed: (x) => `top speed ${x}`, bestHat: 'best hat',
    shieldSaves: (n) => `${n} shield save${n > 1 ? 's' : ''}`,
    newHigh: 'NEW HIGH SCORE!', podium: (n) => `#${n} on the podium!`,
    rankTop: (n, size) => `Rank #${n} in your top ${size}`,
    noPoints: 'No points this time... snacks are tasty, promise!',
    morePoints: (n, size) => `${n} more points to make the top ${size}`,
    top3: 'Top 3', you: 'YOU!', empty: 'empty', unlockedRun: 'Unlocked this run', more: (n) => `+${n} more`,
    nextGoal: 'Next goal', replay: 'Replay',
    // records
    games: (n, v) => `${v} game${n === 1 ? '' : 's'}`, snacksEaten: (v) => `${v} snacks eaten`, best: (v) => `best ${v}`,
    noRuns: 'No runs yet.', noRunsSub: (size) => `Go eat something! Your top ${size} runs land here.`,
    newTag: 'new', wipe: 'Reset records', wipeSure: 'Really? Click again to erase everything',
    unlocked: 'unlocked', unlockedOn: (d) => `Unlocked ${d}`,
    toast: 'Achievement unlocked!', toastTier: (tier) => `${tier} achievement!`
  },
  zh: {
    langBtn: '中', langTitle: '语言：中文（点击切换到 English）',
    locale: 'zh-CN',
    anon: '匿名',
    records: (got, all) => `记录：排行榜和成就，已解锁 ${got}/${all}（T）`,
    profile: (name) => `${name}：点击修改名字和头像`,
    shield: '护盾', normal: '感觉正常', speed: '速度',
    fxLow: '特效：低（按 L 切回高）', fxHigh: '特效：高（按 L 切到低，适合较慢的设备）',
    rocksFalling: '糟糕……石头掉下来了！',
    morning: '早上好', morningSub: '速度重置 • 回到慢悠悠地扭',
    crunch: '咔嚓！',
    shieldSaved: (left) => left ? `护盾救了你！（还剩 ${left} 个）` : '护盾救了你！（最后一个）',
    bombMiss: '轰！……没东西可炸。哎呀。',
    bombHit: ['啾！干掉一块。', '正中靶心！', '石头？什么石头？', '碎石已送达。'],
    superBomb: '超级炸弹',
    superSub: (n) => n ? `${n} 块石头变成了碎石` : '已经没东西可炸了',
    superSay: (n) => n ? '轰隆隆隆！干干净净！' : '轰隆！……白炸了？',
    fling: ['扔出去！', '走你！', '猴子看，猴子扔！', '接着！'],
    newHat: '*嗝——* ……哇，新帽子！', burp: '*嗝——* 失礼了！',
    shieldsUp: (n) => `护盾启动！（${n} 层）`,
    playingAs: '当前玩家', change: '修改',
    bestChip: (v) => `最高 ${v}`, achChip: (got, all) => `成就 ${got}/${all}`,
    pauseLines: (n) => [`${n}正在嚼零食。`, `${n}去拿餐巾纸了。`, `${n}正在喘口气。`, `帮我拿着面条，${n}马上回来。`],
    score: '得分', snacks: '零食', length: '长度', time: '时间', player: '玩家', date: '日期',
    gameOver: '游戏结束',
    rocksDestroyed: (n) => `摧毁 ${n} 块石头`,
    topSpeed: (x) => `最高速度 ${x}`, bestHat: '最好的帽子',
    shieldSaves: (n) => `护盾救了 ${n} 次`,
    newHigh: '新纪录！', podium: (n) => `登上领奖台第 ${n} 名！`,
    rankTop: (n, size) => `前 ${size} 名中排第 ${n}`,
    noPoints: '这次没得分……零食很好吃的，真的！',
    morePoints: (n, size) => `再得 ${n} 分就能进前 ${size} 名`,
    top3: '前三名', you: '你！', empty: '空缺', unlockedRun: '本局解锁', more: (n) => `还有 ${n} 个`,
    nextGoal: '下一个目标', replay: '再来一局',
    games: (n, v) => `${v} 局`, snacksEaten: (v) => `吃了 ${v} 份零食`, best: (v) => `最高 ${v}`,
    noRuns: '还没有记录。', noRunsSub: (size) => `快去吃点东西！你最好的 ${size} 局会出现在这里。`,
    newTag: '新', wipe: '重置记录', wipeSure: '真的吗？再点一次清除所有记录',
    unlocked: '已解锁', unlockedOn: (d) => `${d} 解锁`,
    toast: '解锁成就！', toastTier: (tier) => `${tier}成就！`
  }
};
const tr = (k, ...a) => { const v = STR[lang][k] ?? STR.en[k]; return typeof v === 'function' ? v(...a) : v; };
// the save keeps DEFAULT_NAME for "no name yet"; show it in the current language
const shownName = (n) => n === DEFAULT_NAME ? tr('anon') : n;

// static page text in index.html (English is read from the page itself)
const UI_ZH = {
  title: '面条爵士的零食大冒险',
  player: '玩家', score: '得分', snacksEaten: '已吃零食', snacks: '零食', bestScore: '最高分', best: '最高',
  recordsAlt: '记录', mute: '静音 / 取消静音（M）', soundOn: '声音开', fxHigh: '特效高',
  speedTip: '速度：吃得越多速度条越满；月亮会把它清空',
  t1: '面条爵士的', t2: '零食大冒险', tag: '吃零食，长帽子，躲石头。',
  play: '开始 <kbd>Enter</kbd>', recordsBtn: `${iconHtml('trophy')} 记录 <kbd>T</kbd>`,
  keys: '或按任意方向键 / 轻触开始',
  pauseT: '歇一会儿！', resume: '继续 <kbd>Space</kbd>',
  gameOver: '游戏结束', records: '记录',
  tabRank: `${iconHtml('trophy')} 排行榜`, tabAch: `${iconHtml('star')} 成就 <span id="rec-ach-count"></span>`,
  close: '关闭', closeTip: '关闭（Esc）',
  profile: '资料', whoPlays: '谁在玩？', anon: '匿名', yourName: '你的名字',
  randomTip: '随机一个搞笑的名字', random: '随机名字',
  save: '保存 <kbd>Enter</kbd>', cancel: '取消 <kbd>Esc</kbd>',
  hint: `方向键 / WASD 或滑动 • 空格 = 暂停 • T = 记录和成就 • M = 静音 • L = 低特效 • 空格 / 回车 = 再来一局<br>
    50 分后 <img class="ico" src="assets/rock.png" alt="石头"> 石头开始掉落（注意红色警告！） &nbsp;•&nbsp; <img class="ico" src="assets/bomb.png" alt="炸弹"> 炸掉最近的石头 &nbsp;•&nbsp; <img class="ico" src="assets/dynamite.png" alt="超级炸弹"> 超级炸弹清除所有石头 &nbsp;•&nbsp; <img class="ico" src="assets/shield.png" alt="护盾"> 挡下一次石头（最多叠 3 层） &nbsp;•&nbsp; <img class="ico" src="assets/star.png" alt="星星"> = 无敌模式：横冲直撞 &nbsp;•&nbsp; <img class="ico" src="assets/banana.png" alt="香蕉"> = 猴子模式：猴爪扔石头、抓零食 &nbsp;•&nbsp; <img class="ico" src="assets/moon.png" alt="月亮"> = 夜晚：面条爵士打个盹，醒来回到初始速度`
};

// Chinese overrides for the data tables, keyed like the tables themselves
const AVATAR_BY_ID = Object.fromEntries(AVATARS.map(a => [a.id, a]));
const DATA_ZH = () => [
  [EFFECTS, {
    spicy: { name: '火辣', banner: '火辣模式', sub: '冲冲冲 • 双倍得分' },
    chill: { name: '冰爽', banner: '冰爽模式', sub: '慢动作 • 放轻松' },
    dizzy: { name: '晕乎', banner: '晕乎模式', sub: '方向反转 • 三倍得分' },
    god:   { name: '无敌', banner: '无敌模式', sub: '势不可挡 • 撞碎石头 • ×2' },
    monkey:{ name: '猴子', banner: '猴子模式', sub: '猴爪抓零食 • 扔石头' },
    night: { name: '困困', banner: '晚安', sub: '困倦慢动作 • 醒来回到初始速度' }
  }],
  [END_QUOTES, {
    spicy: '呼……嘴巴终于凉下来了。', chill: '解冻啦！恢复正常速度。', dizzy: '屋子不转了。',
    god: '无敌结束，变回凡人面条。', monkey: '猴爪没了，变回普通面条。', night: '*哈欠* 早上好！精神饱满，慢慢来。'
  }],
  [PICKUPS, {
    spicy: { text: '好辣好辣好辣！！' }, chill: { text: '脑袋冻住了！' }, dizzy: { text: '哇……屋子在转圈圈' },
    star: { text: '我无敌啦！！' }, banana: { text: '呜呜啊啊！' }, moon: { text: '*哈欠* ……该睡午觉了' },
    shield: { text: '护盾启动！' }
  }],
  [EAT_QUOTES, ['吧唧吧唧！', '好吃！', '这个无麸质吗？', '碳水，我的最爱。', '我不胖，我只是蓬松。', '第二顿早饭！',
    '胜利的味道。', '还要。还要！', '大厨之吻！', '我一点也不后悔。', '今天的卡路里不算数。', '*开心扭扭*',
    '嗯，脆脆的！', '虫子会打嗝吗？', '到午饭时间了吗？', '零食时间到！']],
  [DEATH_QUOTES, ['你咬到了自己的屁股。经典。', '虫子把自己打了个结。', '那是……你的尾巴。哎呀。',
    '面条爵士变成了意大利面。', '哎哟！检测到自咬行为。', '尾巴 1，虫子 0', '第一条规则：别吃自己。',
    'Worm.exe 已停止响应。']],
  [STONE_DEATH, ['你舔了一块石头。不好吃。', '石头 1，面条 0', '头很硬，虫很软。', '那可不是零食！',
    '咚！撞上了不可移动的物体。', '面条爵士遇上了大石头。石头赢了。']],
  [FUNNY_NAMES, ['脆脆船长', '面条嘟嘟', '零食爵士', '千层面夫人', '扭扭老大', '包子男爵', '大嚼主厨', '意面雪人',
    '面包屑伯爵', '甜甜圈公爵', '酸黄瓜教授', '拉面游侠', '塔可旋风', '麻薯市长', '布丁海盗']],
  [AVATAR_BY_ID, {
    av_anon: { name: '小灰' }, av_cool: { name: '度假面条' }, av_frog: { name: '青蛙' }, av_cat: { name: '猫咪' },
    av_shiba: { name: '柴犬' }, av_panda: { name: '熊猫' }, av_penguin: { name: '企鹅' }, av_chick: { name: '小鸡' },
    av_octopus: { name: '章鱼' }, av_alien: { name: '外星人' }, av_ghost: { name: '幽灵' }, av_bunny: { name: '兔兔' },
    av_robot: { name: '机器人' }
  }],
  [TIERS, { common: { name: '普通' }, rare: { name: '稀有' }, epic: { name: '史诗' }, legendary: { name: '传说' } }],
  [ACH_BY_ID, Object.fromEntries(Object.entries({
    first_bite:   ['第一口', '吃下第一份零食'],
    triple_digit: ['三位数', '单局得到 100 分'],
    bonk:         ['当头一棒', '被石头砸中'],
    ouroboros:    ['衔尾蛇', '咬到自己的尾巴'],
    sweet_dreams: ['好梦', '在月亮下睡个午觉'],
    close_call:   ['千钧一发', '让护盾替你挡下一块石头'],
    regular:      ['老顾客', '完成 10 局游戏'],
    snack_attack: ['零食突袭', '单局吃 50 份零食'],
    tycoon:       ['零食大亨', '单局得到 1,000 分'],
    royal:        ['面条皇室', '一路打嗝打到王冠'],
    speed_demon:  ['速度恶魔', '把速度条加满'],
    demolition:   ['拆迁队', '单局摧毁 15 块石头'],
    fortress:     ['铜墙铁壁', `同时拥有 ${MAX_SHIELDS} 个护盾`],
    yeet:         ['扔出去！', '单局用猴爪扔飞 5 块石头'],
    triple:       ['三重威胁', '同时激活 3 种效果'],
    night_owl:    ['夜猫子', '单局睡过 3 个夜晚'],
    taste_tester: ['试吃员', `尝遍全部 ${Object.keys(EFFECTS).length} 种道具（可跨局）`],
    bottomless:   ['无底胃', '单局吃 100 份零食'],
    legend:       ['面条传奇', '单局得到 3,000 分'],
    longcat:      ['超——长面条', '长到 100 节'],
    marathon:     ['马拉松面条', '单局存活 3 分钟'],
    iron_stomach: ['铁胃', '单局存活 10 分钟'],
    kaboom:       ['轰隆隆', '一个超级炸弹清除 8 块石头'],
    unstoppable:  ['势不可挡', '一次无敌模式撞碎 5 块石头'],
    quarry_boss:  ['采石场老板', '单局摧毁 50 块石头'],
    glutton:      ['大胃王', '累计吃 1,000 份零食'],
    devotee:      ['面条信徒', '完成 100 局游戏'],
    gourmet:      ['五星美食家', '单局吃 200 份零食'],
    grandmaster:  ['面条宗师', '单局得到 10,000 分'],
    armageddon:   ['末日审判', '一个超级炸弹清除 12 块石头'],
    rampage:      ['神之暴走', '一次无敌模式撞碎 10 块石头'],
    cocktail:     ['效果鸡尾酒', '同时激活 4 种效果'],
    bottomless_pit: ['无底洞', '累计吃 10,000 份零食'],
    hall_of_fame: ['名人堂', '解锁其他所有成就']
  }).map(([id, [name, desc]]) => [id, { name, desc }]))]
];

// swaps the zh values in (or the saved English ones back); arrays are refilled in place (they are const)
const dataEn = new Map();
function localizeTable(target, zh) {
  if (!dataEn.has(target)) dataEn.set(target, JSON.parse(JSON.stringify(target)));
  const src = lang === 'zh' ? zh : dataEn.get(target);
  if (Array.isArray(target)) { target.splice(0, target.length, ...src); return; }
  for (const k in zh) {
    if (typeof zh[k] === 'object') for (const f in zh[k]) target[k][f] = src[k][f];
    else target[k] = src[k];
  }
}

const I18N_ATTRS = [['i18n', 'innerHTML'], ['i18nTitle', 'title'], ['i18nAlt', 'alt'], ['i18nAria', 'ariaLabel'], ['i18nPh', 'placeholder']];
function localizePage() {
  document.documentElement.lang = lang === 'zh' ? 'zh-CN' : 'en';
  if (!localizePage.enTitle) localizePage.enTitle = document.title;
  document.title = lang === 'zh' ? UI_ZH.title : localizePage.enTitle;
  for (const [key, prop] of I18N_ATTRS) {
    for (const el of document.querySelectorAll(`[data-${key.replace(/[A-Z]/g, c => '-' + c.toLowerCase())}]`)) {
      const en = el._en || (el._en = {});
      if (!(prop in en)) en[prop] = el[prop];
      el[prop] = lang === 'zh' ? UI_ZH[el.dataset[key]] : en[prop];
    }
  }
}

function setLang(l) {
  lang = l;
  for (const [target, zh] of DATA_ZH()) localizeTable(target, zh);
  localizePage();
  $lang.textContent = tr('langBtn');
  $lang.title = tr('langTitle');
}

// HUD button: switch, keep the choice, and rewrite the text that is already on screen
// (a game over dialog that is up keeps its language until the next one)
function toggleLang() {
  setLang(lang === 'zh' ? 'en' : 'zh');
  try { localStorage.setItem('sirNoodleLang', lang); } catch (e) {}
  lastFxText = ''; lastSpd = ''; $trophyCount.textContent = '';   // updateHud() only writes what changed
  updateHud(); updateProfile();
  $lowfx.title = tr(lowFx ? 'fxLow' : 'fxHigh');
  syncScreens();
  if (recordsOpen()) renderRecords();
  sfx.click();
}

setLang(pickLang());
