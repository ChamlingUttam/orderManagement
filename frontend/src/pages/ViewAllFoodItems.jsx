// import React from 'react'
// import { X } from 'lucide-react'
// import { useNavigate } from 'react-router-dom'
// import GetAllItem from '../Layouts/GetAllItem'
// import { crudStore } from '../stores/crud.store'

// const ViewAllFoodItems = () => {

//   const {getAllItem} = crudStore()
//   const navigate = useNavigate()

//   return (
//     <div className='min-h-screen flex justify-center items-center bg-black/40 px-4'>
//       <div className='relative bg-white rounded-2xl shadow-2xl w-full max-w-2xl p-6'>
        
//         {/* Close Button */}
//         <button
//           onClick={() => navigate('/')}
//           className='absolute top-3 right-3 text-gray-500 hover:text-red-500 transition'
//         >
//           <X size={20} />
//         </button>

//         <h2 className='text-xl font-bold mb-4 text-center'>All Food Items</h2>

//         {/* Your items list */}
//         {/* <GetAllItem /> */}
//         {getAllItem}

//       </div>
//     </div>
//   )
// }

// export default ViewAllFoodItems













// import React, { useEffect } from 'react'
// import { X, Loader } from 'lucide-react'
// import { useNavigate } from 'react-router-dom'
// import { crudStore } from '../stores/crud.store'

// const ViewAllFoodItems = () => {
//   const { items, getAllItem, isReading, deleteItem, isDeleting } = crudStore()
//   const navigate = useNavigate()

//   // ✅ Fetch items when page loads
//   useEffect(() => {
//     getAllItem()
//   }, [])

//   return (
//     <div className='min-h-screen flex justify-center items-center bg-black/40 px-4'>
//       <div className='relative bg-white rounded-2xl shadow-2xl w-full max-w-2xl p-6'>

//         {/* Close Button */}
//         <button
//           onClick={() => navigate('/')}
//           className='absolute top-3 right-3 text-gray-500 hover:text-red-500 transition'
//         >
//           <X size={20} />
//         </button>

//         <h2 className='text-xl font-bold mb-4 text-center'>All Food Items</h2>

//         {/* Loading state */}
//         {isReading ? (
//           <div className='flex justify-center py-8'>
//             <Loader className='animate-spin text-gray-400' />
//           </div>
//         ) : items.length === 0 ? (
//           <p className='text-center text-gray-400 py-8'>No items found.</p>
//         ) : (
//           <ul className='space-y-3 max-h-96 overflow-y-auto'>
//             {items.map((item) => (
//               <li
//                 key={item._id}
//                 className='flex justify-between items-center border rounded-xl px-4 py-3 hover:bg-gray-50 transition'
//               >
//                 <div>
//                   <p className='font-semibold text-gray-800'>{item.foodItem}</p>
//                   {/* <p className='text-sm text-gray-500'>{item.description}</p> */}
//                   <p className='text-sm font-bold text-green-600'>₹{item.price}</p>
//                 </div>

//                 <button
//                   onClick={() => deleteItem(item._id)}
//                   disabled={isDeleting}
//                   className='text-red-400 hover:text-red-600 transition disabled:opacity-50'
//                 >
//                   <X size={18} />
//                 </button>
//               </li>
//             ))}
//           </ul>
//         )}

//       </div>
//     </div>
//   )
// }

// export default ViewAllFoodItems
















import React, { useEffect } from 'react'
import { X, Loader } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { crudStore } from '../stores/crud.store'

const ViewAllFoodItems = () => {
  const { items, getAllItem, isReading, deleteItem, isDeleting } = crudStore()
  const navigate = useNavigate()

  useEffect(() => {
    getAllItem()
  }, [])

  return (
    <div className='min-h-screen flex justify-center items-start px-4 py-10'>
      <div className='relative bg-white rounded-2xl shadow-2xl w-full max-w-2xl p-6'>

        <button
          onClick={() => navigate('/')}
          className='absolute top-3 right-3 text-gray-500 hover:text-red-500 transition'
        >
          <X size={20} />
        </button>

        <h2 className='text-xl font-bold mb-4 text-center'>All Food Items</h2>

        {isReading ? (
          <div className='flex justify-center py-8'>
            <Loader className='animate-spin text-gray-400' />
          </div>
        ) : items.length === 0 ? (
          <p className='text-center text-gray-400 py-8'>No items found.</p>
        ) : (
          <ul className='space-y-3 max-h-[70vh] overflow-y-auto'>
            {items.map((item) => (
              <li
                key={item._id}
                className='flex justify-between items-center border rounded-xl px-4 py-3 hover:bg-gray-50 transition'
              >
                <div>
                  <p className='font-semibold text-gray-800'>{item.foodItem}</p>
                  <p className='text-sm font-bold text-green-600'>₹{item.price}</p>
                </div>

                <button
                  onClick={() => deleteItem(item._id)}
                  disabled={isDeleting}
                  className='text-red-400 hover:text-red-600 transition disabled:opacity-50'
                >
                  <X size={18} />
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}

export default ViewAllFoodItems