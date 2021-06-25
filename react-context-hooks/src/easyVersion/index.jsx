import Header from './components/Header'
import Footer from './components/Footer'
import { StoreProvider } from './store/index.js';
function EasyDemo() {
  return (
    <StoreProvider>
        <Header/>
        <Footer/>
    </StoreProvider>
  );
}

export default EasyDemo;
