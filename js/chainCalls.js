/*实现链式调用*/
// 链式调用的核心就在于调用完的方法将自身实例返回

function Class1(){
    console.log('初始化');
}

Class1.prototype.method=function(param){
    console.log(param);
    return this;
}

var cl=new Class1();
cl.method('1').method('2').method('3');

// var a = {
//     b: function () { console.log('1'); return this; },
//     c: function () { console.log('2'); return this; }
// };
// a.b().c();