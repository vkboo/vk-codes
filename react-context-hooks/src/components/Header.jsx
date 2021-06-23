import React from 'react';
import { useDispatch } from '../store';

function Header() {
    const dispatch = useDispatch();
    console.log('header udpate');

    return (
        <>
            <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
            <button onClick={() => dispatch({ type: 'increment' })}>+</button>
        </>
    );
}

export default Header;