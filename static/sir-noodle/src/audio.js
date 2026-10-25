// Synthesized sound effects (WebAudio, no files).
'use strict';

let AC = null, muted = false;
try { muted = localStorage.getItem('sirNoodleMuted') === '1'; } catch (e) {}
function audio() {
  if (!AC) { try { AC = new (window.AudioContext || window.webkitAudioContext)(); } catch (e) {} }
  if (AC && AC.state === 'suspended') AC.resume();
  return AC;
}
function tone(f, d = 0.12, type = 'sine', vol = 0.12, slide = 0, delay = 0) {
  if (muted) return;
  const a = audio(); if (!a) return;
  const t0 = a.currentTime + delay;
  const o = a.createOscillator(), g = a.createGain();
  o.type = type;
  o.frequency.setValueAtTime(f, t0);
  if (slide) o.frequency.exponentialRampToValueAtTime(Math.max(30, f * slide), t0 + d);
  g.gain.setValueAtTime(vol, t0);
  g.gain.exponentialRampToValueAtTime(0.0001, t0 + d);
  o.connect(g); g.connect(a.destination);
  o.start(t0); o.stop(t0 + d + 0.03);
}
const sfx = {
  eat()    { tone(450 + Math.random() * 350, 0.11, 'square', 0.07, 1.8); },
  special(){ [520, 660, 880, 1040].forEach((f, i) => tone(f, 0.1, 'triangle', 0.12, 1, i * 0.07)); },
  star()   { [523, 659, 784, 1047, 1319, 1568].forEach((f, i) => tone(f, 0.14, 'triangle', 0.13, 1, i * 0.055)); },
  burp()   { tone(120, 0.55, 'sawtooth', 0.16, 0.45); tone(95, 0.5, 'square', 0.08, 0.5, 0.05); },
  die()    { tone(420, 0.7, 'sawtooth', 0.14, 0.2); tone(300, 0.7, 'square', 0.07, 0.2, 0.12); },
  start()  { [392, 523, 659].forEach((f, i) => tone(f, 0.12, 'triangle', 0.1, 1, i * 0.08)); },
  thump()  { tone(75, 0.2, 'sine', 0.22, 0.5); },
  smash()  { tone(220, 0.14, 'square', 0.1, 0.4); tone(140, 0.18, 'sawtooth', 0.08, 0.5, 0.03); },
  boom()   { tone(90, 0.6, 'sawtooth', 0.26, 0.3); tone(60, 0.7, 'square', 0.2, 0.3, 0.02); tone(1300, 0.18, 'square', 0.06, 0.2); },
  end()    { tone(500, 0.18, 'triangle', 0.08, 0.6); },
  shieldUp()    { [440, 554, 659, 880].forEach((f, i) => tone(f, 0.12, 'sine', 0.12, 1.02, i * 0.05)); },
  monkey() { [0, 0.16].forEach(d => { tone(420, 0.12, 'triangle', 0.13, 1.7, d); tone(700, 0.14, 'triangle', 0.1, 0.7, d + 0.07); }); },
  fling()  { tone(260, 0.28, 'sawtooth', 0.06, 3.2); tone(140, 0.1, 'square', 0.08, 0.6); },
  shieldBreak() { tone(1200, 0.25, 'triangle', 0.1, 0.35); tone(700, 0.3, 'square', 0.06, 0.4, 0.03); },
  lullaby(){ [784, 659, 523, 392].forEach((f, i) => tone(f, 0.32, 'sine', 0.11, 1, i * 0.16)); },
  morning(){ [523, 659, 784, 1047].forEach((f, i) => tone(f, 0.12, 'triangle', 0.1, 1.05, i * 0.07)); tone(1568, 0.08, 'sine', 0.06, 1.3, 0.34); tone(1760, 0.08, 'sine', 0.06, 1.3, 0.44); },
  // UI
  achieve(){ [784, 988, 1175, 1568].forEach((f, i) => tone(f, 0.16, 'triangle', 0.1, 1, i * 0.08)); tone(2093, 0.3, 'sine', 0.05, 1, 0.34); },
  pop()    { tone(600 + Math.random() * 200, 0.07, 'triangle', 0.07, 1.6); },
  whoosh() { tone(900, 0.25, 'sine', 0.05, 0.3); },
  fanfare(){ [523, 659, 784, 1047].forEach((f, i) => tone(f, 0.18, 'square', 0.06, 1, i * 0.1)); tone(1047, 0.5, 'triangle', 0.1, 1, 0.42); tone(1319, 0.5, 'triangle', 0.08, 1, 0.42); },
  click()  { tone(520, 0.05, 'triangle', 0.06, 1.3); }
};
