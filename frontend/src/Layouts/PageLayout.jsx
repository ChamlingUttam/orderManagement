// import React from 'react'
// import Navbar from '../components/Navbar'
// import { Outlet } from 'react-router-dom'
// const PageLayout = () => {
//   return (
//     <div>
//       <Navbar/>
//       <main>
//         <Outlet/>
//       </main>
//     </div>
//   )
// }

// export default PageLayout



import React from 'react'
import Navbar from '../components/Navbar'
import { Outlet } from 'react-router-dom'

const PageLayout = () => {
  return (
    <div>
      <Navbar />
      <main className="pt-20">  {/* offset for fixed navbar */}
        <Outlet />
      </main>
    </div>
  )
}

export default PageLayout