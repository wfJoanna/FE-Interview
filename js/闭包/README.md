#### 什么是闭包？

<details>
    <summary>展开</summary>
    <p>
        简单来说就是一个函数返回另一个函数，比如把函数B作为函数A的返回值返回，执行函数B时可以访问函数A的参数和局部变量
    </p>
</details>



#### 闭包的原理？

<details>
    <summary>展开</summary>
    <p>
        按照我现在的简单理解，就是函数内部支持嵌套函数，嵌套函数可以访问上一层的作用域中的函数变量，也就是说内部函数可以引用外部函数的参数和局部变量
    </p>
</details>



#### 闭包的优点和缺点？

<details>
    <summary>展开</summary>
    <p>
        优点：
    </p>
    <ol>
        <li>利用闭包可以定义私有变量，实现封装</li>
        <li>可以少添加变量到全局作用域，不用担心全局作用域命名冲突的问题，避免变量污染全局</li>
        <li>可以让变量长期驻扎在内存中，可供之后使用</li>
        <li>利用闭包可以从函数外部读取函数内部的变量</li>
    </ol>
    <p>
        缺点：
    </p>
    <ol>
        <li>对内存消耗有负面影响，比如我们把函数B作为函数A的返回值返回，然后把函数B赋给一个全局变量，那么函数B就始终在内存中，而函数B的存在依赖于函数A，因此函数A也始终在内存中，不会在函数A调用结束后被垃圾回收机制回收</li>
    </ol>
</details>


#### 说一下闭包的应用场景，举举例子

<details>
    <summary>展开</summary>
    <ol>
        <li>封装<pre><code>var a = {
    name: 'a'
};
a.name = 1; //用户就可能随意修改属性，不能确保用户修改后的属性值是否合法
---不合法的分隔线---
var a = function () {
    var name = 'a';
    return {
        setName: function (newValue) {
            if (typeof newValue === 'string') {
                name = newValue;
            }
            else throw new Error('Invalid name');
        },
        getName: function () {
            return name;
        }
    }
}
var a1 = a();
console.log(a1.getName()); //a
a1.setName(1);
console.log(a1.getName()); //Invalid name
a1.setName('b');
console.log(a1.getName()); //b</code></pre></li>
        <li>从函数外部读到函数内部的变量<pre><code>//法一：利用return
function a1() {
    var name = 'a1';
    return name;
}
var name1 = a1();
console.log(name1);
//法二：利用闭包
function a2() {
    var name = 'a2';
    return function () {
        return name;
    };
}
var name2 = a2();
console.log(name2());</code></pre></li>
    </ol>
</details>



