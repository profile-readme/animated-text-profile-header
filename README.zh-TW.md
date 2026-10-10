# animated-text-profile-header

[English](README.md) | [日本語](README.ja.md) | [简体中文](README.zh-CN.md) | 繁體中文 | [Français](README.fr.md) | [Español](README.es.md)

為你的 GitHub 個人首頁 README 打造的簡潔動態標題，可以寫你自己的文字。在 URL 裡寫一段簡短的文字，或使用 "About me"、"Projects" 等內建詞語。你還可以顯示一個用連結切換的狀態，或每日一句。選擇打字、波浪、淡入淡出或發光等效果，貼上一行 Markdown 就完成了。

<p align="center">
  <img src="https://readmes.pages.dev/text/say/Hi%2C%20I'm%20a%20developer/typing/size-48" alt="在閃爍的游標後逐字打出 Hi, I'm a developer">
</p>
<p align="center">
  <img src="https://readmes.pages.dev/text/about-me/wave/gradient" alt="漸層色、字母像波浪般起伏的 About me">
  <img src="https://readmes.pages.dev/text/projects/underline/sparkles" alt="帶底線和閃爍星光的 Projects">
</p>

上面的每個標題都是由真正的文字產生的 SVG。打開[說明頁](https://readmes.pages.dev/text/help)，可以用即時預覽試遍所有選項。

關鍵字：動態文字、GitHub 個人首頁 README 標題、打字 SVG、打字動畫、波浪文字、漸層文字、README 標題、章節標題、狀態徽章、上線狀態、每日一句、首頁裝飾、Cloudflare Pages Functions。

## 快速開始

在 `say/` 後面寫上你自己的文字，然後把這一行貼到你的個人首頁 `README.md`（與使用者名稱同名的儲存庫）中：

```markdown
![Hi, I'm Aki](https://readmes.pages.dev/text/say/Hi%2C%20I'm%20Aki/wave)
```

中文也可以直接使用：

```markdown
![你好](https://readmes.pages.dev/text/say/%E4%BD%A0%E5%A5%BD/wave)
```

空格寫作 `%20`，逗號寫作 `%2C`，這是在網址中放入文字的通用寫法。說明頁上的產生器會自動幫你完成這種編碼。如果你願意，也可以把同樣的文字當作查詢參數傳入，例如 `/text/wave?text=Hi%20there`。

自訂文字最多 60 個字元，可以使用任何語言。`https://` 或 `www.` 之類的連結會被拒絕，所以標題不會被變成廣告。

對於常用的章節標題，內建詞語可以省去編碼的麻煩：

```markdown
![About me](https://readmes.pages.dev/text/about-me/wave)
```

可以把它們用作整份 README 的章節標題：

```markdown
![Projects](https://readmes.pages.dev/text/projects/underline)
...
![Contact](https://readmes.pages.dev/text/contact/underline)
```

如果想置中，可以使用 HTML：

```html
<p align="center">
  <img src="https://readmes.pages.dev/text/hello/typing/size-56" alt="Hello!">
</p>
```

## 為什麼用圖片做標題

Markdown 標題很樸素，在每個首頁上看起來都一樣。很多人希望在 README 開頭或章節之間多一點個性。GitHub 會從 README 中移除自訂 CSS 和指令碼，所以想加入樣式、顏色和動畫，只能使用圖片。

問題在於，大多數標題圖片都是截圖或 GIF。它們檔案大，在高解析度螢幕上會模糊，顏色也是固定的，所以在深色模式下顯得格格不入。這些標題不一樣。它們是包含真正文字和幾行 CSS 的 SVG 檔案，在任何尺寸下都小巧清晰，會跟隨訪客的淺色或深色主題，而且不需要任何指令碼就能動起來。

## 內建詞語

| 詞語 | 顯示的文字 |
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

這些涵蓋了大多數首頁會用到的章節，而且在 README 中比編碼後的自訂文字更好讀一些。其他內容請用 `say/` 寫你自己的文字。

## 效果

效果透過一個選項來選擇。同一時間只能使用一種效果，但顏色和裝飾可以與任何效果自由搭配。

`typing` 會在閃爍的游標後一個字一個字地打出文字。完整的一行顯示片刻後清空，再重新開始。這是經典的終端機風格，最適合簡短的問候。

`wave` 讓字母依序上下起伏，就像一道漣漪穿過。它很活潑，卻依然好讀，適合俏皮的首頁。

`fade` 讓字母從左到右逐一浮現。短暫停頓後，再依同樣的順序淡出。它沉靜而優雅，和襯線字型很搭。

`glow` 讓文字保持不動，在後方加上一圈緩緩脈動的柔光。在深色模式下搭配強調色尤其好看。

`none` 是預設值，繪製沒有動畫的文字，非常適合不該分散注意力的章節標題。

`speed-N` 可以把任何效果的速度調整到 25% 到 400%。`static` 會關閉所有動畫，包括彩虹色和星光。

## 狀態

`/text/status` 會顯示你目前的狀態，例如 "Open to work"、"Busy" 或 "On vacation"。你透過一個祕密連結來選擇狀態，而不必編輯 README。所有顯示這張圖片的首頁和頁面大約一分鐘內就會更新。

`readmes.pages.dev` 上的展示顯示的是範例狀態，方便你試用各種樣式。如果想顯示你自己的狀態，請依下文說明部署一份副本。你的狀態清單放在一個私密的環境變數中，每行一條：

```
Writing code
In a meeting
Open to work
On vacation until Monday
```

切換只需帶上權杖送出一次請求：

```sh
curl https://my-badges.pages.dev/text/swap/<token>        # 下一個狀態
curl https://my-badges.pages.dev/text/swap/<token>/4      # 第 4 個狀態
curl https://my-badges.pages.dev/text/state/<token>       # 查看清單和目前狀態
```

錯誤的權杖會得到和任何不存在的頁面一樣的 404，所以從外部無法判斷是否啟用了切換功能。狀態圖片從不快取，因此變更幾乎會立即傳達給訪客。

### 怎樣寫好狀態

狀態最好能讓訪客據此採取行動。"Open to work" 是在邀請聯絡，而 "On vacation until Monday" 告訴大家何時可以期待回覆。短的狀態比長的更好讀，通常幾個字就夠了。

讓清單保持精簡、可預期。五到十條就能涵蓋大多數情況，你也記得住它們的編號，用 `/text/swap/<token>/<n>` 切換起來很快。新部署時會從第一條開始，所以請把最常用的狀態放在最前面。

不要寫任何你不希望陌生人看到的內容，例如具體的旅行日期或活動地址。首頁是公開的，圖片中顯示的一切也是公開的。

## 每日一句

`/text/quote` 會從一份清單中顯示一行文字。它每次開啟頁面都會挑一句新的，加上 `daily` 則每天一句。展示使用了幾句簡短的原創句子。在你自己的副本中，它會從一個私密的環境變數讀取你的清單，每行一句。

適合放在首頁上的句子都很短。60 個字元以內的一行能好好地放進 README，超過 80 個字元的部分會被截斷。引用他人的話時請註明作者，並記得近期書籍中的長段引文可能受著作權保護。

### 隨機還是每日

隨機句子每次開啟頁面都會變化，能給常常回訪的人一點小驚喜。每日句子在 UTC 午夜每天更換一次，所以同一天來訪的人看到的都是同一句。如果句子放在其他內容旁邊，應該顯得是刻意挑選而不是偶然出現，那麼每日模式更合適。

準備三十句左右再搭配 `daily`，一個月內都不會重複。你可以隨時加入新句子，下次讀取清單時就會出現。

用襯線字型、22 到 28 像素左右的適中字體大小來顯示句子，讀起來就像書中的一行，能舒服地放在標題下方。`fade` 效果很適合它們，因為文字會溫柔地出現，而不是一下子全部跳出來。如果想要更安靜的頁面，可以把每日一句和 `static` 搭配起來，讓它每天更換但不會動。

## 用標題設計首頁

從名字旁邊一個醒目的標題開始，例如帶打字效果的 `hello`，或帶波浪效果的 `welcome`，這樣就定下了基調。在它下面，每個章節使用不帶動畫的一般標題，例如 `about-me`、`projects` 和 `contact`。滿是動態文字的頁面很快就會讓人讀得疲憊。

保持尺寸一致。56 像素左右的大型問候語，搭配 28 到 32 像素左右的章節標題，就能形成清楚的層次，就像一份有標題和章節的文件。

讓字型和首頁的其他部分相配。sans 中性而現代，serif 適合寫作者和研究者，mono 則契合終端機或駭客風格。混用字型很少有好處，所以挑一種字型用在所有標題上。

### 選擇顏色

除非有特別的理由，否則請把主題保持為 `auto`。這樣文字在深色背景上是淺色的，在淺色背景上是深色的，和 GitHub 的其他部分完全一致。

如果想要顏色，就用 `color-RRGGBB` 選一個強調色，用在所有標題和底線上。`gradient` 和 `rainbow` 用在一個吸睛的問候語上很有趣，但不太適合每個章節標題。

決定之前，請在淺色和深色模式下都檢查一下。GitHub 可以在帳號設定中切換主題，這是最快的預覽方式。

## 選項

選項是寫在 `/text/` 之後的路徑片段，順序不拘。結尾可以加 `.svg`，不區分大小寫。如果寫錯了，圖片會變成一個粉紅色的小提示，指出未知選項的位置。

| 選項 | 效果 |
|---|---|
| `say/<text>` | 你自己的文字，最多 60 個字元，需 URL 編碼 |
| `?text=...` | 同上，以查詢參數的形式 |
| 表格中的詞語 | 對應的標題（預設 `hello`） |
| `status`、`quote` | 用你的狀態或一句話取代詞語 |
| `daily` | 與 `quote` 一起使用，每天一句 |
| `typing`、`wave`、`fade`、`glow`、`none` | 效果（預設 `none`） |
| `speed-N` | 效果速度（百分比），25 到 400 |
| `static` | 完全不動 |
| `sans`、`serif`、`mono` | 字型（預設 `sans`） |
| `size-N`、`size-Nrem` | 字體大小（像素），16 到 96（預設 40） |
| `px` | 固定為精確像素而非 rem（見下文） |
| `color-RRGGBB` | 文字和強調色的十六進位值，不含 `#` |
| `gradient` | 從橘色到粉紅色再到薰衣草紫的漸層 |
| `rainbow` | 每個字母一種顏色，並緩慢變化 |
| `upper`、`lower` | 轉換大小寫 |
| `underline` | 文字下方的圓角強調線 |
| `sparkles` | 文字周圍閃爍的星光 |
| `card` | 圓角卡片背景 |
| `border-N` | 卡片邊框（像素），0 到 8 |
| `auto`、`light`、`dark`、`transparent` | 主題（預設 `auto`） |

### 以 rem 為單位的尺寸

每個標題都以 rem 為單位設定尺寸，1rem 等於 16 像素。在瀏覽器預設設定下，它看起來和像素尺寸完全相同。當讀者為了更容易閱讀而調大瀏覽器的預設字體大小時，標題也會像周圍的文字一樣跟著放大。你也可以直接用 rem 撰寫尺寸，例如 `size-2rem`，這與 GitHub 上 Markdown 的 `#` 標題大小相同。如果標題必須維持精確的像素尺寸，請加上 `px`。

## 搭配範例

| 風格 | URL |
|---|---|
| 終端機風問候 | `https://readmes.pages.dev/text/hello-world/mono/typing` |
| 優雅的章節標題 | `https://readmes.pages.dev/text/experience/serif/fade` |
| 活潑的頁首 | `https://readmes.pages.dev/text/welcome/wave/rainbow/sparkles` |
| 低調的分隔標題 | `https://readmes.pages.dev/text/projects/underline/size-28` |
| 深色模式下的霓虹 | `https://readmes.pages.dev/text/now/glow/color-ff5d8f/dark/card` |
| 每日一句 | `https://readmes.pages.dev/text/quote/daily/serif/size-24` |

## 運作原理

每個標題都是逐個字母繪製的。伺服器知道三種字型家族中每個字元的寬度，這些寬度是從與 Arial、Times New Roman 和 Courier New 尺寸相同的字型中一次測量出來的。伺服器據此把每個字母放在精確的位置上。因為字母是分開的，CSS 就能依各自的節奏移動、淡出或替每個字母上色。正因如此，不需要任何指令碼就能做出打字、波浪和淡入淡出效果。

字型本身來自每位訪客的裝置。Windows 有 Arial 和 Times New Roman，macOS 有尺寸相容的 Helvetica 和 Times，Linux 通常內建 Liberation 字型。它們的字元寬度都相同，所以間距在任何地方都很均勻。

日文等非英文字元會使用訪客的系統字型顯示。這些字元的間距是估算的，對於全形文字效果很好。

### 大小與速度

一個標題通常只有 1 到 4 KB，比同樣文字的動態 GIF 小得多。打字效果最大，因為它要描述每個字母的每一步，但仍比大多數圖示更輕。就算標題很多，頁面在慢速網路下也能快速載入。

內建詞語會快取一天，所以再次造訪時瞬間就能顯示。狀態和隨機句子必須保持最新，所以從不快取，但它們只需幾毫秒就能產生。

### 與其他小工具搭配

標題可以和同一網站的其他小工具自然搭配。在 "Now" 標題下放一個時鐘，訪客就知道你那裡現在幾點。在 "Contact" 下放一個電子郵件徽章，就能提供聯絡方式，又不會把位址以文字形式曝露出來。在標題旁邊放一個小小的動態顏文字，能增添一點個性。

讓它們都使用相同的強調色和主題，頁面看起來就會是一個整體設計，而不是一堆零散的圖片。

## 無障礙

每張圖片都把文字當作標題保存，你也應該在替代文字中重複這些文字，例如 `![About me](...)`。這樣螢幕閱讀器就能正常朗讀標題。

在系統中開啟了「減少動態效果」的訪客，會看到不帶動畫的完整文字。在 Windows 上，關閉協助工具設定中的「動畫效果」就會這樣。預設顏色在 GitHub 的淺色和深色背景上都符合 WCAG AA 對比度。在白底上醒目的顏色在黑底上可能會消失，所以請在兩種主題下檢查你自訂的顏色。

動態文字可能會讓一些讀者分心。比較好的做法是：首頁頂端放一個動態標題，下面各章節使用一般標題或 `static` 標題。

## 執行你自己的副本

當你想使用自己的狀態和句子，或加入額外的詞語時，就部署一份副本吧。在 Cloudflare Pages 上是免費的，大約十分鐘就能完成。

你需要 Node.js 20 或更新版本、`make`，以及一個免費的 Cloudflare 帳號。專案沒有任何相依套件，所以不需要 `npm install`。

1. 在 GitHub 上點選 "Use this template"，建立你的儲存庫並複製（clone）它。
2. 在 `site.config.json` 中填入你自己的名字和儲存庫連結。
3. 建立 Pages 專案，以及一個用來保存狀態的小型鍵值儲存：

```sh
npx wrangler pages project create my-badges --production-branch production
npx wrangler kv namespace create text-state
```

4. 把 `wrangler.toml.example` 複製為 `wrangler.toml`，填入你的專案名稱和命名空間 ID。真正的 `wrangler.toml` 不會進入 Git。
5. 把你的狀態和句子（名為 `STATUSES.txt` 和 `QUOTES.txt` 的檔案，每行一條），以及一個很長的隨機權杖存為祕密：

```sh
for v in STATUSES QUOTES; do
  npx wrangler pages secret put "$v" --project-name my-badges < ~/private/"$v".txt
done
node -e "console.log(require('crypto').randomBytes(32).toString('base64url'))"
npx wrangler pages secret put TEXT_SWAP_TOKEN --project-name my-badges
```

6. 用 `make deploy PROJECT=my-badges` 部署。

如果想加入詞語，請編輯 `src/text/content.js` 中的清單。每一項都把 URL 中的名稱對應到要繪製的文字。

### 專案結構

```
functions/text/         Pages Functions：標題、切換、狀態、說明、代理
src/text/content.js     內建詞語、展示用的狀態和句子
src/text/render.js      字母排版、效果和裝飾
src/text/handler.js     狀態、句子、權杖連結
src/text/pages.js       URL 產生器和代理指南
scripts/build-metrics.mjs  重新測量字元寬度（ImageMagick）
test/                   node:test 單元測試
```

所有內容都位於 `text` 路徑下，所以這個專案可以和其他徽章應用程式共用一個 Pages 專案，而不會發生檔名衝突。

## 網頁

| 路徑 | 內容 |
|---|---|
| `/text/help` | 範例、附即時預覽的 URL 產生器、選項表 |
| `/text/agents` | 給 AI 代理和工具的 Markdown 指南 |

這些頁面包含 Open Graph 標籤和 schema.org JSON-LD，以及鍵盤焦點樣式和略過連結。預覽部署會自動標記為 noindex，指令碼只能透過嚴格的內容安全政策（CSP）依雜湊值放行。

## 常見問題

### 我可以在 URL 中寫任意文字嗎？

可以，在 `say/` 後面寫上你的文字即可。任何語言都可以，最多 60 個字元。連結會被拒絕，控制字元會被移除。只有當你想用連結切換狀態，或使用自己的句子清單時，才需要部署自己的副本。

### 為什麼打字效果會重新開始？

首頁上的標題會在不同時刻被不同的訪客看到。循環播放能確保無論何時到來，每個人都能在幾秒內看到完整的一行。

### 我的狀態沒有變化

等一分鐘後再重新整理。變更大約六十秒內會傳到所有邊緣節點，而且圖片從不快取。如果仍顯示舊狀態，請檢查權杖，並查看 `/text/state/<token>` 確認哪一條是目前狀態。

### 可以排程切換狀態嗎？

沒有內建這項功能。切換只是一次網路請求，所以你可以從任何慣用的排程工具送出，例如 cron 工作或行事曆自動化。請把權杖存放在該工具的祕密儲存中，而不是放在會與他人分享的指令碼裡。

### 標題可以用其他語言嗎？

可以。自訂文字可以使用中文、日文等文字。這些字元會用訪客的系統字型、依估算的間距繪製，全形文字看起來很自然，部分其他文字的間距會略顯寬鬆。

### 在 GitHub 以外也能用嗎？

可以。任何能顯示圖片 URL 的地方都能用，包括個人網站、文件和其他程式碼託管平台。

## 疑難排解

### 圖片顯示 "unknown option"

提示會給出無法辨識的片段位置，從 `/text/` 之後的第一個片段開始數。請對照詞語表和選項檢查拼字。由兩個詞組成的詞語用連字號連接，例如 `about-me`。

### 字母重疊或間距不均

當裝置上 Arial、Helvetica 和 Liberation Sans 都沒有時就會發生這種情況，不過很少見。這時瀏覽器會用寬度不同的字型代替。改用 `mono` 就能解決，因為等寬字型中每個字母的寬度都相同。

### 動畫不播放

檢查系統設定中是否開啟了「減少動態效果」。在 Windows 上，它是協助工具設定中的「動畫效果」開關。編輯器裡的某些 Markdown 預覽也只顯示靜態畫面，而 GitHub 本身會播放動畫。

### 狀態連結回傳 503

權杖是正確的，但部署沒有鍵值儲存。請在 `wrangler.toml` 中加入 `TEXT_STATE` 繫結，然後重新部署。

## 隱私

展示不儲存任何東西。沒有上傳、表單、Cookie 或分析。每張圖片只根據 URL 路徑計算。

在你自己的副本中，唯一儲存的值是目前狀態的編號。你的狀態、句子和權杖都保存在加密的 Cloudflare 祕密中，從不出現在儲存庫裡。請記得，你顯示的任何狀態或句子對所有造訪你首頁的人都是公開的。

在 GitHub 上，圖片是透過 GitHub 的代理取得的，所以服務通常看不到瀏覽你首頁的人的 IP 位址。和任何網站一樣，Cloudflare 可能會依其自身的[隱私權政策](https://www.cloudflare.com/privacypolicy/)保留標準的請求記錄。

## 免責聲明

本譯文僅供參考。如果與英文版 README 有任何差異，以英文版為準。

架設在 `readmes.pages.dev` 上的展示依「現狀」免費提供，不附帶任何明示或默示的保證，包括適銷性、特定用途適用性、可用性和不侵權的保證。它可能在不另行通知的情況下被限流、變更或下線。作者不對因使用它而產生的任何損害負責。

展示中的狀態和句子是為本專案撰寫的範例，並不代表任何人的實際情況。

本專案與 GitHub 或 Cloudflare 沒有關聯，也未獲得它們的認可或贊助。提到字型名稱只是為了說明相容性，所有商標均屬其各自所有者所有。

自訂文字是由建構圖片位址的人撰寫的，而不是本專案。你需要為自己標題中的文字負責。請不要將本服務用於騷擾、冒充、垃圾訊息或任何違法用途。展示可能在不另行通知的情況下封鎖惡意的文字或位址。

如果你部署自己的副本，你需要獨自為你發布的文字負責，包括任何引文及其出處標註。你同樣需要妥善保管權杖，並遵守所使用服務的條款以及你所在地的法律。

本儲存庫中的任何內容都不構成法律建議。授權文本才是具有約束力的條款。

## 授權

程式碼以 [GNU AGPL-3.0](LICENSE) 授權。如果你將修改後的版本作為公共服務執行，就必須向其使用者提供原始碼；把你的範本副本公開在 GitHub 上即可滿足這項要求。[NOTICE](NOTICE) 檔案說明了字型測量值和展示文字。

---

<p align="center"><sub>© 2026 Aesthetic Vulpes (<a href="https://github.com/didvc">github.com/didvc</a>) · <a href="https://readmes.pages.dev/">readmes.pages.dev</a></sub></p>
