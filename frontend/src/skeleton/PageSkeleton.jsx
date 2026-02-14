import React from 'react'

const PageSkeleton = () => {
  return (
    <div>
      <div className="w-full mt-8 flex justify-center items-center">
        <div className=" border-2 w-full max-w-md px-4 py-4 flex justify-between items-center">
          <h1 className="text-red-500 font-bold">Table1</h1>
          <button className="bg-green-400 cursor-pointer px-4 py-2 w-24 text-md border-none rounded-xl text-white font-bold">ORDER</button>
        </div>

      </div>

    </div>
  )
}

export default PageSkeleton
