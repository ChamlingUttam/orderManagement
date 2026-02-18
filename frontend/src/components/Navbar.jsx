// import React, { useEffect, useState } from "react";
// import { X } from "lucide-react";
// import PageSkeleton from "../skeleton/PageSkeleton";
// import { authStore } from "../stores/auth.store";
// import { tableStore } from "../stores/table.store";
// import { useNavigate } from "react-router-dom";
// import toast from "react-hot-toast";
// import AddItem from "../Layouts/AddItem";

// const Navbar = () => {
//   const [showForm, setShowForm] = useState(false);
//   const { logout, authUser } = authStore();
//   const navigate = useNavigate();

//   const {
//     tables,
//     getTables,
//     createTable,
//     isCreatingTable,
//     isGettingTable,
//   } = tableStore();

//   useEffect(() => {
//     getTables();
//   }, []);

//   const handleLogout = () => {
//     logout();
//     navigate("/login");
//   };

//   // ✅ Add Table
//   const handleAddTables = async () => {
//     if (authUser.role !== "admin") {
//       toast.error("Only admin can access");
//       return;
//     }

//     await createTable(); // backend generates number
//   };

//   // ✅ Open Add Item Modal
//   const handleAddItem = () => {
//     if (authUser.role !== "admin") {
//       toast.error("Only admin can access");
//       return;
//     }
//     setShowForm(true);
//   };

//   // ✅ Handle Item Submit (currently frontend only)
 

//   // ✅ Prevent scroll when modal open
//   useEffect(() => {
//     document.body.style.overflow = showForm ? "hidden" : "auto";
//     return () => {
//       document.body.style.overflow = "auto";
//     };
//   }, [showForm]);

//   return (
//     <>
//       {/* NAVBAR */}
//       <nav className="fixed top-0 w-full px-6 py-4 bg-white shadow flex justify-between items-center z-40">
//         <h1 className="text-2xl font-bold">
//           {authUser.role === "admin" ? "Admin" : "User"}
//         </h1>

//         <div className="flex items-center space-x-6">
//           <ul className="flex items-center space-x-6">
//             <li
//               onClick={handleAddTables}
//               className={`cursor-pointer text-lg font-semibold hover:text-blue-600 transition ${
//                 isCreatingTable ? "opacity-50 pointer-events-none" : ""
//               }`}
//             >
//               Add Tables
//             </li>

//             <li
//               onClick={handleAddItem}
//               className="cursor-pointer text-lg font-semibold hover:text-blue-600 transition"
//             >
//               Add Items
//             </li>

//             <li className="cursor-pointer text-lg font-semibold hover:text-blue-600 transition">
//               All Items
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

//       {/* TABLES SECTION */}
//       <div className="pt-24 px-6 space-y-6">
//         {isGettingTable ? (
//           <p>Loading tables...</p>
//         ) : (
//           tables.map((table) => (
//             <PageSkeleton
//               key={table._id}
//               number={table.number}
//             />
//           ))
//         )}
//       </div>

//       {/* ADD ITEM MODAL */}
//      <AddItem/>
//     </>
//   );
// };

// export default Navbar;












import React, { useEffect, useState } from "react";
import PageSkeleton from "../skeleton/PageSkeleton";
import { authStore } from "../stores/auth.store";
import { tableStore } from "../stores/table.store";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import AddItem from "../Layouts/AddItem";
import GetAllItem from "../Layouts/GetAllItem";

const Navbar = () => {
  const [showForm, setShowForm] = useState(false);
  const { logout, authUser } = authStore();
  const [showItem,setShowItem] = useState(false)
  const navigate = useNavigate();

  const {
    tables,
    getTables,
    createTable,
    isCreatingTable,
    isGettingTable,
  } = tableStore();

  useEffect(() => {
    getTables();
  }, []);

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  const handleAddTables = async () => {
    if (authUser.role !== "admin") {
      toast.error("Only admin can access");
      return;
    }

    await createTable();
  };

  const handleAddItem = () => {
    if (authUser.role !== "admin") {
      toast.error("Only admin can access");
      return;
    }

    setShowForm(true);
  };

  useEffect(() => {
    document.body.style.overflow = showForm ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showForm]);

  return (
    <>
      <nav className="fixed top-0 w-full px-6 py-4 bg-white shadow flex justify-between items-center z-40">
        <h1 className="text-2xl font-bold">
          {authUser.role === "admin" ? "Admin" : "User"}
        </h1>

        <div className="flex items-center space-x-6">
          <ul className="flex items-center space-x-6">
            <li
              onClick={()=>setShowItem(true)}
              className="cursor-pointer text-lg font-semibold hover:text-blue-600 transition ">
              All Items
            </li>
            <li
              onClick={handleAddTables}
              className={`cursor-pointer text-lg font-semibold hover:text-blue-600 transition ${
                isCreatingTable ? "opacity-50 pointer-events-none" : ""
              }`}
            >
              Add Tables
            </li>

            <li
              onClick={handleAddItem}
              className="cursor-pointer text-lg font-semibold hover:text-blue-600 transition"
            >
              Add Items
            </li>
          </ul>

          <button
            onClick={handleLogout}
            className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition"
          >
            Logout
          </button>
        </div>
      </nav>

      <div className="pt-24 px-6 space-y-6">
        {isGettingTable ? (
          <p>Loading tables...</p>
        ) : (
          tables.map((table) => (
            <PageSkeleton key={table._id} number={table.number} />
          ))
        )}
      </div>

      {/* Pass props here */}
      <AddItem showForm={showForm} setShowForm={setShowForm} />

      {showItem && (
        <GetAllItem/>
      )}
    </>
  );
};

export default Navbar;
