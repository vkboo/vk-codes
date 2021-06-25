import { useMemo } from 'react';

const StoreProvider = ({ children, value }) => {
    const ProviderUnion = useMemo(() => {
        return props => {
            return value.reduceRight((state, { Provider }) => {
                return <Provider>{state}</Provider>
            }, props.children)
        }
    }, []);
    return <ProviderUnion>{ children }</ProviderUnion>
};

export default StoreProvider;