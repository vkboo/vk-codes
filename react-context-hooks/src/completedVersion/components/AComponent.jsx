import { userInfoStore } from '../store';

function NameLabel () {
    console.log('完整版: name render');
    const { name } = userInfoStore.useStore(m => [m.name]);
    return <p>name: { name }</p>
}

function AgeLabel () {
    console.log('完整版: age render');
    const { age } = userInfoStore.useStore(m => [m.age]);
    return <p>age: { age }</p>
}

const AComponent = () => {
    console.log('完整版: AComponent render');
    return (
        <>
            <NameLabel />
            <AgeLabel />
        </>
    );
};

export default AComponent;