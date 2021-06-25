import React from 'react';
import { useStore } from '../store';

function NameLabel () {
    // 因为这里的`useStore`就是依赖了`useContext(StoreContext);`，所以只要StoreContext.Provider中的value变了，这个组件就要重新执行，这是一种性能的浪费
    console.log('name render');
    const state = useStore();
    return <p>name: { state.name }</p>
}

function AgeLabel () {
    console.log('age render');
    const state = useStore();
    return <p>age: { state.age }</p>
}

function Footer() {
    console.log('footer render');
    return (
        <>
            <NameLabel />
            <AgeLabel />
        </>
    );
}

export default Footer;