import { useState } from 'react';

const initialState = {
    name: 'vk',
    age: 21,
};

// const isObject = a => Array.prototype.toString.call(a) === '[object Object]';

const useStore = key => {
    const [state, setState] = useState(initialState);
    const setData = data => {
        setState({
            ...state,
            ...data,
        });
    }
    return [
        !key ? { ...state } : state[key],
        setData,
    ]
}


export default useStore;