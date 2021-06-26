# Context API + Hooks 实现数据状态管理

## 简单版
### 实现思路
1. Store数据与Action操作分别存储于两个顶层的嵌套Context中
```jsx
import { useReducer, createContext } from 'react';
// 创建数据源
function reducer (state, action) {
    // ...
    // return state;
}
const [state, dispatch] = useReducer(reducer, initialState);
// 创建Context
const DataContext = createContext();
const DispatchContext = createContext();
const Provider = ({ children }) => (
    <DataContext.Provider value={state}>
        <DispatchContext>{ children }</DispatchContext>
    </DataContext.Provider>
)
```
2. 需要数据或者操作的时候，通过`useContext`引用context的值进行使用
```jsx
import { useContext } from 'react';
const Count = () => {
    const state = useContext(DataContext);
    const dispatch = useContext(DispatchContext);
    const onHandle = () => {
        dispatch({
            type: 'SOMETHING_TYPE',
        });
    };
    return (
        <>
            <span>{state}</span>
            <button onClick={onHandle}>handleSomething<button>
        </>
    )
}
```

这样做的弊端: `DataContext`的value改变了之后，在所有使用`useContext(DataContext)`的组件，都会引起`re-render`。

## 完整版(性能优化)
### 实现思路
1. 首先组件肯定不能直接使用`useContext`了，不然Context一更新，所有的依赖到相关Context的组件都会更新
2. 自定义`Context.Provider`，`Context.Provider`包裹外层，value中放入的是`PubSub`的实例，实例的`state`属性放入了当前的数据
3. 所以需要自定义一个hook`useStore`用来获取组件需要依赖数据，这个hook的数据源依然来自`useContext`,这里还维护了一个局部的`useState`，`state`的初始值就是`Context.Provider` `value`的`state`的值
4. 组件在改动数据的时候，`Context.Provider`组件会进行更新的操作，引用对应的`useModel`的数据变化了，然后触发了`PubSub`实例的`publish`，在`useStore`中的`subscription`函数执行，对依赖数据进行深比较后，决定是否`setState`，只有真正执行了`setState`的函数关联的组件，才回重绘执行。

通过以上的4点，就做到了局部的更新