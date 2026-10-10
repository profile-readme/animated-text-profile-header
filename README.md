# animated-text-profile-header

English | [日本語](README.ja.md) | [简体中文](README.zh-CN.md) | [繁體中文](README.zh-TW.md) | [Français](README.fr.md) | [Español](README.es.md)

Clean animated headings for your GitHub profile README, with your own words. Write any
short text in the URL, or use built-in words such as "About me" and "Projects". You can
also show a status you switch with one link, or a quote of the day. Pick an effect like
typing, wave, fade or glow, and paste one line of Markdown.

<p align="center">
  <img src="https://readmes.pages.dev/text/say/Hi%2C%20I'm%20a%20developer/typing/size-48" alt="Hi, I'm a developer, typed out letter by letter with a blinking caret">
</p>
<p align="center">
  <img src="https://readmes.pages.dev/text/about-me/wave/gradient" alt="About me in a gradient, letters moving in a wave">
  <img src="https://readmes.pages.dev/text/projects/underline/sparkles" alt="Projects with an underline and twinkling sparkles">
</p>

Every heading above is a live SVG made from real text. Open the
[help page](https://readmes.pages.dev/text/help) to try every option with a live preview.

Keywords: animated text, GitHub profile README header, typing SVG, typing animation, wave
text, gradient text, README heading, section title, status badge, availability status,
quote of the day, profile decoration, Cloudflare Pages Functions.

## Quick start

Write your own text after `say/` and paste the line into your profile `README.md`, the
repository named after your username:

```markdown
![Hi, I'm Aki](https://readmes.pages.dev/text/say/Hi%2C%20I'm%20Aki/wave)
```

Spaces are written as `%20` and commas as `%2C`, the usual way of putting text in a web
address. The builder on the help page does this encoding for you. If you prefer, the same
text also works as a query, as in `/text/wave?text=Hi%20there`.

Custom text can be up to 60 characters long and may use any language. Links such as
`https://` or `www.` are refused, so a heading cannot be turned into an advertisement.

Built-in words save you the encoding for common section titles:

```markdown
![About me](https://readmes.pages.dev/text/about-me/wave)
```

Use them as section titles throughout your README:

```markdown
![Projects](https://readmes.pages.dev/text/projects/underline)
...
![Contact](https://readmes.pages.dev/text/contact/underline)
```

Center a heading with HTML if you prefer:

```html
<p align="center">
  <img src="https://readmes.pages.dev/text/hello/typing/size-56" alt="Hello!">
</p>
```

## Why images for headings

Markdown headings are plain and look the same on every profile. Many people want a little
more character above their README, or between sections. Images are the only way to
add style, color and motion, because GitHub removes custom CSS and scripts from READMEs.

The trouble with most heading images is that they are screenshots or GIFs. They are heavy,
blurry on sharp screens, and stuck in one color, so they look wrong in dark mode. These
headings are different. They are SVG files that contain real text and a few lines of CSS.
They stay tiny and sharp at any size, follow the viewer's light or dark theme, and animate
without any script.

## The words

| Word | Text |
|---|---|
| `hello` | Hello! |
| `hi` | Hi there |
| `welcome` | Welcome |
| `hello-world` | Hello, world! |
| `about-me` | About me |
| `projects` | Projects |
| `featured` | Featured projects |
| `skills` | Skills |
| `tech-stack` | Tech stack |
| `tools` | Tools |
| `experience` | Experience |
| `open-source` | Open source |
| `now` | Now |
| `currently` | Currently |
| `learning` | Currently learning |
| `working-on` | Working on |
| `blog` | Blog |
| `stats` | Stats |
| `contact` | Contact |
| `get-in-touch` | Get in touch |
| `support` | Support my work |
| `thanks` | Thanks for visiting |

These cover the sections most profiles use, and they read a little more cleanly in your
README than encoded custom text. For anything else, use `say/` with your own words.

## Effects

Effects are chosen with a single option. Only one effect applies at a time, while colors
and decorations combine freely with any of them.

`typing` writes the text one letter at a time behind a blinking caret. It holds the full
line for a moment, then clears it and starts again. This is the classic terminal look and
works best for short greetings.

`wave` makes the letters bob up and down one after another, like a ripple passing through.
It is lively but easy to read, and suits playful profiles.

`fade` brings the letters in from left to right. After a short pause they fade away in
the same order. It is calm and elegant, and pairs well with the serif font.

`glow` keeps the text still and adds a soft halo behind it that slowly pulses. It looks
especially good in dark mode with an accent color.

`none` is the default and draws the text without motion, which is ideal for section titles
that should not distract.

`speed-N` changes the pace of any effect, from 25 to 400 percent. `static` switches off all
motion, including rainbow colors and sparkles.

## Status

`/text/status` shows your current status, such as "Open to work", "Busy" or "On vacation".
You choose it with a secret link instead of editing your README. Every profile and page
that shows the image updates within about a minute.

The demo at `readmes.pages.dev` shows a sample status so you can try the styles. To show
your own, deploy a copy as described below. Your list of statuses goes in a private
environment variable, one per line:

```
Writing code
In a meeting
Open to work
On vacation until Monday
```

Switching is a single request with your token:

```sh
curl https://my-badges.pages.dev/text/swap/<token>        # next status
curl https://my-badges.pages.dev/text/swap/<token>/4      # status number 4
curl https://my-badges.pages.dev/text/state/<token>       # see the list and the current one
```

A wrong token gets the same 404 as any missing page, so nobody can tell from the outside
whether switching is enabled. The status image is never cached, which means a change
reaches visitors almost immediately.

### Writing good statuses

A status works best when a visitor can act on it. "Open to work" invites a message, while
"On vacation until Monday" tells people when to expect a reply. Short statuses read better
than long ones, and a few words are usually enough.

Keep the list small and predictable. Five to ten entries cover most situations, and you
will remember their numbers, which makes switching with `/text/swap/<token>/<n>` quick.
Put the status you use most often first, because a fresh setup starts with entry number
one.

Avoid anything you would not want strangers to read, such as exact travel dates or the
address of an event. A profile is public, and so is everything the image shows.

## Quotes

`/text/quote` shows a line from a list. It picks a new one on every page view, or one per
day with `daily`. The demo uses a handful of short original lines. Your own copy reads
your list from a private environment variable, one quote per line.

Good quotes for a profile are short. A line of up to 60 characters fits nicely in a README,
and anything longer than 80 characters is cut. Credit authors when you quote someone, and
remember that a long quotation from a recent book may be protected by copyright.

### Random or daily

Random quotes change on every page view, which rewards visitors who come back often. Daily
quotes change once a day at midnight UTC, so everyone who visits on the same day sees the
same line. That makes daily the better choice when a quote sits next to other content and
should feel deliberate rather than accidental.

A list of thirty or so quotes with `daily` gives a month of variety before anything
repeats. Add new lines whenever you like; they appear the next time the list is read.

Quotes in the serif font at a modest size, around 22 to 28 pixels, read like a line from
a book and sit comfortably under a heading. The `fade` effect suits them well, since the
words arrive gently instead of all at once. For a calmer page, combine a daily quote with
`static` so it changes each day without moving.

## Designing a profile with headings

Start with one strong heading near your name, such as `hello` with the typing effect or
`welcome` with a wave. That sets the tone. Below it, use plain headings for each section,
like `about-me`, `projects` and `contact`, without motion. A page full of moving text
quickly becomes tiring to read.

Keep sizes consistent. A large greeting around 56 pixels with section titles around 28
to 32 pixels creates a clear hierarchy, much like a document with a title and chapters.

Match the font to the rest of your profile. The sans font is neutral and modern. Serif
suits writers and researchers, and mono fits a terminal or hacker look. Mixing fonts
rarely helps, so pick one and use it for every heading.

### Choosing colors

Leave the theme on `auto` unless you have a reason not to. The text then turns light on
dark backgrounds and dark on light ones, exactly like the rest of GitHub.

If you want color, pick one accent with `color-RRGGBB` and use it on every heading and on
underlines. The `gradient` and `rainbow` options are fun for a single eye-catching
greeting, but they work less well for every section title.

Check your choice in both light and dark mode before you settle on it. GitHub lets you
switch themes in your account settings, which is the quickest way to preview.

## Options

Options are path segments after `/text/`, in any order. A trailing `.svg` is allowed and
case does not matter. If you mistype something, the image becomes a small pink notice
naming the position of the unknown option.

| Option | Effect |
|---|---|
| `say/<text>` | Your own text, up to 60 characters, URL-encoded |
| `?text=...` | The same, as a query parameter |
| a word from the table | That heading (default `hello`) |
| `status`, `quote` | Your status or a quote instead of a word |
| `daily` | With `quote`, one line per day |
| `typing`, `wave`, `fade`, `glow`, `none` | Effect (default `none`) |
| `speed-N` | Effect speed in percent, 25 to 400 |
| `static` | No motion at all |
| `sans`, `serif`, `mono` | Font (default `sans`) |
| `size-N`, `size-Nrem` | Font size in pixels, 16 to 96 (default 40) |
| `px` | Pin exact pixels instead of rem (see below) |
| `color-RRGGBB` | Text and accent color in hex, without `#` |
| `gradient` | Orange to pink to lavender gradient |
| `rainbow` | Each letter in its own slowly cycling color |
| `upper`, `lower` | Change the letter case |
| `underline` | Rounded accent line under the text |
| `sparkles` | Twinkling sparkles around the text |
| `card` | Rounded card background |
| `border-N` | Card border in pixels, 0 to 8 |
| `auto`, `light`, `dark`, `transparent` | Theme (default `auto`) |

### Sizing in rem

Every heading is sized in rem, where 1rem is 16 pixels. With default browser settings it
looks exactly like a pixel size. When a reader has raised the default font size in their
browser, often to make text easier to read, the heading grows with it, just like the text
around it. You can also write sizes in rem, as in `size-2rem`, which matches a Markdown `#`
heading on GitHub. Add `px` when a heading must keep an exact pixel size.

## Recipes

| Look | URL |
|---|---|
| Terminal greeting | `https://readmes.pages.dev/text/hello-world/mono/typing` |
| Elegant section title | `https://readmes.pages.dev/text/experience/serif/fade` |
| Playful header | `https://readmes.pages.dev/text/welcome/wave/rainbow/sparkles` |
| Quiet divider title | `https://readmes.pages.dev/text/projects/underline/size-28` |
| Neon in dark mode | `https://readmes.pages.dev/text/now/glow/color-ff5d8f/dark/card` |
| Daily thought | `https://readmes.pages.dev/text/quote/daily/serif/size-24` |

## How it works

Each heading is drawn letter by letter. The server knows the width of every character in
the three font families, measured once from fonts that share their sizes with Arial,
Times New Roman and Courier New. It places each letter at an exact position. Because the
letters are separate, CSS can move, fade or color each one on its own timing. That is what
makes the typing, wave and fade effects possible without any script.

The fonts themselves come from each visitor's device. Windows has Arial and Times New
Roman, macOS has metric-compatible Helvetica and Times, and Linux usually ships the
Liberation fonts. All of them have the same character widths, so the spacing stays even
everywhere.

Text that is not plain English, such as Japanese, falls back to the visitor's system font.
The spacing for those characters is estimated, which works well for full-width scripts.

### Size and speed

A heading is usually between one and four kilobytes, far smaller than an animated GIF of
the same text. The typing effect is the largest, because it describes a step for every
letter, and it is still lighter than most icons. Pages with many headings load quickly
even on slow connections.

Built-in words are cached for a day, so repeat visits are instant. Statuses and random
quotes are never cached, because they must stay current, but they are generated in a few
milliseconds.

### Combining with other widgets

Headings pair naturally with the other widgets on the same site. A clock under a "Now"
heading tells visitors what time it is for you. An email badge below "Contact" gives
them a way to reach you without exposing your address as text. Small animated kaomoji can
sit beside a heading to add a little personality.

Keep the same accent color and theme across all of them, and the page will read as one
design rather than a collection of separate images.

## Accessibility

Each image carries its text as a title, and you should repeat the words in the alt text,
as in `![About me](...)`. Screen readers then announce the heading normally.

Visitors who have turned on "reduce motion" in their system see the finished text without
animation. Windows users get this when "Animation effects" is turned off in the
accessibility settings. The default colors meet WCAG AA contrast on GitHub's light and dark
backgrounds. Check custom colors in both themes, because a color that pops on white can
disappear on black.

Animated text can distract some readers. A good rule is one animated heading at the top
of a profile and plain or `static` headings for the sections below it.

## Run your own copy

Set up a copy when you want your own status and quotes, or extra words. It is free on
Cloudflare Pages and takes about ten minutes.

You need Node.js 20 or newer, `make`, and a free Cloudflare account. There is no
`npm install`, because the project has no dependencies.

1. Click "Use this template" on GitHub, create your repository, and clone it.
2. Put your own name and repository link in `site.config.json`.
3. Create the Pages project and a small key-value store for your status:

```sh
npx wrangler pages project create my-badges --production-branch production
npx wrangler kv namespace create text-state
```

4. Copy `wrangler.toml.example` to `wrangler.toml` and fill in your project name and the
   namespace id. The real `wrangler.toml` stays out of git.
5. Store your statuses and quotes (files named `STATUSES.txt` and `QUOTES.txt`, one entry
   per line) and a long random token as secrets:

```sh
for v in STATUSES QUOTES; do
  npx wrangler pages secret put "$v" --project-name my-badges < ~/private/"$v".txt
done
node -e "console.log(require('crypto').randomBytes(32).toString('base64url'))"
npx wrangler pages secret put TEXT_SWAP_TOKEN --project-name my-badges
```

6. Deploy with `make deploy PROJECT=my-badges`.

To add words, edit the list in `src/text/content.js`. Each entry maps the URL
name to the text that is drawn.

### Project layout

```
functions/text/         Pages Functions: heading, swap, state, help, agents
src/text/content.js     built-in words, demo statuses and quotes
src/text/render.js      letter layout, effects and decorations
src/text/handler.js     status, quotes, token links
src/text/pages.js       URL builder and agents guide
scripts/build-metrics.mjs  re-measure character widths (ImageMagick)
test/                   node:test unit tests
```

Everything lives under a `text` path, so this project can share one Pages project with
other badge apps without file names colliding.

## Web pages

| Path | What it is |
|---|---|
| `/text/help` | Examples, URL builder with live preview, option tables |
| `/text/agents` | Markdown guide for AI agents and tools |

The pages include Open Graph tags and schema.org JSON-LD, plus keyboard focus styles and a
skip link. Preview deployments are marked noindex automatically, and scripts are allowed
by hash only through a strict Content Security Policy.

## FAQ

### Can I write any text in the URL?

Yes, with `say/` followed by your text. It can be up to 60 characters in any language.
Links are refused, and control characters are removed. What you need your own copy for
is a status you switch with a link, or your own list of quotes.

### Why does the typing effect start over?

A heading on a profile is seen at different moments by different visitors. Looping makes
sure everyone sees the full line within a few seconds, whenever they arrive.

### My status did not change

Give it a minute, then refresh. Changes travel to every edge location within about sixty
seconds, and the image is never cached. If it still shows the old status, check the token
and look at `/text/state/<token>` to see which entry is live.

### Can I schedule a status change?

Not built in. You can send the swap request from any scheduler you already use, such as a
cron job or a calendar automation, since switching is a single web request. Keep the token
in that tool's secret storage rather than in a script you share.

### Do headings work in other languages?

Yes. Custom text can use Japanese, Chinese or other scripts. Those characters are drawn by
the visitor's system font with estimated spacing, which looks natural for full-width
scripts and slightly loose for some others.

### Can I use these outside GitHub?

Yes. Anywhere that can show an image URL works, including personal sites, documentation
and other code hosts.

## Troubleshooting

### The image shows "unknown option"

The notice gives the position of the segment it did not recognize, counting from the first
segment after `/text/`. Check the spelling against the word table and the options. Words
with two parts use a hyphen, as in `about-me`.

### Letters overlap or look unevenly spaced

This happens when a device lacks all of Arial, Helvetica and Liberation Sans, which is rare.
The browser then substitutes a font with different widths. Switching to `mono` fixes it,
because monospace fonts share one width for every letter.

### The animation does not play

Check whether "reduce motion" is on in your system settings. On Windows it is the
"Animation effects" switch in the accessibility settings. Some Markdown previews in editors
also show only a still frame, while GitHub itself plays the animation.

### The status link returns 503

The token was right, but the deployment has no key-value store. Add the `TEXT_STATE`
binding to `wrangler.toml` and deploy again.

## Privacy

The demo stores nothing. There are no uploads, forms, cookies or analytics. Each image is
computed from the URL path alone.

In your own copy, the only stored value is the number of your current status. Your
statuses, quotes and token live in encrypted Cloudflare secrets and never appear in the
repository. Remember that whatever status or quote you show is public to everyone who
visits your profile.

On GitHub, images are fetched through GitHub's proxy, so the service normally never sees
the IP addresses of people viewing your profile. As with any website, Cloudflare may keep
standard request logs under its own [privacy policy](https://www.cloudflare.com/privacypolicy/).

## Disclaimer

The hosted demo at `readmes.pages.dev` is provided "as is" and free of charge, without
warranty of any kind, express or implied. That includes warranties of merchantability,
fitness for a particular purpose, availability and non-infringement. It may be
rate-limited, changed or taken offline at any time without notice. The authors are not
liable for any damages arising from its use.

The demo statuses and quotes are samples written for this project and are not statements
about anyone's actual availability.

This project is not affiliated with, endorsed by or sponsored by GitHub or Cloudflare. Font
names are mentioned only to describe compatibility, and all trademarks belong to their
owners.

Custom text is written by whoever builds the image address, not by this project. You are
responsible for the words you put in your own headings. Please do not use the service for
harassment, impersonation, spam or anything unlawful. The demo may block abusive text or
addresses without notice.

If you deploy your own copy, you alone are responsible for the text you publish, including
any quotes and their attribution. You are also responsible for keeping your token safe and
for following the terms of the services you use and the law where you live.

Nothing in this repository is legal advice. The license texts are the authoritative terms.

## License

The code is licensed under the [GNU AGPL-3.0](LICENSE). If you run a modified version as
a public service, you must offer its source to its users; keeping your template copy public
on GitHub satisfies this. The [NOTICE](NOTICE) file explains the font measurements and the
demo text.

---

<p align="center"><sub>© 2026 Aesthetic Vulpes (<a href="https://github.com/didvc">github.com/didvc</a>) · <a href="https://readmes.pages.dev/">readmes.pages.dev</a></sub></p>
