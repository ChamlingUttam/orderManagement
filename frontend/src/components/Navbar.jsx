import React, { useEffect, useState } from "react";
import { X } from "lucide-react";
import PageSkeleton from "../skeleton/PageSkeleton";
import { authStore } from "../stores/auth.store";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const Navbar = () => {
  const [showForm, setShowForm] = useState(false);
  const [tables, setTables] = useState([]);

  const{logout,authUser} = authStore()

  const navigate = useNavigate()

  const handleLogout = ()=>{
    logout()
    navigate("/login")
  }

  const handleAddItem =  ()=>{
    if(authUser.role !=="admin"){
      toast.error("only admin can access")
      return
    }
    setShowForm(true)
  }

 
  useEffect(() => {
    document.body.style.overflow = showForm ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showForm]);

  const handleAddTables = () => {
    if(authUser.role !=="admin"){
      toast.error("only admin can access")
      return
    }
    setTables((prev) => [...prev, prev.length + 1]);
  };


  const handleShowItems = ()=>{


  }


  return (
    <>
      <nav className="fixed top-0 w-full px-6 py-4 bg-white shadow flex justify-between items-center z-40">
        <h1 className="text-2xl font-bold">{authUser.role ==="admin" ? "Admin" : "User"}</h1>

        <div className="flex items-center space-x-6">
          <ul className="flex items-center space-x-6">
            <li
              onClick={handleAddTables}
              className="cursor-pointer text-lg font-semibold hover:text-blue-600 transition"
            >
              Add Tables
            </li>

            <li
            onClick={handleShowItems}
            className="cursor-pointer text-lg font-semibold hover:text-blue-600 transition">
              All Items
            </li>

            <li
              onClick={handleAddItem}
              className="cursor-pointer text-lg font-semibold hover:text-blue-600 transition"
            >
              Add Items
            </li>
          </ul>

          <button onClick={handleLogout} className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition">
            Logout
          </button>
        </div>
      </nav>

      <div className="pt-24 px-6 space-y-6">
        {tables.map((number) => (
          <PageSkeleton key={number} number={number} />
        ))}

        
        {showForm && authUser.role =="admin" && (
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

              <h2 className="text-lg font-semibold mb-4">Add Item</h2>

              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Enter Item name"
                  className="w-full border p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                  type="number"
                  placeholder="Enter item price"
                  className="w-full border p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
                >
                  Add
                </button>
              </form>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Navbar;










































// import React, { useEffect, useState } from "react";
// import { X } from "lucide-react";
// import PageSkeleton from "../skeleton/PageSkeleton";
// import { authStore } from "../stores/auth.store";
// import { useNavigate } from "react-router-dom";
// import toast from "react-hot-toast";
// import { api } from "../utils/api";

// const Navbar = () => {
//   const [showForm, setShowForm] = useState(false);
//   const [tables, setTables] = useState([]);
//   const { logout, authUser } = authStore();
//   const navigate = useNavigate();

//   // Fetch tables from backend on mount
//   useEffect(() => {
//     const fetchTables = async () => {
//       try {
//         const res = await api.get("/tables"); // GET /api/tables
//         setTables(res.data.map((t) => t.number));
//       } catch (error) {
//         console.log(error);
//         toast.error("Failed to fetch tables");
//       }
//     };
//     fetchTables();
//   }, []);

//   // Logout function
//   const handleLogout = () => {
//     logout();
//     navigate("/login");
//   };

//   // Add new table
//   const handleAddTables = async () => {
//     if (authUser.role !== "admin") {
//       toast.error("Only admin can access");
//       return;
//     }

//     try {
//       const nextNumber = tables.length + 1;
//       const res = await api.post("/tables", { number: nextNumber }); // POST /api/tables
//       setTables((prev) => [...prev, res.data.number]);
//       toast.success(`Table ${res.data.number} added`);
//     } catch (error) {
//       toast.error(error.response?.data?.message || "Failed to add table");
//     }
//   };

//   // Show Add Item modal
//   const handleAddItem = () => {
//     if (authUser.role !== "admin") {
//       toast.error("Only admin can access");
//       return;
//     }
//     setShowForm(true);
//   };

//   // Prevent scroll when modal is open
//   useEffect(() => {
//     document.body.style.overflow = showForm ? "hidden" : "auto";
//     return () => {
//       document.body.style.overflow = "auto";
//     };
//   }, [showForm]);

//   // Placeholder for All Items (you can implement later)
//   const handleShowItems = () => {
//     toast("All Items feature coming soon!");
//   };

//   return (
//     <>
//       {/* Navbar */}
//       <nav className="fixed top-0 w-full px-6 py-4 bg-white shadow flex justify-between items-center z-40">
//         <h1 className="text-2xl font-bold">
//           {authUser.role === "admin" ? "Admin" : "User"}
//         </h1>

//         <div className="flex items-center space-x-6">
//           <ul className="flex items-center space-x-6">
//             <li
//               onClick={handleAddTables}
//               className="cursor-pointer text-lg font-semibold hover:text-blue-600 transition"
//             >
//               Add Tables
//             </li>

//             <li
//               onClick={handleShowItems}
//               className="cursor-pointer text-lg font-semibold hover:text-blue-600 transition"
//             >
//               All Items
//             </li>

//             <li
//               onClick={handleAddItem}
//               className="cursor-pointer text-lg font-semibold hover:text-blue-600 transition"
//             >
//               Add Items
//             </li>
//           </ul>

//           <button
//             onClick={handleLogout}
//             className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition"
//           >
//             Logout
//           </button>
//         </div>
//       </nav>

//       {/* Tables */}
//       <div className="pt-24 px-6 space-y-6">
//         {tables.map((number) => (
//           <PageSkeleton key={number} number={number} />
//         ))}

//         {/* Add Item Modal */}
//         {showForm && authUser.role === "admin" && (
//           <div
//             className="fixed inset-0 flex items-center justify-center bg-black/40 z-50"
//             onClick={() => setShowForm(false)}
//           >
//             <div
//               onClick={(e) => e.stopPropagation()}
//               className="bg-white p-6 rounded-2xl shadow-2xl w-96 relative"
//             >
//               <button
//                 onClick={() => setShowForm(false)}
//                 className="absolute top-3 right-3 text-gray-500 hover:text-red-500 transition"
//               >
//                 <X size={18} />
//               </button>

//               <h2 className="text-lg font-semibold mb-4">Add Item</h2>

//               <form className="space-y-4">
//                 <input
//                   type="text"
//                   placeholder="Enter Item name"
//                   className="w-full border p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 />
//                 <input
//                   type="number"
//                   placeholder="Enter item price"
//                   className="w-full border p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 />
//                 <button
//                   type="submit"
//                   className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
//                 >
//                   Add
//                 </button>
//               </form>
//             </div>
//           </div>
//         )}
//       </div>
//     </>
//   );
// };

// export default Navbar;
