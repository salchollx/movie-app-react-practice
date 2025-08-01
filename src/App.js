import { Routes, Route } from 'react-router-dom';
import './css/App.css';
import Home from './pages/Home';
import Favorites from './pages/Favorites';
import NavBar from './components/NavBar';
import Login from './components/Login';

function App(){
  return (
    <div>
      <NavBar/>
      <main className='main-content'>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/Favorites' element={<Favorites/>}/>
          <Route path="/Login" element={<Login/>}/>
        </Routes>
      </main>
    </div>
  );
}

export default App;
