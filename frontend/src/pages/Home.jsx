// import React from 'react'
// import Navbar from '../components/Navbar'

// const Home = () => {
//   return (
//     <div>
//       <Navbar/>
//     </div>
//   )
// }

// export default Home











import React, { useEffect } from 'react'
import { tableStore } from '../stores/table.store'
import PageSkeleton from '../skeleton/PageSkeleton'

const Home = () => {
  const { tables, getTables, isGettingTable } = tableStore()

  useEffect(() => {
    getTables()
  }, [])

  return (
    <div className="px-6 py-6 space-y-4">
      {isGettingTable ? (
        <p className="text-center text-gray-400 mt-10">Loading tables...</p>
      ) : tables.length === 0 ? (
        <p className="text-center text-gray-400 mt-10">No tables found.</p>
      ) : (
        tables.map((table) => (
          <PageSkeleton key={table._id} number={table.number} />
        ))
      )}
    </div>
  )
}

export default Home