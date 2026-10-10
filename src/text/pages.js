// SPDX-FileCopyrightText: 2026 Aesthetic Vulpes (github.com/didvc)
// SPDX-License-Identifier: AGPL-3.0-only
// /text/help (examples + URL builder) and /text/agents (Markdown). Computed from the request URL only.
import { SITE } from "./site.generated.js";
import { PHRASES } from "./content.js";
import { esc } from "./render.js";

const APP = "text";
export const OPTION_GROUPS = [
  {
    title: "What to show",
    rows: [
      ["say/<text>", "Your own text, up to 60 characters, for example say/Hello%2C%20I'm%20Aki. Spaces are written %20. The query form ?text=... works too. Links are not allowed."],
      ["<word>", `A built-in header text: ${Object.keys(PHRASES).join(", ")}. Default hello.`],
      ["status", "The owner's current status, chosen with a secret link. The demo shows a sample status."],
      ["quote", "A random line from the owner's quote list. The demo uses sample lines."],
      ["daily", "With quote: one line per day instead of a new one on every load."],
    ],
  },
  {
    title: "Effect",
    rows: [
      ["none", "No animation (default)."],
      ["typing", "Letters appear one by one behind a blinking caret, then start over."],
      ["wave", "Letters bob up and down in a gentle wave."],
      ["fade", "Letters fade in from left to right, rest, then fade out."],
      ["glow", "A soft pulsing glow behind the text."],
      ["speed-N", "Animation speed in percent, 25 to 400 (default 100)."],
      ["static", "Turn every animation off, including rainbow and sparkles."],
    ],
  },
  {
    title: "Look",
    rows: [
      ["sans, serif, mono", "Font (default sans): Arial, Times New Roman or Courier New and their equivalents."],
      ["size-N", "Font size in pixels, 16 to 96 (default 40); also in rem, e.g. size-2rem (1rem = 16px)."],
      ["px", "Pin the image to exact pixels. By default it is sized in rem, so it grows with the reader's browser font size."],
      ["color-RRGGBB", "Text and accent color as 3 or 6 hex digits without #."],
      ["gradient", "Orange to pink to lavender gradient across the text."],
      ["rainbow", "Each letter in its own color, slowly cycling."],
      ["upper, lower", "Change the letter case."],
      ["underline", "Rounded accent line under the text."],
      ["sparkles", "Twinkling sparkles around the text."],
      ["card", "Rounded card background."],
      ["border-N", "Card border in pixels, 0 to 8; implies card."],
      ["auto, light, dark, transparent", "Theme (default auto)."],
    ],
  },
];

export const isPreviewHost = (host) => /^[^.]+\.[^.]+\.pages\.dev$/i.test(host);
const jsonLd = (d) => JSON.stringify(d).replace(/</g, "\\u003c");
const person = () => ({ "@type": "Person", name: SITE.copyrightHolder, url: SITE.copyrightUrl });

const CSS = `
:root{--bg:#fff8f1;--surface:#fff;--text:#3b2418;--muted:#6b4a38;--link:#9a4310;--accent:#f08a3c;--line:#ecd9c8;--code:#fbeee2;color-scheme:light dark}
@media (prefers-color-scheme:dark){:root{--bg:#1a1620;--surface:#241e2b;--text:#f6e7dc;--muted:#cdb8a8;--link:#ffb37a;--line:#3a3142;--code:#2c2533}}
*{box-sizing:border-box}body{margin:0;background:var(--bg);color:var(--text);font:16px/1.65 ui-rounded,"Hiragino Maru Gothic ProN","Nunito","Segoe UI",system-ui,sans-serif}
a{color:var(--link);text-underline-offset:.18em}:focus-visible{outline:3px solid var(--accent);outline-offset:2px;border-radius:4px}
.skip{position:absolute;left:-999px;top:8px;background:var(--surface);padding:8px 12px}.skip:focus{left:16px}
.wrap{max-width:960px;margin:0 auto;padding:0 16px}
header.site{border-bottom:1px solid var(--line)}header.site .wrap{display:flex;flex-wrap:wrap;gap:8px 20px;align-items:center;justify-content:space-between;padding-top:14px;padding-bottom:14px}
.brand{font-weight:800;font-size:1.15rem;text-decoration:none;color:var(--text)}nav ul{display:flex;flex-wrap:wrap;gap:4px 18px;list-style:none;margin:0;padding:0}
main{padding:28px 0 40px}h1{font-size:clamp(1.8rem,5vw,2.4rem);line-height:1.2;margin:.2em 0 .3em}h2{font-size:1.4rem;margin:2em 0 .5em}h3{font-size:1.1rem;margin:1.5em 0 .4em}
.lead{font-size:1.1rem;color:var(--muted);max-width:44em}.muted{color:var(--muted)}
.card{background:var(--surface);border:1px solid var(--line);border-radius:16px;padding:18px 20px;margin:18px 0}
code,pre,input[type=text],textarea{font-family:ui-monospace,SFMono-Regular,Menlo,Consolas,monospace;font-size:.92em}
code{background:var(--code);padding:.1em .35em;border-radius:6px;overflow-wrap:anywhere}pre{background:var(--code);padding:12px 14px;border-radius:10px;overflow-x:auto;margin:0}pre code{padding:0;background:none}
.table{overflow-x:auto}table{border-collapse:collapse;width:100%;margin:8px 0 16px}th,td{text-align:left;vertical-align:top;padding:8px 10px;border-bottom:1px solid var(--line)}
.btn{font:inherit;font-weight:700;color:#3b2418;background:var(--accent);border:0;border-radius:999px;padding:8px 16px;cursor:pointer}
.row{display:flex;flex-wrap:wrap;gap:10px;align-items:center;margin:10px 0}
form.builder{display:grid;grid-template-columns:repeat(auto-fit,minmax(180px,1fr));gap:12px 18px}
form.builder label{font-weight:700;display:block;margin-bottom:4px}
form.builder select,form.builder input[type=number]{font:inherit;width:100%;padding:6px 8px;border-radius:8px;border:1px solid var(--line);background:var(--surface);color:var(--text)}
.out input,.out textarea{width:100%;padding:8px;border-radius:8px;border:1px solid var(--line);background:var(--surface);color:var(--text)}
.gallery{display:grid;grid-template-columns:repeat(auto-fill,minmax(200px,1fr));gap:12px}.gallery figure{margin:0;background:var(--surface);border:1px solid var(--line);border-radius:12px;padding:10px;display:flex;flex-direction:column;gap:6px;align-items:flex-start}.gallery img{max-width:100%;height:auto}.gallery figcaption{font-size:.9rem}.btn.small{padding:4px 12px;font-size:.85rem}
.preview{min-height:80px;display:flex;align-items:center;justify-content:center;padding:12px;background:repeating-conic-gradient(var(--code) 0 25%,transparent 0 50%) 0 0/20px 20px;border-radius:12px}.preview img{max-width:100%;height:auto}
footer.site{border-top:1px solid var(--line);padding:24px 0 36px;color:var(--muted);font-size:.92rem}footer.site p{margin:.35em 0}
`;

const COPY_JS = `document.querySelectorAll("[data-copy]").forEach(function(b){b.addEventListener("click",function(){var el=document.getElementById(b.getAttribute("data-copy"));var s=document.getElementById(b.getAttribute("data-status"));navigator.clipboard.writeText(el.value).then(function(){s.textContent="Copied."},function(){s.textContent="Copy failed; select the text and copy it manually."})})});`;

function helpPage(origin, noindex) {
  const base = `${origin}/${APP}`;
  const opt = (list) => list.map(([v, l]) => `<option value="${esc(v)}">${esc(l)}</option>`).join("");
  const tables = OPTION_GROUPS.map(
    (g) => `<h3>${esc(g.title)}</h3><div class="table"><table><thead><tr><th scope="col">Option</th><th scope="col">Effect</th></tr></thead><tbody>${g.rows
      .map(([k, v]) => `<tr><td>${k.split(", ").map((t) => `<code>${esc(t)}</code>`).join(", ")}</td><td>${esc(v)}</td></tr>`)
      .join("")}</tbody></table></div>`,
  ).join("\n");
  const examples = [
    ["say/Hi%2C%20I'm%20a%20developer/typing", "Custom text typed out with a blinking caret"],
    ["hello/typing", "Hello typed out with a blinking caret"],
    ["about-me/wave/gradient", "About me in a gradient wave"],
    ["projects/underline/sparkles", "Projects with an underline and sparkles"],
    ["welcome/rainbow/serif", "Welcome in rainbow serif letters"],
    ["status/card/glow", "The owner's current status on a glowing card"],
    ["quote/serif/fade", "A quote fading in letter by letter"],
  ];
  const body = `
<h1>Animated text headers for your profile</h1>
<p class="lead">Clean, animated headings for GitHub profile READMEs. Write your own text, or use built-in words like "About me" and "Projects", your status, or a quote of the day. Choose an effect, copy one line of Markdown.</p>
<div class="gallery">
${examples.map(([p, alt]) => `<figure><img src="/${APP}/${p}" alt="${esc(alt)}"><figcaption><code>${esc(p)}</code></figcaption></figure>`).join("\n")}
</div>

<section aria-labelledby="builder">
<h2 id="builder">URL builder</h2>
<noscript><p>The builder needs JavaScript. The option tables below describe everything it does.</p></noscript>
<form class="builder card" id="b">
  <div><label for="custom">Custom text (up to 60 characters)</label><input id="custom" type="text" maxlength="60" placeholder="Hi, I'm ..." style="font:inherit;width:100%;padding:6px 8px;border-radius:8px;border:1px solid var(--line);background:var(--surface);color:var(--text)"></div>
  <div><label for="what">Or a built-in text</label><select id="what">${opt([...Object.entries(PHRASES).map(([k, v]) => [k, v]), ["status", "Your status"], ["quote", "A quote"]])}</select></div>
  <div><label for="effect">Effect</label><select id="effect">${opt([["", "none (default)"], ["typing", "typing"], ["wave", "wave"], ["fade", "fade"], ["glow", "glow"]])}</select></div>
  <div><label for="font">Font</label><select id="font">${opt([["", "sans (default)"], ["serif", "serif"], ["mono", "mono"]])}</select></div>
  <div><label for="paint">Color</label><select id="paint">${opt([["", "theme (default)"], ["gradient", "gradient"], ["rainbow", "rainbow"], ["color-f08a3c", "orange"], ["color-e91e63", "pink"], ["color-8e6cdf", "lavender"], ["color-2bb3a3", "mint"], ["color-4a90e2", "sky"]])}</select></div>
  <div><label for="size">Size (16 to 96 px)</label><input id="size" type="number" min="16" max="96" placeholder="40"></div>
  <div><label for="theme">Theme</label><select id="theme">${opt([["", "auto (default)"], ["light", "light"], ["dark", "dark"], ["transparent", "transparent"]])}</select></div>
  <div><label for="tcase">Case</label><select id="tcase">${opt([["", "as written"], ["upper", "UPPER"], ["lower", "lower"]])}</select></div>
  <div><label><input type="checkbox" id="underline"> Underline</label><label><input type="checkbox" id="sparkles"> Sparkles</label><label><input type="checkbox" id="card"> Card</label><label><input type="checkbox" id="daily"> Daily quote</label></div>
</form>
<div class="card out">
  <label for="url"><strong>Image URL</strong></label>
  <input id="url" type="text" readonly value="${esc(base)}">
  <div class="row"><button class="btn" type="button" data-copy="url" data-status="s1">Copy URL</button><span id="s1" role="status" aria-live="polite" class="muted"></span></div>
  <label for="md"><strong>Markdown</strong></label>
  <textarea id="md" rows="3" readonly>![Hello!](${esc(base)})</textarea>
  <div class="row"><button class="btn" type="button" data-copy="md" data-status="s2">Copy Markdown</button><span id="s2" role="status" aria-live="polite" class="muted"></span></div>
  <p><strong>Preview</strong></p>
  <div class="preview"><img id="pv" src="/${APP}" alt="Preview of the configured header"></div>
</div>
</section>

<section aria-labelledby="opts">
<h2 id="opts">All options</h2>
<p>Options are path segments after <code>${esc(base)}/</code>, in any order. A trailing <code>.svg</code> is allowed. An unknown option renders a small error badge.</p>
${tables}
</section>

<section aria-labelledby="own">
<h2 id="own">Your own status and quotes</h2>
<p>Custom text works right here with <code>say/</code>. To show a status you can switch with one link, or your own list of quotes, copy the <a href="${esc(SITE.repository)}">template repository</a> and deploy it to a free Cloudflare Pages project. Your statuses and quotes live in private environment variables, and a secret link switches your status, so you never have to edit your README.</p>
</section>
`;
  const ld = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebApplication", name: SITE.app, url: `${base}/help`,
        description: "Animated text header SVGs for GitHub profile READMEs, with owner status and quotes.",
        applicationCategory: "DeveloperApplication", operatingSystem: "Any", isAccessibleForFree: true,
        offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
        author: person(), copyrightHolder: person(), copyrightYear: SITE.copyrightYear, license: "https://www.gnu.org/licenses/agpl-3.0.html",
      },
      { "@type": "BreadcrumbList", itemListElement: [
        { "@type": "ListItem", position: 1, name: SITE.name, item: `${origin}/` },
        { "@type": "ListItem", position: 2, name: "Text headers", item: `${base}/help` },
      ] },
    ],
  };
  const labels = jsonLd({ ...PHRASES, status: "My status", quote: "Quote" });
  const script = `(function(){var base=${jsonLd(base)};var L=${labels};var f=document.getElementById("b");function v(id){return document.getElementById(id).value.trim()}function c(id){return document.getElementById(id).checked}function build(){var p=[];var cu=document.getElementById("custom").value.replace(/\\s+/g," ").trim();var w=v("what");if(cu){p.push("say",encodeURIComponent(cu))}else if(w&&w!=="hello")p.push(w);["effect","font","paint"].forEach(function(id){var x=v(id);if(x)p.push(x)});var s=parseInt(v("size"),10);if(!isNaN(s))p.push("size-"+Math.min(96,Math.max(16,s)));var t=v("theme");if(t)p.push(t);var k=v("tcase");if(k)p.push(k);["underline","sparkles","card"].forEach(function(id){if(c(id))p.push(id)});if(c("daily")&&w==="quote")p.push("daily");var url=base+(p.length?"/"+p.join("/"):"");document.getElementById("url").value=url;document.getElementById("md").value="!["+(cu?cu.replace(/[\\[\\]]/g,""):(L[w]||"Header"))+"]("+url+")";document.getElementById("pv").src=url.replace(base,"/${APP}")}f.addEventListener("input",build);f.addEventListener("change",build);f.addEventListener("submit",function(e){e.preventDefault()});build()})();` + COPY_JS;

  const title = "Animated text headers for GitHub profile READMEs";
  const description = "Typing, wave, fade and glow text headers for your GitHub profile: About me, Projects, Contact, your own status or a quote of the day. One Markdown line, no scripts.";
  const url = `${base}/help`;
  const holder = SITE.copyrightUrl.replace(/^https?:\/\//, "");
  const html = `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(title)}</title>
<meta name="description" content="${esc(description)}">
<meta name="author" content="${esc(SITE.copyrightHolder)}">
<meta name="color-scheme" content="light dark">
<meta name="theme-color" content="#fff8f1" media="(prefers-color-scheme: light)">
<meta name="theme-color" content="#1a1620" media="(prefers-color-scheme: dark)">
<meta name="robots" content="${noindex ? "noindex, nofollow" : "index, follow"}">
<link rel="canonical" href="${esc(url)}">
<link rel="icon" href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'%3E%3Cpath d='M8 6l18 14h12L56 6l-4 30c0 12-9 22-20 22S12 48 12 36z' fill='%23f08a3c'/%3E%3C/svg%3E">
<link rel="alternate" type="text/markdown" href="${esc(base)}/agents" title="Text headers for AI agents">
<meta property="og:type" content="website">
<meta property="og:site_name" content="${esc(SITE.name)}">
<meta property="og:title" content="${esc(title)}">
<meta property="og:description" content="${esc(description)}">
<meta property="og:url" content="${esc(url)}">
<meta name="twitter:card" content="summary">
<meta name="twitter:title" content="${esc(title)}">
<meta name="twitter:description" content="${esc(description)}">
<style>${CSS}</style>
<script type="application/ld+json">${jsonLd(ld)}</script>
</head>
<body>
<a class="skip" href="#main">Skip to content</a>
<header class="site"><div class="wrap">
<a class="brand" href="/">${esc(SITE.name)}</a>
<nav aria-label="Main"><ul><li><a href="/">Home</a></li><li><a href="/${APP}/help" aria-current="page">Text headers</a></li><li><a href="/${APP}/agents">For agents</a></li><li><a href="${esc(SITE.repository)}">Source</a></li></ul></nav>
</div></header>
<main id="main" class="wrap" tabindex="-1">
${body}
</main>
<footer class="site"><div class="wrap">
<p><small>&copy; ${esc(SITE.copyrightYear)} <a href="${esc(SITE.copyrightUrl)}" rel="author">${esc(SITE.copyrightHolder)} (${esc(holder)})</a>. Code under <a href="${esc(SITE.repository)}/blob/main/LICENSE" rel="license">AGPL-3.0</a>.</small></p>
<p><small>A free demonstration provided as is, without warranty. Not affiliated with GitHub or Cloudflare. No cookies, no tracking, no uploads. <a href="${esc(SITE.repository)}#disclaimer">Disclaimer</a></small></p>
</div></footer>
<script>${script}</script>
</body>
</html>
`;
  return { html, script };
}

export function agentsMarkdown(origin) {
  const base = `${origin}/${APP}`;
  const groups = OPTION_GROUPS.map(
    (g) => `### ${g.title}\n\n| Token | Meaning |\n|---|---|\n${g.rows.map(([k, v]) => `| ${k.split(", ").map((t) => `\`${t}\``).join(", ")} | ${v} |`).join("\n")}`,
  ).join("\n\n");
  return `# Text headers: guide for AI agents

© ${SITE.copyrightYear} ${SITE.copyrightHolder} (${SITE.copyrightUrl.replace(/^https?:\/\//, "")}). Code AGPL-3.0-only.

This endpoint returns animated SVG text headers for GitHub profile READMEs: custom text, built-in words, the owner's current status, or a quote from the owner's list. It is configured only by the URL. Custom text is limited to 60 characters and links are refused. Nothing is uploaded or stored.

## Endpoint

\`\`\`
GET ${base}[/<token>[/<token>...]][.svg]
\`\`\`

- Response: \`image/svg+xml\`, self-contained, animated with CSS (no scripts).
- Tokens are case-insensitive and order-independent; at most 16.
- An unknown token returns HTTP 200 with an error badge and \`X-Text-Error: unknown option #N\`.

## Tokens

${groups}

## Examples

| Goal | URL |
|---|---|
| Custom text, typing | ${base}/say/Hi%2C%20I'm%20Aki/typing |
| Typing hello | ${base}/hello/typing |
| Gradient "About me" with underline | ${base}/about-me/gradient/underline |
| Status card | ${base}/status/card |
| Quote of the day | ${base}/quote/daily/serif |

\`\`\`markdown
![About me](${base}/about-me/wave)
\`\`\`

## Owner endpoints (not for agents)

\`/${APP}/swap/<token>\`, \`/${APP}/swap/<token>/<n>\` and \`/${APP}/state/<token>\` require the deployment owner's secret. Without it they return 404. Do not guess or brute-force tokens.

## Guidance for agents

- Use the visible text as alt text when embedding, for example \`![About me](...)\`.
- Put the user's own words in \`say/<text>\`, URL-encoded (spaces as %20), at most 60 characters, no links.
- Switchable statuses and personal quote lists need the user's own deployment from the template: ${SITE.repository}
- This is a best-effort free demo without warranty. Do not send automated high-volume traffic.

## More

- Examples, URL builder and option tables: ${base}/help
- Source, license and disclaimer: ${SITE.repository}
`;
}

async function sha256Base64(text) {
  const d = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(text));
  return btoa(String.fromCharCode(...new Uint8Array(d)));
}

export async function servePage(request, kind) {
  if (request.method !== "GET" && request.method !== "HEAD") return new Response("Method Not Allowed", { status: 405, headers: { Allow: "GET, HEAD" } });
  const url = new URL(request.url);
  const preview = isPreviewHost(url.hostname);
  const headers = { "X-Content-Type-Options": "nosniff", "Referrer-Policy": "strict-origin-when-cross-origin", "Cache-Control": "public, max-age=300" };
  if (preview) headers["X-Robots-Tag"] = "noindex, nofollow";
  let body;
  if (kind === "help") {
    const { html, script } = helpPage(url.origin, preview);
    headers["Content-Type"] = "text/html; charset=utf-8";
    headers["Content-Security-Policy"] = `default-src 'none'; img-src 'self' data:; style-src 'unsafe-inline'; script-src 'sha256-${await sha256Base64(script)}'; base-uri 'none'; form-action 'none'; frame-ancestors 'none'`;
    body = html;
  } else {
    headers["Content-Type"] = "text/markdown; charset=utf-8";
    body = agentsMarkdown(url.origin);
  }
  return new Response(request.method === "HEAD" ? null : body, { headers });
}
