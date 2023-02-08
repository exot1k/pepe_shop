import './App.css';
import { Header } from './components/Header/Header';
import { Routers } from './Routes';

function App() {
  return (
    <>
      <Header />
      <div className='page-content'>
        <Routers />
      </div>
    </>
  );
}

export default App;
