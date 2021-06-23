
import CommentProvider from './store/CommentProvider'
import CommentList from './components/CommentList.jsx';
function App() {
  return (
    <CommentProvider>
        <CommentList/>
    </CommentProvider>
  );
}

export default App;
