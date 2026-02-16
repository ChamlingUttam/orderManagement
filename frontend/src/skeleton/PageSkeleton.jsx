import React, { useState } from 'react'
import OrderLayout from '../Layouts/OrderLayout'

const PageSkeleton = ({number}) => {
  const [showItems,setShowItems] = useState(false)
  return (
    <div>
      <div className="w-full mt-8 flex justify-center items-center">
        <div className=" border-2 w-full max-w-md px-4 py-4 flex justify-between items-center">
          <h1 className="text-red-500 font-bold">Table {number}</h1>
          <div className='flex space-x-2'>
            <button  className="bg-green-500 cursor-pointer px-4 py-2 w-24 text-md border-none rounded-xl text-white font-bold">PREVIEW</button>
          <button onClick={()=>setShowItems(!showItems)} className="bg-red-500 cursor-pointer px-4 py-2 w-24 text-md border-none rounded-xl text-white font-bold">ORDER</button>
          </div>
        </div>

        {showItems && (
          <div className='z-50 flex justify-center items-center'>
            <OrderLayout/>
          </div>
        )}

      </div>

    </div>
  )
}

export default PageSkeleton
