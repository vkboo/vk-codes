import axios from 'axios';
import * as reqCancelManage from './requestCancelManage';

// 声明一个 Map 用于存储每个请求的标识 和 取消函数
const pending = new Map()

axios.interceptors.request.use(config => {
    console.log({ config })
    reqCancelManage.removePending(config) // 在请求开始前，对之前的请求做检查取消操作
    reqCancelManage.addPending(config) // 将当前请求添加到 pending 中
    // other code before request
    return config
}, error => {
    return Promise.reject(error)
})

axios.interceptors.response.use(response => {
    reqCancelManage.removePending(response.config) // 在请求结束后，移除本次请求
    return response
}, error => {
    if (axios.isCancel(error)) {
        console.log('repeated request: ' + error.message)
    } else {
        // handle error code
    }
    return Promise.reject(error)
})
