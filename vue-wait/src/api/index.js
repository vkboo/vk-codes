const request = delay => new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve({
            list: [1,2,3,4,5,6,7]
        })
    }, delay)
});
export default request;