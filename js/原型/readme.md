#### 说一下对原型链的理解，画一个经典的原型链图示

<details>
    <summary>展开</summary>
    <p>理解一下下面的图，大概画一下复述一下就行了</p>
    <p>其实少了实例对象的constructor，也就是指向构造函数的指针</p>
    <img src="prototype.jpg">
</details>



#### 说一下构造函数、原型、实例的关系

<details>
    <summary>展开</summary>
    <p>
        每个构造函数（constructor）都有一个原型对象（prototype），原型对象都包含一个指向构造函数的指针（constructor），而实例（instance）都包含一个指向原型对象的内部指针（__proto__）
    </p>
    <p>
        你可以用自己的话说嘛，不一定非要照着上面那样。只要记着那张图，脑子里想着那张图就行了
    </p>
</details>


#### 介绍instanceof原理，并手动实现

<details>
    <summary>展开</summary>
    <p>原理：</p>
    <p>instanceof的原理就是instanceof会遍历左边变量的原型链，直到找到右边变量的prototype，如果找到了就返回true，如果没找到就返回false</p>
    <p>手动实现：</p>
    <pre><code>function myinstanceof(left, right) {
    let leftVar = left.__proto__;
    const rightVar = right.prototype;
    while (leftVar) {
        if (leftVar === rightVar) {
            return true;
        }
        leftVar = leftVar.__proto__;
    }
    return false;
} // 注意，这个并不准确，只是粗略地实现，实际上有很多情况漏掉了，和instanceof结果会不同</code></pre>
</details>



#### 说下instanceof的各种类型的返回值

<details>
    <summary>展开</summary>
    <pre><code>// 以下并不是标准的js代码
22 instanceof Number => false // 因为22只是个值，不是Number的实例对象
'22' instanceof String => false
new Number(22) instanceof Number => true
new String('22') instanceof String => true
[] instanceof Object => true
{} instanceof Object => true
undefined instanceof Object => false
null instanceof Object => false
null instanceof null => TypeError: Right-hand side of 'instanceof' is not an object
[] instanceof Array => true
[].__proto__ instanceof Array => false
[].__proto__ instanceof Object => true</code></pre>
</details>



#### Object.prototype.toString.call(Symbol)返回什么？

<details>
    <summary>展开</summary>
    <pre><code>Object.prototype.toString.call(2) // "[object Number]"
Object.prototype.toString.call('') // "[object String]"
Object.prototype.toString.call(true) // "[object Boolean]"
Object.prototype.toString.call(undefined) // "[object Undefined]"
Object.prototype.toString.call(null) // "[object Null]"
Object.prototype.toString.call(Math) // "[object Math]"
Object.prototype.toString.call({}) // "[object Object]"
Object.prototype.toString.call([]) // "[object Array]"
Object.prototype.toString.call(Symbol) // "[object Function]"
Object.prototype.toString.call(Symbol()) // "[object Symbol]"
Object.prototype.toString.call(Object) // "[object Function]"
Object.prototype.toString.call(Object.prototype) // "[object Object]"</code></pre>
</details>



#### 判断一个变量的类型，写个方法用Object.prototype.toString判断传入数据的类型

<details>
    <summary>展开</summary>
    <pre><code>const type = function (obj) {
	const str = Object.prototype.toString.call(obj);
	return str.match(/\[object (.*?)\]/)[1].toLowerCase(); // (.*?)表示懒惰匹配任意个任意字符
}
console.log(type(true)); // 'boolean'</code></pre>
</details>

