import React from "react";

const Navbar = () => {
  return (
    <nav className="w-full px-6 py-3 bg-white shadow flex justify-between items-center">
      <h1 className="text-2xl font-bold">Admin</h1>

      <div className="flex items-center space-x-6">
        <ul className="flex items-center space-x-6">
          <li className="cursor-pointer text-xl font-semibold hover:text-blue-600 transition">
            Items
          </li>
          <li className="cursor-pointer text-xl font-semibold hover:text-blue-600 transition">
            Add Items
          </li>
        </ul>

        <button className="bg-red-500 text-white px-4 py-1.5 rounded-lg hover:bg-red-600 transition cursor-pointer">
          Logout
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
