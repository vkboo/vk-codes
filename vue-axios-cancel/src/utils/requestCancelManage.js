import qs from 'qs';
import axios from 'axios';

// 声明一个 Map 用于存储每个请求的标识 和 取消函数
const pendingMap = new Map();

/**
 * 添加请求
 * @param {Object} config 
 */
export const addPending = (config) => {
    const url = [
        config.method,
        config.url,
        qs.stringify(config.params),
        qs.stringify(config.data)
    ].join('&');
    config.cancelToken = config.cancelToken || new axios.CancelToken(cancel => {
        if (!pendingMap.has(url)) { // 如果 pendingMap 中不存在当前请求，则添加进去
            pendingMap.set(url, cancel);
        }
    });
}
/**
 * 移除请求
 * @param {Object} config 
 */
export const removePending = (config) => {
    const url = [
        config.method,
        config.url,
        qs.stringify(config.params),
        qs.stringify(config.data)
    ].join('&')
    if (pendingMap.has(url)) { // 如果在 pendingMap 中存在当前请求标识，需要取消当前请求，并且移除
        const cancel = pendingMap.get(url);
        cancel(url);
        pendingMap.delete(url);
    }
}
/**
 * 清空 pendingMap 中的请求（在路由跳转时调用）
 */
export const clearPending = () => {
    for (const [url, cancel] of pendingMap) {
        cancel(url);
    }
    pendingMap.clear();
}