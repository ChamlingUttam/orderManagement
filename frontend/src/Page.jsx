import { useState, useEffect } from "react";
import { Plus, X } from "lucide-react";

export default function Page() {
  const [showForm, setShowForm] = useState(false);

  // Disable scroll when modal opens
  useEffect(() => {
    if (showForm) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [showForm]);

  return (
    <div className="relative min-h-screen bg-gray-100 p-6">

      {/* Top Right Add Icon */}
      <div className="flex justify-end">
        <button
          onClick={() => setShowForm(true)}
          className="p-2 bg-blue-600 text-white rounded-full shadow-md hover:bg-blue-700 transition"
        >
          <Plus size={20} />
        </button>
      </div>

      <h1 className="text-2xl font-bold mt-6">Dashboard Content</h1>

      {/* Modal */}
      {showForm && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black/40 z-50 transition-opacity duration-300"
          onClick={() => setShowForm(false)} // close on outside click
        >
          {/* Stop propagation so clicking inside doesn't close */}
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-white p-6 rounded-2xl shadow-2xl w-96 relative animate-scaleIn"
          >
            {/* Close Button */}
            <button
              onClick={() => setShowForm(false)}
              className="absolute top-3 right-3  text-gray-500 hover:text-red-500 transition"
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
                Submit
              </button>
            </form>
          </div>
        </div>
      )}

    </div>
  );
}
