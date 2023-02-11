import { useSelector } from 'react-redux';
import './App.css';
import { Header } from './components/Header/Header';
import { Loader } from './components/Loader/Loader';
import { IRootState } from './redux/store';
import { Routers } from './Routes';

function App() {

  let loading: boolean = useSelector((state: IRootState) => {
    return state.loader.queryCount > 0
  })

  return (
    <>
      <Header />
      <Loader visible={loading} />
      <div className='page-content'>
        <Routers />
      </div>
    </>
  );
}

export default App;
