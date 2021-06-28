function myInstanceOf (left, right) {
    if (typeof left !== 'object' || left === 'null') return false;
    let proto = Object.getPrototypeOf(left);
    while(true) {
        if (proto === null) return false;
        if (proto === right.prototype) return true;
        proto = Object.getPrototypeOf(proto);
    }
}

/**
 * test case
 */
function Person () {}
var p = new Person();
var r1 = myInstanceOf(p, Person);
console.log(r1); // true

var r2 = myInstanceOf(p, Object);
console.log(r2); // true