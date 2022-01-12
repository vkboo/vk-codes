import React, { useRef, useState } from 'react';
import Test, { IRef } from './components/Test';
const App = () => {
    const ref = useRef<IRef>(null);
    const [count, setCount] = useState<number>(0);
    const [age, setAge] = useState<number>(10);
    const onAdd = () => {
        // 理想情况下，这里的操作并不会引起子组件的render调用
        setCount(n => n + 1);
    };
    const onClick = () => {
        ref.current?.foo();
    };
    const onAddAge = () => {
        setAge(n => n + 1);
    };
    return (
        <>
            <h1>App Count: {count}</h1>
            <button onClick={onAdd}>当前组件自增</button>
            <button onClick={onClick}>触发子组件内的方法</button>
            <button onClick={onAddAge}>子组件的age字段从props控制+1</button>
            <p>---下面是子组件部分---</p>
            <Test ref={ref} age={age} />
        </>
    )
};

export default App;