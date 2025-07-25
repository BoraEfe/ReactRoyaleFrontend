import './App.css'
import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import RegisterPage from './pages/RegisterPage'
import LoginPage from './pages/LoginPage'
import GameMenu from './pages/GameMenu'

function App() {


  return (
    <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/register" element={<RegisterPage/>}/>
      <Route path="/gamemenu" element={<GameMenu/>}/>
      <Route path="/login" element={<LoginPage/>}/>
    </Routes>
  )
}

export default App
