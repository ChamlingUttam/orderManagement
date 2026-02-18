import toast from "react-hot-toast";
import { api } from "../configs/api";
import { create } from "zustand";

export const tableStore = create((set) => ({
  tables: [],
  isCreatingTable: false,
  isGettingTable: false,

  createTable: async () => {
    set({ isCreatingTable: true });
    try {
      const res = await api.post("/table/addTable");
      set((state) => ({
        tables: [...state.tables, res.data],
      }));
      toast.success("New Table Added");
    } catch (error) {
      toast.error("Cannot create table");
    } finally {
      set({ isCreatingTable: false });
    }
  },

  getTables: async () => {
    set({ isGettingTable: true });
    try {
      const res = await api.get("/table/getTable");
      set({ tables: res.data });
    } catch (error) {
      toast.error("Cannot get tables");
    } finally {
      set({ isGettingTable: false });
    }
  },
}));
