import Order from "../models/order.model.js"

export const placeOrder = async (req, res) => {
  try {
    const { tableNumber, items } = req.body

    if (!tableNumber || !items || items.length === 0) {
      return res.status(400).json({ message: "Table number and items are required" })
    }

    const totalPrice = items.reduce((sum, item) => sum + item.price * item.quantity, 0)

    const newOrder = await Order.create({ tableNumber, items, totalPrice })
    res.status(201).json(newOrder)

  } catch (error) {
    res.status(500).json({ message: error.message || "Order not placed" })
  }
}

export const getOrderByTable = async (req, res) => {
  try {
    const { tableNumber } = req.params

    const order = await Order.findOne({ 
      tableNumber, 
      status: "pending" 
    }).sort({ createdAt: -1 }) // ✅ get latest pending order

    if (!order) {
      return res.status(404).json({ message: "No active order for this table" })
    }

    res.status(200).json(order)

  } catch (error) {
    res.status(500).json({ message: error.message || "Cannot get order" })
  }
}

export const completeOrder = async (req, res) => {
  try {
    const { tableNumber } = req.params

    const order = await Order.findOneAndUpdate(
      { tableNumber, status: "pending" },
      { status: "completed" },
      { new: true }
    )

    if (!order) {
      return res.status(404).json({ message: "No active order found" })
    }

    res.status(200).json(order)

  } catch (error) {
    res.status(500).json({ message: error.message || "Cannot complete order" })
  }
}