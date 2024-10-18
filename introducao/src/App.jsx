import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// import NavbarComponent from './components/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/header';
// import Saudacao from './components/Saudacao/Saudacao';
// import BotaoDinamico from './components/BotaoDinamico/BotaoDinamico';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage';
import Login from './pages/login';

function App() {

  return (
    <>
    <Router>
      <div>
      <Header/>
      <Routes>
          <Route path='/home' element={<HomePage/>}/>
          <Route path= '/login' element={<Login/>}/>
          <Route path= '*' element={<HomePage/>}/>
        </Routes>
    </div>
    </Router>
    </>
  )
}

export default App
