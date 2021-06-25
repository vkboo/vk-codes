import stores from './store';
import StoreProvider from './store/StoreProvider.jsx';
import AComponent from './components/AComponent.jsx';
import ActionComponent from './components/ActionComponent.jsx';
const CompletedVersion = () => {
    return (
        <StoreProvider value={stores}>
            <p><em>优化之后：增加age字段的时候，只是依赖了name字段的NameLabel组件不会执行</em></p>
            <ActionComponent />
            <AComponent />
        </StoreProvider>
    )
}
export default CompletedVersion;