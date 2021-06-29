/**
 * 本质上就是使用obj.fn的方式来调用，使其能够绑定在fn函数内绑定this为obj
 * 然后再将obj挂载的fn属性删除
 */
 Function.prototype.myCall = function (context, ...args) {
    let context = context || window;
    let fn = Symbol('fn');
    context.fn = this;

    let result = eval('context.fn(...args)');

    delete context.fn
    return result;
}