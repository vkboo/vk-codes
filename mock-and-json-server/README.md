# Mock和json-server结合使用，实现假接口的代理功能

## Demo运行方法
1. 安装依赖
```
yarn
```

2. 开启`json-server`服务器
```
yarn json-server
```

3. 开启前端服务器
```
yarn start
```

## 功能迁移
1. 在需要实现`mock`+`json-server`的工程中安装依赖
```
yarn add -D mockjs json-server
```

2. 拷贝文件
    * 拷贝`json-server.json`到项目根目录
    * 拷贝`mock`文件夹到项目根目录

3. 参考此工程的`src/api/request.js`中`process.env.REACT_APP_MOCK`相关代码，再新工程中进行配置

4. 依照新工程的情况，看是否需要安装`cross-env`配置新的环境变量，以实现第三步(部分工程可以根据`.env`文件进行配置)。

## 增加mock数据
`project/src`下的文件夹下的js文件都是mock数据定义的地方，都是可以进行修改的，各个字段的表示如下：
```JavaScript
// 注意导入导出需使用commonJS的规范
const Mock = require('mockjs');
module.exports = {
    // 请求地址，不区分GET/POST
    url: 'api/student/list',
    // 响应的数据
    res: {
        errcode: 0,
        errmessage: '',
        data: Mock.mock({
            'list|10-100': [{
                'id': '@ID',
                'name': '@cname',
                'email': '@email',
                'age|10-50': 1,
            }]
        })
    }
}
```