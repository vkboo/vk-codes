// import './instanceOf.js';
// import './Object.is.js';
import './Array.prototype.map.js';

const ary = [1,2,3].myMap((e,i,arr) => {
    console.log({
        e,
        i,
        arr,
    })
    return e + i;
});
console.log(ary); // 1,3, 5