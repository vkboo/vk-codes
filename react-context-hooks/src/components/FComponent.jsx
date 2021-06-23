import useStore from '../store/useStore';
export default function FComponent () {
    const [values, setValues] = useStore();
    const onChange = () => {
        setValues({name: 'adf'})
    }
    return <>
        <button onClick={onChange}>change store</button>
        <p>name: { values.name } </p>
        <p>age: { values.age } </p>
    </>
}