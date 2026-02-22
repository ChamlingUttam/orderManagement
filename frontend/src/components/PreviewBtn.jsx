import React, { useState } from 'react'
import { X, Loader } from 'lucide-react'
import { orderStore } from '../stores/order.store'
import { authStore } from '../stores/auth.store'

const PreviewBtn = ({ tableNumber }) => {
  const [showModal, setShowModal] = useState(false)
  const { order, getOrderByTable, isGetting, clearOrder, completeOrder, isCompleting } = orderStore()
  const { authUser } = authStore()

  const handleClick = async () => {
    setShowModal(true)
    await getOrderByTable(tableNumber)
  }

  const handleClose = () => {
    setShowModal(false)
    clearOrder()
  }

  return (
    <>
      <button
        onClick={handleClick}
        className="bg-green-500 px-4 py-2 w-24 rounded-xl text-white font-bold hover:bg-green-600 transition"
      >
        PREVIEW
      </button>

      {showModal && (
        <div
          className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 px-4"
          onClick={handleClose}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-white rounded-2xl shadow-2xl w-full max-w-md p-6 relative"
          >
            <button
              onClick={handleClose}
              className="absolute top-3 right-3 text-gray-400 hover:text-red-500 transition"
            >
              <X size={20} />
            </button>

            <h2 className="text-lg font-bold mb-1">Table {tableNumber} — Preview</h2>
            <p className="text-sm text-gray-400 mb-4">Current active order</p>

            {isGetting ? (
              <div className="flex justify-center py-8">
                <Loader className="animate-spin text-gray-400" />
              </div>
            ) : !order ? (
              <p className="text-center text-gray-400 py-8">No active order for this table.</p>
            ) : (
              <>
                <ul className="space-y-3 max-h-72 overflow-y-auto">
                  {order.items.map((item, index) => (
                    <li
                      key={index}
                      className="flex justify-between items-center border rounded-xl px-4 py-3"
                    >
                      <div>
                        <p className="font-semibold text-gray-800">{item.foodItem}</p>
                        <p className="text-sm text-gray-500">x{item.quantity}</p>
                      </div>
                      <p className="font-bold text-green-600">
                        ₹{item.price * item.quantity}
                      </p>
                    </li>
                  ))}
                </ul>

                <div className="mt-4 border-t pt-4 flex justify-between items-center">
                  <span className="font-bold text-gray-700 text-lg">Total</span>
                  <span className="font-bold text-green-600 text-xl">₹{order.totalPrice}</span>
                </div>

                {/* ✅ Only admin can mark order as complete */}
                {authUser?.role === "admin" && (
                  <button
                    onClick={() => completeOrder(tableNumber)}
                    disabled={isCompleting}
                    className="w-full mt-4 bg-green-500 text-white py-2 rounded-xl hover:bg-green-600 transition font-bold disabled:opacity-50"
                  >
                    {isCompleting ? "Completing..." : "Mark as Completed"}
                  </button>
                )}
              </>
            )}
          </div>
        </div>
      )}
    </>
  )
}

export default PreviewBtn