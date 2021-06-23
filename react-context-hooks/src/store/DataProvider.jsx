import DataContext from './DataContext';
import useStore from './useStore';
const DataProvider = ({ children }) => {
    const [data] = useStore()   
    return (
        <DataContext.Provider value={data}>
            { children }
        </DataContext.Provider>
    );
}
export default DataProvider;