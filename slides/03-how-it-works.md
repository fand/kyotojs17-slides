<!-- sectionTitle: 仕組み -->
<!-- classes: section-blue -->

# react-vfxの仕組み

---

## 登場人物

- VFXPlayer: シーン管理、描画
- VFXProvider: canvas生成、Player初期化
- VFXElement: img等のラッパー

---

## 処理の流れ

- 1. VFXProviderがcanvasを生成
- 2. Elementsのマウント時に登録
- 3. メインループ
  - 要素の位置を更新
  - 画面内の要素を描画

---

<img src="./how-it-works.png" />

---

## 1. VFXProvider

- 画面全体を覆うcanvasを生成
- VFXPlayerを初期化
  - Three.js周りを管理するクラス
- ContextにVFXPlayerを渡す

---

hooks便利〜

```javascript
const VFXContext = createContext(null);

const VFXProvider = props => {
  const [player, setPlayer] = useState(null);

  useEffect(() => {
    // 中略

    const p = new VFXPlayer(canvas)
    setPlayer(p);

    // 中略
  }, []);

  return (
    <VFXContext.Provider value={player}>
      {props.children}
    </VFXContext.Provider>
  );
};
```

---

## VFXElements

- マウント時にVFXPlayerに登録
- 要素に応じてTextureを作成
  - img, video: そのままThree.jsに渡す
    - WebGLはvideo要素から直接テクスチャ作れて最高！
  - span, div: 気合で画像に変換（後述）

---

hooks便利〜

```javascript　
const VFXImg = props => {
  const { shader } = props;
  const player = useContext(VFXContext);
  const ref = useRef(null);

  // 画像ロード後に呼ぶ
  const init = useCallback(() => {
    // VFXPlayerに登録
    player?.addElement(ref.current, { shader });

    return () => {
        // VFXPlayerから削除
        player?.removeElement(ref.current);
    };
  }, [shader, player]);

  return <img ref={ref} {...props} onLoad={init} />;
};
```

---
import * as VFX from 'react-vfx';

## 3.メインループ

- 各要素の要素の位置を毎フレーム取得
- 画面内にあれば、その位置にテクスチャを描画
- <b><VFX.VFXDiv shader="rainbow">まあまあ重いけど動くからヨシ！</VFX.VFXDiv></b>

---

### IntersectionObserverは？

- 試したけど微妙だった
- コールバックの実行がたまに遅れる(？)
- 遅延ロード等に使われるAPIだから仕方ない……

---
　　
## テキストを画像に変換

- 当初は[html2canvas](https://html2canvas.hertzen.com/)を使用
- 遅い上に無駄なリクエストが走りまくるので断念
  - キャプチャするたびにページ全体をクローンする
  - 正確にスタイルを再現するには<br/>
    ページ全体をクローンする必要があるため

---

TODO: 古いブランチでNetworkタブのスクショ撮る

---

- 今回は、最低限プレーンテキストが画像化できれば良い
- SVGの[foreignObject](https://developer.mozilla.org/ja/docs/Web/SVG/Element/foreignObject#Browser_compatibility)を使う
  - SVGにDOMを埋め込める奴

---

### dom2canvasの流れ

- 画像化したい要素をクローン
  - 親要素もクローン (vertical-align等の再現に必要)
- outerHTMLからSVG文字列を作成
- canvasに描画
- THREE.Textureにcanvasを渡す

---

できた

TODO: ここにdom2canvasの画像を貼る

---

## dom2canvasの困りごと

- 微妙にズレたりズレなかったりする
  - html2canvasでもズレてたのでムズそう
- 子要素があるとおかしくなる
- 改行するとおかしくなる
- クロスオリジンなリソースを読み込めない

---

なんかいい方法あったら教えてください


