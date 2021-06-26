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

### 代码参考