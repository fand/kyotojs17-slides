<!-- sectionTitle: 背景アニメーション -->
<!-- classes: section-blue -->

# おまけ: 背景

<img src="./done.gif" alt="REACT-VFX 背景アニメーション"/>

---

## [react-three-fiber](https://github.com/react-spring/react-three-fiber)を使用

- 宣言的にシーンを記述できる
- React + Three.js系ライブラリの中で<br/>最も筋が良さそう（個人の感想）

```tsx
<Canvas>
  <mesh>
    <boxGeometry args={[1, 1, 1]}/>
    <meshStandardMaterial/>
  </mesh>
</Canvas>
```

---

### アニメーション用の値

- 普通にnumberをpropsで渡すと重いので🆖
- react-springのuseSpringを使う
  - アニメーションで使いたい値のラッパー

---

```javascript
// scrollのラッパーを作る
const [{ scroll }, set] = useSpring(() => ({ scroll: 0 }));
const onScroll = useCallback(e => {
  set({ scroll: window.scrollY });
}, [set]);

// スクロール位置を 0 ~ 1 に変換
const top = scroll.interpolate(x => {
  return x / (document.body.scrollHeight - window.innerHeight);
});

return <>
  <Triangle top={top} />
  <Particles top={top} />
</>;
```

---

## REACT-VFX本体にも使う？

- canvasを直接触りたかったのでやめた
  - react-three-fiberはcanvasやrenderer周りを<br/>
    抽象化してくれている
  - ふつーのWebGLやるのにはメチャ便利
