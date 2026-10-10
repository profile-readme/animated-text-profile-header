// SPDX-FileCopyrightText: 2026 Aesthetic Vulpes (github.com/didvc)
// SPDX-License-Identifier: AGPL-3.0-only
// Parse /text/<token>/<token>/... into validated options. Only whitelisted keywords are accepted,
// plus one piece of custom text: /text/say/<text> (case kept) or the ?text= query parameter.
import { PHRASES } from "./content.js";

export const EFFECTS = ["none", "typing", "wave", "fade", "glow"];
export const FONTS = ["sans", "serif", "mono"];
export const THEMES = ["auto", "light", "dark", "transparent"];
const bounded = (v, min, max) => Math.min(max, Math.max(min, v));
export const MAX_CUSTOM = 60;

// Clean custom text: decode, drop control characters, collapse spaces, refuse links and overlong text.
export function cleanCustom(raw) {
  let t = String(raw ?? "");
  if (/%[0-9a-f]{2}/i.test(t)) { try { t = decodeURIComponent(t); } catch { return { error: "text is not valid" }; } }
  t = t.replace(/[\p{Cc}\p{Cf}\p{Zl}\p{Zp}]/gu, "").replace(/\s+/g, " ").trim();
  if (!t) return { error: "text is empty" };
  if ([...t].length > MAX_CUSTOM) return { error: `text is longer than ${MAX_CUSTOM} characters` };
  if (/(https?:\/\/|www\.|\w\.(com|net|org|io|dev|xyz|ru|cn)\b)/i.test(t)) return { error: "links are not allowed" };
  return { text: t };
}

export function parseOptions(segments, query = null) {
  const opts = {
    kind: "phrase", phrase: "hello", custom: null, pick: "random", effect: "none", font: "sans", color: null, paint: null,
    textCase: null, size: 40, underline: false, sparkles: false, card: false, border: 0, theme: "auto", speed: 100, still: false,
  };
  if (segments.length > 16 || segments.join("/").length > 512) return { error: "too many options" };
  for (let i = 0; i < segments.length; i++) {
    let t = String(segments[i]).toLowerCase();
    if (i === segments.length - 1) t = t.replace(/\.svg$/, "");
    if (!t) continue;
    let m;
    if (t === "say") {
      i++;
      const raw = String(segments[i] ?? "");
      const c = cleanCustom(i === segments.length - 1 ? raw.replace(/\.svg$/i, "") : raw);
      if (c.error) return { error: c.error };
      opts.kind = "custom"; opts.custom = c.text;
    }
    else if (t in PHRASES) { opts.kind = "phrase"; opts.phrase = t; }
    else if (t === "status" || t === "quote") opts.kind = t;
    else if (t === "daily" || t === "random") opts.pick = t;
    else if (EFFECTS.includes(t)) opts.effect = t;
    else if (FONTS.includes(t)) opts.font = t;
    else if (t === "gradient" || t === "rainbow") opts.paint = t;
    else if (t === "upper" || t === "lower") opts.textCase = t;
    else if (t === "underline") opts.underline = true;
    else if (t === "sparkles") opts.sparkles = true;
    else if (t === "card") opts.card = true;
    else if (t === "static") opts.still = true;
    else if (THEMES.includes(t)) opts.theme = t;
    else if (t === "px") opts.px = true;
    else if ((m = t.match(/^size-(\d{1,4}(?:\.\d{1,3})?)(rem)?$/))) opts.size = bounded(Math.round(+m[1] * (m[2] ? 16 : 1)), 16, 96);
    else if ((m = t.match(/^border-(\d{1,2})$/))) { opts.border = bounded(+m[1], 0, 8); opts.card = true; }
    else if ((m = t.match(/^speed-(\d{1,3})$/))) opts.speed = bounded(+m[1], 25, 400);
    else if ((m = t.match(/^color-([0-9a-f]{3}|[0-9a-f]{6})$/))) opts.color = m[1];
    else return { error: `unknown option #${i + 1}` };
  }
  if (query !== null && query !== "") {
    const c = cleanCustom(query);
    if (c.error) return { error: c.error };
    opts.kind = "custom"; opts.custom = c.text;
  }
  return { opts };
}
