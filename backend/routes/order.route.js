import express from 'express'
import { placeOrder, getOrderByTable, completeOrder } from '../controller/order.controller.js'
import { protectedRoute } from '../middleware/auth.middleware.js'

const orderRouter = express.Router()

// ✅ protectedRoute only — both admin and user can access
orderRouter.post('/place', protectedRoute, placeOrder)
orderRouter.get('/:tableNumber', protectedRoute, getOrderByTable)
orderRouter.put('/complete/:tableNumber', protectedRoute, completeOrder)

export default orderRouter