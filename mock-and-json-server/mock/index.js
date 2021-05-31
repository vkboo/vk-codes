let Path = require('path')
let glob = require('glob')

// 读取所有API文件
const apiFiles = glob.sync(Path.resolve(__dirname, './') + '/**/*.js', {
    nodir: true
})
let data = {}
// 输出所有api文件 i从1开始 跳过index.js
for (let i = 1, l = apiFiles.length; i < l; i++) {
    let api = require(apiFiles[i])
    if (api.url) {
        data[api.url.replace(/\//g, '_')] = api.res
    }
}
module.exports = function () {
    return data
}