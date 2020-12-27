#### 介绍防抖原理及适用场景，并用JavaScript实现

<details>
    <summary>展开</summary>
    <ul>
        <li>原理：在事件被触发一段时间后再执行回调，如果在这段时间内又被触发，则重新计时</li>
    	<li>
            适用场景：
            <ul>
                <li>如果多次点击提交按钮，只执行最后一次提交</li>
                <li>搜索框输入时，输入停止一段时间再进行搜索</li>
            </ul>
        </li>
        <li>实现：<pre><code>function debounce(func, delay) {
    let timer = null;
    return function () {
        clearTimeout(timer);
        timer = setTimeout(func, delay);
    }
}
<br>
let flag = 0;
function foo() {
    flag++;
    console.log('Number of calls: %d', flag);
}
<br>
var x = document.getElementById("b");
x.addEventListener('click', debounce(foo, 2000));</code></pre></li>
    </ul>
</details>




#### 介绍节流原理及适用场景，并用JavaScript实现

<details>
    <summary>展开</summary>
    <ul>
        <li>原理：规定一段时间内触发事件只能执行一次函数，如果这段时间内多次触发事件，则只有一次生效</li>
    	<li>
            适用场景：
            <ul>
                <li>监听滚动事件，比如滑到底部自动加载更多，只有一次生效</li>
            </ul>
        </li>
        <li>实现：<pre><code>function throttle(func, delay) {
    let timer = null;
    return function () {
        if (!timer) {
            timer = setTimeout(function () {
                func();
                timer = null;
            }, delay);
        }
    }
}
<br>
let flag = 0;
function foo() {
    flag++;
    console.log('Number of calls: %d', flag);
}
<br>
var x = document.getElementById("b");
x.addEventListener('click', throttle(foo, 2000));</code></pre></li>
    </ul>
</details>



#### 防抖和节流的区别？

<details>
    <summary>展开</summary>
    <p>
        防抖和节流都是防止某一时间段内的频繁触发，区别在于防抖是只执行最后的那一次，而节流是会先执行一次。比如我不间断地重复触发一段时间，防抖只会在最后执行一次，而节流会平均地执行好几次
    </p>
</details>


