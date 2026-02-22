import React, { useEffect, useState } from 'react'
import { X, Loader, Plus, Minus } from 'lucide-react'
import { crudStore } from '../stores/crud.store'
import { orderStore } from '../stores/order.store'

const OrderBtn = ({ tableNumber }) => {
  const [showModal, setShowModal] = useState(false)
  const [selectedItems, setSelectedItems] = useState({})

  const { items, getAllItem, isReading } = crudStore()
  const { placeOrder, isPlacing } = orderStore()

  useEffect(() => {
    if (showModal) getAllItem()
  }, [showModal])

  const handleQuantityChange = (item, delta) => {
    setSelectedItems((prev) => {
      const current = prev[item._id]?.quantity || 0
      const newQty = current + delta

      if (newQty <= 0) {
        const updated = { ...prev }
        delete updated[item._id]
        return updated
      }

      return { ...prev, [item._id]: { ...item, quantity: newQty } }
    })
  }

  const handleConfirmOrder = async () => {
    const orderItems = Object.values(selectedItems)
    if (orderItems.length === 0) return

    await placeOrder(tableNumber, orderItems)
    setShowModal(false)
    setSelectedItems({})
  }

  const totalPrice = Object.values(selectedItems).reduce(
    (sum, item) => sum + item.price * item.quantity, 0
  )

  return (
    <>
      <button
        onClick={() => setShowModal(true)}
        className="bg-red-500 px-4 py-2 w-24 rounded-xl text-white font-bold hover:bg-red-600 transition"
      >
        ORDER
      </button>

      {showModal && (
        <div
          className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 px-4"
          onClick={() => setShowModal(false)}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-white rounded-2xl shadow-2xl w-full max-w-md p-6 relative max-h-[90vh] flex flex-col"
          >
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-3 right-3 text-gray-400 hover:text-red-500 transition"
            >
              <X size={20} />
            </button>

            <h2 className="text-lg font-bold mb-1">Table {tableNumber} — Order</h2>
            <p className="text-sm text-gray-400 mb-4">Select items and quantity</p>

            {isReading ? (
              <div className="flex justify-center py-8">
                <Loader className="animate-spin text-gray-400" />
              </div>
            ) : items.length === 0 ? (
              <p className="text-center text-gray-400 py-8">No items available.</p>
            ) : (
              <ul className="space-y-3 overflow-y-auto flex-1">
                {[...items]
                  .sort((a, b) => a.foodItem.localeCompare(b.foodItem))
                  .map((item) => (
                    <li
                      key={item._id}
                      className="flex justify-between items-center border rounded-xl px-4 py-3"
                    >
                      <div>
                        <p className="font-semibold text-gray-800">{item.foodItem}</p>
                        <p className="text-sm text-green-600 font-bold">₹{item.price}</p>
                      </div>

                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => handleQuantityChange(item, -1)}
                          className="w-7 h-7 rounded-full bg-gray-200 hover:bg-gray-300 flex items-center justify-center transition"
                        >
                          <Minus size={14} />
                        </button>

                        <span className="w-6 text-center font-semibold text-gray-800">
                          {selectedItems[item._id]?.quantity || 0}
                        </span>

                        <button
                          onClick={() => handleQuantityChange(item, 1)}
                          className="w-7 h-7 rounded-full bg-red-500 hover:bg-red-600 text-white flex items-center justify-center transition"
                        >
                          <Plus size={14} />
                        </button>
                      </div>
                    </li>
                  ))}
              </ul>
            )}

            <div className="mt-4 border-t pt-4 space-y-3">
              <div className="flex justify-between items-center">
                <span className="font-semibold text-gray-700">Total</span>
                <span className="font-bold text-green-600 text-lg">₹{totalPrice}</span>
              </div>

              <button
                onClick={handleConfirmOrder}
                disabled={isPlacing || Object.keys(selectedItems).length === 0}
                className="w-full bg-red-500 text-white py-2 rounded-xl hover:bg-red-600 transition font-bold disabled:opacity-50"
              >
                {isPlacing ? "Placing Order..." : "Confirm Order"}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default OrderBtn