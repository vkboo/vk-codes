import axios from 'axios';
import * as rcm from './requestCancelManage';

const instance = axios.create({
    headers: {
        'Content-Type': 'application/json',
    }
});

instance.interceptors.request.use(config => {
    rcm.removePending(config) // 在请求开始前，对之前的请求做检查取消操作
    rcm.addPending(config) // 将当前请求添加到 pending 中
    return config
}, error => {
    return Promise.reject(error)
})

instance.interceptors.response.use(response => {
    rcm.removePending(response.config) // 在请求结束后，移除本次请求
    return response
}, error => {
    if (!axios.isCancel(error)) {
        return Promise.reject({
            errcode: 0,
            errmsg: error,
        })
    } else {
        return Promise.reject({
            errcode: 0,
            errmsg: new Error(error.message)
        });
    }
});

export default instance;