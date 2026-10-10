# animated-text-profile-header

[English](README.md) | [日本語](README.ja.md) | 简体中文 | [繁體中文](README.zh-TW.md) | [Français](README.fr.md) | [Español](README.es.md)

为你的 GitHub 个人主页 README 打造的简洁动态标题，可以写你自己的文字。在 URL 里写一段简短的文字，或者使用 "About me"、"Projects" 等内置词语。你还可以显示一个用链接切换的状态，或者每日一句。选择打字、波浪、淡入淡出或发光等效果，粘贴一行 Markdown 即可。

<p align="center">
  <img src="https://readmes.pages.dev/text/say/Hi%2C%20I'm%20a%20developer/typing/size-48" alt="在闪烁的光标后逐字打出 Hi, I'm a developer">
</p>
<p align="center">
  <img src="https://readmes.pages.dev/text/about-me/wave/gradient" alt="渐变色、字母如波浪般起伏的 About me">
  <img src="https://readmes.pages.dev/text/projects/underline/sparkles" alt="带下划线和闪烁星光的 Projects">
</p>

上面的每个标题都是由真实文字生成的 SVG。打开[帮助页](https://readmes.pages.dev/text/help)，可以用实时预览试遍所有选项。

面向 AI 代理和工具的 Markdown 指南位于 [readmes.pages.dev/text/agents](https://readmes.pages.dev/text/agents)。

关键词：动态文字、GitHub 个人主页 README 标题、打字 SVG、打字动画、波浪文字、渐变文字、README 标题、章节标题、状态徽章、在线状态、每日一句、主页装饰、Cloudflare Pages Functions。

## 快速开始

在 `say/` 后面写上你自己的文字，然后把这一行粘贴到你的个人主页 `README.md`（与用户名同名的仓库）中：

```markdown
![Hi, I'm Aki](https://readmes.pages.dev/text/say/Hi%2C%20I'm%20Aki/wave)
```

中文也可以直接使用：

```markdown
![你好](https://readmes.pages.dev/text/say/%E4%BD%A0%E5%A5%BD/wave)
```

空格写作 `%20`，逗号写作 `%2C`，这是在网址中放入文字的通用写法。帮助页上的生成器会自动帮你完成这种编码。如果你愿意，也可以把同样的文字作为查询参数传入，例如 `/text/wave?text=Hi%20there`。

自定义文字最多 60 个字符，可以使用任何语言。`https://` 或 `www.` 之类的链接会被拒绝，所以标题不会被变成广告。

对于常用的章节标题，内置词语可以省去编码的麻烦：

```markdown
![About me](https://readmes.pages.dev/text/about-me/wave)
```

可以把它们用作整个 README 的章节标题：

```markdown
![Projects](https://readmes.pages.dev/text/projects/underline)
...
![Contact](https://readmes.pages.dev/text/contact/underline)
```

如果想居中，可以使用 HTML：

```html
<p align="center">
  <img src="https://readmes.pages.dev/text/hello/typing/size-56" alt="Hello!">
</p>
```

## 为什么用图片做标题

Markdown 标题很朴素，在每个主页上看起来都一样。很多人希望在 README 开头或章节之间多一点个性。GitHub 会从 README 中移除自定义 CSS 和脚本，所以想加入样式、颜色和动画，只能使用图片。

问题在于，大多数标题图片都是截图或 GIF。它们体积大，在高清屏幕上发糊，颜色还是固定的，所以在深色模式下显得格格不入。这些标题不一样。它们是包含真实文字和几行 CSS 的 SVG 文件，在任何尺寸下都小巧清晰，跟随访客的浅色或深色主题，而且无需任何脚本就能动起来。

## 内置词语

| 词语 | 显示的文字 |
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

这些覆盖了大多数主页会用到的章节，而且在 README 中比编码后的自定义文字更易读一些。其他内容请用 `say/` 写你自己的文字。

## 效果

效果通过一个选项来选择。同一时间只能使用一种效果，但颜色和装饰可以与任何效果自由组合。

`typing` 会在闪烁的光标后一个字一个字地打出文字。完整的一行显示片刻后清空，然后重新开始。这是经典的终端风格，最适合简短的问候。

`wave` 让字母依次上下起伏，就像一道涟漪穿过。它很活泼，却依然易读，适合俏皮的主页。

`fade` 让字母从左到右逐个浮现。短暂停顿后，再按同样的顺序淡出。它沉静而优雅，和衬线字体很搭。

`glow` 让文字保持不动，在后面加一圈缓缓脉动的柔光。在深色模式下配合强调色尤其好看。

`none` 是默认值，绘制没有动画的文字，非常适合不应分散注意力的章节标题。

`speed-N` 可以把任何效果的速度调整到 25% 到 400%。`static` 会关闭所有动画，包括彩虹色和星光。

## 状态

`/text/status` 会显示你当前的状态，比如 "Open to work"、"Busy" 或 "On vacation"。你通过一个秘密链接来选择状态，而不必编辑 README。所有显示这张图片的主页和页面大约一分钟内就会更新。

`readmes.pages.dev` 上的演示显示的是示例状态，方便你试用各种样式。如果想显示你自己的状态，请按下文说明部署一份副本。你的状态列表放在一个私密的环境变量中，每行一条：

```
Writing code
In a meeting
Open to work
On vacation until Monday
```

切换只需带上令牌发送一次请求：

```sh
curl https://my-badges.pages.dev/text/swap/<token>        # 下一个状态
curl https://my-badges.pages.dev/text/swap/<token>/4      # 第 4 个状态
curl https://my-badges.pages.dev/text/state/<token>       # 查看列表和当前状态
```

错误的令牌会得到和任何不存在的页面一样的 404，所以从外部无法判断是否启用了切换功能。状态图片从不缓存，因此变更几乎会立即传达给访客。

### 怎样写好状态

状态最好能让访客据此采取行动。"Open to work" 是在邀请联系，而 "On vacation until Monday" 告诉人们何时可以期待回复。短的状态比长的更易读，通常几个词就够了。

让列表保持精简、可预期。五到十条就能覆盖大多数情况，你也能记住它们的编号，用 `/text/swap/<token>/<n>` 切换起来很快。新部署时从第一条开始，所以请把最常用的状态放在最前面。

不要写任何你不希望陌生人看到的内容，比如具体的出行日期或活动地址。主页是公开的，图片中显示的一切也是公开的。

## 每日一句

`/text/quote` 会从一个列表中显示一行文字。它每次打开页面都会挑一句新的，加上 `daily` 则每天一句。演示使用了几句简短的原创句子。在你自己的副本中，它会从一个私密的环境变量中读取你的列表，每行一句。

适合放在主页上的句子都很短。60 个字符以内的一行能很好地放进 README，超过 80 个字符的部分会被截断。引用他人的话时请注明作者，并记住近期书籍中的长段引文可能受版权保护。

### 随机还是每日

随机句子每次打开页面都会变化，能给经常回访的人一点小惊喜。每日句子在 UTC 午夜每天更换一次，所以同一天来访的人看到的都是同一句。如果句子放在其他内容旁边，应该显得是有意挑选而不是偶然出现，那么每日模式更合适。

准备三十句左右再配上 `daily`，一个月内都不会重复。你可以随时添加新句子，下次读取列表时就会出现。

用衬线字体、22 到 28 像素左右的适中字号来显示句子，读起来就像书中的一行，能舒服地放在标题下方。`fade` 效果很适合它们，因为文字会温柔地出现，而不是一下子全部蹦出来。如果想要更安静的页面，可以把每日一句和 `static` 组合起来，让它每天更换但不动。

## 用标题设计主页

从名字旁边一个醒目的标题开始，比如带打字效果的 `hello`，或带波浪效果的 `welcome`，这样就定下了基调。在它下面，每个章节使用不带动画的普通标题，比如 `about-me`、`projects` 和 `contact`。满是动态文字的页面很快就会让人读得疲惫。

保持尺寸一致。56 像素左右的大号问候语，搭配 28 到 32 像素左右的章节标题，就能形成清晰的层次，就像一篇有标题和章节的文档。

让字体和主页的其他部分相配。sans 中性而现代，serif 适合写作者和研究者，mono 则契合终端或黑客风格。混用字体很少有好处，所以挑一种字体用在所有标题上。

### 选择颜色

除非有特别的理由，否则请把主题保持为 `auto`。这样文字在深色背景上是浅色的，在浅色背景上是深色的，和 GitHub 的其他部分完全一致。

如果想要颜色，就用 `color-RRGGBB` 选一个强调色，用在所有标题和下划线上。`gradient` 和 `rainbow` 用在一个吸睛的问候语上很有趣，但不太适合每个章节标题。

确定之前，请在浅色和深色模式下都检查一下。GitHub 可以在账户设置中切换主题，这是最快的预览方式。

## 选项

选项是写在 `/text/` 之后的路径片段，顺序任意。末尾可以加 `.svg`，不区分大小写。如果写错了，图片会变成一个粉色的小提示，指出未知选项的位置。

| 选项 | 效果 |
|---|---|
| `say/<text>` | 你自己的文字，最多 60 个字符，需 URL 编码 |
| `?text=...` | 同上，以查询参数的形式 |
| 表格中的词语 | 对应的标题（默认 `hello`） |
| `status`、`quote` | 用你的状态或一句话代替词语 |
| `daily` | 与 `quote` 一起使用，每天一句 |
| `typing`、`wave`、`fade`、`glow`、`none` | 效果（默认 `none`） |
| `speed-N` | 效果速度（百分比），25 到 400 |
| `static` | 完全不动 |
| `sans`、`serif`、`mono` | 字体（默认 `sans`） |
| `size-N`、`size-Nrem` | 字号（像素），16 到 96（默认 40） |
| `px` | 固定为精确像素而不是 rem（见下文） |
| `color-RRGGBB` | 文字和强调色的十六进制值，不带 `#` |
| `warm` | 使用 readmes 的暖色配色，而不是 GitHub 自身的文字颜色（默认） |
| `gradient` | 从橙色到粉色再到薰衣草紫的渐变 |
| `rainbow` | 每个字母一种颜色，并缓慢变化 |
| `upper`、`lower` | 转换大小写 |
| `underline` | 文字下方的圆角强调线 |
| `sparkles` | 文字周围闪烁的星光 |
| `card` | 圆角卡片背景 |
| `border-N` | 卡片边框（像素），0 到 8 |
| `auto`、`light`、`dark`、`transparent` | 主题（默认 `auto`） |

### 以 rem 为单位的尺寸

每个标题都以 rem 为单位设定尺寸，1rem 等于 16 像素。在浏览器默认设置下，它看起来和像素尺寸完全一样。当读者为了更容易阅读而调大了浏览器的默认字号时，标题也会像周围的文字一样随之放大。你也可以直接用 rem 书写尺寸，例如 `size-2rem`，这与 GitHub 上 Markdown 的 `#` 标题大小相同。如果标题必须保持精确的像素尺寸，请加上 `px`。

## 搭配示例

| 风格 | URL |
|---|---|
| 终端风问候 | `https://readmes.pages.dev/text/hello-world/mono/typing` |
| 优雅的章节标题 | `https://readmes.pages.dev/text/experience/serif/fade` |
| 活泼的页眉 | `https://readmes.pages.dev/text/welcome/wave/rainbow/sparkles` |
| 低调的分隔标题 | `https://readmes.pages.dev/text/projects/underline/size-28` |
| 深色模式下的霓虹 | `https://readmes.pages.dev/text/now/glow/color-ff5d8f/dark/card` |
| 每日一句 | `https://readmes.pages.dev/text/quote/daily/serif/size-24` |

## 工作原理

每个标题都是逐个字母绘制的。服务器知道三种字体系列中每个字符的宽度，这些宽度是从与 Arial、Times New Roman 和 Courier New 尺寸相同的字体中一次性测量出来的。服务器据此把每个字母放在精确的位置上。因为字母是分开的，CSS 就能按各自的节奏移动、淡出或给每个字母上色。正因如此，无需任何脚本就能实现打字、波浪和淡入淡出效果。

字体本身来自每位访客的设备。Windows 有 Arial 和 Times New Roman，macOS 有尺寸兼容的 Helvetica 和 Times，Linux 通常自带 Liberation 字体。它们的字符宽度都相同，所以间距在任何地方都很均匀。

日文等非英文字符会使用访客的系统字体显示。这些字符的间距是估算的，对于全角文字效果很好。

### 体积与速度

一个标题通常只有 1 到 4 KB，比同样文字的动态 GIF 小得多。打字效果最大，因为它要描述每个字母的每一步，但仍比大多数图标更轻。即使标题很多，页面在慢速网络下也能快速加载。

内置词语会缓存一天，所以再次访问时瞬间就能显示。状态和随机句子必须保持最新，所以从不缓存，但它们只需几毫秒就能生成。

### 与其他小组件搭配

标题可以和同一站点的其他小组件自然搭配。在 "Now" 标题下放一个时钟，访客就知道你那里现在几点。在 "Contact" 下放一个邮件徽章，就能提供联系方式，又不会把地址以文字形式暴露出来。在标题旁边放一个小小的动态颜文字，能增添一点个性。

让它们都使用相同的强调色和主题，页面看起来就会是一个整体设计，而不是一堆零散的图片。

## 无障碍

每张图片都把文字作为标题保存，你也应该在替代文本中重复这些文字，例如 `![About me](...)`。这样屏幕阅读器就能正常朗读标题。

在系统中开启了"减少动态效果"的访客，会看到不带动画的完整文字。在 Windows 上，关闭辅助功能设置中的"动画效果"就会这样。默认颜色在 GitHub 的浅色和深色背景上都满足 WCAG AA 对比度。在白底上醒目的颜色在黑底上可能会消失，所以请在两种主题下检查你自定义的颜色。

动态文字可能会让一些读者分心。比较好的做法是：主页顶部放一个动态标题，下面各章节使用普通标题或 `static` 标题。

## 运行你自己的副本

当你想使用自己的状态和句子，或者添加额外的词语时，就部署一份副本吧。在 Cloudflare Pages 上是免费的，大约十分钟就能完成。

你需要 Node.js 20 或更新版本、`make`，以及一个免费的 Cloudflare 账户。项目没有任何依赖，所以不需要 `npm install`。

1. 在 GitHub 上点击 "Use this template"，创建你的仓库并克隆它。
2. 在 `site.config.json` 中填入你自己的名字和仓库链接。
3. 创建 Pages 项目，以及一个用于保存状态的小型键值存储：

```sh
npx wrangler pages project create my-badges --production-branch production
npx wrangler kv namespace create text-state
```

4. 把 `wrangler.toml.example` 复制为 `wrangler.toml`，填入你的项目名称和命名空间 ID。真正的 `wrangler.toml` 不会进入 Git。
5. 把你的状态和句子（名为 `STATUSES.txt` 和 `QUOTES.txt` 的文件，每行一条），以及一个很长的随机令牌保存为密钥：

```sh
for v in STATUSES QUOTES; do
  npx wrangler pages secret put "$v" --project-name my-badges < ~/private/"$v".txt
done
node -e "console.log(require('crypto').randomBytes(32).toString('base64url'))"
npx wrangler pages secret put TEXT_SWAP_TOKEN --project-name my-badges
```

6. 用 `make deploy PROJECT=my-badges` 部署。

如果想添加词语，请编辑 `src/text/content.js` 中的列表。每一项都把 URL 中的名称对应到要绘制的文字。

### 项目结构

```
functions/text/         Pages Functions：标题、切换、状态、帮助、代理
src/text/content.js     内置词语、演示用的状态和句子
src/text/render.js      字母排版、效果和装饰
src/text/handler.js     状态、句子、令牌链接
src/text/pages.js       URL 生成器和代理指南
scripts/build-metrics.mjs  重新测量字符宽度（ImageMagick）
test/                   node:test 单元测试
```

所有内容都位于 `text` 路径下，所以这个项目可以和其他徽章应用共用一个 Pages 项目，而不会出现文件名冲突。

## 网页

| 路径 | 内容 |
|---|---|
| `/text/help` | 示例、带实时预览的 URL 生成器、选项表 |
| `/text/agents` | 面向 AI 代理和工具的 Markdown 指南 |

这些页面包含 Open Graph 标签和 schema.org JSON-LD，以及键盘焦点样式和跳转链接。预览部署会自动标记为 noindex，脚本只能通过严格的内容安全策略（CSP）按哈希值放行。

## 常见问题

### 我可以在 URL 中写任意文字吗？

可以，在 `say/` 后面写上你的文字即可。任何语言都可以，最多 60 个字符。链接会被拒绝，控制字符会被移除。只有当你想用链接切换状态，或使用自己的句子列表时，才需要部署自己的副本。

### 为什么打字效果会重新开始？

主页上的标题会在不同时刻被不同的访客看到。循环播放能确保无论何时到来，每个人都能在几秒内看到完整的一行。

### 我的状态没有变化

等一分钟后再刷新。变更大约六十秒内会传到所有边缘节点，而且图片从不缓存。如果仍显示旧状态，请检查令牌，并查看 `/text/state/<token>` 确认哪一条是当前状态。

### 可以定时切换状态吗？

没有内置这项功能。切换只是一次网络请求，所以你可以从任何常用的调度工具发送，比如 cron 任务或日历自动化。请把令牌存放在该工具的密钥存储中，而不是放在会与他人共享的脚本里。

### 标题可以用其他语言吗？

可以。自定义文字可以使用中文、日文等文字。这些字符会用访客的系统字体、按估算的间距绘制，全角文字看起来很自然，部分其他文字的间距会略显宽松。

### 在 GitHub 以外也能用吗？

可以。任何能显示图片 URL 的地方都能用，包括个人网站、文档和其他代码托管平台。

## 故障排除

### 图片显示 "unknown option"

提示会给出无法识别的片段的位置，从 `/text/` 之后的第一个片段开始数。请对照词语表和选项检查拼写。由两个词组成的词语用连字符连接，例如 `about-me`。

### 字母重叠或间距不均

当设备上 Arial、Helvetica 和 Liberation Sans 都没有时就会出现这种情况，不过很少见。这时浏览器会用宽度不同的字体代替。改用 `mono` 就能解决，因为等宽字体中每个字母的宽度都相同。

### 动画不播放

检查系统设置中是否开启了"减少动态效果"。在 Windows 上，它是辅助功能设置中的"动画效果"开关。编辑器里的某些 Markdown 预览也只显示静态画面，而 GitHub 本身会播放动画。

### 状态链接返回 503

令牌是正确的，但部署没有键值存储。请在 `wrangler.toml` 中添加 `TEXT_STATE` 绑定，然后重新部署。

## 隐私

演示不存储任何东西。没有上传、表单、Cookie 或分析。每张图片只根据 URL 路径计算。

在你自己的副本中，唯一存储的值是当前状态的编号。你的状态、句子和令牌都保存在加密的 Cloudflare 密钥中，从不出现在仓库里。请记住，你显示的任何状态或句子对所有访问你主页的人都是公开的。

在 GitHub 上，图片是通过 GitHub 的代理获取的，所以服务通常看不到浏览你主页的人的 IP 地址。和任何网站一样，Cloudflare 可能会依据其自身的[隐私政策](https://www.cloudflare.com/privacypolicy/)保留标准的请求日志。

## 免责声明

本译文仅供参考。如果与英文版 README 存在任何差异，以英文版为准。

托管在 `readmes.pages.dev` 上的演示按"原样"免费提供，不附带任何明示或暗示的保证，包括适销性、特定用途适用性、可用性和不侵权的保证。它可能会在不另行通知的情况下被限流、更改或下线。作者不对因使用它而产生的任何损害承担责任。

演示中的状态和句子是为本项目编写的示例，并不代表任何人的实际情况。

本项目与 GitHub 或 Cloudflare 没有关联，也未获得它们的认可或赞助。提到字体名称只是为了说明兼容性，所有商标均归其各自所有者所有。

自定义文字是由构造图片地址的人写的，而不是本项目。你需要为自己标题中的文字负责。请不要将本服务用于骚扰、冒充、垃圾信息或任何违法用途。演示可能会在不另行通知的情况下屏蔽恶意的文字或地址。

如果你部署自己的副本，你需要独自为你发布的文字负责，包括任何引文及其出处标注。你同样需要妥善保管令牌，并遵守所使用服务的条款以及你所在地的法律。

本仓库中的任何内容都不构成法律建议。许可证文本才是具有约束力的条款。

## 许可证

代码以 [GNU AGPL-3.0](LICENSE) 授权。如果你将修改后的版本作为公共服务运行，就必须向其用户提供源代码；把你的模板副本公开在 GitHub 上即可满足这一要求。[NOTICE](NOTICE) 文件说明了字体测量值和演示文字。

---

<p align="center"><sub>© 2026 Aesthetic Vulpes (<a href="https://github.com/didvc">github.com/didvc</a>) · <a href="https://readmes.pages.dev/">readmes.pages.dev</a></sub></p>
