// Sir Noodle's art. Every icon is drawn in a 100x100 box with the game's ink outline.
// tools/export.mjs renders these into assets/*.png; the game itself only loads the PNGs.
'use strict';

const INK = '#5b2a4e';
const LW = 4.5;

// ---------- helpers ----------
function ink(g, w = LW) { g.strokeStyle = INK; g.lineWidth = w; g.lineJoin = 'round'; g.lineCap = 'round'; }
function paint(g, fill, w = LW) { g.fillStyle = fill; g.fill(); ink(g, w); g.stroke(); }
function circ(g, x, y, r) { g.beginPath(); g.arc(x, y, r, 0, Math.PI * 2); }
function ell(g, x, y, rx, ry, rot = 0) { g.beginPath(); g.ellipse(x, y, rx, ry, rot, 0, Math.PI * 2); }
function rrect(g, x, y, w, h, r) { g.beginPath(); g.roundRect(x, y, w, h, r); }
function poly(g, pts) { g.beginPath(); g.moveTo(pts[0][0], pts[0][1]); for (let i = 1; i < pts.length; i++) g.lineTo(pts[i][0], pts[i][1]); g.closePath(); }
function roundPoly(g, pts, r) {
  const n = pts.length, mid = (a, b) => [(a[0] + b[0]) / 2, (a[1] + b[1]) / 2];
  const s = mid(pts[n - 1], pts[0]);
  g.beginPath(); g.moveTo(s[0], s[1]);
  for (let i = 0; i < n; i++) { const p = pts[i], q = pts[(i + 1) % n]; g.arcTo(p[0], p[1], q[0], q[1], r); }
  g.closePath();
}
function star(g, cx, cy, ro, ri, n = 5, rot = -Math.PI / 2) {
  g.beginPath();
  for (let i = 0; i < n * 2; i++) { const r = i % 2 ? ri : ro, a = rot + i * Math.PI / n; g.lineTo(cx + Math.cos(a) * r, cy + Math.sin(a) * r); }
  g.closePath();
}
function spark4(g, cx, cy, r) {
  const k = r * 0.18;
  g.beginPath(); g.moveTo(cx, cy - r);
  g.quadraticCurveTo(cx + k, cy - k, cx + r, cy); g.quadraticCurveTo(cx + k, cy + k, cx, cy + r);
  g.quadraticCurveTo(cx - k, cy + k, cx - r, cy); g.quadraticCurveTo(cx - k, cy - k, cx, cy - r);
  g.closePath();
}
function drop(g, cx, cy, r) {
  g.beginPath(); g.moveTo(cx, cy - r * 2);
  g.bezierCurveTo(cx + r * 0.4, cy - r * 1.2, cx + r, cy - r * 0.5, cx + r, cy + r * 0.2);
  g.arc(cx, cy + r * 0.2, r, 0, Math.PI);
  g.bezierCurveTo(cx - r, cy - r * 0.5, cx - r * 0.4, cy - r * 1.2, cx, cy - r * 2);
  g.closePath();
}
function shine(g, x, y, rx, ry, rot = -0.5, a = 0.55) { g.fillStyle = `rgba(255,255,255,${a})`; ell(g, x, y, rx, ry, rot); g.fill(); }
function dot(g, x, y, r, c = INK) { g.fillStyle = c; circ(g, x, y, r); g.fill(); }
function stroke2(g, w, c) { ink(g, w + 5); g.stroke(); g.strokeStyle = c; g.lineWidth = w; g.stroke(); }   // outlined line
function face(g, fill) { circ(g, 50, 52, 40); paint(g, fill); shine(g, 33, 30, 11, 6); }
function blush(g) { g.fillStyle = 'rgba(255,90,140,.45)'; ell(g, 25, 64, 7, 4.5); g.fill(); ell(g, 75, 64, 7, 4.5); g.fill(); }

const ART = {};

// ---------- foods ----------
ART.pizza = g => {
  g.beginPath(); g.moveTo(16, 26); g.quadraticCurveTo(50, 12, 84, 26); g.lineTo(50, 92); g.closePath(); paint(g, '#ffd04d');
  for (const [x, y, r] of [[38, 42, 7.5], [60, 46, 7], [50, 66, 6]]) { circ(g, x, y, r); paint(g, '#e0453a', 3.5); shine(g, x - 2, y - 2.5, 2.5, 1.5, -0.5, 0.5); }
  g.beginPath(); g.moveTo(12, 24); g.quadraticCurveTo(50, 6, 88, 24); g.lineTo(85, 33); g.quadraticCurveTo(50, 18, 15, 33); g.closePath(); paint(g, '#e8a04a');
  shine(g, 34, 20, 9, 2.5, -0.25, 0.5);
};

ART.donut = g => {
  g.beginPath(); g.arc(50, 52, 40, 0, Math.PI * 2); g.moveTo(62, 52); g.arc(50, 52, 12, 0, Math.PI * 2, true);
  paint(g, '#d9954f');
  g.beginPath();
  for (let i = 0; i <= 48; i++) { const a = i / 48 * Math.PI * 2, r = 33 + 3 * Math.sin(i * 1.5); g.lineTo(50 + Math.cos(a) * r, 49 + Math.sin(a) * r); }
  g.closePath(); g.moveTo(63, 50); g.arc(50, 50, 13, 0, Math.PI * 2, true);
  paint(g, '#ff8fc0');
  const cols = ['#fff', '#7dd3fc', '#ffe066', '#6ee7b7', '#c4b5fd'];
  for (let i = 0; i < 14; i++) {
    const a = i * 2.4, r = 20 + (i % 3) * 5, x = 50 + Math.cos(a) * r, y = 49 + Math.sin(a) * r;
    g.save(); g.translate(x, y); g.rotate(a * 1.7); g.fillStyle = cols[i % cols.length]; g.beginPath(); g.roundRect(-4, -1.6, 8, 3.2, 1.6); g.fill(); g.restore();
  }
  shine(g, 32, 28, 9, 4, -0.6, 0.5);
};

ART.burger = g => {
  rrect(g, 16, 68, 68, 16, 8); paint(g, '#e8a04a');
  rrect(g, 11, 55, 78, 15, 7); paint(g, '#7a4128');
  poly(g, [[12, 52], [88, 52], [84, 62], [72, 58], [62, 66], [52, 58], [40, 64], [28, 58], [16, 62]]); paint(g, '#ffd04d', 3.5);
  g.beginPath(); g.moveTo(10, 50);
  for (let i = 0; i <= 8; i++) g.quadraticCurveTo(10 + i * 10 - 5, 44 + (i % 2) * 12, 10 + i * 10, 50);
  g.closePath(); paint(g, '#7ccf6a', 3.5);
  g.beginPath(); g.moveTo(12, 48); g.bezierCurveTo(12, 8, 88, 8, 88, 48); g.closePath(); paint(g, '#f0b45a');
  for (const [x, y, r] of [[34, 26, 0.4], [50, 20, -0.2], [64, 28, 0.6], [44, 36, 0.1], [72, 40, -0.4], [26, 40, 0.3]]) { g.fillStyle = '#fff3d6'; ell(g, x, y, 3.2, 1.8, r); g.fill(); }
  shine(g, 30, 22, 8, 3.5, -0.6, 0.45);
};

ART.banana = g => {
  g.beginPath(); g.moveTo(22, 22);
  g.bezierCurveTo(10, 64, 46, 94, 88, 72);
  g.bezierCurveTo(56, 76, 34, 60, 30, 22);
  g.closePath(); paint(g, '#ffe066');
  g.beginPath(); g.moveTo(26, 30); g.bezierCurveTo(24, 58, 46, 78, 74, 78); ink(g, 2.5); g.strokeStyle = 'rgba(200,150,30,.6)'; g.stroke();
  rrect(g, 20, 12, 10, 13, 3); paint(g, '#8a5a2b', 3.5);
  dot(g, 87, 72, 3.5, '#6b4423');
  shine(g, 22, 50, 3, 10, 0.1, 0.55);
};

ART.strawberry = g => {
  g.beginPath(); g.moveTo(50, 92);
  g.bezierCurveTo(20, 76, 10, 46, 26, 34);
  g.bezierCurveTo(36, 26, 64, 26, 74, 34);
  g.bezierCurveTo(90, 46, 80, 76, 50, 92);
  g.closePath(); paint(g, '#ff4d6d');
  g.fillStyle = '#ffe7a0';
  for (const [x, y] of [[34, 46], [50, 44], [66, 46], [28, 60], [42, 58], [58, 58], [72, 60], [36, 72], [50, 72], [64, 72], [50, 84]]) { ell(g, x, y, 1.8, 2.8, 0.3); g.fill(); }
  for (let i = 0; i < 5; i++) { const a = -Math.PI / 2 + (i - 2) * 0.62; ell(g, 50 + Math.cos(a + Math.PI) * -12, 30 + Math.sin(a + Math.PI) * -6, 11, 5, a); paint(g, '#5cb85c', 3.5); }
  rrect(g, 47, 10, 6, 16, 3); paint(g, '#4a8f3c', 3);
  shine(g, 32, 42, 4, 7, 0.4, 0.5);
};

ART.cupcake = g => {
  poly(g, [[24, 58], [76, 58], [68, 90], [32, 90]]); paint(g, '#7dd3fc');
  ink(g, 3); g.strokeStyle = 'rgba(91,42,78,.55)';
  for (const x of [36, 50, 64]) { g.beginPath(); g.moveTo(x, 61); g.lineTo(x + (50 - x) * 0.2, 87); g.stroke(); }
  ell(g, 50, 54, 32, 11); paint(g, '#ff9ccc');
  ell(g, 50, 43, 25, 10); paint(g, '#ffb3d9');
  ell(g, 50, 32, 16, 9); paint(g, '#ffc7e4');
  g.beginPath(); g.moveTo(51, 18); g.quadraticCurveTo(54, 8, 62, 6); ink(g, 3.5); g.stroke();
  circ(g, 50, 21, 7.5); paint(g, '#e0453a', 3.5); shine(g, 47, 18, 2.4, 1.6);
  shine(g, 36, 40, 6, 2.5, -0.2, 0.5);
};

ART.taco = g => {
  g.beginPath(); g.moveTo(14, 44);
  for (let i = 0; i <= 7; i++) g.quadraticCurveTo(14 + i * 10 - 5, 30 + (i % 2) * 6, 14 + i * 10, 40 - (i % 2) * 2);
  g.lineTo(86, 52); g.lineTo(14, 52); g.closePath(); paint(g, '#7ccf6a', 3.5);
  for (const [x, y] of [[32, 38], [54, 36], [70, 40]]) { circ(g, x, y, 6); paint(g, '#ff5a4a', 3); }
  g.beginPath(); g.moveTo(42, 40); g.quadraticCurveTo(48, 32, 58, 42); g.lineTo(44, 46); g.closePath(); paint(g, '#9b5a33', 3);
  g.beginPath(); g.arc(50, 44, 40, Math.PI, 0, true); g.closePath(); paint(g, '#f5c451');
  g.beginPath(); g.arc(50, 44, 31, Math.PI * 0.95, Math.PI * 0.05, true); ink(g, 2.5); g.strokeStyle = 'rgba(200,130,30,.6)'; g.stroke();
  g.fillStyle = 'rgba(200,120,40,.5)'; for (const [x, y] of [[30, 60], [46, 72], [64, 64], [56, 78], [72, 54]]) { circ(g, x, y, 2); g.fill(); }
  shine(g, 26, 52, 6, 3, 0.6, 0.45);
};

ART.watermelon = g => {
  g.beginPath(); g.arc(50, 34, 44, Math.PI, 0, true); g.closePath(); paint(g, '#4caf50');
  g.beginPath(); g.arc(50, 34, 37, Math.PI, 0, true); g.closePath(); g.fillStyle = '#c8f2a8'; g.fill();
  g.beginPath(); g.arc(50, 34, 33, Math.PI, 0, true); g.closePath(); paint(g, '#ff5a6e', 3);
  g.fillStyle = INK;
  for (const [x, y, r] of [[34, 44, 0.5], [50, 50, 0], [66, 44, -0.5], [42, 58, 0.3], [58, 58, -0.3]]) { ell(g, x, y, 2.4, 4, r); g.fill(); }
  shine(g, 30, 38, 7, 3, 0.4, 0.4);
};

ART.cheese = g => {
  poly(g, [[12, 56], [74, 26], [88, 56]]); paint(g, '#ffe680');
  rrect(g, 12, 56, 76, 30, 4); paint(g, '#ffd04d');
  for (const [x, y, rx, ry] of [[26, 70, 6, 5], [48, 76, 4, 3.5], [66, 66, 7, 5.5], [80, 78, 3, 3], [58, 46, 4, 2.5], [40, 50, 3.5, 2]]) { g.fillStyle = '#e8b42e'; ell(g, x, y, rx, ry); g.fill(); }
  shine(g, 24, 62, 8, 2, 0, 0.45);
};

ART.fries = g => {
  for (let i = 0; i < 6; i++) {
    const x = 28 + i * 8.5, top = 12 + (i % 3) * 7;
    g.save(); g.translate(x, 50); g.rotate((i - 2.5) * 0.07);
    g.beginPath(); g.roundRect(-4.5, top - 50, 9, 44, 3); paint(g, '#ffd54a', 3.5); g.restore();
  }
  g.beginPath(); g.moveTo(20, 42); g.quadraticCurveTo(50, 58, 80, 42); g.lineTo(71, 90); g.lineTo(29, 90); g.closePath(); paint(g, '#ff4d4d');
  star(g, 50, 70, 10, 4.5); g.fillStyle = '#fff'; g.fill();
  shine(g, 30, 60, 3, 9, 0.15, 0.4);
};

ART.onigiri = g => {
  roundPoly(g, [[50, 10], [90, 84], [10, 84]], 16); paint(g, '#fffaf0');
  rrect(g, 34, 60, 32, 26, 4); paint(g, '#2f3b35', 3.5);
  g.fillStyle = 'rgba(91,42,78,.18)';
  for (const [x, y] of [[44, 34], [56, 40], [38, 50], [62, 52], [50, 26]]) { ell(g, x, y, 2.6, 1.4, 0.6); g.fill(); }
  shine(g, 36, 40, 4, 8, 0.5, 0.7);
};

ART.croissant = g => {
  const seg = [[200, 12], [340, 12], [228, 17], [312, 17], [270, 22]];   // ends first, middle on top
  for (const [deg, s] of seg) {
    const a = deg * Math.PI / 180;
    ell(g, 50 + Math.cos(a) * 30, 88 + Math.sin(a) * 30, s * 1.05, s * 1.35, a + Math.PI / 2);
    paint(g, deg === 270 ? '#f0b05e' : '#e69a48');
  }
  shine(g, 42, 52, 8, 3.5, -0.2, 0.5);
};

ART.cookie = g => {
  circ(g, 50, 50, 40); paint(g, '#e0a868');
  g.fillStyle = '#5a3320';
  for (const [x, y, s] of [[34, 34, 5], [58, 28, 4.5], [68, 50, 5.5], [44, 56, 5], [30, 62, 4], [56, 72, 5], [74, 70, 3.5]]) roundPoly(g, [[x - s, y], [x, y - s], [x + s, y + s * 0.6]], 2), g.fill();
  g.fillStyle = 'rgba(255,240,210,.6)';
  for (const [x, y] of [[46, 40], [62, 62], [38, 76], [72, 36]]) { circ(g, x, y, 1.6); g.fill(); }
  shine(g, 32, 28, 8, 4, -0.6, 0.45);
};

ART.drumstick = g => {
  g.beginPath(); g.moveTo(56, 58); g.lineTo(80, 82); stroke2(g, 9, '#fffaf0');
  for (const [x, y] of [[86, 78], [78, 88]]) { circ(g, x, y, 7); paint(g, '#fffaf0', 3.5); }
  g.beginPath(); g.moveTo(56, 58); g.lineTo(80, 82); g.strokeStyle = '#fffaf0'; g.lineWidth = 9; g.stroke();
  ell(g, 40, 40, 31, 26, -0.75); paint(g, '#c9692f');
  shine(g, 30, 28, 10, 5, -0.7, 0.45);
  g.fillStyle = 'rgba(120,50,20,.35)'; ell(g, 50, 50, 8, 4, -0.7); g.fill();
};

// ---------- pickups ----------
ART.chili = g => {
  g.beginPath(); g.moveTo(24, 32);
  g.bezierCurveTo(44, 22, 62, 36, 66, 56);
  g.bezierCurveTo(70, 74, 80, 84, 86, 92);
  g.bezierCurveTo(64, 90, 42, 78, 32, 60);
  g.bezierCurveTo(26, 50, 20, 42, 24, 32);
  g.closePath(); paint(g, '#ff3b3b');
  g.beginPath(); g.moveTo(26, 30); g.quadraticCurveTo(20, 16, 30, 8); stroke2(g, 5, '#4caf50');
  ell(g, 28, 30, 11, 6, 0.4); paint(g, '#5cb85c', 3.5);
  shine(g, 38, 40, 9, 3.5, 0.5, 0.55);
};

ART.ice = g => {
  poly(g, [[16, 38], [34, 20], [84, 20], [66, 38]]); paint(g, '#e6f7ff');
  poly(g, [[66, 38], [84, 20], [84, 70], [66, 88]]); paint(g, '#7cc7f2');
  rrect(g, 16, 38, 50, 50, 6); paint(g, '#a8dcfa');
  g.strokeStyle = 'rgba(255,255,255,.85)'; g.lineWidth = 4; g.lineCap = 'round';
  g.beginPath(); g.moveTo(24, 48); g.lineTo(24, 66); g.moveTo(32, 46); g.lineTo(42, 46); g.stroke();
  shine(g, 50, 28, 8, 2.5, 0, 0.7);
};

ART.mushroom = g => {
  rrect(g, 37, 50, 26, 38, 11); paint(g, '#fff3e0');
  g.beginPath(); g.moveTo(8, 58); g.bezierCurveTo(8, 6, 92, 6, 92, 58); g.quadraticCurveTo(50, 68, 8, 58); g.closePath(); paint(g, '#ff4d4d');
  for (const [x, y, r] of [[50, 22, 7], [28, 42, 6], [72, 42, 6], [40, 50, 3.5], [62, 50, 3.5]]) { circ(g, x, y, r); g.fillStyle = '#fff'; g.fill(); }
  dot(g, 45, 74, 2.5); dot(g, 55, 74, 2.5);
  shine(g, 26, 26, 8, 4, -0.7, 0.5);
};

ART.star = g => {
  star(g, 50, 54, 46, 21); paint(g, '#ffd23d');
  star(g, 50, 54, 28, 13); g.fillStyle = '#ffe680'; g.fill();
  shine(g, 38, 38, 6, 3, -0.6, 0.7);
};

ART.bomb = g => {
  g.beginPath(); g.moveTo(64, 28); g.quadraticCurveTo(66, 10, 78, 10); stroke2(g, 4, '#c9a46a');
  circ(g, 44, 60, 32); paint(g, '#3a3550');
  g.save(); g.translate(62, 33); g.rotate(0.75); g.beginPath(); g.roundRect(-8, -6, 16, 12, 3); paint(g, '#8a8f99', 3.5); g.restore();
  shine(g, 32, 46, 9, 5, -0.7, 0.6);
};

ART.dynamite = g => {
  for (const x of [28, 72, 50]) {
    g.beginPath(); g.moveTo(x, 34); g.quadraticCurveTo(x, 18, 56, 12); stroke2(g, 3.5, '#c9a46a');
  }
  for (const [x, y] of [[28, 36], [72, 36], [50, 32]]) {
    rrect(g, x - 12, y, 24, 56, 6); paint(g, '#e8423f');
    shine(g, x - 5, y + 14, 2.5, 8, 0, 0.5);
  }
  rrect(g, 12, 58, 76, 12, 3); paint(g, '#8a5a2b', 3.5);
  star(g, 58, 11, 10, 4, 8); paint(g, '#ffe066', 3);
};

ART.shield = g => {
  const body = (s) => {
    g.beginPath(); g.moveTo(50, 50 - 42 * s);
    g.bezierCurveTo(50 + 22 * s, 50 - 32 * s, 50 + 36 * s, 50 - 36 * s, 50 + 40 * s, 50 - 34 * s);
    g.bezierCurveTo(50 + 42 * s, 50 + 6 * s, 50 + 30 * s, 50 + 30 * s, 50, 50 + 44 * s);
    g.bezierCurveTo(50 - 30 * s, 50 + 30 * s, 50 - 42 * s, 50 + 6 * s, 50 - 40 * s, 50 - 34 * s);
    g.bezierCurveTo(50 - 36 * s, 50 - 36 * s, 50 - 22 * s, 50 - 32 * s, 50, 50 - 42 * s);
    g.closePath();
  };
  body(1); paint(g, '#ffc83d');                               // gold rim
  body(0.78); paint(g, '#4aa8f0', 3.5);                       // blue face
  g.save(); body(0.78); g.clip();
  g.fillStyle = '#7cc4f7'; g.fillRect(0, 0, 50, 100);          // lighter left half
  g.restore();
  body(0.78); ink(g, 3.5); g.stroke();
  star(g, 50, 48, 16, 7); paint(g, '#fff3a0', 3);
  shine(g, 34, 26, 3.5, 9, 0.35, 0.6);
};

// ---------- effects ----------
function snowPath(g, cx, cy, r) {
  g.beginPath();
  for (let i = 0; i < 6; i++) {
    const a = i * Math.PI / 3, ca = Math.cos(a), sa = Math.sin(a);
    g.moveTo(cx, cy); g.lineTo(cx + ca * r, cy + sa * r);
    for (const [d, l] of [[0.55, 0.3], [0.8, 0.2]]) {
      const bx = cx + ca * r * d, by = cy + sa * r * d;
      for (const s of [-1, 1]) { const b = a + s * 0.8; g.moveTo(bx, by); g.lineTo(bx + Math.cos(b) * r * l, by + Math.sin(b) * r * l); }
    }
  }
}
ART.snow = g => { snowPath(g, 50, 50, 42); stroke2(g, 5.5, '#e6f6ff'); circ(g, 50, 50, 7); paint(g, '#bfe6ff', 3.5); };

ART.sparkle = g => {
  for (const [x, y, r] of [[42, 56, 36], [78, 22, 16], [80, 76, 10]]) { spark4(g, x, y, r); paint(g, '#ffe066', 3.5); }
  shine(g, 38, 46, 3, 6, 0, 0.7);
};

ART.boom = g => {
  star(g, 50, 50, 47, 25, 11, -0.2); paint(g, '#ff8a2a');
  star(g, 50, 50, 30, 15, 9, 0.1); g.fillStyle = '#ffe066'; g.fill();
  circ(g, 50, 50, 9); g.fillStyle = '#fffbe6'; g.fill();
};

ART.dizzy = g => {
  g.beginPath(); g.arc(46, 58, 30, Math.PI * 0.35, Math.PI * 1.55); stroke2(g, 6, '#ffe066');
  g.beginPath(); g.arc(46, 58, 17, Math.PI * 0.6, Math.PI * 1.7); stroke2(g, 4, '#ffd23d');
  star(g, 70, 30, 22, 10); paint(g, '#ffd23d');
  shine(g, 64, 24, 4, 2, -0.6, 0.7);
};

ART.sweat = g => {
  drop(g, 38, 60, 17); paint(g, '#4fc3f7'); shine(g, 32, 58, 3.5, 6, 0.2, 0.7);
  drop(g, 72, 36, 11); paint(g, '#4fc3f7'); shine(g, 68, 35, 2.5, 4, 0.2, 0.7);
};

ART.fire = g => {
  g.beginPath(); g.moveTo(50, 92);
  g.bezierCurveTo(22, 92, 12, 66, 24, 44); g.bezierCurveTo(28, 54, 34, 58, 38, 56);
  g.bezierCurveTo(32, 36, 44, 18, 58, 8); g.bezierCurveTo(56, 26, 70, 30, 78, 46);
  g.bezierCurveTo(88, 68, 78, 92, 50, 92); g.closePath(); paint(g, '#ff7a2a');
  g.beginPath(); g.moveTo(50, 88);
  g.bezierCurveTo(36, 88, 30, 76, 37, 64); g.bezierCurveTo(41, 70, 45, 70, 48, 68);
  g.bezierCurveTo(46, 58, 52, 50, 58, 46); g.bezierCurveTo(60, 56, 68, 62, 66, 74);
  g.bezierCurveTo(64, 85, 58, 88, 50, 88); g.closePath(); g.fillStyle = '#ffe066'; g.fill();
};

ART.rock = g => {
  roundPoly(g, [[18, 44], [38, 22], [68, 24], [88, 48], [82, 78], [50, 86], [16, 74]], 12);
  const gr = g.createLinearGradient(20, 22, 80, 86); gr.addColorStop(0, '#cfd4d8'); gr.addColorStop(1, '#7b8187');
  paint(g, gr);
  shine(g, 38, 38, 10, 5, -0.5, 0.55);
  g.beginPath(); g.moveTo(54, 44); g.lineTo(62, 54); g.lineTo(56, 62); g.lineTo(64, 74); ink(g, 3); g.strokeStyle = 'rgba(60,60,70,.7)'; g.stroke();
  dot(g, 72, 32, 5, '#7ccf6a'); dot(g, 64, 28, 3.5, '#7ccf6a');
};

// ---------- hats ----------
ART.bow = g => {
  poly(g, [[46, 54], [30, 88], [42, 82], [44, 90], [52, 56]]); paint(g, '#ff5a9a', 3.5);
  poly(g, [[54, 54], [70, 88], [58, 82], [56, 90], [48, 56]]); paint(g, '#ff5a9a', 3.5);
  g.beginPath(); g.moveTo(50, 48); g.bezierCurveTo(30, 18, 4, 24, 8, 48); g.bezierCurveTo(10, 68, 32, 72, 50, 52); g.closePath(); paint(g, '#ff7ab0');
  g.beginPath(); g.moveTo(50, 48); g.bezierCurveTo(70, 18, 96, 24, 92, 48); g.bezierCurveTo(90, 68, 68, 72, 50, 52); g.closePath(); paint(g, '#ff7ab0');
  rrect(g, 41, 40, 18, 18, 7); paint(g, '#ff5a9a');
  shine(g, 22, 38, 6, 3, -0.5, 0.55); shine(g, 70, 36, 6, 3, -0.5, 0.55);
};

ART.tophat = g => {
  ell(g, 50, 80, 42, 10); paint(g, '#2d2a3a');
  rrect(g, 27, 18, 46, 62, 6); paint(g, '#2d2a3a');
  g.beginPath(); g.rect(27, 60, 46, 11); paint(g, '#e0457b', 3.5);
  shine(g, 36, 34, 3, 11, 0, 0.3);
};

ART.cowboy = g => {
  g.beginPath(); g.moveTo(26, 66); g.bezierCurveTo(24, 26, 34, 18, 42, 26); g.quadraticCurveTo(50, 34, 58, 26); g.bezierCurveTo(66, 18, 76, 26, 74, 66); g.closePath(); paint(g, '#b5763a');
  g.beginPath(); g.moveTo(25, 56); g.lineTo(75, 56); g.lineTo(75, 64); g.lineTo(25, 64); g.closePath(); paint(g, '#5a3320', 3.5);
  g.beginPath(); g.moveTo(4, 58); g.quadraticCurveTo(18, 82, 50, 80); g.quadraticCurveTo(82, 82, 96, 58); g.quadraticCurveTo(80, 70, 50, 70); g.quadraticCurveTo(20, 70, 4, 58); g.closePath(); paint(g, '#c98a4b');
  shine(g, 36, 36, 3, 9, 0.2, 0.35);
};

ART.gradcap = g => {
  g.beginPath(); g.moveTo(26, 46); g.lineTo(74, 46); g.lineTo(72, 70); g.quadraticCurveTo(50, 80, 28, 70); g.closePath(); paint(g, '#2d2a3a');
  poly(g, [[50, 22], [94, 40], [50, 58], [6, 40]]); paint(g, '#3d3950');
  g.beginPath(); g.moveTo(50, 40); g.lineTo(80, 48); g.lineTo(80, 66); stroke2(g, 3, '#ffd23d');
  rrect(g, 75, 64, 10, 14, 3); paint(g, '#ffd23d', 3);
  dot(g, 50, 40, 4, '#ffd23d');
};

ART.crown = g => {
  poly(g, [[12, 80], [88, 80], [88, 30], [70, 52], [50, 20], [30, 52], [12, 30]]); paint(g, '#ffd23d');
  rrect(g, 12, 66, 76, 14, 2); paint(g, '#ffc107', 3.5);
  for (const [x, c] of [[30, '#e0453a'], [50, '#4fc3f7'], [70, '#e0453a']]) { circ(g, x, 73, 4.5); paint(g, c, 2.5); }
  for (const [x, y] of [[12, 28], [50, 18], [88, 28]]) { circ(g, x, y, 5); paint(g, '#fff3a0', 3); }
  shine(g, 30, 46, 3, 8, 0.4, 0.5);
};

// ---------- characters & UI ----------
ART.worm = g => {
  const body = [[16, 76, 12], [28, 70, 13], [40, 72, 14], [52, 66, 15]];
  const cols = ['#f7a6c8', '#f797bf', '#f788b5', '#f679ab'];
  body.forEach(([x, y, r], i) => { circ(g, x, y, r); paint(g, cols[i]); shine(g, x - r * 0.3, y - r * 0.35, r * 0.4, r * 0.25, -0.5, 0.4); });
  circ(g, 68, 46, 21); paint(g, '#ff7aa8');
  for (const x of [61, 76]) { circ(g, x, 42, 6.5); paint(g, '#fff', 3); dot(g, x + 1.5, 43, 3.2); dot(g, x + 0.5, 41.5, 1.1, '#fff'); }
  g.fillStyle = 'rgba(255,90,140,.5)'; ell(g, 56, 54, 4, 2.5); g.fill(); ell(g, 82, 54, 4, 2.5); g.fill();
  g.beginPath(); g.arc(69, 53, 6, 0.2, Math.PI - 0.2); ink(g, 3); g.stroke();
  shine(g, 60, 32, 6, 3.5, -0.5, 0.5);
};

ART.trophy = g => {
  g.beginPath(); g.arc(24, 36, 13, Math.PI * 0.5, Math.PI * 1.5); g.moveTo(76, 23); g.arc(76, 36, 13, -Math.PI * 0.5, Math.PI * 0.5); stroke2(g, 5, '#ffc107');
  rrect(g, 30, 80, 40, 12, 4); paint(g, '#8a5a2b');
  rrect(g, 44, 62, 12, 20, 3); paint(g, '#ffc107', 3.5);
  g.beginPath(); g.moveTo(24, 14); g.lineTo(76, 14); g.bezierCurveTo(76, 50, 64, 66, 50, 66); g.bezierCurveTo(36, 66, 24, 50, 24, 14); g.closePath(); paint(g, '#ffd23d');
  star(g, 50, 38, 11, 5); g.fillStyle = '#fff3a0'; g.fill();
  shine(g, 33, 28, 3, 9, 0.1, 0.55);
};

ART.pause = g => {
  rrect(g, 12, 12, 76, 76, 18); paint(g, '#5ab4f0');
  for (const x of [33, 56]) { rrect(g, x, 30, 11, 40, 4); paint(g, '#fff', 3); }
  shine(g, 28, 24, 9, 4, -0.4, 0.4);
};

ART.face_dead = g => {
  face(g, '#ffd23d');
  ink(g, 5);
  for (const x of [34, 66]) { g.beginPath(); g.moveTo(x - 7, 38); g.lineTo(x + 7, 52); g.moveTo(x + 7, 38); g.lineTo(x - 7, 52); g.stroke(); }
  ell(g, 50, 70, 8, 10); g.fillStyle = INK; g.fill();
};

ART.face_hot = g => {
  face(g, '#ff7a5c');
  ink(g, 4.5);
  for (const s of [-1, 1]) { g.beginPath(); g.moveTo(50 + s * 22, 40); g.lineTo(50 + s * 12, 46); g.lineTo(50 + s * 22, 52); g.stroke(); }
  ell(g, 50, 68, 13, 9); g.fillStyle = INK; g.fill();
  ell(g, 50, 76, 7, 8); paint(g, '#ff4d7a', 3);
  drop(g, 84, 30, 6); paint(g, '#4fc3f7', 3);
};

ART.face_cold = g => {
  face(g, '#7cc8ff');
  dot(g, 36, 44, 5); dot(g, 64, 44, 5);
  ink(g, 3.5); g.beginPath(); g.moveTo(26, 32); g.lineTo(40, 36); g.moveTo(74, 32); g.lineTo(60, 36); g.stroke();
  rrect(g, 30, 60, 40, 16, 5); paint(g, '#fff', 3.5);
  g.beginPath(); g.moveTo(30, 68); g.lineTo(70, 68); for (const x of [40, 50, 60]) { g.moveTo(x, 60); g.lineTo(x, 76); } ink(g, 2.5); g.stroke();
};

ART.face_woozy = g => {
  face(g, '#ffd23d');
  circ(g, 35, 44, 8); paint(g, '#fff', 3.5); dot(g, 37, 46, 3.5);
  g.beginPath(); g.moveTo(58, 46); g.quadraticCurveTo(66, 40, 74, 46); ink(g, 4.5); g.stroke();
  g.beginPath(); g.moveTo(32, 70);
  for (let i = 1; i <= 4; i++) g.quadraticCurveTo(32 + i * 9 - 4.5, 70 + (i % 2 ? -6 : 6), 32 + i * 9, 70);
  ink(g, 4.5); g.stroke();
  blush(g);
};

ART.face_relieved = g => {
  face(g, '#ffd23d');
  ink(g, 4.5);
  for (const x of [35, 65]) { g.beginPath(); g.arc(x, 44, 8, Math.PI * 0.15, Math.PI * 0.85); g.stroke(); }
  g.beginPath(); g.arc(50, 60, 13, Math.PI * 0.2, Math.PI * 0.8); g.stroke();
  blush(g);
};

ART.face_sleepy = g => {
  face(g, '#ffd23d');
  ink(g, 4.5);
  for (const x of [35, 63]) { g.beginPath(); g.arc(x, 42, 8, Math.PI * 0.15, Math.PI * 0.85); g.stroke(); }
  ell(g, 50, 68, 6, 7); g.fillStyle = INK; g.fill();
  blush(g);
  zLetter(g, 80, 22, 13);
};

// ---------- night time ----------
function zLetter(g, x, y, s) {
  g.beginPath(); g.moveTo(x - s / 2, y - s / 2); g.lineTo(x + s / 2, y - s / 2); g.lineTo(x - s / 2, y + s / 2); g.lineTo(x + s / 2, y + s / 2);
  stroke2(g, s * 0.28, '#e6f0ff');
}

// crescent moon with a sleepy face: a full disc with a second disc cut out of it
ART.moon = g => {
  const ox = 44, oy = 54, orr = 40, ix = 70, iy = 40, ir = 32;
  circ(g, ox, oy, orr); paint(g, '#ffe680');
  g.save(); g.globalCompositeOperation = 'destination-out'; circ(g, ix, iy, ir + LW / 2); g.fill(); g.restore();
  g.save(); circ(g, ox, oy, orr); g.clip(); circ(g, ix, iy, ir); ink(g); g.stroke(); g.restore();
  g.beginPath(); g.arc(25, 56, 6, Math.PI * 0.15, Math.PI * 0.85); ink(g, 4); g.stroke();
  g.beginPath(); g.arc(34, 72, 6, Math.PI * 0.1, Math.PI * 0.7); ink(g, 3.5); g.stroke();
  g.fillStyle = 'rgba(255,90,140,.45)'; ell(g, 20, 68, 5, 3); g.fill();
  shine(g, 22, 36, 8, 4, -1.0, 0.6);
  star(g, 80, 78, 11, 5); paint(g, '#fff6b8', 3.5);
  star(g, 88, 16, 7, 3); paint(g, '#fff6b8', 3);
};

ART.zzz = g => {
  zLetter(g, 30, 70, 30); zLetter(g, 60, 44, 22); zLetter(g, 80, 22, 15);
};

ART.sun = g => {
  for (let i = 0; i < 10; i++) {
    const a = i * Math.PI / 5;
    g.beginPath(); g.moveTo(50 + Math.cos(a) * 32, 50 + Math.sin(a) * 32); g.lineTo(50 + Math.cos(a) * 45, 50 + Math.sin(a) * 45);
    stroke2(g, 5, '#ffb84d');
  }
  circ(g, 50, 50, 26); paint(g, '#ffd23d');
  for (const x of [41, 59]) { g.beginPath(); g.arc(x, 48, 5, Math.PI * 1.15, Math.PI * 1.85); ink(g, 3.5); g.stroke(); }
  g.beginPath(); g.arc(50, 54, 9, Math.PI * 0.2, Math.PI * 0.8); ink(g, 3.5); g.stroke();
  shine(g, 40, 36, 6, 3);
};

// ---------- monkey mode ----------
ART.monkey = g => {
  for (const x of [15, 85]) { circ(g, x, 50, 13); paint(g, '#9a5f2c'); circ(g, x, 50, 6.5); g.fillStyle = '#f3cf9c'; g.fill(); }
  circ(g, 50, 50, 36); paint(g, '#9a5f2c');
  g.beginPath(); g.arc(37, 45, 14, 0, Math.PI * 2); g.arc(63, 45, 14, 0, Math.PI * 2); g.fillStyle = '#f3cf9c'; g.fill();
  ell(g, 50, 66, 23, 15); paint(g, '#f3cf9c', 3.5);
  circ(g, 37, 45, 7); paint(g, '#fff', 3); dot(g, 39, 46, 3.5);
  circ(g, 63, 45, 7); paint(g, '#fff', 3); dot(g, 61, 46, 3.5);
  dot(g, 45, 61, 2.3); dot(g, 55, 61, 2.3);
  g.beginPath(); g.arc(50, 66, 11, Math.PI * 0.2, Math.PI * 0.8); ink(g, 4); g.stroke();
  shine(g, 34, 22, 9, 4.5);
};

// pointing up; the game rotates it to face outward from the head
ART.paw = g => {
  for (const [x, y] of [[30, 30], [43, 22], [57, 22], [70, 30]]) { ell(g, x, y, 8, 11); paint(g, '#9a5f2c', 4); }
  ell(g, 50, 56, 27, 25); paint(g, '#9a5f2c');
  ell(g, 50, 60, 15, 13); g.fillStyle = '#f3cf9c'; g.fill();
  for (const [x, y] of [[30, 27], [43, 19], [57, 19], [70, 27]]) { g.fillStyle = '#f3cf9c'; ell(g, x, y, 3.5, 4.5); g.fill(); }
  shine(g, 38, 44, 6, 3.5);
};

function speakerBody(g) {
  poly(g, [[12, 38], [28, 38], [48, 20], [48, 80], [28, 62], [12, 62]]); paint(g, '#7dd3fc');
  shine(g, 22, 44, 4, 2, 0, 0.6);
}
ART.speaker = g => {
  speakerBody(g);
  ink(g, 5);
  for (const r of [14, 26]) { g.beginPath(); g.arc(50, 50, r, -0.8, 0.8); g.stroke(); }
};
ART.speaker_off = g => {
  speakerBody(g);
  g.beginPath(); g.moveTo(60, 38); g.lineTo(84, 62); g.moveTo(84, 38); g.lineTo(60, 62); stroke2(g, 5, '#ff4d4d');
};

ART.feather = g => {
  g.beginPath(); g.moveTo(84, 10);
  g.bezierCurveTo(98, 42, 62, 80, 26, 80);
  g.bezierCurveTo(28, 50, 54, 18, 84, 10);
  g.closePath(); paint(g, '#c4b5fd');
  g.beginPath(); g.moveTo(16, 92); g.quadraticCurveTo(44, 56, 80, 16); ink(g, 4); g.stroke();
  g.strokeStyle = 'rgba(91,42,78,.35)'; g.lineWidth = 2.5;
  for (const t of [0.35, 0.5, 0.65, 0.8]) {
    const x = 16 + (80 - 16) * t, y = 92 + (16 - 92) * t;
    g.beginPath(); g.moveTo(x, y); g.lineTo(x + 12, y + 6); g.moveTo(x, y); g.lineTo(x - 6, y - 10); g.stroke();
  }
  shine(g, 66, 30, 3, 8, 0.6, 0.6);
};

if (typeof module !== 'undefined') module.exports = { ART };
