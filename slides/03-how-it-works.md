<!-- sectionTitle: 仕組み -->
<!-- classes: section-blue -->

# react-vfxの仕組み

---

## 処理の流れ

- 1. Providerでcanvasを生成
- 2. Elementsのマウント時に登録
- 3. メインループ
  - 要素の位置を更新
  - 画面内の要素を描画

---

TODO:ここにSkitchの画像はる

---

## 1. Providerでcanvasを生成

- ContextでVFXPlayerを渡す

```typescript
const foo: number = 3;
```


---

## 2. Elementsのマウント時に登録
  - hooksでモデルを呼び出し

---

## 3. 毎フレームviewportを更新

- まあまあ重いけど動くからヨシ！
- IntersectionObserverも使ってみたけど<br/>
  微妙だった
  - コールバックの実行が遅れる事がある(？)
  - 遅延ロード等に使われるAPIだから仕方ないか……

---

- 画像、動画は直接テクスチャを作成
- WebGLはvideo要素から直接テクスチャ作れて最高

---

## テキストを画像に変換

- 当初はhtml2canvasを使用
- 遅い上に無駄なリクエストが走りまくるので断念
  - キャプチャするたびにページ全体をクローンする仕組みのため
  - 正確にスタイルを再現するには<br/>
    ページ全体をクローンする必要があるので仕方ない

---

- 今回は、最低限プレーンテキストが画像化できれば良い
- SVGのforeign objectを使う
  - html2canvasの中身で使ってる奴

---

できた

TODO: ここにdom2canvasの画像を貼る

---

## dom2canvasの困りごと

- 子要素があるとおかしくなる
- 微妙にズレたりズレなかったりする
  - html2canvasでもズレてたので改善ムズそう
- 改行するとおかしくなる
- CORS周り
  - TODO: 詳細を調べて書く

……etc
