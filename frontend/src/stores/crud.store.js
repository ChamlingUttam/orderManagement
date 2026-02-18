import { api } from "../configs/api";
import { create } from "zustand";
import toast from "react-hot-toast";


export const crudStore = create((set)=>({
    items:[],
    isCreating:false,
    isUpdating:false,
    isDeleting:false,
    isReading:false,

    createItem:async(data)=>{
        set({isCreating:true})
        try {
            const res = await api.post("/crud/create",data)
            set((state)=>({
                items:[...state.items,res.data]
            }))
            toast.success("new item added")
        } catch (error) {
            toast.error("cant create the item")
        }finally{
            set({isCreating:false})
        }
    },

    updateItem : async(id,data)=>{

        set({isUpdating:true})

        try {
            const res = await api.put(`/crud/edit/${id}`,data)
           set((state)=>({
            items:state.map((item)=>
            item._id == id ? res.data : item
            )
           }))
            toast.success("updated")
            
        } catch (error) {
            toast.error("cant update the item")
        }finally{
            set({isUpdating:false})
        }
    },

    getAllItem:async()=>{
        set({isReading:true})
        try {
            const res = await api.get("/crud/get")
            set({items:res.data})
        } catch (error) {
            toast.error("cant read the item")
        }finally{
            set({isReading:false})
        }
    },

    deleteItem : async(id)=>{
        set({isDeleting:true})
        try {
             await api.delete(`/crud/delete/${id}`)
            set((state)=>({
                items:state.filter((item)=>
                item._id !== id
                )
            }))
            toast.success("successfully deleted")
        } catch (error) {
            toast.error("cant delete")
        }finally{
            set({isDeleting:false})
        }
    },
}))