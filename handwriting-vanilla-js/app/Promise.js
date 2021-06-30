//定义三种状态
const PENDING = "pending";
const FULFILLED = "fulfilled";
const REJECTED = "rejected";

function MyPromise(executor) {
    let self = this; // 缓存当前promise实例
    self.value = null;
    self.error = null;
    self.status = PENDING;

    self.onFulfilledCallbacks = [];
    self.onRejectedCallbacks = [];


    const resolve = (value) => {
        if (self.status !== PENDING) return;
        setTimeout(() => {
            self.status = FULFILLED;
            self.value = value;
            self.onFulfilledCallbacks.forEach(callback => callback(self.value));
        });
    };

    const reject = (error) => {
        if (self.status !== PENDING) return;
        setTimeout(() => {
            self.status = REJECTED;
            self.error = error;
            self.onRejectedCallbacks.forEach(callback => callback(self.error));
        });
    };
    executor(resolve, reject);
}

MyPromise.prototype.then = function (onFulfilled, onRejected) {
    // 成功回调不传给它一个默认函数
    onFulfilled = typeof onFulfilled === "function" ? onFulfilled : value => value;
    // 对于失败回调直接抛错
    onRejected = typeof onRejected === "function" ? onRejected : error => { throw error };

    let bridgePromise;
    let self = this;
    if (self.status === PENDING) {
        return bridgePromise = new MyPromise((resolve, reject) => {
            self.onFulfilledCallbacks.push((value) => {
                try {
                    // 看到了吗？要拿到 then 中回调返回的结果。
                    let x = onFulfilled(value);
                    resolvePromise(bridgePromise, x, resolve, reject);
                } catch (e) {
                    reject(e);
                }
            });
            self.onRejectedCallbacks.push((error) => {
                try {
                    let x = onRejected(error);
                    resolvePromise(bridgePromise, x, resolve, reject);
                } catch (e) {
                    reject(e);
                }
            });
        });
    } else if (self.status === FULFILLED) {
        return bridgePromise = new MyPromise((resolve, reject) => {
            setTimeout(() => {
                try {
                    // 状态变为成功，会有相应的 self.value
                    let x = onFulfilled(self.value);
                    // 暂时可以理解为 resolve(x)，后面具体实现中有拆解的过程
                    resolvePromise(bridgePromise, x, resolve, reject);
                } catch (e) {
                    reject(e);
                }
            })
        })
    } else {
        return bridgePromise = new MyPromise((resolve, reject) => {
            setTimeout(() => {
                try {
                    // 状态变为失败，会有相应的 self.error
                    let x = onRejected(self.error);
                    resolvePromise(bridgePromise, x, resolve, reject);
                } catch (e) {
                    reject(e);
                }
            })
        });
    }
}

MyPromise.prototype.catch = function (onRejected) {
    return this.then(null, onRejected);
}

function resolvePromise(bridgePromise, x, resolve, reject) {
    //如果x是一个promise
    if (x instanceof MyPromise) {
        // 拆解这个 promise ，直到返回值不为 promise 为止
        if (x.status === PENDING) {
            x.then(y => {
                resolvePromise(bridgePromise, y, resolve, reject);
            }, error => {
                reject(error);
            });
        } else {
            x.then(resolve, reject);
        }
    } else {
        // 非 Promise 的话直接 resolve 即可
        resolve(x);
    }
}

MyPromise.resolve = (param) => {
    if (param instanceof MyPromise) return param;
    return new MyPromise((resolve, reject) => {
        if (param && param.then && typeof param.then === 'function') {
            // param 状态变为成功会调用resolve，将新 Promise 的状态变为成功，反之亦然
            param.then(resolve, reject);
        } else {
            resolve(param);
        }
    })
}


MyPromise.reject = function (reason) {
    return new MyPromise((resolve, reject) => {
        reject(reason);
    });
}


MyPromise.prototype.finally = function (callback) {
    this.then(value => {
        return MyPromise.resolve(callback()).then(() => {
            return value;
        })
    }, error => {
        return MyPromise.resolve(callback()).then(() => {
            throw error;
        })
    })
}



export default MyPromise;