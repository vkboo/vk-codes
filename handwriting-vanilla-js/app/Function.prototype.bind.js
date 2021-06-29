Function.prototype.myBind = function (context, ...args) {
    // 异常处理
    if (typeof this !== "function") {
        throw new Error("Function.prototype.bind - what is trying to be bound is not callable");
    }
    // 保存this的值，它代表调用 bind 的函数
    var self = this;
    var fNOP = function () { };

    var fbound = function () {
        self.apply(this instanceof self ?
            this :
            context, args.concat(Array.prototype.slice.call(arguments)));
    }

    // bind的是构造函数的话，还需要拷贝当前构造函数的原型到新的构造函数中
    fNOP.prototype = this.prototype;
    fbound.prototype = new fNOP();

    return fbound;
}
