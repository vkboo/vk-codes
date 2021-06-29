// import './instanceOf.js';
// import './Object.is.js';
// import './Array.prototype.map.js';
import './Array.prototype.reduce.js';


// var arr3 = [1,2,3].myReduce((state, current) => {
//     state.push(current * 2);
//     return state;
// }, []);

var arr3 = [1,2,3].myReduce((state, current) => {
    return state + current;
});
console.log(arr3); 