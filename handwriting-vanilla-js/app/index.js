// import './instanceOf.js';
// import './Object.is.js';
// import './Array.prototype.map.js';
// import './Array.prototype.reduce.js';
// import './Array.prototype.push.js';
import './Array.prototype.pop.js';


// var arr3 = [1,2,3].myReduce((state, current) => {
//     state.push(current * 2);
//     return state;
// }, []);

// var arr3 = [1,2,3].myReduce((state, current) => {
//     return state + current;
// });

var a = [1,2];
console.log(a.pop());
console.log(a);