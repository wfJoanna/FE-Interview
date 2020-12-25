#### JS继承有哪些方法？

<details>
    <summary>展开</summary>
    <ol>
        <li>类继承</li>
        <li>构造函数继承</li>
        <li>组合继承</li>
        <li>原型继承</li>
        <li>寄生组合式继承</li>
    </ol>
    <p>
        目前我只会原型继承和构造函数继承
    </p>
</details>


## 原型继承

#### 使用原型链如何继承？

<details>
    <summary>展开</summary>
    <p>
        按照我的理解，就是重写子类的构造函数的prototype，也就是原型对象，指向父类的一个实例对象
    </p>
</details>



#### 原型继承举个例子?

<details>
    <summary>展开</summary>
    <pre><code>function Father() {
    this.property = true;
}
Father.prototype.getFatherValue = function () {
    return this.property;
}
function Son() {
    this.sonProperty = false;
}
<br>
<b>Son.prototype = new Father();</b>
// 也可以这样：（但麻烦了一点）
// var f = new Father();
// Son.prototype = f;
<br>
var instance = new Son();
console.log(instance.property); // true
console.log(instance.getFatherValue()); //true</code></pre>
</details>


#### 原型继承的优缺点？

<details>
    <summary>展开</summary>
    <p>
        优点：
    </p>
    <ol>
        <li>既可以继承构造函数属性和方法，又可以继承原型的属性和方法（构造函数继承方式就只能继承构造函数的属性和方法）</li>
        <li>所有的实例都能共享原型上的方法，这样可以节省内存（如果采用构造函数继承方式，子类的每个实例的方法都是独立的，会浪费很多内存）</li>
    </ol>
    <p>
        缺点：
    </p>
    <ol>
        <li>在创建子类的实例时，没有办法向父类的构造函数传参（构造函数继承方式可以）</li>
        <li>父类的引用类型属性将被所有的子类实例共享，一个子类实例修改这种属性，就会影响所有的实例</li>
    </ol>
</details>



## 构造函数继承

#### 如何使用构造函数继承？

<details>
    <summary>展开</summary>
    <p>按照我的理解，就是在子类的构造函数里用call之类的调用父类的构造函数，这样子类就继承了父类的构造函数的属性和方法（但是没有父类原型的属性和方法哦）</p>
</details>



#### 构造函数继承举例

<details>
    <summary>展开</summary>
    <pre><code>function Parent() {
    this.money = 1;
}
function Child() {
    Parent.call(this) //调用Parent构造函数
}
<br>
var instance = new Child();
console.log(instance.money);</code></pre>
</details>