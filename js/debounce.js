/*用JavaScript进行实现防抖*/

function debounce(func, delay) {
    let timer = null;
    return function () {
        let context = this;
        let args = arguments;
        clearTimeout(timer);
        timer = setTimeout(function () {
            func.apply(context, args);
        }, delay);
    }
}

let flag = 0;
function foo() {
    flag++;
    console.log('Number of calls: %d', flag);
}

document.body.addEventListener('scroll', debounce(foo, 2000));
