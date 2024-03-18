import { Routes, Route } from 'react-router-dom';


import RegisterPage from './pages/Register';
import LoginPage from './pages/Login';
import HomePage from './pages/Home';
import NavbarComponent from './components/Navbar';
import ListPage from './pages/List';


import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';



function App() {

  return (
    <div>
    <NavbarComponent/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/book/list" element={<ListPage />} />
      </Routes>
    </div>
  );
}

export default App;
