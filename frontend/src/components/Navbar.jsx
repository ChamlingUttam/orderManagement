import React, { useEffect, useState } from "react";
import { X } from "lucide-react";
import PageSkeleton from "../skeleton/PageSkeleton";

const Navbar = () => {
  const [showForm, setShowForm] = useState(false);
  const [addTables,setAddTables] = useState(false)

  useEffect(() => {
    if (showForm) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showForm]);

  return (
    <>
      <nav className="w-full px-6 py-3 bg-white shadow flex justify-between items-center">
        <h1 className="text-2xl font-bold">Admin</h1>

        <div className="flex items-center space-x-6">
          <ul className="flex items-center space-x-6">
            <li onClick={()=>setAddTables(true)} className="cursor-pointer text-xl font-semibold hover:text-blue-600 transition">
              Add Tables
            </li>
            <li
              onClick={() => setShowForm(true)}
              className="cursor-pointer text-xl font-semibold hover:text-blue-600 transition"
            >
              Add Items
            </li>
          </ul>

          <button className="bg-red-500 text-white px-4 py-1.5 rounded-lg hover:bg-red-600 transition cursor-pointer">
            Logout
          </button>
        </div>
      </nav>

      <PageSkeleton/>
    {addTables && (
      
        <PageSkeleton/>
      
      )}
      
      {showForm && (
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

            <form className="space-y-3">
              <input
                type="text"
                placeholder="Enter name"
                className="w-full border p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="number"
                placeholder="Enter price"
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
    </>
  );
};

export default Navbar;
