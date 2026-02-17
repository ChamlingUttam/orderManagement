import React from 'react'
import Page from './Page'
import Register from './pages/Register'
import { LogIn } from 'lucide-react'
import Login from './pages/Login'
import Navbar from './components/Navbar'
import {Toaster} from 'react-hot-toast'
import { Routes, Route, Navigate } from "react-router-dom";
import { authStore } from './stores/auth.store'
import Home from './pages/Home'

const App = () => {

  const {authUser}  = authStore()
  return (
    <div>
      <Toaster position='top-center'/>

      <Routes>
        <Route path="/" element={authUser ? <Home/> : <Navigate to={"/login"} />} />
        <Route path="/login" element={!authUser ? <Login/> : <Navigate to="/" />} />
        <Route path="/register" element={!authUser ? <Register/> : <Navigate to='/login' />} />

      </Routes>
    </div>
  )
}

export default App
