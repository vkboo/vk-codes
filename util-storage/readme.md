# localStorage的封装
> 实现了`localStorage`的代码层级缓存，方便了对象的存取,设置过期时间的效果,还可以给他的`key`加上命名空间，防止多个`key`值之间混淆

## API

```typescript
interface IOperator {
    set: (key: string, value: any) => void;
    get<T>: (key: string, value: T, defaultValue?) => T;
    del: (key: string) => void;
    has: (key: string) => boolean;
}

Storage.set = IOperator.set
Storage.get<T> = IOperator.get<T>;
Storage.del = IOperator.del;
Storage.has = IOperator.has;
Storage.map = (namespaces: Array<string>, (namespace: string, operator: IOperator))
```
具体用法参考`./app.js`下的代码，列表了全部的用法