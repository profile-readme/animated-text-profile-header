// SPDX-FileCopyrightText: 2026 Aesthetic Vulpes (github.com/didvc)
// SPDX-License-Identifier: AGPL-3.0-only
import { test } from "node:test";
import assert from "node:assert/strict";
import { badge, swap, state, readLines } from "../src/text/handler.js";
import { PHRASES, DEMO_STATUSES, DEMO_QUOTES } from "../src/text/content.js";
import { parseOptions } from "../src/text/options.js";
import { advance } from "../src/text/render.js";
import { servePage } from "../src/text/pages.js";

const TOKEN = "t".repeat(40);
class MemoryKV { constructor() { this.m = new Map(); } async get(k) { return this.m.get(k) ?? null; } async put(k, v) { this.m.set(k, String(v)); } }
const get = async (path, env = {}, ns, now) => {
  const res = await badge("GET", env, path.split("/").filter(Boolean), ns, now);
  return { res, body: await res.text() };
};
const visible = (body) => [...body.matchAll(/<text class="l l\d+"[^>]*>([^<]*)<\/text>/g)].map((m) => m[1]).join("");

test("phrases render letter by letter at measured positions", async () => {
  const { res, body } = await get("about-me");
  assert.equal(visible(body), "Aboutme");
  assert.match(res.headers.get("cache-control"), /max-age=86400/);
  const xs = [...body.matchAll(/<text class="l l\d+" x="([\d.]+)"/g)].map((m) => +m[1]);
  assert.ok(Math.abs(xs[1] - xs[0] - advance("A", "sans") * 40) < 0.2, "advance of A");
  assert.equal(advance("a", "sans"), 0.556);
  for (const k of Object.keys(PHRASES)) assert.ok(!/NaN|undefined/.test((await get(k)).body), k);
});

test("effects produce their animations and respect reduced motion", async () => {
  assert.match((await get("hello/wave")).body, /@keyframes wv/);
  assert.match((await get("hello/fade")).body, /animation:fd [\d.]+s ease-in-out [\d.]+s infinite backwards/);
  const typing = (await get("hello/typing")).body;
  assert.match(typing, /@keyframes t5\{/);
  assert.match(typing, /class="cb"/);
  assert.match((await get("hello/glow")).body, /<filter id="bl"/);
  assert.match((await get("hello/rainbow")).body, /@keyframes rb/);
  assert.match(typing, /prefers-reduced-motion:reduce/);
  assert.ok(!(await get("hello/typing/static")).body.includes("@keyframes t0"));
});

test("status: demo list, owner list, swap, state and token isolation", async () => {
  assert.equal(visible((await get("status")).body), DEMO_STATUSES[0].replace(/ /g, ""));
  const kv = new MemoryKV();
  const env = { STATUSES: "Writing code\nIn a meeting\nOn holiday", TEXT_SWAP_TOKEN: TOKEN, TEXT_STATE: kv };
  assert.equal(visible((await get("status", env)).body), "Writingcode");
  assert.match(await (await swap("GET", env, [TOKEN])).text(), /status is now 2 of 3\n  1\. Writing code\n> 2\. In a meeting/);
  assert.equal(visible((await get("status", env)).body), "Inameeting");
  await swap("GET", env, [TOKEN, "3"]);
  assert.equal(visible((await get("status", env)).body), "Onholiday");
  assert.match((await get("status", env)).res.headers.get("cache-control"), /no-store/);
  assert.equal((await swap("GET", env, ["x".repeat(40)])).status, 404);
  assert.equal((await swap("GET", { ...env, TEXT_SWAP_TOKEN: "short" }, ["short"])).status, 404);
  assert.equal((await swap("HEAD", env, [TOKEN])).status, 405);
  assert.equal((await swap("GET", env, [TOKEN, "9"])).status, 400);
  assert.match(await (await state("GET", env, [TOKEN])).text(), /^status 3 of 3\n/);
  const ns = { prefix: "ME_", key: "me" };
  const env2 = { ...env, ME_STATUSES: "A\nB", ME_TEXT_SWAP_TOKEN: "u".repeat(40) };
  assert.equal((await swap("GET", env2, [TOKEN], ns)).status, 404, "default token cannot change an instance");
  await swap("GET", env2, ["u".repeat(40)], ns);
  assert.equal(kv.m.get("me:text-status"), "1");
  assert.equal(visible((await get("status", env2)).body), "Onholiday", "default status untouched");
});

test("quotes: owner list, daily stability, length limits", async () => {
  const env = { QUOTES: "First line\nSecond line" };
  for (let i = 0; i < 8; i++) assert.match(visible((await get("quote", env)).body), /^(Firstline|Secondline)$/);
  const a = await get("quote/daily", {}, {}, new Date("2026-10-10T01:00:00Z"));
  const b = await get("quote/daily", {}, {}, new Date("2026-10-10T23:00:00Z"));
  assert.equal(visible(a.body), visible(b.body));
  assert.ok(DEMO_QUOTES.map((q) => q.replace(/ /g, "")).includes(visible(a.body)));
  assert.equal(readLines({ QUOTES: "x".repeat(500) }, "QUOTES", []).lines[0].length, 80);
  const esc = await get("quote", { QUOTES: "<b>&\"'" });
  assert.ok(!esc.body.includes("<b>"));
});

test("options and errors", async () => {
  assert.equal(parseOptions(["size-500"]).opts.size, 96);
  assert.equal(parseOptions(["border-2"]).opts.card, true);
  const bad = await get("hello/<script>");
  assert.equal(bad.res.headers.get("x-text-error"), "unknown option #2");
  assert.ok(!bad.body.includes("script"));
  assert.equal((await badge("POST", {}, [])).status, 405);
  for (const p of ["projects/serif/upper/underline/sparkles/card/dark", "thanks/mono/glow/border-4/size-96", "contact/wave/rainbow/speed-400/transparent"])
    assert.ok(!/NaN|undefined|Infinity/.test((await get(p)).body), p);
});

test("help and agents pages", async () => {
  const help = await servePage(new Request("https://readmes.pages.dev/text/help"), "help");
  const html = await help.text();
  assert.match(html, /<link rel="canonical" href="https:\/\/readmes\.pages\.dev\/text\/help">/);
  assert.match(help.headers.get("content-security-policy"), /script-src 'sha256-/);
  for (const img of html.matchAll(/<img [^>]*>/g)) assert.match(img[0], /alt="[^"]+"/);
  const md = await (await servePage(new Request("https://readmes.pages.dev/text/agents"), "agents")).text();
  assert.match(md, /Do not guess or brute-force tokens/);
});

test("custom text: path and query forms, case kept, guardrails", async () => {
  const a = await get("say/Hello%2C%20I'm%20Aki/wave/serif");
  assert.equal(visible(a.body), "Hello,I&#39;mAki");
  assert.match(a.body, /<title id="t">Hello, I&#39;m Aki<\/title>/);
  assert.match(a.res.headers.get("cache-control"), /max-age=86400/);
  assert.equal(visible((await get("say/Profile.svg")).body), "Profile");
  const q = await badge("GET", {}, ["typing"], {}, new Date(), "From the query");
  assert.equal(visible(await q.text()), "Fromthequery");
  assert.equal(visible((await get("say/こんにちは")).body), "こんにちは");
  for (const [bad, msg] of [["say/Visit%20https%3A%2F%2Fevil.example", "links are not allowed"], ["say/go%20to%20www.example", "links are not allowed"], [`say/${"x".repeat(61)}`, "text is longer than 60 characters"], ["say", "text is empty"], ["say/%E0%A4%A", "text is not valid"]]) {
    const r = await get(bad);
    assert.equal(r.res.headers.get("x-text-error"), msg, bad);
    assert.ok(!r.body.includes("evil") && !r.body.includes("xxxxxxxxxx"), "error badge must not echo the text");
  }
  const ctrl = await get("say/A%07B%E2%80%8BC");
  assert.equal(visible(ctrl.body), "ABC");
  assert.ok(!(await get("say/%3Cscript%3E")).body.includes("<script>"));
});

test("builder script keeps its regex escapes (letter s must survive)", async () => {
  const html = await (await servePage(new Request("https://readmes.pages.dev/text/help"), "help")).text();
  const js = html.match(/<script>([\s\S]*?)<\/script>\s*<\/body>/)[1];
  assert.ok(js.includes('replace(/\\s+/g," ")'), "whitespace regex is /\\s+/g");
  assert.ok(js.includes('replace(/[\\[\\]]/g,"")'), "bracket regex is /[\\[\\]]/g");
  new Function(js); // the served script must at least parse
});

test("rem sizing by default, px option, rem size tokens", async () => {
  assert.match((await get("hello")).body, /^<svg[^>]*width="[\d.]+rem" height="[\d.]+rem"/);
  assert.match((await get("hello/px")).body, /^<svg[^>]*width="\d+" height="\d+" viewBox/);
  assert.equal(parseOptions(["size-2.5rem"]).opts.size, 40);
  assert.equal(parseOptions(["size-100rem"]).opts.size, 96);
});
