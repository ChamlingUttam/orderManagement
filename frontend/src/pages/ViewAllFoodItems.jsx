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




































// import React, { useEffect, useState } from 'react'
// import { X, Loader, Pencil, Trash2 } from 'lucide-react'
// import { useNavigate } from 'react-router-dom'
// import { crudStore } from '../stores/crud.store'
// import toast from 'react-hot-toast'

// const ViewAllFoodItems = () => {
//   const { items, getAllItem, isReading, deleteItem, isDeleting, updateItem, isUpdating } = crudStore()
//   const navigate = useNavigate()

//   const [editingItem, setEditingItem] = useState(null)
//   const [editForm, setEditForm] = useState({ foodItem: '', price: '' })

//   useEffect(() => {
//     getAllItem()
//   }, [])

//   const handleEditClick = (item) => {
//     setEditingItem(item._id)
//     setEditForm({ foodItem: item.foodItem, price: item.price })
//   }

//   const handleEditSubmit = async (e) => {
//     e.preventDefault()

//     if (!editForm.foodItem.trim()) {
//       toast.error("Food item name is required")
//       return
//     }
//     if (!editForm.price || Number(editForm.price) <= 0) {
//       toast.error("Enter a valid price")
//       return
//     }

//     await updateItem(editingItem, {
//       foodItem: editForm.foodItem,
//       price: Number(editForm.price)
//     })

//     setEditingItem(null)
//     setEditForm({ foodItem: '', price: '' })
//   }

//   const handleCancelEdit = () => {
//     setEditingItem(null)
//     setEditForm({ foodItem: '', price: '' })
//   }

//   // ✅ sorted alphabetically
//   const sortedItems = [...items].sort((a, b) =>
//     a.foodItem.localeCompare(b.foodItem)
//   )

//   return (
//     <div className='min-h-screen flex justify-center items-start px-4 py-10'>
//       <div className='relative bg-white rounded-2xl shadow-2xl w-full max-w-2xl p-6'>

//         {/* Close Button */}
//         <button
//           onClick={() => navigate('/')}
//           className='absolute top-3 right-3 text-gray-500 hover:text-red-500 transition'
//         >
//           <X size={20} />
//         </button>

//         <h2 className='text-xl font-bold mb-4 text-center'>All Food Items</h2>

//         {isReading ? (
//           <div className='flex justify-center py-8'>
//             <Loader className='animate-spin text-gray-400' />
//           </div>
//         ) : sortedItems.length === 0 ? (
//           <p className='text-center text-gray-400 py-8'>No items found.</p>
//         ) : (
//           <ul className='space-y-3 max-h-[70vh] overflow-y-auto'>
//             {sortedItems.map((item) => (
//               <li
//                 key={item._id}
//                 className='border rounded-xl px-4 py-3 hover:bg-gray-50 transition'
//               >
//                 {editingItem === item._id ? (
//                   <form onSubmit={handleEditSubmit} className='space-y-2'>
//                     <input
//                       type='text'
//                       id='editFoodItem'
//                       name='foodItem'
//                       value={editForm.foodItem}
//                       onChange={(e) => setEditForm({ ...editForm, foodItem: e.target.value })}
//                       className='w-full border p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
//                       placeholder='Food item name'
//                     />
//                     <input
//                       type='number'
//                       id='editPrice'
//                       name='price'
//                       value={editForm.price}
//                       onChange={(e) => setEditForm({ ...editForm, price: e.target.value })}
//                       className='w-full border p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
//                       placeholder='Price'
//                     />
//                     <div className='flex gap-2'>
//                       <button
//                         type='submit'
//                         disabled={isUpdating}
//                         className='flex-1 bg-blue-600 text-white py-1.5 rounded-lg hover:bg-blue-700 transition disabled:opacity-50 text-sm'
//                       >
//                         {isUpdating ? 'Saving...' : 'Save'}
//                       </button>
//                       <button
//                         type='button'
//                         onClick={handleCancelEdit}
//                         className='flex-1 bg-gray-200 text-gray-700 py-1.5 rounded-lg hover:bg-gray-300 transition text-sm'
//                       >
//                         Cancel
//                       </button>
//                     </div>
//                   </form>
//                 ) : (
//                   <div className='flex justify-between items-center'>
//                     <div>
//                       <p className='font-semibold text-gray-800'>{item.foodItem}</p>
//                       <p className='text-sm font-bold text-green-600'>₹{item.price}</p>
//                     </div>

//                     <div className='flex items-center gap-3'>
//                       <button
//                         onClick={() => handleEditClick(item)}
//                         className='text-blue-400 hover:text-blue-600 transition'
//                       >
//                         <Pencil size={18} />
//                       </button>

//                       <button
//                         onClick={() => deleteItem(item._id)}
//                         disabled={isDeleting}
//                         className='text-red-400 hover:text-red-600 transition disabled:opacity-50'
//                       >
//                         <Trash2 size={18} />
//                       </button>
//                     </div>
//                   </div>
//                 )}
//               </li>
//             ))}
//           </ul>
//         )}
//       </div>
//     </div>
//   )
// }

// export default ViewAllFoodItems
















import React, { useEffect, useState } from 'react'
import { X, Loader, Pencil, Trash2 } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { crudStore } from '../stores/crud.store'
import toast from 'react-hot-toast'

const ViewAllFoodItems = () => {
  const { items, getAllItem, isReading, deleteItem, isDeleting, updateItem, isUpdating } = crudStore()
  const navigate = useNavigate()

  const [editingItem, setEditingItem] = useState(null)
  const [editForm, setEditForm] = useState({ foodItem: '', price: '' })

  useEffect(() => {
    getAllItem()
  }, [])

  const handleEditClick = (item) => {
    setEditingItem(item._id)
    setEditForm({ foodItem: item.foodItem, price: item.price })
  }

  const handleEditSubmit = async (e) => {
    e.preventDefault()

    if (!editForm.foodItem.trim()) {
      toast.error("Food item name is required")
      return
    }
    if (!editForm.price || Number(editForm.price) <= 0) {
      toast.error("Enter a valid price")
      return
    }

    await updateItem(editingItem, {
      foodItem: editForm.foodItem,
      price: Number(editForm.price)
    })

    setEditingItem(null)
    setEditForm({ foodItem: '', price: '' })
  }

  const handleCancelEdit = () => {
    setEditingItem(null)
    setEditForm({ foodItem: '', price: '' })
  }

  // ✅ Confirmation toast before deleting
  const handleDeleteClick = (id, name) => {
    toast((t) => (
      <div className='flex flex-col gap-2'>
        <p className='font-semibold text-gray-800'>Delete <span className='text-red-500'>"{name}"</span>?</p>
        <p className='text-sm text-gray-500'>This action cannot be undone.</p>
        <div className='flex gap-2 mt-1'>
          <button
            onClick={() => {
              deleteItem(id)
              toast.dismiss(t.id)
            }}
            className='flex-1 bg-red-500 text-white py-1.5 rounded-lg hover:bg-red-600 transition text-sm font-semibold'
          >
            Yes, Delete
          </button>
          <button
            onClick={() => toast.dismiss(t.id)}
            className='flex-1 bg-gray-200 text-gray-700 py-1.5 rounded-lg hover:bg-gray-300 transition text-sm font-semibold'
          >
            Cancel
          </button>
        </div>
      </div>
    ), {
      duration: 5000,  // auto dismisses after 5s
      style: { minWidth: '260px' }
    })
  }

  const sortedItems = [...items].sort((a, b) =>
    a.foodItem.localeCompare(b.foodItem)
  )

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
        ) : sortedItems.length === 0 ? (
          <p className='text-center text-gray-400 py-8'>No items found.</p>
        ) : (
          <ul className='space-y-3 max-h-[70vh] overflow-y-auto'>
            {sortedItems.map((item) => (
              <li
                key={item._id}
                className='border rounded-xl px-4 py-3 hover:bg-gray-50 transition'
              >
                {editingItem === item._id ? (
                  <form onSubmit={handleEditSubmit} className='space-y-2'>
                    <input
                      type='text'
                      id='editFoodItem'
                      name='foodItem'
                      value={editForm.foodItem}
                      onChange={(e) => setEditForm({ ...editForm, foodItem: e.target.value })}
                      className='w-full border p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
                      placeholder='Food item name'
                    />
                    <input
                      type='number'
                      id='editPrice'
                      name='price'
                      value={editForm.price}
                      onChange={(e) => setEditForm({ ...editForm, price: e.target.value })}
                      className='w-full border p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
                      placeholder='Price'
                    />
                    <div className='flex gap-2'>
                      <button
                        type='submit'
                        disabled={isUpdating}
                        className='flex-1 bg-blue-600 text-white py-1.5 rounded-lg hover:bg-blue-700 transition disabled:opacity-50 text-sm'
                      >
                        {isUpdating ? 'Saving...' : 'Save'}
                      </button>
                      <button
                        type='button'
                        onClick={handleCancelEdit}
                        className='flex-1 bg-gray-200 text-gray-700 py-1.5 rounded-lg hover:bg-gray-300 transition text-sm'
                      >
                        Cancel
                      </button>
                    </div>
                  </form>
                ) : (
                  <div className='flex justify-between items-center'>
                    <div>
                      <p className='font-semibold text-gray-800'>{item.foodItem}</p>
                      <p className='text-sm font-bold text-green-600'>₹{item.price}</p>
                    </div>

                    <div className='flex items-center gap-3'>
                      <button
                        onClick={() => handleEditClick(item)}
                        className='text-blue-400 hover:text-blue-600 transition'
                      >
                        <Pencil size={18} />
                      </button>

                      {/* ✅ now calls handleDeleteClick instead of deleteItem directly */}
                      <button
                        onClick={() => handleDeleteClick(item._id, item.foodItem)}
                        disabled={isDeleting}
                        className='text-red-400 hover:text-red-600 transition disabled:opacity-50'
                      >
                        <Trash2 size={18} />
                      </button>
                    </div>
                  </div>
                )}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}

export default ViewAllFoodItems