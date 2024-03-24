import { Routes, Route } from 'react-router-dom';


import RegisterPage from './pages/Register';
import LoginPage from './pages/Login';
import HomePage from './pages/Home';
import NavbarComponent from './components/Navbar';
import ListPage from './pages/List';
import BookDetail from './pages/Detail';

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
        <Route path="/book/view/:bookId" element={<BookDetail/>} />
      </Routes>
    </div>
  );
}

export default App;
