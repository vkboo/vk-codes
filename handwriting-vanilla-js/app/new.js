export default function newOperator(ctor, ...args) {
    if (typeof ctor !== 'function') {
        throw 'newOperator function the first param must be a function';
    }
    // 创建一个类原型的对象
    let obj = Object.create(ctor.prototype);
    // 执行构造函数，挂载this中的属性
    let res = ctor.apply(obj, args);

    let isObject = typeof res === 'object' && res !== null;
    let isFunction = typeof res === 'function';
    return isObject || isFunction ? res : obj;
};
