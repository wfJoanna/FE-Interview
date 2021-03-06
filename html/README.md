#### html布局元素的分类有哪些？并描述每种布局元素的应用场景

<details>
    <summary>展开</summary>
    <p>
        行内元素 === 内联元素<br>
        块级元素 === 块状元素 === 块元素
    </p>
    <ul>
        <li>
            <b>内联元素</b>：比如span,a,b,br
            <ol>
                <li>和其他行内元素从左到右在一行显示（不会换行）</li>
                <li>不可以设置高度、宽度、内外边距的上下值，但是可以设置内外边距的左右值</li>
               	<li>默认宽高由本身内容大小决定（文字、图片等）</li>
                <li>只能容纳文本或其他行内元素，不能嵌套块级元素</li>
            </ol>
        </li>
        <li>
            <b>块级元素</b>：比如h1~h6,p,div,hr,table,ul,ol,li
            <ol>
                <li>每一个块级元素都会从新的一行开始，从上到下排布</li>
                <li>可以设置高度、宽度以及内外边距</li>
                <li>默认宽度为父元素的内容宽度，默认高度为本身内容的高度</li>
                <li>可以嵌套块级元素和行内元素</li>
            </ol>
        </li>
        <li>
            <b>内联块状元素</b>：比如img,input
            <ol>
                <li>不自动换行，从左到右在一行显示</li>
                <li>可以设置高度、宽度、内外边距</li>
                <li>默认宽高由本身内容大小决定（文字、图片等）</li>
            </ol>
        </li>
    </ul>
    <p>
        应用场景：
        <ul>
            <li>内联元素：不指定宽高，不占满一行</li>
            <li>块级元素：指定宽高，占满一行</li>
            <li>内联块状元素：指定宽高，不占满一行</li>
    	</ul>
    </p>
</details>


#### 行内元素和块级元素有什么区别？

<details>
    <summary>展开</summary>
    <p>
        照着上面答就行
    </p>
</details>


#### html5有哪些新特性？

<details>
    <summary>展开</summary>
    <ol>
        <li>语义化标签：header、footer、nav、article、aside、details、summary</li>
        <li>新的表单input输入类型：color、date、email、tel</li>
        <li>视频和音频元素：audio、video</li>
        <li>canvas</li>
    </ol>
</details>

