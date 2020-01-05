import * as VFX from 'react-vfx'


<h1>
  <VFX.VFXImg src="./logo.png" alt="REACT-VFX" shader="glitch"/>
</h1>

---

# テスト

- <VFX.VFXDiv shader="rainbow">FOOFOOFOOFOO</VFX.VFXDiv>
- <VFX.VFXDiv shader="pixelate">BARBARBARBAR</VFX.VFXDiv>
- <VFX.VFXDiv shader="rgbShift">BAZBAZBAZBAZBA</VFX.VFXDiv>

---

### これ

<VFX.VFXDiv shader="glitch"
    style={{ fontFamily: "serif", fontStyle: "italic", fontSize: '144px' }}>
    全裸監督
</VFX.VFXDiv>

### のOPみたいじゃない？

---

# 自己紹介

- AMAGI [@amagitakayosi](https://twitter.com/amagitakayosi)
- Kyoto.js運営

<!-- note
This is a speaker note!!
This sentence can be seen when using Presenter Mode.

😍
-->

---

## WebGLでVJやってます

ここに画像

---

## こんなん作りました

https://amagi.dev/react-vfx/

---

## 経緯

- ポートフォリオ作りたい
  - 参考にawwwardsのオシャレWebサイト見てた
  - 画像にエフェクトかけててかっこいい

---

## [VEDAJS](https://github.com/fand/vedajs)でもできる？

- 要素の数だけcanvasを生成する必要があり、非効率
  - デバイスによってはcanvasの数に上限がある？

---

## オシャレWebサイトをインスペクターで見てみる
- ページ全体にcanvas一枚
- threejsのexample

---

## react-vfxの仕組み

1. Providerでcanvasを生成

---

2. Elementsのマウント時に登録
  - hooksでモデルを呼び出し

---

3. 毎フレームviewportを更新
  - まあまあ重いけど動くからヨシ！
  - IntersectionObserverだと勝手に50ms throttleされてしまう

---

- 画像、動画は直接テクスチャを作成
- WebGLはvideo要素から直接テクスチャ作れて最高
- テキストを画像に変換する
  - はじめはhtml2canvasを使用
  - 遅い上に無駄なリクエストが走りまくるので断念
　　　キャプチャするたびにページ全体をクローンする仕組みのため
　　　　出来る限り正確にスタイルを再現するにはページ全体をクローンする必要があるので仕方ない
　僕は最低限プレーンテキストが画像化できれば良い
　SVGのforeign objectを使う
　できた

---

# おまけ　背景

ここにGIFかなんか貼る

---

- react-three-fiberを使用
  - 宣言的にシーンを記述できる
  - コンポーネント間の値の取り回しはreact-springに依存
    - 毎フレーム更新したいので、普通にnumberをpropsで渡すのは避けたい

