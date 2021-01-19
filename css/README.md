#### 请画出css盒模型

<details>
    <summary>展开</summary>
    <p>
        任何一个元素都可以看成一个盒子
    </p>
    <p>
        盒模型构成：content padding border margin
    </p>
    <img src='./box-model.gif'>
</details>


#### 说一下标准情况和IE下的盒模型的区别

<details>
    <summary>展开</summary>
    <p>
        IE传统盒模型：宽度width = content + padding + border
    </p>
    <p>
        w3c标准盒模型：宽度width = content
    </p>
    <p>
		上面的width就是我们所能设置的width。IE的width包含了padding和border，所以设置了width之后，调整padding和border只会压缩content，而不会向外扩展（除非设置的width太小）
    </p>
    <p>
        height同理
    </p>
    <p>
        css设置盒模型：
    </p>
    <p>
        box-sizing: content-box 标准盒模型
    </p>
    <p>
        box-sizing: border-box IE盒模型
    </p>
    <p>
        <b>顺带一提，background在两种盒模型都是只包含content和padding</b>
    </p>
</details>


#### position都有哪些属性？

<details>
    <summary>展开</summary>
    <ol>
        <li>static静态定位：默认值，不定位，不脱离文档流</li>
        <li>relative相对定位：不脱离文档流，参考自身静态位置</li>
        <li>absolute绝对定位：脱离文档流，参考最近的已定位的父元素，否则就是body</li>
        <li>fixed固定定位：脱离文档流，参考浏览器窗口</li>
        <li>sticky粘性定位：不脱离文档流，在屏幕范围（viewport）时，元素不定位，当元素将要移出偏移范围时，定位变成fixed</li>
        <li>硬要说的话，还有inherit</li>
    </ol>
</details>