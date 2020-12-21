#### 介绍JS的全部数据类型

<details>
    <summary>展开</summary>
    <p><b>基本数据类型：</b></p>
    <ol>
        <li>number</li>
        <li>string</li>
        <li>boolean</li>
        <li>undefined</li>
        <li>null</li>
        <li>symbol</li>
    </ol>
    <p><b>引用数据类型：</b></p>
    <ol>
        <li>Object</li>
        <li>Array</li>
        <li>Function</li>
        <li>Date</li>
        <li>RegExp</li>
        <li>JSON</li>
        <li>Math</li>
    </ol>
    <p>说明一下：</p>
    <ul>
        <li>number包含整数、小数、NaN</li>
        <li>boolean只包含true和false</li>
        <li>引用数据类型其实都包含于object类型，如果用typeof的话，都是返回object（除了Function）</li>
        <li>null是空类型，但tyepof null返回object，但其实际行为却和object完全不同</li>
    </ul>
</details>


#### 基本数据类型和引用数据类型的区别？

<details>
    <summary>展开</summary>
    <ol>
        <li>基本数据类型是<b>存储在栈中的简单数据段</b>，变量存储在栈中的值就是<b>他们的实际值</b>（因为基本数据类型的大小是固定的）；<br>而引用数据类型是<b>存储在堆中的对象</b>，变量存储在栈中的值是<b>该对象在堆内存中的地址</b>（因为引用数据类型的大小是不固定的）</li>
        <li>基本数据类型的值是<b>不可变</b>的，而引用数据类型的值是<b>可变</b>的</li>
        <li>基本数据类型<b>不可以添加属性和方法</b>，引用数据类型<b>可以添加属性和方法</b></li>
        <li>基本数据类型的赋值是<b>简单赋值</b>，也就是说将赋值的变量的值复制一份放到被赋值的变量上，这两个变量是完全独立的，只是拥有相同的值而已；而引用数据类型的赋值是<b>对象引用</b>，同样也是复制一份，只是这个值是对象的内存地址，这两个变量都指向了堆内存中的同一个对象，他们中任何一个做出的改变都会反映到另一个身上</li>
        <li>基本数据类型的比较是<b>值</b>的比较，引用数据类型的比较是<b>引用</b>的比较</li>
        <li>基本数据类型是存放在<b>栈区</b>的，引用数据类型的存储需要内存的<b>栈区和堆区</b>同时完成（其实第一点已经说过了）</li>
        <li>参数传递时，基本数据类型只是<b>把值传递给参数</b>，函数内部对这个参数的修改不会对这个变量造成任何影响；而引用数据类型<b>传递的是对象在堆内存中的地址</b>，所以函数内部对这个参数的修改会体现到外部</li>
    </ol>
</details>


#### 用typeof判断数据类型，分别显示什么？

<details>
    <summary>展开</summary>
    <p>typeof返回的字符串，只有可能是 number, string, boolean, undefined, object, function 这六种</p>
    <p>
      	下面随便举几个例子：
    </p>
</details>

```javascript
var s='123';
var a;
// 下面就不是合法的js代码了，这里只为举例说明
typeof s === 'string'
typeof a === 'undefined' // 未赋值的变量
typeof b === 'undefined' // 未声明的变量
typeof NaN === 'number'
typeof [] === 'object'
typeof null === 'object'
typeof new Date() === 'object'
typeof new String() === 'object'
typeof new Function() === 'function'
typeof function a(){} === 'function'
typeof Symbol() === 'symbol'
typeof Array === 'function'
typeof Array.prototype === 'object'
```



#### 布尔值为false的情况？

<details>
    <summary>展开</summary>
    <ol>
        <li>undefined（但注意如果变量未被声明过，就会报错）</li>
        <li>null</li>
        <li>数字0</li>
        <li>布尔值false</li>
        <li>NaN</li>
        <li>空字符串 "" 或 ''</li>
    </ol>
</details>


