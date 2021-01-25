#### for...in、forEach、for...of的区别？

<details>
    <summary>展开</summary>
    <ul>
        <li>
            <b>for...in</b>：循环遍历对象的属性
            <p>
                比如：
            </p>
            <pre><code>var arr = [10, 11, 12];
for (let key in arr) {
    console.log(key); // 0 1 2
}</code></pre>
        </li>
        <li>
        	<b>forEach</b>：forEach()是数组的方法，参数为回调函数。forEach()调用数组的每个元素，并将元素的值和索引传递给回调函数
            <p>
                比如：
            </p>
            <pre><code>var arr = [10, 11, 12];
arr.forEach(myFun);
function myFun(item, key) {
    console.log(key + ' ' + item);
}</code></pre>
        </li>
        <li>
            <b>for...of</b>：遍历可迭代的数据结构
            <p>
                可迭代的数据结构：Arrays（数组），Strings（字符串），Maps（映射），Sets（集合）等，不包括普通对象
            </p>
            <p>
                比如：
            </p>
            <pre><code>var arr = [10, 11, 12];
for (let value of arr) {
    console.log(value);
}</code></pre>
        </li>
    </ul>
</details>



#### for...of和for...in是否可以直接遍历对象？

<details>
    <summary>展开</summary>
    <p>
        for...of不能直接遍历对象，for...in可以直接遍历对象
    </p>
    <p>
        <b>解决办法</b>：
    </p>
    <p>
        利用Object.keys()、Object.values()、Object.entries()<br>（注意了！！不是数组的keys方法！这里只能写作Object.keys(obj)，不能写作obj.keys。但如果是数组，就可以写成arr.keys()，因为人家有这个方法）
    </p>
    <pre><code>const obj = { a: 1, b: 2, c: 3 };
for (const prop of Object.keys(obj)) {
    console.log(prop);
}
// a
// b
// c
for (const val of Object.values(obj)) {
    console.log(val);
}
// 1
// 2
// 3
for (const item of Object.entries(obj)) {
    console.log(item);
}
// ["a", 1]
// ["b", 2]
// ["c", 3]
</code></pre>
</details>



#### for...in和Object.keys的区别

<details>
    <summary>展开</summary>
    <p>
        for...in用来枚举对象的属性，Object.keys(obj)返回以对象属性为元素的数组
    </p>
</details>


#### ES6有哪些新特性？

<details>
    <summary>展开</summary>
    <ol>
        <li>let、const</li>
        <li>箭头函数</li>
        <li>Symbol数据类型</li>
        <li>Set和Map</li>
        <li>Promise</li>
        <li>class关键字</li>
    </ol>
</details>

