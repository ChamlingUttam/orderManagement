import React from 'react'
import Page from './Page'
import Register from './pages/Register'
import { LogIn } from 'lucide-react'
import Login from './pages/Login'
import Navbar from './components/Navbar'
import {Toaster} from 'react-hot-toast'

const App = () => {
  return (
    <div>
      <Toaster position='top-center'/>

      {/* <Page/> */}
      {/* <Register/> */}
      {/* <Login/> */}
      {/* <Navbar/> */}
    </div>
  )
}

export default App
