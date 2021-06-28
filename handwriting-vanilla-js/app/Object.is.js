/**
 * Object.is与===的区别主要有两点
 * 1. ===判断NaN与NaN不等，Object.is判定它们相等
 * 2. ===判断+0和-0、0相等，Object.is判定0与+0相等，-0与（0和+0）不相等(0和+0本质，无论用哪个比较方式，值都是一样的)
 */
function is(x, y) {
    if (x === y) {
        //运行到1/x === 1/y的时候x和y都为0，但是1/+0 = +Infinity， 1/-0 = -Infinity, 是不一样的
        return x !== 0 ||
            y !== 0 ||
            1 / x === 1 / y;
    } else {
        //NaN===NaN是false,这是不对的，我们在这里做一个拦截，x !== x，那么一定是 NaN, y 同理
        //两个都是NaN的时候返回true
        return x !== x && y !== y;
    }
}

var r1 = is(+0, -0);
console.log(r1); // false

var r1 = is(NaN, NaN);
console.log(r1); // true
