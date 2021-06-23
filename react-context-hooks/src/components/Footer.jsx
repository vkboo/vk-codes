import React from 'react';
import { useStore } from '../store';

function Footer() {
    const state = useStore();
    console.log('footer udpate');

    return (
        <p>{state.count}</p>
    );
}

export default Footer;