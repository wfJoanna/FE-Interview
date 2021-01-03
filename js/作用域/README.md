#### 介绍下this的各种情况

<details>
    <summary>展开</summary>
    <ol>
        <li>对象的方法调用：this指向调用此方法的对象</li>
        <li>非严格模式下的普通函数调用：this指向全局对象</li>
        <li>严格模式下的普通函数调用：this是undefined</li>
        <li>构造函数调用：this指向构造函数新创建的对象</li>
        <li>箭头函数：this默认绑定外层的this的值，所以箭头函数中this的值和外层的this是一样的</li>
        <li>事件中的this：表示接收事件的元素</li>
    </ol>
</details>


#### 改变this指向的方式有哪些？

<details>
    <summary>展开</summary>
    <p>
        主要是call、apply、bind
        <ol>
            <li>call和apply改变this都是立即执行，不同的是call是一个参数一个参数地传，apply是传一个数组</li>
            <li>bind绑定this之后返回一个新的函数，并且也是一个参数一个参数地传</li>
    	</ol>
    </p>
</details>



#### 词法作用域和动态作用域的区别？

<details>
    <summary>展开</summary>
    <p>
        词法作用域（静态作用域）是在<b>书写代码或者说定义时</b>确定的，而动态作用域是在<b>运行时</b>确定的
    </p>
    <p>
        词法作用域关注函数<b>在何处声明</b>，而动态作用域关注函数<b>从何处调用</b>，其作用域链是基于<b>运行时的调用栈</b>的
    </p>
    <p>
        <b>JS使用的是词法作用域</b>
    </p>
    <p>
        下面举个例子：
    </p>
    <pre><code>var a = 2;
function foo() {
    console.log(a);
}
function bar() {
    var a = 3;
    foo();
}
bar();</code></pre>
    <p>
        如果是词法作用域，就输出2，如果是动态作用域，就输出3
    </p>
</details>



#### 词法作用域和this的区别？

<details>
    <summary>展开</summary>
    <p>
        this有点像动态作用域，this是运行时进行绑定的，并不是在编写时绑定，this的绑定和函数声明的位置没有任何关系，只取决于函数的调用方式；而词法作用域是在书写代码或者说定义时就确定的
    </p>
    <p>
        （其实真实的答案并不是向上面那样的，但是正确答案太复杂了我现在搞不懂，所以就先像上面那样简单回答一下吧）
    </p>
</details>



#### var、let、const的区别？

<details>
    <summary>展开</summary>
    <ol>
        <li>let和const是块级作用域，var是函数作用域</li>
        <li>var声明的全局变量会挂载到window（全局对象）上，而let和const的不会</li>
        <li>const声明的同时必须赋值，之后不能再修改，但如果是引用数据类型，其内部的值是可以改变的</li>
        <li>同一作用域下let和const不能声明同名变量，而var可以</li>
        <li>var、let、const声明变量都存在变量提升，但规定let和const不能在其声明之前使用</li>
    </ol>
</details>


