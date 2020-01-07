<!-- sectionTitle: 自己紹介 -->
import * as VFX from 'react-vfx'
import { Card } from '@fusuma/client';

<Card
  left={
    <VFX.VFXImg src="./amagi.png" shader="rgbShift"/>
  }
  right={
    <>
      <h1>自己紹介</h1>
      <ul>
        <li><a href="https://twitter.com/amagitakayosi">@amagitakayosi</a></li>
        <li>Kyoto.js主催</li>
      </ul>
    </>
  }
/>

<!-- note
This is a speaker note!!
This sentence can be seen when using Presenter Mode.

😍
-->

---

## WebGLでVJやってます

TODO: ここに画像

---

<h2>
  <VFX.VFXDiv shader="rainbow">こんなん作りました</VFX.VFXDiv>
</h2>

https://amagi.dev/react-vfx/
