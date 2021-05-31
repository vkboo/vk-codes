import { useState } from 'react';
import ReactJson from 'react-json-view';
import request from './api/request';

function App() {
  const [res, setRes] = useState({});
  const handleRequest = () => {
    request('/api/student/list')
      .then(res => {
        setRes(res);
      })
  }
  return (
    <div className="App">
      <button onClick={handleRequest}>请求接口</button>
      <hr/>
      <h4>接口数据展示👇(具体打开F12 network 查看)</h4>
      <ReactJson src={res} />
    </div>
  );
}

export default App;
