import React, { createContext, useReducer, useContext } from 'react';

const initialState = {
    name: 'initial-name',
    age: 0,
};

function reducer(state, action) {
    switch (action.type) {
        case 'increment':
            return {
                ...state,
                age: state.age + 1,
            };
        case 'decrement':
            return {
                ...state,
                age: state.age - 1,
            };
        default:
            throw new Error();
    }
}

const StoreContext = createContext();
const DispatchContext = createContext();

function useStore() {
    return useContext(StoreContext);
}

function useDispatch() {
    return useContext(DispatchContext);
}

function StoreProvider({ children }) {
    const [state, dispatch] = useReducer(reducer, initialState);
    return (
        <StoreContext.Provider value={state}>
            <DispatchContext.Provider value={dispatch}>
                {children}
            </DispatchContext.Provider>
        </StoreContext.Provider>
    );
}

export { useStore, useDispatch, StoreProvider };