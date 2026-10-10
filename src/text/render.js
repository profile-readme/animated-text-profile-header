// SPDX-FileCopyrightText: 2026 Aesthetic Vulpes (github.com/didvc)
// SPDX-License-Identifier: AGPL-3.0-only
// Render a text header as SVG. Every letter is its own <text> element at a measured x position,
// so effects can move or fade letters one by one with plain CSS (no scripts).
import { SITE } from "./site.generated.js";
import { METRICS } from "./metrics.generated.js";

export const esc = (s) =>
  String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]);
const r1 = (n) => Math.round(n * 10) / 10;
// Root size in rem (1rem = 16px) so the whole image follows the reader's browser font-size
// setting; identical to pixels at the default 16px. The px option pins exact pixels instead.
const dim = (n, px) => (px ? String(n) : `${Math.round((n / 16) * 10000) / 10000}rem`);
const r2 = (n) => Math.round(n * 100) / 100;

const FAMILY = {
  sans: 'Arial,"Liberation Sans",Helvetica,"Noto Sans JP","Hiragino Sans",sans-serif',
  serif: '"Times New Roman","Liberation Serif",Times,"Noto Serif JP",serif',
  mono: '"Courier New","Liberation Mono",Courier,"Noto Sans Mono CJK JP",monospace',
};
// Default: GitHub's own text, canvas and border colors, so a heading reads like the README
// text around it. An image cannot inherit the page's colors, so these are matched exactly.
// "warm" keeps the readmes palette (cream and cocoa) for a softer look.
const PALETTES = {
  github: {
    light: { bg: "#ffffff", fg: "#1f2328", line: "#d1d9e0" },
    dark: { bg: "#0d1117", fg: "#f0f6fc", line: "#3d444d" },
  },
  warm: {
    light: { bg: "#fff8f1", fg: "#3b2418", line: "#ecd9c8" },
    dark: { bg: "#241e2b", fg: "#f6e7dc", line: "#3a3142" },
  },
};
const RAINBOW = ["#ff5d8f", "#f08a3c", "#e6b800", "#2bb3a3", "#4a90e2", "#8e6cdf"];
const STAR = "M0,-1 C0.12,-0.12 0.12,-0.12 1,0 C0.12,0.12 0.12,0.12 0,1 C-0.12,0.12 -0.12,0.12 -1,0 C-0.12,-0.12 -0.12,-0.12 0,-1Z";

export function advance(ch, font) {
  const c = ch.codePointAt(0);
  if (c >= 0x2e80 && c <= 0xffef) return 1;
  if (font === "mono") return 0.6;
  if (c >= 32 && c <= 126) return METRICS[font][c - 32];
  return 0.6;
}

export function renderText(text, opts) {
  const S = opts.size, b = opts.border, k = 100 / opts.speed;
  const chars = [...text];
  const xs = [];
  let w = 0;
  for (const ch of chars) { xs.push(w * S); w += advance(ch, opts.font); }
  const TW = w * S;
  const effect = opts.still ? "none" : opts.effect;
  const lift = effect === "wave" ? S * 0.25 : 0;
  const spark = opts.sparkles ? S * 0.35 : 0;
  const pad = opts.card ? S * 0.45 + b : S * 0.12;
  const x0 = r1(pad + spark), top = pad + lift + spark * 0.5;
  const base = r1(top + S * 0.86);
  const ul = opts.underline ? S * 0.28 : 0;
  const W = Math.ceil(x0 * 2 + TW + (effect === "typing" ? S * 0.15 : 0));
  const H = Math.ceil(top + S * 1.1 + ul + pad + spark * 0.5);
  const accent = "#" + (opts.color ?? "f08a3c");

  const vars = (p) => `--bg:${p.bg};--fg:${opts.color ? "#" + opts.color : p.fg};--line:${p.line};`;
  const PALETTE = PALETTES[opts.palette] ?? PALETTES.github;
  let css = `svg{${vars(opts.theme === "dark" ? PALETTE.dark : PALETTE.light)}}`;
  if (opts.theme === "auto" || opts.theme === "transparent") css += `@media (prefers-color-scheme:dark){svg{${vars(PALETTE.dark)}}}`;
  const fill = opts.paint === "gradient" ? "url(#g)" : "var(--fg)";
  css += `.l{font:700 ${S}px ${FAMILY[opts.font]};fill:${fill};white-space:pre}`;

  const anims = chars.map(() => []);
  let defs = "", extra = "";
  if (opts.paint === "gradient") {
    defs += `<linearGradient id="g" gradientUnits="userSpaceOnUse" x1="${x0}" y1="0" x2="${r1(x0 + TW)}" y2="0"><stop offset="0" stop-color="${accent}"/><stop offset=".5" stop-color="#e91e63"/><stop offset="1" stop-color="#8e6cdf"/></linearGradient>`;
  }
  if (opts.paint === "rainbow") {
    css += `@keyframes rb{${RAINBOW.map((c, i) => `${r1((i / RAINBOW.length) * 100)}%{fill:${c}}`).join("")}100%{fill:${RAINBOW[0]}}}`;
    chars.forEach((_, i) => {
      css += `.l${i}{fill:${RAINBOW[i % RAINBOW.length]}}`;
      if (!opts.still) anims[i].push(`rb ${r2(6 * k)}s linear ${r2(-i * 0.25 * k)}s infinite`);
    });
  }
  if (effect === "wave") {
    css += `@keyframes wv{0%,100%{transform:translateY(0)}50%{transform:translateY(-${r1(lift)}px)}}`;
    chars.forEach((_, i) => anims[i].push(`wv ${r2(1.6 * k)}s ease-in-out ${r2((i * 0.09 - 3) * k)}s infinite`));
  }
  if (effect === "fade") {
    const T = r2(Math.max(3.5, chars.length * 0.07 + 3) * k);
    css += "@keyframes fd{0%{opacity:0}12%{opacity:1}82%{opacity:1}96%,100%{opacity:0}}";
    chars.forEach((_, i) => anims[i].push(`fd ${T}s ease-in-out ${r2(i * 0.07 * k)}s infinite backwards`));
  }
  if (effect === "typing") {
    const step = 0.11 * k, hold = 2.6 * k, blank = 0.6 * k;
    const T = chars.length * step + hold + blank;
    const pct = (t) => r2((t / T) * 100);
    chars.forEach((_, i) => {
      css += `@keyframes t${i}{0%{opacity:0}${pct((i + 1) * step)}%{opacity:1}${pct(T - blank)}%{opacity:0}100%{opacity:0}}`;
      anims[i].push(`t${i} ${r2(T)}s step-end infinite`);
    });
    // caret: jumps to the end of each new letter, then rests at the end of the line
    const stops = chars.map((_, i) => `${pct(i * step)}%{transform:translateX(${r1(xs[i] ?? 0)}px)}`).join("");
    css += `@keyframes cm{${stops}${pct(chars.length * step)}%{transform:translateX(${r1(TW)}px)}100%{transform:translateX(${r1(TW)}px)}}`;
    css += `@keyframes cb{0%,49%{opacity:1}50%,100%{opacity:0}}.cm{animation:cm ${r2(T)}s step-end infinite}.cb{animation:cb 1s step-end infinite}`;
    extra += `<g class="cm"><rect class="cb" x="${r1(x0 + S * 0.03)}" y="${r1(base - S * 0.78)}" width="${r1(S * 0.07)}" height="${r1(S * 0.92)}" rx="${r1(S * 0.03)}" fill="${accent}"/></g>`;
  }
  chars.forEach((_, i) => { if (anims[i].length) css += `.l${i}{animation:${anims[i].join(",")}}`; });

  let glow = "";
  if (effect === "glow") {
    defs += `<filter id="bl" x="-20%" y="-50%" width="140%" height="200%"><feGaussianBlur stdDeviation="${r1(S * 0.12)}"/></filter>`;
    css += `@keyframes gl{0%,100%{opacity:.25}50%{opacity:.85}}.gw{animation:gl ${r2(2.6 * k)}s ease-in-out infinite}.gw text{fill:${accent}}`;
    glow = `<g class="gw" filter="url(#bl)">${chars.map((ch, i) => (ch === " " ? "" : `<text class="l" x="${r1(x0 + xs[i])}" y="${base}">${esc(ch)}</text>`)).join("")}</g>`;
  }
  if (opts.sparkles) {
    css += `@keyframes tw{0%,100%{opacity:.25;transform:scale(.6)}50%{opacity:1;transform:scale(1)}}.tw{transform-box:fill-box;transform-origin:center;animation:tw ${r2(2.4 * k)}s ease-in-out infinite}`;
    const spots = [[x0 - spark * 0.55, top + S * 0.15, 0.22], [x0 + TW + spark * 0.5, top + S * 0.05, 0.16], [x0 + TW + spark * 0.65, top + S * 0.75, 0.2], [x0 - spark * 0.4, top + S * 0.85, 0.13]];
    extra += spots.map(([x, y, s], i) => `<g transform="translate(${r1(x)} ${r1(y)}) scale(${r1(s * S)})"><path class="tw" style="animation-delay:${r2(i * 0.4 * k)}s" d="${STAR}" fill="${i % 2 ? accent : "#ffd56b"}"/></g>`).join("");
  }
  css += "@media (prefers-reduced-motion:reduce){.l,.gw,.cm,.cb,.tw{animation:none!important}.cm{display:none}}";

  let bg = "";
  if (opts.card) {
    const rad = r1(Math.min(W, H) * 0.22);
    if (b) bg += `<rect width="${W}" height="${H}" rx="${rad}" fill="${accent}"/>`;
    if (opts.theme !== "transparent" || b) bg += `<rect x="${b}" y="${b}" width="${W - 2 * b}" height="${H - 2 * b}" rx="${Math.max(0, rad - b)}" fill="var(--bg)"${b ? "" : ' stroke="var(--line)"'}/>`;
  }
  const underline = opts.underline ? `<line x1="${x0}" y1="${r1(base + S * 0.2)}" x2="${r1(x0 + TW)}" y2="${r1(base + S * 0.2)}" stroke="${opts.paint === "gradient" ? "url(#g)" : accent}" stroke-width="${r1(S * 0.08)}" stroke-linecap="round"/>` : "";
  const letters = chars.map((ch, i) => (ch === " " ? "" : `<text class="l l${i}" x="${r1(x0 + xs[i])}" y="${base}">${esc(ch)}</text>`)).join("");
  return (
    `<svg xmlns="http://www.w3.org/2000/svg" width="${dim(W, opts.px)}" height="${dim(H, opts.px)}" viewBox="0 0 ${W} ${H}" role="img" aria-labelledby="t">` +
    `<!-- (c) ${esc(SITE.copyrightYear)} ${esc(SITE.copyrightHolder)} (${esc(SITE.copyrightUrl)}) -->` +
    `<title id="t">${esc(text)}</title><style>${css}</style><defs>${defs}</defs>${bg}${glow}${underline}${letters}${extra}</svg>`
  );
}

export function renderNotice(message) {
  const text = `text: ${message} (see help)`;
  const W = Math.round(text.length * 7.2 + 24);
  return (
    `<svg xmlns="http://www.w3.org/2000/svg" width="${dim(W)}" height="${dim(28)}" viewBox="0 0 ${W} 28" role="img" aria-label="${esc(text)}">` +
    `<title>${esc(text)}</title><rect width="${W}" height="28" rx="14" fill="#fde2e4"/>` +
    `<text x="${W / 2}" y="18.5" text-anchor="middle" fill="#9b2c3a" font-family="ui-monospace,Menlo,Consolas,monospace" font-size="12">${esc(text)}</text></svg>`
  );
}
