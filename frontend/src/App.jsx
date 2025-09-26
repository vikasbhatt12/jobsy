import {Routes, Route} from 'react-router-dom';
import './App.css'
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import ProfilePage from './pages/ProfilePage';

function App() {
  

  return (
    <>
    navebar
    <Routes>
      <Route path="/register" element={<RegisterPage/>}/>
      <Route path="/login" element={<LoginPage/>}/>
      <Route path="/profile" element={<ProfilePage/>}/>
    </Routes>
      
    </>
  )
}

export default App
