// import React, { useState } from "react";
// import { X } from "lucide-react";
// import toast from "react-hot-toast";
// import { crudStore } from "../stores/crud.store";

// const AddItem = ({ showForm, setShowForm }) => {
//   const [formData, setFormData] = useState({
//     foodItem: "",
//     price: "",
//   });

//   const { createItem, isCreating } = crudStore();

//   const validateForm = () => {
//     if (!formData.foodItem || !formData.price) {
//       toast.error("Please fill all fields");
//       return false;
//     }
//     return true;
//   };

//   const handleSubmitItem = async (e) => {
//     e.preventDefault();

//     const success = validateForm();
//     if (!success) return;

//     await createItem({
//       ...formData,
//       price:Number(formData.price)
//     });

//     setFormData({
//       foodItem: "",
//       price: "",
//     });

//     setShowForm(false);
//   };

//   if (!showForm) return null;

//   return (
//     <div
//       className="fixed inset-0 flex items-center justify-center bg-black/40 z-50"
//       onClick={() => setShowForm(false)}
//     >
//       <div
//         onClick={(e) => e.stopPropagation()}
//         className="bg-white p-6 rounded-2xl shadow-2xl w-96 relative"
//       >
//         <button
//           onClick={() => setShowForm(false)}
//           className="absolute top-3 right-3 text-gray-500 hover:text-red-500 transition"
//         >
//           <X size={18} />
//         </button>

//         <h2 className="text-lg font-semibold mb-4">Add Item</h2>

//         <form onSubmit={handleSubmitItem} className="space-y-4">
//           <input
//             type="text"
//             placeholder="Enter Item name"
//             value={formData.foodItem}
//             onChange={(e) =>
//               setFormData({ ...formData, foodItem: e.target.value })
//             }
//             className="w-full border p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
//           />

//           <input
//             type="number"
//             placeholder="Enter item price"
//             value={formData.price}
//             onChange={(e) =>
//               setFormData({ ...formData, price: e.target.value })
//             }
//             className="w-full border p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
//           />

//           <button
//             type="submit"
//             disabled={isCreating}
//             className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition disabled:opacity-50"
//           >
//             {isCreating ? "Adding..." : "Add Item"}
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default AddItem;














import React, { useState } from "react"
import { X } from "lucide-react"
import toast from "react-hot-toast"
import { crudStore } from "../stores/crud.store"

const AddItem = ({ showForm, setShowForm }) => {
  const [formData, setFormData] = useState({ foodItem: "", price: "" })
  const { createItem, isCreating } = crudStore()

  const validateForm = () => {
    if (!formData.foodItem.trim()) {
      toast.error("Food item name is required")
      return false
    }
    if (!formData.price || Number(formData.price) <= 0) {
      toast.error("Enter a valid price")
      return false
    }
    return true
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!validateForm()) return

    await createItem({ ...formData, price: Number(formData.price) })
    setFormData({ foodItem: "", price: "" })
    setShowForm(false)
  }

  if (!showForm) return null

  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-black/40 z-50"
      onClick={() => setShowForm(false)}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-white p-6 rounded-2xl shadow-2xl w-96 relative"
      >
        <button
          onClick={() => setShowForm(false)}
          className="absolute top-3 right-3 text-gray-500 hover:text-red-500 transition"
        >
          <X size={18} />
        </button>

        <h2 className="text-lg font-semibold mb-4">Add Food Item</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Enter item name"
            value={formData.foodItem}
            onChange={(e) => setFormData({ ...formData, foodItem: e.target.value })}
            className="w-full border p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <input
            type="number"
            placeholder="Enter item price"
            value={formData.price}
            onChange={(e) => setFormData({ ...formData, price: e.target.value })}
            className="w-full border p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <button
            type="submit"
            disabled={isCreating}
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition disabled:opacity-50"
          >
            {isCreating ? "Adding..." : "Add Item"}
          </button>
        </form>
      </div>
    </div>
  )
}

export default AddItem