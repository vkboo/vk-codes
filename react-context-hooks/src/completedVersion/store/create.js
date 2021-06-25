import React, { createContext, useContext, useEffect, useRef, useState, useMemo } from 'react';
import { isEqual } from 'lodash';
import PubSub from './PubSub';
const creatStore = (useModel) => {
    const AllContext = createContext({});
    const DepsContext = createContext({});
    return {
        useStore: (deps = m => m) => {
            const container = useContext(DepsContext);
            const [state, setState] = useState(container.state);
            const prevDepsRef = useRef(deps(container.state));
            useEffect(() => {
                const subscription = () => {
                    const prev = prevDepsRef.current;
                    const curr = deps(container.state);
                    // 深层比较两次依赖的值，不相等才setState触发更新
                    if (!isEqual(prev, curr)) {
                        setState(container.state);
                    }
                    prevDepsRef.current = curr;
                };
                container.subscribe(subscription);
                return () => {
                    container.unSubscribe();
                }
            }, []);
            return state;
        },
        Provider: ({ children }) => {
            const containerRef = useRef(new PubSub());
            const state = useModel();
            containerRef.current.state = state;
            useEffect(() => {
                containerRef.current.publish();
            })
            return (
                <AllContext.Provider value={state}>
                    <DepsContext.Provider value={containerRef.current}>
                        {children}
                    </DepsContext.Provider>
                </AllContext.Provider>
            )
        }
    }
};

export default creatStore;