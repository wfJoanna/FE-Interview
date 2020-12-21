#### 介绍instanceof原理，并手动实现

<details>
    <summary>展开</summary>
    <p>原理：</p>
    <p>instanceof的原理就是instanceof会遍历左边变量的原型链，直到找到右边变量的prototype，如果找到了就返回true，如果没找到就返回false</p>
    <p>手动实现：</p>
</details>

```javascript
function myinstanceof(left, right) {
    let leftVar = left.__proto__;
    const rightVar = right.prototype;
    while (leftVar) {
        if (leftVar === rightVar) {
            return true;
        }
        leftVar = leftVar.__proto__;
    }
    return false;
} // 注意，这个并不准确，只是粗略地实现，实际上有很多情况漏掉了，和instanceof结果会不同
```



#### 说下instanceof的各种类型的返回值

```javascript
// 以下并不是标准的js代码
22 instanceof Number => false
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
[].__proto__ instanceof Object => true
```

