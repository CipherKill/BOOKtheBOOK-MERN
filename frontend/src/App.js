import {BrowserRouter,Routes,Route} from 'react-router-dom'
import {ToastContainer} from 'react-toastify'
import Register from './pages/Register'
import Login from './pages/Login'
import Home from './pages/Home'
import Header from './components/Header'
import PrimaryMenu from './components/PrimaryMenu'
import PrivateRoute from './components/PrivateRoute'
import MyBooks from './pages/MyBooks'
import Books from './pages/Books'

import 'react-toastify/dist/ReactToastify.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
// import 'bootstrap/dist/js/bootstrap.bundle.min';

function App() {
  return (
    <BrowserRouter>
      <div className='pagestuff'>
        <Header/>
        <PrimaryMenu/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/books' element={<Books/>}/>
          <Route path='/mybooks' element={<PrivateRoute/>}>
            <Route path='/mybooks' element={<MyBooks/>}/>
          </Route>
        </Routes>
      </div>
      <ToastContainer/>
    </BrowserRouter>
  );
}

export default App;
