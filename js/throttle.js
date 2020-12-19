/*用JavaScript进行实现节流*/

function throttle(func, delay) {
    let timer = null;
    return function () {
        let context = this;
        let args = arguments;
        if (!timer) {
            timer = setTimeout(function () {
                func.apply(context, args);
                timer = null;
            }, delay);
        }
    }
}

let flag = 0;
function foo() {
    flag++;
    console.log('Number of calls: %d', flag);
}

document.body.addEventListener('scroll', throttle(foo, 2000));