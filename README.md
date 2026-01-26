# YOYOGO 專案說明文件

## 專案概述

本專案使用 **Astro.js** 框架建置靜態網站。

- **Demo 網址**: https://timchao0825.github.io/yoyogo/
- **Repository**: https://github.com/timchao0825/yoyogo

---

## 技術架構

### 框架

- **Astro.js** - 現代化靜態網站生成器
- 專案採用 Astro 的打包系統進行建置

---

## 重要說明

### 1. index.html 的 Script 處理

`index.html` 中的 JavaScript 程式碼是**內嵌在 HTML 檔案中**,這是因為:

- Astro.js 在打包時會將模組化的程式碼進行處理
- 打包後會自動將必要的 script 整合到 HTML 中
- 這是 Astro 框架的正常打包結果,**並非手動插入**
- 如需分成檔案可自行拆分引入

> ⚠️ **注意**: 請勿移除或修改 `index.html` 中的 `<script>` 標籤,這些是 Astro 自動生成的必要程式碼。

---

## HTML 結構規範

### 2. detail.html 與 privacy.html 的區塊結構（如有需要調整請進行告知）

這兩個頁面使用統一的 HTML 語意化標籤來組織內容:

#### 結構說明

```html
<article>
  <!-- 文章區塊,用於區分不同主題內容並控制間距 -->

  <h2>區塊標題</h2>
  <!-- 區塊內的大標題 -->

  <p>段落內容...</p>
  <!-- 區塊內的一般段落文字 -->

  <ol>
    <!-- 有序列表,用於數字編號項目 -->
    <li>
      列表項目內容
      <!-- 列表項目數字文字說明 -->

      <p>列表項目內的段落說明</p>
      <!-- 列表項目內的段落說明 -->
    </li>
  </ol>
</article>
```

#### 標籤對照表

| 標籤                      | 用途         | 說明                                    |
| ------------------------- | ------------ | --------------------------------------- |
| `<article>`               | 文章區塊分類 | 用於區分不同主題的內容區塊,控制區塊間距 |
| `<article> <h2>`          | 區塊內大標   | 每個 article 區塊的主標題               |
| `<article> <p>`           | 區塊內段落   | 一般文字段落內容                        |
| `<article> <ol> <li> xxx` | 數字列表     | 有序列表,用於步驟說明或編號項目         |
| `<article> <ol> <li> <p>` | 列表項目段落 | 列表項目內的段落說明文字                |

#### 範例結構

```html
<article>
  <h2>活動辦法</h2>
  <p>本活動依照以下規則進行:</p>
  <ol>
    <li>
      步驟一:
      <p>登入會員並填寫正確個人資料</p>
    </li>
    <li>
      步驟二:
      <p>完成指定任務並上傳相關證明</p>
    </li>
    <li>
      步驟三:
      <p>等待審核通過後即可領取獎勵</p>
    </li>
  </ol>
</article>

<article>
  <h2>注意事項</h2>
  <p>參加活動前請詳閱以下注意事項...</p>
</article>
```

---

## 開發與維護建議

### 修改內容時請注意:

1. **保持 HTML 結構一致性** - 依照上述標籤規範編寫內容
2. **Astro 生成的 script** - index.html 中的 script 是框架自動產生的，如需分成檔案可自行拆分引入
3. **使用語意化標籤** - `<article>`, `<h2>`, `<p>`, `<ol>` 等標籤有明確的語意用途
4. **列表項目使用 `<p>` 包裹** - 確保段落樣式的一致性

### CSS 樣式

如需調整樣式,請針對以下選擇器進行修改:

```css
article {
  /* 區塊間距 */
}
article h2 {
  /* 標題樣式 */
}
article p {
  /* 段落樣式 */
}
article ol {
  /* 列表樣式 */
}
article ol li p {
  /* 列表段落樣式 */
}
```

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
│   └── favicon.svg
├── src
│   ├── assets
│   │   └── astro.svg
│   ├── components
│   │   └── Welcome.astro
│   ├── layouts
│   │   └── Layout.astro
│   └── pages
│       └── index.astro
└── package.json
```

---

## 聯絡資訊

如有任何問題,請參考:

- GitHub Repository: https://github.com/timchao0825/yoyogo
- Demo 網站: https://timchao0825.github.io/yoyogo/
