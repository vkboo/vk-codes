// import './instanceOf.js';
// import './Object.is.js';
// import './Array.prototype.map.js';
// import './Array.prototype.reduce.js';
// import './Array.prototype.push.js';
// import './Array.prototype.pop.js';
// import './Array.prototype.filter.js';
// import './Array.prototype.splice.js';
// import newOperator from './new.js';
import './Function.prototype.bind.js';

var obj = {
    name: 'vkb',
}

function sayName (a, b) {
    // console.log(this.name, a, b)
}

var _sayName = sayName.myBind(obj, 'a', 'b');

_sayName();


var obj = {
    name: 'vkb'
}
function Person(name) {
    console.log(this)
    this.name = name;
}

var BPerson = Person.myBind(obj);
var person = new BPerson('vkk');