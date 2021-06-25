import userInfoStore from '../store/userInfo';
const ActionComponent = () => {
    const { onAddAge, onReduceAge } = userInfoStore.useStore(m => [m.onAddAge]);
    return <>
        <button onClick={onAddAge}>+</button>
        <button onClick={onReduceAge}>-</button>
    </>
};
export default ActionComponent;