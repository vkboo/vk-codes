// import './instanceOf.js';
// import './Object.is.js';
// import './Array.prototype.map.js';
// import './Array.prototype.reduce.js';
// import './Array.prototype.push.js';
// import './Array.prototype.pop.js';
// import './Array.prototype.filter.js';
// import './Array.prototype.splice.js';
import newOperator from './new.js';


function Person() {
    this.name = '123'
}

Person.prototype.sayName = function () {
    console.log(this.name);
}
var p = newOperator(Person)
console.log(p)