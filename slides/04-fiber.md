<!-- sectionTitle: 背景アニメーション -->
<!-- classes: section-blue -->

# おまけ: 背景

<img src="./done.gif" alt="REACT-VFX 背景アニメーション"/>

---

## react-three-fiberを使用

- 宣言的にシーンを記述できる

```tsx
<Canvas>
  <mesh>
    <boxGeometry args={[1, 1, 1]}/>
    <meshStandardMaterial/>
  </mesh>
</Canvas>
```

---

### 値の取り回しは<br/>react-springに依存
- 毎フレーム更新するので、普通にpropsで渡すのは🆖

---

## REACT-VFX本体には使わない？

- canvasを直接触りたかったのでやめた
  - react-three-fiberはcanvasやrenderer周りを<br/>
    抽象化してくれている
  - ふつーのWebGLやるのにはメチャ便利
