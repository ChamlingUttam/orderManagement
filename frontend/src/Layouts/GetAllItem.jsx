// import React, { useState } from 'react'

const GetAllItem = () => {

   

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/40 z-50">
      
<div
        onClick={(e) => e.stopPropagation()}
        className="bg-white p-6 rounded-2xl shadow-2xl w-96 relative"
      >

       <button
                // onClick={() =>(false)}
                className="absolute top-3 right-3 text-gray-500 hover:text-red-500 transition"
                >
                <X size={18} />
              </button>
                  </div>
    </div>

  )
}

export default GetAllItem
