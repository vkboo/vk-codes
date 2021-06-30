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
            resolve(param)
        }, 600)
    })
}

function bar (param) {
    return new MyPromise((resolve, reject) => {
        setTimeout(() => {
            resolve(param * 2);
        }, 400)
    })
}


MyPromise.race([
    foo(1),
    bar(1)
]).then(res => {
    console.log(res)
})