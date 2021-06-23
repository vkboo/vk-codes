
import { DataProvider } from './store';
import FComponent from './components/FComponent.jsx';
function App() {
  return (
    <DataProvider>
      <div className="App">
        <FComponent/>
      </div>
    </DataProvider>
  );
}

export default App;
