#### 说一说promise有几个状态

<details>
    <summary>展开</summary>
    <ol>
        <li>异步操作未完成（pending）</li>
        <li>异步操作成功（fulfilled）</li>
        <li>异步操作失败（rejected）</li>
    </ol>
    <p>
        fulfilled和rejected合称为resolved（已定型）
    </p>
    <p>
        这三种状态的变化途径只有两种：
        <ol>
            <li>从“未完成”到“成功”</li>
            <li>从“未完成”到“失败”</li>
    	</ol>
    	Promise实例的状态变化只会发生一次
    </p>
</details>



#### promise跟async await的区别、使用场景？

<details>
    <summary>展开</summary>
    <ol>
        <li>Promise是对象，用来生成一个异步程序；async function是声明语句，用来定义一个异步函数；await是表达式，用于暂停当前异步函数的执行，等待Promise处理完成</li>
        <li>Promise的错误无法在外部捕获，只能在内部进行预判处理；async是在异步函数中像同步代码一样使用try-catch语句</li>
        <li>Promise本身是无法中断的，async使用await中断程序</li>
    </ol>
    <p>
        使用场景：一般在异步处理时使用，更推荐使用async（不准确）
    </p>
</details>



#### Promise构造函数是同步还是异步执行？then呢？

<details>
    <summary>展开</summary>
    <p>
        Promise构造函数是同步的，then是异步的（相当不靠谱！我无法理解，反正先这么记着吧）
    </p>
</details>



#### JS异步解决方案的发展历程及其优缺点

<details>
    <summary>展开</summary>
    <ol>
        <li>
            <b>回调函数（callback）</b>：比如setTimeout
            <ul>
                <li>优点：解决了同步的问题</li>
                <li>缺点：回调地狱；不能用try-catch捕获错误；不能return</li>
            </ul>
        </li>
        <li>
            <b>Promise</b>：
            <ul>
                <li>优点：解决了回调地狱的问题；让异步操作写起来就像同步操作</li>
                <li>缺点：无法取消Promise</li>
            </ul>
        </li>
        <li>
            <b>Generator</b>：
            <ul>
                <li>优点：可以控制函数的执行</li>
            </ul>
        </li>
        <li>
            <b>async</b>：
            <ul>
                <li>优点：代码清晰；处理了回调地狱的问题</li>
                <li>缺点：await将异步代码改造成了同步代码，可能会导致性能降低</li>
            </ul>
        </li>
    </ol>
</details>

