import {BrowserRouter,Routes,Route} from 'react-router-dom'
import {ToastContainer} from 'react-toastify'
import Register from './pages/Register'
import Login from './pages/Login'
import Home from './pages/Home'
import Header from './components/Header'

import 'react-toastify/dist/ReactToastify.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
// import 'bootstrap/dist/js/bootstrap.bundle.min';

function App() {
  return (
    <>
    <BrowserRouter>
      <div className='container'>
        <Header/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path='/login' element={<Login/>}/>
        </Routes>
      </div>
    </BrowserRouter>
    <ToastContainer/>
    </>
  );
}

export default App;
