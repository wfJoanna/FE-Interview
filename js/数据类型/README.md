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
        <li>……</li>
    </ol>
    <p>说明一下：</p>
    <ul>
        <li>number包含整数、小数、NaN</li>
        <li>boolean只包含true和false</li>
        <li>引用数据类型其实都包含于object类型，如果用typeof的话，都是返回object（除了Function）</li>
        <li>null是空类型，但tyepof null返回object，但其实际行为却和object完全不同</li>


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
    <p>typeof返回的字符串，只有可能是 number, string, boolean, undefined, object, function, symbol 这七种</p>
    <p>
      	下面随便举几个例子：
    </p>
    <pre><code>var s='123';
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
typeof Array.prototype === 'object'</code></pre>
</details>


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


#### 深拷贝和浅拷贝是什么？（有什么区别？）

<details>
    <summary>展开</summary>
    <p>
        浅拷贝：对于基本数据类型，浅拷贝是对值的复制；对于引用数据类型，浅拷贝是对对象地址的复制，当拷贝的对象发生改变时，原对象也会发生改变
    </p>
    <p>
        深拷贝：拷贝对象时，在堆中开辟新的内存区域，两个对象对应不同的地址，修改其中一个对象，不会对另一个对象造成改变
    </p>
</details>



#### 请手动实现一个深拷贝

<details>
    <summary>展开</summary>
    <ol>
        <li>法一：用JSON做一次中转，但有很多漏洞，比如值为undefined的属性、值为symbol的属性、所有方法在序列化过程中会被忽略<pre><code>function deepCopy(obj) {
    var tmp, result;
    tmp = JSON.stringify(obj);
    result = JSON.parse(tmp);
    return result;
}</code></pre></li>
        <li>法二：Array.prototype.slice，但只适用于array<pre><code>let array = [1, 2, 3];
let array1 = array.slice();
console.log(array1);</code></pre></li>
        <li>法三：Array.prototype.concat，但只适用于array<pre><code>let array = [1, 2, 3];
let array1 = [].concat(array);
console.log(array1);</code></pre></li>
        <li>法四：依次复制源对象的键/值到目标对象，但仅适用于object和array<pre><code>function deepCopy(obj) {
    var result = typeof obj.splice === 'function' ? [] : {}; //因为splice是数组独有的方法
    if (obj && typeof obj === 'object') {
        for (let key in obj) {
            if (obj[key] && typeof obj[key] === 'object') {
                result[key] = deepCopy(obj[key]); //如果对象的属性值为object的时候，递归调用deepCopy
            } else {
                result[key] = obj[key]; //如果对象的属性值不为object的时候，直接复制参数对象的每一个键/值到新对象对应的键/值中
            }
        }
        return result;
    }
    return obj; //直接返回源对象
}</code></pre></li>
    </ol>
</details>


