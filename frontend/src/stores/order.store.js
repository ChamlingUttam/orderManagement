import { api } from "../configs/api"
import { create } from "zustand"
import toast from "react-hot-toast"

export const orderStore = create((set) => ({
  order: null,
  isPlacing: false,
  isGetting: false,
  isCompleting: false,

  placeOrder: async (tableNumber, items) => {
    set({ isPlacing: true })
    try {
      const res = await api.post("/order/place", { tableNumber, items })
      set({ order: res.data })
      toast.success("Order placed successfully!")
      return res.data
    } catch (error) {
      toast.error(error.response?.data?.message || "Can't place order")
    } finally {
      set({ isPlacing: false })
    }
  },

  getOrderByTable: async (tableNumber) => {
    set({ isGetting: true })
    try {
      const res = await api.get(`/order/${tableNumber}`)
      set({ order: res.data })
    } catch (error) {
      set({ order: null }) // no active order
    } finally {
      set({ isGetting: false })
    }
  },

  completeOrder: async (tableNumber) => {
    set({ isCompleting: true })
    try {
      await api.put(`/order/complete/${tableNumber}`)
      set({ order: null })
      toast.success("Order completed!")
    } catch (error) {
      toast.error(error.response?.data?.message || "Can't complete order")
    } finally {
      set({ isCompleting: false })
    }
  },

  clearOrder: () => set({ order: null })
}))