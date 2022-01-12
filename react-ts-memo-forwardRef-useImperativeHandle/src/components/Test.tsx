import React, { memo, forwardRef, useImperativeHandle, FC } from 'react';

export interface IRef {
    foo(): void;
}

interface IProps {
    age: number;
}

const Test = forwardRef<IRef, IProps>((props, ref) => {
    console.log('子组件Render调用');
    useImperativeHandle(ref, () => {
        return {
            foo() {
                console.log('foo');
            }
        }
    });
    return (
        <>
            <p>test content</p>
            <p>age: {props.age}</p>
        </>
    )
});

export default memo(Test);