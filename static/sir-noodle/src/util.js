// Small pure helpers (random pick, wrap-around distance, colour math).
'use strict';

const rnd = (a) => a[Math.floor(Math.random() * a.length)];
const wd = (a, b) => { let d = b - a; if (d > N/2) d -= N; if (d < -N/2) d += N; return d; };
const mod = (v) => ((v % N) + N) % N;
const clamp = (v) => v < 0 ? 0 : v > 255 ? 255 : v;
const mix = (a, b, t) => [a[0] + (b[0]-a[0]) * t, a[1] + (b[1]-a[1]) * t, a[2] + (b[2]-a[2]) * t];

function hslToRgb(h, s, l) {
  h = ((h % 360) + 360) % 360 / 360;
  const f = (p, q, t) => {
    if (t < 0) t += 1; if (t > 1) t -= 1;
    if (t < 1/6) return p + (q - p) * 6 * t;
    if (t < 1/2) return q;
    if (t < 2/3) return p + (q - p) * (2/3 - t) * 6;
    return p;
  };
  const q = l < .5 ? l * (1 + s) : l + s - l * s, p = 2 * l - q;
  return [f(p, q, h + 1/3) * 255, f(p, q, h) * 255, f(p, q, h - 1/3) * 255];
}
