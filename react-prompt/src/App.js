import { prompt } from "./components/Prompt.jsx";
function App() {
  const handleClk = () => {
    prompt('这里是消息内容', {
      onOk() {
        console.log('ok')
      },
      onCancel() {
        console.log('cancel')
      },
    });
  };
  return (
    <div className="App">
      <button onClick={handleClk}>调用prompt</button>
    </div>
  );
}

export default App;
