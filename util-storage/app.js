import Storage from './storage.js';

/** 使用默认的命名空间 */

// 存值
Storage.set('name', 'vkbo');
// 取值
const nameValue1 = Storage.get('name');
console.log(nameValue1); // vkbo

// 删除存值
Storage.del('name');
const nameValue2 = Storage.get('name');
console.log(nameValue2); // undefined

// 查看某字段下是否有值
const hasValue1 = Storage.has('name');
console.log(hasValue1); // false
Storage.set('name', 'vkbo');
const hasValue2 = Storage.has('name');
console.log(hasValue2); // true

// 设置有时效性的键值对
// 设置3s后失效
Storage.set('lang', 'zh', 3);
const langValue1 = Storage.get('lang');
console.log(langValue1); // zh
setTimeout(() => {
    const langValue1 = Storage.get('lang');
    console.log(langValue1); // undefined
}, 4000)

// 获取默认值
const ageValue = Storage.get('age', 12);
console.log(ageValue); // 12

/** 使用自定义的命名空间 */
// 带自定义命名空间的存值
Storage.map(['namespace-a', 'namespace-b'], (currentNameSpace, { set }) => {
    if (currentNameSpace === 'namespace-a') {
        set('name', 'vkbo-a');
    } else if (currentNameSpace === 'namespace-b') {
        set('name', 'vkbo-b');
    }
});

// 带自定义命名空间的取值
Storage.map(['namespace-a', 'namespace-b'], (currentNameSpace, { get }) => {
    if (currentNameSpace === 'namespace-a') {
        const nameAValue = get('name');
        console.log(nameAValue); // vkbo-a
    } else if (currentNameSpace === 'namespace-b') {
        const nameBValue = get('name');
        console.log(nameBValue); // vkbo-b
    }
});