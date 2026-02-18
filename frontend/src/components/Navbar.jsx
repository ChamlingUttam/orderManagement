import React, { useEffect, useState } from "react";
import { X } from "lucide-react";
import PageSkeleton from "../skeleton/PageSkeleton";
import { authStore } from "../stores/auth.store";
import { tableStore } from "../stores/table.store";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const Navbar = () => {
  const [showForm, setShowForm] = useState(false);
  const [itemName, setItemName] = useState("");
  const [itemPrice, setItemPrice] = useState("");

  const { logout, authUser } = authStore();
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

  // ✅ Add Table
  const handleAddTables = async () => {
    if (authUser.role !== "admin") {
      toast.error("Only admin can access");
      return;
    }

    await createTable(); // backend generates number
  };

  // ✅ Open Add Item Modal
  const handleAddItem = () => {
    if (authUser.role !== "admin") {
      toast.error("Only admin can access");
      return;
    }
    setShowForm(true);
  };

  // ✅ Handle Item Submit (currently frontend only)
  const handleSubmitItem = (e) => {
    e.preventDefault();

    if (!itemName || !itemPrice) {
      toast.error("Please fill all fields");
      return;
    }

    // 🔥 For now just console log (backend connection can be added next)
    console.log("New Item:", {
      name: itemName,
      price: itemPrice,
    });

    toast.success("Item added (UI only)");

    setItemName("");
    setItemPrice("");
    setShowForm(false);
  };

  // ✅ Prevent scroll when modal open
  useEffect(() => {
    document.body.style.overflow = showForm ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showForm]);

  return (
    <>
      {/* NAVBAR */}
      <nav className="fixed top-0 w-full px-6 py-4 bg-white shadow flex justify-between items-center z-40">
        <h1 className="text-2xl font-bold">
          {authUser.role === "admin" ? "Admin" : "User"}
        </h1>

        <div className="flex items-center space-x-6">
          <ul className="flex items-center space-x-6">
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

            <li className="cursor-pointer text-lg font-semibold hover:text-blue-600 transition">
              All Items
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

      {/* TABLES SECTION */}
      <div className="pt-24 px-6 space-y-6">
        {isGettingTable ? (
          <p>Loading tables...</p>
        ) : (
          tables.map((table) => (
            <PageSkeleton
              key={table._id}
              number={table.number}
            />
          ))
        )}
      </div>

      {/* ADD ITEM MODAL */}
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

            <form onSubmit={handleSubmitItem} className="space-y-4">
              <input
                type="text"
                placeholder="Enter Item name"
                value={itemName}
                onChange={(e) => setItemName(e.target.value)}
                className="w-full border p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />

              <input
                type="number"
                placeholder="Enter item price"
                value={itemPrice}
                onChange={(e) => setItemPrice(e.target.value)}
                className="w-full border p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />

              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
              >
                Add Item
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
