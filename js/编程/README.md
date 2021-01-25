#### 实现add(1)(2)(3)

<details>
    <summary>展开</summary>
    <p>
        本质上考查的是函数柯里化
    </p>
    <p>
        简单粗暴版：
    </p>
    <pre><code>function add(a) {
    return function (b) {
        return function (c) {
            return a + b + c;
        }
    }
}
console.log(add(1)(2)(3));</code></pre>
    <p>
        柯里化解决方案：
    </p>
    <ul>
        <li>参数长度固定：<pre><code>const curry = (fn) =>
    (judge = (...args) =>
        args.length === fn.length // function.length就是函数的参数个数
            ? fn(...args)
            : (...arg) => judge(...args, ...arg) // 注意，此时args前的...是扩展运算符，当用在字符串或数组前面时可以将数组或字符串进行拆解。这样就可以累积参数直到参数总数达到fn的参数个数，并将所有参数都传给了fn
    ); // 核心是这个，适用于所有参数长度固定的函数柯里化
<br>
const add = (a, b, c) => a + b + c;
const curryAdd = curry(add); // 返回给curryAdd的是judge函数
<br>
console.log(curryAdd(1)(2)(3)); // 6
console.log(curryAdd(1, 2)(3)); // 6
console.log(curryAdd(1)(2, 3)); // 6</code></pre></li>
        <li>参数长度不固定：<pre><code>function currying(fn) {
    let args = []
    return function temp(...newArgs) {
        if (newArgs.length) {
            args = [
                ...args,
                ...newArgs
            ] // 注意这里的...是拆解数组的扩展运算符，而不是rest参数
            return temp
        } else {
            let val = fn.apply(this, args) // 目的是让fn执行，this指向啥没人care
            // 也可以这样：
            // let val = fn(...args);
            args = [] // 保证再次调用时清空
            return val
        }
    }
}
<br>
function add(...args) {
    return args.reduce((a, b) => a + b)
}
<br>
let addCurry = currying(add) // 返回给addCurry的是temp函数
console.log(addCurry(1)(2)(3)(4, 5)())  //15
console.log(addCurry(1)(2)(3, 4, 5)())  //15
console.log(addCurry(1)(2, 3, 4, 5)())  //15</code></pre></li>
    </ul>
</details>



#### 实现链式调用

<details>
    <summary>展开</summary>
    <p>
        链式调用的核心就在于调用完的方法<b>将自身实例返回</b>
    </p>
    <ul>
        <li>例一：<pre><code>function Class1() {
    console.log('初始化');
}
<br>
Class1.prototype.method = function (param) {
    console.log(param);
    return this;
}
<br>
var cl = new Class1();
cl.method('1').method('2').method('3');</code></pre></li>
        <li>例二：<pre><code>var obj = {
    a: function () { console.log('1'); return this; },
    b: function () { console.log('2'); return this; },
    c: function () { console.log('3'); return this; }
};
obj.a().b().c();</code></pre></li>
    </ul>
</details>



#### 手写数组转树

例如将input转成output的形式：

```javascript
let input = [
    {
        id: 1, val: '学校', parentId: null
    }, {
        id: 2, val: '班级1', parentId: 1
    }, {
        id: 3, val: '班级2', parentId: 1
    }, {
        id: 4, val: '学生1', parentId: 2
    }, {
        id: 5, val: '学生2', parentId: 3
    }, {
        id: 6, val: '学生3', parentId: 3
    },
]

let output = {
    id: 1,
    val: '学校',
    children: [{
        id: 2,
        val: '班级1',
        children: [
            {
                id: 4,
                val: '学生1',
                children: []
            },
            {
                id: 5,
                val: '学生2',
                children: []
            }
        ]
    }, {
        id: 3,
        val: '班级2',
        children: [{
            id: 6,
            val: '学生3',
            children: []
        }]
    }]
}
```

<details>
    <summary>展开</summary>
    <pre><code>let input = [
    {
        id: 1, val: '学校', parentId: null
    }, {
        id: 2, val: '班级1', parentId: 1
    }, {
        id: 3, val: '班级2', parentId: 1
    }, {
        id: 4, val: '学生1', parentId: 2
    }, {
        id: 5, val: '学生2', parentId: 3
    }, {
        id: 6, val: '学生3', parentId: 3
    },
]
<br>
function arrayToTree(array) {
    let root = array[0];
    array.shift();
    let tree = {
        id: root.id,
        val: root.val,
        children: array.length > 0 ? toTree(root.id, array) : []
    };
    return tree;
}
<br>
function toTree(parentId, array) {
    let children = [];
    let len = array.length;
    for (let i = 0; i < len; i++) {
        let node = array[i];
        if (node.parentId === parentId) {
            children.push({
                id: node.id,
                val: node.val,
                children: toTree(node.id, array)
            });
        }
    }
    return children;
}
<br>
console.log(arrayToTree(input));</code></pre>
</details>


#### 使用ES6的Proxy实现数组负索引

负索引：例如，可以简单地使用arr[-1]替代arr[arr.length-1]访问最后一个元素，[-2]访问倒数第二个元素，以此类推

<details>
    <summary>展开</summary>
    <pre><code>const proxyArray = arr => {
    const length = arr.length;
    return new Proxy(arr, {
        get: (target, key) => {
            key = +key; // 这里的加号是一元运算符，用于将变量转换为数字。主要是如果访问负索引，key好像就不是数字了
            while (key < 0) {
                key += length;
            }
            return target[key];
        }
    })
};
var a = proxyArray([1, 2, 3, 4, 5, 6, 7, 8, 9]);
console.log(a[1]); // 2
console.log(a[-10]); // 9
console.log(a[-20]); // 8
console.log(a['-20']); // 8
<br>
// 下面讲解一下proxy的用法：
<br>
// const p = new Proxy(target, handler)
// target：要使用 Proxy 包装的目标对象
// handler：一个通常以函数作为属性的对象，注意是对象
<br>
// handler.get()：用于拦截属性的读取操作，返回我们想要它读取的属性值
// var p = new Proxy(target, {
//     get: function (target, property, receiver) {
//         //code
//     }
// });
// 主要用到的是target和property
// target：被代理的目标对象
// property：要读取的属性名称</code></pre>
</details>


#### 请实现一个uniq函数，实现数组去重

<details>
    <summary>展开</summary>
    <ol>
        <li>法一：用Set<pre><code>function uniq(array) {
    return new Set(array)
}</code></pre></li>
        <li>法二：用indexOf<pre><code>function uniq(array){
    var result = [];
    for (var i = 0; i < array.length; i++) {
        if (result.indexOf(array[i]) === -1){
            result.push(array[i]);
        }
    }
    return result;
}</code></pre></li>
    </ol>
</details>


