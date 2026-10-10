// SPDX-FileCopyrightText: 2026 Aesthetic Vulpes (github.com/didvc)
// SPDX-License-Identifier: AGPL-3.0-only
// Header text, owner status and quotes. GET only; nothing from the request body is read.
// Statuses and quotes come from the owner's environment variables (STATUSES, QUOTES), one per line.
// The live status is chosen with a secret token: /text/swap/<token>[/<n>], checked at /text/state/<token>.
// Every endpoint takes an optional instance ns = { prefix, key } so one deployment can serve several owners.
import { PHRASES, DEMO_STATUSES, DEMO_QUOTES } from "./content.js";
import { parseOptions } from "./options.js";
import { renderText, renderNotice } from "./render.js";

const NO_STORE = "no-cache, no-store, max-age=0, must-revalidate";
const SVG_HEADERS = {
  "Content-Type": "image/svg+xml; charset=utf-8",
  "Content-Security-Policy": "default-src 'none'; style-src 'unsafe-inline'",
  "X-Content-Type-Options": "nosniff",
  "Access-Control-Allow-Origin": "*",
  "Referrer-Policy": "no-referrer",
};
const TEXT_HEADERS = { "Content-Type": "text/plain; charset=utf-8", "Cache-Control": NO_STORE, "X-Content-Type-Options": "nosniff", "X-Robots-Tag": "noindex, nofollow", "Referrer-Policy": "no-referrer" };
const MAX_LEN = 80, MAX_ITEMS = 200, MIN_TOKEN = 32;
const PREFIX_RE = /^[A-Z0-9_]{0,40}$/;

export function readLines(env, name, fallback, prefix = "") {
  if (!PREFIX_RE.test(prefix)) throw new Error("invalid instance prefix");
  const raw = env?.[prefix + name];
  if (typeof raw !== "string" || !raw.trim()) return { lines: fallback, demo: true };
  const lines = raw.split(/\r?\n/).map((l) => l.trim()).filter(Boolean).slice(0, MAX_ITEMS).map((l) => [...l].slice(0, MAX_LEN).join(""));
  return { lines, demo: false };
}
const keyFor = (ns) => (ns.key ? `${ns.key}:text-status` : "text-status");
async function statusIndex(env, n, ns) {
  if (env.TEXT_STATE) {
    const v = parseInt(await env.TEXT_STATE.get(keyFor(ns)), 10);
    if (!Number.isNaN(v)) return ((v % n) + n) % n;
  }
  const fixed = parseInt(env[(ns.prefix ?? "") + "STATUS_INDEX"] ?? "1", 10);
  return Number.isNaN(fixed) ? 0 : (((fixed - 1) % n) + n) % n;
}

export async function badge(method, env, segments, ns = {}, now = new Date(), query = null) {
  if (method !== "GET" && method !== "HEAD") return new Response("Method Not Allowed", { status: 405, headers: { Allow: "GET, HEAD" } });
  const out = (body, cache, extra = {}) => new Response(method === "HEAD" ? null : body, { headers: { ...SVG_HEADERS, "Cache-Control": cache, ...extra } });
  const { opts, error } = parseOptions(segments, query);
  if (error) return out(renderNotice(error), NO_STORE, { "X-Text-Error": error });

  let text, cache = "public, max-age=86400";
  if (opts.kind === "status") {
    const { lines } = readLines(env, "STATUSES", DEMO_STATUSES, ns.prefix);
    text = lines[await statusIndex(env, lines.length, ns)];
    cache = NO_STORE;
  } else if (opts.kind === "quote") {
    const { lines } = readLines(env, "QUOTES", DEMO_QUOTES, ns.prefix);
    if (opts.pick === "daily") {
      const day = Math.floor(now.getTime() / 86400000);
      text = lines[day % lines.length];
      cache = `public, max-age=${Math.max(60, Math.floor(((day + 1) * 86400000 - now.getTime()) / 1000))}`;
    } else {
      text = lines[crypto.getRandomValues(new Uint32Array(1))[0] % lines.length];
      cache = NO_STORE;
    }
  } else if (opts.kind === "custom") {
    text = opts.custom;
  } else {
    text = PHRASES[opts.phrase];
  }
  if (opts.textCase === "upper") text = text.toUpperCase();
  if (opts.textCase === "lower") text = text.toLowerCase();
  return out(renderText(text, opts), cache);
}

async function sha256(text) {
  return new Uint8Array(await crypto.subtle.digest("SHA-256", new TextEncoder().encode(text)));
}
async function tokenOk(env, given, ns) {
  const secret = env[(ns.prefix ?? "") + "TEXT_SWAP_TOKEN"];
  if (typeof secret !== "string" || secret.length < MIN_TOKEN || typeof given !== "string") return false;
  const [a, b] = await Promise.all([sha256(secret), sha256(given)]);
  let diff = 0;
  for (let i = 0; i < a.length; i++) diff |= a[i] ^ b[i];
  return diff === 0;
}
const notFound = () => new Response("Not Found", { status: 404, headers: TEXT_HEADERS });
const list = (lines, cur) => lines.map((l, i) => `${i === cur ? ">" : " "} ${i + 1}. ${l}`).join("\n") + "\n";

// GET /text/swap/<token>        next status
// GET /text/swap/<token>/<n>    status number n (1-based)
export async function swap(method, env, segments, ns = {}) {
  if (method !== "GET") return new Response("Method Not Allowed", { status: 405, headers: { Allow: "GET" } });
  const [token, target, ...rest] = segments;
  if (rest.length || !(await tokenOk(env, token, ns))) return notFound();
  const text = (status, body) => new Response(body, { status, headers: TEXT_HEADERS });
  const { lines } = readLines(env, "STATUSES", DEMO_STATUSES, ns.prefix);
  if (!env.TEXT_STATE) return text(503, "changing the status needs a KV namespace bound as TEXT_STATE\n");
  let next;
  if (target === undefined) next = ((await statusIndex(env, lines.length, ns)) + 1) % lines.length;
  else if (/^\d{1,4}$/.test(target) && +target >= 1 && +target <= lines.length) next = +target - 1;
  else return text(400, `target must be a number from 1 to ${lines.length}\n`);
  await env.TEXT_STATE.put(keyFor(ns), String(next));
  return text(200, `ok, status is now ${next + 1} of ${lines.length}\n${list(lines, next)}Changes reach every edge location within about a minute.\n`);
}

// GET /text/state/<token>
export async function state(method, env, segments, ns = {}) {
  if (method !== "GET") return new Response("Method Not Allowed", { status: 405, headers: { Allow: "GET" } });
  const [token, ...rest] = segments;
  if (rest.length || !(await tokenOk(env, token, ns))) return notFound();
  const { lines, demo } = readLines(env, "STATUSES", DEMO_STATUSES, ns.prefix);
  const cur = await statusIndex(env, lines.length, ns);
  return new Response(`status ${cur + 1} of ${lines.length}${demo ? " (demo list; set STATUSES to use your own)" : ""}\n${list(lines, cur)}`, { headers: TEXT_HEADERS });
}
