// import React from 'react'
// import Register from './pages/Register'
// import { LogIn } from 'lucide-react'
// import Login from './pages/Login'
// import {Toaster} from 'react-hot-toast'
// import { Routes, Route, Navigate } from "react-router-dom";
// import { authStore } from './stores/auth.store'
// import Home from './pages/Home'
// import PageLayout from './Layouts/PageLayout'
// import ViewAllFoodItems from './pages/ViewAllFoodItems'

// const App = () => {

//   const {authUser}  = authStore()
//   return (
//     <div>
//       <Toaster position='top-center'/>
//       <Routes>
//         <Route path='/' element={<PageLayout/>}/>
//         <Route path='/viewItems' element={authUser ? <ViewAllFoodItems/> : <Navigate to={"/login"} />}/>
//         <Route path="/" element={authUser ? <Home/> : <Navigate to={"/login"} />} />
//         <Route path="/login" element={!authUser ? <Login/> : <Navigate to="/" />} />
//         <Route path="/register" element={!authUser ? <Register/> : <Navigate to='/login' />} />

//       </Routes>
//     </div>
//   )
// }

// export default App




















import React from 'react'
import Login from './pages/Login'
import Register from './pages/Register'
import { Toaster } from 'react-hot-toast'
import { Routes, Route, Navigate } from "react-router-dom"
import { authStore } from './stores/auth.store'
import Home from './pages/Home'
import PageLayout from './Layouts/PageLayout'
import ViewAllFoodItems from './pages/ViewAllFoodItems'

const App = () => {
  const { authUser } = authStore()

  return (
    <div>
      <Toaster position='top-center' />
      <Routes>
        {/* Protected routes — Navbar always visible */}
        <Route element={<PageLayout />}>
          <Route path='/' element={authUser ? <Home /> : <Navigate to="/login" />} />
          <Route path='/viewItems' element={authUser ? <ViewAllFoodItems /> : <Navigate to="/login" />} />
        </Route>

        {/* Auth routes — no Navbar */}
        <Route path="/login" element={!authUser ? <Login /> : <Navigate to="/" />} />
        <Route path="/register" element={!authUser ? <Register /> : <Navigate to="/" />} />
      </Routes>
    </div>
  )
}

export default App