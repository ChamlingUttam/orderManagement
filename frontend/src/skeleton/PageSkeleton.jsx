// import React, { useState } from "react";

// const PageSkeleton = ({ number }) => {
//   const [showItems, setShowItems] = useState(false);

//   return (
//     <div className="w-full mt-8 flex justify-center items-center">
//       <div className="border-2 w-full max-w-md px-4 py-4 flex justify-between items-center">
//         <h1 className="text-red-500 font-bold">
//           Table {number}
//         </h1>

//         <div className="flex space-x-2">
//           <button className="bg-green-500 px-4 py-2 w-24 rounded-xl text-white font-bold">
//             PREVIEW
//           </button>

//           <button
//             onClick={() => setShowItems(!showItems)}
//             className="bg-red-500 px-4 py-2 w-24 rounded-xl text-white font-bold"
//           >
//             ORDER
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PageSkeleton;







import React from 'react'
import OrderBtn from '../components/OrderBtn'
import PreviewBtn from '../components/PreviewBtn'

const PageSkeleton = ({ number }) => {
  return (
    <div className="w-full mt-8 flex justify-center items-center">
      <div className="border-2 w-full max-w-md px-4 py-4 flex justify-between items-center">
        <h1 className="text-red-500 font-bold">Table {number}</h1>

        <div className="flex space-x-2">
          <PreviewBtn tableNumber={number} />
          <OrderBtn tableNumber={number} />
        </div>
      </div>
    </div>
  )
}

export default PageSkeleton