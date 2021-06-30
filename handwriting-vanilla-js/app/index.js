// / import './instanceOf.js';
// import './Object.is.js';
// import './Array.prototype.map.js';
// import './Array.prototype.reduce.js';
// import './Array.prototype.push.js';
// import './Array.prototype.pop.js';
// import './Array.prototype.filter.js';
// import './Array.prototype.splice.js';
// import newOperator from './new.js';
// import './Function.prototype.bind.js';
// import './Function.prototype.call.js';
// import './Function.prototype.apply.js';
import MyPromise from './Promise.js';
function foo(param) {
    return new MyPromise((resolve, reject) => {
        setTimeout(() => {
            reject(param)
        }, 200)
    })
}


foo(1)
    .then(res => {
        // res = 1
        console.log('第一次', res)
        return foo(res * 2)
    })
    .catch(err => {
        console.warn('err', err)
    })
    .finally(xx => {
        console.log('ff',xx)
    })